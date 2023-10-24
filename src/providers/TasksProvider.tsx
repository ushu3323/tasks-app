import { ReactNode, createContext, useEffect, useState } from 'react';
import { Task } from '../types/task.type';
import { loadTasks, saveTasks } from '../utils/tasksStorage';

interface TasksContextValue {
  tasks: Task[];
  create: (content: string) => void;
  update: (id: Task['id'], newContent: string) => void;
  remove: (id: Task['id']) => void;
}
export const TasksContext = createContext<TasksContextValue>(null!);

export default function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(loadTasks());

  function create(content: string) {
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

  function update(id: Task['id'], newContent: string) {
    setTasks(old =>
      old.slice(0).map(task => {
        if (task.id === id) {
          return {
            ...task,
            content: newContent,
          };
        }
        return task;
      }),
    );
  }

  function remove(id: Task['id']) {
    console.log('deleting task.id:', id);
    setTasks(old => old.filter(task => task.id !== id));
  }

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const contextValue: TasksContextValue = {
    tasks,
    create,
    update,
    remove,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
}
