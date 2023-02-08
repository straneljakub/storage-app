import {createFeature, createReducer, on} from '@ngrx/store'
import { Condition } from 'src/condition';

import { ConditionsActions } from '../actions/conditions.actions';
import { ConditionsApiActions } from '../actions/conditions.actions';


export interface ConditionsState {
    conditions: Condition[],
}

const initialState: ConditionsState = {
    conditions: [],
}

export const conditionsFeature = createFeature({
    name: 'conditions',
    reducer: createReducer(
        initialState,
        on(ConditionsApiActions.getConditions, (state, {conditions}) => ({
            ...state,
            conditions,
        })),
        on(ConditionsActions.createCondition, (state, {condition}) => {
            const newCondition = {...condition};
            newCondition.id = Math.max(...state.conditions.map(item => item.id), 0) + 1;
            return{
                ...state,
                conditions: [...state.conditions, newCondition], 
            }
        }),
        on(ConditionsActions.deleteCondition, (state, {id}) => {
            const newArray = state.conditions.filter(item => item.id != id);
            return {
                ...state,
                conditions: newArray,
            }
        }),
    )
})

export const {
    name, 
    reducer, 
    selectConditionsState, 
    selectConditions, 
  } = conditionsFeature;