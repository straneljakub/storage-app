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
        on(NotificationsActions.createNotification, (state, {notification}) => {
            const newNotification = {...notification};
            newNotification.id = Math.max(...state.notifications.map(item => item.id), 0) + 1;
            return {
                ...state,
                notifications: [...state.notifications, newNotification],
            }
        }),
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