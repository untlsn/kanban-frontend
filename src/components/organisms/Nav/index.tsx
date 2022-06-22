import { observer } from 'mobx-react-lite';
import general from '~/store/general';
import Button from '~/components/atom/Button';

const Nav = observer(() => (
  <nav className={`w-100 bg-primary-main dark:bg-dark-primary-main transition-transform ${general.sidebarVisible ? '' : 'absolute -translate-x-full'}`}>

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
