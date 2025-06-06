import { employeeListElements } from '../interface/employeeListElements';
require('cypress-xpath');
export const EmployeeListActions = {
  fillSearchField: (field, value) => {
    const locator = employeeListElements.search[field];
    if (!locator) throw new Error(`No locator found for field: ${field}`);

    if (locator.type === 'xpathDropdown') {
      // Click mở dropdown
      cy.xpath(locator.input).click({ force: true });

      // Chọn option
      cy.xpath(locator.option(value)).click({ force: true });
    } else if (locator.type === 'xpath') {
      if (value === '') {
        cy.xpath(locator.value).clear();
      } else {
        cy.xpath(locator.value).clear().type(value);
      }
    }
  },

  clickSearchButton: () => {
    cy.get(employeeListElements.search.searchButton.value).click();
  },

  performEmployeeSearch: (searchCriteria) => {
    cy.performSearch(EmployeeListActions, searchCriteria);
  },

  verifyEmployeeResultYes: (expectedValues) => {
    cy.assertRowContains(employeeListElements, expectedValues);
  },
  verifyEmployeeResultNo: (expectedValues) => {
    cy.assertRowNotContains(employeeListElements, expectedValues);
  },
}
