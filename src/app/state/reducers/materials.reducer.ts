import {createFeature, createReducer, on} from '@ngrx/store'
import { Material } from 'src/material';

import { MaterialsActions } from '../actions/materials.actions'; 
import { MaterialsApiActions } from '../actions/materials.actions';


export interface MaterialsState {
    materials: Material[],
}

const initialState: MaterialsState = {
    materials: [{id: 0, title: 'Iron', count: 0, description: 'Very heavy'}],
}


export const materialsFeature = createFeature({
    name: 'materials',
    reducer: createReducer(
        initialState,
        on(MaterialsApiActions.getMaterials, (state, { materials }) => ({
            ...state,
            materials,
        })),
        on(MaterialsActions.addMaterial, (state, { material }) => {
            const newMaterial = {...material};
            newMaterial.id = Math.max(...state.materials.map(item => item.id), 0) + 1;
            return {
                ...state,
                materials: [...state.materials, newMaterial],
            }
        }),
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
        on(MaterialsActions.addCount, (state, {id, count}) => {
            const index = state.materials.findIndex(item => item.id == id);
            const newArray = [...state.materials]; 
            const item = {...newArray[index]};
            item.count += count;
            newArray[index] = item;
            return {
                ...state,
                materials: newArray,
            }
        }),
        on(MaterialsActions.subtractCount, (state, {id, count}) => {
            const index = state.materials.findIndex(item => item.id == id);
            const newArray = [...state.materials]; 
            const item = {...newArray[index]};
            item.count -= count;
            newArray[index] = item;
            if(item.count >= 0) {
                return {
                    ...state,
                    materials: newArray,
                }
            } else {
                return {
                    ...state,
                }
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

