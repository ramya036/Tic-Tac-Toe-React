# Tic-Tac-Toe in React

Play tic-tac-toe against the computer in the browser. You're **X**; the computer plays **O** after a short delay. The game detects wins and ties, and you can start a new game any time.

![React](https://img.shields.io/badge/React-18-20232A?logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## What it demonstrates

- **Function components and hooks:** `useState` for the board, turn, game-over and winner state; `useEffect` to trigger the computer's move
- **Lifting state up:** `Game` owns the state and passes click handlers down through `GameGrid` to each `Square`
- Win detection across all 8 lines (rows, columns and diagonals), plus tie detection

## Run it

```bash
cd tic-tac-toe-react
npm install
npm start
```

Open http://localhost:3000.

## Structure

```
tic-tac-toe-react/src/
├── App.js        Renders the game
├── Game.js       Game state, win/tie logic, computer player
├── GameGrid.js   3×3 board
└── Square.js     A single cell
```
