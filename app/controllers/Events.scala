package controllers

import play.api.mvc.Controller
import models.{Statistic, User}
import utils.OAuthHelper._

object Events extends Controller {

  def newEvent(event: String) = Validated(parse.json) { validatedRequest =>
    val request = validatedRequest.request
    val consumer = validatedRequest.consumer
    val username = request.body \ "user"

    User.getByUsername(consumer, username.as[String]) match {
      case None => User.create(consumer.id, username.as[String])
      case Some(user) => {
        event match {
          case "issue_created" => Statistic.createOrUpdate(user.id, 1, 0, 0)
          case "issue_resolved" => Statistic.createOrUpdate(user.id, 0, 1, 0)
          case "issue_closed" => Statistic.createOrUpdate(user.id, 0, 0, 1)
          case _ => // Do nothing
        }
      }
    }

    Ok("Event received " + event)
  }
}
