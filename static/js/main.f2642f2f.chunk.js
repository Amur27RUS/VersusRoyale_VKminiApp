(this.webpackJsonpKoreanTests=this.webpackJsonpKoreanTests||[]).push([[0],{108:function(e,t,a){"use strict";(function(e){var n=a(73),c=a.n(n),s=a(109),i=a(56),l=a(0),r=a.n(l),o=a(39),u=a.n(o),m=a(72),g=a.n(m),d=(a(294),a(71)),p=a(113);e.tests={currentTest:"111",winner:null};t.a=function(){var e=Object(l.useState)("home"),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(l.useState)(null),m=Object(i.a)(o,2),f=m[0],h=m[1],E=Object(l.useState)(null),v=Object(i.a)(E,2),b=v[0],T=v[1];Object(l.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),T(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var N=function(e){n(e.currentTarget.dataset.to)};return r.a.createElement(g.a,{activePanel:a,popout:b},r.a.createElement(d.a,{id:"home",fetchedUser:f,go:N}),r.a.createElement(p.a,{id:"TestPanel",go:N}))}}).call(this,a(23))},110:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return o}));var n=a(40),c=a(53),s=a.n(c),i=a(0),l=a.n(i),r=(a(71),[{id:1,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u043f\u0443\u0431\u0433\u0435\u0440"},{id:2,className:"TestUNLOCKED",title:"\u0418\u0433\u0440\u0430 \u0432\u0435\u043a\u0430"},{id:3,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u0441\u0442\u0440\u0438\u043c\u0435\u0440"},{id:4,className:"TestUNLOCKED",title:"\u0424\u0438\u043b\u044c\u043c \u0432\u0441\u0435\u0445 \u0432\u0440\u0435\u043c\u0435\u043d"},{id:5,className:"TestUNLOCKED",title:"\u0424\u0438\u0433\u043d\u044f"}]);function o(t){var a=t.go;return l.a.createElement(s.a,{title:"Navigation",className:"cardGrid"},l.a.createElement(n.b,null,r.map((function(t){return l.a.createElement(n.a,{className:"cards",size:"l",mode:"shadow",onClick:function(n){a(n),e.tests.currentTest=t.id},"data-to":"TestPanel"},l.a.createElement("div",{style:{height:15}}),l.a.createElement("p",{className:"titleCards"},t.title))}))))}}).call(this,a(23))},113:function(e,t,a){"use strict";(function(e){var n=a(0),c=a.n(n),s=a(40),i=a(54),l=a.n(i),r=a(55),o=a.n(r),u=a(129),m=a.n(u),g=a(114),d=a.n(g),p=a(115),f=a.n(p),h=(a(320),a(116)),E=Object(s.d)();t.a=function(t){return c.a.createElement(l.a,{id:t.id},c.a.createElement(o.a,{left:c.a.createElement(m.a,{onClick:t.go,"data-to":"home"},E===s.c?c.a.createElement(d.a,null):c.a.createElement(f.a,null))},"\u0422\u0435\u0441\u0442"),c.a.createElement(h.a,{curTest:e.tests.currentTest}))}}).call(this,a(23))},116:function(e,t,a){"use strict";(function(e){for(var n=a(117),c=a(118),s=a(131),i=a(130),l=a(0),r=a.n(l),o=a(33),u=a.n(o),m=a(47),g=a.n(m),d=a(119),p=a.n(d),f=a(120),h=a.n(f),E=a(121),v=a.n(E),b=a(122),T=a.n(b),N=a(123),O=a.n(N),x=a(124),C=a.n(x),j=a(125),y=a.n(j),A=a(126),I=a.n(A),K=a(127),S=a.n(K),U=a(128),R=a.n(U),k=[u.a,g.a,p.a,h.a,v.a,T.a,O.a,C.a,y.a,I.a,S.a,R.a],w=[u.a,g.a],L=[g.a,g.a],D=[u.a,u.a],_=[k.slice(),w.slice(),L.slice(),D.slice()],P=[u.a,u.a],V=[P.length],G=0;G<P.length;G++)V[G]=0;for(var M,W=1,Y=F(0,P.length-1),B=F(0,P.length-1);Y===B;)B=F(0,P.length-1);function F(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)}console.log("UPPER CLASS STARTED");var J=function(t){Object(s.a)(l,t);var a=Object(i.a)(l);function l(t){var c;for(Object(n.a)(this,l),P=_[e.tests.currentTest-1],Y=F(0,P.length-1),B=F(0,P.length-1);Y===B;)B=F(0,P.length-1);return(c=a.call(this,t)).state={image1:P[Y],image2:P[B],css1:"TestImage",css2:"TestImage",text:null},c.changeImg1=function(){console.log("changeIMG1"),(M=0)<P.length-1&&delete P[B];for(var t=0;t<P.length;t++)void 0===P[t]&&M++;P.sort(),console.log(_[e.tests.currentTest-1]),console.log("ARRAY:");for(var a=0;a<P.length;a++)console.log(P[a]);if(W++,M<P.length-1){for(Y=F(0,P.length-W),B=F(0,P.length-W);Y===B;)B=F(0,P.length-W);c.setState({image1:P[Y],image2:P[B]})}else c.setState({image1:P[0],css2:"looser",css1:"winner",text:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"}),W=1,_=[k.slice(),w.slice(),L.slice(),D.slice()]},c.changeImg2=function(){console.log("changeIMG2"),(M=0)<P.length-1&&delete P[Y];for(var t=0;t<P.length;t++)void 0===P[t]&&M++;P.sort(),console.log(_[e.tests.currentTest-1]),console.log("ARRAY:");for(var a=0;a<P.length;a++)console.log(P[a]);if(W++,M<P.length-1){for(Y=F(0,P.length-W),B=F(0,P.length-W);Y===B;)B=F(0,P.length-W);c.setState({image1:P[Y],image2:P[B]})}else c.setState({image2:P[0],css1:"looser",css2:"winner",text:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"}),W=1,_=[k.slice(),w.slice(),L.slice(),D.slice()]},console.log("CONSTRUCTOR STARTED"),console.log(Y),console.log(B),c}return Object(c.a)(l,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"sign"},r.a.createElement("span",{className:"sign__word"},this.state.text)),r.a.createElement("div",null,r.a.createElement("img",{id:"image1",className:this.state.css1,src:this.state.image1,alt:"Loading error",onClick:this.changeImg1})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{id:"image2",className:this.state.css2,src:this.state.image2,alt:"Loading error",onClick:this.changeImg2})))}}]),l}(r.a.Component);t.a=J}).call(this,a(23))},119:function(e,t,a){e.exports=a.p+"static/media/luna.481437ac.png"},120:function(e,t,a){e.exports=a.p+"static/media/puppy.5c31f816.png"},121:function(e,t,a){e.exports=a.p+"static/media/doctor.bdd78b76.png"},122:function(e,t,a){e.exports=a.p+"static/media/catFish.43ba69bc.png"},123:function(e,t,a){e.exports=a.p+"static/media/hardKot.4611aa8c.png"},124:function(e,t,a){e.exports=a.p+"static/media/horse.76f0b3c5.png"},125:function(e,t,a){e.exports=a.p+"static/media/iLameRu.cad32669.png"},126:function(e,t,a){e.exports=a.p+"static/media/kurica.413cae42.png"},127:function(e,t,a){e.exports=a.p+"static/media/spider.278ca842.png"},128:function(e,t,a){e.exports=a.p+"static/media/vanya.5dbf56aa.png"},215:function(e,t,a){e.exports=a(216)},216:function(e,t,a){"use strict";a.r(t);a(217),a(243),a(245),a(246),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285);var n=a(0),c=a.n(n),s=a(107),i=a.n(s),l=a(39),r=a.n(l),o=a(108);r.a.send("VKWebAppInit"),i.a.render(c.a.createElement(o.a,null),document.getElementById("root"))},320:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},47:function(e,t,a){e.exports=a.p+"static/media/spotty.b7c1e455.png"},71:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(54),i=a.n(s),l=a(55),r=a.n(l),o=a(53),u=a.n(o),m=a(111),g=a.n(m),d=a(112),p=a.n(d),f=a(110);t.a=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(i.a,{id:t},c.a.createElement(r.a,{className:"panel"}," Versus ROYALE "),n&&c.a.createElement(u.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(g.a,{before:n.photo_200?c.a.createElement(p.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(f.a,{go:a}))}}},[[215,1,2]]]);
//# sourceMappingURL=main.f2642f2f.chunk.js.map