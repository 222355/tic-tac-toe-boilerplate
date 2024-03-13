let gridArr = []
let gridArrElem = []
gridArrElem[0] = 0
const grid = document.querySelectorAll(".box")
for(var i = 0 ; i < grid.length ; i++){
    gridArr[i] = grid[i]
}

  let turn = true;
document.addEventListener("click",function(){
    const elemt = event.target;
    for(var i = 0 ; i < grid.length ; i++){
        if(elemt.textContent == 'X' || elemt.textContent=='O'){
        }
        else{
            if(turn == true){
                elemt.textContent = 'X'
                gridArrElem[elemt.id] = 'X'
                turn = false;
            }
            else{
                elemt.textContent = 'O'
                gridArrElem[elemt.id] = 'O'
                turn = true
            }
        }
    }
    checkWinner();
    
})

function checkWinner() {
    const rows = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ];
    const columns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const diagonals = [
        [1, 5, 9],
        [7, 5, 3]
    ];
    for (const row of rows) {
        if (gridArrElem[row[0]] && gridArrElem[row[0]] === gridArrElem[row[1]] && gridArrElem[row[0]] === gridArrElem[row[2]]) {
            resetGame(`'${gridArrElem[row[0]]} 'won the game!`);
            return;
        }
    }
    for (const column of columns) {
        if (gridArrElem[column[0]] && gridArrElem[column[0]] === gridArrElem[column[1]] && gridArrElem[column[0]] === gridArrElem[column[2]]) {
            resetGame(`'${gridArrElem[column[0]]}' won the game!`);
            return;
        }
    }
    for (const diagonal of diagonals) {
        if (gridArrElem[diagonal[0]] && gridArrElem[diagonal[0]] === gridArrElem[diagonal[1]] && gridArrElem[diagonal[0]] === gridArrElem[diagonal[2]]) {
            resetGame(`'${gridArrElem[diagonal[0]]}' won the game!`);
            return;
        }
    }
}

function resetGame(score){
    localStorage.setItem("score", score);
    window.open('score.html','_self')
}


