import { types } from 'mobx-state-tree';

const Board = types.model({
  _id: types.string,
  name: types.string,
});

type Board = typeof Board;

export default Board;
