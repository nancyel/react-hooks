import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
