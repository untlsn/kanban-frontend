import { types } from 'mobx-state-tree';
import devtools from 'mobx-devtools-mst';

const General = types.model('general', {
  darkMode: false,
  sidebarVisible: true,
})
  .actions((self) => ({
    hideSidebar() {
      self.sidebarVisible = false;
    },
    showSidebar() {
      self.sidebarVisible = true;
    },
    switchDarkMode(darkMode?: boolean | any) {
      self.darkMode = typeof darkMode == 'boolean' ? darkMode : !self.darkMode;
    },
  }));

// Store containing general options like darkMode or sidebar visibility
const general = General.create();
devtools(general);

export default general;
