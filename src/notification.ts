export interface Notification {
	id: number;
	entityId: {
        id: number;
        type: any;
    };
    message: string;
    date: string;
}