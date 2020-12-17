DROP DATABASE IF EXISTS ascend_db;
CREATE DATABASE ascend_db;
USE ascend_db;
CREATE TABLE player (
    name VARCHAR( 255 ) NOT NULL,
  --   exp Int(11) NOT NULL,
    charid INT REFERENCES characters.id
);
CREATE TABLE characters (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	name VARCHAR( 255 ) NOT NULL,
	-- role VARCHAR( 255 ) NOT NULL,
	health Int(11) NOT NULL,
    attack Int(11) NOT NULL,
    defense Int(11) NOT NULL,
    speed Int(11) NOT NULL,
	/* Set ID as primary key */
	PRIMARY KEY ( id )
);
CREATE TABLE enemy (
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
	name VARCHAR( 255 ) NOT NULL,
	-- role VARCHAR( 255 ) NOT NULL,
	health Int(11) NOT NULL,
    attack Int(11) NOT NULL,
    defense Int(11) NOT NULL,
    speed Int(11) NOT NULL,

	/* Set ID as primary key */
	PRIMARY KEY ( id )
);