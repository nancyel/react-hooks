import React, {
  createContext,
  Dispatch,
  MutableRefObject,
  useContext,
  useReducer,
  useRef,
} from "react";
import { IAction, InitialState, ITodo } from "./interface";

const initialTodos = [
  {
    id: 1,
    text: "Daily Reading: The Prayer Life chapter 1",
    done: true,
  },
  {
    id: 2,
    text: "Study: Review useContext hook",
    done: true,
  },
  {
    id: 3,
    text: "Buy Groceries at Costco",
    done: false,
  },
  {
    id: 4,
    text: "Do laundry",
    done: false,
  },
];

function todoReducer(state: InitialState, action: IAction) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo: ITodo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo: ITodo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext<ITodo[]>([]);
const TodoDispatchContext = createContext<Dispatch<IAction>>(() => {});
const TodoNextIdContext = createContext<MutableRefObject<number>>({
  current: 5,
});

interface Props {
  children: any;
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
