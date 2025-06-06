// 📌 Lấy giá trị cell trong dòng đầu tiên theo tên cột
Cypress.Commands.add('getCellValueByColumnName', (columnName) => {
  let colIndex = -1;

  cy.get('.oxd-table-header .oxd-table-cell')
    .each(($el, index) => {
      if ($el.text().trim() === columnName) {
        colIndex = index;
      }
    })
    .then(() => {
      if (colIndex === -1) {
        throw new Error(`Column "${columnName}" not found`);
      }

      cy.get('.oxd-table-card')
        .first()
        .find('.oxd-table-cell')
        .eq(colIndex)
        .invoke('text')
        .then(text => {
          cy.log(`Cell value for column "${columnName}": ${text.trim()}`);
          return text.trim();
        });
    });
});
