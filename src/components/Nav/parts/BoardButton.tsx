import { Button } from '~/components';

interface BoardButtonProps {
  children: any
  onClick?(): void
  selected?: boolean
  height?: string,
}

function BoardButton(props: BoardButtonProps) {
  return (
    <Button
      onClick={props.onClick}
      className={`capitalize font-500 transition-colors -translate-x-8 p-(l-8 r-12) rounded-r-full hover:(bg-violet-500 text-white) w-full text-left ${
        props.height || 'h-11'
      } ${
        props.selected ? 'bg-violet-500 text-white' : ''
      }`}
    >
      <i className="i-bi-kanban mr-2 text-xl" />
      <span>{props.children}</span>
    </Button>
  );
}

export default BoardButton;
