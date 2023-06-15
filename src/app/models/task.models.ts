export interface Task{
    id: number;
    title: string;
    state: TaskState | string;
    editing?: boolean;
}

export enum TaskState {
    ToDo = 'ToDo',
    Doing = 'Doing',
    Done = 'Done'
  }