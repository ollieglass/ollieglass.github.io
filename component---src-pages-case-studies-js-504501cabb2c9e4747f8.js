webpackJsonp([0x9ae932fa4706],{104:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return s.default.createElement("a",(0,i.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}t.__esModule=!0,t.OutboundLink=void 0;var r=a(76),i=n(r),o=a(4),s=n(o),c=a(34),u=n(c);l.propTypes={href:u.default.string,target:u.default.string,onClick:u.default.func},t.OutboundLink=l},205:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(4),r=n(l),i=a(104),o=a(451),s=n(o),c=a(446),u=n(c),d=a(452),A=n(d),m=a(449),f=n(m),p=a(450),g=n(p),h=a(448),y=n(h);t.default=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Case studies"),r.default.createElement("h3",null,"Tapdaq"),r.default.createElement("p",null,r.default.createElement(i.OutboundLink,{href:"https://tapdaq.com/"},"Tapdaq"),"'s mediation product allows app publishers to show ads from any ad network. I designed and built a machine learning system that selects the best paying network for each ad shown."),r.default.createElement("p",null,"The system uses factors like ad network performance history, app type, device and user details to predict which network will give the best payout. It makes a new decision for each ad impression in each app, so publishers earn the most revenue possible from their portfolios."),r.default.createElement("img",{src:s.default,className:"center"}),r.default.createElement("p",null,"Huge volumes of ad impressions and events occur across all of Tapdaq's apps, all of which are captured and used to make predictions. I designed and built a collection of microservices, using technologies including Apache Kafka and Google BigQuery, to provide large scale machine learning with guaranteed response times."),r.default.createElement("p",null,"The nature of the prediction problem required a novel combination of machine learning techniques, including reinforcement learning and supervised learning."),r.default.createElement("div",{className:"grid"},r.default.createElement("div",{className:"col-2-12"},r.default.createElement("div",{className:"content"},r.default.createElement("img",{style:{"border-radius":"50%","margin-left":"auto","margin-right":"auto",display:"block"},src:u.default}))),r.default.createElement("div",{className:"col-10-12"},r.default.createElement("div",{className:"content"},r.default.createElement("p",null,'"We were delighted to have Ollie join our team to help us understand a critical part of our new product.'),r.default.createElement("p",null,"His careful planning, clear communication and technical ability surpassed all of our expectations, not only that, he gelled in well with the team right away, and was able to work side-by-side with our engineers to integrate his efforts into our existing infrastructure."),r.default.createElement("p",null,"Ollie's work has had a radical impact on our business, and I would certainly recommend him to anyone who wants to shift the needle in terms of business value.\""),r.default.createElement("p",null,r.default.createElement(i.OutboundLink,{href:"https://twitter.com/nickreffitt"},"Nick Reffitt"),", CTO")))),r.default.createElement("h3",null,"Trouva"),r.default.createElement("p",null,r.default.createElement(i.OutboundLink,{href:"https://www.trouva.com/"},"Trouva")," is an award winning, highly curated online marketplace for independent homeware and lifestyle boutiques. Working with their team, I designed and built a new product discovery feature and recommendation system to improve user experience and drive engagement, and helped create an internal boutique analytics product."),r.default.createElement("img",{src:A.default,className:"center"}),r.default.createElement("p",null,"The recommendation system uses a combination of user behaviour and enriched boutique data to learn and produce optimal recommendations for users. A machine learning subsystem determines similarity between boutique styles and uses it in the recommendation process, capturing and scaling Trouva’s curatorial vision."),r.default.createElement("p",null,"A flexible and extensible architecture allows the system to make recommendations from any kind of entity (boutiques, products, categories etc.) to any other kind, letting Trouva make personalised recommendations across all parts of the product and in their marketing."),r.default.createElement("h3",null,"Picfair"),r.default.createElement("p",null,"I designed and built a machine learning system to rate image quality and factor it into search results, giving ",r.default.createElement(i.OutboundLink,{href:"https://www.picfair.com/"},"Picfair")," a market-leading photography search engine."),r.default.createElement("img",{src:f.default,className:"center"}),r.default.createElement("p",null,"The machine learning system is deployed into production as a scalable microservice, so as Picfair grows they can just add more servers to handle incoming images. It's seamlessly integrated into the existing tech stack, with testing, server monitoring, a clean API and interfaces for the Rails and Elasticsearch codebase."),r.default.createElement("h3",null,"Rentify"),r.default.createElement("p",null,"I designed and built an interactive visualisation of London's property market, a system to find stories from rental trends each month, and data-driven marketing pages for ",r.default.createElement(i.OutboundLink,{href:"https://www.rentify.com/"},"Rentify"),"'s marketing team."),r.default.createElement("img",{src:g.default,className:"center"}),r.default.createElement("p",null,"All of these tools are powered by a central data product. Combining Rentify's exclusive lettings data with 3rd party sources including London Datastore and Land Registry records, it creates a rolling, proprietary analysis of the London property and rental market."),r.default.createElement("h3",null,"Channel 4"),r.default.createElement("p",null,r.default.createElement(i.OutboundLink,{href:"http://www.channel4.com/programmes/the-promise"},"The Promise")," was a powerful historical drama set in Israel and Palestine. Channel 4 expected strong and wide ranging reactions to the program, and wanted a way to show this conversation while maintaining editorial guidelines and balance."),r.default.createElement("p",null,"I designed a ",r.default.createElement(i.OutboundLink,{href:"http://journalofdigitalhumanities.org/2-1/topic-modeling-a-basic-introduction-by-megan-r-brett/"},"topic modeling")," system to group the conversation into themes in a way that reflected Channel 4's editorial policy, built an interactive visualization to let viewers see and explore the conversation, and designed a server architecture to make it work at scale."),r.default.createElement("img",{src:y.default,className:"center"}),r.default.createElement("p",null,"Behind the scenes, a data service collects tweets matching the hashtag #c4thepromise. Natural language processing techniques clean the text content, then store the words and sentences in a graph data structure. The topic modeler processes the graph and exports an optimised data format to a separate web app, which serves the visualization and client data requests at scale."),r.default.createElement("h3",null,"Other work"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("strong",null,"NHS")," Clinician survey and reporting data product"),r.default.createElement("li",null,r.default.createElement("strong",null,"O2")," Social commerce tracking system and social data analysis"),r.default.createElement("li",null,r.default.createElement("strong",null,"Mercari")," Machine learning strategy consultancy"),r.default.createElement("li",null,r.default.createElement("strong",null,"Social Chain")," Social data strategy"),r.default.createElement("li",null,r.default.createElement("strong",null,"IG")," Bespoke training for PPC and RTB marketers"),r.default.createElement("li",null,r.default.createElement("strong",null,"Silicon Milkroundabout")," Data-driven decision support tools for candidate vetting and scoring"),r.default.createElement("li",null,r.default.createElement("strong",null,"Hire My Friend")," Marketplace analysis and automatic user segmentation"),r.default.createElement("li",null,r.default.createElement("strong",null,"YouGov")," User behaviour analysis and data product roadmap"),r.default.createElement("li",null,r.default.createElement("strong",null,"PeerIndex")," Personalised marketing automation and data product design"),r.default.createElement("li",null,r.default.createElement("strong",null,"Airfinity")," Machine learning consultancy"),r.default.createElement("li",null,r.default.createElement("strong",null,"QSA")," Data-driven marketing and visualisation"),r.default.createElement("li",null,r.default.createElement("strong",null,"RSPCA")," Social data strategy presentation"),r.default.createElement("li",null,r.default.createElement("strong",null,"Ribot")," Dashboard design workshop"),r.default.createElement("li",null,r.default.createElement("strong",null,"University of Brighton")," Generative graphics and data-driven visualisation workshop")))},e.exports=t.default},446:function(e,t){e.exports="data:image/jpeg;base64,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"},448:function(e,t,a){e.exports=a.p+"static/channel4-the-promise.2cd72d07.png"},449:function(e,t,a){e.exports=a.p+"static/picfair.618ba9df.png"},450:function(e,t,a){e.exports=a.p+"static/rentify.ee20396b.png"},451:function(e,t,a){e.exports=a.p+"static/tapdaq.8653231c.png"},452:function(e,t,a){e.exports=a.p+"static/trouva.2a49a728.jpg"}});
//# sourceMappingURL=component---src-pages-case-studies-js-504501cabb2c9e4747f8.js.map