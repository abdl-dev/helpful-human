(this["webpackJsonphelpful-human"]=this["webpackJsonphelpful-human"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),l=a.n(c),o=(a(10),a(11),a.p+"static/media/logo.5a22712c.svg"),r=a(0),i=function(){return Object(r.jsxs)("div",{className:"row header",children:[Object(r.jsx)("div",{className:"col-9",children:Object(r.jsx)("img",{src:o,className:"logo",alt:"logo"})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)("input",{type:"text",className:"search_bar",placeholder:"Search"})})]})},u=function(){return Object(r.jsxs)("div",{className:"col-3 sidebar",children:[Object(r.jsx)("input",{type:"button",className:"random_btn",value:"Random Color"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Red"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Orange"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Yellow"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Green"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Blue"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Purple"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Brown"}),Object(r.jsx)("input",{type:"button",className:"group_btn",value:"Gray"})]})},b=a(2),j=a(5),p=a.n(j),d=function(e){var t=e.text,a=e.label;return Object(r.jsx)("label",{htmlFor:t,style:a.style,children:t},"label"+t)},h=function(e){var t=e.swatch,a=e.swatches,n=e.setSwatches,s=e.labels,c=e.setLabels,l=(e.navRow,e.setNavRow);return Object(r.jsx)("div",{id:t.backgroundColor,className:"swatch",style:t,onClick:function(e){var t=[];t.push({backgroundColor:e.target.id,width:"100%",height:"650px",borderColor:"black"}),a.forEach((function(e){return t.push({backgroundColor:e.backgroundColor,width:"176px",height:"176px"})})),n(t.slice(0,6)),c({style:{lineHeight:"65px",height:"65px",marginTop:"110px",padding:"0rem 1.0rem"}});l(Object(r.jsx)("input",{type:"button",className:"clear_btn",value:"Clear",onClick:function(e){}}))},children:Object(r.jsx)(d,{text:t.backgroundColor,label:s})},t.backgroundColor)},g=function(){for(var e=Object(n.useState)({id:"placeholder"}),t=Object(b.a)(e,2),a=t[0],s=t[1],c=[],l=0;l<120;l++){var o="#"+(16777215*Math.random()<<0).toString(16).padStart(6,"0");c.push({backgroundColor:o})}var i=Math.ceil(c.length/12),u=Object(n.useState)(c.slice(0,12)),j=Object(b.a)(u,2),d=j[0],g=j[1],x=Object(n.useState)(Object(r.jsx)(p.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:i,onPageChange:function(e){var t=e.selected;g(c.slice(12*t,12*(t+1)))},containerClassName:"paginate",previousLinkClassName:"paginatePrevious",nextLinkClassName:"paginateNext",activeClassName:"paginateActive",disabledClassName:"paginateDisabled",pageRangeDisplayed:i})),v=Object(b.a)(x,2),m=v[0],O=v[1];return Object(r.jsxs)("div",{className:"col-9 view",children:[Object(r.jsx)("div",{className:"col-12 page",children:d.map((function(e){return Object(r.jsx)(h,{swatch:e,swatches:d,setSwatches:g,labels:a,setLabels:s,navRow:m,setNavRow:O})}))}),Object(r.jsx)("div",{className:"col-12 navrow",children:m})]})},x=function(){return Object(r.jsxs)("div",{className:"row content",children:[Object(r.jsx)(u,{}),Object(r.jsx)(g,{})]})};var v=function(){return Object(r.jsxs)("div",{className:"container-fluid h-100",children:[Object(r.jsx)(i,{}),Object(r.jsx)(x,{})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.3bece55d.chunk.js.map