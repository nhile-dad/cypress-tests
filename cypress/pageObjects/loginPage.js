class LoginPage {
    elements = {
      username: { type: 'css', value: '[name="username"]' },
      password: { type: 'css', value: '[name="password"]' },
      submit: { type: 'css', value: '[type="submit"]' },
      forgotPassword: { type: 'text', value: 'Forgot your password?' }
    }
  }
  
  export default new LoginPage();
  