<template>
   <v-app>
      <v-navigation-drawer v-if="user" id="mainNav" style="overflow: hidden;" :mini-variant="miniVariant" v-model="leftDrawer" mobile-break-point="964" width="250" class="blue-grey darken-4" dark persistent fixed app>
      <v-toolbar flat class="transparent" dense>
          <v-list :class="{'list-border-bottom' : miniVariant}" class="pa-0">
            <v-list-tile>
              <v-list-tile-action v-if="!miniVariant">
                <img src="../assets/logo.png" style="width:30px; height:30px">

              </v-list-tile-action>
              <v-list-tile-content v-if="!miniVariant">
                <v-list-tile-title style="color: #41B883">
                  <h3>Andrews App  </h3>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.stop="miniVariant = !miniVariant">
                  <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar> 
        <v-divider/>

        <v-tooltip :disabled="!miniVariant" right dense>
          <v-toolbar slot="activator" flat class="transparent" dense>
            <v-list :class="{'list-border-bottom' : miniVariant}" class="pa-0">

              <v-list-tile to="/home" exact>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Project Overview</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <span>Project Overview</span>
        </v-tooltip>
        <v-divider/>

        <v-list :class="{'list-border-bottom' : miniVariant}" subheader>
          <v-subheader>ANALYTICS</v-subheader>
          <div v-for="item in middleItems" :key="item.id">
            <v-tooltip :disabled="!miniVariant" right>
              <v-list-tile slot="activator" :key="item.icon" :to="item.link" exact>
                <v-list-tile-action>
                  <v-icon v-html="item.icon" />
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title" />
                </v-list-tile-content>
              </v-list-tile>
              <span v-text="item.title" />
            </v-tooltip>
          </div>
        </v-list>
        <v-divider/>

        <v-list subheader>
          <v-subheader>ASSETS</v-subheader>
          <div v-for="item in lastItems" :key="item.id">
            <v-tooltip :disabled="!miniVariant" right>
              <v-list-tile slot="activator" :key="item.icon" :to="item.link" exact>
                <v-list-tile-action>
                  <v-icon v-html="item.icon" />
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title" />
                </v-list-tile-content>
              </v-list-tile>
              <span v-text="item.title" />
            </v-tooltip>
          </div>
        </v-list>
        <v-divider/>
        <v-list subheader>
          <v-subheader>PEOPLE</v-subheader>
          <div v-for="item in topItems" :key="item.id">
            <v-tooltip :disabled="!miniVariant" right>
              <v-list-tile slot="activator" :key="item.icon" :to="item.link" exact>
                <v-list-tile-action>
                  <v-icon v-html="item.icon" />
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title" />
                </v-list-tile-content>
              </v-list-tile>
              <span v-text="item.title" />
            </v-tooltip>
          </div>
        </v-list>
        <v-divider/>
        <v-list subheader>
          <v-subheader>UTILITIES</v-subheader>
          <div v-for="item in utilitiesItems" :key="item.id">
            <v-tooltip :disabled="!miniVariant" right>
              <v-list-tile slot="activator" :key="item.icon" :to="item.link" exact>
                <v-list-tile-action>
                  <v-icon v-html="item.icon" />
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.title" />
                </v-list-tile-content>
              </v-list-tile>
              <span v-text="item.title" />
            </v-tooltip>
          </div>
        </v-list>
      </v-navigation-drawer> 
        <v-content>
            <router-view />
        </v-content>
        <coms-panel/>
        <a-footer v-if="user" app/>
           </v-app>
</template>

<script>
// import { Storage } from "aws-amplify";
import AFooter from "./AFooter";
import ComsPanel from "./ComsPanel";
import store from "../utils/store";

export default {
  components: {
    "a-footer": AFooter,
    "coms-panel": ComsPanel
  },
  data: () => ({
    leftDrawer: true,
    rightDrawer: true,
    topItems: [
      {
        icon: "supervisor_account",
        title: "Employees",
        link: "/directory"
      },
      {
        icon: "supervisor_account",
        title: "Applicants",
        link: ""
      }
    ],
    middleItems: [
      {
        icon: "dashboard",
        title: "Dashboard",
        link: ""
      },
      {
        icon: "local_shipping",
        title: "Live View",
        link: "/liveview"
      },
      {
        icon: "book",
        title: "Schedule",
        link: "/schedule"
      }
    ],
    lastItems: [
      {
        icon: "android",
        title: "Hardware",
        link: "/hardware"
      },
      {
        icon: "invert_colors",
        title: "Consumables",
        link: "/consumables"
      },
      {
        icon: "build",
        title: "Maintenance",
        link: "/maintenance"
      }
    ],
    utilitiesItems: [
      {
        icon: "list",
        title: "Logs",
        link: ""
      },
      {
        icon: "work",
        title: "Documents",
        link: "/documents"
      },
      {
        icon: "comment",
        title: "Notifications",
        link: ""
      }
    ],
    miniVariant: false

    // tabs: null,
    // tabsItems: [
    //   { id: 1, title: "Indicators", link: "indicators" },
    //   { id: 2, title: "Backup", link: "backup" },
    //   { id: 3, title: "Logs", link: "logs" }
    // ]
  }),
  computed: {
    user: function() {
      return store.state.user;
    },
    userId: function() {
      return store.state.userId;
    }
  }
};
</script>
<style>
.list__tile {
  height: 34px;
}
</style>
