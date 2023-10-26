const buttons = document.querySelectorAll('button');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');

const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);

        playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
        winnerDisplay.textContent = `Result: ${winner}`;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) return 'It\'s a tie!';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}
