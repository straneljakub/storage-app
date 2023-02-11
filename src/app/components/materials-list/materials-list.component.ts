import { Component } from '@angular/core';
import { Material } from 'src/material';
import { Store } from '@ngrx/store';
import { selectMaterials } from 'src/app/state/reducers/materials.reducer';
import {filter, Observable} from 'rxjs'
import { MaterialsActions } from 'src/app/state/actions/materials.actions';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DialogResult } from '../input-dialog/input-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AlertsDialogComponent } from '../alerts-dialog/alerts-dialog.component';



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
  

  AddMaterial() {
    let dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {heading: 'Add Material'}
    });
    dialogRef.afterClosed().subscribe((material: Material) => {
      if(material) {
        this.store.dispatch(MaterialsActions.addMaterial({material}));
      }
    });
  }

  AddCount(id: number) {
    let dialogRef = this.matDialog.open(InputDialogComponent, {
      data: {title: 'Add Count'}
    });

    dialogRef.afterClosed().subscribe((result: DialogResult) => {
      if (result) 
        this.store.dispatch(MaterialsActions.addCount({id: id, count: result.count}))
    });
  }

  SubtractCount(id: number) {
    let dialogRef = this.matDialog.open(InputDialogComponent, {
      data: {title: 'Subtract Count'}
    });

    dialogRef.afterClosed().subscribe((result: DialogResult) => {
      if (result) 
        this.store.dispatch(MaterialsActions.subtractCount({id: id, count: result.count}))
    });
  }

  Edit(id: number, title: string, count: number, description: string) {
    let dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {heading: 'Edit Material', id: id, title: title, count: count, description: description}
    });

    dialogRef.afterClosed().subscribe((material: Material) => {
      if(material) {
        this.store.dispatch(MaterialsActions.editMaterial({material}));
      }
    });
  }

  OpenConditions(id: number, title: string) {
    this.matDialog.open(AlertsDialogComponent, {
      maxHeight: '400px',
      data: {id: id, title: title, type: 'material'}
    });
  }

  DeleteMaterial(materialId: number, materialTitle: string) {
    let dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: {text: "Are you sure you want to delete " + materialTitle + " ?"},
    });

    dialogRef.afterClosed().subscribe((condition) => {
      if(condition) {
        this.store.dispatch(MaterialsActions.removeMaterial({materialId}));
      }
    });
  }
}
