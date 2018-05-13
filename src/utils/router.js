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
  logger.debug('before routing ', to, from)
  Auth.currentAuthenticatedUser()
    .then(user => {
      logger.debug('...has user', user)
      AmplifyStore.commit('setUser', user)
      Auth.currentCredentials()
        .then(credentials => {
          AmplifyStore.commit('setUserId', credentials.identityId)
        })
        .catch(err => logger.debug('get current credentials err', err))
      next()
    })
    .catch(err => {
      logger.debug('...no user', err)
      AmplifyStore.commit('setUser', null)
      if (!to.name.startsWith('auth')) {
        next('/auth/signIn')
      } else {
        next()
      }
    })
}
router.beforeEach(AuthFilter)

export default router
