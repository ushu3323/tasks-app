import { Task } from '../types/task.type';

interface Props {
  tasks: Task[];
  onDelete?: (id: Task['id']) => void;
}

export default function TasksList({ tasks, onDelete }: Props) {
  return (
    <section id="tasks-list" className="vstack gap-2">
      {tasks.map(task => (
        <article key={task.id} className="card">
          <div className="card-body d-flex">
            <p className="m-0 me-2 flex-fill d-inline">
              <span className="align-middle">{task.content}</span>
            </p>
            <button
              className="btn btn-danger align-self-start"
              onClick={() => onDelete && onDelete(task.id)}>
              <i className="bi bi-trash-fill" aria-hidden="true"></i>
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
