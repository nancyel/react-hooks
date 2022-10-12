import React from "react";
import styled from "styled-components";
import { ITodo } from "../interface";
import { useTodoState } from "../TodoContext";
import { dayName, dayString } from "../utils";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead: React.FC = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo: ITodo) => !todo.done);

  const today = new Date();

  return (
    <TodoHeadBlock>
      <h1>{dayString(today)}</h1>
      <div className="day">{dayName(today)}</div>
      <div className="tasks-left">{undoneTasks.length} Remaining Tasks</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
