(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(67),a(16)),i=a(57),s=a(33),m=(a(70),a(30)),u=a.n(m),p=a(61),_=a(2),v=a.n(_),f=a(51),h=[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",to:"maim"},{title:"\u0421\u043a\u0438\u043b\u044b",to:"skills"},{title:"\u0420\u0430\u0431\u043e\u0442\u044b",to:"projects"},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",to:"contacts"}],d=function(e){var t=e.toggle,a=e.handleToggle,n=[v.a.menuIcon];return t||n.push(v.a.menuIconActive),r.a.createElement("div",{id:v.a.menuTogle,className:n.join(" "),onClick:a},r.a.createElement("div",{className:v.a.menuIconLine}))},g=function(e){return r.a.createElement("li",{className:v.a.navItem},r.a.createElement(f.Link,{activeClass:v.a.active,to:e.to,spy:!0,smooth:!0,offset:-70,duration:500,className:v.a.navLink},e.title))};var k=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),a=t[0],l=t[1],c=[v.a.mobileNav];return a||c.push(v.a.mobileNavActive),r.a.createElement("nav",{className:v.a.navWrapper},r.a.createElement("ul",{className:v.a.nav},h.map((function(e,t){return r.a.createElement(g,Object.assign({key:t},e))}))),r.a.createElement(d,{toggle:a,handleToggle:function(){l(!a)}}),r.a.createElement("div",{id:v.a.mobileNav,className:c.join(" ")},r.a.createElement("ul",{className:v.a.mobileNavList},h.map((function(e,t){return r.a.createElement(g,Object.assign({key:t},e))})))))};var b=function(){return r.a.createElement("header",{className:u.a.header},r.a.createElement("div",{className:u.a.container},r.a.createElement(k,null)))},E=a(14),j=a.n(E),N=a(52),x=a.n(N);var I=function(){return r.a.createElement("div",{id:"maim",className:j.a.main},r.a.createElement("div",{className:j.a.container},r.a.createElement("div",{className:j.a.greeting},r.a.createElement("span",null,"\u041f\u0440\u0438\u0432\u0435\u0442! "),r.a.createElement("span",null,"\u042f \u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432 ",r.a.createElement("span",null,"\u041f\u0435\u0442\u0440\u0443\u0448\u0438\u043d")),r.a.createElement("h1",null,"\u042f frot-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a")),r.a.createElement("div",{className:j.a.blockPhoto},r.a.createElement("div",{className:j.a.photoImage,style:{backgroundImage:"url(".concat(x.a,")")}}))))},y=a(6),w=a(7),L=a(10),C=a(8),B=a(9),O=a(22),A=a.n(O),M=a(13),S=a.n(M);var T=function(e){var t={backgroundImage:{backgroundImage:'url("'.concat(e.url,'")')}};return r.a.createElement("div",{className:S.a.skill},r.a.createElement("div",{className:S.a.skillImgBlock},r.a.createElement("div",{className:S.a.skillImg,style:t.backgroundImage})),r.a.createElement("div",{className:S.a.skillDescription},r.a.createElement("h3",{className:S.a.skillTitle},e.title),r.a.createElement("p",{className:S.a.skillText},e.text)))},P=a(31),W=a.n(P),F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:W.a.title},e.title),r.a.createElement("div",{className:W.a.line}))},G=a(4),q=a.n(G),D=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(L.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={skills:[{id:0,title:"HTML",url:"https://www.bryan-myers.com/images/1x1/html5.png",text:""},{id:1,title:"CSS",url:"https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png",text:""},{id:2,title:"React",url:"https://hsto.org/webt/bf/6m/q3/bf6mq3wmejwlzxaiuiseo0idri0.png",text:""},{id:3,title:"javascript",url:"https://vectorified.com/images/javascript-icon-35.png",text:""},{id:4,title:"redux",url:"https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",text:""}]},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state.skills.map((function(e){return r.a.createElement(T,{text:e.text,title:e.title,url:e.url,key:e.id})}));return r.a.createElement("div",{id:"skills",className:A.a.skills},r.a.createElement(q.a,{bottom:!0},r.a.createElement("div",{className:A.a.container},r.a.createElement(F,{title:"\u041c\u043e\u0438 \u0421\u043a\u0438\u043b\u044b"}),r.a.createElement("div",{className:A.a.skillsDescriptions},e))))}}]),t}(r.a.Component),H=a(23),R=a.n(H),J=a(11),z=a.n(J),Q=function(e){var t={background:{backgroundImage:"url('".concat(e.projectInfo.url,"')")}};return r.a.createElement("div",{className:z.a.projectsWork},r.a.createElement("div",{className:z.a.projectsImg,style:t.background},r.a.createElement("a",{href:e.projectInfo.href,target:"_blank",className:z.a.btnGLink},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"),r.a.createElement("a",{href:e.projectInfo.git,target:"_blank",className:z.a.btnGit},"Git")),r.a.createElement("div",{className:z.a.projectsDescription},r.a.createElement("p",{className:z.a.projectTitle},e.projectInfo.title),r.a.createElement("p",{className:z.a.projectText},e.projectInfo.description),r.a.createElement("p",null,e.projectInfo.useTechnology)))},Y=a(53),Z=a.n(Y),U=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(L.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{title:"Burger shop",description:"\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438: HTML, Sass, JavaScript.",url:Z.a,href:"https://slavapetrushiin.github.io/siteBurgers/",git:"https://github.com/SlavaPetrushiin/siteBurgers"},{title:"ToDoList",description:"\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438: HTML, CSS, React, Redux, Typescript, Axios.",url:"https://i.etsystatic.com/14994315/r/il/f970b9/1234028275/il_1588xN.1234028275_r0k3.jpg",href:"https://slavapetrushiin.github.io/todolist/",git:"https://github.com/SlavaPetrushiin/todolist"},{title:"Questionnaire",description:"\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438: HTML, CSS, React, Redux, Axios. \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u043e \u043d\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0435 Firebase.",url:"https://static.quizur.com/i/b/5a1c3cd3a27e37.810582855a1c3cd384f539.30277746.png",href:"https://react-quiz-9c3cb.web.app/",git:"https://github.com/SlavaPetrushiin/react-quiz"},{title:"Color rating",description:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0446\u0432\u0435\u0442\u043e\u0432",url:"https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg",href:""}]},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:R.a.projects},r.a.createElement(q.a,{bottom:!0},r.a.createElement("div",{className:R.a.projectsBlock},r.a.createElement(F,{title:"\u041c\u043e\u0438 \u0420\u0430\u0431\u043e\u0442\u044b"}),r.a.createElement("div",{className:R.a.projectsWorks},this.state.projects.map((function(e,t){return r.a.createElement(Q,{key:t,projectInfo:e})}))))))}}]),t}(r.a.Component),X=a(32),K=a.n(X),V=a(54),$=a.n(V),ee=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(L.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){},a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{style:this.props.style,className:$.a.button},this.props.title)}}]),t}(r.a.Component);var te=function(){return r.a.createElement("div",{className:K.a.slogan},r.a.createElement("div",{className:K.a.sloganBlock},r.a.createElement(q.a,{left:!0},r.a.createElement(F,{title:"\u0420\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u0442\u044b"})),r.a.createElement(q.a,{right:!0},r.a.createElement(ee,{title:"\u041d\u0430\u043d\u044f\u0442\u044c \u043c\u0435\u043d\u044f"}))))},ae=a(55),ne=a(17),re=a(12),le=a.n(re),ce=a(29),oe={sendEmail:function(e){var t=e.name,a=e.email,n=e.text;return ce.post("https://portfolio-apa-message.herokuapp.com/registration",{name:t,email:a,text:n}).then((function(e){alert("Message Sent.")})).catch((function(e){alert(e)}))}},ie=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(L.a)(this,Object(C.a)(t).call(this,e))).state={name:"",email:"",text:"",error:""},a.sendForm=a.sendForm.bind(Object(ne.a)(a)),a.handleChange=a.handleChange.bind(Object(ne.a)(a)),a}return Object(B.a)(t,e),Object(w.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(ae.a)({},a,n))}},{key:"sendForm",value:function(e){e.preventDefault();var t=this.state.name,a=this.state.email,n=this.state.text;oe.sendEmail({name:t,email:a,text:n})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.text;return r.a.createElement("div",{id:"contacts",className:le.a.contacts},r.a.createElement("div",{className:le.a.contactsBlock},r.a.createElement(q.a,{bottom:!0},r.a.createElement(F,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),r.a.createElement("p",{className:le.a.errorMessage},this.state.error),r.a.createElement("form",{className:le.a.formGroup,name:"contact_form",onSubmit:this.sendForm},r.a.createElement("input",{className:le.a.formArea,type:"text",id:"name",name:"name",placeholder:"\u0418\u043c\u044f",value:t,onChange:this.handleChange,required:!0}),r.a.createElement("input",{className:le.a.formArea,type:"email",id:"email",name:"email",placeholder:"E-mail",value:a,onChange:this.handleChange,required:!0}),r.a.createElement("textarea",{className:le.a.messageArea,id:"text",name:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",value:n,onChange:this.handleChange}),r.a.createElement(ee,{title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})))))}}]),t}(r.a.Component),se=a(5),me=a.n(se),ue=a(18);var pe=function(){return r.a.createElement("footer",{className:me.a.footer},r.a.createElement(q.a,{bottom:!0},r.a.createElement("div",{className:me.a.footerBlock},r.a.createElement("h2",{className:me.a.footerTitle},"\u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432 \u041f\u0435\u0442\u0440\u0443\u0448\u0438\u043d"),r.a.createElement("div",{className:me.a.socialLinks},r.a.createElement("div",{className:me.a.footerLink},r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100014479392445",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(ue.a,{icon:["fab","facebook"]}))),r.a.createElement("div",{className:me.a.footerLink},r.a.createElement("a",{href:"https://vk.com/id58620112",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(ue.a,{icon:["fab","vk"]}))),r.a.createElement("div",{className:me.a.footerLink},r.a.createElement("a",{href:"https://www.instagram.com/slava_petrushin_91/",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(ue.a,{icon:["fab","instagram"]}))),r.a.createElement("div",{className:me.a.footerLink},r.a.createElement("a",{href:"#",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(ue.a,{icon:["fab","telegram"]})))))))},_e=a(56),ve=a.n(_e);o.b.add(i.a,s.a,s.b);var fe={particles:{number:{value:120,density:{enable:!0,value_area:1e3}}}};var he=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ve.a,{className:"particles",params:fe}),r.a.createElement(b,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(U,null),r.a.createElement(te,null),r.a.createElement(ie,null),r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(60);c.a.render(r.a.createElement(de.a,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},11:function(e,t,a){e.exports={projectsWork:"Project_projectsWork__3uRfs",projectsImg:"Project_projectsImg__kZ-ul",projectsBtn:"Project_projectsBtn__3QgUJ",projectsDescription:"Project_projectsDescription__2ShvY",projectTitle:"Project_projectTitle__1sefs",projectText:"Project_projectText__2uU_h",btnGLink:"Project_btnGLink__wZK8q",btnGit:"Project_btnGit__1fd28"}},12:function(e,t,a){e.exports={contacts:"Contacts_contacts__2Ur7h",contactsBlock:"Contacts_contactsBlock__29iu-",formGroup:"Contacts_formGroup__2cJee",errorMessage:"Contacts_errorMessage__2Pg-H",messageArea:"Contacts_messageArea__xJoW5",formArea:"Contacts_formArea__3jk-Z",fromArea:"Contacts_fromArea__3wRjn"}},13:function(e,t,a){e.exports={skill:"Skill_skill__2wXPo",skillImgBlock:"Skill_skillImgBlock__3GxJw",skillImg:"Skill_skillImg__69iy4",skillTitle:"Skill_skillTitle__1cXCx",skillText:"Skill_skillText__3CSAu"}},14:function(e,t,a){e.exports={main:"Main_main__PpLGy",container:"Main_container__2ogOZ",greeting:"Main_greeting__3Htfl",blockPhoto:"Main_blockPhoto__2RE32",photoImage:"Main_photoImage__2xbn8"}},2:function(e,t,a){e.exports={navWrapper:"NavMenu_navWrapper__21OpR",nav:"NavMenu_nav__29HQd",navItem:"NavMenu_navItem__2bcYi",navLink:"NavMenu_navLink__28z92",menuIcon:"NavMenu_menuIcon__1i14p",menuIconLine:"NavMenu_menuIconLine__3UeL0",menuIconActive:"NavMenu_menuIconActive__IfYFC",mobileNav:"NavMenu_mobileNav__3w86B",mobileNavActive:"NavMenu_mobileNavActive__1vdAf",mobileNavList:"NavMenu_mobileNavList__2sK2r",mobileNavItem:"NavMenu_mobileNavItem__2-6_K",mobileNavLink:"NavMenu_mobileNavLink__222Lt"}},22:function(e,t,a){e.exports={skills:"Skills_skills__2hvAB",container:"Skills_container__2u6B9",skillsDescriptions:"Skills_skillsDescriptions__2vpqI"}},23:function(e,t,a){e.exports={projects:"Projects_projects__2N9Dq",projectsBlock:"Projects_projectsBlock__1M-WQ",projectsWorks:"Projects_projectsWorks__YvBo5"}},30:function(e,t,a){e.exports={header:"Header_header__2-4w4",container:"Header_container__PwJcl"}},31:function(e,t,a){e.exports={title:"TitleBlock_title__3q-2z",line:"TitleBlock_line__1zvXI"}},32:function(e,t,a){e.exports={slogan:"Slogan_slogan__16QjZ",sloganBlock:"Slogan_sloganBlock__PDjlE"}},5:function(e,t,a){e.exports={footer:"Footer_footer__3PlaI",footerBlock:"Footer_footerBlock__33tnI",footerTitle:"Footer_footerTitle__huVAe",socialLinks:"Footer_socialLinks__3Ia5v",footerLink:"Footer_footerLink__2nmYM"}},52:function(e,t,a){e.exports=a.p+"static/media/avatar.b02148f2.png"},53:function(e,t,a){e.exports=a.p+"static/media/burgers.c92649a2.jpg"},54:function(e,t,a){e.exports={button:"Button_button__1X5Ag App_btn__3LQ1s"}},62:function(e,t,a){e.exports=a(100)},67:function(e,t,a){},70:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.3386ff36.chunk.js.map