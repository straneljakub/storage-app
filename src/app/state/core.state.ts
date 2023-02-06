import { MaterialsState } from "./reducers/materials.reducer";
import { NotificationsState } from "./reducers/notifications.reducer";

export interface State {
    materials: MaterialsState,
    notifications: NotificationsState,
}