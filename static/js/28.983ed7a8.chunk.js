(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{141:function(e,a,t){"use strict";var l=t(34),c=t(10),n=t(4),r=t.n(n),o=t(2),i=t.n(o),s=(t(23),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,n=e.className,o=e.type,m=Object(c.a)(e,["tag","className","type"]),u=r()(Object(l.a)({},o,!!o),n);return a=t||(!t&&s[o]?s[o]:"p"),i.a.createElement(a,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},a.a=m},142:function(e,a,t){"use strict";var l=t(10),c=t(2),n=t.n(c),r=(t(23),t(27)),o=t(157),i=t(158),s=t(141),m=r.a.create("page"),u=function(e){var a=e.title,t=e.breadcrumbs,c=e.tag,r=e.className,u=e.children,d=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),E=m.b("px-3",r);return n.a.createElement(c,Object.assign({className:E},d),n.a.createElement("div",{className:m.e("header")},a&&"string"===typeof a?n.a.createElement(s.a,{type:"h1",className:m.e("title")},a):a,t&&n.a.createElement(o.a,{className:m.e("breadcrumb")},n.a.createElement(i.a,null,"iTruck IO"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return n.a.createElement(i.a,{key:a,active:l},t)}))),u)};u.defaultProps={tag:"div",title:""},a.a=u},157:function(e,a,t){"use strict";var l=t(5),c=t(6),n=t(2),r=t.n(n),o=t(1),i=t.n(o),s=t(4),m=t.n(s),u=t(3),d={tag:u.q,listTag:u.q,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},E=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,o=e.children,i=e.tag,s=e.listTag,d=e["aria-label"],E=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(u.m)(m()(a),n),g=Object(u.m)(m()("breadcrumb",t),n);return r.a.createElement(i,Object(l.a)({},E,{className:b,"aria-label":d}),r.a.createElement(s,{className:g},o))};E.propTypes=d,E.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=E},158:function(e,a,t){"use strict";var l=t(5),c=t(6),n=t(2),r=t.n(n),o=t(1),i=t.n(o),s=t(4),m=t.n(s),u=t(3),d={tag:u.q,active:i.a.bool,className:i.a.string,cssModule:i.a.object},E=function(e){var a=e.className,t=e.cssModule,n=e.active,o=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),s=Object(u.m)(m()(a,!!n&&"active","breadcrumb-item"),t);return r.a.createElement(o,Object(l.a)({},i,{className:s,"aria-current":n?"page":void 0}))};E.propTypes=d,E.defaultProps={tag:"li"},a.a=E},474:function(e,a,t){"use strict";var l=t(5),c=t(6),n=t(2),r=t.n(n),o=t(1),i=t.n(o),s=t(4),m=t.n(s),u=t(3),d={tag:u.q,"aria-label":i.a.string,className:i.a.string,cssModule:i.a.object,role:i.a.string,size:i.a.string,vertical:i.a.bool},E=function(e){var a=e.className,t=e.cssModule,n=e.size,o=e.vertical,i=e.tag,s=Object(c.a)(e,["className","cssModule","size","vertical","tag"]),d=Object(u.m)(m()(a,!!n&&"btn-group-"+n,o?"btn-group-vertical":"btn-group"),t);return r.a.createElement(i,Object(l.a)({},s,{className:d}))};E.propTypes=d,E.defaultProps={tag:"div",role:"group"},a.a=E},948:function(e,a,t){"use strict";function l(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(a);var c=t(12),n=t(13),r=t(15),o=t(14),i=t(16),s=t(2),m=t.n(s),u=t(131),d=t(132),E=t(117),b=t(121),g=t(118),k=t(73),B=t(120),p=t(474),v=t(122),y=t(142),f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={rSelected:null,cSelected:[]},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"onCheckboxBtnClick",value:function(e){var a=this.state.cSelected.indexOf(e);a<0?this.state.cSelected.push(e):this.state.cSelected.splice(a,1),this.setState({cSelected:l(this.state.cSelected)})}},{key:"render",value:function(){var e=this;return m.a.createElement(y.a,{className:"ButtonPage",title:"Buttons",breadcrumbs:[{name:"buttons",active:!0}]},m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"6",sm:"12",xs:"12"},m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(b.a,null,"Buttons"),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary"},"primary"),m.a.createElement(k.a,{color:"secondary"},"secondary"),m.a.createElement(k.a,{color:"success"},"success"),m.a.createElement(k.a,{color:"info"},"info"),m.a.createElement(k.a,{color:"warning"},"warning"),m.a.createElement(k.a,{color:"danger"},"danger"),m.a.createElement(k.a,{color:"link"},"link")))),m.a.createElement(d.a,{md:"6",sm:"12",xs:"12"},m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(b.a,null,"Outline Buttons"),m.a.createElement(g.a,null,m.a.createElement(k.a,{outline:!0,color:"primary"},"primary"),m.a.createElement(k.a,{outline:!0,color:"secondary"},"secondary"),m.a.createElement(k.a,{outline:!0,color:"success"},"success"),m.a.createElement(k.a,{outline:!0,color:"info"},"info"),m.a.createElement(k.a,{outline:!0,color:"warning"},"warning"),m.a.createElement(k.a,{outline:!0,color:"danger"},"danger"),m.a.createElement(k.a,{outline:!0,color:"link"},"link"))))),m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(b.a,null,"Different Button Sizes"),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary",size:"sm"},"Small Button"),m.a.createElement(k.a,{color:"secondary",size:"sm"},"Small Button"),m.a.createElement(k.a,{color:"success",size:"sm"},"Small Button"),m.a.createElement(k.a,{color:"info",size:"sm"},"Small Button"),m.a.createElement(k.a,{color:"warning",size:"sm"},"Small Button"),m.a.createElement(k.a,{color:"danger",size:"sm"},"Small Button"),m.a.createElement(k.a,{color:"link",size:"sm"},"Small Button")),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary"},"Normal Button"),m.a.createElement(k.a,{color:"secondary"},"Normal Button"),m.a.createElement(k.a,{color:"success"},"Normal Button"),m.a.createElement(k.a,{color:"info"},"Normal Button"),m.a.createElement(k.a,{color:"warning"},"Normal Button"),m.a.createElement(k.a,{color:"danger"},"Normal Button"),m.a.createElement(k.a,{color:"link"},"Normal Button")),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary",size:"lg"},"Large Button"),m.a.createElement(k.a,{color:"secondary",size:"lg"},"Large Button"),m.a.createElement(k.a,{color:"success",size:"lg"},"Large Button"),m.a.createElement(k.a,{color:"info",size:"lg"},"Large Button"),m.a.createElement(k.a,{color:"warning",size:"lg"},"Large Button"),m.a.createElement(k.a,{color:"danger",size:"lg"},"Large Button"),m.a.createElement(k.a,{color:"link",size:"lg"},"Large Button"))))),m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(b.a,null,"Block Buttons"),m.a.createElement(g.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{body:!0,className:"mb-3"},m.a.createElement(k.a,{color:"primary",size:"sm",block:!0},"Small Block Button"),m.a.createElement(k.a,{color:"secondary",size:"sm",block:!0},"Small Block Button"),m.a.createElement(k.a,{color:"success",size:"sm",block:!0},"Small Block Button"),m.a.createElement(k.a,{color:"info",size:"sm",block:!0},"Small Block Button"),m.a.createElement(k.a,{color:"warning",size:"sm",block:!0},"Small Block Button"),m.a.createElement(k.a,{color:"danger",size:"sm",block:!0},"Small Block Button"),m.a.createElement(k.a,{color:"link",size:"sm",block:!0},"Small Block Button"))),m.a.createElement(d.a,null,m.a.createElement(E.a,{body:!0,className:"mb-3"},m.a.createElement(k.a,{color:"primary",block:!0},"Normal Block Button"),m.a.createElement(k.a,{color:"secondary",block:!0},"Normal Block Button"),m.a.createElement(k.a,{color:"success",block:!0},"Normal Block Button"),m.a.createElement(k.a,{color:"info",block:!0},"Normal Block Button"),m.a.createElement(k.a,{color:"warning",block:!0},"Normal Block Button"),m.a.createElement(k.a,{color:"danger",block:!0},"Normal Block Button"),m.a.createElement(k.a,{color:"link",block:!0},"Normal Block Button"))),m.a.createElement(d.a,null,m.a.createElement(E.a,{body:!0},m.a.createElement(k.a,{color:"primary",size:"lg",block:!0},"Large Block Button"),m.a.createElement(k.a,{color:"secondary",size:"lg",block:!0},"Large Block Button"),m.a.createElement(k.a,{color:"success",size:"lg",block:!0},"Large Block Button"),m.a.createElement(k.a,{color:"info",size:"lg",block:!0},"Large Block Button"),m.a.createElement(k.a,{color:"warning",size:"lg",block:!0},"Large Block Button"),m.a.createElement(k.a,{color:"danger",size:"lg",block:!0},"Large Block Button"),m.a.createElement(k.a,{color:"link",size:"lg",block:!0},"Large Block Button")))))))),m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(b.a,null,"Button State"),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary",active:!0},"primary active"),m.a.createElement(k.a,{color:"secondary",active:!0},"secondary active"),m.a.createElement(k.a,{color:"success",active:!0},"success active"),m.a.createElement(k.a,{color:"info",active:!0},"info active"),m.a.createElement(k.a,{color:"warning",active:!0},"warning active"),m.a.createElement(k.a,{color:"danger",active:!0},"danger active"),m.a.createElement(k.a,{color:"link",active:!0},"link active")),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary",disabled:!0},"primary disabled"),m.a.createElement(k.a,{color:"secondary",disabled:!0},"secondary disabled"),m.a.createElement(k.a,{color:"success",disabled:!0},"success disabled"),m.a.createElement(k.a,{color:"info",disabled:!0},"info disabled"),m.a.createElement(k.a,{color:"warning",disabled:!0},"warning disabled"),m.a.createElement(k.a,{color:"danger",disabled:!0},"danger disabled"),m.a.createElement(k.a,{color:"link",disabled:!0},"link active")),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary",outline:!0,active:!0},"primary outline active"),m.a.createElement(k.a,{color:"secondary",outline:!0,active:!0},"secondary outline active"),m.a.createElement(k.a,{color:"success",outline:!0,active:!0},"success outline active"),m.a.createElement(k.a,{color:"info",outline:!0,active:!0},"info outline active"),m.a.createElement(k.a,{color:"warning",outline:!0,active:!0},"warning outline active"),m.a.createElement(k.a,{color:"danger",outline:!0,active:!0},"danger outline active"),m.a.createElement(k.a,{color:"link",outline:!0,active:!0},"link outline active")),m.a.createElement(g.a,null,m.a.createElement(k.a,{color:"primary",outline:!0,disabled:!0},"primary outline disabled"),m.a.createElement(k.a,{color:"secondary",outline:!0,disabled:!0},"secondary outline disabled"),m.a.createElement(k.a,{color:"success",outline:!0,disabled:!0},"success outline disabled"),m.a.createElement(k.a,{color:"info",outline:!0,disabled:!0},"info outline disabled"),m.a.createElement(k.a,{color:"warning",outline:!0,disabled:!0},"warning outline disabled"),m.a.createElement(k.a,{color:"danger",outline:!0,disabled:!0},"danger outline disabled"),m.a.createElement(k.a,{color:"link",outline:!0,disabled:!0},"link outline active"))))),m.a.createElement(u.a,null,m.a.createElement(d.a,null,m.a.createElement(E.a,{className:"mb-3"},m.a.createElement(b.a,null,"Checkbox and Radio Buttons"),m.a.createElement(g.a,null,m.a.createElement(B.a,null,"Radio Buttons"),m.a.createElement(p.a,null,m.a.createElement(k.a,{color:"primary",onClick:function(){return e.setState({rSelected:1})},active:1===this.state.rSelected},"One"),m.a.createElement(k.a,{color:"primary",onClick:function(){return e.setState({rSelected:2})},active:2===this.state.rSelected},"Two"),m.a.createElement(k.a,{color:"primary",onClick:function(){return e.setState({rSelected:3})},active:3===this.state.rSelected},"Three")),m.a.createElement(v.a,null,"Selected: ",this.state.rSelected)),m.a.createElement(g.a,null,m.a.createElement(B.a,null,"Checkbox Buttons"),m.a.createElement(p.a,null,m.a.createElement(k.a,{color:"primary",onClick:function(){return e.onCheckboxBtnClick(1)},active:this.state.cSelected.includes(1)},"One"),m.a.createElement(k.a,{color:"primary",onClick:function(){return e.onCheckboxBtnClick(2)},active:this.state.cSelected.includes(2)},"Two"),m.a.createElement(k.a,{color:"primary",onClick:function(){return e.onCheckboxBtnClick(3)},active:this.state.cSelected.includes(3)},"Three")),m.a.createElement(v.a,null,"Selected: ",JSON.stringify(this.state.cSelected)))))))}}]),a}(m.a.Component);a.default=f}}]);
//# sourceMappingURL=28.983ed7a8.chunk.js.map