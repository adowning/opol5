webpackJsonp([1],{"6jcu":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.$_isAuthenticated?n("v-navigation-drawer",{staticClass:"blue-grey darken-4",staticStyle:{overflow:"hidden"},attrs:{id:"mainNav","mini-variant":t.miniVariant,"mobile-break-point":"964",width:"250",dark:"",persistent:"",fixed:"",app:""},model:{value:t.leftDrawer,callback:function(i){t.leftDrawer=i},expression:"leftDrawer"}},[n("v-toolbar",{staticClass:"transparent",attrs:{flat:"",dense:""}},[n("v-list",{staticClass:"pa-0",class:{"list-border-bottom":t.miniVariant}},[n("v-list-tile",[t.miniVariant?t._e():n("v-list-tile-action",[n("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:e("7Ogj")}})]),t.miniVariant?t._e():n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{color:"#41B883"}},[n("h3",[t._v("Andrews App  ")])])],1),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1)],1)],1)],1)],1),n("v-divider"),n("v-tooltip",{attrs:{disabled:!t.miniVariant,right:"",dense:""}},[n("v-toolbar",{staticClass:"transparent",attrs:{slot:"activator",flat:"",dense:""},slot:"activator"},[n("v-list",{staticClass:"pa-0",class:{"list-border-bottom":t.miniVariant}},[n("v-list-tile",{attrs:{to:"/home",exact:""}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Project Overview")])],1)],1)],1)],1),n("span",[t._v("Project Overview")])],1),n("v-divider"),n("v-list",{class:{"list-border-bottom":t.miniVariant},attrs:{subheader:""}},[n("v-subheader",[t._v("ANALYTICS")]),t._l(t.middleItems,function(i){return n("div",{key:i.id},[n("v-tooltip",{attrs:{disabled:!t.miniVariant,right:""}},[n("v-list-tile",{key:i.icon,attrs:{slot:"activator",to:i.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(i.title)}})],1)],1),n("span",{domProps:{textContent:t._s(i.title)}})],1)],1)})],2),n("v-divider"),n("v-list",{attrs:{subheader:""}},[n("v-subheader",[t._v("ASSETS")]),t._l(t.lastItems,function(i){return n("div",{key:i.id},[n("v-tooltip",{attrs:{disabled:!t.miniVariant,right:""}},[n("v-list-tile",{key:i.icon,attrs:{slot:"activator",to:i.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(i.title)}})],1)],1),n("span",{domProps:{textContent:t._s(i.title)}})],1)],1)})],2),n("v-divider"),n("v-list",{attrs:{subheader:""}},[n("v-subheader",[t._v("PEOPLE")]),t._l(t.topItems,function(i){return n("div",{key:i.id},[n("v-tooltip",{attrs:{disabled:!t.miniVariant,right:""}},[n("v-list-tile",{key:i.icon,attrs:{slot:"activator",to:i.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(i.title)}})],1)],1),n("span",{domProps:{textContent:t._s(i.title)}})],1)],1)})],2),n("v-divider"),n("v-list",{attrs:{subheader:""}},[n("v-subheader",[t._v("UTILITIES")]),t._l(t.utilitiesItems,function(i){return n("div",{key:i.id},[n("v-tooltip",{attrs:{disabled:!t.miniVariant,right:""}},[n("v-list-tile",{key:i.icon,attrs:{slot:"activator",to:i.link,exact:""},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(i.title)}})],1)],1),n("span",{domProps:{textContent:t._s(i.title)}})],1)],1)})],2)],1):t._e()};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},"7Ogj":function(t,i,e){t.exports=e.p+"img/logo.edd341f.png"},DLCH:function(t,i,e){"use strict";var n=function(){var t=this.$createElement,i=this._self._c||t;return i("v-app",[this.$_isAuthenticated?i("layout",{attrs:{app:""}}):this._e(),i("v-content",[i("v-container",{attrs:{fluid:""}},[i("nuxt")],1),i("notifications",{attrs:{group:"auth"}})],1),i("coms-panel",{attrs:{"right-drawer":"false"}}),this.$_isAuthenticated?i("a-footer",{attrs:{app:""}}):this._e()],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},DrwT:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-navigation-drawer",{attrs:{"v-model":t.rightDrawer,temporary:"",fixed:"",app:""}},[e("v-toolbar-title",[t._v("Notifications")]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(i){i.stopPropagation(),t.rightDrawer=!1}}},[e("v-icon",[t._v("close")])],1),e("v-list",{attrs:{subheader:"",dense:""}},[e("v-subheader",[t._v("All notifications")]),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("person_add")])],1),e("v-list-tile-title",[t._v("\n        12 new users registered\n      ")])],1),e("v-divider"),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",[t._v("data_usage")])],1),e("v-list-tile-title",[t._v("\n        DB overloaded 80%\n      ")])],1)],1)],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},EQNa:function(t,i,e){"use strict";var n=e("t5Pl"),a=e("DrwT"),s=e("VU/8")(n.a,a.a,!1,null,null,null);s.options.__file="components/ComsPanel.vue",i.a=s.exports},FOsk:function(t,i,e){"use strict";var n=e("Qj99"),a=e("EQNa");i.a={components:{"a-footer":n.a,"coms-panel":a.a},data:function(){return{leftDrawer:!0,topItems:[{icon:"supervisor_account",title:"Employees",link:"/directory"},{icon:"supervisor_account",title:"Applicants",link:""}],middleItems:[{icon:"dashboard",title:"Dashboard",link:""},{icon:"local_shipping",title:"Live View",link:"/liveview"},{icon:"book",title:"Schedule",link:"/schedule"}],lastItems:[{icon:"android",title:"Hardware",link:"/assets/Hardware"},{icon:"invert_colors",title:"Consumables",link:"/consumables"},{icon:"build",title:"Maintenance",link:"/maintenance"}],utilitiesItems:[{icon:"list",title:"Logs",link:""},{icon:"work",title:"Documents",link:"/documents"},{icon:"comment",title:"Notifications",link:""}],miniVariant:!1}},computed:{}}},FXJH:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".list__tile{height:34px}",""])},"Kde+":function(t,i,e){"use strict";var n=e("SRD8"),a=e("Qj99"),s=e("EQNa");i.a={components:{layout:n.a,"a-footer":a.a,"coms-panel":s.a},data:function(){return{}}}},Ma2J:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Kde+"),a=e("DLCH"),s=e("VU/8")(n.a,a.a,!1,null,null,null);s.options.__file="layouts/default.vue",i.default=s.exports},Qj99:function(t,i,e){"use strict";var n=e("ULXZ"),a=e("h/Gw"),s=!1;var o=function(t){s||e("aRog")},r=e("VU/8")(n.a,a.a,!1,o,null,null);r.options.__file="components/AFooter.vue",i.a=r.exports},SRD8:function(t,i,e){"use strict";var n=e("FOsk"),a=e("6jcu"),s=!1;var o=function(t){s||e("WuPc")},r=e("VU/8")(n.a,a.a,!1,o,null,null);r.options.__file="components/Layout.vue",i.a=r.exports},ULXZ:function(t,i,e){"use strict";var n=e("Xxa5"),a=e.n(n),s=e("exGp"),o=e.n(s),r=e("cPd9");e.n(r);i.a={name:"AFooter",data:function(){return{rightDrawer:!1,src:"../assets/logo.png"}},computed:{},watch:{},mounted:function(){this.getPhoto()},methods:{signOut:function(){var t=o()(a.a.mark(function t(i){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.Auth.signOut();case 3:e=t.sent,console.log(e),this.$store.dispatch("modules/AuthStore/logOut",null),this.$router.replace("/"),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),this.setError(t.t0),console.log(t.t0),this.fireAuthNotify(this.error);case 14:case"end":return t.stop()}},t,this,[[0,9]])}));return function(i){return t.apply(this,arguments)}}(),setError:function(t){this.error=t.message||t},getPhoto:function(){}}}},WuPc:function(t,i,e){var n=e("FXJH");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("14515692",n,!1,{sourceMap:!1})},aRog:function(t,i,e){var n=e("u/0+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("ba17710e",n,!1,{sourceMap:!1})},"h/Gw":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-footer",{attrs:{flat:"",dense:"",app:""}},[e("v-toolbar",{staticStyle:{"max-height":"40px"},attrs:{color:"primary",dense:"",dark:""}},[e("v-spacer"),e("v-badge",{attrs:{color:"red",overlap:""}},[e("i",{staticClass:"material-icons orange600"},[t._v("dialpad")])]),e("v-spacer"),e("v-btn",{staticClass:"pr-3"},[e("v-badge",{attrs:{color:"red",overlap:""}},[e("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("2")]),e("i",{staticClass:"material-icons orange600"},[t._v("chat")])])],1),e("v-menu",{attrs:{bottom:"",left:""}},[e("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[e("v-avatar",{staticClass:"white"},[e("v-icon",{attrs:{color:"primary"}},[t._v("person")])],1)],1),e("v-list",{staticClass:"pa-0"},[e("v-list-tile",{attrs:{to:"/people/timeclocks"}},[e("v-list-tile-action",[e("v-icon",[t._v("person")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Time Clock")])],1)],1),e("v-divider"),e("v-list-tile",{attrs:{to:"/people/Profile"}},[e("v-list-tile-action",[e("v-icon",[t._v("person")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Profile")])],1)],1),e("v-divider"),e("v-list-tile",{key:"lock_open",on:{click:t.signOut}},[e("v-list-tile-action",[e("v-icon",[t._v("lock_open")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Logout")])],1)],1)],1)],1)],1)],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};i.a=a},t5Pl:function(t,i,e){"use strict";i.a={name:"ComsPanel",props:{rightDrawer:{type:String,required:!0}},data:function(){return{}}}},"u/0+":function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".v-footer{max-height:20px}.material-icons.orange600{font-size:38px}",""])}});