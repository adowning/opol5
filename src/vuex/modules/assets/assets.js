import AssetsService from '../../../services/AssetsService.vue'

const state = {
  hardwares: [],
  hardwaresTotal: null
}

const getters = {
  getHardwareList: (state) => {
    return state.hardwares
  },
}

const mutations = {
  resetState: (state) => {
    state.hardwares = []
    state.hardwaresTotal = null
  },
  addHardware: (state, message) => {
    state.hardwares = { ...state.hardwares, [hardware.hardwareId]: hardware}
    if (!state.assets.hardwares) state.assets.hardwares = []
    state.assets.hardwares.push(hardware.hardwareId)
  },
  setHardwares: (state, hardwares) => {
    state.hardwares = hardwares
  },
  setHardwaresTotal: (state, hardwarestotal) => {
    state.hardwaresTotal = hardwarestotal
  },
}

const actions = {  

  checkInHardware: ({commit, dispatch, state}, assetId, userId) => {
    return new Promise((resolve, reject) => {
          AssetsService.methods.checkInhardware(assetId, userId).then((res) => {
            for(var item of res.rows){
              console.log(item)
              if(!item.assigned_to){
               var _assigned_to = {
                 name: ' '
               }
              // item.assigned_to = _assigned_to
              }
              // console.log(item.location)
              if(!item.location){
                var _location = {
                  name: ' '
                }
                //item.location = _location
                item.warn = true
               }
            }
            commit('setHardwares', res.rows)
            commit('setHardwaresTotal', res.total)
            resolve()
          })
        // })
  
        resolve()
      
    })
  },
  checkOutHardware: ({commit, dispatch, state}, assetId, userId) => {
    return new Promise((resolve, reject) => {
          AssetsService.methods.checkOuthardware(assetId, userId).then((res) => {
            for(var item of res.rows){
              console.log(item)
              if(!item.assigned_to){
               var _assigned_to = {
                 name: ' '
               }
              // item.assigned_to = _assigned_to
              }
              // console.log(item.location)
              if(!item.location){
                var _location = {
                  name: ' '
                }
                //item.location = _location
                item.warn = true
               }
            }
            commit('setHardwares', res.rows)
            commit('setHardwaresTotal', res.total)
            resolve()
          })
        // })
  
        resolve()
      
    })
  },
  loadHardwares: ({commit, dispatch, state}) => {
    return new Promise((resolve, reject) => {
          AssetsService.methods.getHardwares().then((res) => {
            for(var item of res.rows){
              console.log(item)
              if(!item.assigned_to){
               var _assigned_to = {
                 name: ' '
               }
               item.assigned_to = _assigned_to
              }
              // console.log(item.location)
              if(!item.location){
                var _location = {
                  name: ' '
                }
                item.location = _location
                item.warn = true
               }
            }
            commit('setHardwares', res.rows)
            commit('setHardwaresTotal', res.total)
            resolve()
          })
        // })
  
        resolve()
      
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}