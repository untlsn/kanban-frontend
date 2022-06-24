import { observer } from 'mobx-react-lite';
import kanban from '~/store/kanban';

const KanbanMain = observer(() => {
  const { selectedBoard } = kanban;

  if (!selectedBoard) {
    return (
      <main className="flex-1">
        <h1>
          Zaznacz tablicze
        </h1>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <h1>
        <O>{() => (
          selectedBoard.name
        )}
        </O>
      </h1>
    </main>
  );
});

export default KanbanMain;
