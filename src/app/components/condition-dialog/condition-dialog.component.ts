import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Material } from 'src/material';

export interface DialogData {
  heading: string,
}

export interface formData {
  value: number,
  operator: string,
}

@Component({
  selector: 'app-condition-dialog',
  templateUrl: './condition-dialog.component.html',
  styleUrls: ['./condition-dialog.component.css']
})
export class ConditionDialogComponent {
  conditionForm: formData = {
    value: 0,
    operator: '',
  }

  operators = [
    {value: '>'},
    {value: '<'},
    {value: '='},
  ]
  constructor(
    public dialogRef: MatDialogRef<ConditionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  submit(conditionForm: formData) {
    this.dialogRef.close(conditionForm);
  }
}
