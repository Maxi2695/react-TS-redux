import produce             from 'immer'
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

export const todoReducer = (state = initialState, action: TodoAction): TodoState =>
  produce(state, (draftState) => {
    switch (action.type) {
      case TodoActionTypes.FETCH_TODOS:
        draftState.loading = true;
        break;
      case TodoActionTypes.FETCH_TODOS_SUCCESS:
        const revesersTodos = action.payload;
        draftState.loading = false;
        draftState.todos = revesersTodos;
        break;
      case TodoActionTypes.SET_TODO_PAGE:
        draftState.page = action.payload;
        break;
      case TodoActionTypes.FETCH_TODOS_ERROR:
        draftState.loading = false;
        draftState.error = action.payload;
        break;
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
        draftState.todos = changedTodos;
        break;
      case TodoActionTypes.ADD_TODO:
        draftState.todos.unshift(action.payload);
        break;
      default:
        return state
    }
  });
