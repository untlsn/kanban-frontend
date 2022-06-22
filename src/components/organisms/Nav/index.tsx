import { observer } from 'mobx-react-lite';
import general from '~/store/general';
import Button from '~/components/atom/Button';
import ThemeSwitch from '~/components/organisms/Nav/ThemeSwitch';

const Nav = observer(() => (
  <nav className={`w-100 bg-primary dark:bg-dark-primary transition-transform ${general.sidebarVisible ? '' : 'absolute -translate-x-full'}`}>
    <ThemeSwitch />
    <div className="text-center">
      <Button
        className="space-x-2 align-middle transition-opacity hocus:opacity-60"
        onClick={general.hideSidebar}
      >
        <i className="i-bi-eye-slash" />
        <span>Schowaj pasek boczny</span>
      </Button>
    </div>
  </nav>
));

export default Nav;
