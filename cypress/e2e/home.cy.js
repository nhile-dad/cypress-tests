
import LoginPage from '../pageObjects/loginPage'
describe('Home Page Test Suite', () => {

  beforeEach(() => {
    // Bước khởi tạo chung trước mỗi test
    cy.visit('http://localhost:91')       // Mở trang chính
  })

  it('Login mà không nhập username và password', () => {
    cy.clickElement(LoginPage.elements.submit) 
    cy.verifyText(LoginPage.elements.usernameMessage,'Required')
    cy.verifyText(LoginPage.elements.passwordMessage,'Required')
    cy.shouldHaveUrlPart('/login')
  })

  it('Login mà username và password không chính xác', () => {
    cy.typeText(LoginPage.elements.username,'admin123')
    cy.typeText(LoginPage.elements.password,'Admin!@345678')
    cy.clickElement(LoginPage.elements.submit) 
    cy.verifyText(LoginPage.elements.loginError,'Invalid credentials')
    cy.shouldHaveUrlPart('/login')
  })

  it.only('Login thành công', () => {
    cy.typeText(LoginPage.elements.username,'automationfc')
    cy.typeText(LoginPage.elements.password,'T3st1234!789')
    cy.clickElement(LoginPage.elements.submit) 
    cy.shouldHaveUrlPart('/dashboard')
  })

  it('Kiểm tra link Quên mật khẩu có hiển thị', () => {
    cy.clickElement(LoginPage.elements.forgotPassword);
    cy.shouldHaveUrlPart('/requestPasswordResetCode')
  });

  it('Kiểm tra link OrangeHRM có hiển thị', () => {
    cy.clickWithoutTarget(LoginPage.elements.orangeHRMLink);
    cy.shouldHaveUrlPart('https://www.orangehrm.com/')
  });

  afterEach(() => {
    cy.wait(2000); // chờ 1 giây giữa các test case
  });
  
})
