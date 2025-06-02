import { LoginActions } from '../pageActions/loginActions';
import { SidebarActions } from '../pageActions/sidebarActions';
import { EmployeeListActions } from '../pageActions/employeeListActions';

describe('Employee List Navigation Test', () => {
    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.visit('http://localhost:3000');
            LoginActions.login('admin', 'Admin!@345678');
        });

        // 👉 Truy cập lại trang dashboard sau khi session được khôi phục
        cy.visit('http://localhost:3000');
    });

    it('Đi tới trang Employee List từ sidebar', () => {
        SidebarActions.clickMenu('PIM');
        EmployeeListActions.verifyPageName('Employee Information');
    });

    afterEach(() => {
        cy.wait(2000);
    });

});
