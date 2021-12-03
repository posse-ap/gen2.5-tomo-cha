// 正答のidを取得
for (let i=1; i<=10; i++ ) {
    const correct_i = document.getElementById(`correct_${i}`)
}
// 誤答のidを取得
for (let h=1; h<=10; h++ ) {
    const wrong_h = document.getElementById(`wrong_${h}`)
}
// const wrong_1 = document.getElementById('wrong_1')
// const wrong_2 = document.getElementById('wrong_2')
// const wrong_3 = document.getElementById('wrong_3')
// const wrong_4 = document.getElementById('wrong_4')
// const wrong_5 = document.getElementById('wrong_5')
// const wrong_6 = document.getElementById('wrong_6')
// const wrong_7 = document.getElementById('wrong_7')
// const wrong_8 = document.getElementById('wrong_8')
// const wrong_9 = document.getElementById('wrong_9')
// const wrong_10 = document.getElementById('wrong_10')
// 正答を選んだときの答えのidを取得
const question_correct_answer_1 = document.getElementById('question_correct_answer_1')
const question_correct_answer_2 = document.getElementById('question_correct_answer_2')
const question_correct_answer_3 = document.getElementById('question_correct_answer_3')
const question_correct_answer_4 = document.getElementById('question_correct_answer_4')
const question_correct_answer_5 = document.getElementById('question_correct_answer_5')
const question_correct_answer_6 = document.getElementById('question_correct_answer_6')
const question_correct_answer_7 = document.getElementById('question_correct_answer_7')
const question_correct_answer_8 = document.getElementById('question_correct_answer_8')
const question_correct_answer_9 = document.getElementById('question_correct_answer_9')
const question_correct_answer_10 = document.getElementById('question_correct_answer_10')
// 誤答を選んだときの答えのidを取得
const question_wrong_answer_1 = document.getElementById('question_wrong_answer_1')
const question_wrong_answer_2 = document.getElementById('question_wrong_answer_2')
const question_wrong_answer_3 = document.getElementById('question_wrong_answer_3')
const question_wrong_answer_4 = document.getElementById('question_wrong_answer_4')
const question_wrong_answer_5 = document.getElementById('question_wrong_answer_5')
const question_wrong_answer_6 = document.getElementById('question_wrong_answer_6')
const question_wrong_answer_7 = document.getElementById('question_wrong_answer_7')
const question_wrong_answer_8 = document.getElementById('question_wrong_answer_8')
const question_wrong_answer_9 = document.getElementById('question_wrong_answer_9')
const question_wrong_answer_10 = document.getElementById('question_wrong_answer_10')
// 正答を選んだとき、変化後のクラス名を足す
// pushedに-が使えない件について。pushed-1とかするとエラーを吐く。
function pushedCorrect_1(){
    correct_1.classList.add('question_list_item-correct')
    question_correct_answer_1.classList.add('question_correct_answer-visible')
    wrong_1.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_2(){
    correct_2.classList.add('question_list_item-correct')
    question_correct_answer_2.classList.add('question_correct_answer-visible')
    wrong_2.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_3(){
    correct_3.classList.add('question_list_item-correct')
    question_correct_answer_3.classList.add('question_correct_answer-visible')
    wrong_3.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_4(){
    correct_4.classList.add('question_list_item-correct')
    question_correct_answer_4.classList.add('question_correct_answer-visible')
    wrong_4.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_5(){
    correct_5.classList.add('question_list_item-correct')
    question_correct_answer_5.classList.add('question_correct_answer-visible')
    wrong_5.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_6(){
    correct_6.classList.add('question_list_item-correct')
    question_correct_answer_6.classList.add('question_correct_answer-visible')
    wrong_6.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_7(){
    correct_7.classList.add('question_list_item-correct')
    question_correct_answer_7.classList.add('question_correct_answer-visible')
    wrong_7.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_8(){
    correct_8.classList.add('question_list_item-correct')
    question_correct_answer_8.classList.add('question_correct_answer-visible')
    wrong_8.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_9(){
    correct_9.classList.add('question_list_item-correct')
    question_correct_answer_9.classList.add('question_correct_answer-visible')
    wrong_9.classList.add('question_list_item_don\'tPush')
}
function pushedCorrect_10(){
    correct_10.classList.add('question_list_item-correct')
    question_correct_answer_10.classList.add('question_correct_answer-visible')
    wrong_10.classList.add('question_list_item_don\'tPush')
}
// 誤答を選んだとき、変化後のクラス名を足す
function pushedWrong_1(){
    wrong_1.classList.add('question_list_item-wrong')
    question_wrong_answer_1.classList.add('question_wrong_answer-visible')
    correct_1.classList.add('question_list_item_don\'tPush')
    correct_1.classList.add('question_list_item-correct')
}
function pushedWrong_2(){
    wrong_2.classList.add('question_list_item-wrong')
    question_wrong_answer_2.classList.add('question_wrong_answer-visible')
    correct_2.classList.add('question_list_item_don\'tPush')
    correct_2.classList.add('question_list_item-correct')
}
function pushedWrong_3(){
    wrong_3.classList.add('question_list_item-wrong')
    question_wrong_answer_3.classList.add('question_wrong_answer-visible')
    correct_3.classList.add('question_list_item_don\'tPush')
    correct_3.classList.add('question_list_item-correct')
}
function pushedWrong_4(){
    wrong_4.classList.add('question_list_item-wrong')
    question_wrong_answer_4.classList.add('question_wrong_answer-visible')
    correct_4.classList.add('question_list_item_don\'tPush')
    correct_4.classList.add('question_list_item-correct')
}
function pushedWrong_5(){
    wrong_5.classList.add('question_list_item-wrong')
    question_wrong_answer_5.classList.add('question_wrong_answer-visible')
    correct_5.classList.add('question_list_item_don\'tPush')
    correct_5.classList.add('question_list_item-correct')
}
function pushedWrong_6(){
    wrong_6.classList.add('question_list_item-wrong')
    question_wrong_answer_6.classList.add('question_wrong_answer-visible')
    correct_6.classList.add('question_list_item_don\'tPush')
    correct_6.classList.add('question_list_item-correct')
}
function pushedWrong_7(){
    wrong_7.classList.add('question_list_item-wrong')
    question_wrong_answer_7.classList.add('question_wrong_answer-visible')
    correct_7.classList.add('question_list_item_don\'tPush')
    correct_7.classList.add('question_list_item-correct')
}
function pushedWrong_8(){
    wrong_8.classList.add('question_list_item-wrong')
    question_wrong_answer_8.classList.add('question_wrong_answer-visible')
    correct_8.classList.add('question_list_item_don\'tPush')
    correct_8.classList.add('question_list_item-correct')
}
function pushedWrong_9(){
    wrong_9.classList.add('question_list_item-wrong')
    question_wrong_answer_9.classList.add('question_wrong_answer-visible')
    correct_9.classList.add('question_list_item_don\'tPush')
    correct_9.classList.add('question_list_item-correct')
}
function pushedWrong_10(){
    wrong_10.classList.add('question_list_item-wrong')
    question_wrong_answer_10.classList.add('question_wrong_answer-visible')
    correct_10.classList.add('question_list_item_don\'tPush')
    correct_10.classList.add('question_list_item-correct')
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
// 誤答を押したときpushed関数を呼び出す
wrong_1.addEventListener("click", pushedWrong_1)
wrong_2.addEventListener("click", pushedWrong_2)
wrong_3.addEventListener("click", pushedWrong_3)
wrong_4.addEventListener("click", pushedWrong_4)
wrong_5.addEventListener("click", pushedWrong_5)
wrong_6.addEventListener("click", pushedWrong_6)
wrong_7.addEventListener("click", pushedWrong_7)
wrong_8.addEventListener("click", pushedWrong_8)
wrong_9.addEventListener("click", pushedWrong_9)
wrong_10.addEventListener("click", pushedWrong_10)