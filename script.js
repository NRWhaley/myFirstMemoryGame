console.log("testing")
let isCyan = false;
const flashyBox = document.querySelector('.flashy-box')
let flashInterval = window.setInterval(toggleColor, 1000);
flashyBox.addEventListener('click', flashToggle);

function toggleColor(){
    flashyBox.style.backgroundColor = isCyan ? 'cyan' : 'yellow';
    isCyan = !isCyan;
}

function flashToggle(){
    if (flashInterval) {
        clearInterval(flashInterval)
        flashInterval = false;
        console.log("It stopped", flashInterval)
    } else{
        flashInterval = window.setInterval(toggleColor, 1000)
         console.log('It\'s working again')

    }
    
    
}

