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

  get(row: number, column: number): number {
    return this.board[row][column];
  }

  set(row: number, column: number, value: number): void {
    this.board[row][column] = value;
  }

  isOn(row: number, column: number): boolean {
    return this.board[row][column] === Board.on;
  }

  isOff(row: number, column: number): boolean {
    return this.board[row][column] === Board.off;
  }
}
