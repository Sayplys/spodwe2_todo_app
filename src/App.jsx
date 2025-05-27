import "./App.css";
import { TodoList } from "./TodoList";
import { UserSign } from "./userSign/UserSign";

function App() {
  const token = "test"

  const checkLogin = () => {
    if(token) return <UserSign />
    else return <TodoList />
  }

  return (
    <main className="container">
      {checkLogin()}
    </main>
  );
}

export default App;
