
describe('Home Page Test Suite', () => {

  beforeEach(() => {
    // Bước khởi tạo chung trước mỗi test
    cy.visit('http://localhost:3000')       // Mở trang chính
    // Nếu cần login:
    // cy.login('admin', 'admin123')        // Custom command nếu có
  })

  it('Click vào nút "Admin"', () => {
    cy.typeText('[name="username"]','admin')
    cy.typeText('[name="password"]','Admin!@345678')
    cy.clickElement('.oxd-button') // Custom command
    cy.url().should('include', '/viewEmployeeList')
  })

  // Thêm các test khác ở đây
})
