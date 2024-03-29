import { kanban } from '~/store';
import { BoardButton } from '~/components/Nav/parts';

function BoardsList() {
  return (
    <ul className="py-4 space-y-2">
      <O>
        {() => [...kanban.boards.keys()].map((id) => (
          <BoardPoint key={id} id={id} />
        ))}
      </O>
    </ul>
  );
}

function BoardPoint(props: { id: string }) {
  const board = kanban.boards.get(props.id)!;

  return (
    <O>
      {() => (
        <BoardButton
          onClick={() => {
            kanban.selected.selectBoard(board.id);
          }}
          selected={kanban.selected.board == board.id}
        >
          {board.name}
        </BoardButton>
      )}
    </O>
  );
}

export default BoardsList;
