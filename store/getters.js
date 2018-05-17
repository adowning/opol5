export default {
  loggedinUser: state => state.user,
  isAuthenticated: state => {
    return Boolean(state.user)
  },
  loggedinusername: state => {
    return state.user ? state.user.username : ""
  },
  userVerification: state => state.userVerification
}
