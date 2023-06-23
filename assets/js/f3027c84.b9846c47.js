"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={id:"polkadotjs-ui",title:"Polkadot-JS UI (Wallet)",sidebar_label:"Polkadot-JS UI",description:"More than a wallet. For power-users and developers.",keywords:["polkadotjs","polkadotjs apps","apps UI","extension"],slug:"../polkadotjs-ui"},l=void 0,p={unversionedId:"general/polkadotjs-ui",id:"general/polkadotjs-ui",title:"Polkadot-JS UI (Wallet)",description:"More than a wallet. For power-users and developers.",source:"@site/../docs/general/polkadotjs-ui.md",sourceDirName:"general",slug:"/polkadotjs-ui",permalink:"/docs/polkadotjs-ui",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/polkadotjs-ui.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1687512090,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{id:"polkadotjs-ui",title:"Polkadot-JS UI (Wallet)",sidebar_label:"Polkadot-JS UI",description:"More than a wallet. For power-users and developers.",keywords:["polkadotjs","polkadotjs apps","apps UI","extension"],slug:"../polkadotjs-ui"},sidebar:"docs",previous:{title:"Polkadot Vault",permalink:"/docs/polkadot-vault"},next:{title:"Staking Dashboard",permalink:"/docs/staking-dashboard"}},c={},d=[{value:"Main Functionalities",id:"main-functionalities",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Network (Staking)",id:"network-staking",level:3},{value:"Settings",id:"settings",level:3},{value:"Other Functionalities",id:"other-functionalities",level:2},{value:"Network",id:"network",level:3},{value:"Governance",id:"governance",level:3},{value:"Developer",id:"developer",level:3},{value:"Beginner&#39;s Guide to Polkadot-JS",id:"beginners-guide-to-polkadot-js",level:2}],u={toc:d},k="wrapper";function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"A Wallet for Developers and Power Users",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you need help using the Polkadot-JS UI, you can contact the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},(0,r.kt)("strong",{parentName:"a"},"Polkadot Support Team")),". Please note that this\nwallet is oriented toward developers and power users. Check out treasury-funded wallets on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"Wallets Page")," for more user-friendly wallets.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS UI"))," is the native application for\naccessing all features available on Substrate chains as Polkadot and Kusama. The UI is one of the\nmoving parts of ",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS tool collection")),", and its functionalities go\nbeyond normal wallet functionalities such as transfers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that the UI may not precisely align with the functionality of individual parachains. For more\ninformation see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs#polkadot-js-api"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS Page")),".")),(0,r.kt)("h2",{id:"main-functionalities"},"Main Functionalities"),(0,r.kt)("p",null,"Here we describe those functionalities that will likely be useful to most users. Those\nfunctionalities include account generation, balance transfers, and staking."),(0,r.kt)("h3",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"In this section of the UI, you can see accounts injected from a browser extension, such as the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs#polkadot-js-extension"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS Extension"))," or\n",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions#browser-extensions"},(0,r.kt)("strong",{parentName:"a"},"other in-browser wallets")),". It is also possible\nto expand balance details and see different\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#account-balance-types"},(0,r.kt)("strong",{parentName:"a"},"account balance types")),". You can also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add an account (this option must be enabled under ",(0,r.kt)("a",{parentName:"li",href:"#settings"},"Settings"),"). Note that if you clear\nthe cache of your browser, you will lose it, and you will need to recover it through seed phrase\nor JSON file."),(0,r.kt)("li",{parentName:"ul"},"Recover and account from JSON file."),(0,r.kt)("li",{parentName:"ul"},"Add an account from QR code."),(0,r.kt)("li",{parentName:"ul"},"Add an account from a ",(0,r.kt)("a",{parentName:"li",href:"/docs/ledger"},(0,r.kt)("strong",{parentName:"a"},"Ledger"))," device (this option must be enabled under\n",(0,r.kt)("a",{parentName:"li",href:"#settings"},"Settings"),")."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-account-multisig"},(0,r.kt)("strong",{parentName:"a"},"multi-signature account")),"."),(0,r.kt)("li",{parentName:"ul"},"Add a proxied account (see\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-proxies#anonymous-proxy-pure-proxy"},(0,r.kt)("strong",{parentName:"a"},"Pure Proxies"))," for more information).")),(0,r.kt)("p",null,"For each account visible in the UI, you can perform different actions, including\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},(0,r.kt)("strong",{parentName:"a"},"adding a proxy")),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-identity"},(0,r.kt)("strong",{parentName:"a"},"setting an identity")),", and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-balance-transfers"},(0,r.kt)("strong",{parentName:"a"},"sending tokens")),"."),(0,r.kt)("p",null,"For more information about adding and recovering accounts, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},(0,r.kt)("strong",{parentName:"a"},"Account Generation"))," page."),(0,r.kt)("h3",{id:"network-staking"},"Network (Staking)"),(0,r.kt)("p",null,"In this section of the UI, you can participate in ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},(0,r.kt)("strong",{parentName:"a"},"staking")),". In the\nStaking menu you can access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Overview")," tab showing active or waiting validators."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Accounts")," tab (visible only if you added an account) showing accounts that are currently\nused for staking\n(",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-staking#stash-and-controller-accounts-for-staking"},(0,r.kt)("strong",{parentName:"a"},"stash and controller")),"),\nbonded amount, and nominations. In this tab, you can do staking-related transactions such as\nbonding more funds or changing nominations. If you have\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-staking-advanced#staking-proxies"},(0,r.kt)("strong",{parentName:"a"},"staking proxies"))," here, you can use them\nwhile signing for staking-related transactions."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Payouts")," tab (visible only if you added an account) showing any pending rewards that still\nneed to be paid out to you."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Pool")," tab showing all registered ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-nomination-pools"},(0,r.kt)("strong",{parentName:"a"},"nomination pool")),"\nwith the respective state (open, blocked, or destroying). This tab can also be used to create and\njoin a pool."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Targets")," tab showing detailed information about validators such as commission and return.\nMore information can be found in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-nominator"},(0,r.kt)("strong",{parentName:"a"},"Nominator Page")),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Bags"),' tab (visible only if you added an account) showing the bag you are in ("My bags") and\nall bags within the ',(0,r.kt)("a",{parentName:"li",href:"/docs/learn-staking-advanced#bags-list"},(0,r.kt)("strong",{parentName:"a"},"bags list")),". Here (if\napplicable), you can rebag accounts that do not belong to the bag you are in, and you can move\nyour account in front of the account having less stake than you."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Slashes")," tab showing if there are any global slashes."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Validator stats")," tab showing statistics for a chosen validator.")),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"In this UI section, you can change general settings such as appearance and language. You can also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow local in-browser account storage. This is used to add accounts directly in the UI (which\ndiffers from having an account injected from a browser extension)."),(0,r.kt)("li",{parentName:"ul"},"Choose to attach Ledger devices. This adds an account directly in the UI from a Ledger device.")),(0,r.kt)("p",null,"Under Settings you can also do the metadata update. Usually, if there is an update, this will be\nshown as a notification. For more information about metadata updates, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics#metadata-updates"},(0,r.kt)("strong",{parentName:"a"},"dedicated section")),"."),(0,r.kt)("h2",{id:"other-functionalities"},"Other Functionalities"),(0,r.kt)("p",null,"In this section, we describe those functionalities that will less likely interest the average user."),(0,r.kt)("h3",{id:"network"},"Network"),(0,r.kt)("p",null,"In addition to staking, in the Network section, you can also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the Explorer with the most recent blocks and events."),(0,r.kt)("li",{parentName:"ul"},"Inspect ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-parachains"},(0,r.kt)("strong",{parentName:"a"},"parachains")),", see parachain\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-auction"},(0,r.kt)("strong",{parentName:"a"},"auctions"))," and participate to parachain\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-crowdloans"},(0,r.kt)("strong",{parentName:"a"},"crowdloans")),".")),(0,r.kt)("h3",{id:"governance"},"Governance"),(0,r.kt)("p",null,"In this section of the UI, you can participate in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},(0,r.kt)("strong",{parentName:"a"},"governance")),"."),(0,r.kt)("h3",{id:"developer"},"Developer"),(0,r.kt)("p",null,"In this section of the UI, you can access advanced features such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/chainstate"},"Query on-chain data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/rpc"},"Query the node using RPC calls")),(0,r.kt)("li",{parentName:"ul"},"Call ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-extrinsics"},(0,r.kt)("strong",{parentName:"a"},"extrinsics"))," using your account (you are able to see this\noption only if you have an account in the UI)")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsic tab")," provides the use to access more\ngranular functions such as ",(0,r.kt)("a",{parentName:"p",href:"../learn/learn-proxies#anonymous-proxy-pure-proxy"},(0,r.kt)("strong",{parentName:"a"},"pure proxies"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies#time-delayed-proxy"},(0,r.kt)("strong",{parentName:"a"},"time-delayed proxies")),", change\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},(0,r.kt)("strong",{parentName:"a"},"nomination pool"))," settings (nomination and roles) and use\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies#non-transfer-proxy"},(0,r.kt)("strong",{parentName:"a"},"non-transfer proxies")),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-assets#destroying-an-asset"},(0,r.kt)("strong",{parentName:"a"},"destroy assets")),", and much more."),(0,r.kt)("h2",{id:"beginners-guide-to-polkadot-js"},"Beginner's Guide to Polkadot-JS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4EQqwGFV1D8"},"Introduction to Polkadot-JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},"Create an account using Polkadot-JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=g4b4IWR6OrE"},"Network Explorer on Polkadot-JS UI"))))}h.isMDXComponent=!0}}]);