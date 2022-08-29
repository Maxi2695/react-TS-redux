import React, { useEffect } from 'react';
import * as todoActions     from '@application/todo/actions/todoActions';
// import { RootState }     from '@types/stateType';
import { RootState }        from '../../types/stateType';
import { PAGINATIONS }      from '@utils/constants';
import Loading              from '../Loading';
import Error                from '../Error';
import { connect }          from 'react-redux';
import { Todo, TodoAction } from '@domain/todo/todo';
import { User }             from '@domain/user/user';

interface ITodoList {
  error: string | null;
  fetchTodos: (page: number, limit: number, userId: number) => Promise<void>;
  limit: number;
  loading: boolean;
  page: number;
  setTodoPage: (page: number) => TodoAction;
  todos: Todo[],
  user: User;
  userIdInLS: number;
}

const TodoList = ({
  error,
  fetchTodos,
  limit,
  loading,
  page,
  setTodoPage,
  todos,
  user,
  userIdInLS,
}: ITodoList) => {

  useEffect(() => {
    let userId;
    user.id ?
      userId = user.id :
      userId = userIdInLS
    fetchTodos(page, limit, Number(userId));
  }, [fetchTodos, page, limit, user, userIdInLS]);

  return (
    <div>
      {loading && <Loading />}

      {error && <Error message={error} />}

      {!(loading || error) &&
        todos.map((todo: any) => (
          <div key={todo.id}>
            {todo.id} - {todo.title} - {todo.userId}
          </div>
        ))}

      {
        <div style={{ display: 'flex' }}>
          {PAGINATIONS.map((p) => {
            return (
              <div
                key={p}
                onClick={() => setTodoPage(p)}
                style={{
                  border: p === page ? '2px solid green' : '1px solid gray',
                  padding: 10,
                }}
              >
                {p}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    todo: state.todoReducer,
    user: state.userReducer
  }
};

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
