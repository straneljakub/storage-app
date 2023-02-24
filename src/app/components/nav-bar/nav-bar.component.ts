import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNotifications } from 'src/features/notifications';
import { Notification } from 'src/notification';
import { NotificationsDialogComponent } from 'src/features/notifications';



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
    private translocoService: TranslocoService,
  ) {}

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
