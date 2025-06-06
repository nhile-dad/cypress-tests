// 📌 Kiểm tra có ít nhất một kết quả dòng trong bảng (dành cho trang có table card)
Cypress.Commands.add('assertSearchResultExists', (rowSelector = '.oxd-table-card') => {
  cy.get(rowSelector).should('have.length.greaterThan', 0);
});

// 📌 Kiểm tra dòng chứa text nhất định (trong các table card)
Cypress.Commands.add('assertRowContainsText', (rowSelector, text) => {
  cy.get(rowSelector).each($row => {
    cy.wrap($row)
      .contains('div', text, { matchCase: false })
      .should('exist');
  });
});
