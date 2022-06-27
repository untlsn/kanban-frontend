import { onSnapshot } from 'mobx-state-tree';
import { Kanban } from '~/store/kanban';

function dataFrom(key: string) {
  const str = localStorage.getItem(key);

  return str ? JSON.parse(str) : {};
}

const KEY = 'store/kanban';

export const getFromStorage = () => {
  const data = dataFrom(KEY) as any;

  const kanban = Kanban.create({
    ...dataFrom(KEY),
    selected: {
      board: data?.selected?.board,
    },
  });

  onSnapshot(kanban, (snapshot) => {
    localStorage.setItem(KEY, JSON.stringify(snapshot));
  });

  return kanban;
};
