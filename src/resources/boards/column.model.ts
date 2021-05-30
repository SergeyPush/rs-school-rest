const uuid = require('uuid').v4;

class Column {
  id: string;
  name: string;
  order: number;

  constructor({ id = uuid(), name = 'task', order = 0 }) {
    this.id = id;
    this.name = name;
    this.order = order;
  }
}

export default Column;
