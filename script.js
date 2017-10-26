var letterGuess = $('.letterGuess').val()
var newGameButton = $ ('.newGame')
var solvePuzzleButton = $('.solve')
var guessLetterButton = $('.letterGuessButton')
var previouslyGuessed = []
var triesLeft = 6
$('.hangmanBody').show()
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
  $('.previouslyGuessedDisplay').html('')

  $('.hangmanBody').hide()
  $('.wordEntry').val('') //RESETS INPUT BOX
  $('.letter').remove()   //RESETS GAME BOARD

  for(var i = 0; i < lettersInWord.length; i++){  //MAKES NEW GAME BOARD
    gameBoard.append($("<div class ='letter' data-letter =" + lettersInWord[i] + "> <div class = 'indivLetter " +lettersInWord[i] +  "'>" + lettersInWord[i] + "</div> </div>"))
  }
  $('.indivLetter').hide() //HIDES LETTERS INSIDE BOXES
}


function guessLetterExec (){
  letterGuess = $('.letterGuess').val()
  $('.letterGuess').val('')

  if (lettersInWord.includes(letterGuess)){
    $('.'+letterGuess).show()
      //REMOVES LETTERGUESS FROM LETTERSINPLAY
      lettersInPlay = lettersInPlay.filter(val => val !== letterGuess)
      if (lettersInPlay.length == 0){
        alert ('you guessed it! good job!')
      }



  } else if (previouslyGuessed.includes(letterGuess)) {
    alert ('this letter has already been guessed--try again')
  } else{
    triesLeft -=1
    previouslyGuessed.push(letterGuess)  //appends to array of guessed letters
    bodyPartAdd();
    if (triesLeft <= 0){
      alert ("Wow, you lose.")
    }
  }
  $('.previouslyGuessedDisplay').html(previouslyGuessed + ' ')
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
