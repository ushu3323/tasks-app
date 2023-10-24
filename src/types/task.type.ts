export type Task = {
  id: number;
  content: string;
};

export function isTask(data: unknown): data is Task {
  if (
    data &&
    typeof data === 'object' &&
    'id' in data &&
    'content' in data &&
    typeof data.id === 'number' &&
    typeof data.content === 'string'
  ) {
    return true;
  }
  return false;
}
