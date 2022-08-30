import React, { useEffect, useState } from 'react';
import * as todoActions               from '@application/todo/actions/todoActions';
import { RootState }                  from '@application/store/reducers';
import Loading                        from '../Loading';
import Error                          from '../Error';
import { TodoAction }                 from '@application/todo/actions/todoActions';
import { connect }                    from 'react-redux';
import { TodoState }                  from '@application/todo/reducers/todoReducer';
import { Todo }                       from '@domain/todo/todo';
import { UserState }                  from '@application/user/reducers/userReducer';
import Pagination                     from './Pagination';
import AddTodoForm                    from '../AddTodoForm';
import TodoItem                       from './TodoItem';

interface ITodoList {
  fetchTodos: (page: number, limit: number, userId: number) => Promise<void>;
  setTodoPage: (page: number) => TodoAction;
  userState?: UserState;
  todoState: TodoState;
  userIdInLS?: number;
}

const TodoList = ({
  fetchTodos,
  setTodoPage,
  todoState,
  userState,
  userIdInLS,
}: ITodoList) => {

  const [addingTodo, setAddingTodo] = useState(false)

  const {
    error,
    limit,
    loading,
    page,
    todos,
  } = todoState;


  useEffect(() => {
    let userId;

    userState?.user?.id ?
      userId = userState.user.id :
      userId = userIdInLS
    fetchTodos(page, limit, Number(userId));
  }, [fetchTodos, page, limit, userState, userIdInLS]);

  return (
    <div>
      {
        addingTodo
          ?
          <AddTodoForm
            setAddingTodo={setAddingTodo}
          />
          :
          <button onClick={() => setAddingTodo(true)}>Добавить задачу</button>
      }

      <h1>Список задач</h1>

      {loading && <Loading />}

      {error && <Error message={error} />}

      {!(loading || error) &&
        todos?.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}

      {<Pagination
        page={page}
        setTodoPage={setTodoPage}
      />}
    </div>
  );
};

const mapStateToProps = (state: RootState): Nullable<RootState> => {
  return {
    todoState: state.todoState,
    userState: state.userState
  }
};

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
