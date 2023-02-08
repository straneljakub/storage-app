import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  count: number;
}

export interface DialogResult {
  count: number;
}

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.css']
})
export class InputDialogComponent {
  formData: DialogResult = {
    count: 0,
  }
  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  submit(formData: DialogResult) {
    this.dialogRef.close(formData);
  }
}
  
