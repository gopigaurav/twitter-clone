(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{61:function(e,t,a){e.exports=a(89)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(18),c=a.n(i),E=(a(66),a(67),a(40)),A=a.n(E);a(68);var r=function(e){var t=e.active,a=e.text,o=e.Icon;return n.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active")},n.a.createElement(o,null),n.a.createElement("h2",null,a))},R=a(45),u=a.n(R),m=a(32),l=a.n(m),S=a(46),k=a.n(S),s=a(47),Q=a.n(s),y=a(48),F=a.n(y),V=a(49),U=a.n(V),C=a(50),Z=a.n(C),G=a(51),M=a.n(G),I=a(102);var j=function(){return n.a.createElement("div",{className:"sidebar"},n.a.createElement(A.a,{className:"sidebar__twitterIcon"}),n.a.createElement(r,{active:!0,Icon:u.a,text:"Home"}),n.a.createElement(r,{Icon:l.a,text:"Explore"}),n.a.createElement(r,{Icon:k.a,text:"Notifications"}),n.a.createElement(r,{Icon:Q.a,text:"Messages"}),n.a.createElement(r,{Icon:F.a,text:"Bookmarks"}),n.a.createElement(r,{Icon:U.a,text:"Lists"}),n.a.createElement(r,{Icon:Z.a,text:"Profile"}),n.a.createElement(r,{Icon:M.a,text:"More"}),n.a.createElement(I.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0},"Tweet"))},d=a(29),K=(a(74),a(103)),N=a(52),J=a.n(N).a.initializeApp({apiKey:"AIzaSyAzJPkhHjs_Un9zSuGRKBPFadH6SK_fx8I",authDomain:"twitter-clone-2a62e.firebaseapp.com",databaseURL:"https://twitter-clone-2a62e.firebaseio.com",projectId:"twitter-clone-2a62e",storageBucket:"twitter-clone-2a62e.appspot.com",messagingSenderId:"592206246216",appId:"1:592206246216:web:76a850383ecfddde38837d",measurementId:"G-2363D9CMZE"}).firestore();var L=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(o.useState)(""),E=Object(d.a)(c,2),A=E[0],r=E[1];return n.a.createElement("div",{className:"tweetBox"},n.a.createElement("form",null,n.a.createElement("div",{className:"tweetBox__input"},n.a.createElement(K.a,{src:"data:image/jpeg;base64,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"}),n.a.createElement("input",{onChange:function(e){return i(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})),n.a.createElement("input",{value:A,onChange:function(e){return r(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),n.a.createElement(I.a,{onClick:function(e){e.preventDefault(),J.collection("posts").add({displayName:"gopi",username:"gopi.gaurav",verified:!0,text:a,image:A,avatar:"data:image/jpeg;base64,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"}),i(""),r("")},type:"submit",className:"tweetBox__tweetButton"},"Tweet")))},O=(a(85),a(53)),b=a.n(O),f=a(54),X=a.n(f),T=a(55),p=a.n(T),W=a(56),B=a.n(W),w=a(57),g=a.n(w),P=Object(o.forwardRef)((function(e,t){var a=e.displayName,o=e.username,i=e.verified,c=e.text,E=e.image,A=e.avatar;return n.a.createElement("div",{className:"post",ref:t},n.a.createElement("div",{className:"post__avatar"},n.a.createElement(K.a,{src:A})),n.a.createElement("div",{className:"post__body"},n.a.createElement("div",{className:"post__header"},n.a.createElement("div",{className:"post__headerText"},n.a.createElement("h3",null,a," ",n.a.createElement("span",{className:"post__headerSpecial"},i&&n.a.createElement(b.a,{className:"post__badge"})," @",o))),n.a.createElement("div",{className:"post__headerDescription"},n.a.createElement("p",null,c))),n.a.createElement("img",{src:E,alt:""}),n.a.createElement("div",{className:"post__footer"},n.a.createElement(X.a,{fontSize:"small"}),n.a.createElement(p.a,{fontSize:"small"}),n.a.createElement(B.a,{fontSize:"small"}),n.a.createElement(g.a,{fontSize:"small"}))))})),H=(a(86),a(58));var x=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(o.useEffect)((function(){J.collection("posts").onSnapshot((function(e){return i(e.docs.map((function(e){return e.data()})))}))}),[]),n.a.createElement("div",{className:"feed"},n.a.createElement("div",{className:"feed__header"},n.a.createElement("h2",null,"Home")),n.a.createElement(L,null),n.a.createElement(H.a,null,a.map((function(e){return n.a.createElement(P,{key:e.text,displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})}))))},D=(a(87),a(33));var v=function(){return n.a.createElement("div",{className:"widgets"},n.a.createElement("div",{className:"widgets__input"},n.a.createElement(l.a,{className:"widgets__searchIcon"}),n.a.createElement("input",{placeholder:"Search Twitter",type:"text"})),n.a.createElement("div",{className:"widgets__widgetContainer"},n.a.createElement("h2",null,"What's happening"),n.a.createElement(D.c,{tweetId:"858551177860055040"}),n.a.createElement(D.b,{sourceType:"profile",screenName:"cleverqazi",options:{height:400}}),n.a.createElement(D.a,{url:"https://facebook.com/cleverprogrammer",options:{text:"#reactjs is awesome",via:"cleverqazi"}})))};a(88);var h=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(j,null),n.a.createElement(x,null),n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.8838386a.chunk.js.map