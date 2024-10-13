export enum Status {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    REMOVED = 'REMOVED'
};

export type Task = {
    uuid: string;
    status: Status;
    name: string;
    description: string;
    date: string;
    creator: string;
}