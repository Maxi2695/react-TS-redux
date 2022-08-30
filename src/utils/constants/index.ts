export const PAGINATIONS = [1, 2];

export const USER_NOT_FOUND = 'Пользователь с таким именем или email не найден';

export const LOADING_ERROR = 'Произошла ошибка при загрузке пользователей';

export const TODO_COMPLETED = 'Выполнена';

export const TODO_AT_WORK = 'В работе';

export enum UserActionTypes {
  FETCH_USER = "FETCH_USERS",
  FETCH_USER_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USERS_ERROR",
  FETCH_USER_NOT_FOUND = "FETCH_USER_NOT_FOUND"
}

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  CHANGE_TODO = 'CHANGE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}
