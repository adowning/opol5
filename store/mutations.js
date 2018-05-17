export default {
        RESET(state, user) {
          console.log(user)
          const s = initialState()
          Object.keys(s).forEach(key => {
            state[key] = s[key]
          })
        },
        SET_USER(state, user) {
          state.user = user
          let token = getTokenFromUser(user)
          Cookie.set("tokens", token)
        },
        SET_VERIFICATION(state, verification) {
          state.userVerification.push(verification)
        },
        SET_HUMANITY_ATTRIBUTES(state, attributes) {
          state.humanity_attributes = attributes
        }
  }