import logo from '~/assets/images/logo.svg';
import { general } from '~/store';

export interface HeaderProps {
  username?: string,
}

function Header(props: HeaderProps) {
  return (
    <header className="bg-primary dark:bg-dark-primary flex gap-2 items-center px-4 shadow h-12">
      <O>
        {() => (
          <div className={`flex flex-1 items-center transition-translate duration-700 ${general.sidebarVisible ? 'lg:translate-x-24' : ''}`}>
            <img
              src={logo}
              alt="logo"
              className="dark:(brightness-0 invert-100)"
            />
            <p className="text-xl">
              Kanban
            </p>
          </div>
        )}
      </O>
      {
        props.username
          ? <Link to="/profile" className="hover:underline">{props.username}</Link>
          : (
            <>
              <Link to="/login" className="hover:underline">
                Zaloguj się
              </Link>
              <Link to="/register" className="hover:underline">
                Zarejestruj się
              </Link>
            </>
          )
      }
    </header>
  );
}

export default Header;
