package models

import anorm.SqlParser._
import play.api.db.DB
import anorm._
import play.api.Play.current

case class User(id: Long, consumersId: Long, username: String)

object User {
  val user = {
    get[Long]("id") ~
    get[Long]("consumers_id") ~
    get[String]("username") map {
      case id~consumersId~username => User(id, consumersId, username)
    }
  }

  def getById(id: Long)  = DB.withConnection { implicit c =>
    SQL("SELECT * FROM users WHERE id = {id}").on(
      "id" -> id
    ).as(user.singleOpt)
  }

  def getByUsername(consumer: Consumer, username: String)  = DB.withConnection { implicit c =>
    SQL("SELECT * FROM users WHERE consumers_id = {consumersId} AND username = {username}").on(
      "consumersId" -> consumer.id,
      "username" -> username
    ).as(user.singleOpt)
  }

  def create(consumersId: Long, username: String) = DB.withConnection { implicit c =>
    SQL("INSERT INTO users (consumers_id, username) VALUES ({consumersId}, {username})").on(
      "consumersId" -> consumersId,
      "username" -> username
    ).executeInsert() match {
      case Some(id: Long) => getById(id)
      case None => None
    }
  }

  def getOrCreate(consumer: Consumer, username: String) = DB.withConnection { implicit c =>
    getByUsername(consumer, username) match {
      case None => create(consumer.id, username).get
      case Some(u) => u
    }
  }
}
