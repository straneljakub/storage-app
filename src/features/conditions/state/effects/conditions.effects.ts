import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MaterialsActions, MaterialsApiActions } from 'src/app/state/actions/materials.actions';
import { map, of } from 'rxjs'; 
import { Action } from 'rxjs/internal/scheduler/Action';
import { mergeMap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectConditionsByEntityId } from '../selectors/conditions.selectors';
import { Condition } from 'src/condition';
import { ConditionsActions } from '../actions/conditions.actions';
import { Material } from 'src/material';
import { selectMaterialById } from 'src/app/state/selectors/materials.selectors';
import { Notification } from 'src/notification';
import { NotificationsActions } from 'src/features/notifications';


@Injectable()
export class ConditionEffects {

    $checkConditions = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsActions.countChange),
            mergeMap((action) => {
                var material: Material = { id: -1, title: '', count: -1, description: '' };
                this.store.select(selectMaterialById(action.id))
                    .subscribe(value => material = value || { id: -1, title: '', count: -1, description: '' });

                var conditions: Condition[] = [];
                this.store.select(selectConditionsByEntityId(material.id, 'material'))
                    .subscribe(value => conditions = value);

                const metConditions = conditions.filter(c => {
                    if (c.operator == '>')
                        return material.count > c.value;
                    else if (c.operator == '<')
                        return material.count < c.value;
                    else
                        return material.count == c.value;
                });

                return metConditions.map(condition =>
                    ConditionsActions.conditionMet({ condition }));
            }
            )));

    $createNotification = createEffect(() =>
        this.actions$.pipe(
            ofType(ConditionsActions.conditionMet),
            map((action) => {
                const newNotification: Notification = {
                    id: -1,
                    entityId: action.condition.entityId,
                    value: action.condition.value,
                    operator: action.condition.operator,
                    date: '',
                }
                return NotificationsActions.createNotification({ notification: newNotification });
            }
            )
        ));
    
    $deleteCondition = createEffect(() =>
        this.actions$.pipe(
            ofType(ConditionsActions.conditionMet),
            map((action) => 
                ConditionsActions.deleteCondition({id: action.condition.id}))
    ));

    constructor(
        private actions$: Actions,
        private store: Store,
    ) { }
}