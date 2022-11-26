<?php

// pdoの共通部分
require('./dbconnect.php');


//今日の勉強時間
$query = "select ifnull(sum(hour), 0) hour from records where date_format(created_at, '%Y-%m-%d') = date_format(current_date, '%Y-%m-%d')";
$res = $pdo->query($query);
$today_hour_data = $res->fetchAll();

//今月の勉強時間
$query = "select ifnull(sum(hour), 0) hour from records where date_format(created_at, '%Y-%m') = date_format(current_date, '%Y-%m')";
$res = $pdo->query($query);
$month_hour_data = $res->fetchAll();

//今までの勉強時間
$query = "SELECT IFNULL(sum(hour), 0) hour FROM records";
$res = $pdo->query($query);
$total_hour_data = $res->fetchAll();


//headerの埋め込み
include('./_parts/_header.php')

?>
<!-- main -->
<main class="main">
    <!-- 全体 -->
    <div class="container">
        <!-- 左側 -->
        <div class="column1">
            <!-- 左上側 -->
            <div class="wrapper1">
                <ul class="item_contents">
                    <li class="item_label">Today</li>
                    <li class="item_number"><?= $today_hour_data[0]['hour']; ?></li>
                    <li class="item_hour">hour</li>
                </ul>
                <ul class="item_contents">
                    <li class="item_label">Month</li>
                    <li class="item_number"><?= $month_hour_data[0]['hour']; ?></li>
                    <li class="item_hour">hour</li>
                </ul>
                <ul class="item_contents">
                    <li class="item_label">Total</li>
                    <li class="item_number"><?= $total_hour_data[0]['hour']; ?></li>
                    <li class="item_hour">hour</li>
                </ul>
            </div>
            <!-- 左下側 -->
            <div class="wrapper2">
                <div id="barGraph" class="bar_graph" style="width:100%">
                </div>
            </div>
        </div>
        <!-- 右側 -->
        <div class="column2">
            <!-- 右左側 -->
            <ul class="circle_graph circle_graph1">
                <li class="item_title">学習言語</li>
                <div id="langGraph" class="item_graph" style="width:100%">
                </div>
                <!-- <img class="item_graph" src="./img/スクリーンショット 2022-03-10 11.29.04.png" alt=""> -->
                <ul class="lang">
                    <li class="lang_item lang_html">HTML</li>
                    <li class="lang_item lang_js">JavaScript</li>
                    <li class="lang_item lang_css">CSS</li>
                    <li class="lang_item lang_php">PHP</li>
                    <li class="lang_item lang_lara">Laravel</li>
                    <li class="lang_item lang_sql">SQL</li>
                    <li class="lang_item lang_shell">SHELL</li>
                    <li class="lang_item lang_others">情報システム基礎知識（その他）</li>
                </ul>
            </ul>
            <!-- 右右側 -->
            <ul class="circle_graph circle_graph2">
                <li class="item_title">学習コンテンツ</li>
                <div id="contentGraph" class="item_graph" style="width:100%">
                </div>
                <!-- <img class="item_graph" src="./img/スクリーンショット 2022-03-10 12.21.45.png" alt=""> -->
                <ul class="contents">
                    <li class="content content_dot">ドットインストール</li>
                    <li class="content content_nyobi">N予備校</li>
                    <li class="content content_posse">POSSE課題</li>
                </ul>
            </ul>
        </div>
    </div>
    <!-- オーバーレイ -->
    <div id="overlay" class="overlay"></div>

    <!-- モーダルウィンドウ -->
    <div id="modal" class="modal">
        <!-- 閉じるボタン -->
        <div id="closeButton" class="close">×</div>
        <!-- 戻るボタン -->
        <!-- カレンダー画面でのみ表示 -->
        <div id="backButton" class="back">←</div>
        <!-- 記録画面 -->
        <form id="record" class="record" method="POST" action="form.php">
            <div class="info">
                <!-- 記録左側 -->
                <div class="modal_column1">
                    <div class="wrapper_date">
                        <p class="date_text">学習日</p>
                        <input name="date" type="text" id="calendarBox" class="date_calendar">
                    </div>
                    <div class="wrapper_contents">
                        <p class="contents_text">学習コンテンツ（複数選択可）</p>
                        <ul class="contents">
                            <input type="checkbox" name="content[]" id="checkbox0" value="N予備校">
                            <label for="checkbox0" class="content_item check_item" onclick='addCheck(0)'>N予備校</label>
                            <input type="checkbox" name="content[]" id="checkbox1" value="ドットインストール">
                            <label for="checkbox1" class="content_item check_item" onclick='addCheck(1)'>ドットインストール</label>
                            <input type="checkbox" name="content[]" id="checkbox2" value="POSSE課題">
                            <label for="checkbox2" class="content_item check_item" onclick='addCheck(2)'>POSSE課題</label>
                        </ul>
                    </div>
                    <div class="wrapper_langs">
                        <p class="langs_text">学習言語（複数選択可）</p>
                        <ul class="langs">
                            <input type="checkbox" name="lang[]" id="checkbox3" value="CSS">
                            <label for="checkbox3" class="lang_item check_item" onclick='addCheck(3)'>CSS</label>
                            <input type="checkbox" name="lang[]" id="checkbox4" value="HTML">
                            <label for="checkbox4" class="lang_item check_item" onclick='addCheck(4)'>HTML</label>
                            <input type="checkbox" name="lang[]" id="checkbox5" value="JavaScript">
                            <label for="checkbox5" class="lang_item check_item" onclick='addCheck(5)'>JavaScript</label>
                            <input type="checkbox" name="lang[]" id="checkbox6" value="PHP">
                            <label for="checkbox6" class="lang_item check_item" onclick='addCheck(6)'>PHP</label>
                            <input type="checkbox" name="lang[]" id="checkbox7" value="Laravel">
                            <label for="checkbox7" class="lang_item check_item" onclick='addCheck(7)'>Laravel</label>
                            <input type="checkbox" name="lang[]" id="checkbox8" value="SQL">
                            <label for="checkbox8" class="lang_item check_item" onclick='addCheck(8)'>SQL</label>
                            <input type="checkbox" name="lang[]" id="checkbox9" value="SHELL">
                            <label for="checkbox9" class="lang_item check_item" onclick='addCheck(9)'>SHELL</label>
                            <input type="checkbox" name="lang[]" id="checkbox10" value="情報システム基礎知識（その他）">
                            <label for="checkbox10" class="lang_item check_item" onclick='addCheck(10)'>情報システム基礎知識（その他）</label>
                        </ul>
                    </div>
                </div>
                <!-- 記録右側 -->
                <div class="modal_column2">
                    <div class="wrapper_time">
                        <p class="time_text">学習時間</p>
                        <input name="time" type="text" class="time_textarea"></input>
                    </div>
                    <div class="wrapper_twitter">
                        <p class="twitter_text">Twitter用コメント</p>
                        <textarea id="twitterComment" class="twitter_textarea" minlength="1" maxlength="140"></textarea>
                    </div>
                    <p id="twitterShareButton" name="check_item" class="twitter_check" onclick='addCheck(11)'>Twitterにシェアする</p>
                </div>
            </div>
            <button type="submit" id="modalButton" class="header_button" name="button_submit"><a id="twitterNewTab" target="_blank" rel="noopener noreferrer">記録・投稿</a></button>
        </form>
        <!-- カレンダー画面 -->
        <div id="calendarWrapper" class="calendar_wrapper">
            <button class="cal_left" onclick="prev()">＜</button>
            <span id="calDate" class="cal_date"></span>
            <button class="cal_right" onclick="next()">＞</button>
            <div id="calendar" class="calendar"></div>
            <button id="calendarButton" class="header_button">決定</button>
        </div>
        <!-- ローディング画面 -->
        <div id="load" class="load">
            <img src="./img/D1FB273F-7C3B-4F47-A255-F97C61E49253.jpeg" alt="">
        </div>
        <!-- 投稿完了画面 -->
        <div id="complete" class="complete">
            <img src="./img/2AE8BD05-5028-4852-9478-F5CC79CCEF29.jpeg" alt="">
        </div>
    </div>
    <!-- エラー画面 -->
    <div id="error" class="error">
        <img src="./img/スクリーンショット 2022-03-24 19.53.33.png" alt="">
    </div>
</main>
<!-- main -->

<?php
// footerの埋め込み
include('./_parts/_footer.php');

// グラフ描画部分の埋め込み
require('./graph.php');
?>