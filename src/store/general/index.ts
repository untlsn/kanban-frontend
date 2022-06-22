import { types } from 'mobx-state-tree';

const General = types.model({
  darkMode: false,
  showSidebar: true,
});

// Store containing general options like darkMode or sidebar visibility
const general = General.create();

export default general;
