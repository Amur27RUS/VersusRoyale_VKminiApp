(this.webpackJsonpKoreanTests=this.webpackJsonpKoreanTests||[]).push([[0],Array(52).concat([function(e,t,n){e.exports=n.p+"static/media/iLameRu.cad32669.png"},function(e,t,n){e.exports=n.p+"static/media/kurica.413cae42.png"},function(e,t,n){e.exports=n.p+"static/media/spider.278ca842.png"},function(e,t,n){e.exports=n.p+"static/media/vanya.5dbf56aa.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var a=n(74),s=n.n(a),i=n(110),c=n(58),o=n(0),r=n.n(o),l=n(38),m=n.n(l),p=n(73),u=n.n(p),g=(n(358),n(52)),d=n.n(g),f=n(53),x=n.n(f),h=n(54),w=n.n(h),S=n(55),v=n.n(S),N=n(111),b=n(115);e.tests={currentTest:"111",currentTestName:"testName",winner1:v.a,winner2:w.a,winner3:x.a,winner4:d.a};t.a=function(){var e=Object(o.useState)("home"),t=Object(c.a)(e,2),n=t[0],a=t[1],l=Object(o.useState)(null),p=Object(c.a)(l,2),g=p[0],d=p[1],f=Object(o.useState)(null),x=Object(c.a)(f,2),h=x[0],w=x[1];Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var S=function(e){a(e.currentTarget.dataset.to)};return r.a.createElement(u.a,{activePanel:n,popout:h},r.a.createElement(N.a,{id:"home",fetchedUser:g,go:S}),r.a.createElement(b.a,{id:"TestPanel",go:S}))}}).call(this,n(23))},,function(e,t,n){"use strict";var a=n(0),s=n.n(a),i=n(56),c=n.n(i),o=n(57),r=n.n(o),l=n(39),m=n.n(l),p=n(113),u=n.n(p),g=n(114),d=n.n(g),f=n(112);t.a=function(e){var t=e.id,n=e.go,a=e.fetchedUser;return s.a.createElement(c.a,{id:t},s.a.createElement(r.a,{className:"panel"}," Versus ROYALE "),a&&s.a.createElement(m.a,{title:"User Data Fetched with VK Bridge"},s.a.createElement(u.a,{before:a.photo_200?s.a.createElement(d.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),s.a.createElement(f.a,{go:n}))}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var a=n(40),s=n(39),i=n.n(s),c=n(0),o=n.n(c),r=[{id:1,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u0441\u0442\u0440\u0438\u043c\u0435\u0440"},{id:2,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u0441\u0442\u0438\u043a\u0435\u0440\u043f\u0430\u043a \u0412\u041a"},{id:3,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0430\u044f \u0438\u0433\u0440\u0430 \u0433\u043e\u0434\u0430"},{id:4,className:"TestUNLOCKED",title:"\u0424\u0443\u0442\u0431\u043e\u043b\u0438\u0441\u0442 \u0433\u043e\u0434\u0430"},{id:5,className:"TestUNLOCKED",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u043c\u0435\u043c 2020 \u0433\u043e\u0434\u0430"}];function l(t){var n=t.go;return o.a.createElement(i.a,{title:"Navigation",className:"cardGrid"},o.a.createElement(a.b,null,r.map((function(t){return o.a.createElement("div",{className:"CARD"},o.a.createElement(a.a,{className:"cards",size:"l",mode:"shadow",onClick:function(a){n(a),e.tests.currentTest=t.id,e.tests.currentTestName=t.title},"data-to":"TestPanel"},o.a.createElement("div",{className:"divYourVote"},o.a.createElement("p",{className:"titleCards"},t.title),o.a.createElement("p",{className:"yourVote"},"\u0412\u0430\u0448 \u0432\u044b\u0431\u043e\u0440:",o.a.createElement("br",null),o.a.createElement("img",{src:e.tests.winner1,className:"imgOnCard",width:"60",height:"60"})))))}))))}}).call(this,n(23))},,,function(e,t,n){"use strict";(function(e){var a=n(0),s=n.n(a),i=n(40),c=n(56),o=n.n(c),r=n(57),l=n.n(r),m=n(193),p=n.n(m),u=n(116),g=n.n(u),d=n(117),f=n.n(d),x=(n(384),n(118)),h=Object(i.d)();t.a=function(t){return s.a.createElement(o.a,{id:t.id},s.a.createElement(l.a,{left:s.a.createElement(p.a,{onClick:t.go,"data-to":"home"},h===i.c?s.a.createElement(g.a,null):s.a.createElement(f.a,null))},e.tests.currentTestName),s.a.createElement(x.a,{curTest:e.tests.currentTest}))}}).call(this,n(23))},,,function(e,t,n){"use strict";(function(e){for(var a,s=n(119),i=n(120),c=n(195),o=n(194),r=n(0),l=n.n(r),m=n(121),p=n.n(m),u=n(122),g=n.n(u),d=n(123),f=n.n(d),x=n(124),h=n.n(x),w=n(125),S=n.n(w),v=n(126),N=n.n(v),b=n(127),C=n.n(b),E=n(128),T=n.n(E),y=n(52),I=n.n(y),O=n(53),k=n.n(O),A=n(54),D=n.n(A),R=n(55),K=n.n(R),V=n(129),U=n.n(V),L=n(130),j=n.n(L),M=n(131),G=n.n(M),F=n(132),P=n.n(F),_=n(133),B=n.n(_),J=n(134),z=n.n(J),W=n(135),Y=n.n(W),Z=n(136),H=n.n(Z),X=n(137),q=n.n(X),Q=n(138),$=n.n(Q),ee=n(139),te=n.n(ee),ne=n(140),ae=n.n(ne),se=n(141),ie=n.n(se),ce=n(142),oe=n.n(ce),re=n(143),le=n.n(re),me=n(144),pe=n.n(me),ue=n(145),ge=n.n(ue),de=n(146),fe=n.n(de),xe=n(147),he=n.n(xe),we=n(148),Se=n.n(we),ve=n(149),Ne=n.n(ve),be=n(150),Ce=n.n(be),Ee=n(151),Te=n.n(Ee),ye=n(152),Ie=n.n(ye),Oe=n(153),ke=n.n(Oe),Ae=n(154),De=n.n(Ae),Re=n(155),Ke=n.n(Re),Ve=n(156),Ue=n.n(Ve),Le=n(157),je=n.n(Le),Me=n(158),Ge=n.n(Me),Fe=n(159),Pe=n.n(Fe),_e=n(160),Be=n.n(_e),Je=n(161),ze=n.n(Je),We=n(162),Ye=n.n(We),Ze=n(163),He=n.n(Ze),Xe=n(164),qe=n.n(Xe),Qe=n(165),$e=n.n(Qe),et=n(166),tt=n.n(et),nt=n(167),at=n.n(nt),st=n(168),it=n.n(st),ct=n(169),ot=n.n(ct),rt=n(170),lt=n.n(rt),mt=n(171),pt=n.n(mt),ut=n(172),gt=n.n(ut),dt=n(173),ft=n.n(dt),xt=n(174),ht=n.n(xt),wt=n(175),St=n.n(wt),vt=n(176),Nt=n.n(vt),bt=n(177),Ct=n.n(bt),Et=n(178),Tt=n.n(Et),yt=n(179),It=n.n(yt),Ot=n(180),kt=n.n(Ot),At=n(181),Dt=n.n(At),Rt=n(182),Kt=n.n(Rt),Vt=n(183),Ut=n.n(Vt),Lt=n(184),jt=n.n(Lt),Mt=n(185),Gt=n.n(Mt),Ft=n(186),Pt=n.n(Ft),_t=n(187),Bt=n.n(_t),Jt=n(188),zt=n.n(Jt),Wt=n(189),Yt=n.n(Wt),Zt=n(190),Ht=n.n(Zt),Xt=n(191),qt=n.n(Xt),Qt=n(192),$t=n.n(Qt),en=n(39),tn=n.n(en),nn=new Ka(p.a,"\u041f\u0435\u0440\u0441\u0438\u043a"),an=new Ka(g.a,"\u0421\u043f\u043e\u0442\u0442\u0438"),sn=new Ka(f.a,"\u041b\u0443\u043d\u0430"),cn=new Ka(h.a,"\u041f\u0430\u043f\u043f\u0438"),on=new Ka(S.a,"\u0414\u043e\u043a\u0442\u043e\u0440"),rn=new Ka(N.a,"\u041a\u043e\u0442\u043e\u0420\u044b\u0431\u0430"),ln=new Ka(C.a,"\u0425\u0430\u0440\u0434\u041a\u043e\u0442"),mn=new Ka(T.a,"\u041a\u043e\u043d\u044c"),pn=(new Ka(I.a,"\u041b\u0430\u043c\u044b\u0447"),new Ka(k.a,"\u041a\u0443\u0440\u0438\u0446\u0430"),new Ka(D.a,"\u041f\u0430\u0443\u043a"),new Ka(K.a,"\u0412\u0430\u043d\u044f"),new Ka(U.a,"BratishkinOff")),un=new Ka(j.a,"CheatBanned"),gn=new Ka(G.a,"Evelone"),dn=new Ka(P.a,"Gnumme"),fn=new Ka(B.a,"iLameRU"),xn=new Ka(z.a,"Itpedia"),hn=new Ka(Y.a,"JesusAVGN"),wn=new Ka(H.a,"Karmik Koala"),Sn=new Ka(q.a,"Kuplinov"),vn=new Ka($.a,"Maddyson"),Nn=new Ka(te.a,"\u041d\u0430\u0432\u0430\u043b\u044c\u043d\u044b\u0439"),bn=new Ka(ae.a,"Olsior"),Cn=new Ka(ie.a,"\u041f\u0430\u043f\u0438\u0447"),En=new Ka(oe.a,"Russia Paver"),Tn=new Ka(le.a,"SnailKick"),yn=new Ka(pe.a,"VJLink"),In=new Ka(ge.a,"archangel_hs"),On=new Ka(fe.a,"BlackUFA"),kn=new Ka(he.a,"DreadzTV"),An=new Ka(Se.a,"buster"),Dn=new Ka(Ne.a,"ceh9"),Rn=new Ka(Ie.a,"Juice"),Kn=new Ka(Ce.a,"hardgamechannel"),Vn=new Ka(Te.a,"IrmanPlay"),Un=new Ka(ke.a,"just_ns"),Ln=new Ka(De.a,"Manyrin"),jn=new Ka(Ke.a,"mokrivskyi"),Mn=new Ka(Ue.a,"SilverName"),Gn=new Ka(je.a,"StRoGo"),Fn=new Ka(Ge.a,"Zeus"),Pn=new Ka(Pe.a,"ZLOYn"),_n=new Ka(Be.a,"\u0425\u0412\u041e\u0421\u0422"),Bn=new Ka(ze.a,"Witcher"),Jn=new Ka(Ye.a,"RDR 2"),zn=new Ka(He.a,"Skyrim"),Wn=new Ka(qe.a,"God of War"),Yn=new Ka($e.a,"The last of us"),Zn=new Ka(tt.a,"Disco elysium"),Hn=new Ka(at.a,"Resident evil 2"),Xn=new Ka(it.a,"Far cry 3"),qn=new Ka(ot.a,"Dark souls 3"),Qn=new Ka(lt.a,"XCOM 2"),$n=new Ka(pt.a,"GTA 5"),ea=new Ka(gt.a,"Portal 2"),ta=new Ka(ft.a,"Mass effect 3"),na=new Ka(ht.a,"Fallout New Vegas"),aa=new Ka(St.a,"Dishonered 2"),sa=new Ka(Nt.a,"Destiny 2"),ia=new Ka(Ct.a,"Civilization 5"),ca=new Ka(Tt.a,"Life is strange"),oa=new Ka(It.a,"Outlast 2"),ra=new Ka(kt.a,"Detroit"),la=new Ka(Dt.a,"Doom"),ma=new Ka(Kt.a,"Assassins Creed"),pa=new Ka(Ut.a,"Final Fantasy XV"),ua=new Ka(jt.a,"The walking dead"),ga=new Ka(Gt.a,"Metal gear solid 5"),da=new Ka(Pt.a,"Hotline Miami"),fa=new Ka(Bt.a,"Batman Arkham city"),xa=new Ka(zt.a,"Uncharted 4"),ha=new Ka(Yt.a,"Death stranding"),wa=new Ka(Ht.a,"Bioshock infinity"),Sa=new Ka(qt.a,"Minecraft"),va=new Ka($t.a,"Horizon zero dawn"),Na=[pn,un,gn,dn,fn,xn,hn,wn,Sn,vn,Nn,bn,Cn,En,Tn,yn,An,kn,On,In,Dn,Kn,Vn,Rn,Un,Ln,jn,Mn,Gn,Fn,Pn,_n],ba=[nn,an,sn,cn,on,rn,ln,mn],Ca=[Bn,Jn,zn,Wn,Yn,Zn,Hn,Xn,qn,Qn,$n,ea,ta,na,aa,sa,ia,ca,oa,ra,la,ma,pa,ua,ga,da,fa,xa,ha,wa,Sa,va],Ea=[nn,nn],Ta=[Na.slice(),ba.slice(),Ca.slice(),Ea.slice()],ya=[nn,nn],Ia=1,Oa=1,ka=0,Aa=Ra(0,ya.length-1),Da=Ra(0,ya.length-1);Aa===Da;)Da=Ra(0,ya.length-1);function Ra(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)}function Ka(e,t){this.image=e,this.text=t,this.useNum=0}console.log("UPPER CLASS STARTED");var Va=function(t){Object(c.a)(r,t);var n=Object(o.a)(r);function r(t){var i;Object(s.a)(this,r),Oa=1,Ia=1,Ta=[Na.slice(),ba.slice(),Ca.slice(),Ea.slice()],ya=Ta[e.tests.currentTest-1];for(var c=0;c<ya.length;c++)ya[c].useNum=0;for(a=0,Aa=Ra(0,ya.length-1),Da=Ra(0,ya.length-1);Aa===Da;)Da=Ra(0,ya.length-1);return(i=n.call(this,t)).state={image1:ya[Aa].image,image2:ya[Da].image,text1:ya[Aa].text,text2:ya[Da].text,css1:"looser",css2:"looser",textCss1:"looser",textCss2:"looser",text:null,vsIconCSS:"looser",roundTitle:"\u0420\u0430\u0443\u043d\u0434 "+Ia.toString(),roundTitleCSS:"roundTitle"},i.roundAnimationFunc=function(){i.setState({image1:ya[Aa].image,image2:ya[Da].image,text1:ya[Aa].text,text2:ya[Da].text,css1:"TestImage",css2:"TestImage",textCss1:"textForImage1",textCss2:"textForImage2",text:null,vsIconCSS:"VSicon",roundTitle:"\u0420\u0430\u0443\u043d\u0434 "+Ia.toString(),roundTitleCSS:"looser"})},i.changeImg1Remastered=function(){console.log("\u0412\u044b \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u043d\u0430 \u0432\u0435\u0445\u043d\u044e\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443!"),a=0,delete ya[Da];for(var t=0;t<ya.length;t++)void 0===ya[t]&&a++;if(a<ya.length-1){Oa++,ya.length-a===ya.length/2||ya.length-a===ya.length/4||ya.length-a>0&&ya.length-a===ya.length/8?(Ia++,i.setState({css1:"looser",css2:"looser",textCss1:"looser",textCss2:"looser",text:null,vsIconCSS:"looser",roundTitle:"\u0420\u0430\u0443\u043d\u0434 "+Ia.toString(),roundTitleCSS:"roundTitle"})):ya.length-a>0&&ya.length-a===ya.length/16&&(Ia++,i.setState({css1:"looser",css2:"looser",textCss1:"looser",textCss2:"looser",text:null,vsIconCSS:"looser",roundTitle:"\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0443\u043d\u0434!",roundTitleCSS:"roundTitle"})),ya[Aa].useNum++,ya.sort(),console.log(ya),ka=100;for(var n=0;n<ya.length-Oa;n++)ya[n].useNum<ka&&(ka=ya[n].useNum);for(console.log("MinUSAGE = "+ka),Aa=Ra(0,ya.length-Oa);ya[Aa].useNum!==ka;)Aa=Ra(0,ya.length-Oa);for(Da=Ra(0,ya.length-Oa);ya[Da].useNum!==ka||Aa===Da;)Da=Ra(0,ya.length-Oa);i.setState({image1:ya[Aa].image,image2:ya[Da].image,text1:ya[Aa].text,text2:ya[Da].text})}else e.tests.winner1=ya[Aa].image,i.setState({image1:ya[Aa].image,css2:"looser",css1:"winner",text:e.tests.currentTestName,textCss1:"looser",textCss2:"looser",vsIconCSS:"looser"}),Oa=1,Ta=[Na.slice(),ba.slice(),Ca.slice(),Ea.slice()]},i.changeImg2Remastered=function(){console.log("\u0412\u044b \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u043d\u0430 \u043d\u0438\u0436\u043d\u044e\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443!"),a=0,delete ya[Aa];for(var t=0;t<ya.length;t++)void 0===ya[t]&&a++;if(a<ya.length-1){Oa++,ya.length-a===ya.length/2||ya.length-a===ya.length/4||ya.length-a>0&&ya.length-a===ya.length/8?(Ia++,i.setState({css1:"looser",css2:"looser",textCss1:"looser",textCss2:"looser",text:null,vsIconCSS:"looser",roundTitle:"\u0420\u0430\u0443\u043d\u0434 "+Ia.toString(),roundTitleCSS:"roundTitle"})):ya.length-a>0&&ya.length-a===ya.length/16&&(Ia++,i.setState({css1:"looser",css2:"looser",textCss1:"looser",textCss2:"looser",text:null,vsIconCSS:"looser",roundTitle:"\u0424\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0443\u043d\u0434!",roundTitleCSS:"roundTitle"})),ya[Da].useNum++,ya.sort(),console.log(ya),ka=100;for(var n=0;n<ya.length-Oa;n++)ya[n].useNum<ka&&(ka=ya[n].useNum);for(console.log("MinUSAGE = "+ka),Aa=Ra(0,ya.length-Oa);ya[Aa].useNum!==ka;)Aa=Ra(0,ya.length-Oa);for(Da=Ra(0,ya.length-Oa);ya[Da].useNum!==ka||Aa===Da;)Da=Ra(0,ya.length-Oa);console.log("NUMS \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e:"),console.log(Aa+" "+Da),i.setState({image1:ya[Aa].image,image2:ya[Da].image,text1:ya[Aa].text,text2:ya[Da].text})}else e.tests.winner1=ya[Da].image,i.setState({image1:ya[Da].image,css2:"looser",css1:"winner",text:e.tests.currentTestName,textCss1:"looser",textCss2:"looser",vsIconCSS:"looser"}),Oa=1,Ta=[Na.slice(),ba.slice(),Ca.slice(),Ea.slice()]},console.log("CONSTRUCTOR STARTED"),console.log(ya),i}return Object(i.a)(r,[{key:"render",value:function(){return l.a.createElement(tn.a,{title:"test",className:"cardGrid"},l.a.createElement("div",{className:"picDIV"},l.a.createElement("div",{className:"sign"},l.a.createElement("span",{className:"sign__word"},this.state.text)),l.a.createElement("h1",null,l.a.createElement("span",{className:this.state.roundTitleCSS,onAnimationEnd:this.roundAnimationFunc},this.state.roundTitle)),l.a.createElement("div",{className:"imageDIV"},l.a.createElement("img",{id:"image1",className:this.state.css1,src:this.state.image1,alt:"Loading error",onClick:this.changeImg1Remastered})),l.a.createElement("div",{className:"imageDIV"},l.a.createElement("p",{className:this.state.textCss1},this.state.text1),l.a.createElement("img",{id:"image2",className:this.state.css2,src:this.state.image2,alt:"Loading error",onClick:this.changeImg2Remastered})),l.a.createElement("div",{className:"imageDIV"},l.a.createElement("p",{className:this.state.textCss2},this.state.text2))))}}]),r}(l.a.Component);t.a=Va}).call(this,n(23))},,,function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"},function(e,t,n){e.exports=n.p+"static/media/spotty.b7c1e455.png"},function(e,t,n){e.exports=n.p+"static/media/luna.481437ac.png"},function(e,t,n){e.exports=n.p+"static/media/puppy.5c31f816.png"},function(e,t,n){e.exports=n.p+"static/media/doctor.bdd78b76.png"},function(e,t,n){e.exports=n.p+"static/media/catFish.43ba69bc.png"},function(e,t,n){e.exports=n.p+"static/media/hardKot.4611aa8c.png"},function(e,t,n){e.exports=n.p+"static/media/horse.76f0b3c5.png"},function(e,t,n){e.exports=n.p+"static/media/BratishkinOff.82f3ef83.png"},function(e,t,n){e.exports=n.p+"static/media/CheatBanned.b09ea2f7.png"},function(e,t,n){e.exports=n.p+"static/media/Evelone.eaa3005d.png"},function(e,t,n){e.exports=n.p+"static/media/Gnumme.7269d649.png"},function(e,t,n){e.exports=n.p+"static/media/iLameRu \u043a\u043e\u043f\u0438\u044f.5ab400f3.png"},function(e,t,n){e.exports=n.p+"static/media/ITPEDIA.038bae90.png"},function(e,t,n){e.exports=n.p+"static/media/JesusAVGN.00935cd8.png"},function(e,t,n){e.exports=n.p+"static/media/KarmikKoala.5122f4c0.png"},function(e,t,n){e.exports=n.p+"static/media/kuplinovPLAY.14e8f8ac.png"},function(e,t,n){e.exports=n.p+"static/media/Maddyson.f7bc7824.png"},function(e,t,n){e.exports=n.p+"static/media/Navalny.a3460ee3.png"},function(e,t,n){e.exports=n.p+"static/media/Olsior.92a4fc55.png"},function(e,t,n){e.exports=n.p+"static/media/papich.83db6a61.png"},function(e,t,n){e.exports=n.p+"static/media/Russia Paver.20f58dd8.png"},function(e,t,n){e.exports=n.p+"static/media/SnailKick.560a32e1.png"},function(e,t,n){e.exports=n.p+"static/media/VJLINK.a87c3f88.png"},function(e,t,n){e.exports=n.p+"static/media/archangel_hs.a55dbaf5.png"},function(e,t,n){e.exports=n.p+"static/media/BlackUFA.d262be21.png"},function(e,t,n){e.exports=n.p+"static/media/DreadzTV.d0c55481.png"},function(e,t,n){e.exports=n.p+"static/media/buster.c30279dc.png"},function(e,t,n){e.exports=n.p+"static/media/ceh9.dc42e80e.png"},function(e,t,n){e.exports=n.p+"static/media/hardgamechannel.611ed620.png"},function(e,t,n){e.exports=n.p+"static/media/IrmanPlay.8861a4ce.png"},function(e,t,n){e.exports=n.p+"static/media/Juice.df7b958e.png"},function(e,t,n){e.exports=n.p+"static/media/just_ns.ab610608.png"},function(e,t,n){e.exports=n.p+"static/media/Manyrin.2e229183.png"},function(e,t,n){e.exports=n.p+"static/media/mokrivskyi.3b805586.png"},function(e,t,n){e.exports=n.p+"static/media/SilverName.b5f610e6.png"},function(e,t,n){e.exports=n.p+"static/media/StRoGo.0fe11340.png"},function(e,t,n){e.exports=n.p+"static/media/Zeus.2f37090d.png"},function(e,t,n){e.exports=n.p+"static/media/ZLOYn.3dd47703.png"},function(e,t,n){e.exports=n.p+"static/media/\u0425\u0412\u041e\u0421\u0422.3279e46a.png"},function(e,t,n){e.exports=n.p+"static/media/image1.de020a1b.png"},function(e,t,n){e.exports=n.p+"static/media/image2.351f0483.png"},function(e,t,n){e.exports=n.p+"static/media/image3.643f17e7.png"},function(e,t,n){e.exports=n.p+"static/media/image4.ebd17903.png"},function(e,t,n){e.exports=n.p+"static/media/image5.690d4fee.png"},function(e,t,n){e.exports=n.p+"static/media/image6.27e12824.png"},function(e,t,n){e.exports=n.p+"static/media/image7.b036ed26.png"},function(e,t,n){e.exports=n.p+"static/media/image8.9b051e01.png"},function(e,t,n){e.exports=n.p+"static/media/image9.791aba01.png"},function(e,t,n){e.exports=n.p+"static/media/image10.c671a3e1.png"},function(e,t,n){e.exports=n.p+"static/media/image11.8bddea81.png"},function(e,t,n){e.exports=n.p+"static/media/image12.82603aa0.png"},function(e,t,n){e.exports=n.p+"static/media/image13.fd361336.png"},function(e,t,n){e.exports=n.p+"static/media/image14.3544aa02.png"},function(e,t,n){e.exports=n.p+"static/media/image15.7c8495d9.png"},function(e,t,n){e.exports=n.p+"static/media/image16.7e6ae9fd.png"},function(e,t,n){e.exports=n.p+"static/media/image17.329d7521.png"},function(e,t,n){e.exports=n.p+"static/media/image18.4488919c.png"},function(e,t,n){e.exports=n.p+"static/media/image19.54e452ae.png"},function(e,t,n){e.exports=n.p+"static/media/image20.c8728e59.png"},function(e,t,n){e.exports=n.p+"static/media/image21.b30ea581.png"},function(e,t,n){e.exports=n.p+"static/media/image22.af12b72d.png"},function(e,t,n){e.exports=n.p+"static/media/image23.77d5dfaf.png"},function(e,t,n){e.exports=n.p+"static/media/image24.d0fb4704.png"},function(e,t,n){e.exports=n.p+"static/media/image25.b78f401d.png"},function(e,t,n){e.exports=n.p+"static/media/image26.b01053d0.png"},function(e,t,n){e.exports=n.p+"static/media/image27.7b391189.png"},function(e,t,n){e.exports=n.p+"static/media/image28.c7fa41c4.png"},function(e,t,n){e.exports=n.p+"static/media/image29.76c2455f.png"},function(e,t,n){e.exports=n.p+"static/media/image30.9381c429.png"},function(e,t,n){e.exports=n.p+"static/media/image31.67d24c89.png"},function(e,t,n){e.exports=n.p+"static/media/image32.47835364.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(280)},function(e,t,n){"use strict";n.r(t);n(281),n(307),n(309),n(310),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349);var a=n(0),s=n.n(a),i=n(108),c=n.n(i),o=n(38),r=n.n(o),l=n(109);r.a.send("VKWebAppInit"),c.a.render(s.a.createElement(l.a,null),document.getElementById("root"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){}]),[[279,1,2]]]);
//# sourceMappingURL=main.858327bb.chunk.js.map