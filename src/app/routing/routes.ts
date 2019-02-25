import { DialogResolverService } from 'ng-dialog-router';
import { Routes } from '@angular/router';
import { MatDialogConfig } from '@angular/material';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';

export const routes: Routes = [
  {
    path: 'test',
    children: [
      {
        resolve: [ DialogResolverService ],
        path: '0',
        component: SampleDialogComponent,
        data: { dlg: { width: '500px', data: { name: 'Sample Dialog #0' }, position: { left: '0' } } as MatDialogConfig }
      },
      {
        resolve: [ DialogResolverService ],
        path: '0',
        component: SampleDialogComponent,
        data: { dlg: { width: '500px', data: { name: 'Sample Dialog #0 extra' }, position: { right: '0' } } as MatDialogConfig }
      },
      {
        resolve: [ DialogResolverService ],
        path: '2',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #2' } } as MatDialogConfig }
      },
      {
        resolve: [ DialogResolverService ],
        path: '3',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #3' } } as MatDialogConfig }
      },
      {
        resolve: [ DialogResolverService ],
        path: '4',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #4' } } as MatDialogConfig }
      },
      {
        resolve: [ DialogResolverService ],
        path: '5',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #5' }, replaceUrl: true } as MatDialogConfig }
      }
    ],
  }
];
