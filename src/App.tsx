import { FormEvent, useState } from 'react';
import { Task } from './types/task.type';
import TasksList from './components/TasksList';

const initialTasks: Task[] = [
  { id: 1, content: 'Buy groceries for the week' },
  { id: 2, content: 'Finish homework' },
  { id: 3, content: 'Read a chapter of your favorite book' },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [taskContent, setTaskContent] = useState('');

  function createTask(content: string) {
    let lastId = 0;

    for (const task of tasks) {
      if (task.id > lastId) {
        lastId = task.id;
      }
    }

    const newTask: Task = {
      id: lastId + 1,
      content: content,
    };

    setTasks(old => [newTask, ...old]);
  }

  function deleteTask(id: Task['id']) {
    setTasks(old => old.filter(task => task.id !== id));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTask(taskContent);
    e.currentTarget.reset();
  }

  return (
    <div className="container py-4 px-3 mx-auto d-flex flex-column min-vh-100">
      <h1>Tasks app</h1>
      <form onSubmit={handleSubmit} className="d-flex my-4" autoComplete="off">
        <input
          name="content"
          type="text"
          className="form-control me-2"
          placeholder="Write your task here..."
          required
          onChange={e => setTaskContent(e.currentTarget.value)}
        />
        <button type="submit" className="btn btn-primary">
          Añadir
        </button>
      </form>
      <TasksList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
