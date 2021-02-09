export class Board {

  static empty = 0;
  static on = 1;
  static off = 2;


  public board: number[][];


  constructor(
    public width: number,
    public height: number,
    public top: number[][],
    public left: number[][],
  ) {
    this.board = [];

    for (let i = 0; i < width; i++) {
      this.board[i] = [];
      for (let j = 0; j < height; j++) {
        this.board[i][j] = Board.empty;
      }
    }
  }

  set(x: number, y: number, value: number): void {
    this.board[x][y] = value;
  }

  isOn(x: number, y: number): boolean {
    return this.board[x][y] === Board.on;
  }

  isOff(x: number, y: number): boolean {
    return this.board[x][y] === Board.off;
  }
}
