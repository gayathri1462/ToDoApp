export interface TodoItem {
  todoName: string;
  isComplete?: boolean;
  createdAt?: string;
  _id?: string;
}

export interface TabItem {
  name: string;
  count: number;
  todos: TodoItem[];
}
