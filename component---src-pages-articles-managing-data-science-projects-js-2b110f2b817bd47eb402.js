(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(155),i=a.n(o),s=a(150);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("meta",{property:"og:url",content:"http://ollieglass.com/articles/managing-data-science-projects"}),r.a.createElement("meta",{property:"og:title",content:"Managing data science projects"}),r.a.createElement("meta",{property:"og:description",content:"How to deliver data science projects reliably and effectively."}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@ollieglass"})),r.a.createElement("h2",null,"Managing data science projects"),r.a.createElement("p",null,"Data science and machine learning projects have high expectations and high failure rates. Ideas seem promising and data scientists start experimenting, but teams struggle to follow through. Projects run on indefinitely without clear goals or deliverables, teams lose direction and momentum, important individual contributors leave. What makes these projects so difficult? How can they be delivered effectively?"),r.a.createElement("p",null,"In this piece I’ll show how I deliver a project. Projects typically take between three to twelve months, I recommend clients start small, so I'll give examples for a three-month project. I’ll describe the tasks and outcomes at each stage, how I manage common risks and challenges, and how I work with stakeholders."),r.a.createElement("h3",null,"Discovery"),r.a.createElement("p",null,"While amazing things can be done with data science, many descriptions of it are hyperbolic and don’t help you think clearly about what's possible. Involving a data scientist from the start will let you check the feasibility of ideas and get a sense of the costs, time and chance of success. A data scientist can also suggest different ideas to develop your business, or ways to approach a project that you might not have considered."),r.a.createElement("p",null,"Data science is inherently risky. Even if a similar company has shipped a similar feature, that’s no guarantee it’ll work for you or work as well. That said, some features are a natural fit for data science. Say your product lets users send emails campaigns. You have records of email send times and open rates, and users manually enter the time to send emails. You can improve their campaign outcomes with basic data-driven decision support. This would be a smart, low risk feature to try."),r.a.createElement("p",null,"Data science usually involves creating models that make predictions. Models might predict the best time to send a marketing email, or which related products to show to a user. It’s important to work out how accurate a model needs to be for a product feature to be viable, this lets you set a clear goal for the research stage. If you can build some flexibility into a feature you may be able to find ways to make it work even with less than ideal accuracy."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes:")," A shortlist of possible features, and a single feature to focus on. A sense of what the finished feature would look like if it was working well."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Discovering it’s not possible to build your feature, or that it would be prohibitively expensive."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," From a few days to a few weeks, usually a week."),r.a.createElement("h3",null,"Research"),r.a.createElement("p",null,"Research is required to work out how to create the model and meet the accuracy goal. This involves considering what the feature does, for example, predicting sale prices from photos of shoes, and finding ways to express that as a scientific or machine learning problem. Scientific problems can be tackled in different ways, you might start by shortlisting methods and considering the tradeoffs between them."),r.a.createElement("p",null,"Naturally, these methods all require data. How much data you need depends on the methods being used, with requirements ranging from tens or low hundreds to hundreds of millions of records. Having more data available will usually improve results, so if you don’t already have much data collected it can be worth finding new ways to capture it. Approaches include adding “data exhausts” to existing processes in your product, buying third party data sets, adding different but related proxy data to your own, or creating new synthetic data."),r.a.createElement("p",null,"Sometimes it can help to add more detail to data, especially if it wasn’t captured with data science or machine learning in mind. Running a data enrichment process with your team is good for building small data sets or for enrichment that requires expert knowledge. Third party services like Amazon’s Mechanical Turk or Clickworker can be used for larger volumes."),r.a.createElement("p",null,"When the data is ready and the approach is clear it’s best to start by trying a simple modelling technique and measuring the results. Starting simply lets you set a baseline to compare future research against, and means your first research communication will have less complicated ground to cover."),r.a.createElement("p",null,"Research and results must be communicated to prevent data science work from becoming opaque and detached from the wider business, and this can be challenging. Modelling techniques may be complex and hard to describe. Results may not be intuitive, instead of a single accuracy measure there may be several factors which have to be traded off against each other. These may require stakeholders to work with new concepts so they can understand and input on the decisions being made."),r.a.createElement("p",null,"Like any project, it’s can help to communicate it in different ways to different audiences. General company-wide presentations and discussions can build buy in and engagement in the project, and don’t need to go into all of the details. Sharing specifics with key stakeholders is invaluable for surfacing business insights and requirements that can guide the direction of the research."),r.a.createElement("p",null,"The scientific method involves rounds of trial and error, revision and improvement. Progress can be uneven, alternating between plateaus of testing new approaches with no apparent change followed by rapid improvements when a new method bears fruit. Over time there should be a gradual increase in accuracy and performance as the approach is being refined, but it’s important to know that there’s no guarantee that research will be able to deliver the results required in a reasonable timeframe or cost. These risks should have been raised and considered in the discovery stage."),r.a.createElement("p",null,"Ideally you'll know the minimum accuracy level you require research to achieve. When that's reached you can choose between researching further to improve accuracy or moving to production."),r.a.createElement("p",null,"It’s usually best to take on projects where you’re reasonably confident that minimum accuracy can be achieved. If you're trying something riskier and more experimental, the risks and costs must be clearly understood."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes:")," A data science methodology that produces the outputs you need at an acceptable accuracy level. You and your team understand the general approach and have agreed any trade-offs."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Not achieving a minimum accuracy goal within the research time or budget. Discovering an approach that can’t be scaled to a production system."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," From a few weeks to a few months, usually a month."),r.a.createElement("h3",null,"Production"),r.a.createElement("p",null,"We’re ready to move the data preparation and modelling techniques into production. This is the most straightforward part of the process. Software engineering is not trivial, but the work of building and shipping features is not unique to data science. Most of the challenges you meet here have well known solutions, including working with large amounts of data, meeting low latency requirements, or managing complex data transformations."),r.a.createElement("p",null,"That said, there’s no single common approach for moving data science from research into production, nor is there a widely adopted production framework. Ruby on Rails transformed web development and became something close to an industry standard, React and Redux are doing something similar for front-end development. But data science only has some proprietary third-party services, nothing standard or open source."),r.a.createElement("p",null,"Most projects require similar technical components: some kind of extract, transform and load (ETL) data pipeline that moves data from your product to a data science service and prepares it for use, model building and validation, deployment of models to a live system and ongoing monitoring. To prevent them from becoming tangled or overly complicated, they should be carefully designed and integrated with your product and deployment environment."),r.a.createElement("p",null,"There are excellent libraries like Keras, Tensorflow, Pandas, scikit-learn and NumPy for the most common and critical tasks, used and sponsored by companies like Bloomberg, Spotify and Booking.com. Dedicated “big data” tools like Hadoop and Spark are not needed on most projects. Instead, AWS and Google Cloud provide excellent services for working with data at scale and are straightforward to integrate with most existing technology stacks. Your engineering team can ensure services are chosen that work well with your other systems."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes"),": A data product feature deployed to production."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Usual engineering risks of time and budget overruns. Producing complex software that’s difficult to maintain."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," About a month."),r.a.createElement("h3",null,"Operation"),r.a.createElement("p",null,"It’s important to monitor that features are operating properly in production. Uptime and general status of a data science feature can usually be overseen with the monitoring services used in other parts of a technology stack. To ensure a fast and straightforward technical handover, involve the engineers in the design and build of the system, and DevOps or SRE teams in the design and operation of monitoring."),r.a.createElement("p",null,"To be certain that a system is working well in a live setting, it might necessary to monitor model accuracy on live data. If performance goes outside of an expected range, you may want alerts and a fallback system to kick in."),r.a.createElement("p",null,"Some machine learning systems will require updating when the underlying data changes. A process for monitoring and updating models can be incorporated into the design, build and ongoing operation of the system. It may be possible to automatically retrain models with only minimal oversight or intervention, and this task can be handed over to a general developer or analyst. A dedicated data scientist may be necessary to monitor and adjust more complex or bespoke models."),r.a.createElement("p",null,"It’s vital that the new feature is understood and adopted by its stakeholders including product users and internal teams. Bringing data science into a company is a transformational process, and new ways of working and thinking have to take root for it to be successful. The shared understanding and ownership built by involving the wider team in the research efforts will pay dividends here."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes:")," Ownership is transferred to in house technical team. Adoption of the new feature and any new ways of working it requires."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Failing to maintain the feature or make full use of it. Organizational rejection of the new feature."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," At least a week dedicated handover time, but also ongoing throughout the project, especially in the earlier stages."),r.a.createElement("h3",null,"Summing up"),r.a.createElement("p",null,"Projects can seem daunting at first, but dividing work into stages with clear goals and processes will make it easier to manage. Discovery and research stages are all about finding good ideas to try and learning what it’s possible to achieve. If data science isn’t going to work for you, find out as fast as possible, before committing to building and managing new technology."),r.a.createElement("p",null,"If research shows you have a viable feature, then the key tasks become making decisions with the team about the best trade-offs and getting it to an optimal level of performance. Ongoing data science work may be required to support it, but much of the delivery and ongoing operational work is similar to any other engineering project."))}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(146),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(147),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(155),l=a.n(s),c=a(148),d=(a(151),a(153),function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"0.5rem"}},r.a.createElement(c.Link,{to:e.to},e.children))}),u=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:850,padding:"1.25rem 1rem"}},r.a.createElement(l.a,{title:"Ollie Glass - data science, machine learning & data strategy"},r.a.createElement("meta",{name:"description",content:"Contracting and consulting data scientist. I help companies understand data science and machine learning, form data strategies, and design and build data products."}),r.a.createElement("meta",{name:"google-site-verification",content:"rvZZQM9_PSENuyEeo4gS4Iu972qssTQnifk73ePR06o"}),r.a.createElement("script",{type:"text/javascript"},"\n          window.smartlook||(function(d) {\n          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];\n          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';\n          c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);\n          })(document);\n          smartlook('init', '22317595d614e19e1a73959d93c5ea3db08fdc0b');\n      ")),r.a.createElement("header",{style:{marginBottom:"1rem"}},r.a.createElement(c.Link,{to:"/",style:{textDecoration:"none"}},r.a.createElement("h1",{style:{display:"inline"}},"Ollie Glass")),r.a.createElement("ul",{style:{listStyle:"none",paddingLeft:0,marginLeft:0,marginBottom:0,marginTop:10}},r.a.createElement(d,{to:"/"},"Home"),r.a.createElement(d,{to:"/services/"},"Services"),r.a.createElement(d,{to:"/case-studies/"},"Case studies"),r.a.createElement(d,{to:"/articles/"},"Articles"))),t)};u.propTypes={children:i.a.node.isRequired},t.a=u},151:function(e,t,a){},153:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-articles-managing-data-science-projects-js-2b110f2b817bd47eb402.js.map