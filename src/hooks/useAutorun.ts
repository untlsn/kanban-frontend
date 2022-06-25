import { autorun } from 'mobx';

type Params = Parameters<typeof autorun>;

export default function useAutorun(view: Params[0], options?: Params[1]) {
  useEffect(() => autorun(view, options), []);
}
