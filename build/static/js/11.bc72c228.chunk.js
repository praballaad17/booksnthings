(this.webpackJsonpbooknthings=this.webpackJsonpbooknthings||[]).push([[11],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(5),s=n.n(a),c=n(10),r=n(24),l=n(0),i=n(13),o=n(2),b=n(16),j=n(94),d=n(95),u=n(17),g=n(99),x=n(26),O=n(25),m=n.n(O),h=n(3);function p(e){var t=e.show,n=e.onClose,a=e.user,s=e.loggedInUser;return t?m.a.createPortal(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"togglebar-overlay",onClick:n}),Object(h.jsxs)("div",{className:"toggle-sidebar",children:[Object(h.jsx)("div",{className:"toggle-sidebar__close",onClick:n,children:Object(h.jsx)(d.a,{icon:j.o})}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:"/user/".concat(null===a||void 0===a?void 0:a.username),"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.q})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Profile"})]})}),s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.d})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Bookmarks"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.j})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"List"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.e})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Settings"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.h})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Your Cards"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.p})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Add Bank"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",onClick:function(){Object(x.c)(),window.location=i.c},onKeyDown:function(e){"Enter"===e.key&&(Object(x.c)(),window.location=i.c)},children:Object(h.jsxs)("div",{className:"toggle-sidebar__link",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.n})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Log Out"})]})})]}):Object(h.jsx)("li",{className:"link-list-item link-list-item--newpost",children:Object(h.jsxs)(b.b,{className:"link",to:i.c,"aria-label":"Newpost",children:[Object(h.jsx)("span",{className:"link--icon",children:Object(h.jsx)(d.a,{icon:j.n})}),Object(h.jsx)("span",{className:"link--text",children:"Log In"})]})}),"                    "]})]})]}),document.getElementById("togglebar")):null}var f=n(93),k=n(97);function _(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],O=Object(l.useState)(),m=Object(r.a)(O,2),_=(m[0],m[1]),N=Object(l.useContext)(u.a).user,v=Object(g.a)(null===N||void 0===N?void 0:N.username).user;Object(o.g)();return Object(l.useEffect)(Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)(null===v||void 0===v?void 0:v.username).then((function(e){!e.displayImg||e.displayImg.profileImg.length?_(e.displayImg.profileImg):_(k.a)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[v]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"leftbar__toglebar",children:Object(h.jsx)(p,{show:n,user:v,loggedInUser:N,onClose:function(){return a(!1)}})}),Object(h.jsx)("div",{className:"leftbar",children:Object(h.jsxs)("ul",{className:"link-list",children:[Object(h.jsx)("li",{className:"link-list-item",children:Object(h.jsx)(b.b,{className:"u-center-text heading-logo",to:i.b,"aria-label":"LOGO",children:"Book'n'things"})}),Object(h.jsx)("li",{className:"link-list-item",children:Object(h.jsxs)(b.b,{className:"link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"link--icon",children:Object(h.jsx)(d.a,{icon:j.g})}),Object(h.jsx)("span",{className:"link--text",children:"My Library"})]})}),N&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"link-list-item",children:Object(h.jsxs)(b.b,{className:"link",to:i.i,"aria-label":"Bookshell",children:[Object(h.jsx)("span",{className:"link--icon",children:Object(h.jsx)(d.a,{icon:j.c})}),Object(h.jsx)("span",{className:"link--text",children:"Request Your Book"})]})}),Object(h.jsx)("li",{className:"link-list-item",children:Object(h.jsxs)(b.b,{className:"link",to:i.a,"aria-label":"Bookshell",children:[Object(h.jsx)("span",{className:"link--icon",children:Object(h.jsx)(d.a,{icon:j.e})}),Object(h.jsx)("span",{className:"link--text",children:"Settings"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.h})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Your Cards"})]})}),Object(h.jsx)("li",{className:"toggle-sidebar__item",children:Object(h.jsxs)(b.b,{className:"toggle-sidebar__link",to:i.b,"aria-label":"Dashboard",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.p})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Add Bank"})]})})]}),N?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"toggle-sidebar__item",onClick:function(){Object(x.c)(),window.location=i.c},onKeyDown:function(e){"Enter"===e.key&&(Object(x.c)(),window.location=i.c)},children:Object(h.jsxs)("div",{className:"toggle-sidebar__link",children:[Object(h.jsx)("span",{className:"toggle-sidebar__link--icon",children:Object(h.jsx)(d.a,{icon:j.n})}),Object(h.jsx)("span",{className:"toggle-sidebar__link--text",children:"Log Out"})]})}),Object(h.jsx)("li",{className:"link-list-item link-list-item--newpost",children:Object(h.jsxs)(b.b,{className:"link",to:i.f,"aria-label":"Newpost",children:[Object(h.jsx)("span",{className:"link--icon",children:Object(h.jsx)(d.a,{icon:j.l})}),Object(h.jsx)("span",{className:"link--text",children:"New Post"})]})})]}):Object(h.jsx)("li",{className:"link-list-item link-list-item--newpost",children:Object(h.jsxs)(b.b,{className:"link",to:i.c,"aria-label":"Newpost",children:[Object(h.jsx)("span",{className:"link--icon",children:Object(h.jsx)(d.a,{icon:j.n})}),Object(h.jsx)("span",{className:"link--text",children:"Log In"})]})})]})})]})}},162:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n(0),s=n(114),c=n(3);function r(){return Object(a.useEffect)((function(){document.title="Not Found - Touch"}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"dashboard",children:["      ",Object(c.jsx)("div",{className:"dashboard__leftbar",children:Object(c.jsx)(s.a,{})}),Object(c.jsx)("div",{className:"mx-auto max-w-screen-lg",children:Object(c.jsx)("p",{className:"text-center text-2xl",children:"Not Found!"})})]})})}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return x})),n.d(t,"f",(function(){return O}));var a=n(5),s=n.n(a),c=n(10),r=n(11),l=n.n(r),i=n(18),o=(n(15),i.a+"/user"),b=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/username/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(a=e.t0.response)||void 0===a?void 0:a.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(s.a.mark((function e(t,n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.put("".concat(o,"/profile-img/").concat(t),{profileImg:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(c=e.t0.response)||void 0===c?void 0:c.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(s.a.mark((function e(t,n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.delete("".concat(o,"/profile-img/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(c=e.t0.response)||void 0===c?void 0:c.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/display-imgs/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(a=e.t0.response)||void 0===a?void 0:a.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/username/following/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(a=e.t0.response)||void 0===a?void 0:a.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(o,"/username/followers/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(null===(a=e.t0.response)||void 0===a?void 0:a.data.error);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(s.a.mark((function e(t,n,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return console.log("unfollwing"),e.next=4,l.a.put("".concat(o,"/unfollow/").concat(n),{followingUserId:a});case 4:e.next=9;break;case 6:return console.log("follow"),e.next=9,l.a.put("".concat(o,"/follow/").concat(n),{followingUserId:a});case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var a="/images/avatars/default.png",s="/loading.svg"},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(5),s=n.n(a),c=n(14),r=n(10),l=n(24),i=n(0),o=n(93);function b(e){var t=Object(i.useState)(),n=Object(l.a)(t,2),a=n[0],b=n[1];return Object(i.useEffect)((function(){function t(){return(t=Object(r.a)(s.a.mark((function e(t){var n,a,r,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t);case 2:return n=e.sent,e.next=5,Object(o.c)(t);case 5:return a=e.sent,e.next=8,Object(o.d)(t);case 8:return r=e.sent,e.next=11,Object(o.b)(t);case 11:l=e.sent,i=l.displayImg,console.log(i),b(Object(c.a)(Object(c.a)({},n),{},{followers:a,following:r,displayImg:i})||{});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e&&function(e){t.apply(this,arguments)}(e)}),[e]),console.log(a),{user:a,setActiveUser:b}}}}]);
//# sourceMappingURL=11.bc72c228.chunk.js.map