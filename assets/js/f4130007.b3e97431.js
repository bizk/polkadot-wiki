"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2665],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(a),k=l,g=m["".concat(i,".").concat(k)]||m[k]||u[k]||r;return a?n.createElement(g,o(o({ref:e},d),{},{components:a})):n.createElement(g,o({ref:e},d))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[m]="string"==typeof t?t:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},86975:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"wallets-and-extensions",title:"Wallets and Extensions",sidebar_label:"Wallets and Extensions",description:"An Overview of Wallets and Browser Extensions in the Polkadot Ecosystem.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../wallets-and-extensions"},i=void 0,p={unversionedId:"general/wallets-and-extensions",id:"general/wallets-and-extensions",title:"Wallets and Extensions",description:"An Overview of Wallets and Browser Extensions in the Polkadot Ecosystem.",source:"@site/../docs/general/wallets-and-extensions.md",sourceDirName:"general",slug:"/wallets-and-extensions",permalink:"/docs/wallets-and-extensions",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/wallets-and-extensions.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1711990290,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"wallets-and-extensions",title:"Wallets and Extensions",sidebar_label:"Wallets and Extensions",description:"An Overview of Wallets and Browser Extensions in the Polkadot Ecosystem.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../wallets-and-extensions"},sidebar:"docs",previous:{title:"Wallets",permalink:"/docs/wallets-index"},next:{title:"Ledger",permalink:"/docs/ledger"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Browser Extensions",id:"browser-extensions",level:3},{value:"Mobile Wallets",id:"mobile-wallets",level:3},{value:"Web Wallets",id:"web-wallets",level:3},{value:"Telegram Wallets",id:"telegram-wallets",level:3},{value:"Enkrypt",id:"enkrypt",level:2},{value:"Fearless Wallet",id:"fearless-wallet",level:2},{value:"Nova Wallet",id:"nova-wallet",level:2},{value:"PolkaGate",id:"polkagate",level:2},{value:"Polkawallet",id:"polkawallet",level:2},{value:"SubWallet",id:"subwallet",level:2},{value:"Talisman",id:"talisman",level:2},{value:"Telenova",id:"telenova",level:2}],u={toc:m},k="wrapper";function g(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Using your due diligence in researching and using the wallets listed below would be best. For any\nissues related to these wallet, reach out to their support teams directly.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Explore Polkadot with a secure and user-friendly wallets listed on the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.polkadot.network/ecosystem/wallets/"},"Polkadot website"),".")),(0,r.kt)("p",null,"If you are new to blockchain technology, generally a typical blockchain network account is a\npublic-private key pair. Access to a private key gives full access to all the allowed transactions\non that blockchain account. It is essential to keep the private key secure."),(0,r.kt)("p",null,"Typically, the account keys are either stored and accessed through a browser extension or a\nsmartphone app (which are considered as a hot wallets as they are online), or an air-gapped device\nor a hardware wallet (which are considered as cold wallets as they are offline)."),(0,r.kt)("admonition",{title:"Not your keys, not your tokens!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"With ",(0,r.kt)("strong",{parentName:"p"},"custodial wallets")," (like accounts in centralized exchanges), another party controls your\nprivate keys. Private keys are used to access funds in your account, so you trust the exchange that\nyour key will always be given to you whenever you need it. With ",(0,r.kt)("strong",{parentName:"p"},"non-custodial wallets"),", only you\ncan access your account's private key.")),(0,r.kt)("p",null,"To realize the multichain vision of Polkadot,\nit is important to have non-custodial wallets that make it convenient to interact with multiple\nblockchains in Polkadot ecosystem. Below there\nis a list of all non-custodial treasury-funded wallets developed by the community."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"browser-extensions"},"Browser Extensions"),(0,r.kt)("p",null,"At a bare minimum, browser extension wallets act as key storage and management solution, allowing\nyou to use your accounts with apps in the Web3 space. The wallets listed below offer functionality\nbeyond that, allowing the featured actions to be performed directly through the extension. Some of\nthem also allow interaction with air-gapped wallets and hardware devices."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,r.kt)("th",{parentName:"tr",align:null},"Browsers"),(0,r.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,r.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,r.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,r.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,r.kt)("th",{parentName:"tr",align:null},"Governance"),(0,r.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.enkrypt.com/?mtm_campaign=Polkadot%20Wiki%20-%20Supported%20Wallets"},"Enkrypt")),(0,r.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox, Opera, Safari"),(0,r.kt)("td",{parentName:"tr",align:null},"No, No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#enkrypt"},"Enkrypt Features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkagate.xyz/"},"PolkaGate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/polkagate-the-gateway-to/ginchbkmljhldofnbjabmeophlhdldgp"},"Brave"),", ",(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/polkagate-the-gateway-to/ginchbkmljhldofnbjabmeophlhdldgp"},"Chrome"),", ",(0,r.kt)("a",{parentName:"td",href:"https://addons.mozilla.org/en-US/firefox/addon/polkagate"},"Firefox"),", ",(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/polkagate-the-gateway-to/ginchbkmljhldofnbjabmeophlhdldgp"},"Edge")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#polkagate"},"PolkaGate features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn"},"Brave"),", ",(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn"},"Chrome"),", ",(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/subwallet-polkadot-extens/onhogfjeacnfoofkfgppdlbmlmnplgbn"},"Edge"),", ",(0,r.kt)("a",{parentName:"td",href:"https://addons.mozilla.org/en-US/firefox/addon/subwallet/"},"Firefox")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.talisman.xyz/"},"Talisman")),(0,r.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#talisman"},"Talisman features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc"},"Brave"),", ",(0,r.kt)("a",{parentName:"td",href:"https://chrome.google.com/webstore/detail/fearless-wallet/nhlnehondigmgckngjomcpcefcdplmgc"},"Chrome")),(0,r.kt)("td",{parentName:"tr",align:null},"No, No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fearless-wallet"},"Fearless Wallet Features"))))),(0,r.kt)("admonition",{title:"Ledger support only for chromium-based browsers",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently, all browser extensions support Ledger devices only on chromium-based browsers (i.e.\nChrome, Brave, Edge, Opera).")),(0,r.kt)("h3",{id:"mobile-wallets"},"Mobile Wallets"),(0,r.kt)("p",null,"Mobile wallets are fully packaged apps that allow all the featured actions, as well as the storage\nand management of your accounts, through the mobile app. Unlike browser extensions, mobile wallets\nusually can\u2019t connect to third-party web apps. Some mobile wallets provide support for hardware\nwallets through Bluetooth connectivity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,r.kt)("th",{parentName:"tr",align:null},"Platforms"),(0,r.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,r.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,r.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,r.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,r.kt)("th",{parentName:"tr",align:null},"Governance"),(0,r.kt)("th",{parentName:"tr",align:null},"Proxy Accounts"),(0,r.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,r.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fearless-wallet"},"Fearless Wallet Features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://novawallet.io/"},"Nova Wallet"),"*"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#nova-wallet"},"Nova Wallet features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polkawallet.io/"},"Polkawallet")),(0,r.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#polkawallet"},"Polkawallet features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://apps.apple.com/us/app/subwallet-polkadot-wallet/id1633050285"},"iOS"),", ",(0,r.kt)("a",{parentName:"td",href:"bit.ly/3DE2Dlg"},"Android")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"),", ",(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"*","Note about Nova wallet"),(0,r.kt)("p",{parentName:"admonition"},"There's ",(0,r.kt)("strong",{parentName:"p"},"another")," Nova wallet that is ",(0,r.kt)("strong",{parentName:"p"},"unrelated")," to the Polkadot ecosystem. Users are advised\nto ensure that they use the correct Nova wallet by downloading the app from their official website:\n",(0,r.kt)("a",{parentName:"p",href:"https://novawallet.io/"},"https://novawallet.io/"),". Before creating or restoring accounts, it is wise\nto double-check the wallet website URLs through official channels (most projects have it listed on\ntheir official social media handles).")),(0,r.kt)("h3",{id:"web-wallets"},"Web Wallets"),(0,r.kt)("p",null,"Web Wallets are the all-in-one solution to accessing the Web3 space, allowing you to sign\ntransactions on the web without having to download and install any browser extension and mobile app.\nWith all of the features of mobile wallets, you can also connect to and interact with decentralized\nweb apps."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,r.kt)("th",{parentName:"tr",align:null},"Platforms"),(0,r.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,r.kt)("th",{parentName:"tr",align:null},"Liquid Staking"),(0,r.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,r.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,r.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,r.kt)("th",{parentName:"tr",align:null},"Governance"),(0,r.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://web.subwallet.app/"},"SubWallet")),(0,r.kt)("td",{parentName:"tr",align:null},"Any web browsers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes, Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))))),(0,r.kt)("h3",{id:"telegram-wallets"},"Telegram Wallets"),(0,r.kt)("p",null,"Telegram Wallets are applications running ontop of the Telegram Messenger platform. These wallets\ntypically provide a streamlined user experience and provide an easy way for new users to get started\nin the Polkadot ecosystem without having to download any new applications."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,r.kt)("th",{parentName:"tr",align:null},"Platforms"),(0,r.kt)("th",{parentName:"tr",align:null},"Self-Custodial"),(0,r.kt)("th",{parentName:"tr",align:null},"Send Tokens to Telegram Username"),(0,r.kt)("th",{parentName:"tr",align:null},"Send Tokens to any Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Notifications"),(0,r.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://t.me/telenova_app_bot"},"Telenova")),(0,r.kt)("td",{parentName:"tr",align:null},"Mobile, Desktop, Web"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://medium.com/novasama-technologies/meet-telenova-your-newbie-friendly-polkadot-wallet-built-into-telegram-5d9e9570d334"},"Telenova Features"))))),(0,r.kt)("h2",{id:"enkrypt"},"Enkrypt"),(0,r.kt)("p",null,"A multichain crypto wallet - Bitcoin, Ethereum, Polkadot, Kusama and a few parachains.\nNon-custodial, private, hardware wallet support (Ledger and Trezor). Private and open source. Hold,\nsend, and receive tokens and NFTs. Swap tokens and bridge assets between chains. Manage multiple\naccounts on multiple networks. Connect to web3 apps. Recipient of a development grant from Web3\nFoundation."),(0,r.kt)("h2",{id:"fearless-wallet"},"Fearless Wallet"),(0,r.kt)("p",null,"The Fearless DeFi Wallet for the Future. Simply, intuitively, and fearlessly interact with\n",(0,r.kt)("a",{parentName:"p",href:"/docs/web3-and-polkadot"},"Web3"),". Currently supports Staking, Crowdloans, Parachain Accounts,\nNomination Pools Native Staking, dApp Signer on desktop through your mobile phone (experimental),\nChromium-based browser extension. Safety features such as Scam Address Warning and Network Failure\nWarnings help fearlessly navigate ",(0,r.kt)("a",{parentName:"p",href:"/docs/web3-and-polkadot"},"web3"),". Formerly funded and supported by\nKusama Treasury [",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/23"},"1"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/34"},"2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/74"},"3"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/102"},"4"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/178"},"5"),"],\nand the SORA community [",(0,r.kt)("a",{parentName:"p",href:"https://sora.subscan.io/referenda/193?tab=votes"},"1"),"], developed with <3 by\nSORAMITSU. Stay Fearless!"),(0,r.kt)("h2",{id:"nova-wallet"},"Nova Wallet"),(0,r.kt)("p",null,"A user-friendly wallet for the Polkadot & Kusama ecosystems, providing a smooth web3 experience on\nboth iOS and Android. Nova Wallet supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Polkadot OpenGov"),"\n(including agile delegations), Governance v1 (including support for parachain governance), Staking,\nNFT management, XCM Transfers, Parity Signer & Ledger Support, DApp Support with Polkadot JS and\nMetamask/EVM Integration and crowdloans. Nova Wallet received funding from Kusama Treasury\n[",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/122"},"1"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/158"},"2"),"], as well as funding from the Polkadot Treasury\n[",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/314"},"1"),"]."),(0,r.kt)("h2",{id:"polkagate"},"PolkaGate"),(0,r.kt)("p",null,"PolkaGate extension is a user-friendly and feature-rich wallet/extension, supported by the Kusama\nTreasury [",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/205"},"1"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/referenda/124"},"2"),"]. It provides a diverse range of functionalities\nto enhance your experience, such as proxy management, open governance, pool staking management, spam\naddress warning, support for address-only accounts, crowdloans, account export/import/derivation,\nledger support, parachain accounts, phishing website detection, QR account import, solo staking,\nremote node selection, fund transfers, balance viewing in both cryptocurrency and USD, transaction\nhistory viewing, and the ability to generate QR codes for addresses."),(0,r.kt)("h2",{id:"polkawallet"},"Polkawallet"),(0,r.kt)("p",null,"Polkawallet provides cross-chain asset one-stop management, convenient staking, governance, and\nmultiple DeFi services; the private key is self-owned. Polkawallet received funding from Kusama\nTreasury [",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/32"},"1"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/41"},"2"),"]."),(0,r.kt)("h2",{id:"subwallet"},"SubWallet"),(0,r.kt)("p",null,"A non-custodial Polkadot, Substrate & Ethereum wallet. Track, send, receive, and monitor multi-chain\nassets on 150+ networks. Import account with seed phrase, private key, QR code, and JSON file.\nImport token & NFT, attach read-only account. XCM Transfer, NFT Management, Parity Signer & Ledger\nsupport, light clients support, EVM DApp support, MetaMask compatibility, custom endpoints, fiat\non-ramp, phishing detection, transaction history. SubWallet received funding from Polkadot Treasury\n[",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/138"},"1"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/162"},"2"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/218"},"3"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/272"},"4"),"]."),(0,r.kt)("h2",{id:"talisman"},"Talisman"),(0,r.kt)("p",null,"A better way to explore Web3. Keep your assets safe, manage your portfolio and explore Polkadot and\nEthereum apps with Talisman. Interact with Web3 apps, store your favourite crypto assets and manage\nyour accounts on over 150+ Substrate and EVM networks. NFT Management, ledger Support, fiat On-ramp,\nportfolio tracking. Talisman received funding from Polkadot Treasury\n[",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/148"},"1"),"]."),(0,r.kt)("h2",{id:"telenova"},"Telenova"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://t.me/telenova_app_bot"},"Telenova")," is a brand new self-custodial Polkadot wallet that runs\ndirectly in Telegram providing you with a simple and clean user interface to manage your DOT & KSM\ntokens. Send crypto to anyone in Telegram, Buy/Sell DOT and KSM tokens, get notified about your\nbalance changes, view your total balance in multiple fiat currencies, secured by your personal\nTelegram cloud and manual backups."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/telenova_app_bot"},"Telenova")," on any of your devices \u2014 be it mobile or desktop \u2014\nwithin the same Telegram account, and start exploring the Polkadot ecosystem today!"))}g.isMDXComponent=!0}}]);