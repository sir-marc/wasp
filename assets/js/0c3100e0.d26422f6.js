"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),v=a,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function v(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??p;return v({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},v=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:v,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(50012);function o(e){let{path:t}=e;const[n]=(0,a.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),l=t.slice(o+1,t.length-1),[i,s]=l.split(","),u=t.slice(0,o);return r.createElement("code",null,u+("js"===n?i:s))}},28117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=(n(46300),n(85162)),l=n(74866);const i={title:"Env Variables"},s=void 0,u={unversionedId:"project/env-vars",id:"version-0.12.0/project/env-vars",title:"Env Variables",description:"Environment variables are used to configure projects based on the context in which they run. This allows them to exhibit different behaviors in different environments, such as development, staging, or production.",source:"@site/versioned_docs/version-0.12.0/project/env-vars.md",sourceDirName:"project",slug:"/project/env-vars",permalink:"/docs/0.12.0/project/env-vars",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.12.0/project/env-vars.md",tags:[],version:"0.12.0",frontMatter:{title:"Env Variables"},sidebar:"docs",previous:{title:"Static Asset Handling",permalink:"/docs/0.12.0/project/static-assets"},next:{title:"Testing",permalink:"/docs/0.12.0/project/testing"}},c={},p=[{value:"Client Env Vars",id:"client-env-vars",level:2},{value:"Server Env Vars",id:"server-env-vars",level:2},{value:"Defining Env Vars in Development",id:"defining-env-vars-in-development",level:2},{value:"1. Using .env (dotenv) Files",id:"1-using-env-dotenv-files",level:3},{value:"2. Using Shell",id:"2-using-shell",level:3},{value:"Defining Env Vars in Production",id:"defining-env-vars-in-production",level:2},{value:"Client Env Vars",id:"client-env-vars-1",level:3},{value:"Server Env Vars",id:"server-env-vars-1",level:3}],d={toc:p},v="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(v,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Environment variables")," are used to configure projects based on the context in which they run. This allows them to exhibit different behaviors in different environments, such as development, staging, or production."),(0,a.kt)("p",null,"For instance, ",(0,a.kt)("em",{parentName:"p"},"during development"),", you may want your project to connect to a local development database running on your machine, but ",(0,a.kt)("em",{parentName:"p"},"in production"),", you may prefer it to connect to the production database. Similarly, in development, you may want to use a test Stripe account, while in production, your app should use a real Stripe account."),(0,a.kt)("p",null,"While some env vars are required by Wasp, such as the database connection or secrets for social auth, you can also define your env vars for any other useful purposes."),(0,a.kt)("p",null,"In Wasp, you can use environment variables in both the client and the server code."),(0,a.kt)("h2",{id:"client-env-vars"},"Client Env Vars"),(0,a.kt)("p",null,"Client environment variables are embedded into the client code during the build and shipping process, making them public and readable by anyone. Therefore, you should ",(0,a.kt)("strong",{parentName:"p"},"never store secrets in them")," (such as secret API keys)."),(0,a.kt)("p",null,"To enable Wasp to pick them up, client environment variables must be prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_"),", for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_SOME_VAR_NAME=..."),"."),(0,a.kt)("p",null,"You can read them from the client code like this:"),(0,a.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"console.log(import.meta.env.REACT_APP_SOME_VAR_NAME)\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/App.ts"',title:'"src/App.ts"'},"console.log(import.meta.env.REACT_APP_SOME_VAR_NAME)\n")))),(0,a.kt)("p",null,"Check below on how to define them."),(0,a.kt)("h2",{id:"server-env-vars"},"Server Env Vars"),(0,a.kt)("p",null,"In server environment variables, you can store secret values (e.g. secret API keys) since are not publicly readable. You can define them without any special prefix, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"SOME_VAR_NAME=..."),"."),(0,a.kt)("p",null,"You can read them in the server code like this:"),(0,a.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(process.env.SOME_VAR_NAME)\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(process.env.SOME_VAR_NAME)\n")))),(0,a.kt)("p",null,"Check below on how to define them."),(0,a.kt)("h2",{id:"defining-env-vars-in-development"},"Defining Env Vars in Development"),(0,a.kt)("p",null,"During development, there are two ways to provide env vars to your Wasp project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," files. ",(0,a.kt)("strong",{parentName:"li"},"(recommended)")),(0,a.kt)("li",{parentName:"ol"},"Using shell. (useful for overrides)")),(0,a.kt)("h3",{id:"1-using-env-dotenv-files"},"1. Using .env (dotenv) Files"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Env vars usage in development",src:n(49295).Z,width:"908",height:"672"})),(0,a.kt)("p",null,"This is the recommended method for providing env vars to your Wasp project during development."),(0,a.kt)("p",null,"In the root of your Wasp project you can create two distinct files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".env.server")," for env vars that will be provided to the server."),(0,a.kt)("p",{parentName:"li"},"Variables are defined in these files in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"NAME=VALUE"),", for example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env.server"',title:'".env.server"'},"DATABASE_URL=postgresql://localhost:5432\nSOME_VAR_NAME=somevalue\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".env.client")," for env vars that will be provided to the client."),(0,a.kt)("p",{parentName:"li"}," Variables are defined in these files in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"NAME=VALUE"),", for example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env.client"',title:'".env.client"'},"REACT_APP_SOME_VAR_NAME=somevalue\n")))),(0,a.kt)("p",null,"These files should not be committed to version control, and they are already ignored by default in the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file that comes with Wasp."),(0,a.kt)("h3",{id:"2-using-shell"},"2. Using Shell"),(0,a.kt)("p",null,"If you set environment variables in the shell where you run your Wasp commands (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start"),"), Wasp will recognize them."),(0,a.kt)("p",null,"You can set environment variables in the ",(0,a.kt)("inlineCode",{parentName:"p"},".profile")," or a similar file, or by defining them at the start of a command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"SOME_VAR_NAME=SOMEVALUE wasp start\n")),(0,a.kt)("p",null," This is not specific to Wasp and is simply how environment variables can be set in the shell."),(0,a.kt)("p",null,"Defining environment variables in this way can be cumbersome even for a single project and even more challenging to manage if you have multiple Wasp projects. Therefore, we do not recommend this as a default method for providing environment variables to Wasp projects. However, it can be useful for occasionally ",(0,a.kt)("strong",{parentName:"p"},"overriding")," specific environment variables because environment variables set this way ",(0,a.kt)("strong",{parentName:"p"},"take precedence over those defined in ",(0,a.kt)("inlineCode",{parentName:"strong"},".env")," files"),"."),(0,a.kt)("h2",{id:"defining-env-vars-in-production"},"Defining Env Vars in Production"),(0,a.kt)("p",null,"While in development, we had the option of using ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files which made it easy to define and manage env vars. However, in production, we need to provide env vars differently."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Env vars usage in development and production",src:n(33168).Z,width:"908",height:"672"})),(0,a.kt)("h3",{id:"client-env-vars-1"},"Client Env Vars"),(0,a.kt)("p",null,"Client env vars are embedded into the client code during the build and shipping process, making them public and readable by anyone. Therefore, you should ",(0,a.kt)("strong",{parentName:"p"},"never store secrets in them")," (such as secret API keys)."),(0,a.kt)("p",null,"You should provide them to the build command, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"REACT_APP_SOME_VAR_NAME=somevalue npm run build\n")),(0,a.kt)("admonition",{title:"How it works",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"What happens behind the scenes is that Wasp will replace all occurrences of ",(0,a.kt)("inlineCode",{parentName:"p"},"import.meta.env.REACT_APP_SOME_VAR_NAME")," with the value you provided. This is done during the build process, so the value is embedded into the client code."),(0,a.kt)("p",{parentName:"admonition"},"Read more about it in Vite's ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/env-and-mode.html#production-replacement"},"docs"),".")),(0,a.kt)("h3",{id:"server-env-vars-1"},"Server Env Vars"),(0,a.kt)("p",null,"The way you provide env vars to your Wasp project in production depends on where you deploy it. For example, if you deploy your project to ",(0,a.kt)("a",{parentName:"p",href:"https://fly.io"},"Fly"),", you can define them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"flyctl")," CLI tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flyctl secrets set SOME_VAR_NAME=somevalue\n")),(0,a.kt)("p",null,"You can read a lot more details in the ",(0,a.kt)("a",{parentName:"p",href:"../advanced/deployment/manually"},"deployment section")," of the docs. We go into detail on how to define env vars for each deployment option."))}m.isMDXComponent=!0},49295:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prod_dev_fade-e4097e7d9b64c62ca95bfde692e5115d.svg"},33168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prod_dev_fade_2-d0ff1e438a29011a68bcf630a9470254.svg"}}]);