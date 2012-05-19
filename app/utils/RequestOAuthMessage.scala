package utils

import java.util.ArrayList
import play.api.mvc.Request
import RequestOAuthMessage._
import net.oauth.{OAuth, OAuthMessage}
import scala.collection.JavaConversions._

class RequestOAuthMessage[A](request: Request[A], url: String) extends OAuthMessage(request.method, url, getParameters(request)) {
  copyHeaders(request, getHeaders)
}

object RequestOAuthMessage {

  def copyHeaders[A](request: Request[A], into: java.util.Collection[java.util.Map.Entry[String, String]]) {
    for ((key, values) <- request.headers.toMap) {
      values.foreach(value => into.add(new OAuth.Parameter(key, value)))
    }
  }

  def getParameters[A](request: Request[A]): ArrayList[OAuth.Parameter] = {
    val list = new ArrayList[OAuth.Parameter]()

    request.headers.getAll("AUTHORIZATION").foreach(header => {
      OAuthMessage.decodeAuthorization(header).toList.foreach(parameter => {
        if (!"realm".equalsIgnoreCase(parameter.getKey)) {
          list.add(parameter)
        }
      })
    })

    for ((key, values) <- request.queryString) {
      if (values.size > 0) {
        values.filter(value => value != "").foreach(value => list.add(new OAuth.Parameter(key, value)))
      }
    }

    list
  }
}
