import { Routes } from 'react-router-dom';
import 'uno.css';
import '~/assets/style/reset.css';
import { Link, Title } from 'react-head';
import { autorun } from 'mobx';
import type { Route } from '~/routes';
import favicon from '~/assets/images/favicon.svg';
import Header from '~/components/organisms/Header';
import general from '~/store/general';

export default function App({ routes }: { routes: Route[] }) {
  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const { classList } = document.body;
    general.switchDarkMode(darkMode);

    autorun(() => {
      if (general.darkMode) {
        classList.add('dark');
      } else {
        classList.remove('dark');
      }
    });
  }, []);

  return (
    <div className="bg-secondary text-text dark:(bg-dark-secondary text-dark-text) min-h-screen flex flex-col">
      <Link rel="icon" type="image/svg+xml" href={favicon} />
      <Title>App</Title>
      <Header />
      <Routes>
        {routes.map(({ path, Comp }) => (
          <Route key={path} path={path} element={<Comp />} />
        ))}
      </Routes>
    </div>
  );
}
