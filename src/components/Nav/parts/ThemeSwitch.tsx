import { observer } from 'mobx-react-lite';
import { Button } from '~/components';
import { general } from '~/store';

const ThemeSwitch = observer(() => {
  const opacity = general.darkMode ? 0.3 : 0.1;
  const color = `rgba(0,0,0,${opacity})`;

  return (
    <div
      className="text-xl flex items-center justify-center gap-2 m-4 p-4 rounded"
      style={{
        background: `linear-gradient(90deg, transparent 0%, ${color} 15%, ${color} 85%, transparent 100%)`,
      }}
    >
      <i className="i-bi-brightness-high-fill" />
      <Button
        className="dark:bg-dark-primary bg-violet-500 w-12 h-5 rounded-full"
        onClick={general.switchDarkMode}

      >
        <span className="hidden">Change theme</span>
        <O>
          {() => (
            <span className={`block h-4 w-4 bg-white rounded-full transition-transform ${general.darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
          )}
        </O>
      </Button>
      <i className="i-bi-moon-fill" />
    </div>
  );
});

export default ThemeSwitch;
