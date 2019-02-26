import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss'],
})
export class SampleDialogComponent {
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public route: ActivatedRoute) { }
}
