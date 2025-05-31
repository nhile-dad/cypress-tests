
import { LoginActions } from '../pageActions/loginActions';
describe('Home Page Test Suite', () => {

  beforeEach(() => {
    // Bước khởi tạo chung trước mỗi test
    cy.visit('http://localhost:91')       // Mở trang chính
  })

  it('Login mà không nhập username và password', () => {
    LoginActions.clickSubmit()
    LoginActions.assertUsernameRequired('Required')
    LoginActions.assertPasswordRequired('Required')
    LoginActions.shouldHaveUrlPart('/login')
  })

  it('Login mà username và password không chính xác', () => {
    LoginActions.login('admin123','Admin!@345678')
    LoginActions.assertLoginError('Invalid credentials')
    LoginActions.shouldHaveUrlPart('/login')
  })

  it('Login thành công', () => {
    LoginActions.login('automationfc','T3st1234!789')
    LoginActions.shouldHaveUrlPart('/dashboard')
  })

  it('Click link Quên mật khẩu', () => {
    LoginActions.clickForgotPassword();
    LoginActions.shouldHaveUrlPart('/requestPasswordResetCode')
  });

  it('Kiểm tra link OrangeHRM có hiển thị', () => {
    LoginActions.clickOrangeHRMLink();
    LoginActions.shouldHaveUrlPart('https://www.orangehrm.com/')
  });

  afterEach(() => {
    cy.wait(2000); // chờ 1 giây giữa các test case
  });
  
})
