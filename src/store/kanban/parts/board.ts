import { types } from 'mobx-state-tree';

const Board = types.model({
  id: types.string,
  name: types.string,
});

type Board = ReturnType<typeof Board.create>;

export default Board;
