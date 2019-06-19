

let countOne = 0;
let countTwo = 0
let countThree = 0
let countFour = 0




let buttonOne = document.getElementById('boxOne')
let buttonTwo = document.getElementById('boxTwo')
let buttonThree = document.getElementById('boxThree')
let buttonFour = document.getElementById('boxFour')


let clickButtonOne = function() {
    buttonOne.textContent = countOne;
    countOne++
}

let clickButtonTwo = function() {
    buttonTwo.textContent = countTwo;
    countTwo++
}

let clickButtonThree = function() {
    buttonThree.textContent = countThree;
    countThree++
}

let clickButtonFour = function() {
    buttonFour.textContent = countFour;
    countFour++
}


buttonOne.addEventListener('click', clickButtonOne)
buttonTwo.addEventListener('click', clickButtonTwo)
buttonThree.addEventListener('click', clickButtonThree)
buttonFour.addEventListener('click', clickButtonFour)