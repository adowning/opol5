import  axios from 'axios'
export default {

  async HARDWARE({ commit, state, getters }, page = 1, limit = 15) {
      console.log('HARDWARE CALLED')
    const { data } = await axios.get('/api/assets/hardware')
    return data
  },

logOut({ commit, state }, value) {
    console.log(state)
    commit("reset", value)
  },

  setUser({ commit, state }, user) {
    console.log(state)
    user.attributes.humanityUsername = user.attributes[
      "custom:humanityLogin"
    ].split(",")[0]
    user.attributes.humanityPassword = user.attributes[
      "custom:humanityLogin"
    ].split(",")[1]
    user.attributes.humanityID = user.attributes["custom:humanityLogin"].split(
      ","
    )[2]
    user.attributes["custom:humanityLogin"] = null
    commit("setUser", user)
  },
  setHumanityData({ commit, state }, data) {
    console.log(state)
    commit("SET_HUMANITY_ATTRIBUTES", data)
  },
  setVerification({ commit, state }, verification) {
    console.log(state)
    console.log(verification)

    commit("SET_VERIFICATION")
  }
}
