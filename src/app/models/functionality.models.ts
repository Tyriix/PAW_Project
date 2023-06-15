import { Task } from './task.models'

export interface Functionality{
    id: number;
    name: string;
    tasks?: Task[];
}