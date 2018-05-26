import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./vuex/store";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import FourOhFour from "./views/404";
import Profile from "./views/people/profile";
import TimeClocks from "./views/people/timeclocks";
import DevPage from "./DevPage";

import { Auth, Logger } from "aws-amplify";
const logger = new Logger("Router");

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/auth/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/auth/signout",
      name: "SignOut",
      component: SignOut
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/timeclocks",
      name: "TimeClocks",
      component: TimeClocks
    },
    {
      path: "/devpage",
      name: "DevPage",
      component: DevPage
    },
    {
      path: "*",
      name: "404",
      component: FourOhFour
    }
  ]
});

const AuthFilter = (to, from, next) => {
  logger.info("before routing ", to, from);
  Auth.currentAuthenticatedUser()
    .then(user => {
      logger.debug("...has user", user);
      // store.commit('setUser', user)
      store.dispatch("auth/setUser", user);
      Auth.currentCredentials()
        .then(credentials => {
          store.dispatch("auth/setUserId", credentials.identityId);
        })
        .catch(err => logger.warn("get current credentials err", err));
      next();
    })
    .catch(err => {
      logger.warn("...no user", err);
      // store.commit('setUser', null)
      store.dispatch("auth/setUser", null);
      if (!to.path.startsWith("/auth")) {
        next("/auth/signIn");
      } else {
        next();
      }
    });
};

router.beforeEach(AuthFilter);

export default router;
