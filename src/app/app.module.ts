import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

import { StoreModule } from '@ngrx/store';
import { materialsFeature } from './state/reducers/materials.reducer';
import { MaterialsListComponent } from './components/materials-list/materials-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { MaterialEffects } from './state/effects/materials.effects';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialDetailComponent } from './components/material-detail/material-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsModule } from 'src/features/notifications/notifications.module';
import { ConditionsModule } from 'src/features/conditions/conditions.module';






@NgModule({
  declarations: [
    AppComponent,
    MaterialsListComponent,
    NavBarComponent,
    InputDialogComponent,
    EditDialogComponent,
    ConfirmDialogComponent,
    MaterialDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(materialsFeature),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
    EffectsModule.forRoot(MaterialEffects),
    ReactiveFormsModule,
    NotificationsModule,
    ConditionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
