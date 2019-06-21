


let playerScore = 0
let best = 0;
let sequenceLength = 3;
let sequence = []
let turn = 0;



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

   function readSequence(val){
        switch(val){
            case 1:
                buttonOneFlash();
                break
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
      
   }

 //starting the Game
let startTheGame = function(){
    turn = 0;
    solution.textContent = " "
    
  //generate sequence
    sequence = generateSequence(sequenceLength)
    solution.textContent += sequence;
    
    for(let i = 0; i < sequence.length; i++){
        let val = sequence[i]
       
            setTimeout(readSequence(val), 500 * i)
        
        
        
     }
     
     
}

//feedback to player
let getCompliment = function(){
    let num = (Math.floor(Math.random()*4)+1)
    switch(num){
        case 1:
            return "Excellent!"
        case 2:
            return "Hot damn!"
        case 3:
            return "There you go!"
        case 4:
            return "Awesome!"
    }
}


//replay button
function repeatTheGame(sequence){
     
}
//reset button
let resetTheGame = function(){
    if(playerScore > best){
        highScore.textContent= playerScore;
        best = playerScore;
        
    }
    playerScore = 0;
    totalScore.textContent= 0;
    sequence = [];
    solution.textContent = " "
    turn = 0
}

//effects of clicking button
let clickButtonOne = function() {
    buttonOneFlash();
    if(sequence[turn] === 1){
        feedback.textContent = getCompliment();
        playerScore++
        totalScore.textContent = playerScore;
          
    } 
    
    else{
        feedback.textContent = "Oops, try again!"
    }
   
    turn++
}

let clickButtonTwo = function() {
    buttonTwoFlash()
    if(sequence[turn] === 2){
        feedback.textContent = getCompliment()
        playerScore++
        totalScore.textContent = playerScore;
         
    } else{
        feedback.textContent = "Oops, try again!"
    }
    turn++
}

let clickButtonThree = function() {
    buttonThreeFlash()
    if(sequence[turn] === 3){
        feedback.textContent = getCompliment()
        playerScore++
        totalScore.textContent = playerScore;
          
    } else{
        feedback.textContent = "Oops, try again!"
    }
    
    turn++
}

let clickButtonFour = function() {
    buttonFourFlash();
    if(sequence[turn] === 4){
        feedback.textContent = getCompliment()
        playerScore++
        totalScore.textContent = playerScore;
         
    } else{
        feedback.textContent = "Oops, try again!"
    }  

    turn++
}






//event listeners for buttons
buttonOne.addEventListener('click', clickButtonOne)
buttonTwo.addEventListener('click', clickButtonTwo)
buttonThree.addEventListener('click', clickButtonThree)
buttonFour.addEventListener('click', clickButtonFour)
resetButton.addEventListener('click', resetTheGame)
playButton.addEventListener('click', startTheGame)


