import { createSelector } from '@ngrx/store'
import { conditionsFeature, selectConditions } from '../reducers/conditions.reducer'

export const selectConditionnListPageViewModel = createSelector(
    conditionsFeature.selectConditions,
    (conditions) => ({conditions}),
);


export const selectConditionsByEntityId = (id: number, type: any) => createSelector(
    selectConditions,
    conditions => conditions.filter(condition => condition.entityId.id == id && condition.entityId.type == type)
)