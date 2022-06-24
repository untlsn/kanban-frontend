import { types } from 'mobx-state-tree';
import devtools from 'mobx-devtools-mst';
import { nanoid } from 'nanoid';
import {
  Board, Task, Selected, Status,
} from './parts';

const Kanban = types
  .model({
    boards: types.map(Board),
    tasks: types.map(Task),
    statuses: types.array(Status),
    selected: Selected,
  })
  .actions((self) => ({
    addBoard(name: string) {
      if (!name) return;
      const id = nanoid();
      self.boards.set(id, Board.create({ id, name }));
      self.selected.selectBoard(id);
    },
  }))
  .views((self) => ({
    get selectedBoard() {
      const { board } = self.selected;
      return board
        ? self.boards.get(board)
        : undefined;
    },
  }));

// Store containing boards, tasks, statuses
const kanban = Kanban.create({
  selected: Selected.create(),
});
devtools(kanban);

export default kanban;
