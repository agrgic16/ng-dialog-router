# ng-dialog-router

A small angular library that allows you to configure instances of @angular/material's MatDialog as part of your routing configuration.

## Getting Started
In your angular app, run `npm install ng-dialog-router --save` OR `yarn add ng-dialog-router`

### Prerequisites
Starting from scratch, please do the following:
- Generate Angular App Using [Angular CLI](https://cli.angular.io/)
- Install Angular Material by running `npm install @angular/material --save` OR `yarn add @angular/material`
- Install ng-dialog-router by running `npm install ng-dialog-router --save` OR `yarn add ng-dialog-router`
- Finally, in src/styles.scss, import the Angular Material core styles as `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

### Usage

#### Essentials
ng-dialog-router simply uses an angular route resolver to convert your
normal route configuration into one that is displayed in a dialog.

It should be provided to the `dlgRef` resolve property.

```ts
import { DialogResolverService } from 'ng-dialog-router';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';

const route = {
    path: '0',
    component: SampleDialogComponent,
    resolve: { dlgRef: DialogResolverService },
}
```

#### Managing the dialog config settings
The typical angular material options can be passed to the `dlg` property of the route `data`.
The Angular Material Dialog documentation can be found here [Angular Material Dialog](https://material.angular.io/components/dialog/overview).
```ts
import { DialogResolverService, DialogRouteConfig } from 'ng-dialog-router';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';

const route = {
    path: '0',
    component: SampleDialogComponent,
    resolve: { dlgRef: DialogResolverService },
    data: {
        dlg: {
            data: { name: 'Sample Dialog #a.0' },
            position: { left: '0' },
            width: '500px',
        } as DialogRouteConfig,
    },
}
```

#### Additional config settings provided by this library

For best results, using the strongly typed `DialogRouteConfig` interface for the `route.data.dlg` property
is recommended via the `as DialogRouteConfig` syntax.

##### `redirectPath: string[]`
By default, when the dialog is closed it will redirect up one level in the url tree.
So if we are at `/home/0/a` it will navigate back to `/home/0`. ng-dialog-router has an additional
option to allow for a custom redirect path, in case we want the dialog to go back to `/home`
upon closing via the property `redirectPath`.

```ts
const route = {
    path: '0',
    component: SampleDialogComponent,
    resolve: { dlgRef: DialogResolverService },
    data: {
        dlg: {
            data: { name: 'Sample Dialog #a.0' },
            position: { left: '0' },
            width: '500px',
            redirectPath: [ 'home' ],
        } as DialogRouteConfig,
    },
}
```

### Full Usage Example (implemented in app's routing module)

#### app/routing/routes.ts
```ts
import { Routes } from '@angular/router';
import { DialogResolverService, DialogRouteConfig } from 'ng-dialog-router';
import { SampleDialogComponent } from '../sample-dialog/sample-dialog.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
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
];
```

#### app/routing/routing.module.ts
```ts
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

```

## Built With
* [Angular CLI](https://cli.angular.io/)
* [Angular Material](https://material.angular.io/)

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/agrgic16/ng-dialog-router/tags).

## Authors
* **Ante Grgić** - *Initial work* - [GitHub](https://github.com/agrgic16)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
