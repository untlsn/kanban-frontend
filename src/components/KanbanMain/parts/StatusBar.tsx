import { ColorPicker } from '~/components';
import { kanban } from '~/store';
import targetValue from '~/helpers/targetValue';
import { useReactionWhen } from '~/hooks/useReaction';

function StatusBar(props: { id: string }) {
  const status = kanban.statuses.get(props.id)!;

  const inputRef = useRef<HTMLInputElement>(null);
  useReactionWhen((() => kanban.selected.status == props.id), () => {
    inputRef.current!.focus();
  });

  return (
    <li>
      <h1 className="flex items-center gap-1">
        <ColorPicker onChange={status.changeColor} />
        <input
          defaultValue={status.name}
          ref={inputRef}
          className="bg-transparent outline-none hocus:bg-gray-500/10 px-2"
          onBlur={targetValue(status.changeName)}
        />
      </h1>
    </li>
  );
}

export default StatusBar;
