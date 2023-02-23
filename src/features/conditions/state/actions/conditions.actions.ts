import {createActionGroup, props} from '@ngrx/store';
import { Condition } from 'src/condition';
import { Material } from 'src/material';
import { conditionFormData } from 'src/features/conditions/components/condition-dialog/condition-dialog.component';

export const ConditionsActions = createActionGroup({
    source: 'Materials Page',
    events: {
        'Create Condition': props<{id: number, data: conditionFormData, objType: any}>(),
        'Delete Condition': props<{id: number}>(),
        'Condition Met': props<{condition: Condition}>(),
    },
})

export const ConditionsApiActions = createActionGroup({
    source: 'Conditions API',
    events: {
        'Get Conditions': props<{conditions: Condition[]}>(),
    },
});