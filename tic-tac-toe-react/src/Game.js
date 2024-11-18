import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
   const [moves, setMoves] = useState(new Array(9).fill("")); // Initialize with empty strings
   const [turn, setTurn] = useState("X"); // Start with player X
   const [gameOver, setGameOver] = useState(false); // Track if the game is over

   // Winning combinations (index positions)
   const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Center column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
   ];

   // Check if the current player has won the game
   const checkWinner = (player) => {
      return winningCombinations.some(combination => 
         combination.every(index => moves[index] === player)
      );
   };

   // Handle a square click event
   function gridClick(whichSquare) {
      if (moves[whichSquare] === "" && !gameOver) { // Only allow move if square is empty and game isn't over
         const movesCopy = [...moves];
         movesCopy[whichSquare] = turn;
         setMoves(movesCopy);

         // Check if the current player won
         if (checkWinner(turn)) {
            setGameOver(true);
            alert(`${turn} wins!`);
         } else if (movesCopy.every(move => move !== "")) { // If all squares are filled, it's a tie
            setGameOver(true);
            alert("It's a tie!");
         } else {
            // Alternate turns
            setTurn(turn === "X" ? "O" : "X");
         }
      }
   }

   // Reset the game when New Game button is clicked
   function newGame() {
      setMoves(new Array(9).fill("")); // Reset the board
      setTurn("X"); // Start with player X
      setGameOver(false); // Game is no longer over
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>
         <GameGrid moves={moves} click={gridClick} />
         <p>
            {gameOver ? (
               <strong>Game Over!</strong>
            ) : (
               <span>Turn: <strong className={turn}>{turn}</strong></span>
            )}
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;