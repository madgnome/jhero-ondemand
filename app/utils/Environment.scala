package utils

import java.util.Properties
import java.io.{IOException, InputStream}

object Environment {

  private val env = loadEnv()

  private def loadEnv(): Properties = {
    val properties = new Properties()
    try {
      properties.load(this.getClass.getResourceAsStream("/env-defaults.properties"))
      val env: InputStream = this.getClass.getResourceAsStream("/env.properties")
      if (env != null) {
        properties.load(env)
      }
      properties.putAll(System.getenv)
    }
    catch {
      case e: IOException => {
        throw new RuntimeException("Couldn't load env properties")
      }
    }

    properties
  }

  def getEnv(name: String): Option[String] = {
    val value: String = env.getProperty(name)
    if (value == null) {
      //throw new IllegalArgumentException("Missing environment variable: " + name)
      Option.empty
    }

    Option(value.replaceAll("\\\\n", "\n"))
  }

}
