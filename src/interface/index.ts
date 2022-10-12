export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

export type InitialState = Array<ITodo>;
