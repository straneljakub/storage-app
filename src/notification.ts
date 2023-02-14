export interface Notification {
	id: number;
	entityId: {
        id: number;
        type: any;
    };
    value: number;
    operator: string;
    date: string;
}