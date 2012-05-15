package models

import anorm._
import anorm.SqlParser._
import play.api.db.DB
import play.api.Play.current

case class Consumer(id: Long, key: String, publicKey: String, baseUrl: String)

object Consumer {

  val consumer = {
    get[Long]("id") ~
    get[String]("app_key") ~
    get[String] ("public_key") ~
    get[String] ("base_url") map {
      case id~key~publicKey~baseUrl => Consumer(id, key, publicKey, baseUrl)
    }
  }

  def all(): List[Consumer] = DB.withConnection { implicit c =>
    SQL("SELECT * FROM consumers").as(consumer*)
  }

  def getByKey(key: String)  = DB.withConnection { implicit c =>
    SQL("SELECT * FROM consumers WHERE app_key = {key}").on(
      "key" -> key
    ).as(consumer.singleOpt)
  }

  def create(key: String, publicKey: String, baseUrl: String) {
    DB.withConnection { implicit c =>
      SQL("INSERT INTO consumers (app_key, public_key, base_url) VALUES ({key}, {publicKey}, {baseUrl})").on(
        "key" -> key,
        "publicKey" -> publicKey,
        "baseUrl" -> baseUrl
      ).executeUpdate()
    }
  }

  def delete(id: Long) {
    DB.withConnection { implicit c =>
      SQL("DELETE FROM consumers WHERE id = {id}").on(
        "id" -> id
      ).executeUpdate()
    }
  }
}
