import { types } from 'mobx-state-tree';

const Subtask = types.model('subtasks', {
  title: types.string,
  done: false,
});

type Subtask = typeof Subtask;

export default Subtask;
