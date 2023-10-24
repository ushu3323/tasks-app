import { Task, isTask } from '../types/task.type';

export function loadTasks(): Task[] {
  console.log('Loading tasks...');
  try {
    const json = localStorage.getItem('tasks');
    if (!json) {
      console.log(`tasks key doesn't exists in localstorage, generating`);
      return [];
    }

    return sanitizeLocalStorageJSON(JSON.parse(json));
  } catch (err) {
    console.error('Error parsing localstorage tasks, using default', err);
    return [];
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function sanitizeLocalStorageJSON(data: unknown): Task[] {
  console.log('Sainitizing json', data);
  if (!Array.isArray(data)) {
    throw new Error('localStorage data is not an array, using default');
  }

  const validTasks = data.filter<Task>((task): task is Task => isTask(task));
  console.log('tasks sainitized', validTasks);
  return validTasks;
}
