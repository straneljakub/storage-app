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
import { ConditionDialogComponent } from '../condition-dialog/condition-dialog.component';
import { ConditionsActions } from 'src/app/state/actions/conditions.actions';
import { Condition } from 'src/condition';
import { selectMaterialById } from 'src/app/state/selectors/materials.selectors';
import { select } from '@ngrx/store';
import { selectConditions } from 'src/app/state/reducers/conditions.reducer';







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
  conditions$: Observable<Condition[]> = this.store.select(selectConditions);

  AddMaterial() {
    let dialogRef = this.matDialog.open(EditDialogComponent, {
      width: '350px',
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
      width: '350px',
      data: {title: 'Add Count'}
    });

    dialogRef.afterClosed().subscribe((result: DialogResult) => {
      if (result) 
        this.store.dispatch(MaterialsActions.addCount({id: id, count: result.count}))
    });
  }

  SubtractCount(id: number) {
    let dialogRef = this.matDialog.open(InputDialogComponent, {
      width: '350px',
      data: {title: 'Subtract Count'}
    });

    dialogRef.afterClosed().subscribe((result: DialogResult) => {
      if (result) 
        this.store.dispatch(MaterialsActions.subtractCount({id: id, count: result.count}))
    });
  }

  Edit(id: number, title: string, count: number, description: string) {
    let dialogRef = this.matDialog.open(EditDialogComponent, {
      width: '350px',
      data: {heading: 'Edit Material', id: id, title: title, count: count, description: description}
    });

    dialogRef.afterClosed().subscribe((material: Material) => {
      if(material) {
        this.store.dispatch(MaterialsActions.editMaterial({material}));
      }
    });
  }

  AddCondition(id: number) {
    let dialogRef = this.matDialog.open(ConditionDialogComponent, {
      width: '350px',
      data: {heading: 'Add Condition',}
    });

    dialogRef.afterClosed().subscribe((result: Condition) => {
      if(result) {
        const item$ = this.store.select(selectMaterialById(id));
        var material: Material = {id: 0, title: 'undefined', count: 0, description: 'undefined'};
        item$.subscribe(value => material = value || {id: 0, title: 'undefined', count: 0, description: 'undefined'});
        
        const condition: Condition = {
          id: 0,
          operator: result.operator,
          value: result.value,
          entityId: {
            id: material.id,
            type: typeof material,
          }
        };
        
        this.store.dispatch(ConditionsActions.createCondition({condition}));
      }
    });
  }  
}
