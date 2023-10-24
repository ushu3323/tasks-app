import { useContext } from 'react';
import { TasksContext } from '../providers/TasksProvider';

export default function useTasks() {
  const context = useContext(TasksContext);
  return context;
}
