import { createActionGroup, props } from "@ngrx/store";
import { Material } from "src/material";

export const MaterialsActions = createActionGroup({
    source: 'Materials Page',
    events: {
        'Add Material': props<{material: Material}>(),
        'Remove Material': props<{materialId: number}>(),
        'Edit Material': props<{material: Material}>(),
        'Set Count': props<{material: Material}>(),
        'Add Count': props<{material: Material}>(),
        'Subtract Count': props<{material: Material}>(),
    },
});

export const MaterialsApiActions = createActionGroup({
    source: 'Materials API',
    events: {
        'Get Material': props<{materials: Material[]}>(),
    },
});