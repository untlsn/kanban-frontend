import kanban from '~/store/kanban';
import BoardButton from '~/components/organisms/Nav/parts/BoardButton';

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
          <span>{board.name}</span>
        </BoardButton>
      )}
    </O>
  );
}

export default BoardsList;
