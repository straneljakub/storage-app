import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

import {StoreModule} from '@ngrx/store';
import { materialsFeature } from './state/reducers/materials.reducer';
import { notificationsFeature } from './state/reducers/notifications.reducer';
import { MaterialsListComponent } from './components/materials-list/materials-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MaterialsListComponent,
    NavBarComponent,
    InputDialogComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    StoreModule.forRoot({}),
    [StoreModule.forFeature(materialsFeature), StoreModule.forFeature(notificationsFeature)],
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
