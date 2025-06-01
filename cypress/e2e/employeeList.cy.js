import { LoginActions } from '../pageActions/loginActions';
import { SidebarActions } from '../pageActions/sidebarActions';
import { EmployeeListActions } from '../pageActions/employeeListActions';

describe('Employee List Navigation Test', () => {
    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.visit('http://localhost:91');
            LoginActions.login('automationfc', 'T3st1234!789');
            cy.url().should('include', '/dashboard');
        });

        // 👉 Truy cập lại trang dashboard sau khi session được khôi phục
        cy.visit('http://localhost:91');
    });

    it('Đi tới trang Employee List từ sidebar', () => {
        SidebarActions.clickMenu('PIM');
        EmployeeListActions.verifyPageName('Employee Information');
    });

    afterEach(() => {
        cy.wait(2000);
    });

});
