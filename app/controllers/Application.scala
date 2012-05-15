package controllers

import play.api._
import play.api.mvc._
import net.oauth.signature.RSA_SHA1
import net.oauth.OAuthConsumer
import com.atlassian.labs.remoteapps.apputils.OAuthContext
import java.net.URLDecoder
import models.{Statistic, User, Consumer}
import scala.None

object Application extends Controller {

  private val oauthContext = new OAuthContext()

  def index = Action {
    Ok(views.html.index("Your new application is ready. Pouet!"))
  }
  
  def register = Action { request =>
    val publicKey: String = oauthContext.getLocal.getProperty(RSA_SHA1.PUBLIC_KEY).asInstanceOf[String]
    val keyParams = request.queryString.get("key")
    val publicKeyParams = request.queryString.get("publicKey")
    val baseUrlParams = request.queryString.get("baseUrl")
    (keyParams, publicKeyParams, baseUrlParams) match {
      case (None, _, _) => BadRequest("'key' parameter is missing")
      case (_, None, _) => BadRequest("'publicKey' parameter is missing")
      case (_, _, None) => BadRequest("'baseUrl' parameter is missing")
      case (Some(keys), Some(consumerPublicKeys), Some(baseUrls)) => {
        val key = keys.head
        val consumerPublicKey = consumerPublicKeys.head
        val baseUrl = baseUrls.head
        val consumer = Consumer.getByKey(key)
        consumer.foreach(c => Consumer.delete(c.id))

        if (keyParams.size > 0) {
          Consumer.create(key, consumerPublicKey, baseUrl)
        }

        Ok(views.xml.descriptor(publicKey))
      }
    }
  }

  def events = TODO

  private val Authorization = """OAuth oauth_consumer_key="([^"]*)", oauth_signature_method="([^"]*)", oauth_timestamp="(\d+)", oauth_nonce="(\d+)", oauth_version="([^"]*)", oauth_signature="([^"]*)"""".r

  def newEvent(event: String) = Action(parse.json) { request =>

    val Authorization(encodedConsumerKey, _, _, _, _, _) = request.headers("AUTHORIZATION")
    val consumer = Consumer.getByKey(URLDecoder.decode(encodedConsumerKey, "UTF-8"))
    consumer match {
      case None => BadRequest("'oauth_consumer_key' is unknown")
      case Some(cons) => {
        val username = request.body \ "user"
        val user = User.getOrCreate(cons, username.toString())
        event match {
          case "issue_created" => Statistic.createOrUpdate(user.id, 1, 0, 0)
          case "issue_resolved" => Statistic.createOrUpdate(user.id, 0, 1, 0)
          case "issue_closed" => Statistic.createOrUpdate(user.id, 0, 0, 1)
        }
      }
    }

    Ok("Event received " + event)
  }

  def userProfile() = Action { request =>
    request.queryString.get("oauth_consumer_key") match {
      case None => BadRequest("'oauth_consumer_key' parameter is missing")
      case Some(consumerKeys) => {

        Consumer.getByKey(consumerKeys.head) match {
          case None => BadRequest("Unknown consumer. Please reinstall the remote app.")
          case Some(consumer) => {
            request.queryString.get("user_id") match {
              case None => BadRequest("'user_id' parameter missing")
              case Some(usernames) => {
                val username = usernames.head
                val user = User.getByUsername(consumer, username).getOrElse(User.create(consumer.id, username).get)
                Ok(views.html.userprofile(user.username))
              }
            }
          }
        }
      }

    }
  }
}
