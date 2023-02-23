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
    id: this.fb.control(this.data.id || -1, Validators.required),
    title: this.fb.control(this.data.title, Validators.required),
    count: this.fb.control(this.data.count, [Validators.required, Validators.min(0)]),
    description: this.fb.control(this.data.description, Validators.required),
  })


  submit() {
    this.formData.title = this.editForm.value.title || this.formData.title;
    this.formData.count = this.editForm.value.count || this.formData.count;
    this.formData.description = this.editForm.value.description || this.formData.description;
    this.dialogRef.close(this.formData);
  }
}