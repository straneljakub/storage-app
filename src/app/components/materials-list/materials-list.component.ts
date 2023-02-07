import { Component } from '@angular/core';
import { Material } from 'src/material';
import { Store } from '@ngrx/store';
import { selectMaterials } from 'src/app/state/reducers/materials.reducer';
import {Observable} from 'rxjs'
import { MaterialsActions } from 'src/app/state/actions/materials.actions';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { getMaterialById } from 'src/app/state/selectors/materials.selectors';





@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.css']
})
export class MaterialsListComponent {
  
  constructor (
    private store: Store,
    private matDialog: MatDialog,
  ) {}

  materials$: Observable<Material[]> = this.store.select(selectMaterials);

  AddCount(id: number) {
    let dialogRef = this.matDialog.open(InputDialogComponent, {
      width: '350px',
      data: {title: 'Add'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('res: ' + result);
      let count = parseInt(result);
      if (count) 
        this.store.dispatch(MaterialsActions.addCount({id: id, count: count}))
    });
  }

  SubtractCount(id: number) {
    let dialogRef = this.matDialog.open(InputDialogComponent, {
      width: '350px',
      data: {title: 'Subtract'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('res: ' + result);
      let count = parseInt(result);
      if (count) 
        this.store.dispatch(MaterialsActions.subtractCount({id: id, count: count}))
    });
  }

  Edit(id: number, title: string, count: number, description: string) {
    let dialogRef = this.matDialog.open(EditDialogComponent, {
      width: '350px',
      data: {heading: 'Edit', title: title, count: count, description: description}
    });

    dialogRef.afterClosed().subscribe((result) => {
      
      console.log('res: ' + material);
      this.store.dispatch(MaterialsActions.editMaterial({material}))
    });
  }



  
}
