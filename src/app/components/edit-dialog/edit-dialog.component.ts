import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Material } from 'src/material';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

export interface DialogData {
  heading: string,
  id: number,
  title: string;
  count: number;
  description: string;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  formData: Material = {
    id: this.data.id,
    title: this.data.title,
    count: this.data.count,
    description: this.data.description,
  }
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
  ) { }



  editForm = this.fb.group({
    title: ['', Validators.required],
    count: ['', [Validators.required, Validators.min(0)]],
    description: ['', Validators.required],
  })


  submit(formData: Material) {
    this.dialogRef.close(formData);
  }
}