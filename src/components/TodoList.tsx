import React, { useEffect } from "react";
import * as todoActions from "../store/action-creators/todoActions";
import { RootState } from "../types/stateType";
import { connect } from 'react-redux';

const TodoList = ({
  error,
  fetchTodos,
  limit,
  loading,
  page,
  setTodoPage,
  todos,
}: any) => {

  const paginations = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [fetchTodos, page, limit])

  return (
    <div>
      {loading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {!(loading || error) && todos.map((todo: any) => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
      {<div style={{ display: 'flex' }}>
        {paginations.map((p) => {
          return (
            <div
              key={p}
              onClick={() => setTodoPage(p)}
              style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}>
              {p}
            </div>
          )
        })}
      </div>
      }

    </div>
  )
}


const mapStateToProps = (state: RootState) => ({
  ...state.todoReducer
});

const mapDispatchToProps = ({
  ...todoActions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
