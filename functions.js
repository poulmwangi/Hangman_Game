//asynchronous function that retrieves a random  two letter words from the url
const randomWord = async () =>{
    const word = await response;
    answer = word.puzzle;
    guessWord()
 }

 // function that creates the keyboards buttons and sets each buttons id as it letter
 function generateBtns(){
    let btns = `abcdefghijklmnopqrstuvwxyz`.split('').map(letter=>
        `<button
        class = "btn btn-lg btn-primary m-5"
        id = '`+ letter +`'
        onClick = "handleGuess('`+ letter +`')"
        >
        ${letter}
        </button>`
    ).join('  ')
   keyboard.innerHTML = btns
}

//Map each  letter of the word being guessed  to and _ character , space included
const guessWord = () =>{
    wordStatus = answer.toLowerCase().split('').map(letter =>(guessed.indexOf(letter) >=0 || letter === " "? letter: ` _ `)).join('')
    wordSpotlight.innerHTML = wordStatus
    hint.innerHTML = `Hint: <i>Sorry this will be available Soon</i>` 
}


//if no letter in guessed array, then push letter once the button is pressed

function handleGuess(letter){
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
    }



//word being guessed is correct then you won ,  if you make mistakes equal to 6(i.e max number of mistakes)  , then you lose and cant guess anymore
    const checkWinLoss = () =>{
 
        if(wordStatus === answer){
            keyboard.innerHTML = `You Won`
        }
         if( mistake >= maxWrong){
             wordSpotlight.innerHTML = `The Answer was: ${answer}`
            keyboard.innerHTML = `You Lost `
        }
    }


//reset everything and generate a new random word puzzle 
    const reset = () =>{
        mistake =0
        updateMistake()
        guessed = []
        randomWord()
        guessWord()
        generateBtns()
     }

//function to update the  mistakes from the DOM
const updateMistake = () => mistakes.innerHTML = mistake
