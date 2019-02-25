import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogRouterModule } from 'ng-dialog-router';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DialogRouterModule,
  ],
  exports: [
    RouterModule,
    DialogRouterModule,
  ]
})
export class RoutingModule { }
