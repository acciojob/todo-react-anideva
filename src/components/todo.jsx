import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <span>{todo}</span>

          <button
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;