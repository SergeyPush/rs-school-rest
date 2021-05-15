const uuid = require('uuid').v4;

class Column {
  constructor({ id = uuid(), name = 'task', order = 0 }) {
    this.id = id;
    this.name = name;
    this.order = order;
  }
}

module.exports = Column;
