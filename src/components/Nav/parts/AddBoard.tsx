import { newBoard } from '~/components/Nav/state';
import { Button } from '~/components';
import '~/assets/style/animations.css';
import { kanban } from '~/store';

function AddBoard() {
  const [closing, setClosing] = useState(false);
  const prepareClose = () => {
    setClosing(true);
    setTimeout(newBoard.close, 300);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        const input = inputRef.current!;
        if (!input?.value) {
          newBoard.setError('Tablica musi mieć nazwe');
          return;
        }
        kanban.addBoard(input.value);
        prepareClose();
      }}
      onReset={prepareClose}
      className="py-4 relative z-0 w-110 h-15 flex gap-2"
    >
      <span
        className={`absolute top-0 -z-1 bg-violet-500 p-(y-4 l-8 r-12) rounded-r-full h-full w-full transition-transform ${
          closing ? 'unstretch' : 'stretch'
        }`}
      />
      <div>
        <input
          autoFocus
          className="p-(x-2 y-px) border-(b-1 white) bg-transparent rounded outline-none"
          ref={inputRef}
        />
        <small className="block text-red-300">
          <O>
            {() => newBoard.error}
          </O>
        </small>
      </div>
      <Button className="border-(1 white) p-(x-2 y-px) rounded">
        Dodaj
      </Button>
      <Button className="border-(1 white) p-(x-2 y-px) rounded" type="reset">
        Anuluj
      </Button>
    </form>
  );
}

export default AddBoard;
