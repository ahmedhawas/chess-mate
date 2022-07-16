import { Chess } from "chess.js";
const WHITE = "w";
const BLACK = "b";

export default class ChessMateBoard {
  constructor(whitePlayerName, blackPlayerName, boardConfig) {
    this.chess = new Chess(boardConfig);
    this.playerTurn = WHITE;
    this.whitePlayerName = whitePlayerName;
    this.blackPlayerName = blackPlayerName;
    this.message = "Game Initialized";
    this.history = [];
  }

  getBoard() {
    return this.chess.board();
  }

  getMoves(squareName) {
    const moves = this.chess.moves({ square: squareName });

    const playerName =
      this.playerTurn === WHITE ? this.whitePlayerName : this.blackPlayerName;
    if (moves.length === 0) {
      this.message = "There are no possible moves for this piece.";
    } else {
      this.message = `These are your possible moves for ${squareName}, ${playerName}`;
    }
    return moves;
  }

  makeMove(from, to) {
    const move = this.chess.move({ from, to });
    if (!move) {
      this.message = "This is not a valid move!";
      return;
    }

    const piece = move.piece;
    this.history.push(
      `${this.playerTurn} moved a ${piece} from ${from} to ${to}`
    );
    this.playerTurn = this.playerTurn === WHITE ? BLACK : WHITE;
  }

  inCheck() {
    const inCheck = this.chess.in_check();
    if (inCheck) {
      this.message = `${this.playerTurn} is in check`;
    }

    return inCheck;
  }

  isGameOver() {
    const gameOver = this.chess.game_over();
    if (gameOver) {
      this.message = "Game Ended";
    }

    return {
      gameOver,
      checkMate: this.chess.in_checkmate(),
      draw: this.chess.in_draw(),
      stalemate: this.chess.in_stalemate(),
      threeFoldRepetition: this.chess.in_threefold_repetition(),
      insufficientMaterial: this.chess.insufficient_material(),
    };
  }
}
