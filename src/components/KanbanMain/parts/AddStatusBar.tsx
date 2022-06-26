import { Button } from '~/components';
import { kanban } from '~/store';

function AddStatusBar() {
  return (
    <Button className="bg-gray-500/10 text-3xl font-500" onClick={kanban.addStatus}>
      <span className="opacity-50">
        +Nowa kolumna
      </span>
    </Button>
  );
}

export default AddStatusBar;
