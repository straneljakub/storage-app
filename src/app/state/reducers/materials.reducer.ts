import {createFeature, createReducer, on} from '@ngrx/store'
import { Material } from 'src/material';

import { MaterialsActions } from '../actions/materials.actions'; 
import { MaterialsApiActions } from '../actions/materials.actions';


export interface MaterialsState {
    materials: Material[],
}

const initialState: MaterialsState = {
    materials: [],
}


export const materialsFeature = createFeature({
    name: 'materials',
    reducer: createReducer(
        initialState,
        on(MaterialsApiActions.getMaterials, (state, { materials }) => ({
            ...state,
            materials,
        })),
        on(MaterialsActions.addMaterial, (state, { material }) => ({
            ...state,
            materials: [...state.materials, material],
        })),
        on(MaterialsActions.removeMaterial, (state, {materialId}) => ({
            ...state,
            materials: state.materials.filter(item => item.id != materialId),
        })),
        on(MaterialsActions.editMaterial, (state, {material}) => {
            const index = state.materials.findIndex(item => item.id == material.id);
            const newArray = [...state.materials]; 
            newArray[index] = material;
            return {
                ...state,
                materials: newArray,
            }
        }),
        on(MaterialsActions.setCount, (state, {id, count}) => {
            const index = state.materials.findIndex(item => item.id == id);
            const newArray = [...state.materials]; 
            newArray[index].count = count;
            return {
                ...state,
                materials: newArray,
            }
        }),
        on(MaterialsActions.addCount, (state, {id, count}) => {
            const index = state.materials.findIndex(item => item.id == id);
            const newArray = [...state.materials]; 
            newArray[index].count += count;
            return {
                ...state,
                materials: newArray,
            }
        }),
        on(MaterialsActions.subtractCount, (state, {id, count}) => {
            const index = state.materials.findIndex(item => item.id == id);
            const newArray = [...state.materials]; 
            newArray[index].count -= count;
            return {
                ...state,
                materials: newArray,
            }
        }),
    )
});

export const {
    name, 
    reducer, 
    selectMaterialsState, 
    selectMaterials, 
  } = materialsFeature;

