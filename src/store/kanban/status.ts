import { types } from 'mobx-state-tree';

const Status = types.model({
  _id: types.string,
  name: types.string,
});

type Status = typeof Status;

export default Status;
