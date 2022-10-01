
const headerListItemHumburger = document.getElementById("headerListItemHumburger");
const side = document.getElementById("side");
headerListItemHumburger.onclick = function() {
    side.style.display = "block";
};
side.onclick = function() {
    side.style.display = "none";
};




// question_numberは大問番号、selection_numberは選択肢の番号を表す
function check(question_number, selection_number) {
    // 不正解ボタンを押したとき、idを取得
    const wrongAnswerBox = document.getElementById("wrong_"+question_number+"-"+selection_number);
    // 正解ボタンを押したとき、idを取得
    const correctAnswerBox = document.getElementById("correct_"+question_number+"-"+selection_number);
    // 常に正解ボタンのidを取得
    const alwaysCorrectAnswerBox = document.getElementById("correct_"+question_number+"-"+2);
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