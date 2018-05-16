// import createPersistedState from 'vuex-persistedstate'
// export default ({ store }) => {
//   console.log(store)
//   createPersistedState({
//     key: 'AuthStoreData'
//     // paths: ['modules/AuthStore']
//   })(store)
// }
// plugins/persistedstate.js

// import createPersistedState from 'vuex-persistedstate'

// export default ({store, isHMR}) => {
//   console.log(isHMR)
//   if (isHMR) return
//   console.log(store)
//   window.onNuxtReady(() => {
//     createPersistedState({
//       key: 'persistedData',
//       paths: ['modules/AuthStore/loggedinUser']
//     })(store)
//   })
// }
