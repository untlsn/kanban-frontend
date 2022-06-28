import { Button } from '~/components';
import useOutsideClick from '~/hooks/useOutsideClick';

interface OptionsProps {
  options: { name: string, onClick(): void }[]
}

const Options = (props: OptionsProps) => {
  const [open, setOpen] = useState(false);
  const click = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <div
      aria-hidden
      className="relative"
      onClick={click}
    >
      <Button className="i-bi-gear" onClick={() => setOpen((v) => !v)}>
        Opcje
      </Button>
      {
        open && (
          <ul className="absolute top-full right-1/2 rounded-xl bg-black/10 text-lg p-4">
            {Object.entries(props.options).map(([key, { name, onClick }]) => (
              <li key={key}>
                <Button onClick={onClick} className="hover:underline">
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default Options;
