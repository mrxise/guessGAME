'use strict';
let rand = Math.floor(Math.random() * 20) + 1
let score = 20
let hc = 0
let found = false;
let count = 0;
let x = setInterval(function () {
    for (let y = 0; y < 21; y++) {
        count = Math.floor(Math.random() * 20) + 1
    }
    document.querySelector('.number').textContent = count;
    if (found == true) {
        document.querySelector('.number').textContent = rand
        clearInterval(x);
    }
}, 500);
function sa() {
    const value = Number(document.querySelector('.guess').value)
    if (!value) {
        document.querySelector(".message").textContent = "NO NUMBER WAS ENTERED"
    }
    else if (value !== rand) {
        if (score > 1) {

            document.querySelector(".message").textContent = value > rand ? "TOO HIGH" : "TOO LOW"
            score--
            document.querySelector(".score").textContent = score

        }
        else {
            document.querySelector(".message").textContent = "YOU LOST"
        }
    }
    else if (value === rand) {
        document.querySelector('.message').textContent = `CORRECT YOUR SCORE IS ${score}`
        document.body.style.backgroundColor = "#228B22";
        document.querySelector('.number').style.width = "25rem"
        found = true
        if (score > hc) {
            hc = score
            document.querySelector('.highscore').textContent = hc
        }
    }
}
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    rand = Math.floor(Math.random() * 20) + 1
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = ''
    document.body.style.backgroundColor = "#222"
    found = false;
})
document.querySelector('.check').addEventListener('click', sa)