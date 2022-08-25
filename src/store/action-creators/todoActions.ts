import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todoTypes";


export const fetchTodos = (page = 1, limit = 10, userId: number | string | null) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS
      })
      const resposne = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit,
          userId,
        }
      });
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: resposne.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка с загрузкой дел'
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
