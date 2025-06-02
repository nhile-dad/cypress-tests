import { SidebarActions } from '../pageActions/sidebarActions'
import { LoginActions } from '../pageActions/loginActions'
import { MaintainActions } from '../pageActions/maintainActions';
describe('Sidebar Navigation Tests', () => {
  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.visit('http://localhost:3000');
      LoginActions.login('admin', 'Admin!@345678');
    });

    // 👉 Truy cập lại trang dashboard sau khi session được khôi phục
    cy.visit('http://localhost:3000');
  });

  it('Should navigate to items', () => {
    SidebarActions.clickMenu('Admin');
    cy.wait(1000);
    //SidebarActions.shouldHaveUrlPart('admin')
    SidebarActions.clickMenu('PIM');

    SidebarActions.clickMenu('Leave');
   
    SidebarActions.clickMenu('Time');

    // SidebarActions.clickMenu('Recruitment');
    
    // SidebarActions.clickMenu('My Info');
    
    // SidebarActions.clickMenu('Performance');
    
    // SidebarActions.clickMenu('Dashboard');
    
    // SidebarActions.clickMenu('Directory');
    
    // SidebarActions.clickMenu('Maintenance');
    // MaintainActions.goBackToDashboard();
    
    // SidebarActions.clickMenu('Claim');
    
    // SidebarActions.clickMenu('Buzz');
    
    // SidebarActions.clickMenu('Dashboard');
    
  })

  it('Search item trên sidebar', () => {
    SidebarActions.searchSidebarItem('Leave');
    cy.contains('Leave').should('be.visible');
    SidebarActions.clickMenu('Leave');
  });

  it('Mặc định sidebar đang mở', () => {
    SidebarActions.assertSidebarIsExpanded();
  });

  it('Toggle sidebar thu gọn rồi mở lại', () => {
    SidebarActions.toggleSidebar();
    SidebarActions.assertSidebarIsCollapsed();
  
    SidebarActions.toggleSidebar();
    SidebarActions.assertSidebarIsExpanded();
  });

})