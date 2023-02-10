import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MaterialsActions, MaterialsApiActions } from '../actions/materials.actions';
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { mergeMap } from 'rxjs';


@Injectable()
export class MaterialEffects {
    $countChange = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsActions.addCount, MaterialsActions.subtractCount),
            map((action) => {
                return MaterialsActions.countChange({ id: action.id });
            })
        )
    );

    $countEditChange = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsActions.editMaterial),
            map((action) => {
                return MaterialsActions.countChange({ id: action.material.id });
            })
        )
    );

    $countChanges = createEffect(() =>
        this.actions$.pipe(
            ofType(MaterialsApiActions.getMaterials),
            mergeMap((action) =>
                action.materials.map(material =>
                    ({ type: '[Materials Page] Count Change', payload: material.id })
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
    ) { }
}