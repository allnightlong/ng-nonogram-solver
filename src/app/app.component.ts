import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from '../model/Board';
import {Generator} from '../model/Generator';
import {ArrayUtils} from '../model/ArrayUtils';

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
            ArrayUtils.clean(data['data_top']),
            ArrayUtils.clean(data['data_left'])
          );
        }
      );
  }

  public resolve(): boolean {
    const candidates = Generator.candidates(this.board.left, this.board.height);
    console.log(candidates);
    return false;
  }

  public cell(x, y, $event: MouseEvent): boolean {
    const button = $event.button;
    const current = this.board.get(x, y);

    if (button === 0) {
      this.board.set(x, y, current === Board.on ? Board.empty : Board.on);
    }

    if (button === 2) {
      this.board.set(x, y, current === Board.off ? Board.empty : Board.off);
    }
    return false;
  }

}
