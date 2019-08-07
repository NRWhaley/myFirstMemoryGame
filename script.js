


let playerScore = 0
let best = 0;
let sequenceLength = 3;
let sequence = []
let turn = 0;
let record = undefined;



let buttonOne = document.getElementById('boxOne')
let buttonTwo = document.getElementById('boxTwo')
let buttonThree = document.getElementById('boxThree')
let buttonFour = document.getElementById('boxFour')

let playButton = document.getElementById('play');
let repeatButton = document.getElementById('repeat');
let resetButton = document.getElementById('reset');
let totalScore = document.getElementById('score');
let highScore = document.getElementById('high-score')
let solution = document.getElementById('cheat')
let feedback= document.getElementById('reaction')


//Making the buttons flash
let buttonOneFlash = function(){
    buttonOne.style.backgroundColor = 'lightblue'
 
     setTimeout(function () {
             buttonOne.style.backgroundColor = 'blue'
     }, 500)
 }
 
 let buttonTwoFlash = function(){
    buttonTwo.style.backgroundColor = 'yellow'
 
     setTimeout(function () {
             buttonTwo.style.backgroundColor = 'orange'
     }, 500)
 }
 
 let buttonThreeFlash = function(){
    buttonThree.style.backgroundColor = 'pink'
 
     setTimeout(function () {
             buttonThree.style.backgroundColor = 'red'
     }, 500)
 }
 
 let buttonFourFlash = function(){
    buttonFour.style.backgroundColor = 'lightgreen'
 
     setTimeout(function () {
             buttonFour.style.backgroundColor = 'green'
     }, 500)
 }


function generateSequence(sequenceLength){
    for(let i = 0; i < sequenceLength; i++){
        let boxNumber = (Math.floor(Math.random()*4)+1)
        sequence.push(boxNumber)
        
    }

    return sequence;
}

   function readSequence(record){
        for(let i = 0; i < record.length; i++){
            (function(){
                setTimeout(function(){
                    switch(record[i]){
                       case 1:
                           buttonOneFlash();
                           break;
                        case 2:
                            buttonTwoFlash();
                            break;
                        case 3:
                            buttonThreeFlash();
                            break;
                        case 4:
                            buttonFourFlash();
                            break;
                    }

                        

                   
                    },(1000 * i));
                }(i));
            }
          
        }
      
   

 //starting the Game
function startTheGame(){
    turn = 0;
    playButton.style.visibility = "hidden"
    //generate sequence
    sequence = generateSequence(sequenceLength)
    record = sequence;
    readSequence(record)
           
}

//feedback to player
let getCompliment = function(){
    let num = (Math.floor(Math.random()*4)+1)
    switch(num){
        case 1:
            return "Excellent!"
        case 2:
            return "Great job!"
        case 3:
            return "There you go!"
        case 4:
            return "Awesome!"
    }
}


//replay button
function repeatTheGame(sequence){
   readSequence(record)
}

//level Up

function levelUp(){
   record = undefined
   sequence = []
   sequenceLength++
   setTimeout(function(){startTheGame();}, 3000);
   

}

//reset button
let resetTheGame = function(){
    if(playerScore > best){
        highScore.textContent= playerScore;
        best = playerScore;
        
    }
    playButton.style.visibility = "visible";
    playerScore = 0;
    totalScore.textContent= 0;
    sequence = [];
    solution.textContent = " "
    turn = 0
    record = undefined;
    sequenceLength = 3;
}

//effects of clicking button
let clickButtonOne = function() {
    buttonOneFlash();
    if(turn === (sequence.length - 1) && sequence[turn] === 1){
        feedback.textContent = "Great job! Level up!"
        playerScore++
        totalScore.textContent = playerScore
        levelUp()
    }
    else if(sequence[turn] === 1){
        feedback.textContent = getCompliment();
        playerScore++
        totalScore.textContent = playerScore;
        turn++  
    } 
    
    else{
        feedback.textContent = "Oops, try again!"
        resetTheGame();
    }
   
    
}

let clickButtonTwo = function() {
    buttonTwoFlash()
    if(turn === (sequence.length - 1) && sequence[turn] === 2){
        feedback.textContent = "Great job! Level up!"
        playerScore++
        totalScore.textContent = playerScore
        levelUp()
    }
    else if(sequence[turn] === 2){
        feedback.textContent = getCompliment()
        playerScore++
        totalScore.textContent = playerScore;
        turn++
    } else{
        feedback.textContent = "Oops, try again!"
        resetTheGame();
    }
    
}

let clickButtonThree = function() {
    buttonThreeFlash()
    if(turn === (sequence.length - 1) && sequence[turn] === 3){
        feedback.textContent = "Great job! Level up!"
        playerScore++
        totalScore.textContent = playerScore
        levelUp()
    }
    else if(sequence[turn] === 3){
        feedback.textContent = getCompliment()
        playerScore++
        totalScore.textContent = playerScore;
        turn++  
    } else{
        feedback.textContent = "Oops, try again!"
        resetTheGame();
    }
    
    
}

let clickButtonFour = function() {
    buttonFourFlash();
    if(turn === (sequence.length - 1) && sequence[turn] === 4){
        feedback.textContent = "Great job! Level up!"
        playerScore++
        totalScore.textContent = playerScore
        levelUp()
    } else if(sequence[turn] === 4){
        feedback.textContent = getCompliment()
        playerScore++
        totalScore.textContent = playerScore;
        turn++
    } else{
        feedback.textContent = "Oops, try again!"
        resetTheGame();
    }  

    
}






//event listeners for buttons
buttonOne.addEventListener('click', clickButtonOne)
buttonTwo.addEventListener('click', clickButtonTwo)
buttonThree.addEventListener('click', clickButtonThree)
buttonFour.addEventListener('click', clickButtonFour)
resetButton.addEventListener('click', resetTheGame)
playButton.addEventListener('click', startTheGame)
repeatButton.addEventListener('click', repeatTheGame)

