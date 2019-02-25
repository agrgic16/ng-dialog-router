import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-dialog-router';
  dialogRoutes = [
    ['test', '0'],
    ['test', '1'],
    ['test', '2'],
    ['test', '3'],
    ['test', '4'],
    ['test', '5'],
  ];
}
