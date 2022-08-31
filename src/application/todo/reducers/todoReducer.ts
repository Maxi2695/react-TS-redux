import { TodoActionTypes } from "@utils/constants";
import { TodoAction }      from "../types";
import { TodoState }       from "@domain/todo/todo";

const initialState: Nullable<TodoState> = {
  todos: [],
  page: 1,
  error: null,
  limit: 5,
  loading: false
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true
      }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      const revesersTodos = action.payload.reverse()
      return {
        ...state,
        loading: false,
        todos: revesersTodos
      }
    case TodoActionTypes.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case TodoActionTypes.DELETE_TODO:
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload)
      return {
        ...state,
        todos: filteredTodos,
      }
    case TodoActionTypes.CHANGE_TODO:
      const changedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            completed: action.payload.completed,
          }
        } else {
          return todo;
        }
      })
      return {
        ...state,
        todos: changedTodos,
      }
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos,
        ]
      }
    default:
      return state
  }
}
