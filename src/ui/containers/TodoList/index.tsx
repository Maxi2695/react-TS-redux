import { useEffect, useState }        from 'react';
import * as todoActions               from '@application/todo/actions/todoActions';
import { RootState }                  from '@application/store/reducers';
import Loading                        from '@ui/common/Loading';
import Error                          from '@ui/common/Error';
import { connect }                    from 'react-redux';
import { TodoState }                  from '@domain/todo/todo';
import { Todo }                       from '@domain/todo/todo';
import { UserState }                  from '@domain/user/user';
import Pagination                     from '@ui/containers/TodoList/Pagination';
import AddTodoForm                    from '../AddTodoForm';
import { getCurrentTodos }            from '@utils/index';
import TodoItem                       from './TodoItem';

interface ITodoList {
  fetchTodos: (userId: number) => Promise<void>;
  setTodoPage: (page: number) => void;
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

  const currentTodos = getCurrentTodos(page, limit, todos)

  useEffect(() => {
    let userId;

    userState?.user?.id ?
      userId = userState.user.id :
      userId = userIdInLS
    fetchTodos(Number(userId));
  }, [fetchTodos, userState, userIdInLS]);

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
        currentTodos?.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
          />
        ))}

      {<Pagination
        limit={limit}
        page={page}
        setTodoPage={setTodoPage}
        totalTodos={todos.length}
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
