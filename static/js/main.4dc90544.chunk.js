(this["webpackJsonpdrakodin.github.io"]=this["webpackJsonpdrakodin.github.io"]||[]).push([[0],{103:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),i=n.n(a),o=(n(103),n(13)),s=n(66),l=n(24),j=n(14),b=n(49),u=n.n(b),d=n(151),x=(n(107),n(2)),p=function(){var e=r.a.useState([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=r.a.useState([!1,!1,!1,!1]),i=Object(j.a)(a,2),o=i[0],s=i[1],b=function(e){s(o.map((function(t,n){return n!==e&&t})))},p=function(e){s(o.map((function(t,n){return n===e||t})))},f=function(e){var t=n.indexOf(e);c(t>-1?n.filter((function(e,n){return n!==t})):[].concat(Object(l.a)(n),[e]))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(d.a,{container:!0,direction:"row",justify:"flex-start",children:[Object(x.jsx)(d.a,{item:!0,xs:2,lg:2,container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:"ml-4 mb-4",children:Object(x.jsx)(u.a,{open:o[0],label:"Example",target:n,listSrc:["a","b","c","d","e"],onClick:function(){return p(0)},onClose:function(){return b(0)},listOnClick:f})}),Object(x.jsx)(d.a,{item:!0,xs:2,lg:2,container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:"ml-4 mb-4",children:Object(x.jsx)(u.a,{open:o[1],label:"Example",variant:"light",target:n,listSrc:["a","b","c","d","e"],onClick:function(){return p(1)},onClose:function(){return b(1)},listOnClick:f})}),Object(x.jsx)(d.a,{item:!0,xs:2,lg:2,container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:"ml-4 mb-4",children:Object(x.jsx)(u.a,{open:o[2],label:"Example",variant:"dark",target:n,listSrc:["a","b","c","d","e"],onClick:function(){return p(2)},onClose:function(){return b(2)},listOnClick:f})}),Object(x.jsx)(d.a,{item:!0,xs:2,lg:2,container:!0,direction:"row",justify:"flex-start",alignItems:"center",className:"ml-4 mb-4",children:Object(x.jsx)(u.a,{open:o[3],label:"Example",variant:"custom",target:n,listSrc:["a","b","c","d","e"],onClick:function(){return p(3)},onClose:function(){return b(3)},listOnClick:f})})]})})},f=n(59),h=n(11),O=n(46),m=n.n(O),v=n(153),g=n(154),k=n(163),y=n(144),w=n(145),C=n(146),S=n(148),N=n(147),F=n(155),I=n(162),E=n(78),P=n.n(E),q=n(80),R=n.n(q),D=n(79),H=n.n(D),M=n(152),B=Object(M.a)((function(e){return{root:{flexGrow:1,display:"flex"},drawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:Object(h.a)({width:240,overflow:"auto",height:"100%"},e.breakpoints.up("sm"),{overflow:"auto",width:240,position:"relative",height:"100%"})}})),z=function(){var e=r.a.useRef(null),t=B(),n=r.a.useState(!1),c=Object(j.a)(n,2),a=c[0],o=c[1],s=r.a.useState(0),l=Object(j.a)(s,2),b=l[0],u=l[1],d=r.a.useState(!1),p=Object(j.a)(d,2),h=p[0],O=p[1],E=r.a.useState(void 0),q=Object(j.a)(E,2),D=q[0],M=q[1],z=function(){o(!a)},U=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;c||"home"===n?(u(t),window.location.href="#/".concat(c),o(!1)):"projects"===n&&O(!h)},_=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelector(t)){e.next=5;break}return e.next=3,new Promise((function(e){return requestAnimationFrame(e)}));case 3:e.next=0;break;case 5:M(document.querySelector(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r.a.useEffect((function(){_("#tb-bar-box")}));var A,G=Object(x.jsxs)("div",{children:[Object(x.jsx)(v.a,{style:{width:250}}),Object(x.jsx)(g.a,{}),Object(x.jsxs)(y.a,{children:[Object(x.jsxs)(w.a,{button:!0,selected:0===b,onClick:function(e){return U(e,0,"home","")},children:[Object(x.jsx)(C.a,{children:Object(x.jsx)(H.a,{})}),Object(x.jsx)(S.a,{primary:"Home"})]}),Object(x.jsxs)(w.a,{button:!0,selected:1===b,onClick:function(e){return U(e,1,"projects")},children:[Object(x.jsx)(C.a,{children:Object(x.jsx)(R.a,{})}),Object(x.jsx)(S.a,{primary:"Projects"})]}),Object(x.jsx)(F.a,{in:h,timeout:{enter:400,exit:400},children:Object(x.jsxs)(y.a,{style:{marginLeft:5},children:[Object(x.jsx)(w.a,{button:!0,selected:100===b,onClick:function(e){return U(e,100,"mui-drop-project","projects/mui-dropdown")},children:Object(x.jsx)(S.a,{secondary:"MUI-Dropdown"})}),Object(x.jsx)(w.a,{button:!0,selected:101===b,onClick:function(e){return U(e,101,"unbias-project","projects/unbiasly")},children:Object(x.jsx)(S.a,{secondary:"Unbias.ly"})})]})})]})]});return Object(x.jsxs)("div",{className:t.root,ref:e,children:[Object(x.jsx)("nav",{className:t.drawer,"aria-label":"website navigation",children:Object(x.jsx)(I.a,{smUp:!0,implementation:"css",children:Object(x.jsx)(r.a.Fragment,{children:Object(x.jsx)(k.a,{container:e.current,variant:"temporary",anchor:"left",open:a,onClose:z,ModalProps:{keepMounted:!0},classes:{paper:t.drawerPaper},children:G})})})}),D?(A=D,i.a.createPortal(Object(x.jsx)(N.a,{"aria-label":"open drawer",edge:"start",className:"cl-borderless",id:"nav-button",onClick:z,children:Object(x.jsx)(P.a,{style:{color:"#f8f9fa"}})}),A)):Object(x.jsx)(x.Fragment,{})]})},U=n(157),_=n(156),A=n(158),G=n(160),J=n(81),L=n.n(J),W=n(82),K=n.n(W),Q=Object(M.a)((function(){return{bar:{background:"transparent",boxShadow:"none"},icon:{color:"#f8f9fa"}}})),T=function(e){var t=e.children,n=Object(U.a)();return Object(x.jsx)(_.a,{appear:!1,direction:"down",in:!n,children:t})},V=function(){var e=Q();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N.a,{href:"https://github.com/Drakodin",children:Object(x.jsx)(L.a,{className:e.icon})}),Object(x.jsx)(N.a,{href:"https://www.linkedin.com/in/tony-tian-660636192/",children:Object(x.jsx)(K.a,{className:e.icon})})]})},X=function(){var e=Q(),t=r.a.useState(!1),n=Object(j.a)(t,2),c=n[0],a=n[1],i=function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelector("#nav-button")){e.next=5;break}return e.next=3,new Promise((function(e){return requestAnimationFrame(e)}));case 3:e.next=0;break;case 5:a(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){i()})),Object(x.jsx)(T,{children:Object(x.jsx)(A.a,{position:"sticky",className:e.bar,elevation:2,children:Object(x.jsxs)(v.a,{id:"tb-bar",children:[Object(x.jsx)(G.a,{id:"tb-bar-box",display:"flex",flexGrow:1}),c?Object(x.jsx)(V,{}):Object(x.jsx)(x.Fragment,{})]})})})},Y=(n(111),function(){return Object(x.jsxs)("div",{className:"anim-root",children:[Object(x.jsx)("div",{className:"bubble bubble-p1"}),Object(x.jsx)("div",{className:"bubble bubble-p2"})]})}),Z=n(44),$=n(29),ee=n(55),te=n(61),ne=(n(112),function(e){Object(ee.a)(n,e);var t=Object(te.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object($.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"atom",style:{top:this.props.position.top,left:this.props.position.left},children:Object(x.jsx)("div",{className:"atom-text",children:this.props.content})})}}]),n}(r.a.Component)),ce=(n(113),Object(M.a)((function(){return{bg:{background:"linear-gradient(0.5turn, #001756, #0F0D57 58.2%)",position:"absolute",height:"100%",width:"100%",top:0,left:0,zIndex:-2},atomContainer:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},logoBubble:{position:"absolute",borderRadius:"50%",top:"30%",left:"70%",width:"min(252px, 40%)",height:"min(252px, 40%)",padding:"20px",objectFit:"contain",background:"radial-gradient(circle at top 15% right 15%, rgba(209, 244, 255, 0.8) 20%, rgba(101, 193, 255, 0.75) 75%)"}}}))),re=function(){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)("div",{className:ce().bg}),Object(x.jsx)(Y,{}),Object(x.jsxs)("div",{className:ce().atomContainer,children:[Object(x.jsx)(ne,{content:"Innovation",position:{top:"15%",left:"11%"}}),Object(x.jsx)(ne,{content:"Invention",position:{top:"15.5%",left:"35%"}}),Object(x.jsx)(ne,{content:"Creation",position:{top:"15.75%",left:"17%"}}),Object(x.jsx)("div",{className:"".concat(ce().logoBubble," logo-bubble"),onClick:function(){window.location.href="/#/about"},children:Object(x.jsx)("img",{style:{maxWidth:"100%",maxHeight:"100%"},src:"/lotus.png",alt:"logo for user site"})})]})]})},ae=function(){return Object(x.jsx)(re,{})},ie=n(60),oe=n(62),se=n(159),le=n(83),je=n.n(le),be=n(84),ue=n.n(be),de=function(){var e=Object(ie.b)(),t=e.enqueueSnackbar,n=e.closeSnackbar;return r.a.useEffect((function(){t("Page not Found",{preventDuplicate:!0,autoHideDuration:3500,variant:"error",key:"404_error",action:function(e){return Object(x.jsx)(N.a,{onClick:function(){n(e)},className:"cl-borderless",children:Object(x.jsx)(je.a,{htmlColor:"white"})})}})}),[t,n]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)(oe.a,{variant:"h4",component:"h4",children:"404 - Not Found"}),Object(x.jsx)(oe.a,{variant:"body1",children:"Looks like our journey was unsuccessful"})]}),Object(x.jsx)(se.a,{variant:"container",disableElevation:!0,endIcon:Object(x.jsx)(ue.a,{}),href:"/",children:"Back to Home"})]})},xe=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"bg"}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Hi!"})})]})},pe=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(X,{}),Object(x.jsx)(z,{}),Object(x.jsx)(s.a,{basename:"",children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",component:ae}),Object(x.jsx)(o.a,{exact:!0,path:"/about",component:xe}),Object(x.jsx)(o.a,{exact:!0,path:"/projects/mui-dropdown",component:p}),Object(x.jsx)(o.a,{component:de})]})})]})};var fe=function(){return Object(x.jsx)(ie.a,{children:Object(x.jsx)(pe,{})})};i.a.render(Object(x.jsx)(fe,{}),document.getElementById("root"))},117:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var c=n(44),r=n(29),a=n(55),i=n(61),o=n(0),s=n.n(o),l=n(62),j=n(147),b=n(149),u=n(150),d=n(142),x=n(144),p=n(145),f=n(146),h=n(161),O=n(148),m=n(2),v=function(e){var t=!!e.open&&e.open,n=e.anchorEl,c=e.onClose,r=e.listItemSrc,a=e.target,i=e.listOnClick,o=e.style,s=e.listStyle,l=e.boxStyle;return Object(m.jsx)(d.a,{open:t,style:o,anchorEl:n,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(m.jsx)(x.a,{style:s,children:r.map((function(e){return Object(m.jsxs)(p.a,{button:!0,onClick:function(){return i(e)},children:[Object(m.jsx)(f.a,{children:Object(m.jsx)(h.a,{style:l,checked:-1!==a.indexOf(e),tabIndex:-1})}),Object(m.jsx)(O.a,{primary:e})]},e)}))})})},g=(n(106),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).anchorRef=s.a.createRef(),r}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{ref:this.anchorRef,className:"d-flex flex-row align-items-center Mui-drop-".concat(this.props.variant||"default"),onClick:this.props.onClick,children:[Object(m.jsx)(l.a,{className:"ml-2 mr-2 no-text-select",children:this.props.label}),Object(m.jsx)(j.a,{className:"cl-borderless",onClick:this.props.onClick,children:this.props.open?Object(m.jsx)(u.a,{}):Object(m.jsx)(b.a,{})})]}),Object(m.jsx)("div",{children:Object(m.jsx)(v,{open:this.props.open,onClose:this.props.onClose,anchorEl:this.props.open?this.anchorRef.current:null,listItemSrc:this.props.listSrc,target:this.props.target,listOnClick:this.props.listOnClick,style:this.props.dropStyle,listStyle:this.props.listStyle,boxStyle:this.props.boxStyle})})]})}}]),n}(s.a.Component))},49:function(e,t,n){var c=n(35);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=c(n(117))}},[[116,1,2]]]);
//# sourceMappingURL=main.4dc90544.chunk.js.map