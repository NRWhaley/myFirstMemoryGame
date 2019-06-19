


let playerScore = 0
let best = 0;



let buttonOne = document.getElementById('boxOne')
let buttonTwo = document.getElementById('boxTwo')
let buttonThree = document.getElementById('boxThree')
let buttonFour = document.getElementById('boxFour')

let playButton = document.getElementById('play');
let repeatButton = document.getElementById('repeat');
let resetButton = document.getElementById('reset');
let totalScore = document.getElementById('score');
let highScore = document.getElementById('high-score')





let startTheGame = function(){
  
}

let repeatTheGame = function(){

}

let resetTheGame = function(){
    if(playerScore > best){
        highScore.textContent= playerScore;
        best = playerScore;
        
    }
    playerScore = 0;
    totalScore.textContent= 0;
}


let clickButtonOne = function() {
    playerScore++
    totalScore.textContent= playerScore;
}

let clickButtonTwo = function() {
    playerScore++
    totalScore.textContent= playerScore;
}

let clickButtonThree = function() {
    playerScore++
    totalScore.textContent= playerScore;
}

let clickButtonFour = function() {
    playerScore++
    totalScore.textContent = playerScore;  
}


buttonOne.addEventListener('click', clickButtonOne)
buttonTwo.addEventListener('click', clickButtonTwo)
buttonThree.addEventListener('click', clickButtonThree)
buttonFour.addEventListener('click', clickButtonFour)
resetButton.addEventListener('click', resetTheGame)


