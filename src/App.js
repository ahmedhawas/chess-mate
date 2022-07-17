import "./App.css";
import { Chessboard } from "react-chessboard";
import ChessMateBoard from "./Models/ChessMateBoard";
import { useState, useEffect } from "react";
import DisplayWinner from "./DisplayWinner";

function App() {
  const [chessMateBoard, setChessMateBoard] = useState(
    new ChessMateBoard("p1", "p2")
  );
  const [gameUpdate, setGameUpdate] = useState(false);

  useEffect(() => {
    setChessMateBoard(new ChessMateBoard("player 1", "player 2"));
  }, []);

  const handlePieceDrop = (from, to) => {
    if (chessMateBoard.isGameOver().gameOver) {
      return;
    }
    chessMateBoard.makeMove(from, to);
    setGameUpdate(!gameUpdate);
  };

  const handleIsPieceDraggable = (piece) => {
    console.log("piece ", piece);
    return false;
  };

  const handleRestart = () => {
    setChessMateBoard(new ChessMateBoard("p1", "p2"));
  };

  return (
    <div className="App">
      <Chessboard
        position={chessMateBoard.getFen()}
        onPieceDrop={handlePieceDrop}
      />
      <div>
        {chessMateBoard.history.map((historyItem, i) => {
          return <p key={i}>{historyItem}</p>;
        })}
      </div>
      <div>{chessMateBoard.inCheck() ? "check" : "not check"}</div>
      <button onClick={handleRestart}>Restart</button>
      <div>
        {chessMateBoard.isGameOver().gameOver ? (
          <DisplayWinner chessMateBoard={chessMateBoard} />
        ) : (
          "not gameover"
        )}
      </div>
    </div>
  );
}

export default App;
