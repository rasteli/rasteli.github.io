(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),u=a(11),i=a(1),o=a(31),s=a(2),m=a.n(s),p=a(7),b=a(3);function d(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(b.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(""),o=Object(b.a)(i,2),s=o[0],d=o[1],E=Object(n.useState)(""),f=Object(b.a)(E,2),v=f[0],h=f[1],g=Object(n.useState)(""),j=Object(b.a)(g,2),O=j[0],y=j[1],w=Object(n.useState)(""),x=Object(b.a)(w,2),S=x[0],k=x[1],F=Object(n.useState)(""),q=Object(b.a)(F,2),N=q[0],C=q[1],P=Object(n.useState)(""),M=Object(b.a)(P,2),z=M[0],R=M[1];function A(){return(A=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t({model:l,frequency:s,rpm:v,power:O,wire:S,turns:N,pace:z});case 3:u(""),d(""),h(""),y(""),k(""),C(""),R("");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return A.apply(this,arguments)}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"model"},"Modelo"),r.a.createElement("input",{type:"text",id:"model",required:!0,value:l,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"hz"},"Frequ\xeancia"),r.a.createElement("input",{type:"number",id:"hz",required:!0,value:s,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"rpm"},"RPM"),r.a.createElement("input",{type:"number",id:"rpm",required:!0,value:v,onChange:function(e){return h(e.target.value)}}))),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"power"},"Pot\xeancia CV"),r.a.createElement("input",{type:"text",id:"power",required:!0,value:O,onChange:function(e){return y(e.target.value)}})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"wire"},"Fio AWG"),r.a.createElement("input",{type:"number",id:"wire",required:!0,value:S,onChange:function(e){return k(e.target.value)}})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"turns"},"Espiras"),r.a.createElement("input",{type:"number",id:"turns",required:!0,value:N,onChange:function(e){return C(e.target.value)}}))),r.a.createElement("div",{className:"input-block last-box"},r.a.createElement("label",{htmlFor:"pace"},"Passo"),r.a.createElement("input",{type:"text",id:"pace",required:!0,value:z,onChange:function(e){return R(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Salvar"))}function E(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(b.a)(a,2),l=c[0],u=c[1];function i(){return(i=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(l);case 3:u("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return i.apply(this,arguments)}},r.a.createElement("div",{className:"input-block last-box"},r.a.createElement("label",{htmlFor:"search-box"},"Buscar motor por modelo"),r.a.createElement("input",{type:"text",id:"search-box",required:!0,value:l,onChange:function(e){return u(e.target.value)}})),r.a.createElement("button",{type:"submit"},r.a.createElement("span",{role:"img","aria-label":"magnifier"},"\ud83d\udd0d")))}a(38);function f(e){var t=e.engine;return r.a.createElement("li",null,r.a.createElement("header",null,r.a.createElement("h3",null,"Modelo: ",t.model)),r.a.createElement("div",{id:"engine-spec"},"Frequ\xeancia: ",t.frequency," Hz"),r.a.createElement("div",{id:"engine-spec"},"RPM: ",t.rpm),r.a.createElement("div",{id:"engine-spec"},"Pot\xeancia: ",t.power," CV"),r.a.createElement("div",{id:"engine-spec"},"Fio AWG: ",t.wire),r.a.createElement("div",{id:"engine-spec"},"Espiras: ",t.turns),r.a.createElement("div",{id:"engine-spec"},"Passo: ",t.pace))}var v=a(29),h=a.n(v).a.create({baseURL:"http://localhost:3333"});a(25),a(26),a(56),a(57);var g=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),u=Object(b.a)(l,2),i=u[0],s=u[1],v=Object(n.useState)(!1),g=Object(b.a)(v,2),j=g[0],O=g[1];function y(){return(y=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/search?model=".concat(t));case 2:a=e.sent,s(a.data),O(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/engines",t);case 2:n=e.sent,c([].concat(Object(o.a)(a),[n.data])),O(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/engines");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"app"},r.a.createElement("aside",null,r.a.createElement("h2",null,"Formul\xe1rio de cadastro de motores"),r.a.createElement(d,{onSubmit:function(e){return w.apply(this,arguments)}}),r.a.createElement(E,{onSubmit:function(e){return y.apply(this,arguments)}})),r.a.createElement("main",null,r.a.createElement("ul",null,j&&i.map((function(e){return r.a.createElement(f,{key:e._id,engine:e})})))))};var j=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=(t[0],t[1]);return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/users");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"app"},r.a.createElement("aside",{className:"signup"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"name"},"Nome Completo"),r.a.createElement("input",{type:"text",id:"name",required:!0})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",required:!0})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"pass"},"Senha"),r.a.createElement("input",{type:"text",id:"pass",required:!0})),r.a.createElement("button",{type:"submit"},r.a.createElement(u.b,{to:"/form"},"Cadastrar")))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:j}),r.a.createElement(i.a,{path:"/form",component:g})))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c168b926.chunk.js.map