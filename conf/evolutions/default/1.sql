# Users schema
 
# --- !Ups

CREATE TABLE consumers (
  id SERIAL PRIMARY KEY,
  app_key VARCHAR(255) NOT NULL UNIQUE,
  public_key VARCHAR(255) NOT NULL,
  base_url VARCHAR(1024) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  consumers_id INTEGER NOT NULL REFERENCES consumers,
  username VARCHAR(255) NOT NULL,
  UNIQUE (consumers_id, username)
);

CREATE TABLE statistics (
  users_id INTEGER NOT NULL PRIMARY KEY REFERENCES users,
  created INTEGER DEFAULT 0,
  resolved INTEGER DEFAULT 0,
  closed INTEGER DEFAULT 0
);

# --- !Downs
 
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS consumers;
DROP TABLE IF EXISTS statistics;
