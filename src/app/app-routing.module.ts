import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDetailComponent } from './components/material-detail/material-detail.component';
import { MaterialsListComponent } from './components/materials-list/materials-list.component';

const routes: Routes = [
  {path: 'materials-list-component', component: MaterialsListComponent},
  {path: 'material-detail-component', component: MaterialDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
