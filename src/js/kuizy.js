
const headerListItemHumburger = document.getElementById("headerListItemHumburger");
const side = document.getElementById("side");
headerListItemHumburger.onclick = function() {
    side.style.display = "block";
};
side.onclick = function() {
    side.style.display = "none";
};






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
    ["しこね","ろっこつ","ししぼね"],
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
// 解答のリスト作成
const answer = [
    `正解は「${selection[0][2]}」です！`,
    `正解は「${selection[1][2]}」です！`,
    `正解は「${selection[2][2]}」です！`,
    `正解は「${selection[3][2]}」です！`,
    `正解は「${selection[4][2]}」です！`,
    `正解は「${selection[5][2]}」です！`,
    `正解は「${selection[6][2]}」です！`,
    `正解は「${selection[7][2]}」です！`,
    `江戸川区にあります`,
    `正解は「${selection[9][2]}」です！`,
]

// htmlをjsで記入
// for (let i=0; i<10; i++ ) {
//     // 選択肢のliをまるごとリストにする
    // const li = [
    //     `<li id="wrong_${i}_0" onclick="check(${i}, 0)" class="question_list_item">${selection[i][0]}</li>`,
    //     `<li id="wrong_${i}_1" onclick="check(${i}, 1)" class="question_list_item">${selection[i][1]}</li>`,
    //     `<li id="correct_${i}_2" onclick="check(${i}, 2)" class="question_list_item">${selection[i][2]}</li>`
    // ]
    // // liの位置をランダムにする
    // for(j=li.length-1 ; j>0; j--){
    //     r = Math.floor(Math.random()*(j+1))
    //     tmp = li[j]
    //     li[j] = li[r]
    //     li[r] = tmp
    // }
//     // html本文をfor文で表示する
//     let a =
//         '<div class="question">'
//             +`<h2 class="question_title">${i+1}. この地名はなんて読む？</h2>`
//             +`<img class="question_img" src=${img[i]} alt="${selection[i][2]}">`
//             +`<ul id="questionList_${i}" class="question_list">`
//                 +`${li[0]}`
//                 +`${li[1]}`
//                 +`${li[2]}`
//             +'</ul>'
//             +`<p id="questionCorrectAnswer_${i}_2" class="question_correct_answer"><b>正解！</b><br>${answer[i]}</p>`
//             +`<p id="questionWrongAnswer_${i}" class="question_wrong_answer"><b>不正解！</b><br>${answer[i]}</p>`
//         +'</div>';
//     question.insertAdjacentHTML('beforeend', a);
// }
// 36~38のcheckの関数question_numberは大問番号、selection_numberは選択肢の番号を表す
function check(question_number, selection_number) {
    // 不正解ボタンを押したとき、idを取得
    const wrongAnswerBox = document.getElementById("wrong_"+question_number+"_"+selection_number);
    // 正解ボタンを押したとき、idを取得
    const correctAnswerBox = document.getElementById("correct_"+question_number+"_"+selection_number);
    // 常に正解ボタンのidを取得
    const alwaysCorrectAnswerBox = document.getElementById("correct_"+question_number+"_"+2);
    // リスト全体のidを取得
    const questionListBox = document.getElementById("questionList_"+question_number);
    // 正解。正解は「」です！のidを取得
    const questionCorrectAnswerBox = document.getElementById("questionCorrectAnswer_"+question_number+"_"+selection_number);
    // 不正解。正解は「」です！のidを取得
    const questionWrongAnswerBox = document.getElementById("questionWrongAnswer_"+question_number);

    if (selection_number === 2) {
        // 正解の選択肢を青色にする
        correctAnswerBox.classList.add('question_list_item-correct');
        // 正解。正解は「」です！
        questionCorrectAnswerBox.classList.add('question_correct_answer-visible');
        // 押せなくする
        questionListBox.classList.add('question_list_item_don\'tPush');
    }else{
        // 不正解の選択肢を赤色にする
        wrongAnswerBox.classList.add('question_list_item-wrong');
        // 正解の選択肢を青色にする
        alwaysCorrectAnswerBox.classList.add('question_list_item-correct');
        // 不正解。正解は「」です！を表示
        questionWrongAnswerBox.classList.add('question_wrong_answer-visible');
        // 押せなくする
        questionListBox.classList.add('question_list_item_don\'tPush');
    }
}