
<template>
  <v-container grid-list-md >
    <v-layout row wrap>
      <v-flex xs4 >
        <v-card  class="px-0">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>{{date}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-subheader v-if="timeFigured">Total Time: {{totalTime}}</v-subheader> -->
          </v-toolbar>
          <template v-if="loading">
            <!-- <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular> -->
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </template>
          <template v-if="!loading">
            <v-list>
              <template v-if="clockStatus.clockStatus ==='out'">
                <v-layout row my-4>
                  <v-flex xs4 offset-xs1>
                    <v-btn block color="info" dark @click.native="employeeClockIn()">Clock In</v-btn>
                  </v-flex>
                </v-layout>
              </template>
              <template v-if="clockStatus.clockStatus === 'in'">
                <v-layout row mt-1>
                  <v-flex xs7 offset-xs1>
                    <v-text-field name="input-1" label="Note" id="testing"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-btn flat color="info" dark @click.native="addNote()">Add Note</v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row mb-4>
                  <v-flex xs4 offset-xs1>
                    <v-btn block color="error" dark @click.native="employeeClockOut()">Clock Out</v-btn>
                  </v-flex>
                </v-layout>
              </template>
            </v-list>
          </template>
        </v-card>
      </v-flex>
      <v-flex xs8>
        <v-card  class="px-0">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Timesheets</v-toolbar-title>
            <v-spacer>
            </v-spacer>
            <v-menu offset-y>
              <v-btn outline white slot="activator">This Week</v-btn>
              <v-list>
                <v-list-tile v-for="week in weeks" :key="week.title" @click="changeWeek(week.amount)">
                  <v-list-tile-title>{{ week.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-toolbar>
          <template v-if="loading">
            <!-- <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular> -->
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </template>
          <v-data-table v-if="!loading" :headers="headers" :items="timeClocks" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
              <td  v-if="props.item.out_time.time"> <span v-if="props.item.current_length.hours > 0">{{props.item.current_length.hours}}h, </span>  {{ props.item.length.mins }}m</td>
              <td  v-else><span v-if="props.item.current_length.hours > 0">{{props.item.current_length.hours}}h,</span> {{props.item.current_length.mins}}m </td>

              <td class="text-xs-right" >{{ props.item.in_time.time }}, {{props.item.in_time.day}}</td>

              <td class="text-xs-right" v-if="props.item.out_time.time">{{ props.item.out_time.time }}, {{ props.item.out_time.day }}</td>
              <td class="text-xs-right" v-else>Current Clock</td>

            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from "moment";
// import { API, Cache } from 'aws-amplify'
// import Vue from "vue";
import axios from "axios";
export default {
  name: "timeclocks",
  data() {
    return {
      loading: false,
      clockStatus: "",
      timeClocks: [],
      timeFigured: false,
      notes: "",
      st: {},
      et: {},
      weeks: [
        { title: "This Week", amount: 0 },
        { title: "Last Week", amount: 1 },
        { title: "Two Weeks Ago", amount: 2 }
      ],
      week: null,
      date: moment().format("LLL"),
      serverPagination: {
        page: 1
      },
      headers: [
        {
          text: "Length",
          value: "length",
          align: "left"
        },
        {
          text: "Clock in",
          value: "in_time",
          align: "in_time"
        },
        {
          text: "Clock out",
          align: "left",
          value: "out_time"
        }
        // {
        //   text: 'Date',
        //   align: 'left',
        //   value: 'model'
        // }
      ],
      items: []
    };
    // this.$store.state.cognitoUser.getUserAttributes
  },
  async mounted() {
    const id = "4041624";
    const clocks = await axios.get(
      `http://www.humanity.com/api/v2/timeclocks/status/${id}/0?access_token=40d56be4beb96e0d8163707f5b6fd659e6368a13`
    );
    this.timeClocks = clocks;
    const sta = await axios.get(
      `https://www.humanity.com/api/v2/timeclocks?access_token=40d56be4beb96e0d8163707f5b6fd659e6368a13`,
      {
        params: {
          employee: id,
          start_date: moment()
            .subtract(4, "w")
            .startOf("week")
        }
      }
    );
    this.clockStatus = sta;
  },
  asyncComputed: {
    totalTime: function() {
      var diff = moment(this.et) - moment(this.st);
      return moment.utc(moment.duration(diff).asMilliseconds()).format("H:mm");
    },
    startEndDates: function() {
      return {
        start_date: moment()
          .subtract(this.week, "w")
          .startOf("week")
          .format("YYYY-MM-DD"), // set to the first day of this week, 12:00 am
        end_date: moment()
          .subtract(this.week, "w")
          .endOf("week")
          .format("YYYY-MM-DD") // set to the first day of this week, 12:00 am
      };
    }
  },
  methods: {
    async employeeClockIn() {
      this.timeFigured = true;
      let params = {
        userId: this.$store.state.modules.AuthStore.humanity_attributes
          .humanityUserId,
        token: this.$store.state.modules.AuthStore.humanity_attributes
          .currentToken
      };
      let { data } = await axios.post(
        "https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/employeeclockin",
        params
      );
      console.log(data);
      this.$store.dispatch(
        "modules/TimeClockStore/setEmployeeTimeClockStatus",
        data
      );
    },
    async employeeClockOut() {
      this.timeFigured = true;
      let params = {
        userId: this.$store.state.modules.AuthStore.humanity_attributes
          .humanityUserId,
        token: this.$store.state.modules.AuthStore.humanity_attributes
          .currentToken
      };
      let { data } = await axios.post(
        "https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/employeeclockout",
        params
      );
      console.log(data);
      if (data.status === 13) {
        this.$store.dispatch(
          "modules/TimeClockStore/setEmployeeTimeClockStatus",
          "out"
        );
      } else {
        this.$store.dispatch(
          "modules/TimeClockStore/setEmployeeTimeClockStatus",
          data
        );
      }
    },

    changeWeek(amount) {
      console.log(this.start_date);
      console.log(this.end_date);
      console.log(amount);
      this.week = amount;
      this.items = [];
      // this.request()
    },
    addNote() {
      this.$http
        // eslint-disable-next-line
        .get(process.env.LAMBDA_API + "/addNote", {
          params: {
            id: this.timeSheetID,
            token: localStorage.getItem("humanityToken")
          }
        })
        .then(response => {
          console.log(response);
          // this.clockStatus = response.data.data
          // this.loading = false
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
