import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from '../model/Board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  board: Board;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient
      .get('assets/data/source.json')
      .subscribe(data => {
          this.board = new Board(
            data['width'],
            data['height'],
            data['data_top'],
            data['data_left']
          );
        }
      );
  }

  public resolve(event): void {
    // this.board$.map
    console.log(this.board);
    console.log(this.board.top[0][1]);
  }

  public cell(x, y): void {
    console.log(x);
    console.log(y);
    console.log(this.board.board[x][y]);

    this.board.board[x][y] = (this.board.board[x][y] + 1) % 3;
  }

}
