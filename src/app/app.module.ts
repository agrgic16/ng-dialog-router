import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { HomeComponent } from './home/home.component';
import { ChildAComponent } from './child-a/child-a.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDialogComponent,
    HomeComponent,
    ChildAComponent,
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
