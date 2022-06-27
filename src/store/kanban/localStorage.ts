import { onSnapshot } from 'mobx-state-tree';
import { Kanban } from '~/store/kanban';

function dataFrom(key: string) {
  const str = localStorage.getItem(key);

  return str ? JSON.parse(str) : {};
}

const KEY = 'store/kanban';

export const getFromStorage = () => {
  const kanban = Kanban.create(dataFrom(KEY) as any);

  onSnapshot(kanban, (snapshot) => {
    localStorage.setItem(KEY, JSON.stringify(snapshot));
  });

  return kanban;
};
