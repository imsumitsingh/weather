(this["webpackJsonpweather-1.0"]=this["webpackJsonpweather-1.0"]||[]).push([[0],{19:function(e,t,i){},20:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),c=i(14),a=i.n(c),r=(i(19),i(3)),o=(i(20),i(5)),d=i.n(o),l=i(0);var u=function(){var e=Object(s.useState)({temp:"",humidity:"",wind:"",desc:"",sunset:"",sunrise:"",feels_like:"",city:"",visibility:"",country:"",icon:""}),t=Object(r.a)(e,2),i=t[0],n=t[1],c=Object(s.useState)((new Date).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})),a=Object(r.a)(c,2),o=a[0],u=a[1],j=Object(s.useState)((new Date).toLocaleDateString("en-IN",{month:"short",year:"numeric",day:"numeric",weekday:"long"})),h=Object(r.a)(j,2),b=h[0],m=h[1],p=Object(s.useState)(""),f=Object(r.a)(p,2),g=(f[0],f[1]),O=Object(s.useState)(""),x=Object(r.a)(O,2),y=(x[0],x[1]);return setInterval((function(){var e=(new Date).toLocaleDateString("en-IN",{month:"short",year:"numeric",day:"numeric",weekday:"long"}),t=(new Date).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});u(t),m(e)}),1e3),Object(s.useEffect)((function(){window.navigator.geolocation.getCurrentPosition((function(e){y(e.coords.latitude),g(e.coords.longitude)})),d.a.get("https://api.openweathermap.org/data/2.5/weather?q=Pune,IN&units=metric&appid=6e02389f2b706e7446912cdf8b9ed96d").then((function(e){var t=e.data,i=t.sys.sunset,s=t.sys.sunrise,c={hour:"2-digit",minute:"2-digit",hour12:!1},a=new Date(1e3*i).toLocaleTimeString("en-IN",c),r=new Date(1e3*s).toLocaleTimeString("en-IN",c);n({temp:t.main.temp,humidity:t.main.humidity,wind:t.wind.speed,desc:t.weather[0].description,sunset:a,sunrise:r,feels_like:t.main.feels_like,city:t.name,visibility:t.visibility,country:t.sys.country,icon:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png"})}))}),[]),console.log(i),Object(l.jsx)("div",{className:"main",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("h2",{class:"city",children:[Object(l.jsx)("i",{className:"fa fa-map-marker"})," ",Object(l.jsxs)("span",{id:"location",children:[i.city,",",i.country]})]}),Object(l.jsx)("span",{class:"date",children:b}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{class:"time",children:o}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("span",{id:"temp",children:Math.ceil(i.temp)}),Object(l.jsx)("sup",{children:"o"}),"C"]}),Object(l.jsx)("img",{id:"icon",src:i.icon}),Object(l.jsx)("h5",{id:"weather",children:i.desc}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("span",{class:"text",children:[Object(l.jsx)("i",{class:"fas fa-fog"}),"Visibility:",i.visibility/1e3," KM"]}),"\xa0|\xa0",Object(l.jsxs)("span",{class:"text",children:[Object(l.jsx)("i",{class:"fas fa-wind"}),"Wind:",i.wind]}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{class:"text",children:[Object(l.jsx)("i",{class:"fas fa-sunrise"}),"Sunrise:",i.sunrise.toUpperCase()]}),"\xa0|\xa0",Object(l.jsxs)("span",{class:"text",children:[Object(l.jsx)("i",{class:"fas fa-sunset"}),"Sunrset:",i.sunset.toUpperCase()]}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{class:"text",children:["Feels Like:",i.feels_like]}),"\xa0|\xa0",Object(l.jsxs)("span",{class:"text",children:[Object(l.jsx)("i",{class:"fas fa-dewpoint"})," Humidity:",i.humidity,"%"]})]}),Object(l.jsx)("button",{onClick:function(){d.a.get("https://api.openweathermap.org/data/2.5/weather?q=Patna,IN&units=metric&appid=6e02389f2b706e7446912cdf8b9ed96d").then((function(e){var t=e.data,i=t.sys.sunset,s=t.sys.sunrise,c={hour:"2-digit",minute:"2-digit",hour12:!1},a=new Date(1e3*i).toLocaleTimeString("en-IN",c),r=new Date(1e3*s).toLocaleTimeString("en-IN",c);n({temp:t.main.temp,humidity:t.main.humidity,wind:t.wind.speed,desc:t.weather[0].description,sunset:a,sunrise:r,feels_like:t.main.feels_like,city:t.name,visibility:t.visibility,country:t.sys.country,icon:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png"})}))},className:"refresh",children:Object(l.jsx)("i",{className:"far fa-refresh"})})]})})})},j=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),s(e),n(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()}},[[40,1,2]]]);
//# sourceMappingURL=main.584489fe.chunk.js.map