import { Routes } from 'react-router-dom';
import 'uno.css';
import '~/assets/style/reset.css';
import { Link, Title } from 'react-head';
import type { Route } from '~/routes';
import favicon from '~/assets/images/favicon.svg';
import Header from '~/components/organisms/Header';

export default function App({ routes }: { routes: Route[] }) {
  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const { classList } = document.body;

    if (darkMode) {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-white text-text dark:(bg-[#21212D] text-dark-text) min-h-screen flex flex-col">
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
