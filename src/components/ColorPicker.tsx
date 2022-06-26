import { CirclePicker } from 'react-color';
import { action } from 'mobx';
import { Button } from '~/components';
import useReaction from '~/hooks/useReaction';

interface ColorPickerProps {
  defaultColor?: string,
  onChange(hex: string): void
}

function ColorPicker(props: ColorPickerProps) {
  const store = useLocalObservable(() => ({
    color: props.defaultColor || '#F44336',
    open: false,
  }));

  useReaction(() => store.color, (color, before) => {
    if (color != before) props.onChange(color);
  });

  return (
    <div className="relative h-5">
      <O>{() => (
        <Button
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: store.color }}
          onClick={action(() => {
            store.open = !store.open;
          })}
        />
      )}
      </O>
      <O>{() => store.open && (
        <div className="absolute bg-gray-500/10 p-4 rounded">
          <CirclePicker
            onChange={action((color) => {
              store.color = color.hex;
              store.open = false;
            })}
          />
        </div>
      )}
      </O>

    </div>
  );
}

export default ColorPicker;
