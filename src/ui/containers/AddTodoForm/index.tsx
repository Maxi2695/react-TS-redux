import React, { useState } from "react";
import { connect }         from "react-redux";
import * as todoActions    from '@application/todo/actions/todoActions';
import { RootState }       from "@application/store/reducers";
import { TodoState }       from "@domain/todo/todo";
import { Todo }            from "@domain/todo/todo";

interface IAddTodoForm {
  addTodo: (params: any) => void;
  setAddingTodo: (isAddingTodo: boolean) => void;
  todos: Todo[];
}

const AddTodoForm = ({
  addTodo,
  setAddingTodo,
  todos,
}: IAddTodoForm) => {
  const [todoTitle, setTodoTitle] = useState('');

  const changeTodoTitle = ({ target: { value } }: any) => {
    setTodoTitle(value);
  };

  const updateTodo = (event: any) => {
    event.preventDefault();

    const addedTodo = {
      id: todos.length + 1,
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

const mapStateToProps = (state: RootState): Nullable<TodoState> => state.todoState;

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
