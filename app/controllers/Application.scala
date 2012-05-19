package controllers

import play.api.mvc._

import scala.None
import play.api.data._
import play.api.data.Forms._
import models._
import utils.Environment

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready. Pouet!"))
  }

  val localKey = Environment.getEnv("OAUTH_LOCAL_KEY").get
  val localPublicKey = Environment.getEnv("OAUTH_LOCAL_PUBLIC_KEY").get

  val registerForm = Form(
    tuple(
      "key" -> nonEmptyText,
      "publicKey" -> nonEmptyText,
      "baseUrl" -> nonEmptyText
    )
  )
  
  def register = Action { implicit request =>
    registerForm.bindFromRequest.fold(
      errors => BadRequest,
      {
        case (key, publicKey, baseUrl) => {
          Consumer.getOrCreate(key, publicKey, baseUrl)

          Ok(views.xml.descriptor(localKey, localPublicKey))
        }
      }
    )
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
                val user = User.getOrCreate(consumer, username)
                Ok(views.html.userprofile(user.username))
              }
            }
          }
        }
      }

    }
  }
}
