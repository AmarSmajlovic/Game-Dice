import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTodo, deleteTodo } from "../../redux/features";

const TodosScreen = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    const id = new Date().getTime();
    dispatch(addTodo({ title: "jedan", completed: false, id: id }));
  };

  return (
    <div>
      <button onClick={handleAddTodo}>add todo</button>
      {todos.map((todo, index) => (
        <p key={index}>
          {todo.title}{" "}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default TodosScreen;
