import { observer } from 'mobx-react-lite';
import { kanban } from '~/store';
import { EmptyPlaceholder, Header } from '~/components/KanbanMain/parts';

const KanbanMain = observer(() => {
  const { selectedBoard } = kanban;

  if (!selectedBoard) {
    return <EmptyPlaceholder />;
  }

  return (
    <main className="flex-1">
      <Header />
    </main>
  );
});

export default KanbanMain;
