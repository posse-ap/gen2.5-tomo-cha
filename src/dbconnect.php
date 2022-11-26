<?php
$DSN = "mysql:host=db;dbname=posse;charset=utf8mb4;";
$USER = 'posse_user';
$PASSWORD = 'password';

try {
    // データベースに接続
    $pdo = new PDO($DSN, $USER, $PASSWORD, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    // echo "接続OK！" . "n";
} catch (PDOException $e) {
    echo 'DB接続エラー！: ' . $e->getMessage();
}