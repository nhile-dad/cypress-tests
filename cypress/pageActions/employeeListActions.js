import { employeeListElements } from '../interface/employeeListElements';

export const EmployeeListActions = {
  verifyPageName(expectedMessage) {
    cy.verifyText(employeeListElements.header,expectedMessage);
  }
}
