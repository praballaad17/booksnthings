(this.webpackJsonpbooknthings=this.webpackJsonpbooknthings||[]).push([[7],{101:function(e,t){},104:function(e,t){},105:function(e,t){},106:function(e,t){},107:function(e,t){},108:function(e,t){},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(5),r=n.n(c),a=n(10),i=n(24),s=n(0),l=n(26),o=n.n(l),d=n(97),j=n(93),u=n(27),b=n(3);function h(e){var t=e.material,n=e.reader,c=e.onClose,l=Object(s.useState)(),h=Object(i.a)(l,2),O=h[0],f=h[1],m=Object(s.useState)(!1),x=Object(i.a)(m,2),g=x[0],v=x[1];return console.log(O),Object(s.useEffect)(Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),console.log("loading"),e.next=4,Object(j.d)(null===t||void 0===t?void 0:t.title);case 4:n=e.sent,f(null===n||void 0===n?void 0:n.files),console.log("not loading"),v(!1);case 8:case"end":return e.stop()}}),e)}))),[]),n?o.a.createPortal(Object(b.jsxs)("div",{className:"reader",children:[Object(b.jsxs)("div",{className:"reader__header",children:[Object(b.jsx)("h2",{children:t.title}),Object(b.jsx)("div",{onClick:c,children:"x"})]}),g?Object(b.jsx)("div",{className:"u-all-center",children:Object(b.jsx)(u.a,{})}):Object(b.jsx)("div",{style:{height:"750px"},children:O?Object(b.jsx)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(d.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:Object(b.jsx)(d.Viewer,{fileUrl:O})})}):Object(b.jsx)("div",{style:{alignItems:"center",border:"2px dashed rgba(0, 0, 0, .3)",display:"flex",fontSize:"2rem",height:"100%",justifyContent:"center",width:"100%"},children:"Preview area"})})]}),document.getElementById("reader")):null}},158:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var c=n(24),r=n(0),a=n(16),i=n(109),s=n(110),l=n(113),o=n.n(l),d=n(3);function j(){var e=Object(r.useContext)(i.a),t=e.MyMaterial,n=e.loading,l=Object(r.useState)(!1),j=Object(c.a)(l,2),u=j[0],b=j[1],h=Object(r.useState)(),O=Object(c.a)(h,2),f=O[0],m=O[1];return n?Object(d.jsx)(o.a,{count:5,width:1100,height:90,className:"mb-5"}):t.length&&!n?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"mymaterial",children:[t.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"mymaterial__head",children:[Object(d.jsx)("h2",{className:"heading-secondary",children:Object(d.jsx)(a.b,{to:"/material/".concat(e.title),className:"search-result__material",children:e.title})}),Object(d.jsx)("button",{onClick:function(){return function(e){b(!0),console.log(e),m(e)}(e)},className:"btn btn--read",children:"Read"})]})})})),u&&Object(d.jsx)(s.a,{reader:u,material:f,onClose:function(){return b(!1)}})]})}):t.length||n?void 0:Object(d.jsx)("div",{className:"u-all-center",children:"Upload Your Content..."})}}}]);
//# sourceMappingURL=7.443ed6f2.chunk.js.map