package utils

import play.api.mvc.Request
import net.oauth._
import play.api.PlayException
import signature.RSA_SHA1
import play.api.libs.ws.WS
import scala.collection.JavaConversions._
import models.Consumer

object OAuthContext {
  val oauthLocalConsumer = loadLocalConsumer()

  def validateRequest[A](request: Request[A]): Option[Consumer] = {
    var url = "http://" + request.host + request.uri
    val q: Int = url.indexOf('?')
    if (q >= 0) {
      // The query string parameters will be included in
      // the result from getParameters(request).
      url = url.substring(0, q)
    }

    val message = new RequestOAuthMessage(request, url)

    validateAndExtractConsumer(message)
  }

  def validateAndExtractConsumer(message: OAuthMessage): Option[Consumer] = {
    try {
      val key = message.getConsumerKey
      Consumer.getByKey(key).flatMap(consumer => {
        getHostConsumer(consumer).flatMap(host => {
          message.validateMessage(new OAuthAccessor(host), new SimpleOAuthValidator())

          Option(consumer)
        })
      })
    }
    catch {
      case ex: OAuthProblemException => {
        val sb = new StringBuilder
        sb.append("Validation failed: \n")
        sb.append("problem: ").append(ex.getProblem).append("\n")
        sb.append("parameters: ").append(ex.getParameters).append("\n")
        System.err.println(sb)

        throw new PlayException("OAuth problem", "", Option(ex))
      }
      case e: Throwable => throw new PlayException("", "", Option(e))
    }
  }

  def getHostBaseUrl(key: String): Option[String] = {
    Consumer.getByKey(key).flatMap(consumer => Option(consumer.baseUrl))
  }

  def getHostConsumer(consumer: Consumer): Option[OAuthConsumer] = {
    val baseUrl = consumer.baseUrl
    val serviceProvider = new OAuthServiceProvider(baseUrl + "/plugins/servlet/oauth/request-token",
      baseUrl + "/plugins/servlet/oauth/authorize",
      baseUrl + "/plugins/servlet/oauth/access-token")
    val host = new OAuthConsumer(null, consumer.key, consumer.publicKey, serviceProvider)
    host.setProperty(RSA_SHA1.PUBLIC_KEY, consumer.publicKey)

    Option(host)
  }

  def getHostConsumer(key: String): Option[OAuthConsumer] = {
    Consumer.getByKey(key).flatMap(getHostConsumer)
  }

  def loadLocalConsumer(): OAuthConsumer = {
    val serviceProvider: OAuthServiceProvider = new OAuthServiceProvider(null, null, null)
    val localConsumer: OAuthConsumer = new OAuthConsumer(null, Environment.getEnv("OAUTH_LOCAL_KEY").get, null, serviceProvider)
    val privateKey: String = Environment.getEnv("OAUTH_LOCAL_PRIVATE_KEY").get
    localConsumer.setProperty(RSA_SHA1.PRIVATE_KEY, privateKey)
    val publicKey: String = Environment.getEnv("OAUTH_LOCAL_PUBLIC_KEY").get
    localConsumer.setProperty(RSA_SHA1.PUBLIC_KEY, publicKey)

    localConsumer
  }

  //  def sign(uri: String, method: String, username: Option[String], ws: WS.WSRequestHolder): WS.WSRequestHolder = {
  //    val authorization = getAuthorizationHeaderValue(uri, method, username)
  //    ws.withHeaders(("Authorization", authorization))
  //  }

  def getAuthorizationHeaderValue(uri: String, method: String, username: Option[String]): String = {
    val local = oauthLocalConsumer
    val timestamp: String = System.currentTimeMillis / 1000 + ""
    val nonce: String = System.nanoTime + ""
    val params = Map(
      OAuth.OAUTH_SIGNATURE_METHOD -> OAuth.RSA_SHA1,
      OAuth.OAUTH_VERSION -> "1.0",
      OAuth.OAUTH_CONSUMER_KEY -> local.consumerKey,
      OAuth.OAUTH_NONCE -> nonce,
      OAuth.OAUTH_TIMESTAMP -> timestamp
    )

    val oauthMessage: OAuthMessage = new OAuthMessage(method, uri, params.entrySet())
    oauthMessage.sign(new OAuthAccessor(local))

    oauthMessage.getAuthorizationHeader(null)
  }

  class OAuthWSRequest(ws: WS.WSRequestHolder) {
    def sign(method: String): WS.WSRequestHolder = {
      val authorization = getAuthorizationHeaderValue(ws.url, method, None)
      ws.withHeaders(("Authorization", authorization))
    }
  }

  implicit def oauthWSRequest(ws: WS.WSRequestHolder) = new OAuthWSRequest(ws)
}
