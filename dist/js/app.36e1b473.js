(function(e){function o(o){for(var n,a,s=o[0],c=o[1],l=o[2],A=0,u=[];A<s.length;A++)a=s[A],r[a]&&u.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(o);while(u.length)u.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],n=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(n=!1)}n&&(i.splice(o--,1),e=c(c.s=t[0]))}return e}var n={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({about:"about",game:"game",room:"room"}[e]||e)+"."+{about:"bc18978e",game:"4045745f",room:"24ba7e4b"}[e]+".js"}function c(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var o=[],t={game:1,room:1};a[e]?o.push(a[e]):0!==a[e]&&t[e]&&o.push(a[e]=new Promise(function(o,t){for(var n="css/"+({about:"about",game:"game",room:"room"}[e]||e)+"."+{about:"31d6cfe0",game:"70e62f38",room:"dae4f16b"}[e]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],A=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(A===n||A===r))return o()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],A=l.getAttribute("data-href");if(A===n||A===r)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var n=o&&o.target&&o.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.request=n,delete a[e],m.parentNode.removeChild(m),t(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){a[e]=0}));var n=r[e];if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(function(o,t){n=r[e]=[o,t]});o.push(n[2]=i);var l,A=document.createElement("script");A.charset="utf-8",A.timeout=120,c.nc&&A.setAttribute("nonce",c.nc),A.src=s(e),l=function(o){A.onerror=A.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,t[1](i)}r[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:A})},12e4);A.onerror=A.onload=l,document.head.appendChild(A)}return Promise.all(o)},c.m=e,c.c=n,c.d=function(e,o,t){c.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,o){if(1&o&&(e=c(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)c.d(t,n,function(o){return e[o]}.bind(null,n));return t},c.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(o,"a",o),o},c.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],A=l.push.bind(l);l.push=o,l=l.slice();for(var u=0;u<l.length;u++)o(l[u]);var m=A;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"0c23":function(e,o){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACAAIYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5nooor8DP9oAooooAKKKKACiiigBQ2KNxpKKACiiigAozRRQA7fxRvptFArIkBzRUdFAuUKKKKCgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKAuaKAHsOKZTnNNoFEKKKKBhRRRQAUUUUAFFFFABTkHNNp6nigUhCdxo8ukb71PoJuMYbTSU5+tNoLHI1FNoqeUnlBj81FFFUUFOUZWm05DzQJiFdtJUjdKjoBBRTgMim0DCiiigApU+9SUA4NADyuTS0gbNLmgzGv1ptOc02gtBRSqN1FFx3EooooAKclNp6jAoJkLTWXNOooJI88UUrcNSUGgUUUUAFFFFABQDiiigAJzRRRQA5WxRTaKVhWCiiimMMVIOlN34FOHSgmQUZzQeRTSmKCQfpTaevApaCuYj60VIOajPWgadwooooGFFFFABRRRQAUUUUAFFFFABUg6VHRnFAmrjy2KQvmm0UBYN1FFFAwooooAKKKKACiiigAooooAULuopUOKKnUnUbRRRVFBRRRQAUUUUAFFFAGaACil2GjYaAuJRS7DRtNAXEopdppCMUAFFFFADo6KWFck0UrES3P/2Q=="},"15dc":function(e,o,t){},"1c3d":function(e,o,t){},"1cd9":function(e,o,t){"use strict";var n=t("1c3d"),a=t.n(n);a.a},2761:function(e,o,t){},"2b2a":function(e,o,t){},"404e":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-layout",{attrs:{row:"","justify-center":""}},[t("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialog,callback:function(o){e.dialog=o},expression:"dialog"}},[t("v-card",[t("v-toolbar",{attrs:{dense:"",color:"primary",dark:""}},[t("v-toolbar-title",[e._v("New Room")])],1),t("v-card-text",[t("v-container",{attrs:{"grid-list":"","xs-12":""}},[t("v-layout",{attrs:{wrap:""}},[t("v-form",{ref:"form",staticClass:"join-form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(o){e.valid=o},expression:"valid"}},[t("v-subheader",{staticClass:"pl-0"},[e._v("Room name")]),t("v-text-field",{attrs:{rules:e.nameRules,counter:30,label:"Name",required:""},model:{value:e.roomName,callback:function(o){e.roomName=o},expression:"roomName"}}),t("v-subheader",{staticClass:"pl-0"},[e._v("Room size")]),t("v-slider",{attrs:{"always-dirty":"",ticks:"","tick-size":"3","tick-labels":e.ticksLabels,"thumb-label":"always",max:8,min:2},model:{value:e.slider,callback:function(o){e.slider=o},expression:"slider"}}),t("v-select",{attrs:{items:e.games,label:"Game",solo:"",rules:e.gameSelectRules},model:{value:e.gameSelect,callback:function(o){e.gameSelect=o},expression:"gameSelect"}}),t("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("Create and join")]),e._v("\n              "+e._s(e.gameSelect)+"\n            ")],1)],1)],1)],1)],1)],1)],1)},a=[],r=(t("a481"),t("cadf"),t("551c"),t("097d"),{props:["show"],data:function(){return{dialog:!1,valid:!0,games:["Connect 4","Connect 4","Connect 4"],gameSelect:null,gameSelectRules:[function(e){return!!e||"A Game must be selected"}],roomName:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=30||"Name must be less than 30 characters"},function(e){return e&&e.replace(/\s/g,"").length>0||"Name cannot be only spaces"}],slider:2,ticksLabels:["2","3","4","5","6","7","8"]}},methods:{submit:function(){this.$refs.form.validate()&&this.sendHost()},sendHost:function(){var e=this;this.$socket.emit("HOST",this.roomName,this.slider,this.gameSelect,function(o){e.clear(),e.dialog=!1,e.$router.push({name:"room",params:{roomID:o}})})},clear:function(){this.$refs.form.reset()}},watch:{show:function(){this.dialog=!0}}}),i=r,s=(t("7ee7"),t("2877")),c=t("6544"),l=t.n(c),A=t("8336"),u=t("b0af"),m=t("99d9"),d=t("a523"),f=t("169a"),g=t("4bd4"),p=t("a722"),h=t("b56d"),v=t("ba0d"),b=t("e0c7"),w=t("2677"),C=t("71d9"),K=t("2a7f"),E=Object(s["a"])(i,n,a,!1,null,"37a83fae",null);E.options.__file="CreateRoomModal.vue";o["a"]=E.exports;l()(E,{VBtn:A["a"],VCard:u["a"],VCardText:m["b"],VContainer:d["a"],VDialog:f["a"],VForm:g["a"],VLayout:p["a"],VSelect:h["a"],VSlider:v["a"],VSubheader:b["a"],VTextField:w["a"],VToolbar:C["a"],VToolbarTitle:K["a"]})},4791:function(e,o,t){"use strict";var n=t("f1e4"),a=t.n(n);a.a},"56d7":function(e,o,t){"use strict";t.r(o);t("cadf"),t("551c"),t("097d");var n=t("2b0e"),a=t("ce5b"),r=t.n(a),i=t("bb71");t("da64");n["default"].use(i["a"],{iconfont:"md"});var s=t("2f62"),c={connected:!1,loading:!1,info:null,error:null},l={info:function(e){return e.info},loading:function(e){return e.loading}},A={setLoading:function(e,o){e.loading=o},setInfo:function(e,o){e.error=o},clearInfo:function(e){e.info=null},SOCKET_connect:function(e){console.log("%c socket_connect","color:green"),e.connected=!0,e.info={message:"Connected!",type:"success",time:"4000"}},SOCKET_disconnect:function(e){console.log("%c socket_disconnect","color:orange"),e.connected=!1},SOCKET_reconnect:function(){console.log("%c socket_connect_error","color:orange")},SOCKET_reconnect_attempt:function(){console.log("%c socket_reconnecting","color:orange")},SOCKET_reconnecting:function(e){console.log("%c socket_reconnect_attempt","color:orange"),e.info={message:"Disconnected. Trying to reconnect...",type:"error"}},SOCKET_reconnect_error:function(){console.log("%c socket_reconnect_error","color:red")},SOCKET_connect_error:function(){console.log("%c socket_connect_timeout","color:red")},SOCKET_connect_timeout:function(){console.log("%c socket_connect_timeout","color:red")},SOCKET_connecting:function(){console.log("%c socket_connecting","color:orange")},SOCKET_ERROR:function(e,o){console.log("%c socket_error","color:red"),e.info=o}},u={clearInfo:function(e){var o=e.commit;o("clearInfo")}},m={state:c,getters:l,mutations:A,actions:u},d=(t("7514"),t("7f7f"),t("8c4f")),f=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("app-join-modal"),e.name?t("v-container",{attrs:{"grid-list-sm":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm8:"",lg9:""}},[t("app-room-list")],1),t("v-flex",{attrs:{xs12:"",sm4:"",lg3:""}},[t("app-joining-list")],1)],1)],1):e._e()],1)},g=[],p=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-layout",{attrs:{row:"","justify-center":""}},[t("v-dialog",{attrs:{value:e.dialog,persistent:"","max-width":"600px"}},[t("v-card",[t("v-toolbar",{attrs:{dense:"",color:"primary",dark:""}},[t("v-toolbar-title",[e._v("Pick a name and a color!")])],1),t("v-card-text",[t("v-container",{staticClass:"py-0",attrs:{"grid-list":"","xs-12":""}},[t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-form",{ref:"form",staticClass:"join-form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(o){e.valid=o},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"Name","single-line":"",solo:"",required:""},model:{value:e.name,callback:function(o){e.name=o},expression:"name"}}),t("app-avatar-picker",{on:{color:e.getColor}}),t("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Do you agree to the terms and conditions?",required:""},model:{value:e.checkbox,callback:function(o){e.checkbox=o},expression:"checkbox"}}),t("v-btn",{attrs:{disabled:!e.valid,block:"",large:""},on:{click:e.submit}},[e._v("Join")])],1)],1)],1)],1)],1),t("v-flex",{attrs:{xs12:""}},[t("v-expansion-panel",{staticClass:"terms"},[t("v-expansion-panel-content",[t("div",{attrs:{slot:"header"},slot:"header"},[e._v("Terms and conditions")]),t("v-card",[t("v-card-text",[e._v("Put your terms and condititons here.\n                "),t("ul",[t("li",[e._v("Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.")]),t("li",[e._v("From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).")])])])],1)],1)],1)],1)],1)],1)],1)},h=[],v=(t("a481"),function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-container",[t("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t("v-flex",{attrs:{"text-xs-right":""}},[t("v-btn",{attrs:{fab:"",small:""},on:{click:e.prevColor}},[t("v-icon",[e._v("keyboard_arrow_left")])],1)],1),t("v-flex",{attrs:{"text-xs-center":""}},[t("div",{staticClass:"square",style:{"background-color":e.colors[e.color]}})]),t("v-flex",{attrs:{"text-xs-left":""}},[t("v-btn",{attrs:{fab:"",small:""},on:{click:e.nextColor}},[t("v-icon",[e._v("keyboard_arrow_right")])],1)],1)],1)],1)}),b=[],w={data:function(){return{colors:["#FF0000","#C13F3F","#EEB70C","#7F6900","#2CFC60","#110754","#8A0499","#300242","#0000FF","#3F6022","#4f02ff","#9B0BB5","#0B0003"],color:Math.floor(13*Math.random())}},methods:{nextColor:function(){this.color>=this.colors.length-1?this.color=0:this.color++,this.submit()},prevColor:function(){0==this.color?this.color=this.colors.length-1:this.color--,this.submit()},submit:function(){this.$emit("color",this.colors[this.color])}},created:function(){this.submit()}},C=w,K=(t("87e6"),t("2877")),E=t("6544"),R=t.n(E),B=t("8336"),_=t("a523"),F=t("0e8f"),D=t("132d"),U=t("a722"),k=Object(K["a"])(C,v,b,!1,null,"4d8d8ce6",null);k.options.__file="AvatarPicker.vue";var M=k.exports;R()(k,{VBtn:B["a"],VContainer:_["a"],VFlex:F["a"],VIcon:D["a"],VLayout:U["a"]});var x={data:function(){return{dialog:!1,valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"},function(e){return e&&e.replace(/\s/g,"").length>0||"Name cannot be only spaces"}],color:"",checkbox:!1}},computed:{username:function(){return this.$store.getters.name},error:function(){return window.scrollTo(0,0),this.$store.getters.error}},created:function(){this.dialog=null==this.$store.getters.name},methods:{getColor:function(e){this.color=e},submit:function(){this.$refs.form.validate()&&(this.$socket.emit("NEW_USER",{username:this.name,color:this.color}),this.clear(),this.dialog=!1)},clear:function(){this.$refs.form.reset()}},components:{"app-avatar-picker":M}},y=x,Q=(t("f693"),t("b0af")),T=t("99d9"),S=t("ac7c"),V=t("169a"),O=t("cd55"),I=t("49e2"),N=t("4bd4"),j=t("2677"),H=t("71d9"),P=t("2a7f"),G=Object(K["a"])(y,p,h,!1,null,"0eebc340",null);G.options.__file="JoinModal.vue";var J=G.exports;R()(G,{VBtn:B["a"],VCard:Q["a"],VCardText:T["b"],VCheckbox:S["a"],VContainer:_["a"],VDialog:V["a"],VExpansionPanel:O["a"],VExpansionPanelContent:I["a"],VFlex:F["a"],VForm:N["a"],VLayout:U["a"],VTextField:j["a"],VToolbar:H["a"],VToolbarTitle:P["a"]});var L=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-card",[t("v-toolbar",{attrs:{dense:"",dark:"",color:"primary"}},[t("v-toolbar-title",[e._v("Rooms")]),t("v-spacer"),t("v-btn",{attrs:{icon:""}},[t("v-icon",{on:{click:e.showCreateRoomModal}},[e._v("add")])],1)],1),t("app-create-room-modal",{attrs:{show:e.showRoomModal}}),!e.rooms||e.rooms.length<=0?t("div",{staticClass:"placeholder"},[t("p",[e._v("No rooms yet")]),t("v-btn",{on:{click:e.showCreateRoomModal}},[e._v("Create the first one!")])],1):t("div",[t("v-list",{attrs:{"two-line":""}},[e._l(e.rooms,function(o,n){return[o.header?t("v-subheader",{key:o.header},[e._v(e._s(o.header))]):e._e(),t("v-divider",{key:n}),t("v-list-tile",{key:o.readableName,attrs:{avatar:""}},[t("v-list-tile-avatar",[t("img",{attrs:{src:e.images[o.game.replace(/\s/g,"")]}})]),t("v-list-tile-content",[t("v-list-tile-title",[e._v(e._s(o.readableName)+" (Host: "+e._s(o.clients[0].name)+")")]),t("v-list-tile-sub-title",[e._v(e._s(o.game)+" "+e._s(o.clients.length)+"/"+e._s(o.size))])],1),t("v-btn",{on:{click:function(t){e.joinRoom(o.id)}}},[e._v("Join")])],1)]})],2)],1)],1)],1)],1)},Y=[],Z=t("404e"),W={data:function(){return{showRoomModal:!1,images:{JustChat:t("0c23"),Default:t("8901"),ConnectWhat:t("da0e")}}},computed:{rooms:function(){return this.$store.getters.rooms}},methods:{joinRoom:function(e){var o=this;null!=e&&void 0!=e||alert("something went wrong..."),this.$socket.emit("JOIN",e,function(){o.$router.push({name:"room",params:{roomID:e}})})},showCreateRoomModal:function(){var e=this;this.showRoomModal=!1,setTimeout(function(){e.showRoomModal=!0},0)}},components:{"app-create-room-modal":Z["a"]}},q=W,z=(t("1cd9"),t("ce7e")),$=t("8860"),X=t("ba95"),ee=t("c954"),oe=t("5d23"),te=t("9910"),ne=t("e0c7"),ae=Object(K["a"])(q,L,Y,!1,null,"42e5e3ca",null);ae.options.__file="RoomList.vue";var re=ae.exports;R()(ae,{VBtn:B["a"],VCard:Q["a"],VDivider:z["a"],VFlex:F["a"],VIcon:D["a"],VLayout:U["a"],VList:$["a"],VListTile:X["a"],VListTileAvatar:ee["a"],VListTileContent:oe["a"],VListTileSubTitle:oe["b"],VListTileTitle:oe["c"],VSpacer:te["a"],VSubheader:ne["a"],VToolbar:H["a"],VToolbarTitle:P["a"]});var ie=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:""}},[t("v-card",{staticClass:"joining-card"},[t("v-toolbar",{attrs:{dense:"",color:"white"}},[t("v-toolbar-title",[e._v("People joining")])],1),t("v-card-text",{staticClass:"joining-card-text"},e._l(e.last10BroadcastMessages,function(o,n){return t("div",{key:n,staticClass:"users"},[t("p",{staticClass:"new-user",style:[o.disconnected?{color:"grey",fontStyle:"italic"}:{color:o.color}]},[t("span",{staticClass:"font-weight-bold"},[e._v("\n              "+e._s(o.name)+"\n              "),o.disconnected?t("span",[e._v("dis")]):e._e(),e._v("connected\n            ")])])])}),0)],1)],1)],1)},se=[],ce=t("2909"),le={data:function(){return{users:[]}},computed:{last10BroadcastMessages:function(){return this.$store.getters.last10BroadcastMessages}},methods:{},mounted:function(){var e=this;this.$socket.on("NEW_USER",function(o){e.users=[].concat(Object(ce["a"])(e.users),[o])})}},Ae=le,ue=(t("4791"),Object(K["a"])(Ae,ie,se,!1,null,"0de533fb",null));ue.options.__file="JoiningList.vue";var me=ue.exports;R()(ue,{VCard:Q["a"],VCardText:T["b"],VFlex:F["a"],VLayout:U["a"],VToolbar:H["a"],VToolbarTitle:P["a"]});var de={data:function(){return{}},computed:{name:function(){return this.$store.getters.name}},sockets:{connect:function(){}},components:{"app-join-modal":J,"app-room-list":re,"app-joining-list":me}},fe=de,ge=Object(K["a"])(fe,f,g,!1,null,null,null);ge.options.__file="Rooms.vue";var pe=ge.exports;R()(ge,{VContainer:_["a"],VFlex:F["a"],VLayout:U["a"]}),n["default"].use(d["a"]);var he=new d["a"]({routes:[{path:"/",name:"home",component:pe},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{params:["roomID"],path:"/room/:roomID",name:"room",component:function(){return t.e("room").then(t.bind(null,"3ab1"))}},{params:["gameID"],path:"/game/:gameID",name:"game",component:function(){return t.e("game").then(t.bind(null,"7d36"))}}]}),ve={name:null,color:null,users:[],broadcastMessages:[],rooms:null,messages:[],room:null,isHost:!1},be={conncected:function(e){return e.connected},name:function(e){return e.name},isHost:function(e){return e.isHost},rooms:function(e){return e.rooms},room:function(e){return e.room},users:function(e){return e.users},messages:function(e){return e.messages},last5Users:function(e){return e.users.length<=5?e.users:e.users.slice(-5)},last10BroadcastMessages:function(e){return e.broadcastMessages.length<=10?e.broadcastMessages:e.broadcastMessages.slice(-10)},isAllReady:function(e){return e.room.clients.filter(function(e){return!1===e.ready}).length<=1&&e.room.clients.length>1}},we={SOCKET_USER_DISCONNECTED:function(e,o){if(console.log("%c socket_on_user_disconnected","color:green"),console.log(o),console.log(e.users),o){var t=e.users.find(function(e){return e.id===o.id}),n=e.users.indexOf(t);e.users.splice(n,1),o.disconnected=!0,e.broadcastMessages.push(o)}},SOCKET_JOINED_SERVER:function(e,o){console.log("%c socket_on_joined_server","color:green"),e.name=o.username,e.color=o.color},SOCKET_NEW_USER:function(e,o){console.log("%c socket_on_new_user","color:green"),e.users.push(o),e.broadcastMessages.push(o)},SOCKET_HOST:function(e){console.log("%c socket_host","color:green"),e.isHost=!0},SOCKET_JOIN:function(e,o){console.log("%c socket_join","color:green"),e.room=o.room},SOCKET_GET_ROOM_INFO:function(e,o){e.room=o},SOCKET_UPDATE_ROOMS:function(e,o){console.log("%c socket_update_rooms"+o,"color:green");var t=[];for(var n in o)o.hasOwnProperty(n)&&t.push(o[n]);e.rooms=t,console.log(e.rooms)},SOCKET_CHAT_MESSAGE:function(e,o){console.log("%c socket_chat_message","color:green"),e.messages.push(o)},setUser:function(e,o){e.user=o},clearMessages:function(e){e.messages=[]}},Ce={SOCKET_KICKED:function(e,o){var t=e.state,n=(e.commit,e.rootState);console.log("%c socket_kicked","color:green"),t.room=null,t.messages=[],n.general.info={message:"You were kicked from the room",type:"warning",time:"4000"},he.push("/")},SOCKET_HOST_LEFT:function(e,o){var t=e.state,n=(e.commit,e.rootState);console.log("%c socket_host_left","color:green"),t.room=null,t.messages=[],n.general.info={message:"The host left the room. Room was closed.",type:"warning",time:"4000"},he.push("/")}},Ke={state:ve,getters:be,mutations:we,actions:Ce},Ee={currentPlayer:null,boardState:[],options:[],isRunning:!0,winner:null},Re={game:function(e){return e.game},winner:function(e){return e.winner},board:function(e){return e.boardState},currentPlayer:function(e){return e.currentPlayer}},Be={setCurrentPlayer:function(e,o){e.currentPlayer=o},setBoard:function(e,o){e.boardState=o},clearGame:function(e){e.boardState=[],e.currentPlayer=null,e.isRunning=!1,e.winner=null},endGame:function(e,o){-1==o?alert("Draw! \n Returning to Lobby..."):(alert(e.currentPlayer.name+" won!\n Returning to Lobby..."),he.go(-1))},setWinner:function(e,o){e.winner=o},setRunning:function(e,o){e.isRunning=o},SOCKET_END_GAME:function(e,o){e.winner=o.winner,e.isRunning=!1}},_e={SOCKET_GAME_TURN:function(e,o){var t=e.commit;t("setBoard",o[0]),t("setCurrentPlayer",o[1])},SOCKET_END_GAME:function(e,o){var t=e.commit;t("setBoard",o[0]),setTimeout(function(){t("endGame",o[1]),t("clearGame")},100)},SOCKET_START_GAME:function(e,o){e.state;var t=e.commit,n=e.rootState;console.log("%c socket_start_game","color:green"),he.push({name:"game",params:{gameID:n.user.room.id}}),t("setRunning",!0),t("setBoard",[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]),t("setCurrentPlayer",o[1])}},Fe={state:Ee,getters:Re,mutations:Be,actions:_e};n["default"].use(s["a"]);var De=new s["a"].Store({state:{},mutations:{},actions:{},modules:{general:m,user:Ke,game:Fe}}),Ue=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-app",[["room","game"].indexOf(e.$route.name)>-1?e._e():t("v-toolbar",{attrs:{app:""}},[t("v-toolbar-title",{staticClass:"headline text-uppercase"},[t("span",[e._v("Chat Rooms ")]),t("span",{staticClass:"font-weight-light"},[e._v("with SocketIO & Vue")])]),t("v-spacer"),t("v-btn",{attrs:{flat:"",to:"/about"}},[e._v("About")])],1),t("v-content",[t("router-view"),e.info?t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:""}},[t("app-toast",{attrs:{text:e.info.message,type:e.info.type,time:e.info.time}})],1)],1):e._e()],1)],1)},ke=[],Me={data:function(){return{}},computed:{info:function(){return window.scrollTo(0,0),this.$store.getters.info}}},xe=Me,ye=t("7496"),Qe=t("549c"),Te=Object(K["a"])(xe,Ue,ke,!1,null,null,null);Te.options.__file="App.vue";var Se=Te.exports;R()(Te,{VApp:ye["a"],VBtn:B["a"],VContent:Qe["a"],VFlex:F["a"],VLayout:U["a"],VSpacer:te["a"],VToolbar:H["a"],VToolbarTitle:P["a"]});var Ve=t("5132"),Oe=t.n(Ve),Ie=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-snackbar",{staticClass:"myAlert",attrs:{value:!0,color:e.type,timeout:e.timeout},on:{input:e.onClose}},[e._v("\n  "+e._s(e.text)+"\n  "),t("v-btn",{attrs:{flat:"",fab:""},on:{click:e.onClose}},[t("v-icon",[e._v("close")])],1)],1)},Ne=[],je={props:["text","type","time"],data:function(){return{timeout:0}},created:function(){this.time&&(this.timeout=this.time)},methods:{onClose:function(){this.$store.dispatch("clearInfo"),this.$emit("dismissed")}}},He=je,Pe=(t("a13b"),t("2db4")),Ge=Object(K["a"])(He,Ie,Ne,!1,null,null,null);Ge.options.__file="Toast.vue";var Je=Ge.exports;R()(Ge,{VBtn:B["a"],VIcon:D["a"],VSnackbar:Pe["a"]});var Le=t("123d"),Ye=t.n(Le);n["default"].use(Ye.a),n["default"].config.productionTip=!1,n["default"].use(r.a,{theme:{primary:"#3f51b5",secondary:"#f44336",accent:"#ffc107",error:"#ff5722",warning:"#ff9800",info:"#00bcd4",success:"#8bc34a"}}),n["default"].use(new Oe.a({debug:!0,connection:"".concat(window.location.host),vuex:{store:De,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),n["default"].component("app-toast",Je),new n["default"]({store:De,router:he,render:function(e){return e(Se)},created:function(){this.$router.push("/"),this.$store.commit("setLoading",!1)},watch:{}}).$mount("#app")},"7ee7":function(e,o,t){"use strict";var n=t("2761"),a=t.n(n);a.a},"87e6":function(e,o,t){"use strict";var n=t("e9a4"),a=t.n(n);a.a},8901:function(e,o){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACAAIYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9Bcj0oz7UgooAUEUlFFACgZpKVe/0pKACiiigAI3UmwUtAoAKKKKACiiigAooooAVjmikooAKKKKACiigDNACr3+lJSrSUAHaijtRQAUUUUAFFFGM0AFHaiigA60UClPT8qAEooJxRQAxT81Ppi/ep9BUgpV60lGaCQHWil/h/GkoAO1FFFABRmiigAzTR9806gUACjbRRTtvy0ANU5FFNT7tOoBkdFSUUFcwg4FLR3ooJCkIyaWjvQAKNq/jRTW6inUDCgLmms2Gp1Ahdho2GkooAXYaR+FooIyKACnbqarbqXA9aAE7/hRR3ooABRSM22igLC0UUUAHamx06hBtFAwprrmn5HpRkelAhKKF+7RQAUDrRRQAUUUUAFB5FFFABQelFFADfLyKKkTrRQPmY2iijrQIKKTyaUjFABRR1FNKUACdadUdFBXKSUVHUlAmrBmiiigQUUUUAFFFGM0AGcUUpFFACUUUUAAGKD8y0UUAIrZpaKKACiijNABRRRQAGijrRQAUUUUAFAOKKKAG+aaKCmKKCtB1FFFBIZooooAKO9FFABniiijOKACik3CjcKAFopNwo3igBaKTcKWgAooooAYy7aKWSig0R//Z"},a13b:function(e,o,t){"use strict";var n=t("2b2a"),a=t.n(n);a.a},da0e:function(e,o){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACAAIYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5PHFBGKC+M00tk1/odrc+DBzkU2iiqAKKKKACiiigB23jrQo4600HFOVsClYA8ujZShs0EZpgIqZoKYFOHFBGRQAgORS0U0nFKwDi2KKKKXKVddhrjmkIxSk/zoUbjVEibDikxg09zhaZmgBQuaXZTQcGpB0oAjIxRTn60ijg0AJRRRQAU5DxTQM09V2igBaKKKAA0EZoooAaGopGGDRQA8jNJjHSlooAa1Np7dKZQAVIvSo6evSgBH+9QRhKXHzUMu4UAMoAzTlXFOAxQAAYFFFFABRRRQAd6KKM0AMY80UDk0UAPooopANfpTac/Sm0wCpBwKagyadQAUAkCiigAooooAKKKKACiiigAoooJ4oAai0U4dKKLgAbNGc1HTkGaAB+lNqQjNNK80ACD5adQBgUUAFFFFABRRRQAE4FAoYZFIvSgBaBQTxRQAUj9KWmv0oAXzPloplFKyAMcUA8UpFJTAVTg05WyaZTo6AHUUUUAFFFFABRRRQAE8UnVaVulC9KAAcCiiigApr9KdSP92gBlFFFAB2opScUhoAKeowKZUgoAKKKKACiiigAooooAKKKKACijNG6gApH+7S5pGOVoAZRRRQAUrcUYxSE5NADkHNO701OlDtQAb+acDmo6KAHZ+anBs0w9KVDzQA6iiigBrnFOHSkK5NLjFABikxS0HgUAMakzxTm6U2gAooooA//2Q=="},e9a4:function(e,o,t){},f1e4:function(e,o,t){},f693:function(e,o,t){"use strict";var n=t("15dc"),a=t.n(n);a.a}});
//# sourceMappingURL=app.36e1b473.js.map