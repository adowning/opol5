import Vue from 'vue'
import Router from 'vue-router'
// import Home from "./views/Home.vue";
import SignIn from '../views/auth/SignIn.vue'
import Home from '../views/Home.vue'
import Register from '../views/auth/Register.vue'
import Profile from '../views/Profile.vue'
import TimeClocks from '../views/TimeClocks.vue'
import { Auth, Logger } from 'aws-amplify'
import store from './store'
const logger = new Logger('AuthRouter')
//eslint-disable next-line

Vue.use(Router)

// export default new Router({
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/auth/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/timeclocks',
      name: 'TimeClocks',
      component: TimeClocks
    }
  ]
})

const AuthFilter = (to, from, next) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      // logger.info("...has user", user);
      store.commit('setUser', user)
       console.log(user)
      Auth.currentCredentials()
        .then(credentials => {
          store.commit('setUserId', credentials.identityId)
        })
      //  Auth.currentCredentials()
      //   .then(credentials => {
      // store.commit('setUserId',  Auth.essentialCredentials(credentials))
      //   })
        .catch(err => logger.error('get current credentials err', err))
      next()
    })
    .catch(err => {
       console.log('...no user', err)
      // console.log(to.path)
      store.commit('setUser', null)
      if (!to.path) {
        next('/auth/signin')
      } else {
        if (!to.path.startsWith('/auth')) {
          next('/auth/signin')
        } else {
          next()
        }
      }
    })
}

router.beforeEach(AuthFilter)

export default router
