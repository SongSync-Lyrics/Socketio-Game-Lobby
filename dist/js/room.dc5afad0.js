(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["room"],{"369a":function(s,t,e){"use strict";var a=e("9feb"),o=e.n(a);o.a},"3ab1":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md10:""}},[e("v-layout",{staticClass:"mb-3",attrs:{"justify-space-between":""}},[e("v-flex",[e("h3",{staticClass:"title my-3 mx-0"},[s._v("Room: "+s._s(s.room.readableName))])]),e("v-flex",{attrs:{"text-xs-right":""}},[e("v-btn",{attrs:{color:"error",fab:"",small:""},on:{click:s.leave}},[e("v-icon",[s._v("exit_to_app")])],1)],1)],1),e("v-spacer"),e("div",[e("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0},expression:"{always: false, smooth: true}"}],staticClass:"messages"},s._l(s.messages,function(t,a){return e("li",{key:a,staticClass:"message"},[e("span",{staticClass:"font-weight-bold",style:{color:t.color}},[s._v(s._s(t.name))]),s._v("\n            : "+s._s(t.message)+"\n          ")])}),0)]),e("v-form",{staticClass:"chatMessage-form"},[e("v-text-field",{staticClass:"myInput mb-0",attrs:{"append-icon":"send",box:"",label:"type here",type:"text"},on:{keydown:function(t){return"button"in t||!s._k(t.keyCode,"enter",13,t.key,"Enter")?s.submit(t):null},"click:append":s.submit},model:{value:s.chatMessage,callback:function(t){s.chatMessage=t},expression:"chatMessage"}})],1)],1),e("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[e("div",{staticClass:"new-users-card py-3 px-3"},[e("div",{staticClass:"new-users-card-body"},[e("div",{staticClass:"new-users-card-title"},[e("h3",[s._v("People in Room: ("+s._s(s.room.clients.length)+"/"+s._s(s.room.size)+")")])]),e("div",{staticClass:"card-body"},s._l(s.room.clients,function(t,a){return e("div",{key:a,staticClass:"users"},[e("p",{staticClass:"new-user",style:{color:t.color}},[e("span",{staticClass:"font-weight-bold",style:{color:t.color}},[s._v(s._s(t.name)+" ")]),s.isHost&&!t.isHost?e("v-icon",{attrs:{fab:"",small:"",flat:"",color:"danger"},on:{click:function(e){s.kick(t.id)}}},[s._v("block")]):s._e()],1)])}),0)]),e("div",{staticClass:"card-footer"})]),e("div",{staticClass:"new-users-card py-3 px-3"},[e("div",{staticClass:"new-users-card-body"},[e("div",{staticClass:"new-users-card-title"},[e("h3",[s._v("Game Info:")])]),e("div",{staticClass:"card-body"},[s.isHost?e("p",[s._v("You are the host")]):s._e(),e("p",{staticClass:"new-user"},[s._v("// Hook up game here")])])]),e("div",{staticClass:"card-footer"})])])],1)],1)},o=[],r=(e("7f7f"),e("cadf"),e("551c"),e("097d"),{data:function(){return{chatMessage:"",valid:!0,color:"",users:[]}},computed:{last5Users:function(){return this.$store.getters.last5Users},username:function(){return this.$store.getters.name},isHost:function(){return this.$store.getters.isHost},room:function(){return this.$store.getters.room},messages:function(){return this.$store.getters.messages}},methods:{submit:function(s){s.preventDefault(),this.$socket.emit("SEND_MESSAGE",{name:this.username,message:this.chatMessage}),this.chatMessage=""},leave:function(){this.$socket.emit("LEAVE_ROOM"),this.$router.push("/")},kick:function(s){this.$socket.emit("KICK",s,function(s){alert("jo"+s)})}},mounted:function(){}}),i=r,n=(e("369a"),e("2877")),c=e("6544"),l=e.n(c),u=e("8336"),d=e("a523"),m=e("0e8f"),f=e("4bd4"),v=e("132d"),h=e("a722"),p=e("9910"),_=e("2677"),b=Object(n["a"])(i,a,o,!1,null,"069d3fc4",null);b.options.__file="Room.vue";t["default"]=b.exports;l()(b,{VBtn:u["a"],VContainer:d["a"],VFlex:m["a"],VForm:f["a"],VIcon:v["a"],VLayout:h["a"],VSpacer:p["a"],VTextField:_["a"]})},"9feb":function(s,t,e){}}]);
//# sourceMappingURL=room.dc5afad0.js.map