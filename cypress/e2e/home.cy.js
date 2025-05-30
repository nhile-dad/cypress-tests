
import LoginPage from '../pageObjects/loginPage'
describe('Home Page Test Suite', () => {

  beforeEach(() => {
    // Bước khởi tạo chung trước mỗi test
    cy.visit('http://localhost:3000')       // Mở trang chính
    // Nếu cần login:
    // cy.login('admin', 'admin123')        // Custom command nếu có
  })

  it('Click vào nút "Admin"', () => {
    cy.typeText(LoginPage.elements.username,'admin')
    cy.typeText(LoginPage.elements.password,'Admin!@345678')
    cy.clickElement(LoginPage.elements.submit) 
    cy.url().should('include', '/viewEmployeeList')
  })

  // Thêm các test khác ở đây
})
