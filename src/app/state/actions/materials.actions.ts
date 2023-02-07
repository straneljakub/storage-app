import { createActionGroup, props } from "@ngrx/store";
import { Material } from "src/material";

export const MaterialsActions = createActionGroup({
    source: 'Materials Page',
    events: {
        'Add Material': props<{material: Material}>(),
        'Remove Material': props<{materialId: number}>(),
        'Edit Material': props<{material: Material}>(),
        'Set Count': props<{id: number, count: number}>(),
        'Add Count': props<{id: number, count: number}>(),
        'Subtract Count': props<{id: number, count: number}>(),
    },
});

export const MaterialsApiActions = createActionGroup({
    source: 'Materials API',
    events: {
        'Get Materials': props<{materials: Material[]}>(),
    },
});