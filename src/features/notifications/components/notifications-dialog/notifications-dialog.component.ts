import { Component } from '@angular/core';
import { ObservableNotification } from '@ngrx/effects/src/utils';
import { Store } from '@ngrx/store';
import { selectNotifications } from 'src/app/state/reducers/notifications.reducer';
import { Observable } from 'rxjs'
import { Notification } from 'src/notification';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotificationsActions } from 'src/app/state/actions/notifications.actions';
import { selectMaterialTitleById } from 'src/app/state/selectors/materials.selectors';

@Component({
  selector: 'app-notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['../../../../app/app.component.css']
})
export class NotificationsDialogComponent {
  notifications$: Observable<Notification[]> = this.store.select(selectNotifications); 

  DeleteNotification(id: number) {
    this.store.dispatch(NotificationsActions.deleteNotification({id}));
  }

  Close() {
    this.dialogRef.close();
  }
  
  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<NotificationsDialogComponent>,
  ) {}

  GetMaterialTitle(id: number) {
    var title: string = '';
    this.store.select(selectMaterialTitleById(id))
      .subscribe(value => title = value || '');
    return title;
  }
  
}
