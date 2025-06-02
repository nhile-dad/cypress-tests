import { employeeListElements } from '../interface/employeeListElements';

export const EmployeeListActions = {
  verifyPageName(expectedMessage) {
    cy.verifyText(employeeListElements.header, expectedMessage);
  },
  enterEmployeeName: (name) => {
    cy.typeText(employeeListElements.employeeName, name);
  },
  enterEmployeeID: (id) => {
    cy.typeText(employeeListElements.employeeID, id);
  },
  selectEmploymentStatus: (status) => {
    cy.selectDropdown(employeeListElements.employmentStatus, status);
  },
  selectJobTitle: (title) => {
    cy.selectDropdown(employeeListElements.jobTitle, title);
  },
  clickSearch: () => {
    cy.clickElement(employeeListElements.searchButton);
  },
  clickReset: () => {
    cy.clickElement(employeeListElements.resetButton);
  },
  assertSearchResultExists: () => {
    cy.shouldBeVisible(employeeListElements.resultTable);
  },
  assertNoResults: () => {
    cy.assertElementContains(employeeListElements.resultTable, 'No Records Found');
  }
}
