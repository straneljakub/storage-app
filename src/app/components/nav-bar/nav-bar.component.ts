import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsDialogComponent } from '../notifications-dialog/notifications-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  OpenNotificationDialog() {
    this.matDialog.open(NotificationsDialogComponent, {
      width: '500px',
    });
  }

  constructor (
    private matDialog: MatDialog,
  ) {}
}
