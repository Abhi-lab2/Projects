import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [text, setText] = useState(""); // input text entered here.
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodo(dispatch).then(() => {
      getTodos(dispatch);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChnage={(e) => setText(e.target.value)}
        placeholder="add a todo task"
      />
      <button onClick={handleAddTodo}>ADD TODO</button>
    </div>
  );
};

export default TodoInput;
