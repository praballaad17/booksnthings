(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[3],{13:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i}));var r="/",a="/login",c="/sign-up",u="/user/:username",o="/not-found",s="/messages",i="/newpost"},17:function(t,e,n){"use strict";var r=n(0),a=Object(r.createContext)(null);e.a=a},18:function(t){t.exports=JSON.parse('{"a":"https://touch-app-server.herokuapp.com/api"}')},26:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return O}));var r,a=n(5),c=n.n(a),u=n(14),o=n(10),s=n(11),i=n.n(s),l=n(18),f=n(15),p=l.a+"/auth",b="token";r=localStorage.getItem(b),i.a.defaults.headers.common["x-auth-token"]=r;var d=function(){var t=Object(o.a)(c.a.mark((function t(e,n,r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e&&n?{data:{usernameOrEmail:e,password:n}}:{headers:{authorization:r}},t.next=4,i()("".concat(p,"/login"),Object(u.a)({method:"POST"},a));case 4:return o=t.sent,localStorage.setItem(b,o.data.token),t.abrupt("return",o.data);case 9:throw t.prev=9,t.t0=t.catch(0),new Error(t.t0.response.data.error);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,r){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(c.a.mark((function t(e,n,r,a){var u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("".concat(p,"/register"),{email:r,fullName:n,username:e,password:a});case 3:return u=t.sent,localStorage.setItem(b,u.data.token),t.abrupt("return",u.data);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.response.data.error);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n,r,a){return t.apply(this,arguments)}}();function h(){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem(b);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){try{var t=localStorage.getItem(b);return Object(f.a)(t)}catch(e){return null}}},89:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(25),u=n.n(c),o=n(16),s=n(2),i=n(36),l=n.n(i),f=n(3);function p(){return Object(f.jsx)(l.a,{type:"TailSpin",color:"#00000059",height:70,width:70,className:"flex justify-center mt-12"})}var b=n(13),d=n(17),j=n(24),h=n(15);var m=n(14),O=n(38),v=n(26),x=["children"];function g(t){var e=t.children,n=Object(O.a)(t,x),r=Object(v.a)();return Object(f.jsx)(s.b,Object(m.a)(Object(m.a)({},n),{},{render:function(t){var n=t.location;return r?a.a.cloneElement(e,{user:r}):r?null:Object(f.jsx)(s.a,{to:{pathname:b.b,state:{from:n}}})}}))}var w=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,120))})),y=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,121))})),k=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,122))})),S=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,123))}));function I(){var t=function(){var t=Object(r.useState)(),e=Object(j.a)(t,2),n=e[0],a=e[1];return Object(r.useEffect)((function(){try{var t=localStorage.getItem("token");a(Object(h.a)(t))}catch(e){a(null)}}),[]),n}();return console.log(t),Object(f.jsx)(d.a.Provider,{value:{user:t},children:Object(f.jsx)(o.a,{children:Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(p,{}),children:Object(f.jsxs)(s.d,{children:[Object(f.jsx)(s.b,{path:b.b,component:w}),Object(f.jsx)(s.b,{path:b.g,component:y}),Object(f.jsx)(g,{user:t,path:b.a,children:Object(f.jsx)(k,{})}),Object(f.jsx)(s.b,{component:S})]})})})})}n(89),n(90);u.a.render(Object(f.jsx)(I,{}),document.getElementById("root"))}},[[91,4,5]]]);
//# sourceMappingURL=main.47835e04.chunk.js.map