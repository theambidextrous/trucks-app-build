(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{141:function(e,t,a){"use strict";var n=a(34),o=a(10),s=a(4),i=a.n(s),l=a(2),r=a.n(l),c=(a(23),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),d=function(e){var t,a=e.tag,s=e.className,l=e.type,d=Object(o.a)(e,["tag","className","type"]),u=i()(Object(n.a)({},l,!!l),s);return t=a||(!a&&c[l]?c[l]:"p"),r.a.createElement(t,Object.assign({},d,{className:u}))};d.defaultProps={type:"p"},t.a=d},142:function(e,t,a){"use strict";var n=a(10),o=a(2),s=a.n(o),i=(a(23),a(27)),l=a(157),r=a(158),c=a(141),d=i.a.create("page"),u=function(e){var t=e.title,a=e.breadcrumbs,o=e.tag,i=e.className,u=e.children,p=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),m=d.b("px-3",i);return s.a.createElement(o,Object.assign({className:m},p),s.a.createElement("div",{className:d.e("header")},t&&"string"===typeof t?s.a.createElement(c.a,{type:"h1",className:d.e("title")},t):t,a&&s.a.createElement(l.a,{className:d.e("breadcrumb")},s.a.createElement(r.a,null,"iTruck IO"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return s.a.createElement(r.a,{key:t,active:n},a)}))),u)};u.defaultProps={tag:"div",title:""},t.a=u},157:function(e,t,a){"use strict";var n=a(5),o=a(6),s=a(2),i=a.n(s),l=a(1),r=a.n(l),c=a(4),d=a.n(c),u=a(3),p={tag:u.q,listTag:u.q,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},m=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,l=e.children,r=e.tag,c=e.listTag,p=e["aria-label"],m=Object(o.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(u.m)(d()(t),s),g=Object(u.m)(d()("breadcrumb",a),s);return i.a.createElement(r,Object(n.a)({},m,{className:h,"aria-label":p}),i.a.createElement(c,{className:g},l))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},158:function(e,t,a){"use strict";var n=a(5),o=a(6),s=a(2),i=a.n(s),l=a(1),r=a.n(l),c=a(4),d=a.n(c),u=a(3),p={tag:u.q,active:r.a.bool,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.active,l=e.tag,r=Object(o.a)(e,["className","cssModule","active","tag"]),c=Object(u.m)(d()(t,!!s&&"active","breadcrumb-item"),a);return i.a.createElement(l,Object(n.a)({},r,{className:c,"aria-current":s?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},204:function(e,t,a){"use strict";var n=a(5),o=a(6),s=a(2),i=a.n(s),l=a(1),r=a.n(l),c=a(4),d=a.n(c),u=a(3),p={tag:u.q,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(u.m)(d()(t,"modal-body"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},206:function(e,t,a){"use strict";var n=a(19),o=a(5),s=a(11),i=a(7),l=a(2),r=a.n(l),c=a(1),d=a.n(c),u=a(4),p=a.n(u),m=a(25),h=a.n(m),g=a(3),b={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return g.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);f.propTypes=b;var O=f,E=a(31);function v(){}var y=d.a.shape(E.a.propTypes),j={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:y,modalTransition:y,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},N=Object.keys(j),k={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:g.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:g.e.Fade}},C=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(i.a)(Object(i.a)(a))),a.handleEscape=a.handleEscape.bind(Object(i.a)(Object(i.a)(a))),a.handleTab=a.handleTab.bind(Object(i.a)(Object(i.a)(a))),a.onOpened=a.onOpened.bind(Object(i.a)(Object(i.a)(a))),a.onClosed=a.onClosed.bind(Object(i.a)(Object(i.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(g.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(g.j)(),Object(g.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=p()(document.body.className,Object(g.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(g.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(g.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(g.n)(this.props,N);return r.a.createElement("div",Object(o.a)({},a,{className:Object(g.m)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(g.m)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,s=e.backdropClassName,i=e.cssModule,l=e.isOpen,c=e.backdrop,d=e.role,u=e.labelledBy,m=e.external,h=e.innerRef,b={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:d,tabIndex:"-1"},f=this.props.fade,v=Object(n.a)({},E.a.defaultProps,this.props.modalTransition,{baseClass:f?this.props.modalTransition.baseClass:"",timeout:f?this.props.modalTransition.timeout:0}),y=Object(n.a)({},E.a.defaultProps,this.props.backdropTransition,{baseClass:f?this.props.backdropTransition.baseClass:"",timeout:f?this.props.backdropTransition.timeout:0}),j=c&&(f?r.a.createElement(E.a,Object(o.a)({},y,{in:l&&!!c,cssModule:i,className:Object(g.m)(p()("modal-backdrop",s),i)})):r.a.createElement("div",{className:Object(g.m)(p()("modal-backdrop","show",s),i)}));return r.a.createElement(O,{node:this._element},r.a.createElement("div",{className:Object(g.m)(t)},r.a.createElement(E.a,Object(o.a)({},b,v,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(g.m)(p()("modal",a),i),innerRef:h}),m,this.renderModalDialog()),j))}return null},t}(r.a.Component);C.propTypes=j,C.defaultProps=k,C.openCount=0;t.a=C},217:function(e,t,a){"use strict";var n=a(5),o=a(6),s=a(2),i=a.n(s),l=a(1),r=a.n(l),c=a(4),d=a.n(c),u=a(3),p={tag:u.q,wrapTag:u.q,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},m=function(e){var t,a=e.className,s=e.cssModule,l=e.children,r=e.toggle,c=e.tag,p=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,g=e.close,b=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(u.m)(d()(a,"modal-header"),s);if(!g&&r){var O="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:r,className:Object(u.m)("close",s),"aria-label":m},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(p,Object(n.a)({},b,{className:f}),i.a.createElement(c,{className:Object(u.m)("modal-title",s)},l),g||t)};m.propTypes=p,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},218:function(e,t,a){"use strict";var n=a(5),o=a(6),s=a(2),i=a.n(s),l=a(1),r=a.n(l),c=a(4),d=a.n(c),u=a(3),p={tag:u.q,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(u.m)(d()(t,"modal-footer"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},474:function(e,t,a){"use strict";var n=a(5),o=a(6),s=a(2),i=a.n(s),l=a(1),r=a.n(l),c=a(4),d=a.n(c),u=a(3),p={tag:u.q,"aria-label":r.a.string,className:r.a.string,cssModule:r.a.object,role:r.a.string,size:r.a.string,vertical:r.a.bool},m=function(e){var t=e.className,a=e.cssModule,s=e.size,l=e.vertical,r=e.tag,c=Object(o.a)(e,["className","cssModule","size","vertical","tag"]),p=Object(u.m)(d()(t,!!s&&"btn-group-"+s,l?"btn-group-vertical":"btn-group"),a);return i.a.createElement(r,Object(n.a)({},c,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div",role:"group"},t.a=m},944:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(12),s=a(13),i=a(15),l=a(14),r=a(16),c=a(142),d=a(2),u=a.n(d),p=a(131),m=a(132),h=a(117),g=a(121),b=a(118),f=a(73),O=a(206),E=a(217),v=a(204),y=a(218),j=a(474),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,modal_backdrop:!1,modal_nested_parent:!1,modal_nested:!1,backdrop:!0},a.toggle=function(e){return function(){if(!e)return a.setState({modal:!a.state.modal});a.setState(Object(n.a)({},"modal_".concat(e),!a.state["modal_".concat(e)]))}},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(c.a,{title:"Modals",breadcrumbs:[{name:"modals",active:!0}]},u.a.createElement(p.a,null,u.a.createElement(m.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(h.a,null,u.a.createElement(g.a,null,"Modal"),u.a.createElement(b.a,null,u.a.createElement(f.a,{onClick:this.toggle()},"Launch Modal"),u.a.createElement(O.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},u.a.createElement(E.a,{toggle:this.toggle()},"Modal title"),u.a.createElement(v.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(y.a,null,u.a.createElement(f.a,{color:"primary",onClick:this.toggle()},"Do Something")," ",u.a.createElement(f.a,{color:"secondary",onClick:this.toggle()},"Cancel")))))),u.a.createElement(m.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(h.a,null,u.a.createElement(g.a,{className:"d-flex justify-content-between"},"Backdrop",u.a.createElement(j.a,{size:"sm"},u.a.createElement(f.a,{onClick:function(){return e.setState({backdrop:!0})},color:"primary",active:this.state.backdrop},"true"),u.a.createElement(f.a,{onClick:function(){return e.setState({backdrop:!1})},color:"primary",active:!this.state.backdrop},"false"),u.a.createElement(f.a,{onClick:function(){return e.setState({backdrop:"static"})},color:"primary",active:"static"===this.state.backdrop},"static"))),u.a.createElement(b.a,null,u.a.createElement("p",null,"Backdrop state: ","".concat(this.state.backdrop)),u.a.createElement(f.a,{onClick:this.toggle("backdrop")},"Launch Modal"),u.a.createElement(O.a,{isOpen:this.state.modal_backdrop,toggle:this.toggle("backdrop"),backdrop:this.state.backdrop},u.a.createElement(E.a,{toggle:this.toggle("backdrop")},"Modal title"),u.a.createElement(v.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement(y.a,null,u.a.createElement(f.a,{color:"primary",onClick:this.toggle("backdrop")},"Do Something")," ",u.a.createElement(f.a,{color:"secondary",onClick:this.toggle("backdrop")},"Cancel")))))),u.a.createElement(m.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(h.a,null,u.a.createElement(g.a,null,"Nested"),u.a.createElement(b.a,null,u.a.createElement(f.a,{color:"danger",onClick:this.toggle("nested_parent")},"Launch Modal"),u.a.createElement(O.a,{isOpen:this.state.modal_nested_parent,toggle:this.toggle("nested_parent"),className:this.props.className},u.a.createElement(E.a,{toggle:this.toggle("nested_parent")},"Modal title"),u.a.createElement(v.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",u.a.createElement("br",null),u.a.createElement(f.a,{color:"success",onClick:this.toggle("nested")},"Show Nested Model"),u.a.createElement(O.a,{isOpen:this.state.modal_nested,toggle:this.toggle("nested")},u.a.createElement(E.a,null,"Nested Modal title"),u.a.createElement(v.a,null,"Stuff and things"),u.a.createElement(y.a,null,u.a.createElement(f.a,{color:"primary",onClick:this.toggle("nested")},"Done")," ",u.a.createElement(f.a,{color:"secondary",onClick:this.toggle("nested_parent")},"All Done")))),u.a.createElement(y.a,null,u.a.createElement(f.a,{color:"primary",onClick:this.toggle("nested_parent")},"Do Something")," ",u.a.createElement(f.a,{color:"secondary",onClick:this.toggle("nested_parent")},"Cancel"))))))))}}]),t}(u.a.Component);t.default=N}}]);
//# sourceMappingURL=19.606ee617.chunk.js.map