import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsDialogComponent } from './components/notifications-dialog/notifications-dialog.component';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { notificationsFeature } from './state/reducers/notifications.reducer';



@NgModule({
  declarations: [
    NotificationsDialogComponent,
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    StoreModule.forFeature(notificationsFeature),
  ]
})
export class NotificationsModule { }
