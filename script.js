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
// Good job putting your global variables and click events at the top

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


function guessLetterExec (){ // This function is a little lengthy and some of the logic could be broken out into other functions. I think the name of this function could be a little more clear too.
  letterGuess = $('.letterGuess').val()
  $('.letterGuess').val('')

  if (lettersInWord.includes(letterGuess)){
    $('.'+letterGuess).show()
    //REMOVES LETTERGUESS FROM LETTERSINPLAY
    lettersInPlay = lettersInPlay.filter(val => val !== letterGuess) // Nice job using filter!
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
      setTimeout(function(){ alert("Wow, you lose.") }, 10)
      //I'm trying to think of a way to answer your question about the alert happening before the body part is added, and I can't think of a way at the moment that isn't less hacky than this ^.  Alert is going to take precedence over any other function called at the same time - so putting the alert statement in a `setTimeout` method and giving the timer a very small amount of time (10 millisecs) will cause the bodyPartAdd function to run first.  Also, it might make more sense to put the `alert` in the bodyPartAdd function at `case 0:` - then you won't need an if statement.
    }
  }
  $('.previouslyGuessedDisplay').html(previouslyGuessed + ' ')
  letterGuess = null //resets stored letter to allow for new guess
}
function bodyPartAdd(){
  switch (triesLeft){ // Good use for a switch statement!
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
      // Ha, maybe take this out of your production branch, and use a `default` for your switch statement
  }
}
function solvePuzzleCheck (){
  wordEntrySolve = $('.wordEntry').val()
  if (wordEntrySolve === wordEntry){
    alert ("You guessed correct! You rock!")
  } else {
    $('.hangmanBody').show()
    alert ("Yikes, that was wrong. Try harder.")
  }
}

// Your JS is well organized and pretty strong overall.  The game also plays well.  Good job with DOM reading and manipulation.  There is a little bit of abstracting that could be done, but not too much.  I think the biggest improvements could be made by just expanding what you already have.  Here are some suggestions...
// - You could look into handling `keydown` events for if a user types `enter` on one of the `inputs`.  Alternatively, you could look into putting your input in a `form` and handling a `submit` event.
// - Instead of alerts, have a message show up on the page
// - A bit more color/styling/pizazz and would go along way
// - Overall great job!
