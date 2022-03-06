'use strict'

//htmlをfor文を用いてjsで記述する
//①配列を作る
//画像の配列
const img = [
    "https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png",
]

//選択肢の配列
const choices = [
    ["たかなわ","こうわ","たかわ"],
    ["かめいど","かめと","かめど"],
    ["こうじまち","おかとまち","かゆまち"],
]
//回答の配列
const answers = [
    "たかなわ",
    "かめいど",
    "こうじまち",
]

function createhtml(){
var contents = ""
//選択肢の順番をランダムにする
for (let i=0; i<choices.length; i++){
    var a = choices[i][0]
    var tmp = choices[i][0]
    var r = Math.floor(Math.random()*choices.length)
    var x = choices[i][r]
    choices[i][0] = x
    choices[i][r] = tmp

    a = choices[i].indexOf(a)
    // html要素を記述する
    contents +=  `<h2>${i+1}. この地名はなんて読む？</h2>`
            +`<img src=${img[i]} alt="">`
            +`<ul class="choicesBox">`
            +`    <li id="choice_${i}_0" class="choices choices_${i}" onclick="check(0,${i},${a})">${choices[i][0]}</li>`
            +`    <li id="choice_${i}_1" class="choices choices_${i}" onclick="check(1,${i},${a})">${choices[i][1]}</li>`
            +`    <li id="choice_${i}_2" class="choices choices_${i}" onclick="check(2,${i},${a})">${choices[i][2]}</li>`
            +`</ul>`
            +`<ul class="answerBox">`
            +`    <li id="answer_true_${i}" class="answer-true-${i} unlook"><b>正解！</b><br>正解は${tmp}です</li>`
            +`    <li id="answer_false_${i}" class="answer-false-${i} unlook"><b>不正解！</b><br>正解は${tmp}です</li>`
            +`</ul>`
}


//htmlに埋め込みをする
const main = document.getElementById("mainInner")
console.log(main)
main.insertAdjacentHTML("beforeend", contents);


}



//②クリック時の処理を記述する
//正解不正解を確認するための関数を作る
function check(selection_id,index,valid_id){
    // 選択肢をすべてクリックできないようにする
    var choiceArray = document.getElementsByClassName("choices_" + index)
    console.log(choiceArray)
    choiceArray = Array.prototype.slice.call(choiceArray);
    choiceArray.forEach(function(ele){
        ele.classList.remove("choices_" + index)
        ele.classList.add("unclick")
        console.log(ele)
    })
    // 正解の要素を取得する
    // 正解の要素を青色にする
    document.getElementById("choice_"+index+"_"+valid_id).style.backgroundColor = "skyblue"
    document.getElementById("choice_"+index+"_"+valid_id).style.color = "white"


    // クリックした要素が正解なら正解を表示する
    if (selection_id === valid_id){
        const answerTrue = document.getElementById("answer_true_"+index)
        answerTrue.classList.remove("unlook")
        answerTrue.classList.add("answer-true")
    }
    // クリックした要素が不正解なら要素を赤色にして、不正解を表示する
    else{
        document.getElementById("choice_"+index+"_"+selection_id).style.backgroundColor = "red"
        const answerFalse = document.getElementById("answer_false_"+index)
        answerFalse.classList.add("unlook")
        answerFalse.classList.add("answer-false")
    }


}

window.onload = createhtml();