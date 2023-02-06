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
        on(MaterialsApiActions.getMaterial, (state, { materials }) => ({
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
        on(MaterialsActions.editMaterial, (state, {material}) => ({
            ...state,
            materials: [...(state.materials.filter(item => item.id != material.id)), material],
        })),
        on(MaterialsActions.setCount, (state, {material}) => ({
            ...state,
            materials: [...(state.materials.filter(item => item.id != material.id)), material],
        })),
        on(MaterialsActions.addCount, (state, {material}) => ({
            ...state,
            materials: [...(state.materials.filter(item => item.id != material.id)), material],
        })),
        on(MaterialsActions.subtractCount, (state, {material}) => ({
            ...state,
            materials: [...(state.materials.filter(item => item.id != material.id)), material],
        })),
    )
});

export const {
    name, 
    reducer, 
    selectMaterialsState, 
    selectMaterials, 
  } = materialsFeature;

