(this.webpackJsonpKoreanTests=this.webpackJsonpKoreanTests||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},115:function(e,t,a){e.exports=a.p+"static/media/spotty.b7c1e455.png"},116:function(e,t,a){e.exports=a.p+"static/media/luna.481437ac.png"},117:function(e,t,a){e.exports=a.p+"static/media/puppy.5c31f816.png"},210:function(e,t,a){e.exports=a(315)},314:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);a(211),a(237),a(239),a(240),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279);for(var n,c=a(0),l=a.n(c),r=a(104),i=a.n(r),s=a(38),o=a.n(s),m=a(69),u=a.n(m),g=a(105),d=a(50),h=a(68),p=a.n(h),f=(a(288),a(48)),E=a.n(f),b=a(49),v=a.n(b),y=a(109),k=a.n(y),I=a(70),j=a.n(I),x=a(106),O=a.n(x),w=a(108),S=a.n(w),_=a(107),B=a.n(_),C=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(E.a,{id:t},l.a.createElement(v.a,null,"\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0438\u0435 \u0442\u0435\u0441\u0442\u044b"),n&&l.a.createElement(j.a,{title:"User Data Fetched with VK Bridge"},l.a.createElement(O.a,{before:n.photo_200?l.a.createElement(B.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(j.a,{title:"Navigation Example"},l.a.createElement(S.a,null,l.a.createElement(k.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))},K=a(71),N=a(118),A=a.n(N),T=a(110),U=a.n(T),V=a(111),W=a.n(V),J=(a(314),a(112)),L=a(113),M=a(120),z=a(119),D=a(114),F=a.n(D),G=a(115),P=a.n(G),q=a(116),H=a.n(q),Q=a(117),R=a.n(Q),X=[F.a,P.a,H.a,R.a],Y=1,Z=ee(0,X.length-1),$=ee(0,X.length-1);Z===$;)$=ee(0,X.length-1);function ee(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)}var te=function(e){Object(M.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(J.a)(this,a);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={image1:X[Z],image2:X[$],css1:"TestImage",css2:"TestImage",text:null},e.changeImg1=function(){(n=0)<X.length-1&&delete X[$];for(var t=0;t<X.length;t++)void 0===X[t]&&n++;if(X.sort(),Y++,n<X.length-1){for(Z=ee(0,X.length-Y),$=ee(0,X.length-Y);Z===$;)$=ee(0,X.length-Y);e.setState({image1:X[Z],image2:X[$]})}else e.setState({image1:X[0],css2:"looser",css1:"winner",text:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"}),document.getElementById("image2").onclick=null,document.getElementById("image1").onclick=null},e.changeImg2=function(){(n=0)<X.length-1&&delete X[Z];for(var t=0;t<X.length;t++)void 0===X[t]&&n++;if(X.sort(),Y++,n<X.length-1){for(Z=ee(0,X.length-Y),$=ee(0,X.length-Y);Z===$;)$=ee(0,X.length-Y);e.setState({image1:X[Z],image2:X[$]})}else e.setState({image1:X[0],css1:"looser",css2:"winner",text:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"}),document.getElementById("image2").onclick=null,document.getElementById("image1").onclick=null},e}return Object(L.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"sign"},l.a.createElement("span",{className:"sign__word"},this.state.text)),l.a.createElement("div",null,l.a.createElement("img",{id:"image1",className:this.state.css1,src:this.state.image1,alt:"Loading error",onClick:this.changeImg1})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("img",{id:"image2",className:this.state.css2,src:this.state.image2,alt:"Loading error",onClick:this.changeImg2})))}}]),a}(l.a.Component),ae=Object(K.b)(),ne=function(e){return l.a.createElement(E.a,{id:e.id},l.a.createElement(v.a,{left:l.a.createElement(A.a,{onClick:e.go,"data-to":"home"},ae===K.a?l.a.createElement(U.a,null):l.a.createElement(W.a,null))},"\u0422\u0435\u0441\u0442"),l.a.createElement(te,null))},ce=function(){var e=Object(c.useState)("home"),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),i=Object(d.a)(r,2),s=i[0],m=i[1],h=Object(c.useState)(null),f=Object(d.a)(h,2),E=f[0],b=f[1];Object(c.useEffect)((function(){function e(){return(e=Object(g.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,m(t),b(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){n(e.currentTarget.dataset.to)};return l.a.createElement(p.a,{activePanel:a,popout:E},l.a.createElement(C,{id:"home",fetchedUser:s,go:v}),l.a.createElement(ne,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(l.a.createElement(ce,null),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.828988ea.chunk.js.map