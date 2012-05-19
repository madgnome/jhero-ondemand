import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "JIRA Hero OnDemand"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
      "com.atlassian.labs" % "remoteapp-apputils" % "0.4.4",
      "net.oauth.core" % "oauth" % "20090617",
      "net.oauth.core" % "oauth-consumer" % "20090617",
      "net.oauth.core" % "oauth-provider" % "20090531",
      "postgresql" % "postgresql" % "9.1-901.jdbc4"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
      // Add your own project settings here
      resolvers += ("Local Maven Repository" at "file:///"+Path.userHome.absolutePath+"/.m2/repository"),
      resolvers += ("Atlassian Repository" at "https://maven.atlassian.com/content/repositories/atlassian-public"),
      resolvers += ("OAuth Repository" at "http://oauth.googlecode.com/svn/code/maven/")
    )

}
