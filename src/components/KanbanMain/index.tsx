import { observer } from 'mobx-react-lite';
import { kanban } from '~/store';
import { EmptyPlaceholder, Header, AddStatusBar } from '~/components/KanbanMain/parts';
import StatusBar from '~/components/KanbanMain/parts/StatusBar';

const KanbanMain = observer(() => {
  const { selectedBoard } = kanban;

  if (!selectedBoard) {
    return <EmptyPlaceholder />;
  }

  return (
    <main className="flex-1">
      <Header />
      <ul className="h-[calc(100%-68px)] flex items-stretch p-4 children:w-80 gap-4">
        <O>{() => [...kanban.statuses.keys()].map((id) => (
          <StatusBar id={id} key={id} />
        ))}
        </O>
        <AddStatusBar />
      </ul>
    </main>
  );
});

export default KanbanMain;
