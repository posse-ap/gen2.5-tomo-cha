DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;

set character_set_client = utf8mb4;

set character_set_connection= utf8mb4;

set character_set_results = utf8mb4;

-- DROP TABLE IF EXISTS members;

-- CREATE TABLE

--     members (

--         id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,

--         name VARCHAR(255) NOT NULL,

--         email VARCHAR(255) NOT NULL,

--         password VARCHAR(255) NOT NULL,

--         created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

--         updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

--     );

DROP TABLE IF EXISTS records;

CREATE TABLE
    records (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        content VARCHAR(255) NOT NULL,
        lang VARCHAR(255) NOT NULL,
        hour INT NOT NULL DEFAULT 0,
        created_at DATE
    );


INSERT INTO
    records (content, lang, hour, created_at)
VALUES ('N予備校', 'HTML', 8, '2022-10-22'), ('ドットインストール, posse課題', 'CSS', 3, '2022-10-27'), ('posse課題', 'JavaScript, php', 4, '2022-9-2'), ('ドットインストール', 'spl, php', 5, '2022-11-9');

