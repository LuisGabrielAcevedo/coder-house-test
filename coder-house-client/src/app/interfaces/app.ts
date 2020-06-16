export interface IApiResponse {
  success: boolean;
  msg?: string;
}

export interface IStateItem {
  value: string;
  text: string;
}

export interface IObjectApiResponse<T> {
  data: T;
}

export interface IArrayApiResponse<T> {
  data: T[];
}
