# Users schema
 
# --- !Ups
 
CREATE TABLE `consumers`(
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `app_key` VARCHAR(255) NOT NULL,
  `public_key` VARCHAR(255) NOT NULL,
  `base_url` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `consumers_key` (`app_key`)
);

CREATE TABLE `users` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `consumers_id` INT(10) UNSIGNED NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_consumers_id_username` (`consumers_id`, `username`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`consumers_id`) REFERENCES `consumers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `statistics` (
  `users_id` INT(10) UNSIGNED NOT NULL,
  `created` INT(6) UNSIGNED DEFAULT 0,
  `resolved` INT(6) UNSIGNED DEFAULT 0,
  `closed` INT(6) UNSIGNED DEFAULT 0,
  PRIMARY KEY (`users_id`),
  CONSTRAINT `statistics_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

# --- !Downs
 
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS consumers;
DROP TABLE IF EXISTS statistics;
