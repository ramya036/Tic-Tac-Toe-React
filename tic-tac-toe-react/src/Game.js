import React from "react";
import GameGrid from "./GameGrid.js";

// TODO: Import useState() hook

function Game() {

   // TODO: Replace variables with state variables
   const moves = new Array(9).fill("");
   const turn = "X";
  
   function gridClick(whichSquare) {
      // TODO: Replace with code to set the move and turn
      alert("Clicked on " + whichSquare);
   }

   // TODO: Add newGame() function here
  
   // TODO: Make New Game button to call newGame() when clicked
   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button>New Game</button>
         </p>
      </>
   );
}

export default Game;