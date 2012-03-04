package controllers

import play.api._
import play.api.mvc._
import com.atlassian.labs.remoteapps.apputils.OAuthContext
import net.oauth.signature.RSA_SHA1
import net.oauth.OAuthConsumer

object Application extends Controller {

  private val oauthContext = new OAuthContext()

  def index = Action {
    Ok(views.html.index("Your new application is ready. Pouet!"))
  }
  
  def register = Action { request =>
    val publicKey: String = oauthContext.getLocal.getProperty(RSA_SHA1.PUBLIC_KEY).asInstanceOf[String]
    Ok(views.xml.descriptor(publicKey))
  }

  def events = TODO

  def newEvent(event: String) = TODO

  def userProfile() = Action { request =>
    val userId: Seq[String] = request.queryString.get("user_id").getOrElse(Seq())
    Ok(views.html.userprofile(userId.mkString(",")))
  }
}
