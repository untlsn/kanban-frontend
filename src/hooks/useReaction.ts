import {
  IReactionOptions, IReactionPublic, IWhenOptions, reaction, when,
} from 'mobx';

const useReaction = (expression: (r: IReactionPublic) => string, effect: (arg: string, prev: string, r: IReactionPublic) => void, opts?: IReactionOptions<string, false> | undefined) => {
  useEffect(() => reaction(expression, effect, opts), []);
};

export const useReactionWhen = (predicate: () => boolean, effect: () => void, options?: IWhenOptions) => {
  useEffect(() => when(predicate, effect, options), []);
};

export default useReaction;
