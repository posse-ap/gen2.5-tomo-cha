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
// const answer = [

// ]

var contents = ""
//選択肢の順番をランダムにする
for (let i=0; i<choices.length; i++){
    var tmp = choices[i][0]
    var r = Math.floor(Math.random()*choices.length)
    var x = choices[i][r]
    choices[i][0] = x
    choices[i][r] = tmp
    contents +=  `<h2>${i+1}. この地名はなんて読む？</h2>`
            +`<img src=${img[i]} alt="">`
            +`<ul class="choicesBox">`
            +`    <li class="choices">${choices[i][0]}</li>`
            +`    <li class="choices">${choices[i][1]}</li>`
            +`    <li class="choices">${choices[i][2]}</li>`
            +`</ul>`
            +`<ul class="answerBox">`
            +`    <li class="answer-true"><b>正解！</b><br>正解は${tmp}です</li>`
            +`    <li class="answer-false"><b>不正解！</b><br>正解は${tmp}です</li>`
            +`</ul>`
}


//htmlに埋め込みをする
const main = document.getElementById("mainInner")
console.log(main)
main.insertAdjacentHTML("beforeend", contents);






//②クリック時の処理を記述する
//正解不正解を確認するための関数を作る

