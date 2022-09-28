<?php
$DSN = "mysql:host=db;dbname=posse;charset=utf8mb4;";
$USER = 'posse_user';
$PASSWORD = 'password';

try {
    $pdo = new PDO($DSN, $USER, $PASSWORD);
    echo "接続OK！" . "n";
} catch (PDOException $e) {
    echo 'DB接続エラー！: ' . $e->getMessage();
}

// (1) 取得するデータのidを指定
if (isset($_GET['id'])) {
    $id = $_GET['id'];
}

// (2) データベースに接続
// $pdo = new PDO('mysql:charset=UTF8;dbname=posse;host=localhost', 'root', 'password');

// (3) SQL作成
$stmt = $pdo->prepare("SELECT * FROM big_questions WHERE id = :id");

// (4) 登録するデータをセット
$stmt->bindParam(':id', $id, PDO::PARAM_INT);

// (5) SQL実行
$res = $stmt->execute();

// (6) 該当するデータを取得
if ($res) {
    $data = $stmt->fetchAll();
}

//headerの埋め込み
include('./_parts/_header.php')

?>
<main class="main">
    <h1 class="title">ガチで東京の人しか解けない！ #東京の難読地名クイズ</h1>
    <section class="quiz">
    <?php foreach ($data as $e):?>
    <p><?= $e['name'] ?></p>
    <?php endforeach;?>
        <!-- beforebegin -->
        <div id="question">
            <!-- afterbegin -->
            <!-- beforeend -->
        </div>
        <!-- afterend -->
    </section>
</main>

<?php

include('./_parts/_footer.php')

?>