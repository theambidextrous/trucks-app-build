(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{141:function(e,a,t){"use strict";var r=t(34),n=t(10),l=t(4),s=t.n(l),c=t(2),o=t.n(c),u=(t(23),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,l=e.className,c=e.type,i=Object(n.a)(e,["tag","className","type"]),m=s()(Object(r.a)({},c,!!c),l);return a=t||(!t&&u[c]?u[c]:"p"),o.a.createElement(a,Object.assign({},i,{className:m}))};i.defaultProps={type:"p"},a.a=i},142:function(e,a,t){"use strict";var r=t(10),n=t(2),l=t.n(n),s=(t(23),t(27)),c=t(153),o=t(154),u=t(141),i=s.a.create("page"),m=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,s=e.className,m=e.children,d=Object(r.a)(e,["title","breadcrumbs","tag","className","children"]),p=i.b("px-3",s);return l.a.createElement(n,Object.assign({className:p},d),l.a.createElement("div",{className:i.e("header")},a&&"string"===typeof a?l.a.createElement(u.a,{type:"h1",className:i.e("title")},a):a,t&&l.a.createElement(c.a,{className:i.e("breadcrumb")},l.a.createElement(o.a,null,"iTruck IO"),t.length&&t.map(function(e,a){var t=e.name,r=e.active;return l.a.createElement(o.a,{key:a,active:r},t)}))),m)};m.defaultProps={tag:"div",title:""},a.a=m},153:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(2),s=t.n(l),c=t(1),o=t.n(c),u=t(4),i=t.n(u),m=t(3),d={tag:m.q,listTag:m.q,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},p=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,o=e.tag,u=e.listTag,d=e["aria-label"],p=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.m)(i()(a),l),v=Object(m.m)(i()("breadcrumb",t),l);return s.a.createElement(o,Object(r.a)({},p,{className:b,"aria-label":d}),s.a.createElement(u,{className:v},c))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},154:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(2),s=t.n(l),c=t(1),o=t.n(c),u=t(4),i=t.n(u),m=t(3),d={tag:m.q,active:o.a.bool,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),u=Object(m.m)(i()(a,!!l&&"active","breadcrumb-item"),t);return s.a.createElement(c,Object(r.a)({},o,{className:u,"aria-current":l?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},a.a=p},219:function(e,a,t){"use strict";a.a={data:[{name:"1%",value:1},{name:"2%",value:2},{name:"3%",value:3},{name:"4%",value:4},{name:"5%",value:5},{name:"6%",value:6},{name:"7%",value:7},{name:"8%",value:8},{name:"9%",value:9},{name:"10%",value:10},{name:"11%",value:11},{name:"12%",value:12},{name:"13%",value:13},{name:"14%",value:14},{name:"15%",value:15},{name:"16%",value:16},{name:"17%",value:17},{name:"18%",value:18},{name:"19%",value:19},{name:"20%",value:20},{name:"21%",value:21},{name:"22%",value:22},{name:"23%",value:23},{name:"24%",value:24},{name:"25%",value:25},{name:"26%",value:26},{name:"27%",value:27},{name:"28%",value:28},{name:"29%",value:29},{name:"30%",value:30}]}},314:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(2),s=t.n(l),c=t(1),o=t.n(c),u=t(4),i=t.n(u),m=t(3),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,inverse:Object(m.h)(o.a.bool,'Please use the prop "dark"'),dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:m.q,responsiveTag:m.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var a=e.className,t=e.cssModule,l=e.size,c=e.bordered,o=e.borderless,u=e.striped,d=e.inverse,p=e.dark,b=e.hover,v=e.responsive,h=e.tag,f=e.responsiveTag,g=e.innerRef,E=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),O=Object(m.m)(i()(a,"table",!!l&&"table-"+l,!!c&&"table-bordered",!!o&&"table-borderless",!!u&&"table-striped",!(!p&&!d)&&"table-dark",!!b&&"table-hover"),t),j=s.a.createElement(h,Object(r.a)({},E,{ref:g,className:O}));if(v){var N=!0===v?"table-responsive":"table-responsive-"+v;return s.a.createElement(f,{className:N},j)}return j};p.propTypes=d,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},939:function(e,a,t){"use strict";t.r(a);var r=t(17),n=t(12),l=t(13),s=t(15),c=t(14),o=t(16),u=t(142),i=t(2),m=t.n(i),d=t(951),p=t(131),b=t(132),v=t(117),h=t(121),f=t(62),g=t(118),E=t(110),O=t(47),j=t(48),N=t(49),k=t(73),y=t(314),S=t(9),x=t(52),T=t(50),C=t(28),w=t.n(C),D=t(6),M=(t(219),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).format_date_str=function(e){var a=e.split("-"),t=a[2].slice(0,2);return Object(d.a)(new Date(a[0],a[1],t),"MM/dd/yyyy")},t.firstUpper=function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)},t.removeItemOnce=function(e,a){var t=e.indexOf(a);return t>-1&&e.splice(t,1),e},t.handleDropCol=function(e,a,n){n.preventDefault(),t.setState(Object(r.a)({},t.state,{preload:!0}));var l=t.state.except;l.push(e);var s=t.state.summations.a.replace(",","")-a.replace(",","");if(parseInt(s)<=0)t.setState(Object(r.a)({},t.state,{preload:!1,except:t.removeItemOnce(t.state.except,e)}));else{var c=[];t.state.trips.forEach(function(a){a.id!==e&&c.push(a)}),t.setState(Object(r.a)({},t.state,{except:l,trips:c,summations:{a:s.toFixed(2)},preload:!1}))}},t.handleStartDateInput=function(e){var a=e.target.value;t.setState(Object(r.a)({},t.state,{from_date:a}))},t.handleEndDateInput=function(e){var a=e.target.value;t.setState(Object(r.a)({},t.state,{to_date:a}))},t.handleTruckInput=function(e){var a=e.target.value;t.setState(Object(r.a)({},t.state,{truck:a}))},t.handleRateInput=function(e){var a=e.target.value;t.setState(Object(r.a)({},t.state,{rate:a}))},t.handleSaveChanges=function(){t.setState(Object(r.a)({},t.state,{preload:!0})),Object(T.E)(t.state.xtoken,t.state).then(function(e){200===e.status?(t.setState(Object(r.a)({},t.state,{msg:e.message,except:[],trips:e.trips,summations:e.summations,preload:!1,error:""})),t.forceUpdate()):t.setState(Object(r.a)({},t.state,{error:e.message,preload:!1,msg:""}))}).catch(function(e){t.setState(Object(r.a)({},t.state,{error:"Connection error occured",preload:!1})),console.log("error",e)})},t.handleDownloadReport=function(){t.setState(Object(r.a)({},t.state,{preload:!0})),Object(T.k)(t.state.xtoken,t.state).then(function(e){if(200===e.status){var a=e.fileurl,n=document.createElement("a");n.href=a,n.setAttribute("download","statement"),n.setAttribute("target","_blank"),n.click(),t.setState(Object(r.a)({},t.state,{preload:!1,fileurl:e.fileurl,error:""})),t.forceUpdate()}else t.setState(Object(r.a)({},t.state,{error:e.message,preload:!1,msg:""}))}).catch(function(e){t.setState(Object(r.a)({},t.state,{error:"Connection error occured",preload:!1})),console.log("error",e)})},t.state={from_date:"",to_date:"",xtoken:"",msg:"",error:"",fileurl:"",downloadFile:!0,preload:!1,trips:[],except:[],summations:{a:"0.00"},trucks:[]},w.a.getItem(D.a.secret).then(function(e){if(null!==e){var a=JSON.parse(e);t.setState(Object(r.a)({},t.state,{xtoken:a.user.token}))}}).catch(function(e){console.log("storage error",e)}),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement(u.a,{title:"Factoring reports",breadcrumbs:[{name:"Reports",active:!0}]},m.a.createElement(p.a,null,m.a.createElement(b.a,{xl:12,lg:12,md:12},m.a.createElement(v.a,null,m.a.createElement(h.a,null,"Factoring reports",this.state.preload&&m.a.createElement(x.a,null)),this.state.error.length>0&&m.a.createElement(f.a,{color:"danger"},this.state.error)))),m.a.createElement(p.a,null,m.a.createElement(b.a,{xl:3,lg:12,md:12},m.a.createElement(v.a,null,m.a.createElement(g.a,null,m.a.createElement(E.a,null,m.a.createElement(O.a,null,m.a.createElement(j.a,{for:"exampleSelect"},"Start date*"),m.a.createElement(N.a,{onChange:this.handleStartDateInput,type:"date",value:this.state.from_date,name:"fromdate",placeholder:""})),m.a.createElement(O.a,null,m.a.createElement(j.a,{for:"exampleSelect"},"End date*"),m.a.createElement(N.a,{onChange:this.handleEndDateInput,type:"date",value:this.state.to_date,name:"todate",placeholder:""})),m.a.createElement(p.a,null,m.a.createElement(b.a,{xl:6,lg:12,md:12},m.a.createElement(O.a,null,m.a.createElement(k.a,{type:"button",onClick:this.handleSaveChanges},"Run report"))),m.a.createElement(b.a,{xl:6,lg:12,md:12},m.a.createElement(O.a,null,m.a.createElement(k.a,{type:"button",onClick:this.handleDownloadReport},"Download")))))))),m.a.createElement(b.a,{xl:9,lg:12,md:12},m.a.createElement(v.a,null,m.a.createElement(h.a,{className:"statement-head"},"Trips"),m.a.createElement(g.a,null,m.a.createElement(y.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Trip"),m.a.createElement("th",null,"Description"),m.a.createElement("th",null,"Date"),m.a.createElement("th",null,"Load rate"))),m.a.createElement("tbody",null,this.state.trips.map(function(a,t){return m.a.createElement("tr",null,m.a.createElement("th",{scope:"row"},a.number),m.a.createElement("td",null,a.origin," - ",a.destination),m.a.createElement("td",null,e.format_date_str(a.created_at)),m.a.createElement("td",null,"$",a.rate," ",m.a.createElement(S.b,{onClick:function(t){return e.handleDropCol(a.id,a.rate,t)},title:"remove",className:"red-icon"})))}),m.a.createElement("tr",null,m.a.createElement("th",{colSpan:"2"}),m.a.createElement("td",null,m.a.createElement("b",null,"Total")),m.a.createElement("td",null,m.a.createElement("b",null,"$",this.state.summations.a))))))))))}}]),a}(m.a.Component));a.default=M}}]);
//# sourceMappingURL=25.16081b57.chunk.js.map