<?php

require('./dbconnect.php');


//bar_graphのために学習時間をグループ化
$query = "select created_at, date_format(created_at, '%d') day, ifnull(sum(hour), 0) hour from records group by created_at";
$res = $pdo->query($query);
$bar_graph_data = $res->fetchAll();

//lang_graphのために学習時間をグループ化
$query = "select langs.id, langs.lang, ifnull(sum(hour), 0) hour from langs left join records on langs.id = records.lang_id group by langs.id";
$res = $pdo->query($query);
$lang_graph_data = $res->fetchAll();

//content_graphのために学習時間をグループ化
$query = "select contents.id, contents.content, ifnull(sum(hour), 0) hour from contents left join records on contents.id = records.content_id group by contents.id";
$res = $pdo->query($query);
$content_graph_data = $res->fetchAll();


?>

<script>
    // 棒グラフのデータ一覧
    let bar_editor = [
        ['Day', 'Time'],
    ]
    <?php $cnt = 0; ?>
    <?php $time = 0; ?>
    <?php
    while ($cnt < 30) {
        $cnt += 1; //次の日付を調べる
        echo "bar_editor.push(["; // 配列に要素を格納 ここから
        echo $cnt . ","; // Dayの部分を出力
        for ($i = 0; $i < count($bar_graph_data); $i++) { //bar_graph_dataに入ってる要素を全て調べる
            if ((int)$bar_graph_data[$i]['day'] == $cnt) { //day=1のデータが有ればそのhourをtimeに加算する
                $time += (int)$bar_graph_data[$i]['hour'];
            } else { //なければ0を加算する
                $time += 0;
            }
        }
        echo $time; //Timeの部分を出力
        $time = 0; //Time初期化
        echo "]);";// 配列に要素を格納 ここまで
    }
    ?>

    // 円グラフ（言語）のデータ一覧
    const circle_lang_editor = [
        ["lang", "rate"],
        <?php
        foreach($lang_graph_data as $value){ // 配列に要素を格納
            echo '["' . $value['lang'] . '",' . (int)$value['hour'] . '],';
        }
        ?>
    ]

    // 円グラフ（コンテンツ）のデータ一覧
    const circle_contents_editor = [
        ["contents", "rate"],
        <?php
        foreach($content_graph_data as $value){ // 配列に要素を格納
            echo '["' . $value['content'] . '",' . (int)$value['hour'] . '],';
        }
        ?>
    ]

    

    //グラフ設定の読み込み
    google.charts.load('current', {
        packages: ['corechart']
    });

    //グラフ関数をセット
    google.charts.setOnLoadCallback(drawChart);

    //グラフ関数設定
    function drawChart() {
        //棒グラフデータ読み込み
        const bar_data = google.visualization.arrayToDataTable(bar_editor);
        //棒グラフオプション
        const bar_options = {
            title: '',
            colors: ["#0f72bd"],
            legend: {
                position: "none"
            },
            vAxis: {
                format: '#h',
                textStyle: {
                    color: "#cbdce8"
                },
                gridlines: {
                    count: 0,
                }
            },
            hAxis: {
                title: "3月",
                textStyle: {
                    color: "#cbdce8"
                },
                gridlines: {
                    count: 0,
                    color: "#fff"
                },
                ticks: ticks,
                textStyle: {
                    fontSize: 8,
                }
            },
            chartArea: {
                width: "85%",
                height: "70%"
            }
        }
        //棒グラフのDOMと紐付け
        const bar_chart = new google.visualization.ColumnChart(document.getElementById('barGraph'));
        //棒グラフ描画実行
        bar_chart.draw(bar_data, bar_options);




        //円（言語）グラフデータ読み込み
        const circle_lang_data = google.visualization.arrayToDataTable(circle_lang_editor);
        //円（言語）グラフオプション
        const circle_lang_options = {
            legend: {
                position: "none"
            },
            colors: ["#1754ef", "#0f71bd", "#20bdde", "#3ccefe", "#b29ef3", "#6d46ec", "#4a17ef", "#3105c0"],
            pieHole: 0.4,
            pieSliceTextStyle: {
                fontSize: 8,
            },
            'chartArea': {
                'width': '100%',
                'height': '100%'
            }
        }
        //円（言語）グラフのDOMと紐付け
        const circle_lang_chart = new google.visualization.PieChart(document.getElementById('langGraph'));
        //円（言語）グラフ描画実行
        circle_lang_chart.draw(circle_lang_data, circle_lang_options);





        //円（コンテンツ）グラフデータ読み込み
        const circle_contents_data = google.visualization.arrayToDataTable(circle_contents_editor);
        //円（コンテンツ）グラフオプション
        const circle_contents_options = {
            legend: {
                position: "none"
            },
            colors: ["#1754ef", "#0f71bd", "#20bdde"],
            pieHole: 0.4,
            'chartArea': {
                'width': '100%',
                'height': '100%'
            }
        }
        //円（コンテンツ）グラフのDOMと紐付け
        const circle_contents_chart = new google.visualization.PieChart(document.getElementById('contentGraph'));
        //円（コンテンツ）グラフ描画実行
        circle_contents_chart.draw(circle_contents_data, circle_contents_options);
    }
</script>