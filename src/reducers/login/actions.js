const actions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGOUT: 'LOGOUT',
    login: (data) => ({
      type: actions.LOGIN_REQUEST,
      data
    }),
    logout: () => ({
      type: actions.LOGOUT
    })
  };
  export default actions;
  