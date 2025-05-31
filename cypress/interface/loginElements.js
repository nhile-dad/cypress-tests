export const loginElements = {
  username: { type: 'css', value: '[name="username"]' },
  password: { type: 'css', value: '[name="password"]' },
  submit: { type: 'css', value: '[type="submit"]' },
  forgotPassword: { type: 'xpath', value: "//div[@class='orangehrm-login-forgot']" },
  usernameMessage: { type: 'xpath', value: "//label[text()='Username']/ancestor::div/following-sibling::span" },
  passwordMessage: { type: 'xpath', value: "//label[text()='Password']/ancestor::div/following-sibling::span" },
  loginError: { type: 'xpath', value: "//div[@class='orangehrm-login-error']//p" },
  orangeHRMLink: { type: 'xpath', value: "//div[@class='orangehrm-copyright-wrapper']//a" }
}
