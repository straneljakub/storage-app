export interface Condition  {
    id: number;
    value: number;
    operator: string;
    entityId: {
        id: number;
        type: any;
    };
    message: string;
}