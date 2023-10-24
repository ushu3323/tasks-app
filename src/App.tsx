import { FormEvent, useState } from 'react';
import TasksList from './components/TasksList';
import useTasks from './hooks/useTasks';

function App() {
  const tasksService = useTasks();

  const [taskContent, setTaskContent] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    tasksService.create(taskContent);
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
          Add
        </button>
      </form>
      <TasksList
        tasks={tasksService.tasks}
        onTaskDelete={tasksService.remove}
        onTaskEdit={tasksService.update}
      />
    </div>
  );
}

export default App;
