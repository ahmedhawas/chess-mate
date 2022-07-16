import ChessMateBoard from './ChessMateBoard';

test('can initialize a board', () => {
  const player1 = "ahmed";
  const player2 = "omar";

  const chessMateBoard = new ChessMateBoard(player1, player2);
  expect(chessMateBoard.chess).toBeTruthy();
  expect(chessMateBoard.playerTurn).toEqual('w');
  expect(chessMateBoard.whitePlayerName).toEqual(player1);
  expect(chessMateBoard.blackPlayerName).toEqual(player2);
});

test('getBoard returns the board from the chessObject', () => {
  const chessMateBoard = new ChessMateBoard('player1', 'player2');

  expect(chessMateBoard.getBoard()).toEqual(
    [[{"color": "b", "square": "a8", "type": "r"}, {"color": "b", "square": "b8", "type": "n"}, {"color": "b", "square": "c8", "type": "b"}, {"color": "b", "square": "d8", "type": "q"}, {"color": "b", "square": "e8", "type": "k"}, {"color": "b", "square": "f8", "type": "b"}, {"color": "b", "square": "g8", "type": "n"}, {"color": "b", "square": "h8", "type": "r"}], [{"color": "b", "square": "a7", "type": "p"}, {"color": "b", "square": "b7", "type": "p"}, {"color": "b", "square": "c7", "type": "p"}, {"color": "b", "square": "d7", "type": "p"}, {"color": "b", "square": "e7", "type": "p"}, {"color": "b", "square": "f7", "type": "p"}, {"color": "b", "square": "g7", "type": "p"}, {"color": "b", "square": "h7", "type": "p"}], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [{"color": "w", "square": "a2", "type": "p"}, {"color": "w", "square": "b2", "type": "p"}, {"color": "w", "square": "c2", "type": "p"}, {"color": "w", "square": "d2", "type": "p"}, {"color": "w", "square": "e2", "type": "p"}, {"color": "w", "square": "f2", "type": "p"}, {"color": "w", "square": "g2", "type": "p"}, {"color": "w", "square": "h2", "type": "p"}], [{"color": "w", "square": "a1", "type": "r"}, {"color": "w", "square": "b1", "type": "n"}, {"color": "w", "square": "c1", "type": "b"}, {"color": "w", "square": "d1", "type": "q"}, {"color": "w", "square": "e1", "type": "k"}, {"color": "w", "square": "f1", "type": "b"}, {"color": "w", "square": "g1", "type": "n"}, {"color": "w", "square": "h1", "type": "r"}]]
  );
});

test('getMoves should return the valid moves', () => {
  const chessMateBoard = new ChessMateBoard('player1', 'player2');

  expect(chessMateBoard.getMoves('e2')).toEqual(['e3', 'e4']);
  expect(chessMateBoard.message).toEqual('These are your possible moves for e2, player1')
});

test('getMoves returns empty array if no valid moves', () => {
  const chessMateBoard = new ChessMateBoard('player1', 'player2');
  
  expect(chessMateBoard.getMoves('e1')).toEqual([]);
  expect(chessMateBoard.message).toEqual('There are no possible moves for this piece.');
});

