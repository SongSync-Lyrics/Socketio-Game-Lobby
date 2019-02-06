(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"0a62":function(t,e,a){"use strict";var s=a("4ede"),o=a.n(s);o.a},1610:function(t,e,a){"use strict";var s=a("9eb2"),o=a.n(s);o.a},"24ec":function(t,e,a){"use strict";var s=a("96cb"),o=a.n(s);o.a},"30ed":function(t,e,a){},"406c":function(t,e,a){"use strict";var s=a("fdbc"),o=a.n(s);o.a},"4ede":function(t,e,a){},"78a9":function(t,e,a){},"7d36":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"py-1 px-1",attrs:{"grid-list-sm":""}},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("app-connect-4")],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("app-chat-box")],1)],1)],1)},o=[],n=(a("7f7f"),a("dce0")),r=a("d8c9"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"py-0 px-0",attrs:{"grid-list-sm":"","align-content-center":""}},[a("v-flex",{attrs:{xs12:"","align-content-center":""}},[a("h2",[t._v(t._s(t.currentPlayer.name||!1)+"'s turn")])]),a("v-flex",{attrs:{xs12:""}},[a("table",{staticClass:"board"},[a("tbody",t._l(t.board,function(e,s){return a("tr",{key:s},t._l(e,function(e,o){return a("td",{key:o},[a("div",{staticClass:"piece",style:{backgroundColor:t.pieceColors[t.board[s][o]]},on:{click:function(e){t.clicked(o,s)}}})])}),0)}),0)])])],1)},i=[],l=(a("cadf"),a("551c"),a("097d"),{data:function(){return{pieceColors:["#CECECE","#ad0505 ","#FEB835"]}},computed:{currentPlayer:function(){return this.$store.getters.currentPlayer},board:function(){return this.$store.getters.board},room:function(){return this.$store.getters.room},winner:function(){return this.$store.getters.winner}},methods:{clicked:function(t,e){null===this.winner&&this.$socket.emit("GAME_TURN",[t,e])}},components:{}}),u=l,d=(a("0a62"),a("2877")),f=a("6544"),v=a.n(f),m=a("a523"),p=a("0e8f"),b=Object(d["a"])(u,c,i,!1,null,"729ae629",null);b.options.__file="Connect_4.vue";var h=b.exports;v()(b,{VContainer:m["a"],VFlex:p["a"]});var _=a("e26a"),g={data:function(){return{chatMessage:""}},computed:{messages:function(){return this.$store.getters.messages},username:function(){this.$store.getters.name},room:function(){return this.$store.getters.room}},components:{"app-chat-box":_["a"],"app-people-in-room-list":n["a"],"app-game-info-box":r["a"],"app-connect-4":h}},y=g,k=(a("406c"),a("a722")),x=Object(d["a"])(y,s,o,!1,null,"fa48dfd6",null);x.options.__file="Game.vue";e["default"]=x.exports;v()(x,{VContainer:m["a"],VFlex:p["a"],VLayout:k["a"]})},"811b":function(t,e,a){"use strict";var s=a("30ed"),o=a.n(s);o.a},"96cb":function(t,e,a){},"9eb2":function(t,e,a){},a82d:function(t,e,a){"use strict";var s=a("78a9"),o=a.n(s);o.a},d8c9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"game-card"},[a("v-toolbar",{attrs:{dense:"",color:"white"}},[a("v-toolbar-title",{staticClass:"game-card-title"},[t._v("Game Info")])],1),a("v-card-text",[t._v("\n        Game: "+t._s(t.room.game)+"\n        "),a("br"),t._v("Some Option\n        "),a("br"),t._v("Some other option\n        "),a("br"),t._v("Last option\n      ")]),a("v-card-actions",[t.isHost?a("div",{staticStyle:{width:"100%"}},[a("v-btn",{attrs:{block:"",color:"success",disabled:!t.isAllReady},on:{click:function(e){t.startGame()}}},[t._v("Start Game\n            "),a("v-spacer"),a("v-icon",[t._v("done")])],1)],1):a("div",{staticStyle:{width:"100%"}},[t.ready?a("v-btn",{attrs:{flat:"",block:"",color:"success"},on:{click:function(e){t.setReady(!1)}}},[t._v("Ready!\n            "),a("v-spacer"),a("v-icon",[t._v("done")])],1):a("v-btn",{attrs:{block:"",color:"info"},on:{click:function(e){t.setReady(!0)}}},[t._v("Ready?\n            "),a("v-spacer"),a("v-icon",[t._v("help_outline")])],1)],1)])],1)],1)],1)},o=[],n=(a("cadf"),a("551c"),a("097d"),a("404e"),{data:function(){return{users:[],ready:!1,options:{board:[6,7]},isClicked:!1}},methods:{setReady:function(t){var e=this;this.isClicked||(this.isClicked=!0,this.$socket.emit("SET_READY",t,function(t){e.ready=t}),setTimeout(function(){e.isClicked=!1},3e3))},startGame:function(){this.$socket.emit("START_GAME",this.options)}},computed:{room:function(){return this.$store.getters.room},isHost:function(){return this.$store.getters.isHost},isAllReady:function(){return this.$store.getters.isAllReady}}}),r=n,c=(a("811b"),a("2877")),i=a("6544"),l=a.n(i),u=a("8336"),d=a("b0af"),f=a("99d9"),v=a("0e8f"),m=a("132d"),p=a("a722"),b=a("9910"),h=a("71d9"),_=a("2a7f"),g=Object(c["a"])(r,s,o,!1,null,"af626396",null);g.options.__file="GameInfoBox.vue";e["a"]=g.exports;l()(g,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VFlex:v["a"],VIcon:m["a"],VLayout:p["a"],VSpacer:b["a"],VToolbar:h["a"],VToolbarTitle:_["a"]})},dce0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"in-room-card"},[a("v-toolbar",{attrs:{dense:"",color:"white"}},[a("v-toolbar-title",[t._v("People in Room: ("+t._s(t.room.clients.length)+"/"+t._s(t.room.size)+")")])],1),a("v-card-text",{staticClass:"in-room-card-text"},t._l(t.room.clients,function(e,s){return a("div",{key:s,staticClass:"users"},[a("p",{staticClass:"new-user",style:{color:e.color}},[a("span",{staticClass:"font-weight-bold",style:{color:e.color}},[t._v(t._s(e.name)+" ")]),t.isHost&&!e.isHost?a("v-icon",{staticClass:"in-room-icon",attrs:{small:"",color:"red darken-2"},on:{click:function(a){t.kick(e.id)}}},[t._v("block")]):t._e(),e.isHost?a("v-icon",{staticClass:"in-room-icon",attrs:{small:"",color:"orange darken-1"}},[t._v("gamepad")]):t._e(),e.ready?a("v-icon",{staticClass:"ready-icon",attrs:{small:"",color:"success"}},[t._v("done")]):t._e()],1)])}),0)],1)],1)],1)},o=[],n=a("2909"),r=(a("cadf"),a("551c"),a("097d"),a("404e"),{data:function(){return{users:[]}},computed:{room:function(){return this.$store.getters.room},last5Users:function(){return this.$store.getters.last5Users},isHost:function(){return this.$store.getters.isHost}},methods:{kick:function(t){this.$socket.emit("KICK",t,function(t){})}},mounted:function(){var t=this;this.$socket.on("NEW_USER",function(e){t.users=[].concat(Object(n["a"])(t.users),[e])})}}),c=r,i=(a("1610"),a("2877")),l=a("6544"),u=a.n(l),d=a("b0af"),f=a("99d9"),v=a("0e8f"),m=a("132d"),p=a("a722"),b=a("71d9"),h=a("2a7f"),_=Object(i["a"])(c,s,o,!1,null,"c040ec4a",null);_.options.__file="PeopleInRoomList.vue";e["a"]=_.exports;u()(_,{VCard:d["a"],VCardText:f["b"],VFlex:v["a"],VIcon:m["a"],VLayout:p["a"],VToolbar:b["a"],VToolbarTitle:h["a"]})},e26a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-toolbar",{attrs:{dense:"",color:"primary",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.room.readableName))]),a("v-spacer"),a("app-leave-button")],1),a("div",[a("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0},expression:"{always: false, smooth: true}"}],staticClass:"messages"},t._l(t.messages,function(e,s){return a("li",{key:s,staticClass:"message"},["server"!=e.type?a("span",{staticClass:"font-weight-bold",style:{color:e.color}},[t._v(t._s(e.name)+":")]):t._e(),t._v("\n          "+t._s(e.message)+"\n        ")])}),0)]),a("v-form",{staticClass:"chatMessage-form"},[a("v-text-field",{staticClass:"myInput mb-0",attrs:{id:"chatInput","append-icon":"send",box:"",label:"type here",type:"text"},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null},"click:append":t.submit},model:{value:t.chatMessage,callback:function(e){t.chatMessage=e},expression:"chatMessage"}})],1)],1)],1)},o=[],n=(a("7f7f"),a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{color:"error",fab:"",small:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("exit_to_app")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Do you really want to leave?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("No")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.yes}},[t._v("Yes")])],1)],1)],1)],1)],1)}),r=[],c={data:function(){return{dialog:!1}},methods:{yes:function(){var t=this;this.$socket.emit("LEAVE_ROOM",function(){t.$store.commit("clearMessages"),t.$store.commit("clearGame"),t.dialog=!1,t.$router.push("/")})}}},i=c,l=(a("24ec"),a("2877")),u=a("6544"),d=a.n(u),f=a("8336"),v=a("b0af"),m=a("99d9"),p=a("12b2"),b=a("169a"),h=a("132d"),_=a("a722"),g=a("9910"),y=Object(l["a"])(i,n,r,!1,null,"2f4aa181",null);y.options.__file="LeaveButton.vue";var k=y.exports;d()(y,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardTitle:p["a"],VDialog:b["a"],VIcon:h["a"],VLayout:_["a"],VSpacer:g["a"]});var x={data:function(){return{chatMessage:""}},computed:{username:function(){return this.$store.getters.name},messages:function(){return this.$store.getters.messages},room:function(){return this.$store.getters.room}},methods:{submit:function(t){t.preventDefault(),this.$socket.emit("SEND_MESSAGE",{name:this.username,message:this.chatMessage}),this.chatMessage=""}},components:{"app-leave-button":k}},C=x,V=(a("a82d"),a("0e8f")),$=a("4bd4"),w=a("2677"),E=a("71d9"),T=a("2a7f"),R=Object(l["a"])(C,s,o,!1,null,"4b9214b7",null);R.options.__file="ChatBox.vue";e["a"]=R.exports;d()(R,{VFlex:V["a"],VForm:$["a"],VLayout:_["a"],VSpacer:g["a"],VTextField:w["a"],VToolbar:E["a"],VToolbarTitle:T["a"]})},fdbc:function(t,e,a){}}]);
//# sourceMappingURL=game.4045745f.js.map