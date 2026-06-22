import React, { useState } from "react";
import Todo from "./todo";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter(
      (_, index) => index !== indexToDelete
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      <Todo
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;