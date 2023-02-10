import {createActionGroup, props} from '@ngrx/store';
import { Condition } from 'src/condition';
import { Material } from 'src/material';
import { conditionFormData } from 'src/app/components/condition-dialog/condition-dialog.component';

export const ConditionsActions = createActionGroup({
    source: 'Materials Page',
    events: {
        'Create Condition': props<{id: number, data: conditionFormData, objType: any, message: string}>(),
        'Delete Condition': props<{id: number}>(),
    },
})

export const ConditionsApiActions = createActionGroup({
    source: 'Conditions API',
    events: {
        'Get Conditions': props<{conditions: Condition[]}>(),
    },
});