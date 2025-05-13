import { useEffect, useState } from "react";

const AddTodo = ( {}) => {

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const input = event.target;
      const text = input.value.trim();
      if (text) {
        fetch('http://localhost:3000/todos', 
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({text: text})
          })
        input.value = "";
      }
    }
  }

  return (
    <input
      type="text"
      placeholder="Adicione aqui sua nova tarefa"
      onKeyDown={handleKeyPress}
    />
  );
};

const TodoFilter = ({changeFilter}) => {
  return (
    <div className="center-content">
      <a href="#" id="filter-all" onMouseDown={() => changeFilter('all')}>
        Todos os itens
      </a>
      <a href="#" id="filter-done" onMouseDown={() => changeFilter('done')}>
        Concluídos
      </a>
      <a href="#" id="filter-pending" onMouseDown={() => changeFilter('pending')}>
        Pendentes
      </a>
    </div>
  );
};

const TodoItem = ({ todo }) => {
  
  const handleClick = () => {
    fetch(`http://localhost:3000/todos/${todo.id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({done: true})
      }
    )
  }

  
  return (
    <>
      {todo.done ? (
        <li style={{ textDecoration: "line-through" }}>{todo.text}</li>
      ) : (
        <li>
          {todo.text}
          <button onClick={handleClick}>Concluir</button>
        </li>
      )}
    </>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(()=>{
    fetch("http://localhost:3000/todos").
    then((response)=>{if(response.ok){return response.json()}else throw new Error(`HTTP error! status: ${response.status}`)}).
    then((data)=>{setTodos(data.map((todo)=>todo))}).
    catch((error)=>console.log(error));
  });

  return (
    <>
      <h1>Todo List</h1>
      <div className="center-content">
        Versão inicial da aplicação de lista de tarefas para a disciplina
        SPODWE2
      </div>
      <TodoFilter changeFilter={setFilter}/>
      <AddTodo addTodo/>
      <ul id="todo-list">
        {todos.map((todo, index) => {
          switch(filter){
            case 'all': break;
            case 'pending': if(todo.done) return; break;
            case 'done': if(!todo.done) return;
          }
          return <TodoItem key={index} todo={todo} />
        })}
      </ul>
    </>
  );
};

export { TodoList };
