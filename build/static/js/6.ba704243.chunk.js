(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[6,10],{102:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));t(0);var n=t(13),s=t(16),c=t(94),r=t(93),l=t(26),i=t(25),o=t.n(i),j=t(3);function b(e){var a=e.show,t=e.onClose,i=e.user,b=e.loggedInUser;return a?o.a.createPortal(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"togglebar-overlay",onClick:t}),Object(j.jsxs)("div",{className:"toggle-sidebar",children:[Object(j.jsx)("div",{className:"toggle-sidebar__close",onClick:t,children:Object(j.jsx)(r.a,{icon:c.r})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"toggle-sidebar__item",children:Object(j.jsxs)(s.b,{className:"toggle-sidebar__link",to:"/user/".concat(null===i||void 0===i?void 0:i.username),"aria-label":"Dashboard",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.t})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"Profile"})]})}),b?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"toggle-sidebar__item",children:Object(j.jsxs)(s.b,{className:"toggle-sidebar__link",to:n.a,"aria-label":"Dashboard",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.e})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"Bookmarks"})]})}),Object(j.jsx)("li",{className:"toggle-sidebar__item",children:Object(j.jsxs)(s.b,{className:"toggle-sidebar__link",to:n.a,"aria-label":"Dashboard",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.l})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"List"})]})}),Object(j.jsx)("li",{className:"toggle-sidebar__item",children:Object(j.jsxs)(s.b,{className:"toggle-sidebar__link",to:n.a,"aria-label":"Dashboard",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.g})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"Settings"})]})}),Object(j.jsx)("li",{className:"toggle-sidebar__item",children:Object(j.jsxs)(s.b,{className:"toggle-sidebar__link",to:n.a,"aria-label":"Dashboard",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.j})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"Your Cards"})]})}),Object(j.jsx)("li",{className:"toggle-sidebar__item",children:Object(j.jsxs)(s.b,{className:"toggle-sidebar__link",to:n.a,"aria-label":"Dashboard",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.s})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"Add Bank"})]})}),Object(j.jsx)("li",{className:"toggle-sidebar__item",onClick:function(){Object(l.c)(),window.location=n.b},onKeyDown:function(e){"Enter"===e.key&&(Object(l.c)(),window.location=n.b)},children:Object(j.jsxs)("div",{className:"toggle-sidebar__link",children:[Object(j.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(j.jsx)(r.a,{icon:c.q})}),Object(j.jsx)("span",{className:"toggle-sidebar__link--text",children:"Log Out"})]})})]}):Object(j.jsx)("li",{className:"link-list-item link-list-item--newpost",children:Object(j.jsxs)(s.b,{className:"link",to:n.b,"aria-label":"Newpost",children:[Object(j.jsx)("span",{className:"link--icon",children:Object(j.jsx)(r.a,{icon:c.q})}),Object(j.jsx)("span",{className:"link--text",children:"Log In"})]})}),"                    "]})]})]}),document.getElementById("togglebar")):null}},103:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(5),s=t.n(n),c=t(10),r=t(24),l=t(0),i=t(13),o=t(2),j=t(16),b=t(94),u=t(93),d=t(17),h=t(97),O=t(102),x=t(92),m=t(96),p=t(3);function g(){var e=Object(l.useState)(!1),a=Object(r.a)(e,2),t=a[0],n=a[1],g=Object(l.useState)(),f=Object(r.a)(g,2),N=f[0],k=f[1],v=Object(l.useContext)(d.a).user,_=Object(h.a)(null===v||void 0===v?void 0:v.username).user;Object(o.g)();return Object(l.useEffect)(Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.b)(null===_||void 0===_?void 0:_.username).then((function(e){!e.displayImg||e.displayImg.profileImg.length?k(e.displayImg.profileImg):k(m.a)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[_]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"leftbar__toglebar",children:Object(p.jsx)(O.a,{show:t,user:_,loggedInUser:v,onClose:function(){return n(!1)}})}),Object(p.jsx)("div",{className:"leftbar",children:Object(p.jsxs)("ul",{className:"link-list",children:[Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"u-center-text",to:"/user/".concat(null===_||void 0===_?void 0:_.username),"aria-label":"Profile",children:[Object(p.jsx)("img",{className:"link-list--proImg",src:N,onError:function(e){e.target.src=m.a},alt:null===_||void 0===_?void 0:_.username}),Object(p.jsx)("span",{className:"link--text",children:null===_||void 0===_?void 0:_.username})]})}),Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:i.a,"aria-label":"Dashboard",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.i})}),Object(p.jsx)("span",{className:"link--text",children:"Home"})]})}),v&&Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:i.a,"aria-label":"Dashboard",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.d})}),Object(p.jsx)("span",{className:"link--text",children:"Notifications"})]})}),Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:"".concat(i.c),"aria-label":"Messages",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.m})}),Object(p.jsx)("span",{className:"link--text",children:"Messages"})]})}),Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:i.a,"aria-label":"Dashboard",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.e})}),Object(p.jsx)("span",{className:"link--text",children:"Bookmarks"})]})}),Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:i.a,"aria-label":"Dashboard",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.l})}),Object(p.jsx)("span",{className:"link--text",children:"List"})]})}),Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:i.a,"aria-label":"Dashboard",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.f})}),Object(p.jsx)("span",{className:"link--text",children:"Subscription"})]})}),Object(p.jsx)("li",{className:"link-list-item",children:Object(p.jsxs)(j.b,{className:"link",to:"/user/".concat(null===_||void 0===_?void 0:_.username),"aria-label":"Dashboard",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.t})}),Object(p.jsx)("span",{className:"link--text",children:"My Profile"})]})})]}),Object(p.jsx)("li",{className:"link-list-item",onClick:function(){return n(!0)},children:Object(p.jsxs)(j.b,{className:"link",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.c})}),Object(p.jsx)("span",{className:"link--text",children:"More"})]})}),v?Object(p.jsx)("li",{className:"link-list-item link-list-item--newpost",children:Object(p.jsxs)(j.b,{className:"link",to:i.d,"aria-label":"Newpost",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.n})}),Object(p.jsx)("span",{className:"link--text",children:"New Post"})]})}):Object(p.jsx)("li",{className:"link-list-item link-list-item--newpost",children:Object(p.jsxs)(j.b,{className:"link",to:i.b,"aria-label":"Newpost",children:[Object(p.jsx)("span",{className:"link--icon",children:Object(p.jsx)(u.a,{icon:b.q})}),Object(p.jsx)("span",{className:"link--text",children:"Log In"})]})})]})})]})}},108:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(24),s=t(94),c=t(93),r=t(0),l=t(96),i=t(11),o=t.n(i),j=t(18);var b=t(3);var u=t(16);function d(){var e=Object(r.useState)(),a=Object(n.a)(e,2),t=a[0],i=a[1],d=Object(r.useState)([]),h=Object(n.a)(d,2),O=h[0],x=h[1],m=Object(r.useState)(1),p=Object(n.a)(m,2),g=p[0],f=p[1],N=function(e,a){var t=Object(r.useState)(!0),s=Object(n.a)(t,2),c=s[0],l=s[1],i=Object(r.useState)(!1),b=Object(n.a)(i,2),u=b[0],d=b[1],h=Object(r.useState)([]),O=Object(n.a)(h,2),x=O[0],m=O[1],p=Object(r.useState)(!1),g=Object(n.a)(p,2),f=g[0],N=g[1],k=j.a+"/user";return Object(r.useEffect)((function(){m([])}),[e]),Object(r.useEffect)((function(){var t;return l(!0),d(!1),o()({method:"GET",url:"".concat(k,"/search/").concat(e),params:{page:a,limit:5},cancelToken:new o.a.CancelToken((function(e){return t=e}))}).then((function(e){console.log(e),N(e.data.length>0),l(!1),m(e.data)})).catch((function(e){o.a.isCancel(e)||(d(!0),l(!1),console.log(e))})),function(){return t()}}),[e,a]),{result:x,loading:c,error:u,hasMore:f}}(t,g),k=N.result,v=(N.hasMore,N.loading);N.error;Object(r.useEffect)((function(){v||x(k),t||x([])}),[k,v]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"search-box",children:[Object(b.jsx)("input",{id:"input",className:"search__input",onChange:function(e){i(e.target.value),f(1)},placeholder:"Search Users"}),!t&&Object(b.jsx)("div",{className:"search__icon",children:Object(b.jsx)(c.a,{icon:s.p})}),t&&!v&&Object(b.jsx)(c.a,{onClick:function(){i(""),document.getElementById("input").value=""},icon:s.r}),v&&Object(b.jsx)("img",{className:"search__loading",src:l.b})]}),t&&Object(b.jsx)("div",{className:"search-result",children:O.map((function(e){return Object(b.jsxs)(u.b,{to:"/user/".concat(e.username),className:"search-result__user",children:[Object(b.jsx)("img",{className:"search-result--img",src:e.profileImg.length?e.profileImg:l.a}),Object(b.jsxs)("div",{className:"search-result--info",children:[Object(b.jsx)("span",{children:e.username}),Object(b.jsx)("span",{children:e.fullname})]})]})}))})]})}},122:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(24),s=t(0),c=t(2),r=t(16),l=t(94),i=t(93),o=t(13),j=t(97),b=t(99),u=t(103),d=t(108),h=t(102),O=t(3),x=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,118))})),m=Object(s.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,116))})),p=Object(s.lazy)((function(){return t.e(11).then(t.bind(null,117))})),g=Object(s.lazy)((function(){return t.e(9).then(t.bind(null,119))}));function f(e){var a=e.user,t=Object(s.useState)(!1),f=Object(n.a)(t,2),N=f[0],k=f[1],v=(a&&a.id,a?a.username:null),_=Object(j.a)(v),w=_.user,y=_.setActiveUser,D=Object(c.j)(),I=D.path,C=D.url;function S(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"phonebar",children:[Object(O.jsx)(r.b,{className:"phonebar__link",to:o.a,"aria-label":"Dashboard",children:Object(O.jsx)("span",{className:"phonebar__link--icon",children:Object(O.jsx)(i.a,{icon:l.i})})}),Object(O.jsx)(r.b,{className:"phonebar__link",to:o.a,"aria-label":"Dashboard",children:Object(O.jsx)("span",{className:"phonebar__link--icon",children:Object(O.jsx)(i.a,{icon:l.d})})}),Object(O.jsx)(r.b,{className:"phonebar__link",to:o.d,"aria-label":"Dashboard",children:Object(O.jsx)("span",{className:"phonebar__link--icon",children:Object(O.jsx)(i.a,{icon:l.o})})}),Object(O.jsx)(r.b,{className:"phonebar__link",to:o.c,"aria-label":"Dashboard",children:Object(O.jsx)("span",{className:"phonebar__link--icon",children:Object(O.jsx)(i.a,{icon:l.m})})}),Object(O.jsx)(r.b,{className:"phonebar__link",onClick:function(){return k(!0)},"aria-label":"Dashboard",children:Object(O.jsx)("span",{className:"phonebar__link--icon",children:Object(O.jsx)(i.a,{icon:l.t})})})]})})}return Object(s.useEffect)((function(){document.title="Touch"}),[]),Object(O.jsx)(b.a.Provider,{value:{user:w,setActiveUser:y},children:Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsxs)("div",{className:"dashboard__phonebar",children:[Object(O.jsx)(S,{}),Object(O.jsx)("div",{className:"dashboard__togglebar",children:Object(O.jsx)(h.a,{show:N,user:w,loggedInUser:a,onClose:function(){return k(!1)}})})]}),Object(O.jsx)("div",{className:"dashboard__leftbar",children:Object(O.jsx)(u.a,{path:I,url:C})}),Object(O.jsx)("div",{className:"dashboard__main",children:Object(O.jsxs)(c.d,{children:[Object(O.jsx)(c.b,{path:o.f,component:x}),Object(O.jsx)(c.b,{path:o.a,component:m,exact:!0}),Object(O.jsx)(c.b,{path:o.c,component:p}),Object(O.jsx)(c.b,{path:o.d,component:g})]})}),Object(O.jsx)("div",{className:"dashboard__rightbar",children:Object(O.jsx)("div",{className:"dashboard__right--search",children:Object(O.jsx)(d.a,{})})})]})})}},92:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"g",(function(){return b})),t.d(a,"e",(function(){return u})),t.d(a,"b",(function(){return d})),t.d(a,"d",(function(){return h})),t.d(a,"c",(function(){return O})),t.d(a,"f",(function(){return x}));var n=t(5),s=t.n(n),c=t(10),r=t(11),l=t.n(r),i=t(18),o=(t(15),i.a+"/user"),j=function(){var e=Object(c.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/username/").concat(a));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(n=e.t0.response)||void 0===n?void 0:n.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(s.a.mark((function e(a,t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.put("".concat(o,"/profile-img/").concat(a),{profileImg:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(c=e.t0.response)||void 0===c?void 0:c.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a,t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(s.a.mark((function e(a,t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.delete("".concat(o,"/profile-img/").concat(a));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(c=e.t0.response)||void 0===c?void 0:c.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/display-imgs/").concat(a));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(n=e.t0.response)||void 0===n?void 0:n.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/username/following/").concat(a));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(n=e.t0.response)||void 0===n?void 0:n.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/username/followers/").concat(a));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(n=e.t0.response)||void 0===n?void 0:n.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(s.a.mark((function e(a,t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return console.log("unfollwing"),e.next=4,l.a.put("".concat(o,"/unfollow/").concat(t),{followingUserId:n});case 4:e.next=9;break;case 6:return console.log("follow"),e.next=9,l.a.put("".concat(o,"/follow/").concat(t),{followingUserId:n});case 9:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()},96:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return s}));var n="/images/avatars/default.png",s="/loading.svg"},97:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var n=t(5),s=t.n(n),c=t(14),r=t(10),l=t(24),i=t(0),o=t(92);function j(e){var a=Object(i.useState)(),t=Object(l.a)(a,2),n=t[0],j=t[1];return Object(i.useEffect)((function(){function a(){return(a=Object(r.a)(s.a.mark((function e(a){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(a);case 2:return t=e.sent,e.next=5,Object(o.c)(a);case 5:return n=e.sent,e.next=8,Object(o.d)(a);case 8:r=e.sent,j(Object(c.a)(Object(c.a)({},t),{},{followers:n,following:r})||{});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&function(e){a.apply(this,arguments)}(e)}),[e]),{user:n,setActiveUser:j}}},99:function(e,a,t){"use strict";var n=t(0),s=Object(n.createContext)(null);a.a=s}}]);
//# sourceMappingURL=6.ba704243.chunk.js.map