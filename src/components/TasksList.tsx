import { Task } from '../types/task.type';

interface Props {
  tasks: Task[];
  onDelete?: (id: Task['id']) => void;
}

export default function TasksList({ tasks, onDelete }: Props) {
  return (
    <section id="tasks-list" className="vstack gap-2 flex-fill">
      {tasks.length ? (
        tasks.map(task => (
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
        ))
      ) : (
        <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
          <div className="pe-2 fs-1 opacity-50">
            <i className="bi bi-clipboard2-x"></i>
          </div>
          <h3 className="text-center my-3">Empty...</h3>
          <p className="opacity-50">
            Why don&apos;t we start adding some tasks?
          </p>
        </div>
      )}
    </section>
  );
}
