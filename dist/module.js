/*! For license information please see module.js.LICENSE.txt */
define(["d3","react","@grafana/data"],(function(t,e,a){return function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=3)}([function(e,a){e.exports=t},function(t,a){t.exports=e},function(t,e){t.exports=a},function(t,e,a){"use strict";a.r(e);var r=a(2);var n=function(){return(n=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};var o=a(1),i=a.n(o);var l=a(0);function c(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.containerID=e}var e,a,r;return e=t,(a=[{key:"renderChart",value:function(t,e,a){if(t){l.select("#"+this.containerID).select("svg").remove(),l.select("#"+this.containerID).select(".tooltip").remove();var r=t.parsed_data,n=t.final_positions,o=t.colorPal,i=t.dates,c=this.containerID,s=document.getElementById(this.containerID).offsetWidth,u=document.getElementById(this.containerID).offsetHeight,d=25,p=325,f=150,h=25,g=25,v=s-h-p,y=u-d-f;l.select("#"+c).insert("select","svg").on("change",(function(t){!function(t){A=[0,k=t-1],P.domain(A),_=l.axisRight(P).ticks(t).tickSize(5).tickFormat((function(t){return console.log("d"+t),n[t].org}));var e=l.select("#"+c).transition();e.select(".yAxis").duration(750).call(_).selectAll(".tick text").call(T,p-25),r.forEach((function(t){e.select(".org-"+t+c).duration(750).attr("d",l.line().curve(l.curveMonotoneX).x((function(t){return I(t.date)})).y((function(t){return P(t.rank)}))),e.selectAll("circle").duration(750).attr("cx",(function(t){return I(t.date)})).attr("cy",(function(t){return P(t.rank)}))}))}(l.select(this).property("value"))})).selectAll("option").data([10,9,8,7,6,5,4,3,2,1]).enter().append("option").text((function(t){return t})).attr("value",(function(t){return t})),l.selectAll("select").attr("class","dropdownMenu");var m=v+h+p-120;l.select("#"+c).insert("svg","svg").attr("width",m).attr("height",30).append("text").attr("class","dropdown-text").attr("transform","translate("+m+", 20)").style("text-anchor","end").text("Number of Lines to Display: ");var x=l.select("#"+this.containerID).append("svg").attr("width",v+h+p).attr("height",y+d+f+g).append("g").attr("height",y).attr("transform","translate("+h+","+d+")"),b=l.extent(r[0].data,(function(t){return t.date})),k=a-1,A=[0,k],w=l.timeFormat("%m/%d/%y"),I=l.scaleTime().domain(b).range([0,v]),P=l.scaleLinear().domain(A).range([0,y]),_=l.axisRight(P).ticks(a-1).tickSize(5).tickFormat((function(t){return n[t].org})),j=l.axisBottom(I).tickValues(i).tickSize(5).tickFormat(w);x.append("g").call(_).attr("margin",10).attr("transform","translate("+(v+g)+","+d+")").attr("class","yAxis").selectAll(".tick text").call(T,p-25).attr("transform","translate(10,0)"),x.append("g").call(j).attr("class","axis").attr("transform","translate("+g+","+(y+g+d)+")").selectAll(".tick text").call(T,100).attr("transform","rotate(-60)").style("text-anchor","end"),x.append("text").attr("class","header-text").attr("transform","translate("+(v+h+10)+" ,"+d/4+")").style("text-anchor","start").text(e);for(var M=l.select("body").append("div").attr("class","tooltip").style("opacity",0),O=0;O<r.length;O++)x.append("svg").attr("width",v+g).attr("height",y+g+d).append("g").attr("transform","translate("+g+","+d+")").append("path").attr("class","org-"+O+c).datum(r[O].data).attr("fill","none").attr("stroke",o[O%o.length]).attr("opacity",.5).attr("stroke-width",7).attr("d",l.line().curve(l.curveMonotoneX).x((function(t){return I(t.date)})).y((function(t){return P(t.rank)}))).on("mouseover",(function(t){l.selectAll("path").attr("opacity",.2),l.select(this).attr("opacity",1);var e=l.select(this).attr("class");l.selectAll("circle").each((function(t){var a=l.select(this).attr("class"),r=e===a;l.select(this).attr("opacity",r?1:.2).attr("fill-opacity",r?.9:.2)})),M.transition().duration(200).style("opacity",.9),M.html((function(){return"<b>"+t[0].org+"</b>"})).style("left",l.event.pageX+"px").style("top",l.event.pageY-28+"px")})).on("mouseout",(function(t){M.transition().duration(500).style("opacity",0),l.selectAll("path").attr("opacity",.5),l.selectAll("circle").attr("fill-opacity",.5).attr("opacity",.7)})),x.append("svg").attr("width",v+10+g).attr("height",y+g+d).append("g").attr("transform","translate("+g+","+d+")").selectAll("circle").data(r[O].data).enter().append("circle").attr("class","org-"+O+c).attr("cx",(function(t){return I(t.date)})).attr("cy",(function(t){return P(t.rank)})).attr("fill",o[O%o.length]).attr("fill-opacity",.5).attr("r",10).attr("stroke",o[O%o.length]).attr("opacity",.7).attr("stroke-width",1.5);l.select("body").append("div").attr("class","small-tooltip"),x.selectAll("circle").on("mouseover",(function(t){var e=l.select(this).attr("class");console.log(e),l.selectAll("circle").each((function(t){var a=l.select(this).attr("class"),r=e===a;l.select(this).attr("opacity",r?1:.2).attr("fill-opacity",r?1:.2)})),l.selectAll("path").each((function(t){var a=l.select(this).attr("class"),r=e===a;l.select(this).attr("opacity",r?1:.2)})),M.transition().duration(200).style("opacity",.9),M.html((function(){var e=t.rank+1,a=t.value/1e3,r=a+"bytes";return r=(a/=1e3)<1e3?Math.round(10*a)/10+" KB":(a/=1e3)<1e3?Math.round(10*a)/10+" MB":(a/=1e3)<1e3?Math.round(10*a)/10+" GB":(a/=1e3)<1e3?Math.round(10*a)/10+" TB":Math.round(10*a)/10+" PB","<b>#"+e+": </b>"+t.org+"<br><b>Volume: </b>"+r})).style("left",l.event.pageX+"px").style("top",l.event.pageY-28+"px")})).on("mouseout",(function(t){M.transition().duration(500).style("opacity",0),l.selectAll("circle").attr("fill-opacity",.5).attr("opacity",.7),l.selectAll("path").attr("opacity",.5)}))}function T(t,e){t.each((function(){for(var t,a=l.select(this),r=a.text().split(/\s+/).reverse(),n=[],o=0,i=a.attr("y"),c=parseFloat(a.attr("dy")),s=a.text(null).append("tspan").attr("x",0).attr("y",i).attr("dy",c+"em");t=r.pop();)n.push(t),s.text(n.join(" ")),s.node().getComputedTextLength()>e&&(n.pop(),s.text(n.join(" ")),n=[t],s=a.append("tspan").attr("x",0).attr("y",i).attr("dy",1.1*++o+c+"em").text(t))}))}}}])&&c(e.prototype,a),r&&c(e,r),t}(),u=function(t){return Object(o.useEffect)((function(){console.log("rendering");var e=t.panelId,a=new s("Chart_"+e);console.log(a),a.renderChart(t.data,t.options.linecount,t.options.headerText)})),i.a.createElement("div",{id:"Chart_"+t.panelId,style:{height:t.height,width:t.width}})};a.d(e,"plugin",(function(){return d}));var d=new r.PanelPlugin((function(t){var e=t.options,a=t.data,r=t.width,o=t.height,l=t.id,c=n({},e),s={};try{s=function(t){for(var e=[],a=["rgba(223, 79, 79,1)","rgba(88, 223, 79,1)","rgba(79, 145, 223,1)","rgba(223, 79, 168,1)","rgba(223, 155, 79,1)","rgba(79, 223, 192,1)","rgba(138, 79, 223,1)","rgba(166, 223, 79,1)","rgba(147, 50, 55,1)","rgba(50, 147, 142,1)","rgba(59, 147, 50,1)","rgba(94, 50, 147,1)","rgba(147, 78, 50,1)","rgba(50, 81, 147,1)"],r=0;r<t.length;r++){var n=t[r].target;e[r]={org:n,data:[]};var o=t[r].datapoints;for(var i in o){var l=o[i][1],c=o[i][0];e[r].data[i]={date:l,value:c,rank:0,orig_index:parseInt(r)}}}for(var r in e[0].data){var s=[];for(var i in e)s[i]=e[i].data[r];s.sort((function(t,e){return e.value-t.value}));for(var u=0;u<s.length;u++)e[s[u].orig_index].data[r].rank=u}for(var r in e)for(var i in e[r].data)e[r].data[i].org=e[r].org,e[r].data[i].color=a[r%a.length];var d=[];for(var r in e){var p=e[r].data[e[r].data.length-1];d[r]={org:p.org,rank:p.rank}}d.sort((function(t,e){return t.rank-e.rank}));var f=[];for(var r in e[0].data)f[r]=e[0].data[r].date;var h={parsed_data:e,final_positions:d,colorPal:a,dates:f};return console.log(h),h}(a),console.log(s)}catch(t){console.error("Parsing error : ",t)}return i.a.createElement(u,{height:o,width:r,panelId:l,options:c,data:s})})).setPanelOptions((function(t){return t.addNumberInput({path:"linecount",name:"Number of lines",description:"Number of lines to show",defaultValue:10}).addTextInput({path:"headerText",name:"Axis Header",description:"Axis header display",defaultValue:"Axis header"})}))}])}));
//# sourceMappingURL=module.js.map