export interface Todo {
  completed: TodoStatus;
  id: UniqueId;
  title: Title;
  userId: UniqueId;
}

export interface TodoState {
  error: ErrorType;
  limit: LimitNum;
  loading: LoadingStatus;
  page: PageNum;
  todos: Todo[];
}
