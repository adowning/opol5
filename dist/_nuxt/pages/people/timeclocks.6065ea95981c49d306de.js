webpackJsonp([11],{"/qgw":function(t,e,s){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("TimeClocks")};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},HryF:function(t,e,s){"use strict";var o=s("Xxa5"),a=s.n(o),r=s("exGp"),n=s.n(r),i=s("NC/6"),u=s("mtWM"),l=s.n(u),c=s("PJh5"),m=s.n(c);e.a={middleware:"need_auth",asyncData:function(){var t=n()(a.a.mark(function t(e){var s,o,r,n,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),s={start_date:m()().subtract(4,"w").startOf("week").format("YYYY-MM-DD"),end_date:m()().endOf("week").format("YYYY-MM-DD"),userId:e.store.state.modules.AuthStore.humanity_attributes.humanityUserId,token:e.store.state.modules.AuthStore.humanity_attributes.currentToken},e.store.state.modules.TimeClockStore.timeClocks){t.next=8;break}return t.next=5,l.a.post("/api/users/gethumanitytimeclocks",s);case 5:o=t.sent,(r=o.data)&&e.store.dispatch("modules/TimeClockStore/setTimeClocks",r);case 8:if(e.store.state.modules.TimeClockStore.timeClockStatus){t.next=14;break}return t.next=11,l.a.post("/api/users/gethumanitytimeclockstatus",s);case 11:n=t.sent,(i=n.data2)&&e.store.dispatch("modules/TimeClockStore/setEmployeeTimeClockStatus",i);case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),components:{TimeClocks:i.a}}},JKHH:function(t,e,s){"use strict";(function(t){var o=s("Xxa5"),a=s.n(o),r=s("exGp"),n=s.n(r),i=s("PJh5"),u=s.n(i),l=s("mtWM"),c=s.n(l);e.a={name:"timeclocks",data:function(){return{loading:!1,timeSheetID:null,current_length:{},timeFigured:!1,notes:"",st:{},et:{},weeks:[{title:"This Week",amount:0},{title:"Last Week",amount:1},{title:"Two Weeks Ago",amount:2}],week:null,date:u()().format("LLL"),serverPagination:{page:1},headers:[{text:"Length",value:"length",align:"left"},{text:"Clock in",value:"in_time",align:"in_time"},{text:"Clock out",align:"left",value:"out_time"}],items:[]}},computed:{totalTime:function(){var t=u()(this.et)-u()(this.st);return u.a.utc(u.a.duration(t).asMilliseconds()).format("H:mm")},timeClocks:function(){return this.$store.state.modules.TimeClockStore.timeClocks},clockStatus:function(){return this.$store.state.modules.TimeClockStore.timeClockStatus},startEndDates:function(){return{start_date:u()().subtract(this.week,"w").startOf("week").format("YYYY-MM-DD"),end_date:u()().subtract(this.week,"w").endOf("week").format("YYYY-MM-DD")}}},methods:{employeeClockIn:function(){var t=n()(a.a.mark(function t(){var e,s,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.timeFigured=!0,e={userId:this.$store.state.modules.AuthStore.humanity_attributes.humanityUserId,token:this.$store.state.modules.AuthStore.humanity_attributes.currentToken},t.next=4,c.a.post("/api/users/employeeclockin",e);case 4:s=t.sent,o=s.data,console.log(o),this.$store.dispatch("modules/TimeClockStore/setEmployeeTimeClockStatus",o);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),employeeClockOut:function(){var t=n()(a.a.mark(function t(){var e,s,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.timeFigured=!0,e={userId:this.$store.state.modules.AuthStore.humanity_attributes.humanityUserId,token:this.$store.state.modules.AuthStore.humanity_attributes.currentToken},t.next=4,c.a.post("/api/users/employeeclockout",e);case 4:s=t.sent,o=s.data,console.log(o),13===o.status?this.$store.dispatch("modules/TimeClockStore/setEmployeeTimeClockStatus","out"):this.$store.dispatch("modules/TimeClockStore/setEmployeeTimeClockStatus",o);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getClockStatus:function(){var t=n()(a.a.mark(function t(){var e,s,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={userId:this.$store.state.modules.AuthStore.humanity_attributes.humanityUserId,token:this.$store.state.modules.AuthStore.humanity_attributes.currentToken},console.log(e),t.next=4,c.a.post("/api/users/gethumanitytimeclockstatus",e);case 4:s=t.sent,o=s.response,console.log(o),this.$store.dispatch("modules/TimeClockStore/setEmployeeTimeClockStatus",o);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changeWeek:function(t){console.log(this.start_date),console.log(this.end_date),console.log(t),this.week=t,this.items=[]},addNote:function(){this.$http.get(t.env.LAMBDA_API+"/addNote",{params:{id:this.timeSheetID,token:localStorage.getItem("humanityToken")}}).then(function(t){console.log(t)}).catch(function(t){console.error(t)})}}}}).call(e,s("W2nU"))},"NC/6":function(t,e,s){"use strict";var o=s("JKHH"),a=s("h2SA"),r=s("VU/8")(o.a,a.a,!1,null,null,null);r.options.__file="components/timeclocks/index.vue",e.a=r.exports},SsgD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("HryF"),a=s("/qgw"),r=s("VU/8")(o.a,a.a,!1,null,null,null);r.options.__file="pages/people/timeclocks.vue",e.default=r.exports},h2SA:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-card",{staticClass:"px-0"},[s("v-toolbar",{attrs:{color:"primary",dark:""}},[s("v-toolbar-title",[t._v(t._s(t.date))]),s("v-spacer")],1),t.loading?[s("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),t.loading?t._e():[s("v-list",["out"===t.clockStatus.clockStatus?[s("v-layout",{attrs:{row:"","my-4":""}},[s("v-flex",{attrs:{xs4:"","offset-xs1":""}},[s("v-btn",{attrs:{block:"",color:"info",dark:""},nativeOn:{click:function(e){t.employeeClockIn()}}},[t._v("Clock In")])],1)],1)]:t._e(),"in"===t.clockStatus.clockStatus?[s("v-layout",{attrs:{row:"","mt-1":""}},[s("v-flex",{attrs:{xs7:"","offset-xs1":""}},[s("v-text-field",{attrs:{name:"input-1",label:"Note",id:"testing"}})],1),s("v-flex",[s("v-btn",{attrs:{flat:"",color:"info",dark:""},nativeOn:{click:function(e){t.addNote()}}},[t._v("Add Note")])],1)],1),s("v-layout",{attrs:{row:"","mb-4":""}},[s("v-flex",{attrs:{xs4:"","offset-xs1":""}},[s("v-btn",{attrs:{block:"",color:"error",dark:""},nativeOn:{click:function(e){t.employeeClockOut()}}},[t._v("Clock Out")])],1)],1)]:t._e()],2)]],2)],1),s("v-flex",{attrs:{xs8:""}},[s("v-card",{staticClass:"px-0"},[s("v-toolbar",{attrs:{color:"primary",dark:""}},[s("v-toolbar-title",[t._v("Timesheets")]),s("v-spacer"),s("v-menu",{attrs:{"offset-y":""}},[s("v-btn",{attrs:{slot:"activator",outline:"",white:""},slot:"activator"},[t._v("This Week")]),s("v-list",t._l(t.weeks,function(e){return s("v-list-tile",{key:e.title,on:{click:function(s){t.changeWeek(e.amount)}}},[s("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),t.loading?[s("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),t.loading?t._e():s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.timeClocks,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[e.item.out_time.time?s("td",[e.item.current_length.hours>0?s("span",[t._v(t._s(e.item.current_length.hours)+"h, ")]):t._e(),t._v("  "+t._s(e.item.length.mins)+"m")]):s("td",[e.item.current_length.hours>0?s("span",[t._v(t._s(e.item.current_length.hours)+"h,")]):t._e(),t._v(" "+t._s(e.item.current_length.mins)+"m ")]),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.in_time.time)+", "+t._s(e.item.in_time.day))]),e.item.out_time.time?s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.out_time.time)+", "+t._s(e.item.out_time.day))]):s("td",{staticClass:"text-xs-right"},[t._v("Current Clock")])]}}])})],2)],1)],1)],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a}});