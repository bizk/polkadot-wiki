(self.webpackChunk=self.webpackChunk||[]).push([[5483],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(74165),n=a(15861),o=a(67294),i=a(92519),r=a(1612),l=a(67425);function c(t,e,a){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)((0,s.Z)().mark((function t(e,a,n){var o,l,c,u,d;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){t.next=18;break}return t.abrupt("return");case 18:return c=new i.U(o),t.next=21,r.G.create({provider:c});case 21:u=t.sent,(d=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=d[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e,a,s){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,s);break;case"precise":(0,l.Precise)(t,a,s);break;case"blocksToDays":(0,l.BlocksToDays)(t,s);break;case"percentage":(0,l.Percentage)(t,s);break;case"arrayLength":(0,l.ArrayLength)(t,s);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(t){var e=t.network,a=t.path,i=t.defaultValue,r=t.filter,l=void 0===r?void 0:r,u=(0,o.useState)(""),p=u[0],h=u[1];return e=e.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(i.toString(),l,e,h):h(i.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var t=(0,n.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e,a,h);case 2:if(void 0!==(n=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?d(n,l,e,h):h(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),p}},67425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,a,s){var n=void 0;if("polkadot"===a||"statemint"===a)n=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}t=parseFloat(t),s((t=Number.isInteger(t/e[a].precision)?t/e[a].precision+" "+e[a].symbol:(t/e[a].precision).toFixed(n)+" "+e[a].symbol).toString())},Precise:function(t,a,s){s(t=(t=parseFloat(t))/e[a].precision+" "+e[a].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},Percentage:function(t,e){e((t/=1e7).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},49736:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var s=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(47940),r=["components"],l={id:"learn-guides-assets-create",title:"Creating Assets with the Asset Hub",sidebar_label:"Creating Assets",description:"Advanced How-to Guides about creating assets.",keywords:["asset hub","assets","statemine","statemint"],slug:"../learn-guides-assets-create"},c=void 0,u={unversionedId:"learn/learn-guides-assets-create",id:"learn/learn-guides-assets-create",title:"Creating Assets with the Asset Hub",description:"Advanced How-to Guides about creating assets.",source:"@site/../docs/learn/learn-guides-assets-create.md",sourceDirName:"learn",slug:"/learn-guides-assets-create",permalink:"/docs/learn-guides-assets-create",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-assets-create.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1687512090,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{id:"learn-guides-assets-create",title:"Creating Assets with the Asset Hub",sidebar_label:"Creating Assets",description:"Advanced How-to Guides about creating assets.",keywords:["asset hub","assets","statemine","statemint"],slug:"../learn-guides-assets-create"},sidebar:"docs",previous:{title:"Identity",permalink:"/docs/learn-guides-identity"},next:{title:"Asset Hub Ledger App",permalink:"/docs/learn-guides-assets-ledger"}},d={},p=[{value:"Creating Assets on Asset Hub",id:"creating-assets-on-asset-hub",level:2}],h={toc:p},m="wrapper";function k(t){var e=t.components,l=(0,n.Z)(t,r);return(0,o.kt)(m,(0,s.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Statemint is a generic assets parachain which provides functionality for deploying and transferring\nassets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a system parachain on Polkadot (not to\nbe confused with ",(0,o.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/kusama-statemine/"},"Statemine"),", which is a\nparachain on Kusama). The native token of Statemint is DOT. The Existential Deposit (ED),\ntransaction fees, and the deposits for proxy/multisig operations on Statemint are about 1/10th of\nthe values on the Relay chain. For example, the Existential Deposit of a Statemint account is\n",(0,o.kt)(i.Z,{network:"statemint",path:"consts.balances.existentialDeposit",defaultValue:1e9,filter:"humanReadable",mdxType:"RPC"}),",\n","\nwhen compared to\n",(0,o.kt)(i.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"\n","\non Polkadot. Apart from the core protocol token DOT, the assets held on Statemint can be broadly\ncategorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("p",null,"For additional background on Statemint and Statemine check out\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-"},"this support article"),"."),(0,o.kt)("h2",{id:"creating-assets-on-asset-hub"},"Creating Assets on Asset Hub"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on Statemint, we recommend that you try out this tutorial on Westmint, which\nis a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"The images in the guides below are for Polkadot, but they also apply to Kusama."))),(0,o.kt)("p",null,"To create an asset on Statemint, you would need a deposit of\n",(0,o.kt)(i.Z,{network:"statemint",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand around\n",(0,o.kt)(i.Z,{network:"statemint",path:"consts.assets.metadataDepositBase",defaultValue:20068e5,filter:"humanReadable",mdxType:"RPC"}),"\n","\nfor the metadata . Before you create an asset on Statemint, ensure that your Statemint account\nbalance is a bit more than the sum of those two deposits, which should seamlessly account for the\nrequired deposits and transaction fees. You can send DOT from a Polkadot account to a Statemint\naccount using the teleport functionality. For instructions on teleporting DOT, check this\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required DOT balance on your Statemint account, the following instructions\nshould let you successfully create an asset on Statemint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access Statemint through ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:a(91182).Z,width:"1222",height:"380"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on Statemint, the asset's symbol, number of decimals\nfor the asset, the minimum balance required to hold this asset on a Statemint account and the most\nimportant field of your asset - the unique asset ID. The UI would not let you enter an ID that has\nalready been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:a(28523).Z,width:"1510",height:"798"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:a(98600).Z,width:"1518",height:"510"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction (If you like to verify the transaction details before signing, you\ncan click on the dropdown button pointed by the arrow in the snapshot below).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:a(59416).Z,width:"1520",height:"610"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on Statemint."))}k.isMDXComponent=!0},91182:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const s=a.p+"assets/images/Statemint-asset-0-c5f6c1142338248879ebbf478c15da9f.png"},28523:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const s=a.p+"assets/images/Statemint-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},98600:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const s=a.p+"assets/images/Statemint-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},59416:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});const s=a.p+"assets/images/Statemint-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},46601:()=>{}}]);