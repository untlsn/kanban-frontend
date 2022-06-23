import logo from '~/assets/images/logo.svg';

export default function App() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center h-full">
      <div className="flex items-center">
        <h1 className="text-4xl max-w-90">
          Prosta, ale uzyteczna aplikacja typu kanban
        </h1>
        <img src={logo} alt="logo" className="h-60" />
      </div>
      <div className="text-center">
        <Link to="/login" className="mr-2 hocus:underline">
          Zaloguj się
        </Link>
        <Link to="/register" className="ml-2 hocus:underline">
          Zarejestruj się
        </Link>
        <p>
          <span>Nie chcesz konta w worku? </span>
          <Link to="/app" className="hocus:underline">
            Wypróbuj!
          </Link>
        </p>
      </div>
    </main>
  );
}
