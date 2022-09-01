import { useState }        from "react";
import { Todo }            from "@domain/todo/todo";
import { connect }         from "react-redux";
import * as todoActions    from "@application/todo/actions/todoActions";
import { TODO_AT_WORK,
         TODO_COMPLETED }  from "@utils/constants";
import ChangeTodoForm      from "../ChangeTodoForm";


interface ITodoItem {
  todo: Todo;
  deleteTodo: (todoId: number) => void;
}

const TodoItem = ({
  todo,
  deleteTodo,
}: ITodoItem) => {

  const [isChangedTodo, setIsChangedTodo] = useState(false);


  return (
    <div key={todo.id}>
      <p>Номер задачи: {todo.id}</p>
      <p>Описание: {todo.title}</p>

      <div style={{ marginBottom: '10px' }}>
        Статус: {
          <p
            style={{
              border: todo.completed ? '2px solid green' : '2px solid red',
              display: "inline",
            }}
          > {todo.completed ? TODO_COMPLETED : TODO_AT_WORK}
          </p>
        }
      </div>
      {
        isChangedTodo
          ?
          <ChangeTodoForm
            todo={todo}
            setIsChangedTodo={setIsChangedTodo} />
          :
          <>
            <button onClick={() => setIsChangedTodo(true)}>Редактировать задачу</button>
            <button onClick={() => deleteTodo(todo.id)}>Удалить задачу</button>
          </>
      }
      <hr />
    </div>
  )
}


const mapDispatchToProps = {
  ...todoActions,
};

export default connect(null, mapDispatchToProps)(TodoItem);


