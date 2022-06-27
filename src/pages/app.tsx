import { Button, Nav, KanbanMain } from '~/components';
import { general } from '~/store';

// bg-primary dark:bg-dark-primary

function App() {
  return (
    <div className="flex-1 flex overflow-hidden">
      <Nav />
      <O>
        {() => (
          <div className={`bg-primary dark:bg-dark-primary flex flex-col justify-end h-[calc(100vh-3rem)] ${
            general.sidebarVisible ? 'w-100 absolute -z-1' : ''
          }`}
          >
            <Button
              onClick={general.showSidebar}
              className={`m-2 h-10 group align-middle ${general.sidebarVisible ? 'hidden' : ''}`}
            >
              <i className="i-bi-caret-right text-2xl" />
              <span className="absolute group-hover:inline hidden">Pokaż pasek boczny</span>
            </Button>
          </div>
        )}
      </O>
      <KanbanMain />
    </div>
  );
}

export default App;
