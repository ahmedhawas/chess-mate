import "./App.css";
import { Chessboard } from "react-chessboard";
import ChessMateBoard from "./Models/ChessMateBoard";
import { useState, useEffect } from "react";

function App() {
  const [chessMateBoard, setChessMateBoard] = useState(
    new ChessMateBoard("p1", "p2")
  );
  const [gameUpdate, setGameUpdate] = useState(false);

  useEffect(() => {
    setChessMateBoard(new ChessMateBoard("player 1", "player 2"));
  }, []);

  const handlePieceDrop = (from, to) => {
    chessMateBoard.makeMove(from, to);
    setGameUpdate(!gameUpdate);
  };

  return (
    <div className="App">
      <Chessboard
        position={chessMateBoard.getFen()}
        onPieceDrop={handlePieceDrop}
      />
    </div>
  );
}

export default App;
