(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(n,t,e){n.exports=e(390)},390:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(20),i=e.n(o),c=e(102),u=e(15),l=e(16),s=e(48),d=e.n(s);function m(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: ",";\n    padding: 0.7rem;\n\n    div:first-child {\n        h4 {\n            margin: 0.2rem 0;\n            font-size: 1.1rem;\n            font-weight: 300;\n            color: ",";\n        }\n        span {\n            font-size: 0.9rem;\n            color: ",";\n        }\n    }\n\n    &:hover {\n        background: ",";\n    }\n        \n"]);return m=function(){return n},n}var f=l.b.div(m(),function(n){return n.odd?"#EEE":"#F7F7F7"},d.a[700],d.a[600],d.a[300]),p=e(68),h=e.n(p);function b(){var n=Object(u.a)(["\n    padding: 10px;\n    /* background-color: red; */\n    /* font-size: 10rem; */\n"]);return b=function(){return n},n}var g=Object(l.b)(h.a)(b()),v=e(156),E=e.n(v),j=e(105),w=e.n(j);e(306);w.a.initializeApp({apiKey:"AIzaSyAGzlpCDZ5rg7vZ9XVzYqI4-LiXZ8ectX8",authDomain:"test-45931.firebaseapp.com",databaseURL:"https://test-45931.firebaseio.com",projectId:"test-45931",storageBucket:"test-45931.appspot.com",messagingSenderId:"576273254451"});var y=w.a.firestore(),x=e(155);function O(n){var t=n.task,e=n.person,a=n.id,o=n.odd;n.timestamp;return r.a.createElement(x.Fade,{down:!0,duration:300},r.a.createElement(f,{odd:o},r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement(E.a,null),r.a.createElement("span",null,e)),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){y.collection("chores").doc(a).delete().catch(function(n){console.error("Error removing document: ",n)})}},"X"))))}function k(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center",padding:"2rem 0"}},"No chores to display.")}var z=function(n){var t=n.data?n.data.map(function(n,t){var e;return r.a.createElement(O,(e={task:n.task,person:n.person,key:n.id,odd:t%2,id:n.id},Object(c.a)(e,"key",n.id),Object(c.a)(e,"timestamp",n.timestamp),e))}):null;return t=t&&t.sort(function(n,t){return t.props.timestamp.seconds-n.props.timestamp.seconds}),r.a.createElement(r.a.Fragment,null,t.length?t:r.a.createElement(k,null))},S=e(33),C=e(157),I=e.n(C);function D(){var n=Object(u.a)(["\n\n"]);return D=function(){return n},n}var F=Object(l.b)(I.a)(D());function L(){var n=Object(u.a)(["\n\n"]);return L=function(){return n},n}var B=Object(l.b)(h.a)(L());e(385);function A(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 1rem;\n    \n"]);return A=function(){return n},n}var X=l.b.form(A()),R=function(n){var t=Object(a.useState)(""),e=Object(S.a)(t,2),o=e[0],i=e[1],c=Object(a.useState)(""),u=Object(S.a)(c,2),l=u[0],s=u[1];return r.a.createElement(X,{onSubmit:function(n){n.preventDefault(),o&&l&&(y.collection("chores").add({task:o,person:l,timestamp:new Date}).then(function(){console.log("sukces")}).catch(function(n){console.log(n)}),i(""),s(""))}},r.a.createElement(F,{autoComplete:"off",id:"standard-full-width",label:"add task",placeholder:"type here",value:o,onChange:function(n){return i(n.target.value)},margin:"none",InputLabelProps:{shrink:!0}}),r.a.createElement(F,{autoComplete:"off",id:"standard-full-width",label:"who's doing it",value:l,onChange:function(n){return s(n.target.value)},placeholder:"type here",margin:"none",InputLabelProps:{shrink:!0}}),r.a.createElement(B,{type:"submit",style:{marginRight:"8px"}},"Submit"))};function Z(){var n=Object(u.a)(["\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 3.5rem;\n    font-weight: 700;\n    text-align: center;\n    color: white;\n    margin-bottom: 2.9rem;\n"]);return Z=function(){return n},n}var J=l.b.div(Z()),P=e(99),U=e.n(P),W=e(100);function q(){var n=Object(u.a)(["\n\thtml {\n\t\tfont-size: 100%;\n\t\t@media (max-width: ",") {\n\t\t\tfont-size: 90%;\n\t\t\tbackground: red;\n\t\t}\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n  \tbody {\n    \tfont-family: 'Roboto', sans-serif;\n    \t/* background: linear-gradient(#ECB0D9, #E6BAE7); */\n\t\tbackground: linear-gradient(",", ",");\n\t\tmin-width: 100vw;\n\t\tmin-height: 100vh;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\talign-content: center;\n\t\tmargin: 0;\n\t\tcolor: #888;\n\t}\n"]);return q=function(){return n},n}var G=e.n(W).a[200],K=U.a[300],N=Object(l.a)(q(),"713px",G,K),V=e(101),Y=e.n(V);function $(){var n=Object(u.a)(["\n    &&& {\n        margin: 0 auto;\n        max-width: 43rem;\n        min-height: 55vh;\n        max-height: 63vh;\n        @media (max-width: ",") {\n            width: calc(100% - 20px);\n        }\n        display: flex;\n        /* justify-content: space-evenly; */\n        flex-direction: column;\n        background: white;\n        padding: 1.9rem;\n        border-radius: 8px;\n        border-top-right-radius: 80px;\n        @media (max-width: ",") {\n            min-height: 55vh;\n            max-height: 60vh;\n        }\n\n    }\n\n"]);return $=function(){return n},n}var H=Object(l.b)(Y.a)($(),"713px","713px");function M(){var n=Object(u.a)(["\n    overflow: scroll;\n    height: 100%;    \n"]);return M=function(){return n},n}var Q=l.b.div(M()),T=e(158),_=e.n(T),nn=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center",padding:"2rem 0"}},r.a.createElement(_.a,null))},tn=e(106),en=e.n(tn),an=e(159),rn=function(){var n,t=Object(a.useState)([]),e=Object(S.a)(t,2),r=e[0],o=e[1],i=Object(a.useState)(!1),c=Object(S.a)(i,2),u=c[0],l=c[1],s=Object(a.useState)(!1),d=Object(S.a)(s,2),m=d[0],f=d[1];return Object(a.useEffect)(function(){return function(){var t=Object(an.a)(en.a.mark(function t(){return en.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,y.collection("chores").onSnapshot(function(n){f(!1);var t=n.docs.map(function(n){return{id:n.id,task:n.data().task,person:n.data().person,timestamp:n.data().timestamp}});o(t),l(!1)},function(n){return f(!0)});case 3:n=t.sent;case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),function(){return n()}},[]),{choresData:r,isLoading:u,isError:m,setChoresData:o}},on=function(){var n=rn(),t=n.choresData,e=n.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(J,null,"Split the chores"),r.a.createElement(H,null,r.a.createElement(R,null),r.a.createElement(Q,null,e?r.a.createElement(nn,null):r.a.createElement(z,{data:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(on,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[161,1,2]]]);
//# sourceMappingURL=main.d35c76f0.chunk.js.map