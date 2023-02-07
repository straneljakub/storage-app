import {createFeature, createReducer, on} from '@ngrx/store'
import { Notification } from 'src/notification';

import { NotificationsActions } from '../actions/notifications.actions';
import { NotificationsApiActions } from '../actions/notifications.actions';


export interface NotificationsState {
    notifications: Notification[],
}

const initialState: NotificationsState = {
    notifications: [],
}

export const notificationsFeature = createFeature({
    name: 'notifications',
    reducer: createReducer(
        initialState,
        on(NotificationsApiActions.getNotifications, (state, {notifications}) => ({
            ...state,
            notifications,
        })),
        on(NotificationsActions.createNotification, (state, {notification}) => ({
            ...state,
            notifications: [...state.notifications, notification],
        })),
        on(NotificationsActions.deleteNotification, (state, {id}) => {
            const newArray = state.notifications.filter(item => item.id != id);
            return {
                ...state,
                notifications: newArray,
            }
        }),
    )
})

export const {
    name, 
    reducer, 
    selectNotificationsState, 
    selectNotifications, 
  } = notificationsFeature;