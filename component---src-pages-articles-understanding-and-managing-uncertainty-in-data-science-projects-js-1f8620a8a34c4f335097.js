(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),o=a.n(i),s=a(168),l=a.n(s),c=a(150);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("meta",{property:"og:url",content:"http://ollieglass.com/articles/understanding-and-managing-uncertainty-in-data-science-projects"}),r.a.createElement("meta",{property:"og:title",content:"Understanding and managing uncertainty in data science projects"}),r.a.createElement("meta",{property:"og:description",content:"How to understand and manage uncertainty in data science projects"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@ollieglass"})),r.a.createElement("h2",null,"Understanding and managing uncertainty in data science projects"),r.a.createElement("p",null,"Most data science projects involve creating predictive or explanatory models. Model building usually requires several rounds of researching approaches and techniques, collecting and processing data, and testing different model architectures and parameters. The accuracy and effectiveness of a model generally increases with trial, error and improvement, but it can’t be known in advance how long this research will take or the results it will bring."),r.a.createElement("p",null,"How can you manage this uncertainty when you’re leading a project?"),r.a.createElement("p",null,"Some teams limit research to a fixed amount of time. This is risky, research could be stopped and considered a failure when breakthroughs were only days away. Giving machine learning projects no deadline also creates problems. I’ve seen projects run on for months without clear outputs or stopping criteria, draining resources, morale and appetite for machine learning in organisations."),r.a.createElement("p",null,"In this piece I’ll show two approaches I use to estimate research time and evaluate outcomes. I’ll explain how I communicate this to clients and build a shared understanding about time, costs and and outcomes."),r.a.createElement("h3",null,"Model accuracy and business value"),r.a.createElement("p",null,"Consider a new product feature that requires machine learning. What’s the minimum level of accuracy required from the ML model for the feature to satisfy users, and how much value does the it create for them and the business? If model accuracy increases above this minimum, does value keep increasing with it?"),r.a.createElement("p",null,"Imagine building a model to predict a quality score for images. These quality scores will be used in an image search engine, enabling it to show better images first and improve the search experience for users."),r.a.createElement("p",null,"The search engine by itself has no sense of image quality, so before the model has been created its results are effectively in random order. Random is therefore the minimum accuracy level any model has to beat to make an impact - not always an easy or achievable target!"),r.a.createElement("p",null,"If a model improves beyond random, search results and user experience will become noticeably better. But at higher levels of accuracy when users are already getting good results and finding what they need most of the time, further improvements to the model will have less impact."),r.a.createElement("p",null,"The value of different accuracy levels could be estimated and described like this:"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Model accuracy"),r.a.createElement("td",null,"Value")),r.a.createElement("tr",null,r.a.createElement("td",null,"<50%"),r.a.createElement("td",null,"No value, no better than random. Doesn’t improve search results.")),r.a.createElement("tr",null,r.a.createElement("td",null,"51-80%"),r.a.createElement("td",null,"All improvements are valuable and have a clear impact on search quality.")),r.a.createElement("tr",null,r.a.createElement("td",null,"81-90%"),r.a.createElement("td",null,"Most results are already well ordered, most users are clicking on items in the first page of results. Further improvements are less important.")),r.a.createElement("tr",null,r.a.createElement("td",null,">91%"),r.a.createElement("td",null,"Most all users click one of the top 10 results, almost no value in any further improvements."))),r.a.createElement("p",null,"I like to discuss and draw up this accuracy-value table with clients. Many people assume that anything less than a very accurate system isn’t valuable, this exercise lets me unpack and examine the assumptions behind that. If you think creatively, you can often find ways to make even quite low accuracy models valuable, perhaps by using them to power a different feature, or using them on a different data set."),r.a.createElement("h3",null,"Estimating the cost of research"),r.a.createElement("p",null,"How much work is required to reach the minimum accuracy level and start creating value, or to go beyond that? This can’t be known for certain in advance. You can look at the results others have achieved, and sometimes see the resources that were spent to achieve them, then use this as a rough estimate. But your requirements will depend on your situation - what you want to model, how complex it is and the approach you’re taking."),r.a.createElement("p",null,"As a very rough guide, fifty to a thousand records will let you get started with many machine learning techniques, and anywhere from two weeks to a month is often enough to show if reaching minimum accuracy is possible. Adding more time and data usually helps, up to a point."),r.a.createElement("p",null,"As work progresses on building a model, diagnostic tests (like learning curves) will give an indication of how valuable more work or data will be. You’ll also know if you have many approaches left to try, or are approaching the state of the art and running out of ideas."),r.a.createElement("p",null,"Consider this curve:"),r.a.createElement("img",{src:l.a,alt:"Research vs results"}),r.a.createElement("p",null,"Starting from 1 you collect some data, build a model and see results at 2. It can be especially complicated to understand the problem and find ways to fit it into machine learning terms, so the journey from 1 to 2 can be particularly difficult."),r.a.createElement("p",null,"Progress becomes easier as you keep researching and building understanding, developing a set of new approaches to try and working through them, climbing the slope at 3. 4 is the point of diminishing returns. As the obvious lines of enquiry dry up, new techniques become harder to find, can take longer to apply to your project and to work through. At 5 you’ve exhausted the capabilities of your research, perhaps reaching the state of the art, and can go no further."),r.a.createElement("p",null,"The curve is a simple rule of thumb, progress is never this clear or smooth. It’s not always apparent when you’ve reached point five, you may be at a temporary plateau. Changing the approach, modelling technique or how the data is prepared could bring unexpected breakthroughs. But whatever the specific twists and turns of the research look like, in the long term I find many projects follow this pattern."),r.a.createElement("p",null,"As a data scientist, even explaining that new developments are coming more quickly or slowly than before can be helpful to others. Giving an estimate of the time, cost and progress you expect from a new round of research gives some visibility and legibility to the process, helping build shared understanding."),r.a.createElement("h3",null,"Using these ideas in practice"),r.a.createElement("p",null,"Now we have an understanding of the value of research and a way to estimate the time and cost of progress. This clears up much of the uncertainty about managing research that we started with. We’ve also split the research into two stages: reaching minimum accuracy and improving beyond that."),r.a.createElement("p",null,"Minimum accuracy is a crucial milestone. If it’s reached, the research can be considered a success. It becomes possible for the model to deliver value even if no further improvements are made, and so the wider project has been substantially derisked."),r.a.createElement("p",null,"Part of my pre-sale work includes forming the best estimate I can of how likely it will be to achieve this and how long I expect it to take. I draw on the machine learning literature, case studies, articles and blog posts, other data scientists in my network and my past experience. I share my findings and estimates with clients, if the risk is acceptable to everyone we’ll start a project."),r.a.createElement("p",null,"After reaching minimum accuracy, using the research-results and the accuracy-value table lets me estimate the work for the next improvement and the value it will bring. I share a high level summary and recommendations with clients, and can go into specifics to let them understand the options and make informed decisions about how much project time to dedicate to research or other areas."),r.a.createElement("h3",null,"Summing up"),r.a.createElement("p",null,"Clients are looking for product and business outcomes, not just model accuracy. Data scientists need to consider how research time and model accuracy makes different outcomes possible, and explain the relationship between them."),r.a.createElement("p",null,"Many projects can be delivered successfully with relatively simple methods and modest levels of accuracy. You rarely need to achieve state of the art accuracy levels or use cutting edge modelling techniques. Further accuracy may be nice to have, but is rarely essential."),r.a.createElement("p",null,"The work of building and communicating this understanding is collaborative, but the data scientist must lead it. Popular understanding of data science is still very low, it’s not reasonable to expect clients to know that rapidly delivering a low accuracy models is often possible, and a better fit for their needs, budgets and timelines."))}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(146),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(147),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(155),l=a.n(s),c=a(148),u=(a(151),a(153),function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"0.5rem"}},r.a.createElement(c.Link,{to:e.to},e.children))}),d=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:850,padding:"1.25rem 1rem"}},r.a.createElement(l.a,{title:"Ollie Glass - data science, machine learning & data strategy"},r.a.createElement("meta",{name:"description",content:"Contracting and consulting data scientist. I help companies understand data science and machine learning, form data strategies, and design and build data products."}),r.a.createElement("meta",{name:"google-site-verification",content:"rvZZQM9_PSENuyEeo4gS4Iu972qssTQnifk73ePR06o"}),r.a.createElement("script",{type:"text/javascript"},"\n          window.smartlook||(function(d) {\n          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];\n          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';\n          c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);\n          })(document);\n          smartlook('init', '22317595d614e19e1a73959d93c5ea3db08fdc0b');\n      ")),r.a.createElement("header",{style:{marginBottom:"1rem"}},r.a.createElement(c.Link,{to:"/",style:{textDecoration:"none"}},r.a.createElement("h1",{style:{display:"inline"}},"Ollie Glass")),r.a.createElement("ul",{style:{listStyle:"none",paddingLeft:0,marginLeft:0,marginBottom:0,marginTop:10}},r.a.createElement(u,{to:"/"},"Home"),r.a.createElement(u,{to:"/services/"},"Services"),r.a.createElement(u,{to:"/case-studies/"},"Case studies"),r.a.createElement(u,{to:"/articles/"},"Articles"))),t)};d.propTypes={children:o.a.node.isRequired},t.a=d},151:function(e,t,a){},153:function(e,t,a){},168:function(e,t,a){e.exports=a.p+"static/data-science-research-vs-results-57042610d9858910289138cc4fcf9fab.png"}}]);
//# sourceMappingURL=component---src-pages-articles-understanding-and-managing-uncertainty-in-data-science-projects-js-1f8620a8a34c4f335097.js.map