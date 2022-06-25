import { types } from 'mobx-state-tree';
import devtools from 'mobx-devtools-mst';

const NewBoard = types
  .model({
    isOpen: false,
    error: '',
  })
  .actions((self) => ({
    open() {
      self.isOpen = true;
    },
    close() {
      self.isOpen = false;
      self.error = '';
    },
    setError(error: string) {
      self.error = error;
    },
  }));

export const newBoard = NewBoard.create();

devtools(newBoard);
