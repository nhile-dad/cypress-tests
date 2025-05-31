import { SidebarActions } from '../pageActions/sidebarActions'
import { LoginActions } from '../pageActions/loginActions'
import { MaintainActions } from '../pageActions/maintainActions';
describe('Sidebar Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:91')
    LoginActions.login('automationfc', 'T3st1234!789')
  });

  it('Should navigate to items', () => {
    SidebarActions.clickMenu('Admin');
    cy.wait(1000);
    //SidebarActions.shouldHaveUrlPart('admin')
    SidebarActions.clickMenu('PIM');

    SidebarActions.clickMenu('Leave');
   
    SidebarActions.clickMenu('Time');

    SidebarActions.clickMenu('Recruitment');
    
    SidebarActions.clickMenu('My Info');
    
    SidebarActions.clickMenu('Performance');
    
    SidebarActions.clickMenu('Dashboard');
    
    SidebarActions.clickMenu('Directory');
    
    SidebarActions.clickMenu('Maintenance');
    MaintainActions.goBackToDashboard();
    
    SidebarActions.clickMenu('Claim');
    
    SidebarActions.clickMenu('Buzz');
    
    SidebarActions.clickMenu('Dashboard');
    
  })
})