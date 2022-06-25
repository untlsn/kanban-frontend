import Button from '~/components/Button';
import { kanban } from '~/store';
import { Title } from '~/components/KanbanMain/parts';

function Header() {
  const selectedBoard = kanban.selectedBoard!;

  return (
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
  );
}

export default Header;
