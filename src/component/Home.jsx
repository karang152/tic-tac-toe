import React, { useState } from 'react';
import Box from './Box'; // Ensure the correct path to Box

const Home = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Initialize board with 9 null values
  const [isXNext, setIsXNext] = useState(true); // Track whose turn it is (X or O)

  const handleBoxClick = (index) => {
    if (board[index] || calculateWinner(board)) return; // Do nothing if the box is already filled or if there's a winner
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext); // Toggle between X and O
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="bg-[#38686A] p-10 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8 underline">Tic-Tac-Toe</h1>
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 w-[60vmin] h-[60vmin]">
            {board.map((value, index) => (
              <Box
                key={index}
                value={value}
                onClick={() => handleBoxClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 text-2xl font-semibold">{status}</div>
        <button
          onClick={resetGame}
          className="px-6 py-3 m-8 text-4xl font-semibold bg-[#19180A] text-[#E5EAFA] border-none rounded-2xl"
        >
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Home;
