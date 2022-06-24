import { observer } from 'mobx-react-lite';
import general from '~/store/general';
import Button from '~/components/atom/Button';
import ThemeSwitch from './parts/ThemeSwitch';
import Boards from './parts/Boards';

const Nav = observer(() => (
  <nav
    className={`w-100 flex flex-col bg-primary p-(y-4 x-8) dark:bg-dark-primary transition-transform duration-500 border-(r-2 black/20) ${
      general.sidebarVisible ? '' : '-translate-x-full absolute bottom-0 z-100 h-[calc(100vh-3rem)]'
    }`}
  >
    <Boards />
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
