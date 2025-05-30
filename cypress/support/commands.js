// Click vào một phần tử
Cypress.Commands.add('clickElement', (selector, force = false) => {
    cy.get(selector).click({ force });
});

// Nhập text vào input
Cypress.Commands.add('typeText', (selector, text) => {
    cy.get(selector).should('be.visible').clear().type(text);
});

// Chọn giá trị từ dropdown <select>
Cypress.Commands.add('selectDropdown', (selector, value) => {
    cy.get(selector).select(value);
});

// Check checkbox
Cypress.Commands.add('checkCheckbox', (selector) => {
    cy.get(selector).check();
});

// Uncheck checkbox
Cypress.Commands.add('uncheckCheckbox', (selector) => {
    cy.get(selector).uncheck();
});

// Chọn radio button
Cypress.Commands.add('selectRadio', (selector) => {
    cy.get(selector).check();
});


// Kiểm tra text hiển thị đúng
Cypress.Commands.add('verifyText', (selector, expectedText) => {
    cy.get(selector).should('have.text', expectedText);
});

// Kiểm tra element có tồn tại
Cypress.Commands.add('shouldExist', (selector) => {
    cy.get(selector).should('exist');
});

// Kiểm tra element có hiển thị
Cypress.Commands.add('shouldBeVisible', (selector) => {
    cy.get(selector).should('be.visible');
});

// Kiểm tra checkbox đã được chọn
Cypress.Commands.add('shouldBeChecked', (selector) => {
    cy.get(selector).should('be.checked');
});

// Kiểm tra class của element
Cypress.Commands.add('shouldHaveClass', (selector, className) => {
    cy.get(selector).should('have.class', className);
});


// Upload file (yêu cầu cài plugin: cypress-file-upload)
Cypress.Commands.add('uploadFile', (selector, fileName, mimeType = '') => {
    cy.get(selector).attachFile({ filePath: fileName, mimeType });
});

// Xác nhận alert
Cypress.Commands.add('handleAlert', () => {
    cy.on('window:alert', (alertText) => {
        cy.log('Alert xuất hiện:', alertText);
    });
});

// Hover vào phần tử (sử dụng trigger)
Cypress.Commands.add('hoverElement', (selector) => {
    cy.get(selector).trigger('mouseover');
});

// Kéo và thả (drag & drop) – cần plugin nếu muốn chuẩn
Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
    cy.get(sourceSelector).trigger('mousedown', { which: 1 });
    cy.get(targetSelector).trigger('mousemove').trigger('mouseup', { force: true });
});
