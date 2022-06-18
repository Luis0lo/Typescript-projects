import React, { FC, useState, ChangeEvent } from 'react';
import { ITask } from './interfaces';
import './App.css';
import TodoTask from './components/todoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(+event.target.value);
    }
  };

  const addTask = (): void => {
    if (!task) return;
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  };

  return (
    <div className="App">
      <h2>Task & Dealine (in days)</h2>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (Days)"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>ADD</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, i: number) => {
          return <TodoTask key={i} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
