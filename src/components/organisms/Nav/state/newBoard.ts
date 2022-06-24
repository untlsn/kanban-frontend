import { types } from 'mobx-state-tree';
import devtools from 'mobx-devtools-mst';
import InputEv from '~/types/InputEv';

const NewBoard = types
  .model({
    text: '',
    isOpen: false,
    closing: false,
  })
  .actions((self) => ({
    bindIt(ev: InputEv) {
      self.text = ev.currentTarget.value;
    },
    open() {
      self.isOpen = true;
    },
    close() {
      self.isOpen = false;
      self.text = '';
    },
  }));

const newBoard = NewBoard.create();

devtools(newBoard);

export default newBoard;
