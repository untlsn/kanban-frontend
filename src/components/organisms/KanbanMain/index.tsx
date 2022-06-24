import { observer } from 'mobx-react-lite';
import kanban from '~/store/kanban';
import Button from '~/components/atom/Button';

function Title(props: { children: any }) {
  return (
    <h1 className="p-(y-4 x-8) w-full bg-primary dark:bg-dark-primary border-(t-2 l-2 gray-800) uppercase text-2xl">
      {props.children}
    </h1>
  );
}

const KanbanMain = observer(() => {
  const { selectedBoard } = kanban;

  if (!selectedBoard) {
    return (
      <main className="flex-1">
        <Title>
          Stwórz tablicze
        </Title>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <Title>
        <div className="flex justify-between">
          <O>
            {() => (
              selectedBoard.name
            )}
          </O>
          <Button className="text-lg font-500 bg-violet-500 p-(x-4 y-1) rounded-full transition-opacity hover:opacity-70">
            +Dodaj zadanie
          </Button>
        </div>
      </Title>
    </main>
  );
});

export default KanbanMain;
