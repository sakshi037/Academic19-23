(this["webpackJsonplive-result"]=this["webpackJsonplive-result"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(95),a(21)),i=a.n(s),l=a(27),u=a(17),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("update available, waiting for refresh")}))):f(t,e)}))}}function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=a(72),h=a(39),p=a(14);function g(){return new Worker(a.p+"static/js/index.worker.c493fc4e.worker.js")}var m=a(159),v=a(169),x=a(160),O=a(174),k=a(154),w=a(157),y=a(5),C=Object(k.a)((function(e){return{root:{width:"100%",position:"fixed"}}}));function E(){var e=C();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(w.a,{color:"secondary"})})}var S=a(172),T=a(171),I=a(173),M=a(168),N=a(76),D=a.n(N),W=a(77),B=a.n(W),P=[{value:"Choose",label:"Choose"},{value:"C S",label:"CSE"},{value:"EC",label:"ECE"},{value:"EE",label:"EE"},{value:"CE",label:"CE"},{value:"ME",label:"ME"},{value:"BT",label:"BT"}],R=["dat/B. TECH. I SEM DEC 19.xlsx","dat/B. TECH. II SEM DECEMBER 2020(COVID).xlsx","dat/B. TECH. III SEM DECEMBER 2020(COVID 19).xlsx","dat/B. TECH. IV SEM JUNE 2021(COVID 19).xlsx"],H=a(162),L=a(166),z=a(165),A=a(161),J=a(163),U=a(164),F=a(73),V=a.n(F),q=a(60),G=a.n(q),K=a(74),Z=a.n(K),$=a(53);$.a.register.apply($.a,Object(p.a)($.b));var _=function(e){var t=e.data,a=e.darkMode,n=r.a.createRef(),c=r.a.useRef();return r.a.useEffect((function(){if(void 0!==c.current){var e=c.current.options;a?(e.plugins.legend.labels.color="rgba(255, 255, 255, 0.8)",e.scales.x.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.y.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.x.grid.color="rgba(255, 255, 255, 0.2)",e.scales.y.grid.color="rgba(255, 255, 255, 0.2)",c.current.update()):(e.plugins.legend.labels.color="rgba(0, 0, 0, 0.8)",e.scales.x.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.y.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.x.grid.color="rgba(0, 0, 0, 0.2)",e.scales.y.grid.color="rgba(0, 0, 0, 0.2)",c.current.update())}}),[a]),r.a.useEffect((function(){if(void 0!==c.current){var e=t.map((function(e){return e.sem})),a=t.map((function(e){return e.percentage}));e.pop(),a.pop();var n=Object(p.a)(Array(t.length)).fill(t[t.length-1].percentage);c.current.data.labels=e,c.current.data.datasets[0].data=a,c.current.data.datasets[1].data=n,c.current.update()}}),[t]),r.a.useEffect((function(){var e=t.map((function(e){return e.sem})),r=t.map((function(e){return e.percentage}));e.pop(),r.pop();var o=Object(p.a)(Array(t.length)).fill(t[t.length-1].percentage);c.current=new $.a(n.current.getContext("2d"),{type:"line",data:{labels:e,datasets:[{label:"% in each sem",data:r,backgroundColor:["rgba(255, 99, 132, 0.3)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],fill:{target:"origin"},borderWidth:2,cubicInterpolationMode:"default",tension:.3},{label:"Total %",data:o,backgroundColor:["rgba(54, 162, 235, 0.3)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:2}]},options:{plugins:{legend:{display:!0,labels:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"}}},scales:{x:{ticks:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}},y:{min:0,beginAtZero:!0,ticks:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}}}}})}),[]),Object(y.jsx)("div",{style:{marginTop:"35px"},children:Object(y.jsx)("canvas",{ref:n})})},Q=function(e){var t=e.name,a=e.data,n=e.load,r=e.reset,c=e.darkMode,o=e.savedLoad,s=e.handleFav,i=e.favDel,l=e.back;return Object(y.jsxs)(m.a,{maxWidth:"md",children:[Object(y.jsx)(x.a,{variant:"contained",color:"primary",style:{marginTop:6},startIcon:Object(y.jsx)(V.a,{}),onClick:function(){l(),r()},size:"small",children:"Home"}),"No"===o?Object(y.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(G.a,{}),onClick:s,disabled:n,size:"small",children:"Save"}):Object(y.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(Z.a,{}),onClick:function(){return i(o)},disabled:n,size:"small",children:"Del"}),Object(y.jsxs)("h2",{style:{marginTop:6},children:[" Hello ",t]}),Object(y.jsx)(A.a,{component:m.a,children:Object(y.jsxs)(H.a,{size:"small",children:[Object(y.jsx)(J.a,{children:Object(y.jsxs)(U.a,{children:[Object(y.jsx)(z.a,{align:"center",children:Object(y.jsx)("b",{children:"Sem"})}),Object(y.jsx)(z.a,{align:"center",children:Object(y.jsx)("b",{children:"Marks"})}),Object(y.jsx)(z.a,{align:"center",children:Object(y.jsx)("b",{children:"Percentage"})})]})}),Object(y.jsx)(L.a,{children:a.map((function(e,t){return Object(y.jsxs)(U.a,{children:[Object(y.jsx)(z.a,{component:"th",scope:"row",align:"center",children:e.sem}),Object(y.jsx)(z.a,{align:"center",children:e.marks}),Object(y.jsxs)(z.a,{align:"center",children:[e.percentage,"%"]})]},t)}))})]})}),Object(y.jsx)(_,{data:a,darkMode:c})]})},X=a(176),Y=a(175),ee=function(e){var t=e.saved,a=e.favShow,n=e.favDel;return Object(y.jsxs)("div",{children:[Object(y.jsx)(Y.a,{avatar:Object(y.jsx)(G.a,{}),label:"Saved :"}),Object(y.jsx)("ul",{children:0===t.length?"None, try saving for faster visits! (\xb0\u25bd\xb0)":t.map((function(e,t){return Object(y.jsx)("li",{children:Object(y.jsx)(Y.a,{avatar:Object(y.jsx)(X.a,{children:e.name[0]}),label:e.name,variant:"outlined",style:{marginBottom:8},onClick:function(){return a(t)},onDelete:function(){return n(t)}})},t)}))})]})},te=function(e,t){var a=r.a.useState((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),n=Object(u.a)(a,2),c=n[0],o=n[1];return r.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,o]},ae=a(20),ne=a(79),re=a(167),ce=Object(k.a)((function(e){return{beg:{marginTop:e.spacing(8),paddingTop:e.spacing(2)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3)}}})),oe=function(e){var t=e.darkMode,a=e.setDarkMode,n=e.update,c=r.a.useState([]),o=Object(u.a)(c,2),s=o[0],d=o[1],b=r.a.useState(!0),f=Object(u.a)(b,2),j=f[0],k=f[1],w=r.a.useState(!1),C=Object(u.a)(w,2),N=C[0],W=C[1],H=r.a.useState("Choose"),L=Object(u.a)(H,2),z=L[0],A=L[1],J=r.a.useState(""),U=Object(u.a)(J,2),F=U[0],V=U[1],q=r.a.useState(!1),G=Object(u.a)(q,2),K=G[0],Z=G[1],$=r.a.useState(!1),_=Object(u.a)($,2),X=_[0],Y=_[1],oe=te([],"favourite"),se=Object(u.a)(oe,2),ie=se[0],le=se[1],ue=r.a.useState("No"),de=Object(u.a)(ue,2),be=de[0],fe=de[1],je=r.a.useRef([]),he=r.a.useRef(null),pe=r.a.useRef(new Promise((function(e){return he.current=e}))),ge=r.a.useRef(["","Choose"]),me=Object(ae.d)(),ve=Object(ae.e)(),xe=ce(),Oe=Object(ne.a)({palette:{type:t?"dark":"light"}}),ke=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t.preventDefault(),fe("No"),e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),fe(a=t);case 9:if(e.prev=9,"Choose"!==ge.current[1]){e.next=12;break}return e.abrupt("return");case 12:return Y(!0),d([]),k(!0),n=ge.current[0].toLowerCase(),r=0,c=0,e.next=20,pe.current;case 20:return o=new g,je.current.map(function(){var e=Object(l.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.postMessage({name:n,branch:ge.current[1],file:t,command:"run",sem:a+1});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),o.onmessage=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("nf"!==t.data){e.next=11;break}if(r++,c++,3!==r){e.next=9;break}return Y(!1),e.next=7,k(!1);case 7:o.terminate(),setTimeout((function(){k(!0)}),4e3);case 9:e.next=17;break;case 11:return e.next=13,d((function(e){return[].concat(Object(p.a)(e),[t.data[0]])}));case 13:return e.next=15,W(!0);case 15:++c===R.length&&(n={sem:"Total :",marks:"".concat(t.data[1][0]," / ").concat(t.data[1][1]),percentage:(t.data[1][0]/t.data[1][1]*100).toFixed(4)},Y(!1),d((function(e){try{var t=Object(p.a)(ie);t[a].data=[].concat(Object(p.a)(e),[n]),le(t)}catch(r){}return[].concat(Object(p.a)(e),[n])})),o.terminate());case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.finish(9);case 24:case"end":return e.stop()}}),e,null,[[0,5,9,24]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){V(""),A("Choose"),W(!1),ge.current=["","Choose"]},ye=function(e){var t=Object(p.a)(ie);t.splice(e,1),le(t),fe("No")},Ce=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"update"===ie[t].data?(ge.current=[ie[t].name,ie[t].branch],ke(t)):(fe(t),d(ie[t].data),ge.current=[ie[t].name,ie[t].branch],V(ie[t].name),W(!0));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.useEffect((function(){N&&""===me.location.hash&&me.push({hash:"res"})}),[N]),r.a.useEffect((function(){"/local-res/"===ve.pathname&&"#res"!==ve.hash&&we()}),[ve]),r.a.useEffect((function(){if("update"===n&&0!==ie.length){var e=[];ie.map((function(t){var a=Object(h.a)(Object(h.a)({},t),{},{data:"update"});e.push(a)})),le(e)}}),[n]),r.a.useEffect((function(){(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(R.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.next=5,Promise.all(a.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.arrayBuffer(),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:je.current=e.sent,t();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(he.current)}),[]),Object(y.jsxs)(re.a,{theme:Oe,children:[Object(y.jsx)(S.a,{control:Object(y.jsx)(T.a,{checked:t,onChange:function(){return a(!t)}}),label:"Dark Mode",color:"primary",style:{position:"absolute",right:0}}),Object(y.jsx)(I.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:""!==n,children:Object(y.jsx)(M.a,{message:"".concat("fInstall"===n?"Now available for offline usage, can install/add to home screen from browser drawer.":"Update available, refresh page for updated content, can install/add to home screen from browser drawer.")})}),X&&Object(y.jsx)(E,{}),N?Object(y.jsx)(Q,{name:ge.current[0],data:s,load:X,reset:we,darkMode:t,savedLoad:be,handleFav:function(){var e={name:ge.current[0],branch:ge.current[1],data:s};le((function(t){return[].concat(Object(p.a)(t),[e])})),fe(ie.length)},favDel:ye,back:me.goBack}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(m.a,{maxWidth:"sm",children:[Object(y.jsx)(I.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!j,children:Object(y.jsx)(M.a,{message:"The entered data didn't matched, please try again !"})}),Object(y.jsxs)("h2",{className:xe.beg,children:[" Hello ",F]}),Object(y.jsx)("p",{children:"This is a Web worker - Reactjs based PWA where anyone from the batch 2019-23 can have a quick reference of their academic performance."}),Object(y.jsxs)("form",{className:xe.form,onSubmit:ke,children:[Object(y.jsx)(v.a,{name:"branch",error:K,select:!0,label:"branch",fullWidth:!0,helperText:K?"please choose correct branch":"please choose your branch",value:z,onChange:function(e){A(e.target.value),ge.current[1]=e.target.value,"Choose"===e.target.value?Z(!0):Z(!1)},children:P.map((function(e){return Object(y.jsx)(O.a,{value:e.value,children:e.label},e.value)}))}),"Choose"!==z&&Object(y.jsx)(v.a,{style:{marginTop:"10px"},type:"CE"===z?"number":"text",required:!0,fullWidth:!0,name:"name",inputProps:"CE"===z?{min:"180500"}:{minLength:"2"},label:"CE"===z?"College-ID":"Name",helperText:"CE"===z?"Please enter your College-ID":"Please enter your full name",onInput:function(e){V(e.target.value),ge.current[0]=e.target.value}}),Object(y.jsx)("center",{children:Object(y.jsx)(x.a,{className:xe.submit,type:"submit",variant:"contained",color:"primary",disabled:X,startIcon:Object(y.jsx)(D.a,{}),children:X?"loading...":"Submit"})})]}),Object(y.jsx)(ee,{saved:ie,favShow:Ce,favDel:ye})]})}),Object(y.jsx)("a",{href:"https://forms.gle/mptg9KrGss3rgtPp7",className:"anomaly",target:"_blank",children:Object(y.jsx)(B.a,{})})]})},se=a(78),ie=function(){return Object(y.jsxs)("div",{className:"footer",children:["Tried making with care (\xb4\u25e1`), by : "," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/jatinsajwan3841",children:"Jatin"}),Object(y.jsx)("br",{}),"Contribution by "," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/sakshi037",children:"Sakshi Shankar"})]})},le=a(66),ue=(a(108),function(){var e=te(!1,"darkMode"),t=Object(u.a)(e,2),a=t[0],n=t[1],c=r.a.useState(""),o=Object(u.a)(c,2),s=o[0],d=o[1],f=Object(j.a)();return r.a.useEffect((function(){b({onSuccess:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("fInstall");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onUpdate:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("update");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}),[]),Object(y.jsxs)("div",{className:"main-container ".concat(a&&"dark"),style:{minHeight:f},children:[Object(y.jsx)("div",{className:"home",children:Object(y.jsx)(le.a,{children:Object(y.jsx)(oe,{darkMode:a,setDarkMode:n,update:s})})}),Object(y.jsx)(se.a,{type:"square",num:"20"}),Object(y.jsx)(ie,{})]})});o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(ue,{})}),document.getElementById("root"))},95:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.da8c09b8.chunk.js.map