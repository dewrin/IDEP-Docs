(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(96)),i={title:"Validators Overview"},c={unversionedId:"ValidatorsOverview",id:"ValidatorsOverview",isDocsHomePage:!1,title:"Validators Overview",description:"Introduction",source:"@site/docs/ValidatorsOverview.md",slug:"/ValidatorsOverview",permalink:"/ValidatorsOverview",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/ValidatorsOverview.md",version:"current",sidebar:"docs",previous:{title:"IDENTT",permalink:"/IDENTT"},next:{title:"Installation",permalink:"/Installation"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"Community",id:"community",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The IDEP Network utilizes the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint"},"Tendermint Core")," consensus engine which relies\non a network of validators that are responsible for committing new blocks in the blockchain. These validators participate\nin the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key."),Object(a.b)("p",null,'Validator candidates can bond their own IDEP tokens and have IDEP tokens "delegated", or staked, to them by token holders.\nThe IDEP Network will have a maximum total of 125 validators. The validators are determined by who has the most stake delegated\nto them, the top 125 validators with the (most) highest number of staked tokens will become IDEP Network validators.'),Object(a.b)("p",null,"Validators and their delegators will earn IDEP tokens as block provisions and tokens as transaction fees through execution\nof the Tendermint consensus protocol. Note that validators can set commission on the fees their delegators receive as additional incentive."),Object(a.b)("p",null,"If validators double sign, are frequently offline or do not participate in governance, their staked IDEP tokens (including IDEP tokens of users that delegated to them) can be slashed. The penalty depends on the severity of the violation."),Object(a.b)("h2",{id:"hardware"},"Hardware"),Object(a.b)("p",null,"Validators should expect to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall and switching and then small servers with redundant hard drive and failover. Hardware can be on the low end of datacenter gear to start out with."),Object(a.b)("p",null,"We anticipate that network requirements will be low initially. The current testnet requires minimal resources. Then bandwidth, CPU and memory requirements will rise as the network grows. Large hard drives are recommended for storing years of blockchain history."),Object(a.b)("p",null,"Although there is no minimum system requirements you can use the following as a rough guide:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Latest Version of Ubuntu"),Object(a.b)("li",{parentName:"ul"},"4 CPU Processor"),Object(a.b)("li",{parentName:"ul"},"8 GB Ram"),Object(a.b)("li",{parentName:"ul"},"500GB Storage")),Object(a.b)("h2",{id:"community"},"Community"),Object(a.b)("p",null,"To get the latest news on becoming a validator please reach out to us on our community chat:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://discord.gg/Jrarctk4hG"},"Discord")," - Community discussions and support."))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);