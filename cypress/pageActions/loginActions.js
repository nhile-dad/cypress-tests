import { loginElements } from '../interface/loginElements';
import { resolveElement } from '../support/commands';
export const LoginActions = {
    typeUsername: (text) => {
        resolveElement(loginElements.username).clear().type(text);
    },
    typePassword: (text) => {
        resolveElement(loginElements.password).clear().type(text);
    },
    clickSubmit: () => {
        resolveElement(loginElements.submit).click();
    },
    login: (username, password) => {
        LoginActions.typeUsername(username);
        LoginActions.typePassword(password);
        LoginActions.clickSubmit();
    },
    assertLoginError: (expectedMessage) => {
        resolveElement(loginElements.loginError).should('contain.text', expectedMessage);
    },
    assertUsernameRequired: (message) => {
        resolveElement(loginElements.usernameMessage).should('contain.text', message);
    },
    assertPasswordRequired: (message) => {
        resolveElement(loginElements.passwordMessage).should('contain.text', message);
    },
    shouldHaveUrlPart: (urlPart) => {
        cy.shouldHaveUrlPart(urlPart);
    },
    clickForgotPassword: () => {
        resolveElement(loginElements.forgotPassword).click();
    },
    clickOrangeHRMLink:()=>{
        cy.clickWithoutTarget(loginElements.orangeHRMLink);
    }
};