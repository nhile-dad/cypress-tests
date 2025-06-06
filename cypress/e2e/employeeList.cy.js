import { LoginActions } from '../pageActions/loginActions';
import { SidebarActions } from '../pageActions/sidebarActions';
import { EmployeeListActions } from '../pageActions/employeeListActions';
import { employeeListElements } from '../interface/employeeListElements';

describe('Employee List Navigation Test', () => {
    beforeEach(() => {
        cy.session('loginSession', () => {
            cy.visit('http://localhost:3000');
            LoginActions.login('admin', 'Admin!@345678');
        });

        // 👉 Truy cập lại trang dashboard sau khi session được khôi phục
        cy.visit('http://localhost:3000');
    });

    it.only('Đi tới trang Employee List từ sidebar', () => {
        SidebarActions.clickMenu('PIM');
        //EmployeeListActions.verifyPageName('Employee Information');
    });

    it('Search by Employee ID and assert result', () => {
        EmployeeListActions.performEmployeeSearch({ employeeId: '0005' });
        EmployeeListActions.verifyEmployeeResultNo({ employeeId: '0005' });
    });

    it.only('Search by Name + Job Title', () => {
        EmployeeListActions.performEmployeeSearch({ employeeName: 'Nhi', jobTitle: 'Dev Java' });

        EmployeeListActions.verifyEmployeeResultNo({ employeeName: 'Nhi', jobTitle: 'Dev Java' });
    });
    afterEach(() => {
        cy.wait(2000);
    });

});
