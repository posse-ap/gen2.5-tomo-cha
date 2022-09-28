DROP SCHEMA IF EXISTS posse;

CREATE SCHEMA posse;

USE posse;

set character_set_client = utf8mb4;

set character_set_connection= utf8mb4;

set character_set_results = utf8mb4;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE
    big_questions (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

INSERT INTO big_questions SET name='東京の難読地名クイズ';

INSERT INTO big_questions SET name='広島の難読地名クイズ';

DROP TABLE IF EXISTS questions;

CREATE TABLE
    questions (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        big_question_id INT NOT NULL,
        image VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

INSERT INTO
    questions (big_question_id, image)
VALUES
    (1, 'takanawa.png'),
    (1, 'kameido.png'),
    (1, 'koujimach.png'),
    (1, 'onarimon.png'),
    (1, 'todoroki.png'),
    (1, 'shakujii.png'),
    (1, 'zoushiki.png'),
    (1, 'okachimachi.png'),
    (1, 'shishibone.png'),
    (1, 'kogure.png'),
    (2, 'mukainada.png'),
    (2, 'mitugi.png'),
    (2, 'kanayama.png'),
    (2, 'toyohi.png'),
    (2, 'ishiguro.png'),
    (2, 'miyoshi.png'),
    (2, 'uzui.png'),
    (2, 'sumomo.png'),
    (2, 'ochigotouge.png'),
    (2, 'yorohoyobara.png');


-- INSERT INTO questions SET big_question_id=2, image='mukainada.png';


DROP TABLE IF EXISTS choices;

CREATE TABLE
    choices (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        big_question_id INT NOT NULL,
        question_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        valid TINYINT(1) NOT NULL DEFAULT '0',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

INSERT INTO
    choices (big_question_id, question_id, name, valid)
VALUES 
    (1, 1, 'たかなわ', 1), (1, 1, 'たかわ', 0), (1, 1, 'こうわ', 0), 
    (1, 2, 'かめと', 0), (1, 2, 'かめど', 0), (1, 2, 'かめいど', 1),
    (1, 3, 'かゆまち', 0), (1, 3, 'おかとまち', 0), (1, 3, 'こうじまち', 1),
    (1, 4, 'ごせいもん', 0), (1, 4, 'おかどもん', 0), (1, 4, 'おなりもん', 1),
    (1, 5, 'たたら', 0), (1, 5, 'たたりき', 0), (1, 5, 'とどろき', 1),
    (1, 6, 'いじい', 0), (1, 6, 'せきこうい', 0), (1, 6, 'しゃくじい', 1),
    (1, 7, 'ざっしょく', 0), (1, 7, 'ざっしき', 0), (1, 7, 'ぞうしき', 1),
    (1, 8, 'みとちょう', 0), (1, 8, 'ごしろちょう', 0), (1, 8, 'おかちまち', 1),
    (1, 9, 'ろっこつ', 0), (1, 9, 'しこね', 0), (1, 9, 'ししぼね', 1),
    (1, 10, 'こしゃく', 0), (1, 10, 'こばく', 0), (1, 10, 'こぐれ', 1),
    (2, 1, 'むこうひら', 0), (2, 1, 'むきひら', 0), (2, 1, 'むかいなだ', 1),
    (2, 2, 'みつぎ', 1), (2, 2, 'みよし', 0), (2, 2, 'おしらべ', 0),
    (2, 3, 'ぎんざん', 0), (2, 3, 'かなやま', 1), (2, 3, 'きやま', 0),
    (2, 4, 'とよか', 0), (2, 4, 'としか', 0), (2, 4, 'とよひ', 1),
    (2, 5, 'いしあぜ', 0), (2, 5, 'しゃくぜ', 0), (2, 5, 'いしぐろ', 1),
    (2, 6, 'みつぎ', 0), (2, 6, 'みよし', 1), (2, 6, 'みかた', 0),
    (2, 7, 'くもおり', 0), (2, 7, 'もみち', 0), (2, 7, 'うずい', 1),
    (2, 8, 'ぽんかん', 0), (2, 8, 'すもも', 1), (2, 8, 'でこぽん', 0),
    (2, 9, 'おうちごとうげ', 0), (2, 9, 'おおちごえとうげ', 0), (2, 9, 'おおちごとうげ', 1),
    (2, 10, 'よおろほよばら', 1), (2, 10, 'てっぽよばら', 0), (2, 10, 'ていぼよはら', 0);