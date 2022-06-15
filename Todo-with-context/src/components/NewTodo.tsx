import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import css from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo </label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
