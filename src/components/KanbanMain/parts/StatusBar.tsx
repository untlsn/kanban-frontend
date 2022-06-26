import { ColorPicker } from '~/components';
import { kanban } from '~/store';
import targetValue from '~/helpers/targetValue';

function StatusBar(props: { id: string }) {
  const status = kanban.statuses.get(props.id)!;

  return (
    <li>
      <h1 className="flex items-center gap-1">
        <ColorPicker onChange={status.changeColor} />
        <input
          defaultValue={status.name}
          className="bg-transparent outline-none hocus:bg-gray-500/10 px-2"
          onBlur={targetValue(status.changeName)}
        />
      </h1>
    </li>
  );
}

export default StatusBar;
