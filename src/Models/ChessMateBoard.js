import { Chess } from 'chess.js';
const WHITE = 'w';
const BLACK = 'b';

export default class ChessMateBoard {
  constructor(whitePlayerName, blackPlayerName) {
    this.chess = new Chess();
    this.playerTurn = WHITE,

    this.whitePlayerName = whitePlayerName;
    this.blackPlayerName = blackPlayerName;
    this.message = 'Game Initialized';
    this.history = [];
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

  makeMove(from, to) {
    const move = this.chess.move({ from, to });
    if (!move) {
      this.message = "This is not a valid move!";
      return;
    }
    
    const piece = move.piece;
    this.history.push(`${this.playerTurn} moved a ${piece} from ${from} to ${to}`);
    this.playerTurn = this.playerTurn === WHITE ? BLACK : WHITE;
  }
}
