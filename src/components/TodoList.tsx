import { observable, observe } from "mobx";
import { observer } from "mobx-react";
import { FC, memo, useState } from "react";
import { TodoStoreImpl } from "./TodoStore";

type TodoListProps = {
  todoStore: TodoStoreImpl;
};

const TodoList: FC<TodoListProps> = ({ todoStore }) => {
  const [value, setvalue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          todoStore.addTodo(value);
        }}
      >
        Add
      </button>

      <ul>
        {todoStore.todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

TodoList.defaultProps = {};

export default observer(TodoList);
