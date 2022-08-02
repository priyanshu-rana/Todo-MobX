import { autorun, observable } from "mobx";
import TodoList from "./components/TodoList";
import { TodoStore } from "./components/TodoStore";

function App() {
  // const friend = {
  //   first_name: "Jane ",
  //   last_name: "Doe",
  //   full_name() {
  //     return `${this.first_name} ${this.last_name} `;
  //   },
  // };

  // const observableFriend = observable(friend);

  // autorun(() => {
  //   console.log("AutoRun called-->", observableFriend.last_name);
  // });

  return (
    <div className="">
      {/* <h1>Hello duniya !!</h1> */}
      <TodoList todoStore={TodoStore} />
    </div>
  );
}

export default App;
