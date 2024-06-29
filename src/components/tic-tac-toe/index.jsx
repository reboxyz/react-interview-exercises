import React, { useEffect, useState } from "react";
import "./styles.css";

/* Visualization of the Board
    0 1 2
    3 4 5
    6 7 8
*/

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill("")); // There are 9 squares
  const [isXTurn, setIsXTurn] = useState(true); // X is the first to take a move
  const [status, setStatus] = useState("");

  const getWinner = (squares) => {
    const winningPatterns = [
      // horizontal patter
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical pattern
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // x-cross pattern
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const element of winningPatterns) {
      const [x, y, z] = element;

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]; // Note! This is truthy
      }
    }
    return null; // Note! This is falsy
  };

  const handleClick = (squareIndex) => {
    let copySquares = [...squares];

    // Check if there is already a winner or already has a value
    if (getWinner(copySquares) || copySquares[squareIndex]) return;

    copySquares[squareIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn); // toggle

    setSquares(copySquares);
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    setStatus("");
  };

  useEffect(() => {
    let winner = getWinner(squares);

    if (!winner && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game.");
    } else if (winner) {
      setStatus(`Winner is ${winner}! Please restart another game.`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
