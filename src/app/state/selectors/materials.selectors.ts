import { createSelector } from '@ngrx/store'
import { materialsFeature, selectMaterials } from '../reducers/materials.reducer'

export const selectMaterialListPageViewModel = createSelector(
    materialsFeature.selectMaterials,
    (materials) => ({materials}),
);

export const getMaterialById = (id: number) => createSelector(selectMaterials, (allMaterials) => {
    if (allMaterials) {
      return allMaterials.find(material => {
        return material.id === id;
      });
    } else {
      return {};
    }
  });