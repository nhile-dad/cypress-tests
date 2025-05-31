export const sidebarElements = {
  menuItem: (label) => ({
    type: 'xpath',
    value: `//span[text()='${label}' and contains(@class, 'oxd-main-menu-item--name')]/ancestor::a`
  }),
  sidebarToggle: { type: 'css', value: '.oxd-sidepanel-header button' }
};
