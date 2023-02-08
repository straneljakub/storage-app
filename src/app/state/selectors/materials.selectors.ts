import { createSelector } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Material } from 'src/material';
import { materialsFeature, selectMaterials, selectMaterialsState } from '../reducers/materials.reducer'

export const selectMaterialListPageViewModel = createSelector(
  materialsFeature.selectMaterials,
  (materials) => ({ materials }),
);

export const selectMaterialById = (id: number) => createSelector(
  selectMaterials,
  materials => materials.find(material => material.id == id)
);