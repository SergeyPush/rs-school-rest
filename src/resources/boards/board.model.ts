import Column from './column.model';
const uuid = require('uuid').v4;

const column1 = new Column({ name: 'ToDO', order: 1 });
const column2 = new Column({ name: 'In progress', order: 1 });
const column3 = new Column({ name: 'Done', order: 1 });
const column4 = new Column({ name: 'Archive', order: 1, id: '1' });

const coloumns = [column1, column2, column3, column4];

class Board {
  id?: string;
  title: string;
  columns: Array<Column>;

  constructor({ id = uuid(), title = 'Board', columns = coloumns }) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export type BoardType = {
  id?: string;
  title?: string;
  columns?: Array<Column>;
};

export default Board;
