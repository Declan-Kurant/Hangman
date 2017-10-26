var letterGuess = $('.letterGuess').val()
var newGameButton = $ ('.newGame')
var solvePuzzleButton = $('.solve')
var guessLetterButton = $('.letterGuessButton')
var previouslyGuessed = []
var triesLeft = 6



newGameButton.on('click', makeNewGame)
solvePuzzleButton.on('click', solvePuzzleCheck)
guessLetterButton.on('click', guessLetterExec)

function makeNewGame(){
  console.log('makenewgame works')
  wordEntryElement = $('.wordEntry')
  wordEntry = wordEntryElement.val()     //make sure this is defined globally
  lettersInWord = wordEntry.split('')
  $('.hangmanBody').hide()
  


  $('#game-word-display').html(wordEntry) //THIS WORKS WHEN IT'S HERE
  // console.log($('.wordEntry'))
  // $(".wordEntry").val() = ''
  // console.log($('.wordEntry'))

  function resetField() {
    $('.wordEntry').closest('form').find("input[type=text], textarea").val("")
  }
  resetField()



  // div making loop
  // var gameBoard = document.createDocumentFragment()
  // for (var i = 0; i < lettersInWord.length; i++) {
  //   var letterDivs = document.createElement('div');
  //   letterDivs.id = 'letter'+i
  //   letterDivs.className = "letter";
  //   gameBoard.appendChild(letterDivs);
  //   document.getElementsById('letter'+i)[0].setAttribute('data-letter', lettersInWord[i])
  // }
    // document.body.appendChild(gameBoard);


  //reset hangman person (toggle off the class)
}


function guessLetterExec (){
  letterGuess = $('.letterGuess').val()
  console.log (letterGuess)
  triesLeft -=1
  bodyPartAdd()


  // if (lettersInWord.includes(letterGuess)){
  //   var letterDivs = document.getElementsByClassName('letter')
  //   if (true/* data-letter == letterGuess */){
  //     //toggle display class
  //   }
  //
  //   // find divs that contain this letter by scanning data attributes
  //     //if data-letter = letterGuess
  //
  //   // run the div changing function (toggle the class)
  //
  // } else if (previouslyGuessed.includes(letterGuess)) {
  //   // letter has been guessed already
  //   // do nothing
  //   alert ('this letter has already been guessed--try again')
  //
  // } else{
  //   triesLeft -=1
  //   if (triesLeft === 0){
  //     alert ("Wow, you lose.")
  //   }
  //   previouslyGuessed.push(letterGuess)  //appends to array of guessed letters
  //   bodyPartAdd();     //adds body part to hangman
  // }
  // letterGuess = null                   //resets stored letter to allow for new guess
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
  if (true){ /// check the wordEntry input is equal to currently stored word entry
    alert ("You guessed correct! You rock!")
  } else {
    alert ("Yikes, that was wrong. Try harder.")
  }
}


//     LETTER DIVS BELOW
//   NOW ENTERING....
//makes number of divs based on length of inputted word
