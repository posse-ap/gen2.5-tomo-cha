<?php
// formの送信&データ格納処理
// テーブルを変えたので、ph3で調整が必要

$DSN = "mysql:host=db;dbname=posse;charset=utf8mb4;";
$USER = 'posse_user';
$PASSWORD = 'password';

try {
    $pdo = new PDO($DSN, $USER, $PASSWORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //PDOのエラーレポートを表示

    // postで取ってきた値をフォーマットした後データベースに入れる
    $date = $_POST['date'];
    $date = str_replace('日', '', $date);  // "日"を空文字に置換する
    $date = str_replace('年', '-', $date); // "年"を"-"に置換する
    $date = str_replace('月', '-', $date); // "月"を"-"に置換する
    !empty($_POST['content']) ? $content = implode(',', $_POST['content']) : $content = 'データなし';
    !empty($_POST['lang']) ? $lang = implode(',', $_POST['lang']) : $lang = 'データなし';
    $time = $_POST['time'];
    $sql = "INSERT INTO records (content_id, lang_id, hour, created_at) VALUES (:content, :lang, :hour, :created_at)"; // INSERT文を変数に格納。:nameや:categoryはプレースホルダという、値を入れるための単なる空箱
    $stmt = $pdo->prepare($sql); //挿入する値は空のまま、SQL実行の準備をする
    $params = array(':content' => $content, ':lang' => $lang, ':hour' => $time, ':created_at' => $date); // 挿入する値を配列に格納する
    $stmt->execute($params); //挿入する値が入った変数をexecuteにセットしてSQLを実行

    // リダイレクトする
    echo <<<EOF
    <script>
        location.href='index.php';
    </script>
    EOF;
} catch (PDOException $e) {
    echo 'DB接続エラー' . $e->getMessage();
}

?>