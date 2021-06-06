const uuid = require('uuid').v4;

class Task {
  id: string;
  title: string;
  order: string;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;

  constructor({
    id = uuid(),
    title = 'New task',
    order = '',
    description = '',
    userId = '',
    boardId = '',
    columnId = '',
  }) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: Task) {
    return { ...task };
  }
}

export type TaskType = {
  id?: string;
  title?: string;
  order?: string;
  description?: string;
  userId?: string;
  boardId?: string;
  columnId?: string;
};

export default Task;
