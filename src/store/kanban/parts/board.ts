import { types } from 'mobx-state-tree';

const Board = types.model('board', {
  id: types.string,
  name: types.string,
});

type Board = ReturnType<typeof Board.create>;

export default Board;
