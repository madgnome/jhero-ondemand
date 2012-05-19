package utils

import play.api.mvc._
import play.api.mvc.Results._
import models.Consumer

object OAuthHelper {
  case class ValidatedRequest[A](consumer: Consumer, request: Request[A]) extends WrappedRequest(request)

  def Validated[A](p: BodyParser[A])(f: ValidatedRequest[A] => Result) = {
    Action(p) { request =>
      OAuthContext.validateRequest(request) match {
        case None => Unauthorized
        case Some(consumer) => {
          f(ValidatedRequest(consumer, request))
        }
      }
    }
  }
}
