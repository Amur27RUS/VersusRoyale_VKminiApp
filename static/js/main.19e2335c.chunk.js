(this.webpackJsonpKoreanTests=this.webpackJsonpKoreanTests||[]).push([[0],{118:function(e,t,a){"use strict";(function(e){var n=a(83),c=a.n(n),s=a(119),i=a(66),l=a(0),r=a.n(l),o=a(38),u=a.n(o),m=a(82),g=a.n(m),d=(a(294),a(81)),p=a(123);e.tests={currentTest:"111",winner:null};t.a=function(){var e=Object(l.useState)("home"),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(l.useState)(null),m=Object(i.a)(o,2),h=m[0],f=m[1],E=Object(l.useState)(null),v=Object(i.a)(E,2),b=v[0],T=v[1];Object(l.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),T(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var N=function(e){n(e.currentTarget.dataset.to)};return r.a.createElement(g.a,{activePanel:a,popout:b},r.a.createElement(d.a,{id:"home",fetchedUser:h,go:N}),r.a.createElement(p.a,{id:"TestPanel",go:N}))}}).call(this,a(32))},120:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return o}));var n=a(39),c=a(51),s=a.n(c),i=a(0),l=a.n(i),r=(a(81),[{id:1,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u043f\u0443\u0431\u0433\u0435\u0440"},{id:2,className:"TestUNLOCKED",title:"\u0418\u0433\u0440\u0430 \u0432\u0435\u043a\u0430"},{id:3,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u0441\u0442\u0440\u0438\u043c\u0435\u0440"},{id:4,className:"TestUNLOCKED",title:"\u0424\u0438\u043b\u044c\u043c \u0432\u0441\u0435\u0445 \u0432\u0440\u0435\u043c\u0435\u043d"},{id:5,className:"TestUNLOCKED",title:"\u0424\u0438\u0433\u043d\u044f"}]);function o(t){var a=t.go;return l.a.createElement(s.a,{title:"Navigation",className:"cardGrid"},l.a.createElement(n.b,null,r.map((function(t){return l.a.createElement(n.a,{className:"cards",size:"l",mode:"shadow",onClick:function(t){a(t),e.tests.currentTest="test1"},"data-to":"TestPanel"},l.a.createElement("div",{style:{height:15}}),l.a.createElement("p",{className:"titleCards"},t.title))}))))}}).call(this,a(32))},123:function(e,t,a){"use strict";(function(e){var n=a(0),c=a.n(n),s=a(39),i=a(52),l=a.n(i),r=a(53),o=a.n(r),u=a(129),m=a.n(u),g=a(124),d=a.n(g),p=a(125),h=a.n(p),f=(a(320),a(126)),E=Object(s.d)();t.a=function(t){return c.a.createElement(l.a,{id:t.id},c.a.createElement(o.a,{left:c.a.createElement(m.a,{onClick:t.go,"data-to":"home"},E===s.c?c.a.createElement(d.a,null):c.a.createElement(h.a,null))},"\u0422\u0435\u0441\u0442"),c.a.createElement(f.a,{curTest:e.tests.currentTest}))}}).call(this,a(32))},126:function(e,t,a){"use strict";for(var n=a(127),c=a(128),s=a(131),i=a(130),l=a(0),r=a.n(l),o=a(54),u=a.n(o),m=a(55),g=a.n(m),d=a(56),p=a.n(d),h=a(57),f=a.n(h),E=a(58),v=a.n(E),b=a(59),T=a.n(b),N=a(60),O=a.n(N),x=a(61),y=a.n(x),I=a(62),C=a.n(I),k=a(63),R=a.n(k),j=a(64),A=a.n(j),S=a(65),K=a.n(S),U=[u.a,g.a,p.a,f.a,v.a,T.a,O.a,y.a,C.a,R.a,A.a,K.a],w=[U.length],D=0;D<U.length;D++)w[D]=0;for(var L,_=1,B=V(0,U.length-1),P=V(0,U.length-1);B===P;)P=V(0,U.length-1);function V(e,t){var a=e-.5+Math.random()*(t-e+1);return Math.round(a)}console.log("UPPER CLASS STARTED");var G=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={image1:U[B],image2:U[P],css1:"TestImage",css2:"TestImage",text:null},c.changeImg1=function(){console.log("changeIMG1"),(L=0)<U.length-1&&delete U[P];for(var e=0;e<U.length;e++)void 0===U[e]&&L++;U.sort(),console.log("ARRAY:");for(var t=0;t<U.length;t++)console.log(U[t]);if(_++,L<U.length-1){for(B=V(0,U.length-_),P=V(0,U.length-_);B===P;)P=V(0,U.length-_);c.setState({image1:U[B],image2:U[P]})}else c.setState({image1:U[0],css2:"looser",css1:"winner",text:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"}),document.getElementById("image2").onclick=null,document.getElementById("image1").onclick=null,_=1,U=[u.a,g.a,p.a,f.a,v.a,T.a,O.a,y.a,C.a,R.a,A.a,K.a],B=V(0,U.length-1),P=V(0,U.length-1)},c.changeImg2=function(){console.log("changeIMG2"),(L=0)<U.length-1&&delete U[B];for(var e=0;e<U.length;e++)void 0===U[e]&&L++;U.sort(),console.log("ARRAY:");for(var t=0;t<U.length;t++)console.log(U[t]);if(_++,L<U.length-1){for(B=V(0,U.length-_),P=V(0,U.length-_);B===P;)P=V(0,U.length-_);c.setState({image1:U[B],image2:U[P]})}else c.setState({image2:U[0],css1:"looser",css2:"winner",text:"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"}),document.getElementById("image2").onclick=null,document.getElementById("image1").onclick=null,_=1,U=[u.a,g.a,p.a,f.a,v.a,T.a,O.a,y.a,C.a,R.a,A.a,K.a],B=V(0,U.length-1),P=V(0,U.length-1)},console.log("CONSTRUCTOR STARTED"),console.log(B),console.log(P),c}return Object(c.a)(a,[{key:"render",value:function(){return console.log("RENDER STARTED"),r.a.createElement("div",null,r.a.createElement("div",{className:"sign"},r.a.createElement("span",{className:"sign__word"},this.state.text)),r.a.createElement("div",null,r.a.createElement("img",{id:"image1",className:this.state.css1,src:this.state.image1,alt:"Loading error",onClick:this.changeImg1})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{id:"image2",className:this.state.css2,src:this.state.image2,alt:"Loading error",onClick:this.changeImg2})))}}]),a}(r.a.Component);t.a=G},215:function(e,t,a){e.exports=a(216)},216:function(e,t,a){"use strict";a.r(t);a(217),a(243),a(245),a(246),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285);var n=a(0),c=a.n(n),s=a(117),i=a.n(s),l=a(38),r=a.n(l),o=a(118);r.a.send("VKWebAppInit"),i.a.render(c.a.createElement(o.a,null),document.getElementById("root"))},320:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},55:function(e,t,a){e.exports=a.p+"static/media/spotty.b7c1e455.png"},56:function(e,t,a){e.exports=a.p+"static/media/luna.481437ac.png"},57:function(e,t,a){e.exports=a.p+"static/media/puppy.5c31f816.png"},58:function(e,t,a){e.exports=a.p+"static/media/doctor.bdd78b76.png"},59:function(e,t,a){e.exports=a.p+"static/media/catFish.43ba69bc.png"},60:function(e,t,a){e.exports=a.p+"static/media/hardKot.4611aa8c.png"},61:function(e,t,a){e.exports=a.p+"static/media/horse.76f0b3c5.png"},62:function(e,t,a){e.exports=a.p+"static/media/iLameRu.cad32669.png"},63:function(e,t,a){e.exports=a.p+"static/media/kurica.413cae42.png"},64:function(e,t,a){e.exports=a.p+"static/media/spider.278ca842.png"},65:function(e,t,a){e.exports=a.p+"static/media/vanya.5dbf56aa.png"},81:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=a(52),i=a.n(s),l=a(53),r=a.n(l),o=a(51),u=a.n(o),m=a(121),g=a.n(m),d=a(122),p=a.n(d),h=a(120);t.a=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(i.a,{id:t},c.a.createElement(r.a,{className:"panel"}," Versus ROYALE "),n&&c.a.createElement(u.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(g.a,{before:n.photo_200?c.a.createElement(p.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(h.a,{go:a}))}}},[[215,1,2]]]);
//# sourceMappingURL=main.19e2335c.chunk.js.map