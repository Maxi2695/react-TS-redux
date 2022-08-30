import axios               from "axios";
import { Dispatch }        from "redux";
import { TodoActionTypes } from "@utils/constants";
import { Todo }            from "@domain/todo/todo";

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


export const fetchTodos = (userId: UniqueId | null) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS
      })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          userId,
        }
      });
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка с загрузкой задач'
      })
    }
  }
}

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page
  }
}

export const deleteTodo = (todoId: number): TodoAction => {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: todoId,
  }
}

export const changeTodo = (params: Todo): TodoAction => {
  return {
    type: TodoActionTypes.CHANGE_TODO,
    payload: params,
  }
}

export const addTodo = (params: Todo): TodoAction => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: params,
  }
}
