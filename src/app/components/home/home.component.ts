import { Component, OnInit } from '@angular/core';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'FrontEnd Developer';

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
  //   {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
  //   {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  // ];

  constructor() { }

  ngOnInit() {
  }

}
