import { Button } from '~/components';
import { kanban } from '~/store';
import { Title } from '~/components/KanbanMain/parts';
import Options from '~/components/Options';

const Header = () => {
  const selectedBoard = kanban.selectedBoard!;

  return (
    <Title>
      <div className="flex gap-4">
        <p className="flex-1">
          <O>
            {() => (
              selectedBoard.name
            )}
          </O>
        </p>
        <Button className="text-lg font-500 bg-violet-500 p-(x-4 y-1) rounded-full transition-opacity hover:opacity-70">
          +Dodaj zadanie
        </Button>
        <Options
          options={[
            {
              name: 'Usuń',
              onClick: kanban.removeSelectedBoard,
            },
          ]}
        />
      </div>
    </Title>
  );
};

export default Header;
