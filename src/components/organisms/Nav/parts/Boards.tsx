import kanban from '~/store/kanban';
import BoardButton from '~/components/organisms/Nav/parts/BoardButton';
import newBoard from '~/components/organisms/Nav/state/newBoard';
import AddBoard from '~/components/organisms/Nav/parts/AddBoard';

function Boards() {
  return (
    <div className="flex-1">
      <O>
        {() => (
          <p className="uppercase font-500">
            boards ({kanban.boards.size})
          </p>
        )}
      </O>
      <O>{() => (
        newBoard.isOpen
          ? <AddBoard />
          : (
            <BoardButton onClick={newBoard.open}>
              +create new board
            </BoardButton>
          )
      )}
      </O>

    </div>
  );
}

export default Boards;