import { observer } from 'mobx-react-lite';
import Button from '~/components/atom/Button';
import general from '~/store/general';

const ThemeSwitch = observer(() => (
  <div className="bg-black dark:bg-opacity-30 bg-opacity-10 text-xl flex items-center justify-center gap-2 m-4 p-4 rounded">
    <i className="i-bi-brightness-high-fill" />
    <Button
      className="dark:bg-dark-primary bg-[#7E7EEE] w-12 h-5 rounded-full"
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
));

export default ThemeSwitch;
