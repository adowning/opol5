webpackJsonp([5],{"0crH":function(t,e,a){"use strict";var s=a("e+mk");e.a={data:function(){return{}},components:{Hardware:s.a}}},"0k52":function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Hardware")],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},KZJn:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},MXs8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("0crH"),n=a("0k52"),i=a("VU/8")(s.a,n.a,!1,null,null,null);i.options.__file="pages/assets/Hardware.vue",e.default=i.exports},XQgI:function(t,e,a){var s=a("KZJn");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("5d856df3",s,!1,{sourceMap:!1})},YBFk:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-tabs",{staticClass:"pa-3",attrs:{color:"accent",dark:"","slider-color":"primary"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-tab",{staticClass:"mr-4",attrs:{href:"#tab-1"}},[t._v("\n      Manual\n      "),a("v-icon",[t._v("build")])],1),a("v-tab",{attrs:{href:"#tab-2"}},[t._v("\n      Scan\n      "),a("v-icon",[t._v("line_style")])],1),a("v-tab-item",{attrs:{id:"tab-1"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,pagination:t.serverPagination,"hide-actions":""},on:{"update:pagination":function(e){t.serverPagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id)+"\n          ")]),a("td",[t._v(t._s(e.item.asset_tag))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.category))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.model))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.status_label))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.assigned_to))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.location))]),a("td",{staticClass:"justify-center layout px-0"},[e.item.assigned_to?t._e():a("v-btn",{attrs:{color:"primary",small:"",outline:""},on:{click:function(a){t.checkOut(e.item)}}},[t._v("CheckOut\n            ")]),e.item.assigned_to?a("v-btn",{attrs:{color:"warning",small:"",outline:""},on:{click:function(a){t.checkIn(e.item)}}},[t._v("\n              CheckIn\n            ")]):t._e()],1)]}}])},[a("template",{slot:"no-data"},[a("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{size:100,indeterminate:"",color:"primary"}})],1)],2),a("div",{staticClass:"text-xs-center pt-2"},[a("v-pagination",{attrs:{length:t.pages},model:{value:t.serverPagination.page,callback:function(e){t.$set(t.serverPagination,"page",e)},expression:"serverPagination.page"}})],1)],1),a("v-tab-item",{attrs:{id:"tab-2"}},[a("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{size:100,indeterminate:"",color:"primary"}}),a("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{row:""}},[a("v-flex",{attrs:{xs6:"",1:""}},[a("v-card")],1),a("v-flex",{attrs:{xs6:"",2:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{items:t.qrItems,headers:t.headers,"hide-headers":"","hide-actions":"","item-key":"id"},scopedSlots:t._u([{key:"items",fn:function(e){return[e.item.search?a("tr",{attrs:{active:e.selected},on:{click:function(t){e.selected=!e.selected}}},[a("td",[a("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"props.selected"}})],1),a("td",[t._v(t._s(e.item.asset_tag))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.model))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.location))])]):t._e()]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("template",{slot:"no-data"},[t._v("\n              Use QR scanner to select items\n            ")])],2),a("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("Submit")])],1)],1),a("v-alert",{attrs:{value:t.alert,type:"warning",transition:"scale-transition"}},[t._v("\n        "+t._s(t.alert)+"\n      ")])],1)],1)],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},"e+mk":function(t,e,a){"use strict";var s=a("kg42"),n=a("YBFk"),i=!1;var r=function(t){i||a("XQgI")},o=a("VU/8")(s.a,n.a,!1,r,"data-v-6fca6089",null);o.options.__file="components/assets/hardware.vue",e.a=o.exports},kg42:function(t,e,a){"use strict";(function(t){var s=a("Xxa5"),n=a.n(s),i=a("BO1k"),r=a.n(i),o=a("exGp"),c=a.n(o);e.a={data:function(){return{active:null,assets:[],alert:"",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",loading:!1,selectedTab:"",overlay:"",multipleSelect:[],userId:{},selected:[],search:"found",idList:[],checkOutList:[],qrItems:[],serverPagination:{page:1,rowsPerPage:50},headers:[{text:"id",value:"id",align:"left"},{text:"Asset",value:"asset_tag",align:"left"},{text:"Category",align:"left",value:"category"},{text:"Model",align:"left",value:"model"},{text:"Status",align:"left",value:"status_label"},{text:"Assigned To",align:"left",value:"assigned_to"},{text:"Location",align:"left",value:"location"},{text:"Actions",sortable:!1,value:"name"},{visible:!1,sortable:!1,value:"checky"}],items:[]}},computed:{pages:function(){if(this.assets){var t=this.serverPagination,e=this.assets.total;return t.totalItems=e,null==this.serverPagination.totalItems?0:Math.ceil(this.assets.total/50)}}},watch:{assets:function(t){console.log("here"),console.log(t)}},mounted:function(){this.getAssets()},methods:{getAssets:function(){var t=c()(n.a.mark(function t(){var e,a,s,i,o,c,l;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(this.assets),t.next=3,this.$axios.$get("/api/assets/hardware");case 3:for(e=t.sent,this.assets=e,console.log(e),a=!0,s=!1,i=void 0,t.prev=9,o=r()(e.rows);!(a=(c=o.next()).done);a=!0)(l=c.value).model=l.model.name,l.category=l.category.name,l.location?l.location=l.location.name:l.location="needs location",l.status_label&&(l.status_label=l.status_label.name),l.assigned_to&&(l.assigned_to=l.assigned_to.name),l.checky="xxx",this.items.push(l);t.next=17;break;case 13:t.prev=13,t.t0=t.catch(9),s=!0,i=t.t0;case 17:t.prev=17,t.prev=18,!a&&o.return&&o.return();case 20:if(t.prev=20,!s){t.next=23;break}throw i;case 23:return t.finish(20);case 24:return t.finish(17);case 25:case"end":return t.stop()}},t,this,[[9,13,17,25],[18,,20,24]])}));return function(){return t.apply(this,arguments)}}(),checkedOutList:function(){return console.log("hi"),[]},submit:function(){var t=c()(n.a.mark(function t(){var e,a,s,i,o,c,l;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(this.selected),e={},a=!0,s=!1,i=void 0,t.prev=5,o=r()(this.selected);case 7:if(a=(c=o.next()).done){t.next=16;break}return l=c.value,t.next=11,this.checkOut(l.id,null);case 11:e=t.sent,console.log(e);case 13:a=!0,t.next=7;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(5),s=!0,i=t.t0;case 22:t.prev=22,t.prev=23,!a&&o.return&&o.return();case 25:if(t.prev=25,!s){t.next=28;break}throw i;case 28:return t.finish(25);case 29:return t.finish(22);case 30:case"end":return t.stop()}},t,this,[[5,18,22,30],[23,,25,29]])}));return function(){return t.apply(this,arguments)}}(),remove:function(){console.log(this.selected)},next:function(){var t=parseInt(this.active);this.active=(t<2?t+1:0).toString()},selectThirdTab:function(){this.selectedTab="tab-3"},onDecode:function(t){this.updateCheckOutList(t)},onLocate:function(t){console.log(t)},updateCheckOutList:function(t){if(this.alert="",!this.loading){var e=t.split("hardware/")[1],a=this.items.find(function(t){return t.id===e});if(console.log(a),a&&"undefined"!==a){if(a.assigned_to)return console.log("problem "),this.alert="Asset already checked out",e=null,void(a=null);if(-1!==this.idList.indexOf(e))return this.alert="Item already added",e=null,void(a=null);e&&-1===this.idList.indexOf(e)&&(this.idList.push(e),console.log(this.idList),this.request({pagination:this.serverPagination,filter:this.idList,list:"qr"}))}}},onInit:function(){var t=c()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,e;case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log("dookie"),"NotAllowedError"===t.t0.name||"NotFoundError"===t.t0.name||"NotSupportedError"===t.t0.name||"NotReadableError"===t.t0.name||t.t0.name;case 10:return t.prev=10,this.loading=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,6,10,13]])}));return function(e){return t.apply(this,arguments)}}(),checkIn:function(){var t=c()(n.a.mark(function t(e){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,this.$axios.$post("/api/assets/hardware/"+e.id+"/checkin",{assigned_asset:e.id});case 3:a=t.sent,console.log(a);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),checkOut:function(){var t=c()(n.a.mark(function t(e){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("here"),console.log(e),t.next=4,this.$axios.$post("/api/assets/hardware/"+e.id+"/checkout",{assigned_asset:e.id,assigned_user:"4041624",checkout_to_type:"user"});case 4:a=t.sent,console.log(a);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),request:function(e){var a=this,s=e.pagination,n=e.filter,i=e.list;this.loading=!0,"qr"===i&&(this.qrItems=[]),"main"===i&&(this.items=[]),"both"===i&&(this.items=[],this.qrItems=[]),console.log(t.env.LAMBDA_API),this.$http.get(t.env.LAMBDA_API+"/getHardware").then(function(t){a.serverPagination=s,a.serverPagination.rowsNumber=t.data.total;var e=!0,i=!1,o=void 0;try{for(var c,l=r()(t.data.rows);!(e=(c=l.next()).done);e=!0){var u=c.value;if(u.model=u.model.name,u.category=u.category.name,u.location?u.location=u.location.name:u.location="needs location",u.status_label&&(u.status_label=u.status_label.name),u.assigned_to&&(u.assigned_to=u.assigned_to.name),u.checky="xxx",n){var d=!0,v=!1,h=void 0;try{for(var m,p=r()(n);!(d=(m=p.next()).done);d=!0){m.value===u.id&&(console.log("qritems"),u.search="found",a.qrItems.push(u))}}catch(t){v=!0,h=t}finally{try{!d&&p.return&&p.return()}finally{if(v)throw h}}}else a.items.push(u)}}catch(t){i=!0,o=t}finally{try{!e&&l.return&&l.return()}finally{if(i)throw o}}a.loading=!1}).catch(function(t){console.log("sugar tits ",t),a.loading=!1})}}}}).call(e,a("W2nU"))}});