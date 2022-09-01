import { useState }        from "react";
import { connect }         from "react-redux";
import * as todoActions    from "@application/todo/actions/todoActions";
import { TODO_AT_WORK,
         TODO_COMPLETED }  from "@utils/constants";
import { Todo }            from "@domain/todo/todo";

interface IChangeTodoForm {
  changeTodo: (params: any) => void;
  setIsChangedTodo: (isChangedTodo: boolean) => void;
  todo: Todo;
}

const ChangeTodoForm = ({
  changeTodo,
  setIsChangedTodo,
  todo,
}: IChangeTodoForm) => {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoStatus, setTodoStatus] = useState(todo.completed);

  const changeTodoTitle = ({ target: { value } }: any) => {
    setTodoTitle(value);
  };

  const changeTodoStatus = ({ target: { value } }: any) => {
    if (value === TODO_AT_WORK) {
      setTodoStatus(false)
    }
    if (value === TODO_COMPLETED) {
      setTodoStatus(true)
    }
  };

  const updateTodo = (event: any) => {
    event.preventDefault();

    const changedTodo = {
      id: todo.id,
      title: todoTitle,
      completed: todoStatus,
    }
    changeTodo(changedTodo)
    setIsChangedTodo(false);
  }

  return (

    <form
      onSubmit={updateTodo}
      style={{
        border: '2px solid green',
        width: '300px',
      }}
    >
      <p>Изменить описание задачи:</p>
      <textarea placeholder="Описание задачи" name="todoTitle" value={todoTitle} onChange={changeTodoTitle} style={{
        maxWidth: '250px',
        width: '250px'
      }} />
      <br />

      <p>Изменить статус задачи:
        <select onChange={changeTodoStatus} defaultValue={todo.completed ? TODO_COMPLETED : TODO_AT_WORK}>
          <option value={TODO_COMPLETED}>Выполнена</option>
          <option value={TODO_AT_WORK}>В работе</option>
        </select>
      </p>


      <input type="submit" />
      <button onClick={() => setIsChangedTodo(false)}>Отмена</button>

    </form>
  )
}

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(null, mapDispatchToProps)(ChangeTodoForm);
