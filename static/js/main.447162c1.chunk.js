(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(5),o=n.n(i),l=n(4),a=n.n(l),j=n(6),d=n(2);n(13);function u(){return Object(c.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Loading..."})}var h="https://course-api.com/react-tours-project",b=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(!1),o=Object(d.a)(i,2),l=o[0],b=o[1],f=Object(r.useState)(!1),m=Object(d.a)(f,2),x=m[0],O=m[1];function p(){return(p=Object(j.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(h).then((function(e){return e.json()})).then((function(e){s(e),b(!0),console.log(e.length)})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]);return l?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("main",{children:[Object(c.jsx)("h1",{className:"font-weight",style:{textDecoration:"underline",textAlign:"center"},children:"Our Tours"}),x&&Object(c.jsxs)("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(c.jsx)("h2",{children:"Oops..., there are no other tours"}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return window.location.reload()},children:"Refresh"})]}),Object(c.jsx)("div",{className:"col",style:{alignItems:"center",display:"flex",flexDirection:"column"},children:n.map((function(e){return Object(c.jsxs)("div",{className:"card col-lg-5 col-sm-5",id:"tourCard",children:[Object(c.jsx)("img",{src:e.image,style:{maxWidth:"100%"},className:"card-img-top",alt:""}),Object(c.jsxs)("header",{id:"imgHeader",children:[Object(c.jsx)("h2",{style:{color:"grey"},children:e.name}),Object(c.jsx)("h4",{children:Object(c.jsx)("span",{className:"badge badge-primary",children:"$"+e.price})})]}),Object(c.jsx)("p",{style:{margin:"1rem"},children:e.info}),Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(c.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return t=e.id,s(n.filter((function(e){return e.id!==t}))),1===n.length&&(console.log("32"),O(!0)),void window.scrollTo({top:0,behavior:"smooth"});var t},children:"Not interested"})})]})}))})]})}):Object(c.jsx)(u,{})};n(14);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.447162c1.chunk.js.map