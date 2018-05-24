<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex xs4>
				<v-card class="px-0">
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
							<template v-if="clockStatus ==='out'">
								<v-layout row my-4>
									<v-flex xs4 offset-xs1>
                  <v-btn block color="info" dark @click.native="employeeClockIn()">Clock In</v-btn>
									</v-flex>
								</v-layout>
							</template>
							<template v-if="clockStatus === 'in'">
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
				<v-card class="px-0">
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
							<td v-if="props.item.out_time.time">
								<span v-if="props.item.current_length.hours > 0">{{props.item.current_length.hours}}h, </span> {{ props.item.length.mins }}m</td>
							<td v-else>
								<span v-if="props.item.current_length.hours > 0">{{props.item.current_length.hours}}h,</span> {{props.item.current_length.mins}}m </td>

							<td class="text-xs-right">{{ props.item.in_time.time }}, {{props.item.in_time.day}}</td>

							<td class="text-xs-right" v-if="props.item.out_time.time">{{ props.item.out_time.time }}, {{ props.item.out_time.day }}</td>
							<td class="text-xs-right" v-else>Current Clock</td>

						</template>
					</v-data-table>
				</v-card>
        <div v-if="clocksRequestIsPending" />
<ul v-else>
  <li v-for="clock in clocks" :key="clock.id">
    <h2> {{ clock.title }} - {{ clock.release_date }} </h2>
  </li>
</ul>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import moment from "moment";
import { asyncModuleMixin } from "@liqueflies/vuex-async-module";
// import { API, Cache } from 'aws-amplify'
import axios from "axios";
export default {
  name: "clocks",
  mixins: [asyncModuleMixin],
  beforeMount() {
    this.getAsyncClocks({ url: "https://ghibliapi.herokuapp.com/films" });
  },
  data() {
    return {
      loading: false,
      timeSheetID: null,
      current_length: {},
      timeFigured: false,
      delta: 0,
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
      ],
      items: []
    };
  },
  computed: {
    // daysArray() {
    //   var startOfWeek = moment()
    //     .startOf('isoWeek')
    //     .subtract(this.delta, 'week')
    //   var endOfWeek = moment()
    //     .endOf('isoWeek')
    //     .subtract(this.delta, 'week')
    //   var days = []
    //   var day = startOfWeek
    //   while (day <= endOfWeek) {
    //     days.push(day.toDate())
    //     day = day.clone().add(1, 'd')
    //   }
    //   console.log(days)
    // },
    totalTime: function() {
      var diff = moment(this.et) - moment(this.st);
      return moment.utc(moment.duration(diff).asMilliseconds()).format("H:mm");
    },
    timeClocks: function() {
      return this.$store.state.timeclocks.timeclocks;
    },
    clockStatus: function() {
      return this.$store.state.timeclocks.clockStatus;
    },
    filteredTimes() {
      return this.last30DayData;
    },
    daysArray(value) {
      console.log(value);
      var startOfWeek = moment()
        .startOf("isoWeek")
        .minus(this.delta, "week");
      var endOfWeek = moment()
        .endOf("isoWeek")
        .minus(this.delta, "week");

      var days = [];
      var day = startOfWeek;

      while (days <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, "d");
      }
      console.log(days);
      return days;
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
  mounted() {
    this.getTimeClocks();
  },
  methods: {
    async getTimeClocks() {
      // var paramString = this.$store.state.auth.user.attributes[ 'custom:humanityLogin'].split(',')

      // var username = paramString[0]
      // var userId = paramString[2]
      // var token = this.$store.state.auth.htoken
      if (
        !this.$store.state.timeclocks.clocks ||
        !this.$store.state.timeclocks.clockStatus
      ) {
        var dates = {
          start_date: moment()
            .subtract(4, "w")
            .startOf("week")
            .format("YYYY-MM-DD"),
          end_date: moment()
            .endOf("week")
            .format("YYYY-MM-DD")
        };
        this.clocks = this.$store.dispatch("timeclocks/getTimeClocks", dates);
        // this.clockStatus = this.$store.dispatch('timeclocks/getTimeClockStatus')
      }
      // let { data } = await axios.post(
      //   // let { data } = axios.post(
      //   '/api/users/gethumanitytimeclocks',
      //   {
      //     start_date: start_date,
      //     end_date: end_date,
      //     employee: username,
      //     token: token
      //   }
      // )
      //   if (data) {
      //     // store.dispatch('modules/TimeClockStore/setTimeClocks', data)
      //     this.$store.dispatch('timeClocks/setTimeClocks', data)
      //   }
      // }
      // if (!this.$store.state.timeclocks.clockStatus) {
      //   console.log('start')
      //   let data2 = await axios.post(
      //     '/api/users/gethumanitytimeclockstatus',
      //     { userId: userId, token: token }
      //   )
      //   this.clockStatus = this.$store.dispatch('timeclocks/getTimeClockStatus')
      //   console.log(data2)
      //   if (data2) {
      //     console.log(data2)
      //     this.$store.dispatch('timeClocks/setTimeClockStatus', data2.data)
      //   }
      // }
    },
    async employeeClockIn() {
      this.timeFigured = true;
      let params = {
        userId: this.$store.state.auth.humanity_attributes.humanityUserId,
        token: this.$store.state.auth.humanity_attributes.currentToken
      };
      let { data } = await axios.post("/api/users/employeeclockin", params);
      console.log(data);
      this.$store.dispatch("timeClocks/setTimeClockStatus", data);
    },
    async employeeClockOut() {
      this.timeFigured = true;
      let params = {
        userId: this.$store.state.modules.AuthStore.humanity_attributes
          .humanityUserId,
        token: this.$store.state.modules.AuthStore.humanity_attributes
          .currentToken
      };
      let { data } = await axios.post("/api/users/employeeclockout", params);
      console.log(data);
      if (data.status === 13) {
        this.$store.dispatch("timeClocks/setTimeClockStatus", "out");
      } else {
        this.$store.dispatch("timeClocks/setTimeClockStatus", data);
      }
    },
    async getClockStatus() {
      var params = {
        userId: this.$store.state.modules.AuthStore.humanity_attributes
          .humanityUserId,
        token: this.$store.state.modules.AuthStore.humanity_attributes
          .currentToken
      };
      console.log(params);
      let { response } = await axios.post(
        "/api/users/gethumanitytimeclockstatus",
        params
      );
      console.log(response);
      this.$store.dispatch("timeClocks/setTimeClockStatus", response);
    },
    changeWeek(amount) {
      this.delta = amount;
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
