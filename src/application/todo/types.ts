import { Todo }            from "@domain/todo/todo";
import { TodoActionTypes } from "@utils/constants";

interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

interface DeleteTodo {
  type: TodoActionTypes.DELETE_TODO;
  payload: number;
}

interface ChangeTodo {
  type: TodoActionTypes.CHANGE_TODO;
  payload: Todo;
}

interface AddTodo {
  type: TodoActionTypes.ADD_TODO,
  payload: Todo;
}

export type TodoAction =
  | AddTodo
  | ChangeTodo
  | DeleteTodo
  | FetchTodosAction
  | FetchTodosErrorAction
  | FetchTodosSuccessAction
  | SetTodoPageAction
