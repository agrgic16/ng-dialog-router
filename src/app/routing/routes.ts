import { DialogResolverService, DialogRouteConfig } from 'ng-dialog-router';
import { Routes } from '@angular/router';
import { MatDialogConfig } from '@angular/material';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';
import { HomeComponent } from '../home/home.component';
import { ChildAComponent } from '../child-a/child-a.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'a',
        component: ChildAComponent,
        children: [
          {
            path: '0',
            component: SampleDialogComponent,
            resolve: { dlgRef: DialogResolverService },
            data: {
              dlg: {
                data: { name: 'Sample Dialog #a.0' },
                position: { left: '0' },
                redirectPath: ['home'],
                width: '500px',
              } as DialogRouteConfig,
            },
          },
        ],
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '0',
        component: SampleDialogComponent,
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '1',
        component: SampleDialogComponent,
        data: { dlg: { width: '500px', data: { name: 'Sample Dialog #0 extra' }, position: { right: '0' } } as MatDialogConfig }
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '2',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #2' }, replaceUrl: true } as MatDialogConfig }
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '3',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #3' } } as MatDialogConfig }
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '4',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #4' } } as MatDialogConfig }
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '5',
        component: SampleDialogComponent,
        data: { dlg: { width: '1000px', data: { name: 'Sample Dialog #5' }, replaceUrl: true } as MatDialogConfig }
      }
    ],
  }
];
