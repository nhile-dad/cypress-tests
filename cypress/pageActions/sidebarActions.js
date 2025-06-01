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
    },
    toggleSidebar: () => {
        cy.clickElement(sidebarElements.toggleButton);
    },
    searchSidebarItem: (text) => {
        cy.typeText(sidebarElements.searchInput, text);
    },
    assertSidebarIsExpanded: () => {
        // Kiểm tra icon mũi tên trái
        cy.get(sidebarElements.sidebarIcon.value)
            .should('have.class', 'bi-chevron-left');

        // Kiểm tra input không có class 'toggled'
        cy.get(sidebarElements.searchInput.value)
            .should('not.have.class', 'toggled');
    },
    assertSidebarIsCollapsed: () => {
        // Kiểm tra icon mũi tên phải
        cy.get(sidebarElements.sidebarIcon.value)
            .should('have.class', 'bi-chevron-right');

        // Kiểm tra input có class 'toggled'
        cy.get(sidebarElements.searchInput.value)
            .should('have.class', 'toggled');
    }

};
