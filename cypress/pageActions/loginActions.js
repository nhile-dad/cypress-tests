import { loginElements } from '../interface/loginElements';

export const LoginActions = {
    typeUsername: (text) => {
        cy.typeText(loginElements.username, text);
    },

    typePassword: (text) => {
        cy.typeText(loginElements.password, text);
    },

    clickSubmit: () => {
        cy.clickElement(loginElements.submit);
    },

    login: (username, password) => {
        LoginActions.typeUsername(username);
        LoginActions.typePassword(password);
        LoginActions.clickSubmit();
    },

    assertLoginError: (expectedMessage) => {
        cy.verifyText(loginElements.loginError, expectedMessage);
    },

    assertUsernameRequired: (message) => {
        cy.verifyText(loginElements.usernameMessage, message);
    },

    assertPasswordRequired: (message) => {
        cy.verifyText(loginElements.passwordMessage, message);
    },

    shouldHaveUrlPart: (urlPart) => {
        cy.shouldHaveUrlPart(urlPart);
    },

    clickForgotPassword: () => {
        cy.clickElement(loginElements.forgotPassword);
    },

    clickOrangeHRMLink: () => {
        cy.clickWithoutTarget(loginElements.orangeHRMLink);
    }
};
