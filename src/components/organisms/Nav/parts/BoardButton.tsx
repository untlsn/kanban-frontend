import Button from '~/components/atom/Button';

interface BoardButtonProps {
  children: any
  onClick?(): void
  selected?: boolean
}

function BoardButton(props: BoardButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      className={`capitalize font-500 transition-colors -translate-x-8 p-(l-8 r-12) rounded-r-full hover:(bg-violet-500 text-white) h-14 ${
        props.selected ? 'bg-violet-500 text-white' : ''
      }`}
    >
      <i className="i-bi-kanban mr-2 text-xl" />
      <span>{props.children}</span>
    </Button>
  );
}

export default BoardButton;
