import { Component } from '@angular/core';
import { ObservableNotification } from '@ngrx/effects/src/utils';
import { Store } from '@ngrx/store';
import { selectNotifications } from 'src/app/state/reducers/notifications.reducer';
import { Observable } from 'rxjs'
import { Notification } from 'src/notification';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotificationsActions } from 'src/app/state/actions/notifications.actions';

@Component({
  selector: 'app-notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['./notifications-dialog.component.css']
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
}
