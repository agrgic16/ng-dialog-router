import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, takeUntil, take } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogRouterComponent } from './dialog-router.component';

@Injectable()
export class DialogResolverService implements Resolve<MatDialogRef<any>> {
  dialogRef: MatDialogRef<DialogRouterComponent>;
  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

  resolve(nextRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    this.dialogRef = this.dialog.open( DialogRouterComponent, { ...nextRoute.data.dlg } );
    this.dialogRef.afterClosed().pipe(
      tap(() => this.router.navigate(['..'], { relativeTo: this.route })),
      take(1),
    ).subscribe();

    return of(this.dialogRef).pipe(
      takeUntil(this.dialogRef.afterClosed()),
    );
  }
}
