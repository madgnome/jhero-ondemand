package models

import java.util.Date

case class Level(id: Long, number: Int, minThreshold: Int, maxThreshold: Int)

case class UserLevel(userId: Long, levelId: Long, earnedOn: Date)


