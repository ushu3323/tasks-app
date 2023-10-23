import { Task } from '../types/task.type';

export default function TasksList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="vstack gap-2">
      {tasks.map(task => (
        <div key={task.id} className="card">
          <div className="card-body">{task.content}</div>
        </div>
      ))}
    </div>
  );
}
