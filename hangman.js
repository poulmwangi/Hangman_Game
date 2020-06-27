
//global variables
let answer = ''
let maxWrong = 6;
let mistake = 0
let guessed = [];
let wordStatus = null;
let keyboard = document.querySelector('#keyboard');
let wrong = document.querySelector('#wrong');
let mistakes = document.querySelector('#mistakes')
let wordSpotlight = document.querySelector('.WordSpotlight')
let hint = document.querySelector('#hint');

wrong.innerHTML = maxWrong

//add an event (keypress, ) , this will enable users from a pc to type via the keyboard keys as an option
window.addEventListener('keypress',(e)=>{
letter = e.key;
guessed.indexOf(letter) ===  -1 ? guessed.push(letter) : null
document.getElementById(letter).setAttribute('disabled',true);

if(answer.includes(letter)){
    guessWord()
    checkWinLoss();
}
else {
    mistake++
    updateMistake()
    checkWinLoss()
}

})


generateBtns()
randomWord()
guessWord()
