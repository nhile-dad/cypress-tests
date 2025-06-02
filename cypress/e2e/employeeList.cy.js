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

    it('Should search by Employee Name', () => {
        EmployeeListActions.enterEmployeeName('John Doe');
        EmployeeListActions.clickSearch();
        EmployeeListActions.assertSearchResultExists();
    });

    it('Should search by Employee ID', () => {
        EmployeeListActions.enterEmployeeID('EMP123');
        EmployeeListActions.clickSearch();
        EmployeeListActions.assertSearchResultExists();
    });

    it('Should filter by Employment Status', () => {
        EmployeeListActions.selectEmploymentStatus('Full-Time Permanent');
        EmployeeListActions.clickSearch();
        EmployeeListActions.assertSearchResultExists();
    });

    it('Should filter by Job Title', () => {
        EmployeeListActions.selectJobTitle('QA Engineer');
        EmployeeListActions.clickSearch();
        EmployeeListActions.assertSearchResultExists();
    });

    it('Should reset all filters', () => {
        EmployeeListActions.enterEmployeeName('John');
        EmployeeListActions.clickReset();
        // Có thể thêm kiểm tra field trống nếu muốn
    });

    it('Should show no results for invalid search', () => {
        EmployeeListActions.enterEmployeeName('Invalid Name XYZ');
        EmployeeListActions.clickSearch();
        EmployeeListActions.assertNoResults();
    });
    
    afterEach(() => {
        cy.wait(2000);
    });

});
