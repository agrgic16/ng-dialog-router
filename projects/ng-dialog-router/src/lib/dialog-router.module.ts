import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { DialogRouterComponent } from './dialog-router.component';
import { DialogResolverService } from './dialog-resolver.service';

const dialogOutlet = {
  path: 'dialog-outlet',
  component: DialogRouterComponent,
};

@NgModule({
  declarations: [
    DialogRouterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forChild([dialogOutlet]),
  ],
  providers: [
    DialogResolverService,
  ]
})
export class DialogRouterModule { }
