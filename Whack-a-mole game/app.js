window.addEventListener("load", () => {
    document.querySelector("button").addEventListener("click", () => {
      startGame();
    });
});


const squares = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')


const startGame = () => {

    let result = 0
    let hitPosition
    var character = document.getElementById('selectrchar').value;
    var currentTime = document.getElementById("userInput").value;
    if (currentTime<1){
        alert('ENTER POSITIVE NUMBER OF SECONDS!!!')
        return
    }
    else{
        if (!isInt(currentTime)){
            alert('ENTER INTEGER NUMBER OF SECONDS!!!')
            return
        }
    }

    timeLeft.textContent = currentTime
    let timerId = null

    function isInt(value) {
        return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
    }

    function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('frog')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add(character)

    hitPosition = randomSquare.id
    }

    squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
        }
    })
    })

    function moveMole() {
    timerId = setInterval(randomSquare, 600)
    }

    moveMole()

    function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime <= 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

    }

    let countDownTimerId = setInterval(countDown, 1000)
}