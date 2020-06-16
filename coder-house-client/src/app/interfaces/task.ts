import { IObjectApiResponse, IArrayApiResponse } from './app';
import { IUser } from './user';

export interface ITask {
  description: '';
  createdBy: '';
  assignedTo?: IUser | null;
  createdAt?: IUser;
  updatedAt?: string;
  _id?: string;
  title: string;
  state?: 'CREATED' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED';
}

export interface ITaskResponse extends IObjectApiResponse<ITask> {}
export interface ITasksResponse extends IArrayApiResponse<ITask> {}

export function makeTask(data: Partial<ITask>): ITask {
  const defaultValue: ITask = {
    description: '',
    createdBy: '',
    title: '',
  };

  return { ...defaultValue, ...data };
}
