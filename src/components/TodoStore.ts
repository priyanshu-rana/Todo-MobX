import { action, makeObservable, observable } from "mobx";

export type TodoItems = {
  id: number;
  title: string;
  completed: boolean;
};

export class TodoStoreImpl {
  todos: TodoItems[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  addTodo(title: string) {
    const item: TodoItems = {
      id: +Math.random().toFixed(4),
      title: title,
      completed: false,
    };
    this.todos.push(item);
  }
}

export const TodoStore = new TodoStoreImpl();
