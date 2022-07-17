import React from "react";

const DisplayWinner = (props) => {
  if (props.chessMateBoard.isGameOver().checkMate) {
    return <p>Check Mate, {props.chessMateBoard.playerTurn} loses!</p>;
  } else if (props.chessMateBoard.isGameOver().draw) {
    if (props.chessMateBoard.isGameOver().threeFoldRepetition) {
      return <p>Three fold repetition. Draw!</p>;
    } else if (props.chessMateBoard.isGameOver().insufficientMaterial) {
      return <p>Insufficient Material. Draw!</p>;
    }
    return <p>Draw!</p>;
  }
  return <div></div>;
};

export default DisplayWinner;
