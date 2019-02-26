import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dialogRoutes = [
    ['a', '0'],
    ['0'],
    ['1'],
    ['2'],
    ['3'],
    ['4'],
    ['5'],
  ];
  constructor() { }

  ngOnInit() {
  }

}
