import newBoard from '~/components/organisms/Nav/state/newBoard';
import Button from '~/components/atom/Button';
import '~/assets/style/animations.css';
import kanban from '~/store/kanban';

function AddBoard() {
  const [closing, setClosing] = useState(false);
  const prepareClose = () => {
    setClosing(true);
    setTimeout(newBoard.close, 300);
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        kanban.addBoard(newBoard.text);
        prepareClose();
      }}
      onReset={prepareClose}
      className="py-4 relative z-0 w-110 h-14 flex gap-2"
    >
      <span
        className={`absolute top-0 -z-1 bg-violet-500 p-(y-4 l-8 r-12) rounded-r-full h-full w-full transition-transform ${
          closing ? 'unstretch' : 'stretch'
        }`}
      />
      <input
        autoFocus
        className="p-(x-2 y-px) border-(b-1 white) bg-transparent rounded outline-none"
        onChange={newBoard.bindIt}
      />
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
