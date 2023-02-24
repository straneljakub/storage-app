import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertsDialogComponent } from './components/alerts-dialog/alerts-dialog.component';
import { ConditionDialogComponent } from './components/condition-dialog/condition-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { conditionsFeature } from './state/reducers/conditions.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MaterialEffects } from 'src/app/state/effects/materials.effects';
import { ConditionEffects } from './state/effects/conditions.effects';


@NgModule({
  declarations: [
    AlertsDialogComponent,
    ConditionDialogComponent,
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
    ReactiveFormsModule,
    MatSelectModule,
    StoreModule.forFeature(conditionsFeature),
    EffectsModule.forFeature(ConditionEffects),
  ]
})
export class ConditionsModule { }
