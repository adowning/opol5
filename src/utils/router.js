import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import SignIn from "./views/SignIn.vue";
import Profile from "./views/Profile.vue";
import TimeClocks from "./views/TimeClocks.vue";
import { Auth, Logger } from "aws-amplify";
import store from "./utils/store";
const logger = new Logger("AuthRouter");
//eslint-disable next-line
const Home = () => import("./views/Home.vue");

Vue.use(Router);

// export default new Router({
const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
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
    }
  ]
});

const AuthFilter = (to, from, next) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      // logger.info("...has user", user);
      store.commit("setUser", user);
      Auth.currentCredentials()
        .then(credentials => {
          store.commit("setUserId", credentials.identityId);
        })
        .catch(err => logger.error("get current credentials err", err));
      next();
    })
    .catch(err => {
      logger.warn("...no user", err);
      logger.warn(to.name);
      store.commit("setUser", null);
      if (!to.name) {
        next("/signin");
      } else {
        if (!to.name.startsWith("SignIn")) {
          next("/signin");
        } else {
          next();
        }
      }
    });
};

router.beforeEach(AuthFilter);

export default router;
