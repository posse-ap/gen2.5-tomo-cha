DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;

set character_set_client = utf8mb4;

set character_set_connection= utf8mb4;

set character_set_results = utf8mb4;

DROP TABLE IF EXISTS members;

CREATE TABLE
    members (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );


DROP TABLE IF EXISTS records;

CREATE TABLE
    records (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        member_id INT NOT NULL,
        post_id INT NOT NULL,
        content_id INT NOT NULL,
        lang_id INT NOT NULL,
        hour INT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );



DROP TABLE IF EXISTS contents;

CREATE TABLE
    contents (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        content_id INT NOT NULL,
        content VARCHAR(255) NOT NULL,
    );

INSERT INTO
    contents (content_id, content)
VALUES 
    (1, 'N予備校'), 
    (2, 'ドットインストール'),
    (4, 'posse課題');


DROP TABLE IF EXISTS langs;

CREATE TABLE
    langs (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        lang_id INT NOT NULL,
        lang VARCHAR(255) NOT NULL,
    );


INSERT INTO
    langs (content_id, content)
VALUES 
    (1, 'HTML'),
    (2, 'CSS'),
    (4, 'JavaScript'),
    (8, 'PHP'),
    (16, 'Laravel'),
    (32, 'SQL'),
    (64, 'SHELL'),
    (128, 'その他');

