(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["room"],{"24ec":function(t,e,a){"use strict";var o=a("96cb"),s=a.n(o);s.a},"3ab1":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"",lg9:""}},[a("app-chat-box")],1),a("v-flex",{attrs:{xs12:"",sm4:"",lg3:""}},[a("app-game-info-box"),a("app-people-in-room-list")],1)],1)],1)},s=[],n=a("dce0"),r=a("d8c9"),i=a("e26a"),c={data:function(){return{}},computed:{},methods:{},components:{"app-chat-box":i["a"],"app-people-in-room-list":n["a"],"app-game-info-box":r["a"]}},l=c,u=(a("90f0"),a("2877")),d=a("6544"),v=a.n(d),f=a("a523"),m=a("0e8f"),p=a("a722"),b=Object(u["a"])(l,o,s,!1,null,"d8ca50ee",null);b.options.__file="Room.vue";e["default"]=b.exports;v()(b,{VContainer:f["a"],VFlex:m["a"],VLayout:p["a"]})},4321:function(t,e,a){},"78a9":function(t,e,a){},7924:function(t,e,a){},"8f58":function(t,e,a){},"90f0":function(t,e,a){"use strict";var o=a("7924"),s=a.n(o);s.a},"96cb":function(t,e,a){},a82d:function(t,e,a){"use strict";var o=a("78a9"),s=a.n(o);s.a},b14e:function(t,e,a){"use strict";var o=a("8f58"),s=a.n(o);s.a},d8c9:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"game-card"},[a("v-toolbar",{attrs:{dense:"",color:"white"}},[a("v-toolbar-title",{staticClass:"game-card-title"},[t._v("Game Info")])],1),a("v-card-text",[t._v("\n        Game: "+t._s(t.room.game)+"\n        "),a("br"),t._v("Some Option\n        "),a("br"),t._v("Some other option\n        "),a("br"),t._v("Last option\n      ")]),a("v-card-actions",[t.isHost?a("div",{staticStyle:{width:"100%"}},[a("v-btn",{attrs:{block:"",color:"success",disabled:!t.isAllReady},on:{click:function(e){t.startGame()}}},[t._v("Start Game\n            "),a("v-spacer"),a("v-icon",[t._v("done")])],1)],1):a("div",{staticStyle:{width:"100%"}},[t.ready?a("v-btn",{attrs:{flat:"",block:"",color:"success"},on:{click:function(e){t.setReady(!1)}}},[t._v("Ready!\n            "),a("v-spacer"),a("v-icon",[t._v("done")])],1):a("v-btn",{attrs:{block:"",color:"info"},on:{click:function(e){t.setReady(!0)}}},[t._v("Ready?\n            "),a("v-spacer"),a("v-icon",[t._v("help_outline")])],1)],1)])],1)],1)],1)},s=[],n=(a("404e"),{data:function(){return{users:[],ready:!1,options:{board:[6,7]},isClicked:!1}},methods:{setReady:function(t){var e=this;this.isClicked||(this.isClicked=!0,this.$socket.emit("SET_READY",t,function(t){e.ready=t}),setTimeout(function(){e.isClicked=!1},1e3))},startGame:function(){this.$socket.emit("START_GAME",this.options)}},computed:{room:function(){return this.$store.getters.room},isHost:function(){return this.$store.getters.isHost},isAllReady:function(){return this.$store.getters.isAllReady}},created:function(){this.isAllReady=!1}}),r=n,i=(a("eb07"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),v=a("99d9"),f=a("0e8f"),m=a("132d"),p=a("a722"),b=a("9910"),_=a("71d9"),h=a("2a7f"),g=Object(i["a"])(r,o,s,!1,null,"5a58e6cc",null);g.options.__file="GameInfoBox.vue";e["a"]=g.exports;l()(g,{VBtn:u["a"],VCard:d["a"],VCardActions:v["a"],VCardText:v["b"],VFlex:f["a"],VIcon:m["a"],VLayout:p["a"],VSpacer:b["a"],VToolbar:_["a"],VToolbarTitle:h["a"]})},dce0:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"in-room-card"},[a("v-toolbar",{attrs:{dense:"",color:"white"}},[a("v-toolbar-title",[t._v("People in Room: ("+t._s(t.room.clients.length)+"/"+t._s(t.room.size)+")")])],1),a("v-card-text",{staticClass:"in-room-card-text"},t._l(t.room.clients,function(e,o){return a("div",{key:o,staticClass:"users"},[a("p",{staticClass:"new-user",style:{color:e.color}},[a("span",{staticClass:"font-weight-bold",style:{color:e.color}},[t._v(t._s(e.name)+" ")]),t.isHost&&!e.isHost?a("v-icon",{staticClass:"in-room-icon",attrs:{small:"",color:"red darken-2"},on:{click:function(a){t.kick(e.id)}}},[t._v("block")]):t._e(),e.isHost?a("v-icon",{staticClass:"in-room-icon",attrs:{small:"",color:"orange darken-1"}},[t._v("gamepad")]):t._e(),e.ready?a("v-icon",{staticClass:"ready-icon",attrs:{small:"",color:"success"}},[t._v("done")]):t._e()],1)])}),0)],1)],1)],1)},s=[],n=a("2909"),r=(a("404e"),{data:function(){return{users:[]}},computed:{room:function(){return this.$store.getters.room},last5Users:function(){return this.$store.getters.last5Users},isHost:function(){return this.$store.getters.isHost}},methods:{kick:function(t){console.log("kick"),console.log(t),this.$socket.emit("KICK",t,function(t){})}},mounted:function(){var t=this;this.$socket.on("NEW_USER",function(e){t.users=[].concat(Object(n["a"])(t.users),[e])})}}),i=r,c=(a("b14e"),a("2877")),l=a("6544"),u=a.n(l),d=a("b0af"),v=a("99d9"),f=a("0e8f"),m=a("132d"),p=a("a722"),b=a("71d9"),_=a("2a7f"),h=Object(c["a"])(i,o,s,!1,null,"03dc2bb2",null);h.options.__file="PeopleInRoomList.vue";e["a"]=h.exports;u()(h,{VCard:d["a"],VCardText:v["b"],VFlex:f["a"],VIcon:m["a"],VLayout:p["a"],VToolbar:b["a"],VToolbarTitle:_["a"]})},e26a:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-toolbar",{attrs:{dense:"",color:"primary",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.room.readableName))]),a("v-spacer"),a("app-leave-button")],1),a("div",[a("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0},expression:"{always: false, smooth: true}"}],staticClass:"messages"},t._l(t.messages,function(e,o){return a("li",{key:o,staticClass:"message"},["server"!=e.type?a("span",{staticClass:"font-weight-bold",style:{color:e.color}},[t._v(t._s(e.name)+":")]):t._e(),t._v("\n          "+t._s(e.message)+"\n        ")])}),0)]),a("v-form",{staticClass:"chatMessage-form"},[a("v-text-field",{staticClass:"myInput mb-0",attrs:{id:"chatInput","append-icon":"send",box:"",label:"type here",type:"text"},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null},"click:append":t.submit},model:{value:t.chatMessage,callback:function(e){t.chatMessage=e},expression:"chatMessage"}})],1)],1)],1)},s=[],n=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{color:"error",fab:"",small:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("exit_to_app")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Do you really want to leave?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("No")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.yes}},[t._v("Yes")])],1)],1)],1)],1)],1)}),r=[],i={data:function(){return{dialog:!1}},methods:{yes:function(){var t=this;this.$socket.emit("LEAVE_ROOM",function(){t.$store.commit("clearMessages"),t.$store.commit("clearGame"),t.dialog=!1,t.$router.push("/")})}}},c=i,l=(a("24ec"),a("2877")),u=a("6544"),d=a.n(u),v=a("8336"),f=a("b0af"),m=a("99d9"),p=a("12b2"),b=a("169a"),_=a("132d"),h=a("a722"),g=a("9910"),y=Object(l["a"])(c,n,r,!1,null,"2f4aa181",null);y.options.__file="LeaveButton.vue";var k=y.exports;d()(y,{VBtn:v["a"],VCard:f["a"],VCardActions:m["a"],VCardTitle:p["a"],VDialog:b["a"],VIcon:_["a"],VLayout:h["a"],VSpacer:g["a"]});var x={data:function(){return{chatMessage:""}},computed:{username:function(){return this.$store.getters.name},messages:function(){return this.$store.getters.messages},room:function(){return this.$store.getters.room}},methods:{submit:function(t){t.preventDefault(),this.$socket.emit("SEND_MESSAGE",{name:this.username,message:this.chatMessage}),this.chatMessage=""}},components:{"app-leave-button":k}},V=x,C=(a("a82d"),a("0e8f")),w=a("4bd4"),$=a("2677"),T=a("71d9"),E=a("2a7f"),R=Object(l["a"])(V,o,s,!1,null,"4b9214b7",null);R.options.__file="ChatBox.vue";e["a"]=R.exports;d()(R,{VFlex:C["a"],VForm:w["a"],VLayout:h["a"],VSpacer:g["a"],VTextField:$["a"],VToolbar:T["a"],VToolbarTitle:E["a"]})},eb07:function(t,e,a){"use strict";var o=a("4321"),s=a.n(o);s.a}}]);
//# sourceMappingURL=room.086ac094.js.map