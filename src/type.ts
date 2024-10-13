export enum Status {
    TODO = 'TODO',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
    REMOVED = 'REMOVED'
};

export type Task = {
    id: number;
    status: Status;
    name: string;
    description: string;
    date: string;
    creator: string;
}