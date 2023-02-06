import { createSelector } from '@ngrx/store'
import { notificationsFeature } from '../reducers/notifications.reducer'

export const selectNotificationListPageViewModel = createSelector(
    notificationsFeature.selectNotifications,
    (notifications) => ({notifications}),
);