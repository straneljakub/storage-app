import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectConditionsByEntityId } from '../../state/selectors/conditions.selectors';
import { Observable } from 'rxjs';
import { Condition } from 'src/condition';
import { ConditionsActions } from '../../state/actions/conditions.actions';
import { ConditionDialogComponent } from '../condition-dialog/condition-dialog.component';
import { conditionFormData } from '../condition-dialog/condition-dialog.component';
import { TranslocoService } from '@ngneat/transloco';

export interface AlertDialogData {
  title: string,
  id: number,
  type: string,
}

@Component({
  selector: 'app-alerts-dialog',
  templateUrl: './alerts-dialog.component.html',
  styleUrls: ['./alerts-dialog.component.css']
})

export class AlertsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogData,
    private store: Store,
    private matDialog: MatDialog,
    private translocoService: TranslocoService,
  ) { }

  conditions$: Observable<Condition[]> = this.store.select(selectConditionsByEntityId(this.data.id, this.data.type));

  submit() {
    this.dialogRef.close()
  }

  AddCondition(id: number) {
    let dialogRef = this.matDialog.open(ConditionDialogComponent, {
    });

    dialogRef.afterClosed().subscribe((data: conditionFormData) => {
      if(data) {
        const objType = 'material';
        this.store.dispatch(ConditionsActions.createCondition({id, data, objType}));
      }
    });
  }

  RemoveCondition(id: number) {
    this.store.dispatch(ConditionsActions.deleteCondition({id}));
  }
}
