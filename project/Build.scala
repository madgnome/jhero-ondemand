import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "JIRA Hero OnDemand"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
      "com.atlassian.labs" % "remoteapp-apputils" % "0.4.99-SNAPSHOT"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
      // Add your own project settings here
      resolvers += ("Local Maven Repository" at "file:///"+Path.userHome.absolutePath+"/.m2/repository")
    )

}