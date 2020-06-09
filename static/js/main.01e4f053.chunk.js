(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{202:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(67),o=t.n(c),l=t(68),i=t(69),s=t(79),m=t(78),A=(t(86),t(215)),d=t(216),h=t(217),u=t(218),E=(t(87),t(11)),v=t.n(E),f=function(e){for(var a,t,n,c=e.data1,o=c.confirmed,l=c.recovered,i=c.deaths,s=c.lastUpdate,m=e.data2,E=[],f=[],p=[],b=0,g=Object.keys(m);b<g.length;b++){var C=g[b];E.push(parseInt(m[C].Confirmed)),f.push(parseInt(m[C].Deaths)),p.push(parseInt(m[C].Recovered))}return a=E[E.length-1]-E[E.length-2],t=f[f.length-1]-f[f.length-2],n=p[p.length-1]-p[p.length-2],a?r.a.createElement("div",{className:"container"},r.a.createElement(A.a,{className:"paper",elevation:3},r.a.createElement(d.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Total Infected"),r.a.createElement(u.a,{variant:"h5",className:"infected-text"},r.a.createElement(v.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(u.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(u.a,{variant:"body2"},"Number of total cases of COVID-19"))),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Deaths"),r.a.createElement(u.a,{variant:"h5",className:"deaths-text"},r.a.createElement(v.a,{start:0,end:i.value,duration:2.5,separator:","})),r.a.createElement(u.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(u.a,{variant:"body2"},"Total deaths from COVID-19"))),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Recovered"),r.a.createElement(u.a,{variant:"h5",className:"recovered-text"},r.a.createElement(v.a,{start:0,end:l.value,duration:2.5,separator:","})),r.a.createElement(u.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(u.a,{variant:"body2"},"Total recovery from COVID-19"))),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"New cases"),r.a.createElement(u.a,{variant:"h5",className:"infected-text"},"+",r.a.createElement(v.a,{start:0,end:a,duration:2.5,separator:","})),r.a.createElement(u.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(u.a,{variant:"body2"},"Number of active cases in 24 hours"))),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Deaths"),r.a.createElement(u.a,{variant:"h5",className:"deaths-text"},"+",r.a.createElement(v.a,{start:0,end:t,duration:2.5,separator:","})),r.a.createElement(u.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(u.a,{variant:"body2"},"Total deaths in last 24 hours"))),r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"textPrimary",variant:"h6",gutterBottom:!0},"Recovered"),r.a.createElement(u.a,{variant:"h5",className:"recovered-text"},"+",r.a.createElement(v.a,{start:0,end:n,duration:2.5,separator:","})),r.a.createElement(u.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(u.a,{variant:"body2"},"Recovery in last 24 hours")))))):"Loading..."},p=t(29),b=t(26),g=t(27),C=(t(58),t(28)),I=t.n(C),Q=function(){var e=[],a=[],t=[],c=[];I.a.get("https://api.covid19api.com/dayone/country/bangladesh").then((function(n){for(var r=0,o=Object.keys(n);r<o.length;r++){var l=o[r];if("data"===l){var i,m=Object(b.a)(n[l]);try{for(m.s();!(i=m.n()).done;){var A=i.value;e.push(parseInt(A.Confirmed)),t.push(parseInt(A.Deaths)),c.push(parseInt(A.Recovered)),a.push(new Date(A.Date).toDateString())}}catch(d){m.e(d)}finally{m.f()}}}e=e.slice(e.length-14),t=t.slice(t.length-14),c=c.slice(c.length-14),a=a.slice(a.length-14),s({labels:a,datasets:[{label:"confirmed",data:e,borderColor:"#5a809e"},{label:"deaths",data:t,borderColor:"#f57d7c"},{label:"recovered",data:c,borderColor:"#6cc2bd"}]})})).catch((function(e){console.log(e)}));var o=Object(n.useState)({}),l=Object(p.a)(o,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"chart"},r.a.createElement(g.b,{data:i,options:{responsive:!0}})))},y=function(){var e=[],a=[],t=[];I.a.get("https://cors-anywhere.herokuapp.com/https://covid19bangladesh.pythonanywhere.com/dhaka").then((function(n){var r,c=Object(b.a)(n.data);try{for(c.s();!(r=c.n()).done;){var o=r.value;e.push(parseInt(o.confirmed)),a.push(o.name),t.push("rgba(90,187,181)"),t.push("rgba(144,209,205)")}}catch(l){c.e(l)}finally{c.f()}e=e.slice(0,30),a=a.slice(0,30),t=t.slice(0,30),i({labels:a,datasets:[{label:"Confirmed Cases",data:e,backgroundColor:t}]})})).catch((function(e){console.log(e)}));var c=Object(n.useState)({}),o=Object(p.a)(c,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"chart"},r.a.createElement(g.a,{data:l})))},x=t(75),D=t.n(x),w=t(76),S=t.n(w),N=t(77),O=t.n(N),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data1:{},data2:{}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid19.mathdro.id/api/countries/bangladesh").then((function(e){return e.json()})).then((function(a){return e.setState({data1:a})})),fetch("https://api.covid19api.com/dayone/country/bangladesh").then((function(e){return e.json()})).then((function(a){return e.setState({data2:a})}))}},{key:"render",value:function(){var e=this.state,a=e.data1,t=e.data2;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"image",src:D.a,alt:"CoronaImage"})),r.a.createElement(f,{data1:a,data2:t}),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"image3",src:O.a,alt:"CoronaImage"})),r.a.createElement(Q,null),r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"image2",src:S.a,alt:"CoronaImage"})),r.a.createElement(y,null))}}]),t}(n.Component),B=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),B)},58:function(e,a,t){},75:function(e,a,t){e.exports=t.p+"static/media/corona.a2a26eda.png"},76:function(e,a){e.exports="data:image/png;base64,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"},77:function(e,a){e.exports="data:image/png;base64,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"},81:function(e,a,t){e.exports=t(202)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.01e4f053.chunk.js.map