(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{141:function(e,t,a){"use strict";var l=a(34),n=a(10),r=a(4),c=a.n(r),u=a(2),m=a.n(u),s=(a(23),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),o=function(e){var t,a=e.tag,r=e.className,u=e.type,o=Object(n.a)(e,["tag","className","type"]),d=c()(Object(l.a)({},u,!!u),r);return t=a||(!a&&s[u]?s[u]:"p"),m.a.createElement(t,Object.assign({},o,{className:d}))};o.defaultProps={type:"p"},t.a=o},142:function(e,t,a){"use strict";var l=a(10),n=a(2),r=a.n(n),c=(a(23),a(27)),u=a(157),m=a(158),s=a(141),o=c.a.create("page"),d=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,c=e.className,d=e.children,i=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),E=o.b("px-3",c);return r.a.createElement(n,Object.assign({className:E},i),r.a.createElement("div",{className:o.e("header")},t&&"string"===typeof t?r.a.createElement(s.a,{type:"h1",className:o.e("title")},t):t,a&&r.a.createElement(u.a,{className:o.e("breadcrumb")},r.a.createElement(m.a,null,"iTruck IO"),a.length&&a.map(function(e,t){var a=e.name,l=e.active;return r.a.createElement(m.a,{key:t,active:l},a)}))),d)};d.defaultProps={tag:"div",title:""},t.a=d},359:function(e,t,a){"use strict";t.a={data:[{name:"1%",value:1},{name:"2%",value:2},{name:"3%",value:3},{name:"4%",value:4},{name:"5%",value:5},{name:"6%",value:6},{name:"7%",value:7},{name:"8%",value:8},{name:"9%",value:9},{name:"10%",value:10},{name:"11%",value:11},{name:"12%",value:12},{name:"13%",value:13},{name:"14%",value:14},{name:"15%",value:15},{name:"16%",value:16},{name:"17%",value:17},{name:"18%",value:18},{name:"19%",value:19},{name:"20%",value:20},{name:"21%",value:21},{name:"22%",value:22},{name:"23%",value:23},{name:"24%",value:24},{name:"25%",value:25},{name:"26%",value:26},{name:"27%",value:27},{name:"28%",value:28},{name:"29%",value:29},{name:"30%",value:30}]}},935:function(e,t,a){"use strict";a.r(t);var l=a(17),n=a(12),r=a(13),c=a(15),u=a(14),m=a(16),s=a(142),o=a(2),d=a.n(o),i=a(277),E=a.n(i),h=a(131),p=a(132),b=a(117),f=a(121),v=a(62),g=a(118),k=a(110),S=a(47),O=a(48),j=a(49),y=a(73),D=a(473),_=a(52),C=a(920),N=a(50),Y=a(28),$=a.n(Y),x=a(8),w=a(359),M=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).searchableTrucks=function(e){var t=[];e.forEach(function(e){var a=e.make+" - "+e.number,l={value:e.id,label:a};t.push(l)}),a.setState(Object(l.a)({},a.state,{selectabletrucks:t}))},a.firstUpper=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)},a.handleStartDateInput=function(e){var t=e.target.value;a.setState(Object(l.a)({},a.state,{from_date:t}))},a.handleEndDateInput=function(e){var t=e.target.value;a.setState(Object(l.a)({},a.state,{to_date:t}))},a.handleTruckInput=function(e){var t=e.value.toString();a.setState(Object(l.a)({},a.state,{truck:t})),console.log("selected truck",t)},a.handleRateInput=function(e){var t=e.target.value;a.setState(Object(l.a)({},a.state,{rate:t}))},a.handleSaveChanges=function(){a.setState(Object(l.a)({},a.state,{preload:!0})),Object(N.B)(a.state.xtoken,a.state).then(function(e){200===e.status?(a.setState(Object(l.a)({},a.state,{msg:e.message,trips:e.trips,deductions:e.deductions,scheduled:e.scheduled,fuel:e.fuel,summations:e.summations,preload:!1,error:""})),a.forceUpdate()):a.setState(Object(l.a)({},a.state,{error:e.message,preload:!1,msg:""}))}).catch(function(e){a.setState(Object(l.a)({},a.state,{error:"Connection error occured",preload:!1})),console.log("error",e)})},a.handleDownloadReport=function(){a.setState(Object(l.a)({},a.state,{preload:!0})),Object(N.h)(a.state.xtoken,a.state).then(function(e){if(200===e.status){var t=e.fileurl,n=document.createElement("a");n.href=t,n.setAttribute("download","statement"),n.setAttribute("target","_blank"),n.click(),a.setState(Object(l.a)({},a.state,{preload:!1,fileurl:e.fileurl,error:""})),a.forceUpdate()}else a.setState(Object(l.a)({},a.state,{error:e.message,preload:!1,msg:""}))}).catch(function(e){a.setState(Object(l.a)({},a.state,{error:"Connection error occured",preload:!1})),console.log("error",e)})},a.state={truck:"nn",rate:"nn",from_date:"",to_date:"",xtoken:"",msg:"",error:"",fileurl:"",downloadFile:!0,preload:!1,trips:[],deductions:[],scheduled:[],fuel:[],summations:{a:"0.00",b:"0.00",c:"0.00",d:"0.00",e:"0.00"},trucks:[],selectabletrucks:[]},$.a.getItem(x.a.secret).then(function(e){if(null!==e){var t=JSON.parse(e);a.setState(Object(l.a)({},a.state,{xtoken:t.user.token})),Object(N.A)(t.user.token).then(function(e){a.setState(Object(l.a)({},a.state,{trucks:e.data})),a.searchableTrucks(e.data)}).catch(function(e){})}}).catch(function(e){console.log("storage error",e)}),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return d.a.createElement(s.a,{title:"Weekly reports",breadcrumbs:[{name:"Reports",active:!0}]},d.a.createElement(h.a,null,d.a.createElement(p.a,{xl:12,lg:12,md:12},d.a.createElement(b.a,null,d.a.createElement(f.a,null,"Weekly reports",this.state.preload&&d.a.createElement(_.a,null)),this.state.error.length>0&&d.a.createElement(v.a,{color:"danger"},this.state.error)))),d.a.createElement(h.a,null,d.a.createElement(p.a,{xl:4,lg:12,md:12},d.a.createElement(b.a,null,d.a.createElement(g.a,null,d.a.createElement(k.a,null,d.a.createElement(S.a,null,d.a.createElement(O.a,{for:"exampleSelect"},"Start date*"),d.a.createElement(j.a,{onChange:this.handleStartDateInput,type:"date",value:this.state.from_date,name:"fromdate",placeholder:""})),d.a.createElement(S.a,null,d.a.createElement(O.a,{for:"exampleSelect"},"End date*"),d.a.createElement(j.a,{onChange:this.handleEndDateInput,type:"date",value:this.state.to_date,name:"todate",placeholder:""})),d.a.createElement(S.a,null,d.a.createElement(O.a,{for:"exampleSelect"},"Truck*"),d.a.createElement(C.a,{defaultValue:this.state.truck,onChange:this.handleTruckInput,options:this.state.selectabletrucks})),d.a.createElement(S.a,null,d.a.createElement(O.a,{for:"exampleSelect"},"Rate*"),d.a.createElement(j.a,{onChange:this.handleRateInput,value:this.state.rate,defaultValue:this.state.rate,type:"select",name:"driver"},d.a.createElement("option",{value:"nn",disabled:!0},"Select rate"),w.a.data.map(function(e,t){return d.a.createElement("option",{key:t,value:e.value},e.name)}))),d.a.createElement(h.a,null,d.a.createElement(p.a,{xl:6,lg:12,md:12},d.a.createElement(S.a,null,d.a.createElement(y.a,{type:"button",onClick:this.handleSaveChanges},"Run report"))),d.a.createElement(p.a,{xl:6,lg:12,md:12},d.a.createElement(S.a,null,d.a.createElement(y.a,{type:"button",onClick:this.handleDownloadReport},"Download")))))))),d.a.createElement(p.a,{xl:8,lg:12,md:12},d.a.createElement(b.a,null,d.a.createElement(f.a,{className:"statement-head"},"Trips"),d.a.createElement(g.a,null,d.a.createElement(D.a,{responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Trip"),d.a.createElement("th",null,"Description"),d.a.createElement("th",null,"Mileage"),d.a.createElement("th",null,"Date"),d.a.createElement("th",null,"Load rate"),d.a.createElement("th",null,"Net rate"))),d.a.createElement("tbody",null,this.state.trips.map(function(e,t){return d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},e.number),d.a.createElement("td",null,e.origin," - ",e.destination),d.a.createElement("td",null,e.mileage),d.a.createElement("td",null,d.a.createElement(E.a,{format:"YYYY/MM/DD"},e.created_at)),d.a.createElement("td",null,"$",e.rate),d.a.createElement("td",null,"$",e.net))}),d.a.createElement("tr",null,d.a.createElement("th",{colSpan:"4"}),d.a.createElement("td",null,d.a.createElement("b",null,"Total")),d.a.createElement("td",null,d.a.createElement("b",null,"$",this.state.summations.a)))))),d.a.createElement(f.a,{className:"statement-head"},"Deductions"),d.a.createElement(g.a,null,d.a.createElement(D.a,{responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Description"),d.a.createElement("th",null,"Date"),d.a.createElement("th",null,"Misc. amount"),d.a.createElement("th",null,"Amount"),d.a.createElement("th",null,"Subtotal"))),d.a.createElement("tbody",null,this.state.deductions.map(function(e,t){return d.a.createElement("tr",null,d.a.createElement("td",null,e.description),d.a.createElement("td",null,d.a.createElement(E.a,{format:"YYYY/MM/DD"},e.created_at)),d.a.createElement("td",null,"$",e.misc_amount_f),d.a.createElement("td",null,"$",e.amount_f),d.a.createElement("td",null,"$",e.total))}),d.a.createElement("tr",null,d.a.createElement("th",{colSpan:"3"}),d.a.createElement("td",null,d.a.createElement("b",null,"Total")),d.a.createElement("td",null,d.a.createElement("b",null,"($",this.state.summations.b,")")))))),d.a.createElement(f.a,{className:"statement-head"},"Fuel Card"),d.a.createElement(g.a,null,d.a.createElement(D.a,{responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Description"),d.a.createElement("th",null,"City"),d.a.createElement("th",null,"State"),d.a.createElement("th",null,"Date"),d.a.createElement("th",null,"Misc. cost"),d.a.createElement("th",null,"Fuel cost"),d.a.createElement("th",null,"Subtotal"))),d.a.createElement("tbody",null,this.state.fuel.map(function(e,t){return d.a.createElement("tr",null,d.a.createElement("td",null,e.description),d.a.createElement("td",null,e.city),d.a.createElement("td",null,e.state),d.a.createElement("td",null,d.a.createElement(E.a,{format:"YYYY/MM/DD"},e.created_at)),d.a.createElement("td",null,"$",e.misc_amount_f),d.a.createElement("td",null,"$",e.amount_f),d.a.createElement("td",null,"$",e.total))}),d.a.createElement("tr",null,d.a.createElement("th",{colSpan:"5"}),d.a.createElement("td",null,d.a.createElement("b",null,"Total")),d.a.createElement("td",null,d.a.createElement("b",null,"($",this.state.summations.c,")")))))),d.a.createElement(f.a,{className:"statement-head"},"Scheduled deductions"),d.a.createElement(g.a,null,d.a.createElement(D.a,{responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Description"),d.a.createElement("th",null,"Date"),d.a.createElement("th",null,"Amount"),d.a.createElement("th",null,"Subtotal"))),d.a.createElement("tbody",null,this.state.scheduled.map(function(e,t){return d.a.createElement("tr",null,d.a.createElement("td",null,e.description),d.a.createElement("td",null,d.a.createElement(E.a,{format:"YYYY/MM/DD"},e.created_at)),d.a.createElement("td",null,"$",e.amount_f),d.a.createElement("td",null,"$",e.total))}),d.a.createElement("tr",null,d.a.createElement("td",{colSpan:"2"}),d.a.createElement("td",null,d.a.createElement("b",null,"Total")),d.a.createElement("td",null,d.a.createElement("b",null,"($",this.state.summations.d,")"))),d.a.createElement("tr",null,d.a.createElement("td",{colSpan:"4"})),d.a.createElement("tr",{className:"statement-check"},d.a.createElement("td",{colSpan:"2"}),d.a.createElement("td",null,d.a.createElement("b",null,"Check Amount")),d.a.createElement("td",null,d.a.createElement("b",null,"$",this.state.summations.e))))))))))}}]),t}(d.a.Component);t.default=M}}]);
//# sourceMappingURL=34.7d50e863.chunk.js.map