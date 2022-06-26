import { types } from 'mobx-state-tree';

const Selected = types
  .model('selected', {
    board: types.maybe(types.string),
    point: types.maybe(types.string),
  })
  .actions((self) => ({
    selectBoard(id: string) {
      self.board = id;
    },
    selectPoint(id: string) {
      self.point = id;
    },
    unselectPoint() {
      self.point = undefined;
    },
  }));

type Selected = typeof Selected;

export default Selected;
