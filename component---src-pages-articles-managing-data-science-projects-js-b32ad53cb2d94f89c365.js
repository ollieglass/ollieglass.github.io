(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(156),i=a.n(o),s=a(149),l=a(151);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement("meta",{property:"og:url",content:"https://ollieglass.com/articles/managing-data-science-projects"}),r.a.createElement("meta",{property:"og:title",content:"Managing data science projects"}),r.a.createElement("meta",{property:"og:description",content:"How to deliver data science projects reliably and effectively."}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@ollieglass"})),r.a.createElement("h2",null,"Managing data science projects"),r.a.createElement("h5",null,"20th June 2018"),r.a.createElement("p",null,"Data science and machine learning projects often have high expectations and high failure rates. Ideas seem promising and data scientists start experimenting but struggle to follow through. Projects run on indefinitely without clear goals or deliverables, teams lose direction and momentum, important individual contributors leave. What makes these projects so difficult? How can they be delivered effectively?"),r.a.createElement("p",null,"In this piece I’ll show how I introduce data science to a company and deliver a project. My projects typically involve creating new features for existing products. I recommend clients start small, so I'll give examples for a three-month project. I’ll describe the tasks and outcomes at each stage, how I manage common risks and challenges, and how I work with stakeholders."),r.a.createElement("h3",null,"Scoping data projects"),r.a.createElement("p",null,"While amazing things can be done with data science, many descriptions of it are hyperbolic and don’t help you think clearly about what's possible. Involving a data scientist from the start will let you check the feasibility of ideas and get a sense of the costs, time and chance of success. A data scientist can also suggest different ways to approach a project that you might not have considered."),r.a.createElement("p",null,"Some features are a natural fit for data science. Consider a product that lets users send emails campaigns. Users enter times and dates to schedule email sends, and the product keeps records of sent emails and open rates. Using previous open rates to predict the best send times for new emails would make a great feature."),r.a.createElement("p",null,"Creating predictive systems is inherently risky. An experienced data scientist can use experience, industry benchmarks and a survey of your data to estimate what’s possible. How much data is needed, how long the work will take and if it will be successful cannot be known for certain, but will become clearer as the research progresses. It’s essential to communicate the risks and possible costs of work clearly so organisations can make informed decisions and set their expectations accordingly."),r.a.createElement("p",null,"To reduce risk, try to reduce the complexity of the research required. Review the project’s goals with a data scientist and consider compromises or different ways of creating similar value for the end user. In our email sending example we might hope to build a feature that advises on the best time to send, but knowing that even advising on a morning or afternoon send would be valuable, a data scientist can suggest simpler techniques are tried first."),r.a.createElement("p",null,"Well defined projects are capital efficient. Avoid researching more than is necessary by considering the minimum research required to create value before you begin. As a benchmark, consider what users are currently doing without data science to support them. Email send times may be effectively random. Even a marginal improvement that brings a 5% increase in open rates may be valuable and make a project attractive. Further increases can come in later projects."),r.a.createElement("p",null,"To get the best from a project, ensure other parts of the business are involved. Details about the feature should be included in sales and marketing collateral. Customer service may need training on how to answer questions about it, and it could create changes in the wider product. Your product’s design, the work of other teams who touch the feature, and even business strategy may need to be reviewed to capture the full value of data science."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes:")," A shortlist of possible features and a single feature to focus on. An understanding of what research would need to deliver for the feature to be successful."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Discovering it’s not possible to build your feature or that it’s higher risk than you can bear."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," About a week."),r.a.createElement("h3",null,"Conducting research"),r.a.createElement("h4",null,"Research prerequisites "),r.a.createElement("p",null,"Working out how to create a system that meets the accuracy goal takes research. This involves considering what the feature does and finding ways to express it as a scientific or machine learning problem. Predictive modelling techniques must be selected and adapted to the problem being solved. Data has to be gathered, refined and prepared. Scientific problems and data preparation can be tackled in different ways, so you might start by shortlisting methods and considering the tradeoffs between them."),r.a.createElement("p",null,"How much data you will need depends on your methods, with requirements ranging from tens to hundreds of millions of records. Having more data available will usually improve results, so if you don’t already have much data collected it might be worth finding new ways to capture it. Approaches include adding “data exhausts” to existing processes in your product, buying third party data sets, adding different but related proxy data to your own or creating new synthetic data."),r.a.createElement("p",null,"If your data wasn’t captured with data science or machine learning in mind it can help to add detail to it. Running a data enrichment process with your team is good for small data sets or for enrichment that requires expert knowledge. Third party services like Amazon’s Mechanical Turk or Clickworker can be used for larger volumes."),r.a.createElement("p",null,"When the data is ready and the approach is clear it’s best to start by trying a simple technique and measuring the results. Starting with a simple model lets you set a baseline to compare future results against, and means your first research communication will have less complicated ground to cover."),r.a.createElement("h4",null,"Communicating research"),r.a.createElement("p",null,"Research must be communicated to prevent data science from becoming opaque and detached from the wider business. Scientific communication is hard. Data science techniques can be complex and difficult to describe. Raw data and outcomes of experiments may be unintuitive. Developing a shared understanding of research and results, their meaning and consequences for the project takes time and collaboration."),r.a.createElement("p",null,"Forming a research council with key stakeholders is a great way to do this. This group can review work in progress, clarify requirements and outcomes, and ensure the project stays focused on the most important problems. Involving stakeholders from the start will build a sense of inclusion and ownership, and ensure that their expert knowledge is not overlooked."),r.a.createElement("p",null,"The council can also think about the technical details of the work. It’s particularly important that the group understands how the project’s accuracy is measured and how it will be reported. Instead of a single measure there may be several factors which have to be traded off against each other. This may require departments to understand how the scientific problem is being formulated and agree any compromises between themselves."),r.a.createElement("p",null,"Presenting at an all-hands meeting lets you introduce the project to the wider team. Sharing the goals and outlining the approach, connecting it to the business’ vision and strategy, and perhaps giving a demo are more appropriate than technical details here. A question and answer session allows the team to share concerns and build trust in the project."),r.a.createElement("h4",null,"Research progress"),r.a.createElement("p",null,"Conducting research involves rounds of trial and error, revision and improvement. Progress can be uneven, alternating between plateaus of testing new approaches with no apparent change followed by rapid improvements when a new method bears fruit. Over time there should be a gradual increase in accuracy and performance as an approach is refined. When you reach the minimum accuracy level set in the planning stage, your project is de-risked. From here you can choose between improving accuracy or moving on to production."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes:")," A data science methodology that produces the outputs you need at an acceptable accuracy level. You and your team understand the general approach and have agreed any trade-offs."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Not meeting your accuracy goal within the research time or budget. "),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," About a month."),r.a.createElement("h3",null,"From research to production"),r.a.createElement("p",null,"Moving the data preparation and modelling techniques into production is the most straightforward part of the process. The challenges here usual have well known solutions, including working with large amounts of data, meeting low latency requirements, or managing complex data transformations."),r.a.createElement("p",null,"That said, there’s no common approach for moving data science from research into production, nor is there a widely adopted production framework. Ruby on Rails transformed web development and became something close to an industry standard. React and Redux are doing something similar for front-end development. But data science only has some proprietary third-party services like Amazon Sagemaker, nothing standard or completely open source."),r.a.createElement("p",null,"Most projects use similar components. Almost all start with an extract, transform and load (ETL) pipeline that collects data from different parts of your business and assembles it in a dedicated database. The data is enriched and prepared so it can be used to train predictive models. If models are to be updated when new data comes in, a dashboard and alert system can monitor their performance and warn if their accuracy goes out of range."),r.a.createElement("p",null,"There are many software tools and services to support building and deploying data products now. Companies offer ETL, data labelling and predictive model building as managed services. The Python language has an excellent range of libraries for most common data science and machine learning tasks. Conventional databases like Postgres are fine for most projects, dedicated “big data” software tools like Hadoop and Spark are rarely needed in practice. All of these are options are available on AWS, Google Cloud and Azure cloud services. Unless you need something particularly novel or cutting edge, finding software and services should not be a problem."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes:")," A data product deployed to production."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Normal engineering risks of time and budget overruns."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," About a month."),r.a.createElement("h3",null,"Ongoing operation"),r.a.createElement("p",null,"It’s important to monitor that features are operating properly in production. Uptime and general status of a data science feature can usually be overseen with the monitoring services used in other parts of a technology stack. Involve engineers in the design and build of the system, and DevOps or SRE teams in the design and operation of monitoring, to ensure a fast and straightforward technical handover."),r.a.createElement("p",null,"To be certain that a system is working well in a live setting it might be necessary to monitor model accuracy on live data. If performance goes outside of an expected range you may want alerts and a fallback system to kick in."),r.a.createElement("p",null,"Some machine learning systems will require updating when the underlying data changes. A process for monitoring and updating models can be incorporated into the design, build and ongoing operation of the system. It may be possible to automatically retrain models with only minimal oversight or intervention, and this task can be handed over to a general developer or analyst. A dedicated data scientist may be necessary to monitor and adjust more complex or bespoke models."),r.a.createElement("p",null,"It’s vital that the new feature is understood and adopted by its stakeholders including product users and internal teams. Bringing data science into a company is a transformational process, and new ways of working and thinking have to take root for it to be successful. The shared understanding and ownership built by involving the wider team in the research efforts will pay dividends here."),r.a.createElement("p",null,r.a.createElement("strong",null,"Outcomes: "),"Ownership is transferred to in-house technical team. Adoption of the new feature and any new ways of working it requires."),r.a.createElement("p",null,r.a.createElement("strong",null,"Risks:")," Failing to maintain the feature or make full use of it. Organizational rejection of the new feature."),r.a.createElement("p",null,r.a.createElement("strong",null,"Time:")," At least a week dedicated handover time, but also ongoing throughout the project, especially in the earlier stages."),r.a.createElement("h3",null,"In conclusion"),r.a.createElement("p",null,"Projects can seem daunting at first, but dividing work into stages with clear goals and processes will make it easier to manage. Discovery and research stages are all about finding good ideas to try and learning what can be achieved. If data science can’t produce the results you need, find out quickly before committing to building and managing new technology."),r.a.createElement("p",null,"If research shows you have a viable feature then the key tasks become making decisions with the team about the best trade-offs and getting it to an optimal level of performance. Ongoing data science support may be required but much of the delivery and operation is similar to any other engineering project."),r.a.createElement("h3",null,"Further reading"),r.a.createElement("p",null,"Return to the introductory piece, ",r.a.createElement(s.Link,{to:"/articles"},"data science today")),r.a.createElement("p",null,"Read about ",r.a.createElement(s.Link,{to:"/articles/understanding-and-managing-uncertainty-in-data-science-projects"},"understanding and managing uncertainty in data science projects"),"."))}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(147),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(148),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(156),l=a.n(s),c=a(149),d=(a(152),a(154),function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"0.5rem"}},r.a.createElement(c.Link,{to:e.to},e.children))}),u=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",maxWidth:850,padding:"1.25rem 1rem"}},r.a.createElement(l.a,{title:"Ollie Glass - data science, machine learning & data strategy"},r.a.createElement("meta",{name:"description",content:"Contracting and consulting data scientist. I help companies understand data science and machine learning, form data strategies, and design and build data products."}),r.a.createElement("meta",{name:"google-site-verification",content:"rvZZQM9_PSENuyEeo4gS4Iu972qssTQnifk73ePR06o"}),r.a.createElement("script",{type:"text/javascript"},"\n          window.smartlook||(function(d) {\n          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];\n          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';\n          c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);\n          })(document);\n          smartlook('init', '22317595d614e19e1a73959d93c5ea3db08fdc0b');\n      "),r.a.createElement("html",{lang:"en"})),r.a.createElement("header",{style:{marginBottom:"1rem"}},r.a.createElement(c.Link,{to:"/",style:{textDecoration:"none",color:"#345678"}},r.a.createElement("h1",{style:{display:"inline"}},"Ollie Glass")),r.a.createElement("ul",{style:{listStyle:"none",paddingLeft:0,marginLeft:0,marginBottom:0,marginTop:10}},r.a.createElement(d,{to:"/"},"Home"),r.a.createElement(d,{to:"/services/"},"Services"),r.a.createElement(d,{to:"/case-studies/"},"Case studies"),r.a.createElement(d,{to:"/articles/"},"Articles"))),t)};u.propTypes={children:i.a.node.isRequired},t.a=u},152:function(e,t,a){},154:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-articles-managing-data-science-projects-js-b32ad53cb2d94f89c365.js.map