import React from "react";
import styled from "styled-components";
import { ITodo } from "../interface";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList: React.FC = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
