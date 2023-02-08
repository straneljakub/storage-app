import {createActionGroup, props} from '@ngrx/store';
import { Condition } from 'src/condition';
import { Material } from 'src/material';

export const ConditionsActions = createActionGroup({
    source: 'Materials Page',
    events: {
        'Create Condition': props<{condition: Condition}>(),
        'Delete Condition': props<{id: number}>(),
    },
})

export const ConditionsApiActions = createActionGroup({
    source: 'Conditions API',
    events: {
        'Get Conditions': props<{conditions: Condition[]}>(),
    },
});