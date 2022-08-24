import React, { useEffect, FC } from 'react';
import * as todoActions from '../../store/action-creators/todoActions';
import { RootState } from '../../types/stateType';
import { PAGINATIONS } from '../../constants';
import Loading from '../Loading';
import Error from '../Error';
import { connect } from 'react-redux';

interface ITodoList {

}

const TodoList: FC<ITodoList> = ({
  error,
  fetchTodos,
  limit,
  loading,
  page,
  setTodoPage,
  todos,
  userId,
}: any) => {
  useEffect(() => {
    fetchTodos(page, limit);
  }, [fetchTodos, page, limit]);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error message={error} />}
      {!(loading || error) &&
        todos.map((todo: any) => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
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

const mapStateToProps = (state: RootState) => ({
  ...state.todoReducer,
});

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
