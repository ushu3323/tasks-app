import { Task } from '../types/task.type';

interface Props {
  task: Task;
  onDelete?: (id: Task['id']) => void;
}

export default function TaskCard({ task, onDelete }: Props) {
  return (
    <article key={task.id} className="card">
      <div className="card-body d-flex">
        <p className="m-0 me-2 flex-fill d-inline align-self-center">
          {task.content}
        </p>
        <button
          className="btn btn-danger align-self-start"
          onClick={() => onDelete && onDelete(task.id)}>
          <i className="bi bi-trash-fill" aria-hidden="true"></i>
        </button>
      </div>
    </article>
  );
}
