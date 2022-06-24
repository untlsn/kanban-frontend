import { types } from 'mobx-state-tree';
import devtools from 'mobx-devtools-mst';
import { nanoid } from 'nanoid';
import Board from './parts/board';
import Task from './parts/task';
import Status from './parts/status';

const Kanban = types
  .model({
    boards: types.map(Board),
    tasks: types.map(Task),
    statuses: types.array(Status),
  })
  .actions((self) => ({
    addBoard(name: string) {
      const id = nanoid();
      self.boards.set(id, Board.create({ id, name }));
    },
  }));

// Store containing boards, tasks, statuses
const kanban = Kanban.create();
devtools(kanban);

export default kanban;
