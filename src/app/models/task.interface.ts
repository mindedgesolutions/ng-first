export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface AddTaskInterface {
  title: string;
  summary: string;
  dueDate: string;
}
