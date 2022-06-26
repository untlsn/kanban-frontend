import InputEv from '~/types/InputEv';

export default function targetValue(callback: (value: string) => void) {
  return (ev: InputEv) => callback(ev.currentTarget.value);
}
