(this.webpackJsonpkarma=this.webpackJsonpkarma||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),s=n(40),r=n.n(s),i=n(41),l=n(48),u=Object(i.a)({apiKey:"AIzaSyB7UTq-y1DjPb0UuNJ83ZLnE81Ht405OQI",authDomain:"todo-karma.firebaseapp.com",projectId:"todo-karma",storageBucket:"todo-karma.appspot.com",messagingSenderId:"757248016606",appId:"1:757248016606:web:60058f2edc4c08c1b5824f",measurementId:"G-07LN1JMQ97"}),o=(Object(l.a)(u),n(0)),j=n.n(o),d=n(1),b=n(11),O=n(15),h=n(12),p="1970-01-01T00:00:00.000Z",f="datetime",m="projects",x=[{priority:"select priority",value:1,display_name:"For later",key:1},{priority:"p5 Urgent",value:5,display_name:"Urgent tasks",key:2},{priority:"p4 High",value:4,display_name:"High priority tasks",key:3},{priority:"p3 Medium",value:3,display_name:"Medium priority tasks",key:4},{priority:"p2 Low",value:2,display_name:"Low priority tasks ",key:5}],v=["0","1"],g={title:"INBOX",description:"A default project for all your tasks",archived:!1},k=[{title:"Today",id:"0"},{title:"Upcoming",id:"1"}],N=Object(h.g)();function w(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!1,""===t){e.next=7;break}return c=Object(h.h)(Object(h.d)(N,"users",t)),e.next=5,Object(h.e)(c);case 5:e.sent.exists()&&(n=!0);case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(j.a.mark((function e(t){var n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=7;break}return n={displayName:t.displayName,email:t.email,photoURL:t.photoURL,emailVerified:t.emailVerified},c=t.uid,e.next=5,Object(h.j)(Object(h.d)(N,"users",c),Object(O.a)({},n));case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=7;break}return n=Object(O.a)(Object(O.a)({},g),{},{timestamp:Object(h.i)(),uid:t}),e.next=4,Object(h.a)(Object(h.b)(N,"projects"),Object(O.a)({},n));case 4:return c=e.sent,e.next=7,Object(h.k)(Object(h.d)(N,"users",t),{defaultProjectId:c.id});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=n(27),A=n(3),I=Object(c.createContext)();function E(){return Object(c.useContext)(I)}function M(e){var t=e.children,n=function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(P.b)();function r(){return i.apply(this,arguments)}function i(){return i=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new P.a,Object(P.d)(s,t).then(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=P.a.credentialFromResult(t),c=n.accessToken,s=t.user,a(s),e.next=6,o(s.uid);case 6:console.log({credential:n,token:c,_user:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.code,n=e.message,c=e.email,a=P.a.credentialFromError(e);console.log("signing in",{errorCode:t,errorMessage:n,email:c,credential:a})}));case 2:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function l(){return u.apply(this,arguments)}function u(){return(u=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.signOut();case 2:a(null);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:if(e.sent){e.next=9;break}return n=s.currentUser,e.next=7,D(n);case 7:return e.next=9,T(n.uid);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(P.c)(s,(function(e){a(e||null)})),{user:n,signIn:r,signOut:l}}();return Object(A.jsx)(I.Provider,{value:n,children:t})}var L=n(26),H=function(){var e=E(),t=Object(c.useRef)(null),n=Object(c.useRef)(null),a=Object(c.useRef)(null);function s(){null!==t&&null!==n&&(t.current.classList.toggle("is-active"),n.current.classList.toggle("is-active"))}return Object(A.jsx)("nav",{className:"navbar is-light has-background-success-light",role:"navigation","aria-label":"main navigation",children:Object(A.jsxs)("div",{className:"container",children:[Object(A.jsxs)("div",{className:"navbar-brand",children:[Object(A.jsx)(L.b,{className:"navbar-item",to:"/",children:Object(A.jsx)("span",{className:"is-size-4 has-text-weight-semibold ",children:Object(A.jsx)("strong",{children:"KARMA"})})}),Object(A.jsxs)("button",{className:"navbar-burger has-text-weight-bold","aria-label":"menu","aria-expanded":"false",onClick:function(){return s()},"data-target":"navbarBasicExample",ref:t,children:[Object(A.jsx)("span",{"aria-hidden":"true"}),Object(A.jsx)("span",{"aria-hidden":"true"}),Object(A.jsx)("span",{"aria-hidden":"true"})]})]}),Object(A.jsx)("div",{id:"navbarMain",className:"navbar-menu",ref:n,children:Object(A.jsx)("div",{className:"navbar-end",children:Object(A.jsx)("div",{className:"navbar-item",children:e.user?Object(A.jsx)("div",{className:"buttons",children:Object(A.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",ref:a,children:[Object(A.jsx)(L.b,{to:"/",className:"navbar-link is-arrowless",children:e.user.photoURL?Object(A.jsx)("figure",{class:"image is-32x32",children:Object(A.jsx)("img",{class:"is-rounded",src:e.user.photoURL})}):Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"far fa-user"})})}),Object(A.jsxs)("div",{className:"navbar-dropdown is-right",children:[Object(A.jsx)(L.b,{to:"/",className:"navbar-item",children:"Profile"}),Object(A.jsx)(L.b,{to:"/",className:"navbar-item",children:"Settings"}),Object(A.jsx)("hr",{className:"navbar-divider"}),Object(A.jsx)(L.b,{to:"/",className:"navbar-item is-selectable",onClick:Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signOut();case 2:s();case 3:case"end":return t.stop()}}),t)}))),children:"Log Out"})]})]})}):Object(A.jsxs)("div",{className:"buttons",children:[Object(A.jsx)("button",{className:"button has-background-success-light",onClick:Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signIn();case 2:s();case 3:case"end":return t.stop()}}),t)}))),children:Object(A.jsx)("strong",{children:"Sign up"})}),Object(A.jsx)("button",{className:"button has-background-success-light",onClick:Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signIn();case 2:s();case 3:case"end":return t.stop()}}),t)}))),children:"Log in"})]})})})})]})})},U=n(17),R=n(20),F=n.n(R);function V(){return new Date(new Date(F()(new Date).add(1,"days")).setHours(0,0,0,0)).getTime()}function _(){return new Date((new Date).setHours(0,0,0,0)).getTime()}var B=Object(c.createContext)();function z(){return Object(c.useContext)(B)}function J(e){var t=e.children,n=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(b.a)(s,2),i=r[0],l=r[1],u=Object(c.useState)(!1),o=Object(b.a)(u,2),j=o[0],d=o[1],O=Object(c.useState)(null),h=Object(b.a)(O,2),p=h[0],f=h[1];function m(e){a(!0),f(e)}function x(){f(null),a(!1)}return{taskDetailActivated:n,detailTask:p,showArchived:i,showCompleted:j,activateTaskDetailModal:m,deactivateTaskDetailModal:x,setShowCompleted:d,setShowArchived:l}}();return Object(A.jsx)(B.Provider,{value:n,children:t})}var K=Object(h.g)(),Q=Object(c.createContext)(null);function Z(){return Object(c.useContext)(Q)}function q(e){var t=e.children,n=function(){var e=1,t=E(),n=z(),a=Object(c.useState)([]),s=Object(b.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(null),u=Object(b.a)(l,2),o=u[0],p=u[1],f=Object(c.useState)([]),m=Object(b.a)(f,2),x=m[0],g=m[1],N=Object(c.useState)(!1),w=Object(b.a)(N,2),y=w[0],D=w[1],C=Object(c.useState)(!1),T=Object(b.a)(C,2),S=T[0],P=T[1],A=Object(c.useState)([]),I=Object(b.a)(A,2),M=I[0],L=I[1],H=Object(c.useState)(!1),U=Object(b.a)(H,2),R=U[0],F=U[1],B=Object(c.useState)(null),J=Object(b.a)(B,2),Q=J[0],Z=J[1];function q(e){return X.apply(this,arguments)}function X(){return(X=Object(d.a)(j.a.mark((function e(n){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user||!n){e.next=13;break}return n.dueDate=new Date(n.dueDate)||null,n.uid=t.user.uid,n.archived=!1,c=o.id,v.forEach((function(e){o.id.toString().trim()===e.toString().trim()&&(c=Q,n.projectId=Q)})),n.projectId=n.projectId||o.id,a=Object(h.b)(K,"projects",c,"tasks"),e.next=10,Object(h.a)(a,Object(O.a)({},n));case 10:return s=e.sent,D(!y),e.abrupt("return",s.id);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(j.a.mark((function e(n,c){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user){e.next=7;break}return a=Object(h.d)(K,"projects",o.id,"tasks",n),e.next=4,Object(h.k)(a,Object(O.a)(Object(O.a)({},c),{},{timestamp:Object(h.i)()}));case 4:D(!y),e.next=8;break;case 7:console.log("user not logged in","update");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return ee=Object(d.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user||!n){e.next=7;break}return c=Object(h.d)(K,"projects",n.projectId||o.id,"tasks",n.id),e.next=4,Object(h.j)(c,{archived:!0},{merge:!0});case 4:D(!y),e.next=8;break;case 7:console.log("user not logged in ","delete ");case 8:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return ne=Object(d.a)(j.a.mark((function e(n){var c,a,s,r,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=i.length>1&&void 0!==i[1]?i[1]:"",!t.user){e.next=11;break}return a={title:n,description:c,timestamp:Object(h.i)(),uid:t.user.uid,archived:!1},s=Object(h.b)(K,"projects"),e.next=6,Object(h.a)(s,Object(O.a)({},a));case 6:return r=e.sent,P(!S),e.abrupt("return",r.id);case 11:console.log("user not logged in","project add ");case 12:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}function ce(e){return ae.apply(this,arguments)}function ae(){return ae=Object(d.a)(j.a.mark((function e(n){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user||!n||n===Q){e.next=16;break}return c=Object(h.d)(K,"projects",n),a=Object(h.h)(Object(h.b)(K,"projects",n,"tasks")),e.next=5,Object(h.e)(a);case 5:return e.sent.forEach(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.k)(Object(h.d)(K,"projects",n,"tasks",t.id),Object(O.a)(Object(O.a)({},t.data()),{},{archived:!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=9,Object(h.e)(c);case 9:return s=e.sent,e.next=12,Object(h.k)(c,Object(O.a)(Object(O.a)({},s),{},{archived:!0}));case 12:return P(!S),e.abrupt("return");case 16:console.log("user not logged in","delete project ");case 17:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function se(e){return re.apply(this,arguments)}function re(){return(re=Object(d.a)(j.a.mark((function e(n){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user){e.next=9;break}return c=Object(h.d)(K,"projects",o.id),e.next=4,Object(h.k)(c,Object(O.a)(Object(O.a)({},n),{},{timestamp:Object(h.i)()}));case 4:return a=e.sent,P(!S),e.abrupt("return",a.id);case 9:console.log("user not logged in","update project");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return le.apply(this,arguments)}function le(){return(le=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.user&&n&&p(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t){return oe.apply(this,arguments)}function oe(){return oe=Object(d.a)(j.a.mark((function e(n,c){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user||!n){e.next=6;break}return console.log(n),a=Object(h.h)(Object(h.d)(K,"projects",n.projectId||o.id,"tasks",n.id)),e.next=5,Object(h.k)(a,{completed:c});case 5:D(!y);case 6:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}return Object(c.useEffect)((function(){var n=null;function c(){return a.apply(this,arguments)}function a(){return(a=Object(d.a)(j.a.mark((function c(){var a,s,r,l,u,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!t.user){c.next=24;break}return console.log(G,"projects"),a=Object(h.h)(Object(h.d)(K,"users",t.user.uid)),c.next=5,Object(h.e)(a);case 5:if(!(s=c.sent).exists()){c.next=21;break}return r=s.data().defaultProjectId,Z(r),l=Object(h.h)(Object(h.b)(K,"projects"),Object(h.l)("uid","==",t.user.uid),Object(h.l)("archived","==",!1)),c.next=12,Object(h.f)(l);case 12:s=c.sent,u=[],o=[],s.forEach((function(e){e.id===r.trim()?o.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id})):u.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),p(k[0]),i(u),L(o),c.next=22;break;case 21:n=setTimeout((function(){return P(!S)}),1e3*e);case 22:c.next=27;break;case 24:i([]),L([]),p(null);case 27:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return c(),function(){clearInterval(n)}}),[t.user,S]),Object(c.useEffect)((function(){function e(){return c.apply(this,arguments)}function c(){return c=Object(d.a)(j.a.mark((function e(){var c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.user||!o){e.next=17;break}if(console.log(G,"tasks"),console.log(t.user,o,y,n.showCompleted,n.showArchived),!v.find((function(e){return o.id===e}))){e.next=8;break}g([]),F((function(e){return!e})),e.next=15;break;case 8:return c=Object(h.h)(Object(h.b)(K,"projects",o.id,"tasks"),Object(h.l)("archived","==",n.showArchived),Object(h.l)("completed","==",n.showCompleted)),e.next=11,Object(h.f)(c);case 11:a=e.sent,s=[],a.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});t.dueDate=t.dueDate.toDate(),s.push(t)})),g(s);case 15:e.next=18;break;case 17:g([]);case 18:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}return e(),function(){}}),[t.user,o,y,n.showCompleted,n.showArchived]),Object(c.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(d.a)(j.a.mark((function e(){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.find((function(e){return e===o.id}))){e.next=8;break}return n="0"===o.id.toString()?Object(h.h)(Object(h.c)(K,"tasks"),Object(h.l)("uid","==",t.user.uid),Object(h.l)("archived","==",!1),Object(h.l)("completed","==",!1),Object(h.l)("dueDate",">",new Date(_())),Object(h.l)("dueDate","<",new Date(V()))):Object(h.h)(Object(h.c)(K,"tasks"),Object(h.l)("uid","==",t.user.uid),Object(h.l)("archived","==",!1),Object(h.l)("completed","==",!1),Object(h.l)("dueDate",">",new Date(_()))),c=[],e.next=5,Object(h.f)(n);case 5:e.sent.forEach((function(e){var t=Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id});t.dueDate=t.dueDate.toDate(),c.push(t)})),g(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o&&e(),function(){}}),[t.user,R,o]),{tasks:x,projects:r,currentProject:o,defaultProjects:M,addTask:q,updateTask:W,deleteTask:$,addProject:te,deleteProject:ce,updateProject:se,changeCurrentProject:ie,changeTaskStatus:ue}}();return Object(A.jsx)(Q.Provider,{value:n,children:t})}var G=":::::::::::::::::::Firestore fetch:::::::::::::::::::::";var X=function(e){var t=e.task,n=Z(),c=z(),a={paddingTop:"0.25em",paddinBottom:"0.25em"};return Object(A.jsx)("tr",{children:Object(A.jsxs)("td",{className:"columns p-0 m-0 is-mobile",children:[Object(A.jsx)("button",{className:"column is-narrow is-flex is-justify-content-center remove-button-preset",style:a,children:Object(A.jsx)("span",{className:"icon is-align-self-center",onClick:function(){return n.changeTaskStatus(t,!t.completed)},children:t.completed?Object(A.jsx)("i",{className:"fas fa-check-circle"}):Object(A.jsx)("i",{className:"far fa-circle"})})}),Object(A.jsx)("div",{className:"column is-flex is-clickable",onClick:function(){c.activateTaskDetailModal(t)},style:a,children:Object(A.jsxs)("span",{className:"is-align-self-center",children:[t.title,Object(A.jsx)("br",{}),new Date(t.dueDate).getTime()!==new Date(p).getTime()&&Object(A.jsx)("span",{className:"tags",children:Object(A.jsx)("span",{className:function(){var e="tag is-light ";return new Date(t.dueDate).getTime()<new Date(F()(new Date).subtract(1,"days")).getTime()?e+="is-danger":new Date(t.dueDate).getTime()<(new Date).getTime()?e+="is-warning":e+="is-success",e}(),children:F()(t.dueDate).calendar()})})]})}),Object(A.jsx)("div",{className:"column is-narrow is-flex",style:a,children:Object(A.jsx)("div",{className:"is-align-self-center"})}),Object(A.jsx)("div",{className:"column is-narrow is-flex is-clickable  ",onClick:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.deleteTask(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),style:a,children:c.showArchived?Object(A.jsx)("span",{className:"icon is-align-self-center",children:Object(A.jsx)("i",{className:"fas fa-archive"})}):Object(A.jsx)("span",{className:"icon is-align-self-center",children:Object(A.jsx)("i",{className:"far fa-trash-alt"})})})]})})};function W(e){var t=[];return e.forEach((function(e){if(e.tasks.length>0){var n=Object(A.jsxs)("table",{className:"table is-fullwidth is-hoverable m-0 p-0",children:[Object(A.jsx)("thead",{children:Object(A.jsx)("tr",{children:Object(A.jsx)("th",{children:e.display_name})})}),Object(A.jsx)("tbody",{children:e.tasks.map((function(e){return Object(A.jsx)(X,{task:e},e.id)}))})]},e.key);t.push(n)}})),t}var Y=function(){var e=Z(),t=Object(c.useState)(Object(A.jsx)(A.Fragment,{})),n=Object(b.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){if(e.currentProject){var t="1"===e.currentProject.id.toString()?function(e){for(var t=[],n=function(n){var c={display_name:F()(new Date).add(n,"days").format("MMMM Do"),key:n,tasks:[]},a=new Date(F()((new Date).setHours(0,0,0,0)).add(n-1,"days")).getTime(),s=new Date(F()((new Date).setHours(0,0,0,0)).add(n,"days")).getTime();c.tasks=e.filter((function(e){var t=new Date(e.dueDate).getTime();return t>a&&t<s})),t.push(c)},c=1;c<30;c++)n(c);return W(t)}(e.tasks):function(e){for(var t=Object(U.a)(x).sort((function(e,t){return t.value-e.value})).map((function(e){return Object(O.a)(Object(O.a)({},e),{},{tasks:[]})})),n=e.sort((function(e,t){return new Date(e.dueDate).getTime()-new Date(t.dueDate).getTime()})),c=0;c<n.length;c++){for(var a=n[c],s=t.length-1,r=0;r<t.length;r++){var i=t[r];if(parseInt(i.value)===parseInt(a.priority)){s=r;break}}t[s].tasks.push(a)}return W(t)}(e.tasks);s(t)}return function(){}}),[e.tasks,e.currentProject]),Object(A.jsx)("div",{children:a})},$=function(e){var t=e.dateTime,n=e.setDateTime,a=Object(c.useState)(!1),s=Object(b.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(t),u=Object(b.a)(l,2),o=u[0],j=u[1];return r?Object(A.jsx)("div",{className:"field is-horizontal",children:Object(A.jsxs)("div",{className:"field-body",children:[Object(A.jsx)("div",{className:"field",children:Object(A.jsx)("p",{className:"control ",children:Object(A.jsx)("input",{className:"input",type:"date",value:F()(o).format("yyyy-MM-DD"),onChange:function(e){return function(e){j(new Date(new Date(e.target.value).setHours(9,0,0,0)))}(e)}})})}),Object(A.jsx)("div",{className:"field",children:Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("input",{className:"input",type:"time",value:F()(o).format("HH:mm"),onChange:function(e){return function(e){var t=e.target.value.toString().split(":");j(new Date(new Date(o).setHours(t[0],t[1])))}(e)}})})}),Object(A.jsxs)("div",{className:"field",children:[Object(A.jsx)("div",{className:"button is-outlined is-success is-light",onClick:function(){return i(!1),void n(o)},children:"Save"}),Object(A.jsx)("div",{className:"button is-outlined is-link is-light",onClick:function(){return j(t),void i(!1)},children:"Cancel"})]})]})}):Object(A.jsx)("div",{onClick:function(){return i(!0),void j(new Date)},children:Object(A.jsx)("div",{className:"button is-outlined is-light is-link",children:new Date(t).getTime()!==new Date(p).getTime()?Object(A.jsx)("span",{children:F()(t).calendar()}):Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"far fa-clock"})}),Object(A.jsx)("span",{children:"Schedule"})]})})})},ee=function(e){var t=e.button1Click,n=e.button1Text,c=void 0===n?"Done":n,a=e.button2Click,s=e.button2Text,r=void 0===s?"Cancel":s;return Object(A.jsxs)("div",{className:"field is-grouped",children:[Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("button",{className:"button is-success is-light is-outlined",onClick:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:c})}),Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("button",{className:"button is-link is-light is-outlined",onClick:function(){return a()},children:r})})]})},te=function(e){var t=e.initialValue,n=e.handleValueChange,c=e.dropDownOptions;return Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("div",{className:"select",children:Object(A.jsx)("select",{onChange:function(e){return n(e.target.value)},value:t,children:c.map((function(e){return Object(A.jsx)("option",{value:e.value,children:e.priority},e.value)}))})})})},ne=function(){var e=Z(),t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(b.a)(r,2),l=i[0],u=i[1],o=Object(c.useState)(""),O=Object(b.a)(o,2),h=O[0],v=O[1],g=Object(c.useState)(p),k=Object(b.a)(g,2),N=k[0],w=k[1],y=Object(c.useState)(""),D=Object(b.a)(y,2),C=D[0],T=D[1],S=Object(c.useState)(x[0].value),P=Object(b.a)(S,2),I=P[0],E=P[1],M=Object(c.useState)([]),L=Object(b.a)(M,2),H=L[0],R=L[1];function V(){return(V=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!B()){t.next=6;break}return n={title:l,description:C,completed:!1,dueDate:N,priority:I},t.next=4,e.addTask(n);case 4:s(!1),_();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){u(""),w(p),v(""),E(x[0].value),T(""),R([])}function B(){var e=!0;return""===l.trim()&&(e=!1,v("Task title cannot be empty")),e}function z(e){u(e),function(e){var t=Object(U.a)(H),n=/(\btod\b|\btoday\b)/i,c=/(\btom\b|\btomorrow\b)/i,a=f;!n.test(e)||t.find((function(e){return 1===e.id}))||t.find((function(e){return e.category===f}))?!n.test(e)&&t.find((function(e){return 1===e.id}))&&J(1):(t.push({id:1,text:"today",category:a}),R(t));!c.test(e)||t.find((function(e){return 2===e.id}))||t.find((function(e){return e.category===f}))?!c.test(e)&&t.find((function(e){return 2===e.id}))&&J(2):(t.push({id:2,text:"tomorrow",category:a}),R(t));t.find((function(e){return e.category===m}))}(e)}function J(e){var t=Object(U.a)(H),n=t.findIndex((function(t){return t.id===e}));-1!==n&&(t.splice(n,1),R(t),w(new Date(p)))}return Object(c.useEffect)((function(){return H.forEach((function(e){e.category===f?1===e.id?w((function(){return new Date((new Date).setHours(9,0,0,0))})):2===e.id&&w((function(){return new Date(F()((new Date).setHours(9,0,0,0)).add(1,"days"))})):e.category})),function(){}}),[H]),a?Object(A.jsxs)("div",{className:"block",children:[Object(A.jsxs)("div",{className:"p-2 border-gray-light",children:[Object(A.jsxs)("div",{className:"field",children:[Object(A.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(A.jsx)("input",{className:"input",type:"text",placeholder:"Bring milk and sweets",value:l,onChange:function(e){return z(e.target.value)},onFocus:function(){return v("")}}),Object(A.jsx)("span",{className:"icon is-small is-left",children:Object(A.jsx)("i",{className:"fas fa-tasks"})}),Object(A.jsx)("span",{className:"icon is-small is-right",children:Object(A.jsx)("i",{className:"fas fa-check"})})]}),Object(A.jsx)("p",{className:"help is-danger",children:h})]}),Object(A.jsx)("div",{className:"field",children:Object(A.jsx)("textarea",{className:"textarea has-fixed-size",placeholder:"Enter the task description here",rows:"2",value:C,onChange:function(e){return T(e.target.value)}})}),Object(A.jsxs)("div",{className:"field columns is-mobile",children:[Object(A.jsx)("div",{className:"column is-narrow pb-0",children:Object(A.jsx)(te,{initialValue:I,handleValueChange:function(e){E(e)},dropDownOptions:x})}),Object(A.jsx)("div",{className:"column pb-0",children:Object(A.jsx)("div",{className:"tags",children:H.map((function(e){return Object(A.jsxs)("span",{className:"tag is-info is-light",children:[e.text,Object(A.jsx)("button",{className:"delete is-small",onClick:function(){return J(e.id)}})]},e.id)}))})}),Object(A.jsx)("div",{className:"column is-narrow",children:Object(A.jsx)($,{dateTime:N,setDateTime:function(e){w(e)}})})]})]}),Object(A.jsx)("div",{className:"p-1",children:Object(A.jsx)(ee,{button1Click:function(){return V.apply(this,arguments)},button1Text:"Add Task",button2Click:function(){_(),s(!1)},button2Text:"Cancel"})})]}):Object(A.jsx)("div",{className:"control pl-4",children:Object(A.jsx)("button",{className:"button is-outlined is-success is-light is-fullwidth",onClick:function(){return s(!0)},children:"Add Task"})})},ce=function(e){var t=e.setActivated,n=Z(),a=Object(c.useState)(""),s=Object(b.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(""),u=Object(b.a)(l,2),o=u[0],O=u[1];function h(){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()){e.next=4;break}return e.next=3,n.addProject(r);case 3:t(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=!0;return""===r.trim()&&(e=!1,O("project must have a name")),e}return Object(A.jsxs)("form",{children:[Object(A.jsxs)("div",{className:"field",children:[Object(A.jsx)("input",{className:"input",type:"text",name:"title",id:"title",value:r,onChange:function(e){return i(e.target.value)},onFocus:function(){return O("")}}),Object(A.jsx)("p",{className:"help is-danger",children:o})]}),Object(A.jsxs)("div",{className:"field is-grouped",children:[Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("div",{className:"button is-success is-light",onClick:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:"Add Project"})}),Object(A.jsx)("div",{className:"control",onClick:function(){return i(""),O(""),void t(!1)},children:Object(A.jsx)("div",{className:"button is-light is-info",children:"Cancel"})})]})]})},ae=function(){var e=Z(),t=Object(c.useState)([]),n=Object(b.a)(t,2),a=n[0],s=n[1];function r(t){e.changeCurrentProject(t)}return Object(c.useEffect)((function(){return null!==e.defaultProjects&&s([].concat(Object(U.a)(e.defaultProjects),Object(U.a)(k))),function(){}}),[e.defaultProjects,e.currentProject]),Object(A.jsx)("table",{className:"table is-hoverable is-fullwidth",children:Object(A.jsx)("tbody",{children:e.currentProject&&a.map((function(t){return Object(A.jsx)("tr",{className:t.id===e.currentProject.id?"is-selected is-clickable":"is-clickable",onClick:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(t));case 1:case"end":return e.stop()}}),e)}))),children:Object(A.jsx)("td",{children:t.title})},t.id)}))})})};var se=function(){var e=Z(),t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],s=n[1];function r(e){return i.apply(this,arguments)}function i(){return(i=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.changeCurrentProject(n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(A.jsxs)("div",{children:[Object(A.jsx)(ae,{}),Object(A.jsxs)("table",{className:"table is-hoverable is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsx)("tr",{children:Object(A.jsx)("th",{children:"Projects"})})}),Object(A.jsx)("tbody",{children:e.projects.map((function(t){return Object(A.jsx)("tr",{className:t.id===e.currentProject.id?"is-selected is-clickable":"is-clickable",onClick:Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:Object(A.jsx)("td",{children:t.title})},t.id)}))})]}),Object(A.jsx)("div",{children:a?Object(A.jsx)(ce,{setActivated:s}):Object(A.jsx)("div",{className:"button is-light is-success is-outlined is-fullwidth",onClick:function(){return s(!a)},children:"Add Project"})})]})},re=n(45),ie=function(){return Object(A.jsxs)(re.a,{children:[Object(A.jsx)("title",{children:"Karma"}),Object(A.jsx)("meta",{name:"description",content:"A TODO App"}),Object(A.jsx)("script",{src:"https://kit.fontawesome.com/cf77766bad.js",crossorigin:"anonymous"})]})},le=function(){var e=z(),t=e.detailTask,n=Z(),a=Object(c.useState)(t?t.title:""),s=Object(b.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(t?t.description:""),u=Object(b.a)(l,2),o=u[0],O=u[1],h=Object(c.useState)(t?t.priority:1),p=Object(b.a)(h,2),f=p[0],m=p[1],v=Object(c.useState)(t?t.dueDate:null),g=Object(b.a)(v,2),k=g[0],N=g[1],w=Object(c.useState)(!1),y=Object(b.a)(w,2),D=y[0],C=y[1];function T(){return(T=Object(d.a)(j.a.mark((function c(){var a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!t){c.next=4;break}return a={title:r,description:o,dueDate:k,completed:!1,priority:f},c.next=4,n.updateTask(t.id,a);case 4:e.deactivateTaskDetailModal();case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}function S(){e.deactivateTaskDetailModal()}return Object(c.useEffect)((function(){if(e.detailTask){var t=e.detailTask;i(t.title),O(t.description),m(t.priority),N(t.dueDate)}return function(){}}),[e.detailTask]),Object(A.jsxs)("div",{className:e.taskDetailActivated?"modal is-active":"modal",children:[Object(A.jsx)("div",{className:"modal-background",onClick:function(){return S()}}),t&&Object(A.jsx)("div",{className:"modal-content has-background-white-bis has-text-black-bis",children:Object(A.jsxs)("div",{className:"section",children:[Object(A.jsxs)("div",{className:"field",children:[Object(A.jsxs)("label",{className:"label",children:[Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-tasks"})}),Object(A.jsx)("span",{children:"Task Title"})]}),Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("input",{className:"input",type:"text",placeholder:"Do Laundry",value:r,onChange:function(e){return i(e.target.value)}})}),Object(A.jsx)("p",{className:"help is-danger"})]}),Object(A.jsxs)("div",{className:"field",children:[Object(A.jsxs)("label",{className:"label",children:[Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-align-left"})}),Object(A.jsx)("span",{children:"Task Description"})]}),Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("textarea",{className:"textarea",placeholder:"what are the steps to do laundry??? i need to google bro...",value:o,onChange:function(e){return O(e.target.value)}})})]}),Object(A.jsx)("div",{className:"field",children:Object(A.jsxs)("div",{className:"control",children:[Object(A.jsx)("strong",{children:"Due Date : "})," ",F()(k).calendar()]})}),Object(A.jsxs)("div",{className:"field is-grouped",children:[Object(A.jsx)(te,{handleValueChange:function(e){m(e)},initialValue:f,dropDownOptions:x}),D?Object(A.jsx)($,{dateTime:k,setDateTime:N}):Object(A.jsx)("div",{className:"field",children:Object(A.jsx)("div",{className:"control",children:Object(A.jsx)("div",{className:"button is-outlined is-info is-light",onClick:function(){return C(!D)},children:"Custom due date"})})})]}),Object(A.jsx)(ee,{button1Text:"Update Task",button2Text:"Cancel",button1Click:function(){return T.apply(this,arguments)},button2Click:S})]})})]})},ue=function(){return Object(A.jsxs)("section",{className:"hero  is-fullheight-with-navbar",children:[Object(A.jsx)("div",{className:"hero-head"}),Object(A.jsx)("div",{className:"hero-body",children:Object(A.jsx)(oe,{})}),Object(A.jsx)("div",{className:"hero-foot pb-2 px-2",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("nav",{className:"level content",children:[Object(A.jsx)("div",{className:"level-left",children:Object(A.jsx)("p",{className:"level-item",children:"KARMA \xa9 2021"})}),Object(A.jsxs)("div",{className:"level-right",children:[Object(A.jsx)("p",{className:"level-item",children:"FAQ"}),Object(A.jsx)("p",{className:"level-item mr-1 mb-4",children:"Email Support"})]})]})})})]})};function oe(){var e=E();return Object(A.jsxs)("div",{className:"container has-text-centered",children:[Object(A.jsx)("p",{className:"content",children:Object(A.jsxs)("span",{className:"subtitle",children:["A Minimalistic TODO App with powerfull features",Object(A.jsx)("br",{}),"Please ",Object(A.jsx)("strong",{children:"SignUp"})," or ",Object(A.jsx)("strong",{children:"Log In"})," to Continue"]})}),Object(A.jsxs)("div",{className:"buttons",style:{justifyContent:"center"},children:[Object(A.jsx)("button",{className:"button is-outlined is-success is-light",onClick:Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signIn();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"Sign Up"}),Object(A.jsx)("button",{className:"button is-outlined is-link is-light",onClick:Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signIn();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"Log In"})]})]})}n(61);var je=function(e){var t=e.togglerOn,n=e.setTogglerOn;return Object(A.jsx)("button",{onClick:function(){n(!t)},className:"toggler button is-light",children:Object(A.jsx)("div",{className:t?"toggler-circle toggler-on has-background-success":"toggler-circle has-background-grey"})})},de=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Z(),r=z();return Object(A.jsxs)("div",{className:"mb-0 pb-0",children:[Object(A.jsxs)("div",{className:"level p-2 is-mobile",children:[Object(A.jsx)("div",{className:"level-left",children:Object(A.jsx)("div",{className:"level-item is-size-4 is-uppercase has-text-weight-semibold",children:s.currentProject?s.currentProject.title:""})}),Object(A.jsx)("div",{className:"level-right",children:Object(A.jsx)("div",{className:"level-item",children:Object(A.jsx)("button",{className:"button",onClick:function(){a(!n)},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-cog"})})})})})]}),n&&Object(A.jsxs)("div",{className:"px-2",children:[Object(A.jsxs)("div",{className:"columns is-justify-content-space-between is-mobile",children:[Object(A.jsx)("div",{className:"column is-narrow",children:Object(A.jsx)("span",{children:"Show Completed Tasks"})}),Object(A.jsx)("div",{className:"column is-narrow",children:Object(A.jsx)(je,{togglerOn:r.showCompleted,setTogglerOn:r.setShowCompleted})})]}),Object(A.jsxs)("div",{className:"columns is-justify-content-space-between is-mobile",children:[Object(A.jsx)("div",{className:"column is-narrow",children:Object(A.jsx)("span",{children:"Show Archived Tasks"})}),Object(A.jsx)("div",{className:"column is-narrow",children:Object(A.jsx)(je,{togglerOn:r.showArchived,setTogglerOn:r.setShowArchived})})]})]})]})},be=function(){var e=E();return Object(A.jsxs)(L.a,{children:[Object(A.jsx)(ie,{}),Object(A.jsx)("div",{children:Object(A.jsx)(H,{})}),e.user?Object(A.jsx)("section",{className:"section",children:Object(A.jsxs)(q,{children:[Object(A.jsx)(le,{}),Object(A.jsxs)("div",{className:"columns container mx-auto",children:[Object(A.jsx)("div",{className:"column is-one-fifth",children:Object(A.jsx)(se,{})}),Object(A.jsxs)("div",{className:"column",children:[Object(A.jsx)(de,{}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(Y,{})}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(ne,{})})]})]})]})}):Object(A.jsx)("div",{className:"",children:Object(A.jsx)(ue,{})})]})};r.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(J,{children:Object(A.jsx)(M,{children:Object(A.jsx)(be,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.5c7ef85b.chunk.js.map