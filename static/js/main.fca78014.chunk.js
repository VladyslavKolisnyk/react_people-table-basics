(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=(c(31),c(32),c(6)),r=c(2),s=c(10),j=c.n(s),i=(c(33),c(3)),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.b,{to:"/",className:l,children:"Home"}),Object(i.jsx)(a.b,{to:"/people",className:l,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)(r.b,{})})]})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=c(0),h=c.n(b),x=function(e){var t=e.person,c=t.name,n=t.slug,r=t.sex;return Object(i.jsx)(a.b,{to:n,className:j()({"has-text-danger":"f"===r}),children:c})},O=function(e){var t=e.people,c=Object(r.r)().slugId,n=function(e){if(!e)return"-";var c=t.find((function(t){return t.name===e}));return c?Object(i.jsx)(x,{person:c}):e};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.sex,a=e.born,r=e.died,s=e.fatherName,l=e.motherName;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(x,{person:e})}),Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:n(l)}),Object(i.jsx)("td",{children:n(s)})]},e.name)}))})]})},u=(c(35),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),p=c(4);function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=h.a.createContext({people:[],loading:!1,loadingError:!1}),v=function(e){var t=e.children,c=Object(b.useState)([]),n=Object(p.a)(c,2),a=n[0],r=n[1],s=Object(b.useState)(!1),j=Object(p.a)(s,2),l=j[0],o=j[1],d=Object(b.useState)(!1),h=Object(p.a)(d,2),x=h[0],O=h[1];return Object(b.useEffect)((function(){o(!0),m().then(r).catch((function(){return O(!0)})).finally((function(){return o(!1)}))}),[]),Object(i.jsx)(f.Provider,{value:{people:a,loading:l,loadingError:x},children:t})};var g=function(){var e=Object(b.useContext)(f),t=e.people,c=e.loading,n=e.loadingError;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[c&&Object(i.jsx)(u,{}),n&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===t.length&&!n&&!c&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),t.length>0&&Object(i.jsx)(O,{people:t})]})})]})},N=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},y=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(v,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(r.c,{path:"/home",element:Object(i.jsx)(r.a,{to:"/"})}),Object(i.jsx)(r.c,{path:"people",element:Object(i.jsx)(g,{}),children:Object(i.jsx)(r.c,{path:":slugId",element:Object(i.jsx)(g,{})})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(N,{})})]})})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(y,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.fca78014.chunk.js.map