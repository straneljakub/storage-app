import { createFeature, createReducer, on } from '@ngrx/store'
import { Notification } from 'src/notification';

import { NotificationsActions } from '../actions/notifications.actions';
import { NotificationsApiActions } from '../actions/notifications.actions';

export interface NotificationsState {
    notifications: Notification[],
}

const initialState: NotificationsState = {
    notifications: [{ id: 0, value: 25, operator: '>', entityId: { id: 0, type: 'material' }, date: '11. 2. 2023 12:16', },
    { id: 2, value: 25, operator: '>', entityId: { id: 0, type: 'material' }, date: '11. 2. 2023 12:16', },
    { id: 3, value: 25, operator: '>', entityId: { id: 0, type: 'material' }, date: '11. 2. 2023 12:16', }],
}

export const notificationsFeature = createFeature({
    name: 'notifications',
    reducer: createReducer(
        initialState,
        on(NotificationsApiActions.getNotifications, (state, { notifications }) => ({
            ...state,
            notifications,
        })),
        on(NotificationsActions.createNotification, (state, { notification }) => {
            const newNotification = { ...notification };
            newNotification.id = Math.max(...state.notifications.map(item => item.id), 0) + 1;
            const date = new Date();
            newNotification.date = date.getDate() + '. ' + date.getMonth() + '. ' + date.getFullYear() +
                ' ' + date.getHours() + ':' + date.getMinutes();
            return {
                ...state,
                notifications: [...state.notifications, newNotification],
            }
        }),
        on(NotificationsActions.deleteNotification, (state, { id }) => {
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