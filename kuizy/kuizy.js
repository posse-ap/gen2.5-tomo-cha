// const question = document.getElementById('question');
// let a = '<h1 class="title">ガチで東京の人しか解けない！ #東京の難読地名クイズ</h1>'
//         +'<div class="question">'
//         +'<h2 class="question_title">1. この地名はなんて読む？</h2>'
//         +'<img class="question_img" src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="たかなわ">'
//         +'<ul class="question_list">'
//             +'<li id="wrong_1_1" class="question_list_item">たかわ</li>'
//             +'<li id="wrong_1_2" class="question_list_item">こうわ</li>'
//             +'<li id="correct_1" class="question_list_item">たかなわ</li>'
//         +'</ul>'
//         +'<p id="questionCorrectAnswer_1" class="question_correct_answer"><b>正解！</b><br>正解は「たかなわ」です！</p>'
//         +'<p id="questionWrongAnswer_1" class="question_wrong_answer"><b>不正解！</b><br>正解は「たかなわ」です！</p>'
//         +'</div>';
// question.insertAdjacentHTML('afterbegin', a);

// 正答のidを取得
// for (let i=1; i<=10; i++ ) {
//     const correct_i = document.getElementById(`correct_${i}`)
// }

document.getElementById("correct_1").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
  };
const correctArray = [
    "correct_1",
    "correct_2",
    "correct_3",
    "correct_4",
    "correct_5",
    "correct_6",
    "correct_7",
    "correct_8",
    "correct_9",
    "correct_10",
];
for (let i=0; i<correctArray.length; i++) {
    correctArray[i] = document.getElementById(correctArray[i])
    console.log(correctArray[i])
}
// const correct_1 = document.getElementById(`correct_1`)
// const correct_2 = document.getElementById(`correct_2`)
// const correct_3 = document.getElementById(`correct_3`)
// const correct_4 = document.getElementById(`correct_4`)
// const correct_5 = document.getElementById(`correct_5`)
// const correct_6 = document.getElementById(`correct_6`)
// const correct_7 = document.getElementById(`correct_7`)
// const correct_8 = document.getElementById(`correct_8`)
// const correct_9 = document.getElementById(`correct_9`)
// const correct_10 = document.getElementById(`correct_10`)

// 正答を選んだときの答えのidを取得`
const questionCorrectArray = [
    "questionCorrectAnswer_1",
    "questionCorrectAnswer_2",
    "questionCorrectAnswer_3",
    "questionCorrectAnswer_4",
    "questionCorrectAnswer_5",
    "questionCorrectAnswer_6",
    "questionCorrectAnswer_7",
    "questionCorrectAnswer_8",
    "questionCorrectAnswer_9",
    "questionCorrectAnswer_10",
];
for (let i=0; i<questionCorrectArray.length; i++) {
    questionCorrectArray[i] = document.getElementById(questionCorrectArray[i])
    console.log(questionCorrectArray[i])
}
// const questionCorrectAnswer_1 = document.getElementById('questionCorrectAnswer_1')
// const questionCorrectAnswer_2 = document.getElementById('questionCorrectAnswer_2')
// const questionCorrectAnswer_3 = document.getElementById('questionCorrectAnswer_3')
// const questionCorrectAnswer_4 = document.getElementById('questionCorrectAnswer_4')
// const questionCorrectAnswer_5 = document.getElementById('questionCorrectAnswer_5')
// const questionCorrectAnswer_6 = document.getElementById('questionCorrectAnswer_6')
// const questionCorrectAnswer_7 = document.getElementById('questionCorrectAnswer_7')
// const questionCorrectAnswer_8 = document.getElementById('questionCorrectAnswer_8')
// const questionCorrectAnswer_9 = document.getElementById('questionCorrectAnswer_9')
// const questionCorrectAnswer_10 = document.getElementById('questionCorrectAnswer_10')

// 正答を選んだとき、変化後のクラス名を足す
// pushedに-が使えない件について。pushed-1とかするとエラーを吐く。
// for (let i = 1; i<=10; i++) {
//     function pushedCorrect_i(){
//         correct_i.classList.add('question_list_item-correct')
//         question_correct_answer_i.classList.add('question_correct_answer-visible')
//         wrong_i.classList.add('question_list_item_don\'tPush')
//     }
// }
function pushedCorrect_1(){
    correct_1.classList.add('question_list_item-correct')
    questionCorrectAnswer_1.classList.add('question_correct_answer-visible')
    wrong_1_1.classList.add('question_list_item_don\'tPush')
    wrong_1_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_2(){
    correct_2.classList.add('question_list_item-correct')
    questionCorrectAnswer_2.classList.add('question_correct_answer-visible')
    wrong_2_1.classList.add('question_list_item_don\'tPush')
    wrong_2_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_3(){
    correct_3.classList.add('question_list_item-correct')
    questionCorrectAnswer_3.classList.add('question_correct_answer-visible')
    wrong_3_1.classList.add('question_list_item_don\'tPush')
    wrong_3_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_4(){
    correct_4.classList.add('question_list_item-correct')
    questionCorrectAnswer_4.classList.add('question_correct_answer-visible')
    wrong_4_1.classList.add('question_list_item_don\'tPush')
    wrong_4_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_5(){
    correct_5.classList.add('question_list_item-correct')
    questionCorrectAnswer_5.classList.add('question_correct_answer-visible')
    wrong_5_1.classList.add('question_list_item_don\'tPush')
    wrong_5_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_6(){
    correct_6.classList.add('question_list_item-correct')
    questionCorrectAnswer_6.classList.add('question_correct_answer-visible')
    wrong_6_1.classList.add('question_list_item_don\'tPush')
    wrong_6_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_7(){
    correct_7.classList.add('question_list_item-correct')
    questionCorrectAnswer_7.classList.add('question_correct_answer-visible')
    wrong_7_1.classList.add('question_list_item_don\'tPush')
    wrong_7_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_8(){
    correct_8.classList.add('question_list_item-correct')
    questionCorrectAnswer_8.classList.add('question_correct_answer-visible')
    wrong_8_1.classList.add('question_list_item_don\'tPush')
    wrong_8_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_9(){
    correct_9.classList.add('question_list_item-correct')
    questionCorrectAnswer_9.classList.add('question_correct_answer-visible')
    wrong_9_1.classList.add('question_list_item_don\'tPush')
    wrong_9_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_10(){
    correct_10.classList.add('question_list_item-correct')
    questionCorrectAnswer_10.classList.add('question_correct_answer-visible')
    wrong_10_1.classList.add('question_list_item_don\'tPush')
    wrong_10_2.classList.add('question_list_item_don\'tPush')
}
// 正答を押したときpushed関数を呼び出す
correct_1.addEventListener("click", pushedCorrect_1)
correct_2.addEventListener("click", pushedCorrect_2)
correct_3.addEventListener("click", pushedCorrect_3)
correct_4.addEventListener("click", pushedCorrect_4)
correct_5.addEventListener("click", pushedCorrect_5)
correct_6.addEventListener("click", pushedCorrect_6)
correct_7.addEventListener("click", pushedCorrect_7)
correct_8.addEventListener("click", pushedCorrect_8)
correct_9.addEventListener("click", pushedCorrect_9)
correct_10.addEventListener("click", pushedCorrect_10)



// 誤答のidを取得
// for (let i=1; i<=10; i++ ) {
//     for (let h=1; h<=2; h++ ) {
//         const wrong_i_h = document.getElementById(`wrong_${i}_${h}`)
//     }
// }
const wrong_1_1 = document.getElementById('wrong_1_1')
const wrong_2_1 = document.getElementById('wrong_2_1')
const wrong_3_1 = document.getElementById('wrong_3_1')
const wrong_4_1 = document.getElementById('wrong_4_1')
const wrong_5_1 = document.getElementById('wrong_5_1')
const wrong_6_1 = document.getElementById('wrong_6_1')
const wrong_7_1 = document.getElementById('wrong_7_1')
const wrong_8_1 = document.getElementById('wrong_8_1')
const wrong_9_1 = document.getElementById('wrong_9_1')
const wrong_10_1 = document.getElementById('wrong_10_1')

const wrong_1_2 = document.getElementById('wrong_1_2')
const wrong_2_2 = document.getElementById('wrong_2_2')
const wrong_3_2 = document.getElementById('wrong_3_2')
const wrong_4_2 = document.getElementById('wrong_4_2')
const wrong_5_2 = document.getElementById('wrong_5_2')
const wrong_6_2 = document.getElementById('wrong_6_2')
const wrong_7_2 = document.getElementById('wrong_7_2')
const wrong_8_2 = document.getElementById('wrong_8_2')
const wrong_9_2 = document.getElementById('wrong_9_2')
const wrong_10_2 = document.getElementById('wrong_10_2')

// 誤答を選んだときの答えのidを取得
const questionWrongAnswer_1 = document.getElementById('questionWrongAnswer_1')
const questionWrongAnswer_2 = document.getElementById('questionWrongAnswer_2')
const questionWrongAnswer_3 = document.getElementById('questionWrongAnswer_3')
const questionWrongAnswer_4 = document.getElementById('questionWrongAnswer_4')
const questionWrongAnswer_5 = document.getElementById('questionWrongAnswer_5')
const questionWrongAnswer_6 = document.getElementById('questionWrongAnswer_6')
const questionWrongAnswer_7 = document.getElementById('questionWrongAnswer_7')
const questionWrongAnswer_8 = document.getElementById('questionWrongAnswer_8')
const questionWrongAnswer_9 = document.getElementById('questionWrongAnswer_9')
const questionWrongAnswer_10 = document.getElementById('questionWrongAnswer_10')




// 誤答を選んだとき、変化後のクラス名を足す
function pushedWrong_1_1(){
    wrong_1_1.classList.add('question_list_item-wrong')
    // wrong_1_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_1.classList.add('question_wrong_answer-visible')
    correct_1.classList.add('question_list_item_don\'tPush')
    wrong_1_2.classList.add('question_list_item_don\'tPush')
    correct_1.classList.add('question_list_item-correct')
}
function pushedWrong_2_1(){
    wrong_2_1.classList.add('question_list_item-wrong')
    // wrong_2_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_2.classList.add('question_wrong_answer-visible')
    correct_2.classList.add('question_list_item_don\'tPush')
    wrong_2_2.classList.add('question_list_item_don\'tPush')
    correct_2.classList.add('question_list_item-correct')
}
function pushedWrong_3_1(){
    wrong_3_1.classList.add('question_list_item-wrong')
    // wrong_3_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_3.classList.add('question_wrong_answer-visible')
    correct_3.classList.add('question_list_item_don\'tPush')
    wrong_3_2.classList.add('question_list_item_don\'tPush')
    correct_3.classList.add('question_list_item-correct')
}
function pushedWrong_4_1(){
    wrong_4_1.classList.add('question_list_item-wrong')
    // wrong_4_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_4.classList.add('question_wrong_answer-visible')
    correct_4.classList.add('question_list_item_don\'tPush')
    wrong_4_2.classList.add('question_list_item_don\'tPush')
    correct_4.classList.add('question_list_item-correct')
}
function pushedWrong_5_1(){
    wrong_5_1.classList.add('question_list_item-wrong')
    // wrong_5_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_5.classList.add('question_wrong_answer-visible')
    correct_5.classList.add('question_list_item_don\'tPush')
    wrong_5_2.classList.add('question_list_item_don\'tPush')
    correct_5.classList.add('question_list_item-correct')
}
function pushedWrong_6_1(){
    wrong_6_1.classList.add('question_list_item-wrong')
    // wrong_6_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_6.classList.add('question_wrong_answer-visible')
    correct_6.classList.add('question_list_item_don\'tPush')
    wrong_6_2.classList.add('question_list_item_don\'tPush')
    correct_6.classList.add('question_list_item-correct')
}
function pushedWrong_7_1(){
    wrong_7_1.classList.add('question_list_item-wrong')
    // wrong_7_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_7.classList.add('question_wrong_answer-visible')
    correct_7.classList.add('question_list_item_don\'tPush')
    wrong_7_2.classList.add('question_list_item_don\'tPush')
    correct_7.classList.add('question_list_item-correct')
}
function pushedWrong_8_1(){
    wrong_8_1.classList.add('question_list_item-wrong')
    // wrong_8_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_8.classList.add('question_wrong_answer-visible')
    correct_8.classList.add('question_list_item_don\'tPush')
    wrong_8_2.classList.add('question_list_item_don\'tPush')
    correct_8.classList.add('question_list_item-correct')
}
function pushedWrong_9_1(){
    wrong_9_1.classList.add('question_list_item-wrong')
    // wrong_9_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_9.classList.add('question_wrong_answer-visible')
    correct_9.classList.add('question_list_item_don\'tPush')
    wrong_9_2.classList.add('question_list_item_don\'tPush')
    correct_9.classList.add('question_list_item-correct')
}
function pushedWrong_10_1(){
    wrong_10_1.classList.add('question_list_item-wrong')
    // wrong_10_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_10.classList.add('question_wrong_answer-visible')
    correct_10.classList.add('question_list_item_don\'tPush')
    wrong_10_2.classList.add('question_list_item_don\'tPush')
    correct_10.classList.add('question_list_item-correct')
}

function pushedWrong_1_2(){
    // wrong_1_1.classList.add('question_list_item-wrong')
    wrong_1_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_1.classList.add('question_wrong_answer-visible')
    correct_1.classList.add('question_list_item_don\'tPush')
    wrong_1_1.classList.add('question_list_item_don\'tPush')
    correct_1.classList.add('question_list_item-correct')
}
function pushedWrong_2_2(){
    // wrong_2_1.classList.add('question_list_item-wrong')
    wrong_2_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_2.classList.add('question_wrong_answer-visible')
    correct_2.classList.add('question_list_item_don\'tPush')
    wrong_2_1.classList.add('question_list_item_don\'tPush')
    correct_2.classList.add('question_list_item-correct')
}
function pushedWrong_3_2(){
    // wrong_3_1.classList.add('question_list_item-wrong')
    wrong_3_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_3.classList.add('question_wrong_answer-visible')
    correct_3.classList.add('question_list_item_don\'tPush')
    wrong_3_1.classList.add('question_list_item_don\'tPush')
    correct_3.classList.add('question_list_item-correct')
}
function pushedWrong_4_2(){
    // wrong_4_1.classList.add('question_list_item-wrong')
    wrong_4_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_4.classList.add('question_wrong_answer-visible')
    correct_4.classList.add('question_list_item_don\'tPush')
    wrong_4_1.classList.add('question_list_item_don\'tPush')
    correct_4.classList.add('question_list_item-correct')
}
function pushedWrong_5_2(){
    // wrong_5_1.classList.add('question_list_item-wrong')
    wrong_5_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_5.classList.add('question_wrong_answer-visible')
    correct_5.classList.add('question_list_item_don\'tPush')
    wrong_5_1.classList.add('question_list_item_don\'tPush')
    correct_5.classList.add('question_list_item-correct')
}
function pushedWrong_6_2(){
    // wrong_6_1.classList.add('question_list_item-wrong')
    wrong_6_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_6.classList.add('question_wrong_answer-visible')
    correct_6.classList.add('question_list_item_don\'tPush')
    wrong_6_1.classList.add('question_list_item_don\'tPush')
    correct_6.classList.add('question_list_item-correct')
}
function pushedWrong_7_2(){
    // wrong_7_1.classList.add('question_list_item-wrong')
    wrong_7_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_7.classList.add('question_wrong_answer-visible')
    correct_7.classList.add('question_list_item_don\'tPush')
    wrong_7_1.classList.add('question_list_item_don\'tPush')
    correct_7.classList.add('question_list_item-correct')
}
function pushedWrong_8_2(){
    // wrong_8_1.classList.add('question_list_item-wrong')
    wrong_8_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_8.classList.add('question_wrong_answer-visible')
    correct_8.classList.add('question_list_item_don\'tPush')
    wrong_8_1.classList.add('question_list_item_don\'tPush')
    correct_8.classList.add('question_list_item-correct')
}
function pushedWrong_9_2(){
    // wrong_9_1.classList.add('question_list_item-wrong')
    wrong_9_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_9.classList.add('question_wrong_answer-visible')
    correct_9.classList.add('question_list_item_don\'tPush')
    wrong_9_1.classList.add('question_list_item_don\'tPush')
    correct_9.classList.add('question_list_item-correct')
}
function pushedWrong_10_2(){
    // wrong_10_1.classList.add('question_list_item-wrong')
    wrong_10_2.classList.add('question_list_item-wrong')
    questionWrongAnswer_10.classList.add('question_wrong_answer-visible')
    correct_10.classList.add('question_list_item_don\'tPush')
    wrong_10_1.classList.add('question_list_item_don\'tPush')
    correct_10.classList.add('question_list_item-correct')
}

// 誤答を押したときpushed関数を呼び出す
wrong_1_1.addEventListener("click", pushedWrong_1_1)
wrong_2_1.addEventListener("click", pushedWrong_2_1)
wrong_3_1.addEventListener("click", pushedWrong_3_1)
wrong_4_1.addEventListener("click", pushedWrong_4_1)
wrong_5_1.addEventListener("click", pushedWrong_5_1)
wrong_6_1.addEventListener("click", pushedWrong_6_1)
wrong_7_1.addEventListener("click", pushedWrong_7_1)
wrong_8_1.addEventListener("click", pushedWrong_8_1)
wrong_9_1.addEventListener("click", pushedWrong_9_1)
wrong_10_1.addEventListener("click", pushedWrong_10_1)

wrong_1_2.addEventListener("click", pushedWrong_1_2)
wrong_2_2.addEventListener("click", pushedWrong_2_2)
wrong_3_2.addEventListener("click", pushedWrong_3_2)
wrong_4_2.addEventListener("click", pushedWrong_4_2)
wrong_5_2.addEventListener("click", pushedWrong_5_2)
wrong_6_2.addEventListener("click", pushedWrong_6_2)
wrong_7_2.addEventListener("click", pushedWrong_7_2)
wrong_8_2.addEventListener("click", pushedWrong_8_2)
wrong_9_2.addEventListener("click", pushedWrong_9_2)
wrong_10_2.addEventListener("click", pushedWrong_10_2)