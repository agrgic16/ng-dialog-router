import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatDialogModule,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
