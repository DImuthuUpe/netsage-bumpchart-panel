define(["@grafana/data","react"],(function(r,e){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)t.d(n,a,function(e){return r[e]}.bind(null,a));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t(t.s=2)}([function(e,t){e.exports=r},function(r,t){r.exports=e},function(r,e,t){"use strict";t.r(e);var n=t(0),a=t(1),o=t.n(a);t.d(e,"plugin",(function(){return u}));var u=new n.PanelPlugin((function(r){r.options;var e=r.data;r.width,r.height;try{var t=function(r){var e=[],t=["rgba(223, 79, 79,1)","rgba(88, 223, 79,1)","rgba(79, 145, 223,1)","rgba(223, 79, 168,1)","rgba(223, 155, 79,1)","rgba(79, 223, 192,1)","rgba(138, 79, 223,1)","rgba(166, 223, 79,1)","rgba(147, 50, 55,1)","rgba(50, 147, 142,1)","rgba(59, 147, 50,1)","rgba(94, 50, 147,1)","rgba(147, 78, 50,1)","rgba(50, 81, 147,1)"];for(i in r){org=r[i].target,e[i]={org:org,data:[]};var n=r[i].datapoints;for(j in n)date=n[j][1],value=n[j][0],e[i].data[j]={date:date,value:value,rank:0,orig_index:parseInt(i)}}for(i in e[0].data){var a=[];for(j in e)a[j]=e[j].data[i];a.sort((function(r,e){return e.value-r.value}));for(var o=0;o<a.length;o++)e[a[o].orig_index].data[i].rank=o}for(i in e)for(j in e[i].data)e[i].data[j].org=e[i].org,e[i].data[j].color=t[i%t.length];var u=[];for(i in e){var l=e[i].data[e[i].data.length-1];u[i]={org:l.org,rank:l.rank}}u.sort((function(r,e){return r.rank-e.rank}));var d=[];for(i in e[0].data)d[i]=e[0].data[i].date;var f={parsed_data:e,final_positions:u,colorPal:t,dates:d};return console.log(f),f}(e);console.log(t)}catch(r){console.error("Parsing error : ",r)}return o.a.createElement("div",null,"Hello World")})).setPanelOptions((function(r){return r.addNumberInput({path:"linecount",name:"Number of lines",description:"Number of lines to show",defaultValue:10}).addTextInput({path:"headerText",name:"Axis Header",description:"Axis header display",defaultValue:"Axis header"})}))}])}));
//# sourceMappingURL=module.js.map