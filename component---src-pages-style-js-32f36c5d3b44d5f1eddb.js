(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149),c=n(151);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Header 1"),r.a.createElement("h2",null,"Header 2"),r.a.createElement("h3",null,"Header 3"),r.a.createElement("h4",null,"Header 4"),r.a.createElement("p",null,"Paragraph"),r.a.createElement("p",null,"Paragraph ",r.a.createElement("strong",null,"strong")),r.a.createElement("p",null,"Paragraph ",r.a.createElement(i.Link,null,"link")))}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(147),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(25);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(148),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var m=n(35);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(49),o=n(2),s=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=n(156),o=n.n(l),s=n(149),u=(n(152),n(154),function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"0.5rem"}},r.a.createElement(s.Link,{to:e.to},e.children))}),d=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:850,padding:"1.25rem 1rem"}},r.a.createElement(o.a,{title:"Ollie Glass - data science, machine learning & data strategy"},r.a.createElement("meta",{name:"description",content:"Contracting and consulting data scientist. I help companies understand data science and machine learning, form data strategies, and design and build data products."}),r.a.createElement("meta",{name:"google-site-verification",content:"rvZZQM9_PSENuyEeo4gS4Iu972qssTQnifk73ePR06o"}),r.a.createElement("script",{type:"text/javascript"},"\n          window.smartlook||(function(d) {\n          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];\n          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';\n          c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);\n          })(document);\n          smartlook('init', '22317595d614e19e1a73959d93c5ea3db08fdc0b');\n      "),r.a.createElement("html",{lang:"en"})),r.a.createElement("header",{style:{marginBottom:"1rem"}},r.a.createElement(s.Link,{to:"/",style:{textDecoration:"none",color:"#345678"}},r.a.createElement("h1",{style:{display:"inline"}},"Ollie Glass")),r.a.createElement("ul",{style:{listStyle:"none",paddingLeft:0,marginLeft:0,marginBottom:0,marginTop:10}},r.a.createElement(u,{to:"/"},"Home"),r.a.createElement(u,{to:"/services/"},"Services"),r.a.createElement(u,{to:"/case-studies/"},"Case studies"),r.a.createElement(u,{to:"/articles/"},"Articles"))),t)};d.propTypes={children:c.a.node.isRequired},t.a=d},152:function(e,t,n){},154:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-style-js-32f36c5d3b44d5f1eddb.js.map