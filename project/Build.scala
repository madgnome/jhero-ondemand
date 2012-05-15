import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "JIRA Hero OnDemand"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
      "com.atlassian.labs" % "remoteapp-apputils" % "0.4.4",
      "postgresql" % "postgresql" % "9.1-901.jdbc4"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
      // Add your own project settings here
      resolvers += ("Local Maven Repository" at "file:///"+Path.userHome.absolutePath+"/.m2/repository"),
      resolvers += ("Atlassian" at "https://maven.atlassian.com/content/repositories/atlassian-public")
    )

}
