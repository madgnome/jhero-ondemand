package models

import play.api.Play.current
import anorm.SqlParser._
import play.api.db.DB
import anorm._

case class Statistic(usersId: Long, created: Int, resolved: Int, closed: Int)

object Statistic {
  val statistic = {
    get[Long]("users_id") ~
    get[Int]("created") ~
    get[Int]("resolved") ~
    get[Int]("closed") map {
      case usersId~created~resolved~closed => Statistic(usersId, created, resolved, closed)
    }
  }

  def getByUser(userId: Long)  = DB.withConnection { implicit c =>
    SQL("SELECT * FROM statistics WHERE users_id = {userId}").on(
      "userId" -> userId
    ).as(statistic.singleOpt)
  }

  def create(userId: Long, created: Int = 0, resolved: Int = 0, closed: Int = 0) {
    DB.withConnection { implicit c =>
      SQL("INSERT INTO statistics (users_id, created, resolved, closed) VALUES ({userId}, {created}, {resolved}, {closed})").on(
        "userId" -> userId,
        "created" -> created,
        "resolved" -> resolved,
        "closed" -> closed
      ).executeUpdate()
    }
  }

  def update(userId: Long, createdInc: Int = 0, resolvedInc: Int = 0, closedInc: Int = 0) {
    DB.withConnection { implicit c =>
      SQL("UPDATE statistics " +
          "SET created = created + {createdInc}, resolved = resolved + {resolvedInc}, closed = closed + {closedInc} " +
          "WHERE users_id = {userId}").on(
        "userId" -> userId,
        "createdInc" -> createdInc,
        "resolvedInc" -> resolvedInc,
        "closedInc" -> closedInc
      ).executeUpdate()
    }
  }

  def createOrUpdate(userId: Long, createdInc: Int = 0, resolvedInc: Int = 0, closedInc: Int = 0) {
    DB.withConnection {
      implicit c =>
        getByUser(userId) match {
          case None => create(userId, createdInc, resolvedInc, closedInc)
          case Some(u) => update(u.usersId, createdInc, resolvedInc, closedInc)
        }
    }
  }
}
