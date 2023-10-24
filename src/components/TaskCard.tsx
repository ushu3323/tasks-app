import { useEffect, useRef, useState } from 'react';
import { Task } from '../types/task.type';

interface Props {
  task: Task;
  onDelete?: (id: Task['id']) => void;
  onEdit?: (id: Task['id'], newContent: string) => void;
}

export default function TaskCard({ task, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const contentInput = useRef<HTMLParagraphElement>(null);

  function handleClick() {
    setIsEditing(true);
  }

  function handleBlur() {
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isEditing) return;
    if (e.code === 'Enter') {
      setIsEditing(false);
    }
  }

  useEffect(() => {
    if (isEditing) {
      focusContentInput(contentInput.current);
    } else {
      if (contentInput.current) {
        contentInput.current.blur();
        onEdit?.(task.id, contentInput.current.innerText.trim());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  return (
    <article
      key={task.id}
      className="card"
      onFocus={handleClick}
      onClick={handleClick}
      tabIndex={0}
      role="group">
      <div className="card-body d-flex">
        <div className="me-4 flex-fill align-self-center">
          <div
            tabIndex={1}
            ref={contentInput}
            className="p-0 m-0 border-0 bg-dark form-control text-break"
            onBlurCapture={handleBlur}
            onKeyDown={handleKeyDown}
            contentEditable={isEditing}>
            {task.content}
          </div>
        </div>
        <button
          className="btn btn-danger align-self-start"
          onClick={() => onDelete?.(task.id)}>
          <i className="bi bi-trash-fill" aria-hidden="true"></i>
        </button>
      </div>
    </article>
  );
}

function focusContentInput(input?: HTMLElement | null) {
  if (!input) return;

  input?.focus();

  // Focus contentEditable paragraph
  const range = document.createRange();
  const sel = window.getSelection();

  const child = input.childNodes[0];
  if (!child) return;
  range.setStart(child, child.textContent?.length || 0);
  range.collapse(true);

  sel?.removeAllRanges();
  sel?.addRange(range);
}
