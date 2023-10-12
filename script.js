let cell = document.querySelectorAll('.cell');
let turn = "X"
let turnText = document.getElementById("turnText");
let won = document.getElementById("won")
let resetBtn = document.getElementById("reset")
let myWinnerAudio = new Audio("gameover.mp3")
let bgAudio = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let excited = document.getElementById('excited')

bgAudio.play()

const checkWinner = () =>{

    let cells = document.getElementsByClassName('cell')

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]
    
    wins.forEach(e => {
        if((cells[e[0]].innerHTML === cells[e[1]].innerHTML) && (cells[e[1]].innerHTML === cells[e[2]].innerHTML) && (cells[e[0]].innerHTML !== "")){
            
            cells[e[0]].style.backgroundColor = "#84f784"
            cells[e[1]].style.backgroundColor = "#84f784"
            cells[e[2]].style.backgroundColor = "#84f784"
            won.innerHTML = turn +" Won"
            myWinnerAudio.play()
           
            excited.style.width = "150px"
            
            // resetGame()

            
        }
    })
}


Array.from(cell).forEach(currentCell =>{
    currentCell.addEventListener('click', ()=>{
        ting.play()
        currentCell.innerHTML = turn;
        checkWinner()
        turn = changeTurn()
        turnText.innerHTML = turn+ " Turn"
        // currentCell.style.backgroundColor = "red"
        
        currentCell.disabled = true;
    })
})


const changeTurn = () =>{
    return turn === "X" ? "O" : "X";
}

const resetGame = () =>{
    cell.forEach(e =>{
        e.innerHTML = ""
        e.disabled = false
        turn = "X"
        e.style.backgroundColor = ""
        excited.style.width = "0"
        won.innerHTML = ""
    })
}


resetBtn.addEventListener('click', resetGame)

