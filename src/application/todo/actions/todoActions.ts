import axios               from "axios";
import { Dispatch }        from "redux";
import { TodoActionTypes } from "@utils/constants";
import { Todo }            from "@domain/todo/todo";
import { TodoAction }      from "../types";

export const fetchTodos = (userId: Nullable<UniqueId>) => {
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
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка с загрузкой задач'
      })
    }
  }
}

export const setTodoPage = (page: number) => (dispatch: Dispatch<TodoAction>) => {
  dispatch({
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  });
};

export const deleteTodo = (todoId: number) => (dispatch: Dispatch<TodoAction>) => {
  dispatch({
    type: TodoActionTypes.DELETE_TODO,
    payload: todoId,
  });
};

export const changeTodo = (params: Todo) => (dispatch: Dispatch<TodoAction>) => {
  dispatch({
    type: TodoActionTypes.CHANGE_TODO,
    payload: params,
  });
};

export const addTodo = (params: Todo) => (dispatch: Dispatch<TodoAction>) => {
  dispatch({
    type: TodoActionTypes.ADD_TODO,
    payload: params,
  });
};
