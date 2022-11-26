DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;

set character_set_client = utf8mb4;

set character_set_connection= utf8mb4;

set character_set_results = utf8mb4;



DROP TABLE IF EXISTS records;

CREATE TABLE
    records (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        content_id INT NOT NULL,
        lang_id INT NOT NULL,
        hour INT NOT NULL DEFAULT 0,
        created_at DATE
    );


INSERT INTO
    records (content_id, lang_id, hour, created_at)
VALUES (1, 1, 8, '2022-10-22'), (2, 3, 3, '2022-10-27'), (4, 3, 4, '2022-9-2'), (2, 7, 5, '2022-11-9');


DROP TABLE IF EXISTS contents;

CREATE TABLE
    contents (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        content VARCHAR(255) NOT NULL
    );
INSERT INTO
    contents (content)
VALUES ('N予備校'),('ドットインストール'),('posse課題');


DROP TABLE IF EXISTS langs;

CREATE TABLE
    langs (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        lang VARCHAR(255) NOT NULL
    );
INSERT INTO
    langs (lang)
VALUES ('HTML'),('CSS'),('JavaScript'),('PHP'),('MySQL'),('larabel'),('others');