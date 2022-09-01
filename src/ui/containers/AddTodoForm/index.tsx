import { useState }        from "react";
import { connect }         from "react-redux";
import {nanoid}            from "nanoid";
import * as todoActions    from "@application/todo/actions/todoActions";

interface IAddTodoForm {
  addTodo: (params: any) => void;
  setAddingTodo: (isAddingTodo: boolean) => void;
}

const AddTodoForm = ({
  addTodo,
  setAddingTodo,
}: IAddTodoForm) => {
  const [todoTitle, setTodoTitle] = useState('');

  const changeTodoTitle = ({ target: { value } }: any) => {
    setTodoTitle(value);
  };

  const updateTodo = (event: any) => {
    event.preventDefault();

    const addedTodo = {
      id: nanoid(),
      title: todoTitle,
      completed: false,
    }
    addTodo(addedTodo)
    setAddingTodo(false);
  }

  return (
    <form
      onSubmit={updateTodo}
      style={{
        border: '2px solid green',
        width: '300px',
      }}
    >
      <p>Описание задачи:</p>
      <textarea placeholder="Описание задачи" name="todoTitle" value={todoTitle} onChange={changeTodoTitle} style={{
        maxWidth: '250px',
        width: '250px'
      }} />
      <br />

      <input type="submit" />
      <button onClick={() => setAddingTodo(false)}>Отмена</button>

    </form>
  )
}

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
