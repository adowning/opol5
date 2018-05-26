<!--
<template>
<div>
    <button  v-on:click="fetch" >Confirm</button>
  
</div>       
</template>
<script>
// import { API } from "aws-amplify";
// import axios from "axios";
import Vue from "vue";
const qs = require("qs");

export default {
  name: "DevPage",
  computed: {},
  methods: {
    // async fetch({ store, pars }) {
    //   var a = '1xxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxxxxxx'
    //   var b = '21xxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxxxxxx'
    //   var c = '31xxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxx1xxxxxxxxxxxxxxxxxxxxx'
    //   let params = {
    //     "username": "a",
    //     "password": "b",
    //     "userId": "c"
    //   }

    //     let { data } = await axios.post(
    //       // 'https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/gethumanitydata',
    //       'http://localhost:9000/hello',
    //       params
    //     )
    //     // store.dispatch('modules/AuthStore/setHumanityData', data)
    //     // store.dispatch('modules/TimeClockStore/setEmployeeTimeClockStatus', data)
    // }
    fetch() {
      var body = { "username": "asdf" };
      return Vue.http
        .get("http://www.humanity.com/api/v2/timeclocks/status/4041624/0?access_token=40d56be4beb96e0d8163707f5b6fd659e6368a13")
        .then(res => {
          console.log("response is: ", res.body);
          return res.body;
        });
    }
  },
  mounted: {}
};
</script>
-->