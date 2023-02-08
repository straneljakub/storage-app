import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Material } from 'src/material';

export interface ConditionDialogData {
  heading: string,
}

export interface conditionFormData {
  value: number,
  operator: string,
}

@Component({
  selector: 'app-condition-dialog',
  templateUrl: './condition-dialog.component.html',
  styleUrls: ['./condition-dialog.component.css']
})
export class ConditionDialogComponent {
  conditionForm: conditionFormData = {
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
    @Inject(MAT_DIALOG_DATA) public data: ConditionDialogData,
  ) {}

  submit(conditionForm: conditionFormData) {
    this.dialogRef.close(conditionForm);
  }
}
