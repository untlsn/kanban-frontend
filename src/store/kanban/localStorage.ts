import { onSnapshot, SnapshotIn } from 'mobx-state-tree';
import { Kanban } from '~/store/kanban';
import {
  Board, Selected, Status, Task,
} from '~/store/kanban/parts';

function dataFrom(key: string) {
  const str = localStorage.getItem(key);

  return str ? JSON.parse(str) : {};
}

const KEY = 'store/kanban';

export const getFromStorage = () => {
  const kanbanJSON = dataFrom(KEY) as {
    boards: Record<string, SnapshotIn<Board>>
    tasks: Record<string, SnapshotIn<Task>>
    statuses: Record<string, SnapshotIn<Status>>
    selected: SnapshotIn<Selected>
  };

  const kanban = Kanban.create(kanbanJSON);

  onSnapshot(kanban, (snapshot) => {
    localStorage.setItem(KEY, JSON.stringify(snapshot));
  });

  return kanban;
};
