import { IReactionOptions, IReactionPublic, reaction } from 'mobx';

export default function useReaction(expression: (r: IReactionPublic) => string, effect: (arg: string, prev: string, r: IReactionPublic) => void, opts?: IReactionOptions<string, false> | undefined) {
  useEffect(() => reaction(expression, effect, opts), []);
}
