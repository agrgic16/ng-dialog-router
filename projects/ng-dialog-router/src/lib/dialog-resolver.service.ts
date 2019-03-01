import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap, takeUntil, take, mapTo } from 'rxjs/operators';
import { DialogRouteConfig } from './models/dialog-route-config.model';

@Injectable()
export class DialogResolverService implements Resolve<MatDialogRef<any>> {
  dialogRef: MatDialogRef<any>;
  constructor(public dialog: MatDialog, public router: Router) { }

  resolve(nextRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    let redirect: string[];
    let cfg: DialogRouteConfig;
    let replace: boolean;
    const { data } = nextRoute;
    if (!!data && !!data.dlg) {
      const { redirectPath, replaceUrl, ...dlgCfg } = data.dlg as DialogRouteConfig;
      redirect = redirectPath;
      cfg = dlgCfg;
      replace = replaceUrl;
    } else {
      const { redirectPath, replaceUrl, ...dlgCfg } = { } as DialogRouteConfig;
      redirect = redirectPath;
      cfg = dlgCfg;
      replace = replaceUrl;
    }

    const navigateAfterClose = redirect || routerState.url.split('/').filter(p => !nextRoute.url.map(u => u.path).includes(p) && p !== '');
    this.dialogRef = this.dialog.open(nextRoute.routeConfig.component, { ...cfg, closeOnNavigation: true });
    this.dialogRef.afterClosed().pipe(
      tap(() => this.router.navigate(navigateAfterClose, {replaceUrl: replace})),
      take(1),
    ).subscribe();

    return this.dialogRef.afterOpened().pipe(
      mapTo(this.dialogRef),
      takeUntil(this.dialogRef.afterClosed()),
    );
  }
}
