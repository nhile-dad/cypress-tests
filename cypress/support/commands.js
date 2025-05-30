// Helper để xử lý element theo type
function resolveElement(element) {
    if (element.type === 'css') {
      return cy.get(element.value);
    } else if (element.type === 'text') {
      return cy.contains(element.value);
    } else {
      throw new Error(`Unsupported element type: ${element.type}`);
    }
  }

// Click vào một phần tử
Cypress.Commands.add('clickElement', (element, force = false) => {
    resolveElement(element).click({ force });
});

// Nhập text vào input
Cypress.Commands.add('typeText', (element, text) => {
    resolveElement(element).should('be.visible').clear().type(text);
});

// Chọn giá trị từ dropdown <select>
Cypress.Commands.add('selectDropdown', (element, value) => {
    resolveElement(element).select(value);
});

// Check checkbox
Cypress.Commands.add('checkCheckbox', (element) => {
    resolveElement(element).check();
});

// Uncheck checkbox
Cypress.Commands.add('uncheckCheckbox', (element) => {
   resolveElement(element).uncheck();
});

// Chọn radio button
Cypress.Commands.add('selectRadio', (element) => {
   resolveElement(element).check();
});


// Kiểm tra text hiển thị đúng
Cypress.Commands.add('verifyText', (element, expectedText) => {
   resolveElement(element).should('have.text', expectedText);
});

// Kiểm tra element có tồn tại
Cypress.Commands.add('shouldExist', (element) => {
   resolveElement(element).should('exist');
});

// Kiểm tra element có hiển thị
Cypress.Commands.add('shouldBeVisible', (element) => {
   resolveElement(element).should('be.visible');
});

// Kiểm tra checkbox đã được chọn
Cypress.Commands.add('shouldBeChecked', (element) => {
   resolveElement(element).should('be.checked');
});

// Kiểm tra class của element
Cypress.Commands.add('shouldHaveClass', (element, className) => {
   resolveElement(element).should('have.class', className);
});


// Upload file (yêu cầu cài plugin: cypress-file-upload)
Cypress.Commands.add('uploadFile', (element, fileName, mimeType = '') => {
   resolveElement(element).attachFile({ filePath: fileName, mimeType });
});

// Xác nhận alert
Cypress.Commands.add('handleAlert', () => {
    cy.on('window:alert', (alertText) => {
        cy.log('Alert xuất hiện:', alertText);
    });
});

// Hover vào phần tử (sử dụng trigger)
Cypress.Commands.add('hoverElement', (element) => {
   resolveElement(element).trigger('mouseover');
});

// Kéo và thả (drag & drop) – cần plugin nếu muốn chuẩn
Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
    cy.get(sourceSelector).trigger('mousedown', { which: 1 });
    cy.get(targetSelector).trigger('mousemove').trigger('mouseup', { force: true });
});
