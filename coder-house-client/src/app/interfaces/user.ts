import { IObjectApiResponse, IArrayApiResponse } from './app';

export interface IUser {
  createdAt?: string;
  updatedAt?: string;
  _id?: string | null;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserResponse extends IObjectApiResponse<IUser> {}
export interface IUsersResponse extends IArrayApiResponse<IUser> {}

export function makeUser(data: Partial<IUser>): IUser {
  const defaultValue: IUser = {
    email: '',
    firstName: '',
    lastName: '',
  };

  return { ...defaultValue, ...data };
}
