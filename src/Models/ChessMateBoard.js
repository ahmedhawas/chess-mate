import { Chess } from 'chess.js';
const WHITE = 'w';

export default class ChessMateBoard {
  constructor(whitePlayerName, blackPlayerName) {
    this.chess = new Chess();
    this.playerTurn = WHITE,

    this.whitePlayerName = whitePlayerName;
    this.blackPlayerName = blackPlayerName;
    this.message = 'Game Initialized';
  }
  
  getBoard() {
    return this.chess.board();
  }

  getMoves(squareName) {
    const moves = this.chess.moves({ square: squareName });

    const playerName = this.playerTurn === WHITE ? this.whitePlayerName : this.blackPlayerName; 
    if (moves.length === 0) {
      this.message = "There are no possible moves for this piece.";
    } else {
      this.message = `These are your possible moves for ${squareName}, ${playerName}`;
    }
    return moves;
  }
}
