import moment from 'moment'

function initialState() {
  return {
    timeClockStatus: null,
    timeClocks: null
  }
}
export const state = () => ({
  timeClockStatus: null,
  timeClocks: null
})
const getters = {
  timeClockStatus: state => state.timeClockStatus

}
const actions = {
  setTimeClocks({
    commit,
    state
  }, value) {
    var clocks = []
    for (let o of value.data) {
      // context.commit('SET_TIME_CLOCKS', o)
      if (o.in_time && o.out_time) {
        clocks.push(o)
      }
    }
    commit('SET_TIME_CLOCKS', clocks)
  },
  setEmployeeTimeClockStatus({
    commit,
    state
  }, value) {
    console.log(value)
    var newValue = {}
    if (value !== 'in' && value !== 'out') {
      if (value.address) {
        newValue.clockStatus = value.clockStatus
        newValue.clockID = 'blank'
        console.log('newval ', newValue)
        newValue.updatedAt = moment().format('HH:MM:SS')
        commit('SET_TIME_CLOCK_STATUS', newValue)
        return 'clocked employee out or in'
      } else {
        if (value.data.data === 'out') {
          newValue.clockStatus = 'out'
          newValue.clockID = 'blank'
          console.log('newval ', newValue)
          newValue.updatedAt = moment().format('HH:MM:SS')
          commit('SET_TIME_CLOCK_STATUS', newValue)
          return 'clocked employee out'
        }
        if (value.data.clockStatus === 'in') {
          newValue.clockStatus = 'in'
          newValue.clockID = value.data.data.id
          console.log('newval ', newValue)
          newValue.updatedAt = moment().format('HH:MM:SS')
          commit('SET_TIME_CLOCK_STATUS', newValue)
          return 'clocked employee in'
        }
        if (value.data.end_timestamp) {
          newValue.clockStatus = 'out'
          newValue.clockID = 'blank'
          console.log('newval ', newValue)
          newValue.updatedAt = moment().format('HH:MM:SS')
          commit('SET_TIME_CLOCK_STATUS', newValue)
          return 'clocked employee out'
        } else {
          newValue.clockStatus = 'in'
          newValue.clockID = value.data.id
          console.log('newval ', newValue)
          newValue.updatedAt = moment().format('HH:MM:SS')
          commit('SET_TIME_CLOCK_STATUS', newValue)
          return 'clocked employee in'
        }
      }
    } else {
      console.log(value)
      if (value === 'out') {
        newValue.clockStatus = 'out'
        newValue.clockID = 'blank'
        console.log('newval ', newValue)
        newValue.updatedAt = moment().format('HH:MM:SS')
        commit('SET_TIME_CLOCK_STATUS', newValue)
        return 'clocked employee out'
      } else {
        console.log('error')
      }
    }
  }
}
const mutations = {
  reset(state, user) {
    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
  SET_TIME_CLOCKS(state, clocks) {
    state.timeClocks = clocks
  },
  SET_TIME_CLOCK_STATUS(state, status) {
    state.timeClockStatus = status
  }

}
export default {
  state,
  getters,
  actions,
  mutations
}

// function initialState () {
//   return {
//     timeClockStatus: null,
//     timeClocks: null
//   }
// }

// logOut({
//     commit,
//     state
//   }, value) {
//   commit('RESET', value)
// },

// RESET(state, value) {
//     // acquire initial state
//     const s = initialState()
//     Object.keys(s).forEach(key => {
//       state[key] = s[key]
//     })
//   },
