(function(e){function t(t){for(var n,c,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var i=o[c];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},a=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9c9ead96"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=c(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,o[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://schloss444.github.io/vue-app/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"084a":function(e,t,o){e.exports=o.p+"img/luc.cdc08c11.jpg"},2500:function(e,t,o){"use strict";var n=o("a7f0"),r=o.n(n);r.a},"29a7":function(e,t,o){"use strict";var n=o("6788"),r=o.n(n);r.a},5047:function(e,t,o){},"56b7":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"btn-primary"},[o("h6",{staticStyle:{color:"lightblue"}},[e._v("composant bouton Extra")]),o("button",{style:{"background-color":e.param.couleur},on:{click:function(t){return e.$emit("extraBtn","red")},mouseover:function(t){return e.$emit("extraMouseOver","lightgray")}}},[e._v(" "+e._s(e.param.titre)+" ")])])},r=[],a={name:"boutonExtra",props:{msg:String,param:Object},watch:{},data:function(){return{}},computed:{},methods:{extra:function(){}}},c=a,s=(o("29a7"),o("2877")),i=Object(s["a"])(c,n,r,!1,null,"05344548",null);t["a"]=i.exports},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("0cdd");var n=o("2b0e"),r=o("5f5b");o("ab8b"),o("2dd8");n["default"].use(r["a"]);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),e.$root.connect?e._e():o("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e.$root.connect?o("router-link",{attrs:{to:"/secure"}},[e._v("MySpace")]):e._e(),e.$root.connect?o("button",{attrs:{id:"btn_disconnect"},on:{click:function(t){return e.disconnect()}}},[e._v("Deconnexion")]):e._e()],1),o("router-view")],1)},c=[],s={methods:{disconnect:function(){this.$root.connect=!1,this.$router.push({name:"Home"})}}},i=s,u=(o("034f"),o("2877")),l=Object(u["a"])(i,a,c,!1,null,null,null),p=l.exports,d=(o("d3b7"),o("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome by Luc ........ Vue.js App"}})],1)},m=[],v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))])])},g=[],h={name:"HelloWorld",props:{msg:String}},b=h,_=(o("e8c9"),Object(u["a"])(b,v,g,!1,null,"4d0ef14c",null)),w=_.exports,x={name:"Home",components:{HelloWorld:w}},y=x,j=Object(u["a"])(y,f,m,!1,null,null,null),$=j.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("LoginWorld",{attrs:{msg:"Se connecter"}}),e._v(" etat connexion : "+e._s(this.$root.connected)+" "),n("form",[n("div",{staticClass:"form-example",attrs:{id:"main"}},[n("div",{staticClass:"form-example1"},[n("label",{attrs:{for:"pseudo"}},[e._v(" Pseudo: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pseudo,expression:"pseudo"}],attrs:{type:"text",name:"pseudo",id:"pseudo",required:""},domProps:{value:e.pseudo},on:{input:function(t){t.target.composing||(e.pseudo=t.target.value)}}})]),n("div",{staticClass:"form-example1"},[n("label",{attrs:{for:"password"}},[e._v(" Mot de Passe: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"form-example1"},[n("input",{attrs:{type:"submit",value:"Valider"},on:{click:function(t){return e.login()}}})])])])],1)},S=[],k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("h1",[e._v(e._s(e.msg))])])},E=[],C={name:"LoginWorld",props:{msg:String}},P=C,L=(o("af1a"),Object(u["a"])(P,k,E,!1,null,"39e5d2ce",null)),W=L.exports,M={name:"Login",components:{LoginWorld:W},data:function(){return{pseudo:"",password:""}},methods:{login:function(){"admin"===this.pseudo&&"admin"===this.password?(console.log("connect ?"),console.log(this.$root.connect),this.$root.connect=!0,this.$router.push({name:"Secure"})):this.$root.connect=!1,console.log("toujours connecté ?"),console.log(this.$root.connect)}}},A=M,H=(o("d6db"),Object(u["a"])(A,O,S,!1,null,null,null)),N=H.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"secure"},[n("img",{staticStyle:{width:"250px"},attrs:{alt:"Vue logo",src:o("084a")}}),n("SecureWorld",{attrs:{msg:"Espace sécurisé ... by Luc"}}),n("boutonExtra",{attrs:{param:e.param},on:{extraBtn:function(t){return e.clic(e.param,t)},extraMouseOver:function(t){return e.hover(e.param,t)}}})],1)},V=[],q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"secure"},[o("h1",[e._v(e._s(e.msg))]),o("p",[e._v("----")])])},B=[],F={name:"SecureWorld",props:{msg:String}},J=F,D=(o("2500"),Object(u["a"])(J,q,B,!1,null,"cfe516a8",null)),z=D.exports,G=o("56b7"),I={name:"Secure",components:{SecureWorld:z,boutonExtra:G["a"]},data:function(){return{param:{titre:"confirmer",couleur:"yellow"}}},methods:{clic:function(e,t){alert("Clic "+e.couleur+" "+e.titre),e.couleur=t},hover:function(e,t){e.couleur=t}}},K=I,Q=Object(u["a"])(K,T,V,!1,null,null,null),R=Q.exports;n["default"].use(d["a"]);var U=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/login",name:"Login",component:N},{path:"/secure",name:"Secure",component:R,beforeEnter:function(e,t,o){console.log(e),console.log(t),console.log("alors 1 ?"),console.log(X.app.$root.connect),console.log("alors 2 ?"),X.app.$root.connect?o():o({name:"Login"})}}],X=new d["a"]({routes:U}),Y=X,Z=o("9483");Object(Z["a"])("".concat("https://schloss444.github.io/vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].config.productionTip=!1,new n["default"]({router:Y,data:{connect:!1},render:function(e){return e(p)}}).$mount("#app")},6788:function(e,t,o){},"78ae":function(e,t,o){},"85ec":function(e,t,o){},a7f0:function(e,t,o){},af1a:function(e,t,o){"use strict";var n=o("5047"),r=o.n(n);r.a},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d6db:function(e,t,o){"use strict";var n=o("e67a"),r=o.n(n);r.a},e67a:function(e,t,o){},e8c9:function(e,t,o){"use strict";var n=o("78ae"),r=o.n(n);r.a}});
//# sourceMappingURL=app.e2e137c6.js.map