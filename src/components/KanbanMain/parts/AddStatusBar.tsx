import { Button } from '~/components';

function AddStatusBar() {
  return (
    <Button className="bg-gray-500/10 w-80 text-3xl font-500">
      <span className="opacity-50">
        +Nowa kolumna
      </span>
    </Button>
  );
}

export default AddStatusBar;
