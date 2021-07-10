export enum Statuses {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING'
}

export interface Todo {
  id: string;
  content: string;
  status: Statuses;
}

export interface TodoList {
  id: string;
  name: string;
  createdDate: string;
  updatedDate: string;
  items: Todo[];
}