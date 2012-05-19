import models.{Statistic, Consumer, User}
import play.api.libs.concurrent.Promise
import play.api.libs.ws.WS
import play.api.{Application, GlobalSettings}
import utils.OAuthContext._

object Global extends GlobalSettings {
  override def onStart(app: Application) {
    User.onCreate = initUser _ :: User.onCreate
  }

  def initUser(user: User) {
    Consumer.getById(user.consumersId) match {
      case None =>
      case Some(consumer) => {
        val createdWs = WS.url(consumer.baseUrl + "/rest/api/2/search?user_id=admin&jql=reporter+%3D+" + user.username).sign("GET").get()
        val resolvedWs = WS.url(consumer.baseUrl + "/rest/api/2/search?user_id=admin&jql=status+was+Resolved+by+" + user.username).sign("GET").get()
        val closedWs = WS.url(consumer.baseUrl + "/rest/api/2/search?user_id=admin&jql=status+was+Closed+by+" + user.username).sign("GET").get()

        Promise.sequence(Seq(createdWs, resolvedWs, closedWs)).onRedeem(responses => {
          responses match {
            case Seq(created, resolved, closed) => {
              Statistic.createOrUpdate(user.id, (created.json \ "total").as[Int], (resolved.json \ "total").as[Int], (closed.json \ "total").as[Int])
            }
          }
        })
      }
    }

  }
}
