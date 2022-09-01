import { Todo } from "@domain/todo/todo";

export const getPageNumbers = (totalTodos: number, limit: LimitNum) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / limit); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}

export const getCurrentTodos = (page: number, limit: number, todos: Todo[]) => {
  const lastTodoIndex = page * limit;
  const firstTodoPage = lastTodoIndex - limit;
  return todos.slice(firstTodoPage, lastTodoIndex);
}

export const setTodoId = (todos: Todo[], todo: Todo): number => {
  const todosCopy = [...todos];
  return todosCopy.reverse().indexOf(todo) + 1
}
