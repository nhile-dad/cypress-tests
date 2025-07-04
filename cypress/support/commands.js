// Helper để xử lý element theo type
import { EmployeeListActions } from '../pageActions/employeeListActions';
import { employeeListElements } from '../interface/employeeListElements';
require('cypress-xpath');
export function resolveElement(element) {
  switch (element.type) {
    case 'css':
      return cy.get(element.value);

    case 'text':
      return cy.contains(element.value);

    case 'id':
      return cy.get(`#${element.value}`);

    case 'dataTestId':
      return cy.get(`[data-testid="${element.value}"]`);

    case 'xpath':
      // Cần cài plugin: @cypress/xpath
      return cy.xpath(element.value);

    default:
      throw new Error(`Unsupported element type: ${element.type}`);
  }
}

// Click vào một phần tử
Cypress.Commands.add('clickElement', (element, force = false) => {
  resolveElement(element).click({ force });
});

//Click vào một phần tử đã xóa target
Cypress.Commands.add('clickWithoutTarget', (element, force = false) => {
  resolveElement(element)
    .should('be.visible')
    .invoke('removeAttr', 'target')
    .then(($el) => {
      cy.wrap($el).click({ force });
    });
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


// Kiểm tra path URL
Cypress.Commands.add('shouldHaveUrlPart', (expectedPath) => {
  cy.url().should('include', expectedPath);
});

// Kiểm tra text hiển thị đúng
Cypress.Commands.add('verifyText', (element, expectedText) => {
  resolveElement(element).should('have.text', expectedText);
});

// Kiểm tra text hiển thị đúng 1 phần 
Cypress.Commands.add('assertElementContains', (element, expectedText) => {
  resolveElement(element).should('contain.text', expectedText);
});

// Kiểm tra element có tồn tại
Cypress.Commands.add('shouldExist', (element) => {
  resolveElement(element).should('exist');
});

// Kiểm tra element có hiển thị
Cypress.Commands.add('shouldBeVisible', (element) => {
  resolveElement(element).should('be.visible');
});

// Kiểm tra element ko có hiển thị 
Cypress.Commands.add('shouldNotHaveClass', (element, className) => {
  resolveElement(element).should('not.have.class', className);
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


// Check Sidebar
// click item trên sidebar
Cypress.Commands.add('clickSidebarItem', (item) => {
  resolveElement(item).click();
});
// kiểm tra sidebar đang được visible
Cypress.Commands.add('assertSidebarVisible', () => {
  resolveElement(sidebarPage.elements.sidebar).should('be.visible');
});
// khi item như setting trên sidebar được chọn thì kiểm tra trạng thái active 
Cypress.Commands.add('assertSidebarItemActive', (item) => {
  resolveElement(sidebarPage.elements.activeItem).should('contain.text', item.value);
});
// nếu có button toggle để đóng mở sidebar thì dùng hàm này
Cypress.Commands.add('toggleSidebar', () => {
  resolveElement(sidebarPage.elements.toggle).click();
});

Cypress.Commands.add('performSearch', (actions, searchCriteria) => {
  Object.entries(searchCriteria).forEach(([field, value]) => {
    actions.fillSearchField(field, value);
  });
  actions.clickSearchButton();
});

Cypress.Commands.add('assertRowContains', (elements, searchValue) => {
  cy.get(elements.results.rowSelector).should('exist');

  let matchCount = 0;
  let found = false;

  // Chuẩn hóa searchValue thành mảng các giá trị string để check
  const searchValues = typeof searchValue === 'string' ? [searchValue] : Object.values(searchValue);

  cy.get(elements.results.rowSelector).each(($row) => {
    const rowText = $row.text();

    // Nếu tất cả giá trị trong searchValues đều xuất hiện trong rowText => match
    const isMatch = searchValues.every(val => val && rowText.includes(val));

    if (isMatch) {
      found = true;
      matchCount++;
      cy.wrap($row).should('exist');
    }
  }).then(() => {
    cy.log(`✅ Có record chứa giá trị: "${JSON.stringify(searchValue)}"? ${found}`);
    expect(found, `Có ít nhất 1 record chứa "${JSON.stringify(searchValue)}"`).to.be.true;
    cy.log(`✅ Số dòng phù hợp với kết quả mong đợi: ${matchCount}`);
    console.log(`✅ Số dòng phù hợp với kết quả mong đợi: ${matchCount}`);
  });
});

Cypress.Commands.add('assertRowNotContains', (elements, searchValue) => {
  cy.get(elements.results.rowSelector).should('exist');

  let found = false;

  // Chuẩn hóa searchValue thành mảng các giá trị string để check
  const searchValues = typeof searchValue === 'string'
    ? [searchValue]
    : Object.values(searchValue).map(val => String(val)); // đảm bảo là string

  cy.get(elements.results.rowSelector).each(($row) => {
    const rowText = $row.text();

    // Nếu tất cả giá trị đều có trong dòng => fail
    const isMatch = searchValues.every(val => val && rowText.includes(val));

    if (isMatch) {
      found = true;
    }
  }).then(() => {
    cy.log(`✅ Có record chứa tất cả giá trị: "${JSON.stringify(searchValue)}"? ${found}`);
    expect(found, `Không có record nào chứa toàn bộ giá trị "${JSON.stringify(searchValue)}"`).to.be.false;
  });
});






