import Nav from '~/components/organisms/Nav';
import Button from '~/components/atom/Button';
import general from '~/store/general';

function App() {
  return (
    <div className="flex-1 flex">
      <Nav />
      <O>
        {() => (
          <Button
            onClick={general.showSidebar}
            className={`m-2 h-10 group align-middle ${general.sidebarVisible ? 'hidden' : ''}`}
          >
            <i className="i-bi-caret-right text-2xl" />
            <span className="absolute group-hover:inline hidden">Pokaż pasek boczny</span>
          </Button>
        )}
      </O>
      <main className="flex-1">
        asdasd
      </main>
    </div>
  );
}

export default App;
