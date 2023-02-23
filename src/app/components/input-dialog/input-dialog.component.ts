import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

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
    private fb: FormBuilder,
  ) {}
  
  inputForm = this.fb.group({
    count: this.fb.control(0, [Validators.required, Validators.min(0)]),
  })

  submit() {
    this.formData.count = this.inputForm.value.count || this.formData.count;
    this.dialogRef.close(this.formData);
  }
}
  
