(this.webpackJsonpbooknthings=this.webpackJsonpbooknthings||[]).push([[11],{109:function(t,e,r){"use strict";var n=r(0),a=Object(n.createContext)(null);e.a=a},111:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(21);var a=r(28);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},161:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return m}));var n=r(0),a=r(16),c=r(2),u=r(13),s=r(95),o=r(109),i=r(5),l=r.n(i),p=r(111),b=r(10),f=r(24),d=r(93);var h=r(27),v=r(3),j=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,157))})),O=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(7)]).then(r.bind(null,158))}));function m(){var t=function(t,e){var r=Object(n.useState)(!0),a=Object(f.a)(r,2),c=a[0],u=a[1],s=Object(n.useState)(!1),o=Object(f.a)(s,2),i=o[0],h=o[1],v=Object(n.useState)([]),j=Object(f.a)(v,2),O=j[0],m=j[1],x=Object(n.useState)([]),w=Object(f.a)(x,2),y=w[0],k=w[1],g=Object(n.useState)(!1),_=Object(f.a)(g,2),M=_[0],S=_[1];return Object(n.useEffect)(Object(b.a)(l.a.mark((function e(){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){return(n=Object(b.a)(l.a.mark((function e(){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.f)(t.username,1,10);case 3:return r=e.sent,m((function(t){return[].concat(Object(p.a)(t),Object(p.a)(r.result))})),e.next=7,Object(d.g)(t._id);case 7:n=e.sent,k((function(t){return[].concat(Object(p.a)(t),Object(p.a)(n))})),S(r.result.length>0),u(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),h(!0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)},r=function(){return n.apply(this,arguments)},u(!0),h(!1),r();case 5:case"end":return e.stop()}}),e)}))),[null===t||void 0===t?void 0:t._id,e]),{material:O,purcMaterial:y,loading:c,error:i,hasMore:M,setMaterial:m,setPurcMaterial:k}}(Object(n.useContext)(s.a).user),e=t.material,r=t.purcMaterial,i=t.loading;return Object(v.jsx)(o.a.Provider,{value:{MyMaterial:e,PursMaterial:r,loading:i},children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"bookshell__head",children:[Object(v.jsx)(a.c,{className:"bookshell__title",exact:!0,activeClassName:"bookshell__head-active",to:"/bookshell/mymaterial","aria-label":"Profile",children:"My Material"}),Object(v.jsx)(a.c,{className:"bookshell__tittle",activeClassName:"bookshell__head-active",to:"/bookshell/pursmaterial","aria-label":"Profile",children:"Purchased Material"})]}),Object(v.jsx)(n.Suspense,{fallback:Object(v.jsx)(h.a,{}),children:Object(v.jsxs)(c.d,{children:[Object(v.jsx)(c.a,{exact:!0,from:u.a,to:u.e}),Object(v.jsx)(c.b,{path:u.h,component:j}),Object(v.jsx)(c.b,{path:u.e,component:O})]})})]})})}},93:function(t,e,r){"use strict";r.d(e,"h",(function(){return l})),r.d(e,"f",(function(){return p})),r.d(e,"d",(function(){return b})),r.d(e,"b",(function(){return f})),r.d(e,"g",(function(){return d})),r.d(e,"a",(function(){return h})),r.d(e,"e",(function(){return v})),r.d(e,"c",(function(){return j}));var n=r(5),a=r.n(n),c=r(10),u=r(11),s=r.n(u),o=r(17),i=o.a+"/post",l=function(){var t=Object(c.a)(a.a.mark((function t(e,r,n,c,u,o,l){var p,b;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("".concat(i,"/add-material/").concat(c),{files:e,title:r,caption:n,paid:u,price:o},l);case 3:return p=t.sent,b=p.data,t.abrupt("return",{data:b});case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0.response.data.error);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r,n,a,c,u,s){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e,r,n,c){var u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(i,"/user-material/").concat(e),{params:{page:n,limit:c,logginUserId:r}});case 3:return u=t.sent,t.abrupt("return",u.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r,n,a){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(i,"/title/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e,r,n,c){var u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("".concat(i,"/buy-material/").concat(e),{username:n,author:c,userId:r});case 3:return u=t.sent,t.abrupt("return",u.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r,n,a){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(i,"/get-purc-material/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e,r,n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("".concat(i,"/add-review/").concat(n),{message:e,userId:r});case 3:return c=t.sent,t.abrupt("return",c.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(i,"/get-review/").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e,r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("".concat(i,"/check-purchased"),{userId:e,materialId:r});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.response.data.error);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=11.db7070ec.chunk.js.map