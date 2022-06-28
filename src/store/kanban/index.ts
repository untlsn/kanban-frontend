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
  .views((self) => ({
    get selectedBoard() {
      const { board } = self.selected;
      return board
        ? self.boards.get(board)
        : undefined;
    },
    get selectedBoardStatuses(): string[] {
      const { board } = self.selected;
      return [...kanban.statuses.values()]
        .filter((stat) => stat.board == board)
        .map((stat) => stat.id);
    },
  }))
  .actions((self) => ({
    addBoard(name: string) {
      if (!name) return;
      const id = nanoid();
      self.boards.set(id, { id, name });
      self.selected.selectBoard(id);
    },
    addStatus() {
      const board = self.selected.board!;
      const id = nanoid();
      self.statuses.set(id, {
        id,
        name: `zadania ${self.statuses.size}`,
        board,
      });
      self.selected.selectStatus(id);
    },
    removeSelectedBoard() {
      const { board } = self.selected;
      if (!board) return;
      self.boards.delete(board);
      self.selected.board = undefined;
      self.statuses = Object.fromEntries([...self.statuses.entries()].filter(([__, val]) => val.board != board)) as any;
      self.tasks = Object.fromEntries([...self.tasks.entries()].filter(([__, val]) => val.board != board)) as any;
    },
  }));

// Store containing boards, tasks, statuses
const kanban = getFromStorage();
devtools(kanban);

export default kanban;
