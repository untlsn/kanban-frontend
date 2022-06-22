import { types } from 'mobx-state-tree';
import Board from './board';
import Task from './task';
import Status from './status';

const Kanban = types.model({
  boards: types.map(Board),
  tasks: types.map(Task),
  statuses: types.array(Status),
});

// Store containing boards, tasks, statuses
const kanban = Kanban.create();

export default kanban;
