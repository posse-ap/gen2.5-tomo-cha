// questionのidを取得
const question = document.getElementById('question');
// 選択肢のリスト作成
const selection = [
    ["たかわ", "こうわ", "たかなわ"],
    ["かめと", "かめど", "かめいど"],
    ["おかとまち", "かゆまち", "こうじまち"],
    ["ごせいもん", "おかともん", "おなりもん"],
    ["たたら", "たたりき", "とどろき"],
    ["せきこうい", "いじい", "しゃくじい"],
    ["ざっしき", "ざっしょく", "ぞうしき"],
    ["ごしろちょう", "みとちょう", "おかちまち"],
    ["こばく", "こしゃく", "こぐれ"],
];


// 画像のリスト作成
const img = [
    "https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png",
    "https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png",
    "https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png",
];

// console.log(li[0])


// htmlをjsで記入
for (let i=0; i<10; i++ ) {
    const li = [
        `<li id="wrong_${i}_0" onclick="check(${i}, 0)" class="question_list_item">${selection[i][0]}</li>`,
        `<li id="wrong_${i}_1" onclick="check(${i}, 1)" class="question_list_item">${selection[i][1]}</li>`,
        `<li id="correct_${i}_2" onclick="check(${i}, 2)" class="question_list_item">${selection[i][2]}</li>`
    ]

    for(j=li.length-1 ; j>0; j--){

        r = Math.floor(Math.random()*(j+1))
        tmp = li[j]
        li[j] = li[r]
        li[r] = tmp
    }

    let a =
        '<div class="question">'
            +`<h2 class="question_title">${i+1}. この地名はなんて読む？</h2>`
            +`<img class="question_img" src=${img[i]} alt="${selection[i][2]}">`
            +`<ul id="questionList_${i}" class="question_list">`
                +`${li[0]}`
                +`${li[1]}`
                +`${li[2]}`
            +'</ul>'
            +`<p id="questionCorrectAnswer_${i}_2" class="question_correct_answer"><b>正解！</b><br>正解は「${selection[i][2]}」です！</p>`
            +`<p id="questionWrongAnswer_${i}" class="question_wrong_answer"><b>不正解！</b><br>正解は「${selection[i][2]}」です！</p>`
        +'</div>';
    question.insertAdjacentHTML('beforeend', a);
}
// checkの関数
function check(question_number, selection_number) {
    const wrongAnswerBox = document.getElementById("wrong_"+question_number+"_"+selection_number);
    const correctAnswerBox = document.getElementById("correct_"+question_number+"_"+selection_number);
    const alwaysCorrectAnswerBox = document.getElementById("correct_"+question_number+"_"+2);
    const questionListBox = document.getElementById("questionList_"+question_number);
    const questionCorrectAnswerBox = document.getElementById("questionCorrectAnswer_"+question_number+"_"+selection_number);
    const questionWrongAnswerBox = document.getElementById("questionWrongAnswer_"+question_number);
    if (selection_number === 2) {
        
        correctAnswerBox.classList.add('question_list_item-correct');
        questionCorrectAnswerBox.classList.add('question_correct_answer-visible');
        questionListBox.classList.add('question_list_item_don\'tPush');
    }else{
        
        wrongAnswerBox.classList.add('question_list_item-wrong');
        alwaysCorrectAnswerBox.classList.add('question_list_item-correct');
        questionWrongAnswerBox.classList.add('question_wrong_answer-visible');
        questionListBox.classList.add('question_list_item_don\'tPush');
    }
}



// document.getElementById(correct_i).onclick = function() {
//     // ここに#buttonをクリックしたら発生させる処理を記述する
//     this.classList.add("question_list_item-correct");
// };

// 正答を選んだときの答えのidを取得`
// const questionCorrectArray = [
//     "questionCorrectAnswer_1",
// ];

// for (let i=0; i<questionCorrectArray.length; i++) {
//     questionCorrectArray[i] = document.getElementById(questionCorrectArray[i])
//     console.log(questionCorrectArray[i])
// }

// function pushedCorrect_1(){
//     correct_1.classList.add('question_list_item-correct')
//     questionCorrectAnswer_1.classList.add('question_correct_answer-visible')
//     wrong_1_1.classList.add('question_list_item_don\'tPush')
//     wrong_1_2.classList.add('question_list_item_don\'tPush')
// }

// // 正答を押したときpushed関数を呼び出す
// correct_1.addEventListener("click", pushedCorrect_1)

// const wrong_1_1 = document.getElementById('wrong_1_1')

// const wrong_1_2 = document.getElementById('wrong_1_2')

// // 誤答を選んだときの答えのidを取得
// const questionWrongAnswer_1 = document.getElementById('questionWrongAnswer_1')

// // 誤答を選んだとき、変化後のクラス名を足す
// function pushedWrong_1_1(){
//     wrong_1_1.classList.add('question_list_item-wrong')
//     // wrong_1_2.classList.add('question_list_item-wrong')
//     questionWrongAnswer_1.classList.add('question_wrong_answer-visible')
//     correct_1.classList.add('question_list_item_don\'tPush')
//     wrong_1_2.classList.add('question_list_item_don\'tPush')
//     correct_1.classList.add('question_list_item-correct')
// }

// function pushedWrong_1_2(){
//     // wrong_1_1.classList.add('question_list_item-wrong')
//     wrong_1_2.classList.add('question_list_item-wrong')
//     questionWrongAnswer_1.classList.add('question_wrong_answer-visible')
//     correct_1.classList.add('question_list_item_don\'tPush')
//     wrong_1_1.classList.add('question_list_item_don\'tPush')
//     correct_1.classList.add('question_list_item-correct')
// }


// // 誤答を押したときpushed関数を呼び出す
// wrong_1_1.addEventListener("click", pushedWrong_1_1)

// wrong_1_2.addEventListener("click", pushedWrong_1_2)
