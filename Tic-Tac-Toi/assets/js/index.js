const cell = document.querySelectorAll('.cell')
const winner = document.getElementById('winner')
const btn = document.getElementById('restart')

let dataInCell = ["", "", "", "", "", "", "", "",""]
let currentPlayer = 'X';
let gameStart = true;

const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
  ];
  

function clickOnCell(event) { 
    const cell = event.target
    const index = cell.getAttribute('data-index')
    if (dataInCell[index]==="" && gameStart) { 
        dataInCell[index] = currentPlayer
        cell.innerHTML = currentPlayer
        findWinner()
        changePlayer()
    }
}

function changePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = "0"
    } else {
        currentPlayer = "X"
    }
}

function findWinner() { 
    let getwin = false
    for (let i = 0; i < winningCombinations.length; i++) { 
        let [a, b, c] = winningCombinations[i]
        
        if (dataInCell[a] && dataInCell[a]===dataInCell[b] && dataInCell[a]===dataInCell[c]) { 
            getwin = true
            break
        }
    }
    if (getwin) {
        winner.innerHTML = `Person with Symbol ${currentPlayer} is won.`
        gameStart = false;
    } else if (!dataInCell.includes('')) { 
        winner.innerHTML = "This game is Drow."; 
        gameStart = false;
    }
}

btn.addEventListener('click', () => { 
     dataInCell = ["", "", "", "", "", "", "", "",""]
     currentPlayer = 'X';
     gameStart = true;
    cell.forEach(cell => cell.innerHTML = "")
    winner.innerHTML = ""
})



cell.forEach(cell=>cell.addEventListener('click',clickOnCell))