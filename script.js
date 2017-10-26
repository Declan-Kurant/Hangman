var letterGuess = $('.letterGuess').val()
var newGameButton = $ ('.newGame')
var solvePuzzleButton = $('.solve')
var guessLetterButton = $('.letterGuessButton')
var previouslyGuessed = []
var triesLeft = 6
$('.hangmanBody').hide()
var lettersInWord = []
var lettersInPlay = []
var gameBoard = $('#gameWordWrapper')


newGameButton.on('click', makeNewGame)
solvePuzzleButton.on('click', solvePuzzleCheck)
guessLetterButton.on('click', guessLetterExec)

function makeNewGame(){
  triesLeft = 6
  wordEntry = $('.wordEntry').val()
  lettersInWord = wordEntry.split('')
  lettersInPlay = lettersInWord
  previouslyGuessed = []
  $('.hangmanBody').hide()
  $('.wordEntry').val('') //RESETS INPUT BOX
  $('.letter').remove()   //RESETS GAME BOARD

  for(var i = 0; i < lettersInWord.length; i++){  //MAKES NEW GAME BOARD
    gameBoard.append($("<div class ='letter' data-letter =" + lettersInWord[i] + "> <div class = 'indivLetter'>" + lettersInWord[i] + "</div> </div>"))
  }
  $('.indivLetter').hide() //HIDES LETTERS INSIDE BOXES

}


function guessLetterExec (){
  letterGuess = $('.letterGuess').val()
  if (lettersInWord.includes(letterGuess)){
    // GUESS IS CORRECT -->REVEAL DIVS AS NEEDED
      console.log('gues is gud');
      // here: remove letterGuess from lettersInPlay

      // NO MORE LETTERS TO GUESS MEANS THEY WON
      // if (lettersInPlay.val == 0){
      //   alert ()
      //   break
      // }

    //SHOWS LETTER IF GUESSED CORRECT
    var letterDivs = document.getElementsByClassName('letter')
    if (true/* data-letter == letterGuess */){
      //toggle text div class
    }

    // find divs that contain this letter by scanning data attributes
      //if data-letter = letterGuess

    // run the div changing function (toggle the class)

  } else if (previouslyGuessed.includes(letterGuess)) {
    // letter has been guessed already
    // do nothing
    alert ('this letter has already been guessed--try again')

  } else{
    triesLeft -=1
    previouslyGuessed.push(letterGuess)  //appends to array of guessed letters
    bodyPartAdd();
    if (triesLeft <= 0){
      alert ("Wow, you lose.")
    }    //adds body part to hangman
  }
  letterGuess = null                   //resets stored letter to allow for new guess
}
function bodyPartAdd(){
  switch (triesLeft){
    case 5 :
      $('#head').show()
      break
    case 4 :
      $('#body').show()
      break
    case 3 :
      $('#leftArm').show()
      break
    case 2 :
      $('#rightArm').show()
      break
    case 1 :
      $('#leftLeg').show()
      break
    case 0 :
      $('#rightLeg').show()
      break
    case -1 :
      alert ('code must be broken if you got here but you should have lost by now')
      break
  }
}
function solvePuzzleCheck (){
  wordEntrySolve = $('.wordEntry').val()
  if (wordEntrySolve===wordEntry){
    alert ("You guessed correct! You rock!")
  } else {
    $('.hangmanBody').show()
    alert ("Yikes, that was wrong. Try harder.")
  }
}
