"use strict";(self.webpackChunknatives_in_tech_docs=self.webpackChunknatives_in_tech_docs||[]).push([[268],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4803:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={id:"template",title:"Template",sidebar_label:"Template"},s=void 0,u={unversionedId:"template",id:"template",title:"Template",description:"Below is a template README for NiT projects. It is a welcome message to potential collaborators. Not all projects follow this structure but it is encouraged that they have some kind of structure that communicates the goals of the project as well as how someone can help contribute to that project.",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/docs/template",draft:!1,editUrl:"https://github.com/nativesintech/docs/edit/latest/docs/template.md",tags:[],version:"current",lastUpdatedBy:"Adam Recvlohe",lastUpdatedAt:1605148571,formattedLastUpdatedAt:"Nov 12, 2020",frontMatter:{id:"template",title:"Template",sidebar_label:"Template"},sidebar:"docs",previous:{title:"About",permalink:"/docs/projects"},next:{title:"Resources",permalink:"/docs/resources"}},c={},h=[{value:"Meta",id:"meta",level:2},{value:"Intro",id:"intro",level:2},{value:"Usage",id:"usage",level:2},{value:"Status",id:"status",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"License",id:"license",level:2}],p={toc:h};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below is a template README for NiT projects. It is a welcome message to potential collaborators. Not all projects follow this structure but it is encouraged that they have some kind of structure that communicates the goals of the project as well as how someone can help contribute to that project."),(0,a.kt)("h2",{id:"meta"},"Meta"),(0,a.kt)("p",null,"Many libraries add badges that show the status of the build or other meta information about the project. Add these at the top to help give details about the state of the project from CI/CD builds or other badging libraries."),(0,a.kt)("p",null,"Further reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"shields.io"),(0,a.kt)("li",{parentName:"ul"},"badges")),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"The introduction should summarize and capture the purpose of the project. Questions you might want to answer here are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What problem does this project solve?"),(0,a.kt)("li",{parentName:"ul"},"How does this project help people?"),(0,a.kt)("li",{parentName:"ul"},"What inspired you to build this project?"),(0,a.kt)("li",{parentName:"ul"},"Who helped you build this project?"),(0,a.kt)("li",{parentName:"ul"},"Where did you take inspiration from to build this project?"),(0,a.kt)("li",{parentName:"ul"},"What tools were involved in building the project?")),(0,a.kt)("p",null,"This provides much needed context for the decisions you have made and will help observers or contributors to better empathize with those decisions."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The usage covers how the library and/or web application can be used. For example, is it as simple as visiting the website? If so, then mention that. If more directions are required to get it working then go through that usage in detail. In projects that are libraries, you might want to create an examples folder to provide more recipes of how to use it."),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"When anyone first comes to a repo they are curious what the current state of the project is. Here you can inform them whether the project is maintained or unmaintained, who it is maintained by, and how someone can get in touch with the maintainer, whether through social media, email, or submitting an issue and tagging them in it. From here the person can see how they might want to get involved in case they are interested in becoming a maintainer or supporting a maintainer."),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"There are contributors of various degrees on any project. There are people that only help with documentation, fix typos, or make significant additions to the codebase. But in general, they want to know how they can contribute. This is where having a GitHub project outlining the goals of the project or a road map for future releases is really important. Don't keep all the innovative ideas of the project in your head. Get them in the README or in the issues in order to help direct people to actionable tasks instead of having them look in several places. In this case, you may want to remove the ability for someone to make an issue and instead have them email you the issue instead. This can help you, and others, stay focused on collaboration and the goals of the road map and not be side tracked by suggestions from those who don't want to help or who do not have the time to help. Either way, get the goals in a markdown file and educate people on how they can help with well written tasks that anyone can work on. You may want to add this to a CONTRIBUTING.md file."),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("p",null,"Use the all-contributors bot to recognize the work of everyone in the project, especially those who do not make changes to the codebase. Anyone can make contributions to help improve the project and we appreciate all who do."),(0,a.kt)("p",null,"Further reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"all-contributors")),(0,a.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,a.kt)("p",null,"This is a sacred space. We expect everyone to behave in a respectful manner. Always include a CODE_OF_CONDUCT.md file so that everyone is aware of desired behavior. Undesired behavior will not be tolerated and action will be taken if misconduct continues unabated."),(0,a.kt)("p",null,"Further reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a CoC to your GitHub project")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"The license of a project speaks to how the project can be used. This is important for those who work in open source. They want to know they are contributing to a project that can be freely distributed. In most cases, having an MIT license would suffice. However, if this is not the case then make sure you spend the time finding a license that works for your use case."),(0,a.kt)("p",null,"Further reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OSS Licenses")))}d.isMDXComponent=!0}}]);