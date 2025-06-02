import { sidebarElements } from '../interface/sidebarElements';
export const SidebarActions = {
    clickMenu: (label) => {
        const element = sidebarElements.menuItem(label);
        cy.clickElement(element);
    },

    toggleSidebar: () => {
        cy.clickElement(sidebarElements.toggleButton);
    },

    searchSidebarItem: (text) => {
        cy.typeText(sidebarElements.searchInput, text);
    },

    shouldSeeMenu: (label) => {
        const element = sidebarElements.menuItem(label);
        resolveElement(element).should('be.visible');
    },

    shouldHaveUrlPart: (urlPart) => {
        cy.shouldHaveUrlPart(urlPart);
    },

    assertSidebarIsExpanded: () => {
        cy.shouldHaveClass(sidebarElements.sidebarIcon, 'bi-chevron-left');
        cy.shouldNotHaveClass(sidebarElements.searchInput, 'toggled');
    },

    assertSidebarIsCollapsed: () => {
        cy.shouldHaveClass(sidebarElements.sidebarIcon, 'bi-chevron-right');
        cy.shouldHaveClass(sidebarElements.searchInput, 'toggled');
    }
};
