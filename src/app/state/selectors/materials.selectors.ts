import { createSelector } from '@ngrx/store'
import { materialsFeature } from '../reducers/materials.reducer'

export const selectMaterialListPageViewModel = createSelector(
    materialsFeature.selectMaterials,
    (materials) => ({materials}),
);