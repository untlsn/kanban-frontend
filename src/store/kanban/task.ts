import { types } from 'mobx-state-tree';
import Subtask from './subtask';

const Task = types.model({
  title: types.string,
  desk: types.string,
  status: types.number,
  _board: types.string,
  subtasks: types.array(Subtask),
});

type Task = typeof Task;

export default Task;
