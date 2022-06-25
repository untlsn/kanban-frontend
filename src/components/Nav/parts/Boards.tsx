import { newBoard } from '~/components/Nav/state';
import { AddBoard, BoardsList, BoardButton } from '~/components/Nav/parts';
import { kanban } from '~/store';

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
