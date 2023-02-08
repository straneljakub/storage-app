import { createSelector } from '@ngrx/store'
import { conditionsFeature } from '../reducers/conditions.reducer'

export const selectConditionnListPageViewModel = createSelector(
    conditionsFeature.selectConditions,
    (conditions) => ({conditions}),
);