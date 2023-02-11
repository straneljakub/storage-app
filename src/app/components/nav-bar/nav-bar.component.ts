import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNotifications } from 'src/app/state/reducers/notifications.reducer';
import { Notification } from 'src/notification';
import { NotificationsDialogComponent } from '../notifications-dialog/notifications-dialog.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  notifications$: Observable<Notification[]>  = this.store.select(selectNotifications) || [];

  OpenNotificationDialog() {
    this.matDialog.open(NotificationsDialogComponent, {
      maxHeight: '400px'
    });
  }

  constructor (
    private matDialog: MatDialog,
    private store: Store,
  ) {}
}
