import { types } from 'mobx-state-tree';

const Status = types
  .model('status', {
    id: types.string,
    name: 'zadania 1',
    color: '#F44336',
  })
  .actions((self) => ({
    changeColor(color: string) {
      self.color = color;
    },
    changeName(name: string) {
      self.name = name;
    },
  }));

type Status = typeof Status;

export default Status;
