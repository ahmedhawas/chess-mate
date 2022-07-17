import "./App.css";
import { Chessboard } from "react-chessboard";
import ChessMateBoard from "./Models/ChessMateBoard";
import { useState, useEffect } from "react";
import DisplayWinner from "./DisplayWinner";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [chessMateBoard, setChessMateBoard] = useState(
    new ChessMateBoard("p1", "p2")
  );
  const [gameUpdate, setGameUpdate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleRestart = () => {
    setChessMateBoard(new ChessMateBoard("p1", "p2"));
    setModalOpen(false);
  };

  return (
    <div className="App">
      <AppBar className="navBar" position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Chess Mate
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid className="gridRow" container>
        <Grid item xs={6}>
          <Chessboard
            position={chessMateBoard.getFen()}
            onPieceDrop={handlePieceDrop}
            boardWidth={600}
          />
        </Grid>
        <Grid item xs={4}>
          <div className="historyContainer">
            {chessMateBoard.history.length === 0 && "No moves yet"}
            {chessMateBoard.history.map((historyItem, i) => {
              return <p key={i}>{historyItem}</p>;
            })}
          </div>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => setModalOpen(true)}>Restart</Button>
          <div>{chessMateBoard.inCheck() ? "check" : "not check"}</div>

          <div>
            {chessMateBoard.isGameOver().gameOver ? (
              <DisplayWinner chessMateBoard={chessMateBoard} />
            ) : (
              "not gameover"
            )}
          </div>
        </Grid>
      </Grid>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Are you sure you want to restart?</Typography>
          <Button color="secondary" variant="contained" onClick={handleRestart}>
            Yes, Restart
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
