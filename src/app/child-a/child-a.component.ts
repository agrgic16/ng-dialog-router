import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
  dialogRoutes = [
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
