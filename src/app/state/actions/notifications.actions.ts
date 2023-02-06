import {createActionGroup, props} from '@ngrx/store';
import { Notification } from 'src/notification';

export const NotificationsActions = createActionGroup({
    source: 'Notifications Centre',
    events: {
        'Create Notification': props<{notification: Notification}>(),
        'Delete Notification': props<{id: number}>(),
    },
})