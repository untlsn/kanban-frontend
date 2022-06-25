import { observer } from 'mobx-react-lite';
import { kanban } from '~/store';
import { EmptyPlaceholder, Header, AddStatusBar } from '~/components/KanbanMain/parts';

const KanbanMain = observer(() => {
  const { selectedBoard } = kanban;

  if (!selectedBoard) {
    return <EmptyPlaceholder />;
  }

  return (
    <main className="flex-1">
      <Header />
      <ul className="h-[calc(100%-68px)] flex items-stretch p-4">
        <AddStatusBar />
      </ul>
    </main>
  );
});

export default KanbanMain;
