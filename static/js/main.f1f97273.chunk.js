(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(n,t,e){n.exports=e(377)},377:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(20),i=e.n(o),c=e(100),l=e(15),u=e(16),s=e(46),d=e.n(s);function m(){var n=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: ",";\n    padding: 0.7rem;\n\n    div:first-child {\n        h4 {\n            margin: 0.2rem 0;\n            font-size: 1.1rem;\n            font-weight: 300;\n            color: ",";\n        }\n        span {\n            font-size: 0.9rem;\n            color: ",";\n        }\n    }\n\n    &:hover {\n        background: ",";\n    }\n        \n"]);return m=function(){return n},n}var f=u.b.div(m(),function(n){return n.odd?"#EEE":"#F7F7F7"},d.a[700],d.a[600],d.a[300]),p=e(66),h=e.n(p);function b(){var n=Object(l.a)(["\n    padding: 10px;\n    /* background-color: red; */\n    /* font-size: 10rem; */\n"]);return b=function(){return n},n}var g=Object(u.b)(h.a)(b()),v=e(152),E=e.n(v),j=e(103),w=e.n(j);e(302);w.a.initializeApp({apiKey:"AIzaSyAGzlpCDZ5rg7vZ9XVzYqI4-LiXZ8ectX8",authDomain:"test-45931.firebaseapp.com",databaseURL:"https://test-45931.firebaseio.com",projectId:"test-45931",storageBucket:"test-45931.appspot.com",messagingSenderId:"576273254451"});var y=w.a.firestore();function x(n){var t=n.task,e=n.person,a=n.id,o=n.odd;n.timestamp;return r.a.createElement(f,{odd:o},r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement(E.a,null),r.a.createElement("span",null,e)),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){y.collection("chores").doc(a).delete().catch(function(n){console.error("Error removing document: ",n)})}},"X")))}function O(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center",padding:"2rem 0"}},"No chores to display.")}var k=function(n){var t=n.data?n.data.map(function(n,t){var e;return r.a.createElement(x,(e={task:n.task,person:n.person,key:n.id,odd:t%2,id:n.id},Object(c.a)(e,"key",n.id),Object(c.a)(e,"timestamp",n.timestamp),e))}):null;return t=t&&t.sort(function(n,t){return console.log(n.props.task),t.props.timestamp.seconds-n.props.timestamp.seconds}),r.a.createElement(r.a.Fragment,null,t.length?t:r.a.createElement(O,null))},z=e(31),S=e(153),C=e.n(S);function I(){var n=Object(l.a)(["\n\n"]);return I=function(){return n},n}var D=Object(u.b)(C.a)(I());function L(){var n=Object(l.a)(["\n\n"]);return L=function(){return n},n}var B=Object(u.b)(h.a)(L());e(372);function F(){var n=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 1rem;\n    \n"]);return F=function(){return n},n}var A=u.b.form(F()),X=function(n){var t=Object(a.useState)(""),e=Object(z.a)(t,2),o=e[0],i=e[1],c=Object(a.useState)(""),l=Object(z.a)(c,2),u=l[0],s=l[1];return r.a.createElement(A,{onSubmit:function(n){n.preventDefault(),o&&u&&(y.collection("chores").add({task:o,person:u,timestamp:new Date}).then(function(){console.log("sukces")}).catch(function(n){console.log(n)}),i(""),s(""))}},r.a.createElement(D,{autoComplete:"off",id:"standard-full-width",label:"add task",placeholder:"type here",value:o,onChange:function(n){return i(n.target.value)},margin:"none",InputLabelProps:{shrink:!0}}),r.a.createElement(D,{autoComplete:"off",id:"standard-full-width",label:"who's doing it",value:u,onChange:function(n){return s(n.target.value)},placeholder:"type here",margin:"none",InputLabelProps:{shrink:!0}}),r.a.createElement(B,{type:"submit",style:{marginRight:"8px"}},"Submit"))};function R(){var n=Object(l.a)(["\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 3.5rem;\n    font-weight: 700;\n    text-align: center;\n    color: white;\n    margin-bottom: 2.9rem;\n"]);return R=function(){return n},n}var Z=u.b.div(R()),J=e(97),P=e.n(J),U=e(98);function W(){var n=Object(l.a)(["\n\thtml {\n\t\tfont-size: 100%;\n\t\t@media (max-width: ",") {\n\t\t\tfont-size: 90%;\n\t\t\tbackground: red;\n\t\t}\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n  \tbody {\n    \tfont-family: 'Roboto', sans-serif;\n    \t/* background: linear-gradient(#ECB0D9, #E6BAE7); */\n\t\tbackground: linear-gradient(",", ",");\n\t\tmin-width: 100vw;\n\t\tmin-height: 100vh;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\talign-content: center;\n\t\tmargin: 0;\n\t\tcolor: #888;\n\t}\n"]);return W=function(){return n},n}var q=e.n(U).a[200],G=P.a[300],K=Object(u.a)(W(),"713px",q,G),N=e(99),V=e.n(N);function Y(){var n=Object(l.a)(["\n    &&& {\n        margin: 0 auto;\n        max-width: 43rem;\n        min-height: 55vh;\n        max-height: 63vh;\n        @media (max-width: ",") {\n            width: calc(100% - 20px);\n        }\n        display: flex;\n        /* justify-content: space-evenly; */\n        flex-direction: column;\n        background: white;\n        padding: 1.9rem;\n        border-radius: 8px;\n        border-top-right-radius: 80px;\n        @media (max-width: ",") {\n            min-height: 55vh;\n            max-height: 60vh;\n        }\n\n    }\n\n"]);return Y=function(){return n},n}var $=Object(u.b)(V.a)(Y(),"713px","713px");function H(){var n=Object(l.a)(["\n    overflow: scroll;\n    height: 100%;    \n"]);return H=function(){return n},n}var M=u.b.div(H()),Q=e(154),T=e.n(Q),_=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center",padding:"2rem 0"}},r.a.createElement(T.a,null))},nn=e(104),tn=e.n(nn),en=e(155),an=function(){var n,t=Object(a.useState)([]),e=Object(z.a)(t,2),r=e[0],o=e[1],i=Object(a.useState)(!1),c=Object(z.a)(i,2),l=c[0],u=c[1],s=Object(a.useState)(!1),d=Object(z.a)(s,2),m=d[0],f=d[1];return Object(a.useEffect)(function(){return function(){var t=Object(en.a)(tn.a.mark(function t(){return tn.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,y.collection("chores").onSnapshot(function(n){f(!1);var t=n.docs.map(function(n){return{id:n.id,task:n.data().task,person:n.data().person,timestamp:n.data().timestamp}});o(t),u(!1)},function(n){return f(!0)});case 3:n=t.sent;case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),function(){return n()}},[]),{choresData:r,isLoading:l,isError:m,setChoresData:o}},rn=function(){var n=an(),t=n.choresData,e=n.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(Z,null,"Split the chores"),r.a.createElement($,null,r.a.createElement(X,null),r.a.createElement(M,null,e?r.a.createElement(_,null):r.a.createElement(k,{data:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(rn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[157,1,2]]]);
//# sourceMappingURL=main.f1f97273.chunk.js.map