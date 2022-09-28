<?php
$DSN = "mysql:host=db;dbname=posse;charset=utf8mb4;";
$USER = 'posse_user';
$PASSWORD = 'password';

try {
    // データベースに接続
    $pdo = new PDO($DSN, $USER, $PASSWORD);
    echo "接続OK！" . "n";
} catch (PDOException $e) {
    echo 'DB接続エラー！: ' . $e->getMessage();
}

// urlの?以降のidの値によって$idの値を変更
if (isset($_GET['id'])) {
    $id = $_GET['id'];
}

//SQL作成
$stmt = $pdo->prepare("SELECT * FROM big_questions WHERE id = :id");
//登録するデータをセット
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
//SQL実行
$res = $stmt->execute();
//該当するデータを取得
if ($res) {
    $data = $stmt->fetchAll();
}
foreach ($data as $e) :
    $title = $e['name'];
endforeach;

//SQL作成
$stmt = $pdo->prepare("SELECT * FROM questions WHERE big_question_id = :big_question_id");
//登録するデータをセット
$stmt->bindParam(':big_question_id', $id, PDO::PARAM_INT);
//SQL実行
$res = $stmt->execute();
//該当するデータを取得
if ($res) {
    $img_data = $stmt->fetchAll();
}
$i = 0;

//SQL作成
$stmt = $pdo->prepare("SELECT * FROM choices WHERE big_question_id = :big_question_id");
//登録するデータをセット
$stmt->bindParam(':big_question_id', $id, PDO::PARAM_INT);
//SQL実行
$res = $stmt->execute();
//該当するデータを取得
if ($res) {
    $selection_data = $stmt->fetchAll();
}


//headerの埋め込み
include('./_parts/_header.php')

?>
<main class="main">
    <h1 class="title"><?= $title ?></h1>
    <?php foreach ($selection_data as $ele) : ?>
        <p><?= $ele['name'] ?></p>
    <?php endforeach; ?>
    <section class="quiz">
        <!-- beforebegin -->
        <!-- afterbegin -->
        <?php foreach ($img_data as $e) : ?>
            <?php $i += 1 ?>
            <div id="question">
                <h2 class="question_title"><?= $i ?>. この地名はなんて読む？</h2> <!-- 問題番号-->
                <img class="question_img" src="./img/<?= $e['image'] ?>" alt=""><!-- 画像-->
                <ul id="questionList_<?= $i ?>" class="question_list">
                    <!-- 選択肢-->
                    <li id="wrong_<?= $i ?>_0" onclick="check(<?= $i ?>, 0)" class="question_list_item"></li>
                    <li id="wrong_<?= $i ?>_1" onclick="check(<?= $i ?>, 1)" class="question_list_item"></li>
                    <li id="correct_<?= $i ?>_2" onclick="check(<?= $i ?>, 2)" class="question_list_item"></li>
                </ul>
                <p id="questionCorrectAnswer_<?= $i ?>_2" class="question_correct_answer"><b>正解！</b><br><?= $e['image'] ?></p><!-- 正解box-->
                <p id="questionWrongAnswer_<?= $i ?>" class="question_wrong_answer"><b>不正解！</b><br><?= $e['image'] ?></p><!-- 不正解box-->
            </div>
            </div>
        <?php endforeach; ?>
        <!-- beforeend -->
        <!-- afterend -->
    </section>
</main>

<?php

include('./_parts/_footer.php')

?>