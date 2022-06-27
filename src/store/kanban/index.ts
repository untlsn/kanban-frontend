import { types } from 'mobx-state-tree';
import devtools from 'mobx-devtools-mst';
import { nanoid } from 'nanoid';
import {
  Board, Task, Selected, Status,
} from './parts';
import { getFromStorage } from '~/store/kanban/localStorage';

export const Kanban = types
  .model('kanban', {
    boards: types.map(Board),
    tasks: types.map(Task),
    statuses: types.map(Status),
    selected: types.optional(Selected, {}),
  })
  .actions((self) => ({
    addBoard(name: string) {
      if (!name) return;
      const id = nanoid();
      self.boards.set(id, { id, name });
      self.selected.selectBoard(id);
    },
    addStatus() {
      const id = nanoid();
      self.statuses.set(id, { id });
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
const kanban = getFromStorage();
devtools(kanban);

export default kanban;
