const correct_1 = document.getElementById('correct_1')
const correctBox_1 = document.getElementById('correctBox_1')
correctBox_1.style.display = "none"
function pushed(){
    correct_1.classList.add('choices_after')
    correctBox_1.style.display = "block"
}