import kanban from '~/store/kanban';
import BoardButton from '~/components/organisms/Nav/parts/BoardButton';
import newBoard from '~/components/organisms/Nav/state/newBoard';
import AddBoard from '~/components/organisms/Nav/parts/AddBoard';
import BoardsList from '~/components/organisms/Nav/parts/BoardsList';

function Boards() {
  return (
    <div className="flex-1">
      <O>
        {() => (
          <p className="uppercase font-500">
            Tablice ({kanban.boards.size})
          </p>
        )}
      </O>
      <BoardsList />
      <O>{() => (
        newBoard.isOpen
          ? <AddBoard />
          : (
            <BoardButton height="h-15" onClick={newBoard.open}>
              +create new board
            </BoardButton>
          )
      )}
      </O>

    </div>
  );
}

export default Boards;
