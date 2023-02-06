import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

import {StoreModule} from '@ngrx/store';
import { materialsFeature } from './state/reducers/materials.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    [StoreModule.forFeature(materialsFeature)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
