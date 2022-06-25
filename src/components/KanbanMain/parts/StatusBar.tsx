import { ColorPicker } from '~/components';

function StatusBar() {
  return (
    <li>
      <h1 className="flex items-center gap-1">
        <ColorPicker onChange={() => {}} />
        <input value="Nazwa" className="bg-transparent outline-none hocus:bg-gray-500/10 px-2" />
      </h1>
    </li>
  );
}

export default StatusBar;
