import { sidebarElements } from '../interface/sidebarElements';

export const SidebarActions = {
    clickMenu: (label) => {
        const element = sidebarElements.menuItem(label);
        cy.clickElement(element);
    },

    toggleSidebar: () => {
        cy.clickElement(sidebarElements.sidebarToggle);
    },

    shouldSeeMenu: (label) => {
        cy.contains(label).should('be.visible');
    },
    shouldHaveUrlPart: (urlPart) => {
        cy.shouldHaveUrlPart(urlPart);
    }

};
