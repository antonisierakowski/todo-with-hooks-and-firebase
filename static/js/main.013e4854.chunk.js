(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(n,e,t){n.exports=t(375)},375:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(20),c=t.n(o),i=t(47),u=t.n(i),l=t(101),s=t(30),d=t(102),f=t.n(d);t(235);f.a.initializeApp({apiKey:"AIzaSyAGzlpCDZ5rg7vZ9XVzYqI4-LiXZ8ectX8",authDomain:"test-45931.firebaseapp.com",databaseURL:"https://test-45931.firebaseio.com",projectId:"test-45931",storageBucket:"test-45931.appspot.com",messagingSenderId:"576273254451"});var p=f.a.firestore(),m=function(){var n=Object(a.useState)([]),e=Object(s.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(!1),c=Object(s.a)(o,2),i=c[0],d=c[1],f=Object(a.useState)(!1),m=Object(s.a)(f,2),h=m[0],b=m[1];return Object(a.useEffect)(function(){!function(){var n=Object(l.a)(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),b(!1),n.next=4,p.collection("chores").get().then(function(n){return n.docs.map(function(n){return{id:n.id,task:n.data().task,person:n.data().person}})}).then(function(n){r(n),d(!1)}).catch(function(n){b(!0),console.log("error getting data from firestore")});case 4:n.sent;case 5:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()},[]),Object(a.useEffect)(function(){var n=function(){var n=Object(l.a)(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("refresh"),n.next=3,p.collection("chores").get().then(function(n){return n.docs.map(function(n){return{id:n.id,task:n.data().task,person:n.data().person}})}).then(function(n){r(n)}).catch(function(n){b(!0),console.log("error refreshing")});case 3:n.sent;case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),e=setInterval(function(){return n()},1e3);return function(){return clearInterval(e)}},[]),{choresData:t,isLoading:i,isError:h,setChoresData:r}},h=t(150),b=t(17),g=t(18),v=t(46),E=t.n(v);function j(){var n=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: ",";\n    padding: 10px;\n\n    div:first-child {\n        h4 {\n            margin: 4px 0;\n            font-size: 18px;\n            font-weight: 300;\n            color: ",";\n        }\n        span {\n            font-size: 14px;\n            color: ",";\n        }\n    }\n\n    &:hover {\n        background: ",";\n    }\n        \n"]);return j=function(){return n},n}var x=g.b.div(j(),function(n){return n.odd?"#EEE":"#F7F7F7"},E.a[700],E.a[600],E.a[300]),w=t(67),k=t.n(w);function y(){var n=Object(b.a)(["\n    padding: 10px;\n    background-color: red;\n"]);return y=function(){return n},n}var O=Object(g.b)(k.a)(y()),D=t(154),C=t.n(D);function S(n){var e=n.task,t=n.person,a=n.id,o=n.odd;return r.a.createElement(x,{odd:o},r.a.createElement("div",null,r.a.createElement("h4",null,e),r.a.createElement(C.a,null),r.a.createElement("span",null,t)),r.a.createElement("div",null,r.a.createElement(O,{onClick:function(){console.log(a),p.collection("chores").doc(a).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(n){console.error("Error removing document: ",n)})}},"X")))}var I=function(n){var e=n.data?n.data.map(function(n,e){return r.a.createElement(S,Object(h.a)({task:n.task,person:n.person,key:n.id,odd:e%2,id:n.id},"key",n.id))}):null;return r.a.createElement(r.a.Fragment,null,e)},z=t(105),L=t.n(z);t(307);function B(){var n=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 10px;\n    \n"]);return B=function(){return n},n}var F=g.b.form(B()),A=function(n){var e=Object(a.useState)(""),t=Object(s.a)(e,2),o=t[0],c=t[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],d=u[1];return r.a.createElement(F,{onSubmit:function(n){n.preventDefault(),o&&l&&p.collection("chores").add({task:o,person:l}).then(function(){console.log("sukces")}).catch(function(n){console.log(n)})}},r.a.createElement(L.a,{autoComplete:"off",id:"standard-full-width",label:"add task",placeholder:"type here",value:o,onChange:function(n){return c(n.target.value)},margin:"none",InputLabelProps:{shrink:!0}}),r.a.createElement(L.a,{autoComplete:"off",id:"standard-full-width",label:"who's doing it",value:l,onChange:function(n){return d(n.target.value)},placeholder:"type here",margin:"none",InputLabelProps:{shrink:!0}}),r.a.createElement(k.a,{type:"submit",style:{marginRight:"8px"}},"Submit"))};function X(){var n=Object(b.a)(["\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 50px;\n    font-weight: 700;\n    text-align: center;\n    color: white;\n    margin-bottom: 40px;\n"]);return X=function(){return n},n}var R=g.b.div(X()),Z=t(98),J=t.n(Z),P=t(99);function U(){var n=Object(b.a)(["\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n  \tbody {\n    \tfont-family: 'Roboto', sans-serif;\n    \t/* background: linear-gradient(#ECB0D9, #E6BAE7); */\n\t\tbackground: linear-gradient(",", ",");\n\t\tmin-width: 100vw;\n\t\tmin-height: 100vh;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\talign-content: center;\n\t\tmargin: 0;\n\t\tcolor: #888;\n\t}\n"]);return U=function(){return n},n}var W=t.n(P).a[200],q=J.a[300],G=Object(g.a)(U(),W,q),K=t(100),V=t.n(K);function Y(){var n=Object(b.a)(["\n    &&& {\n        margin: 0 auto;\n        max-width: 700px;\n        display: flex;\n        /* justify-content: space-evenly; */\n        flex-direction: column;\n        background: white;\n        padding: 30px;\n        border-radius: 8px;\n        border-top-right-radius: 80px;\n        min-height: 388px;\n    }\n"]);return Y=function(){return n},n}var $=Object(g.b)(V.a)(Y());function H(){var n=Object(b.a)(["\n    height: 388px;\n    overflow: scroll;        \n"]);return H=function(){return n},n}var M=g.b.div(H());function N(){var n=Object(b.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return N=function(){return n},n}var Q=Object(g.b)(function(){return r.a.createElement("div",null,"Loading...")})(N()),T=function(){var n=m(),e=n.choresData,t=n.isLoading,a=(n.isError,n.setChoresData);return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(R,null,"Split the chores"),r.a.createElement($,null,r.a.createElement(A,{choresData:e,setChoresData:a}),r.a.createElement(M,null,t?r.a.createElement(Q,null):r.a.createElement(I,{data:e,setChoresData:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.013e4854.chunk.js.map