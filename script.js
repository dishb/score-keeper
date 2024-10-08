const p1 = {
    score: 0,
    button: document.querySelector('#p1-button'),
    display: document.querySelector('#p1-display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2-button'),
    display: document.querySelector('#p2-display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#play-to');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('win');
            opponent.display.classList.add('lose');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('win', 'lose');
        p.button.disabled = false;
    }
}
