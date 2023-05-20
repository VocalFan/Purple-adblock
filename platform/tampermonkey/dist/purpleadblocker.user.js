// ==UserScript==
// @name         Purple Adblocker
// @source       https://github.com/arthurbolsoni/Purple-adblock
// @version      2.5.5
// @description  Per aspera ad astra
// @author       ArthurBolzoni
// @downloadURL  https://raw.githubusercontent.com/arthurbolsoni/Purple-adblock/main/tampermonkey/dist/purpleadblocker.user.js
// @updateURL    https://raw.githubusercontent.com/arthurbolsoni/Purple-adblock/main/tampermonkey/dist/purpleadblocker.user.js
// @match        *://*.twitch.tv/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(()=>{"use strict";var t={114:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=r(i(597));!function(){let t;window.Worker=class extends Worker{constructor(e){console.log("new worker intance "+e),""==e&&super(e),console.log("[Purple]: init "+e);const i=`${s.default}\n      importScripts('${e}');`;super(URL.createObjectURL(new Blob([i],{type:"text/javascript"}))),t=this,t.declareEventWorker(),t.declareEventWindow()}declareEventWorker(){this.addEventListener("message",(e=>{var i,r,s,n,a;switch(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.type){case"getSettings":window.postMessage({type:"getSettings",value:null});break;case"PlayerQualityChanged":t.postMessage({funcName:"setQuality",value:e.data.arg.name});break;case"pause":t.postMessage({funcName:"pause",args:void 0,id:1});break;case"play":t.postMessage({funcName:"play",args:void 0,id:1})}switch(null===(s=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.arg)||void 0===s?void 0:s.key){case"quality":if(!e.data.arg.value.name)break;console.log("Changed quality by player: "+e.data.arg.value.name),t.postMessage({funcName:"setQuality",value:e.data.arg.value.name});break;case"state":t.postMessage({funcName:e.data.arg.value})}null===(a=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.arg)||void 0===a||a.name}))}declareEventWindow(){window.addEventListener("message",(e=>{"setSettings"===e.data.type&&t.postMessage({funcName:"setSettings",value:e.data.value})}))}}}()},597:t=>{t.exports='/*! For license information please see app.worker.js.LICENSE.txt */\n(()=>{var t={799:function(t,e,i){"use strict";var r=this&&this.__decorate||function(t,e,i,r){var s,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a},s=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(s,n){function a(t){try{u(r.next(t))}catch(t){n(t)}}function o(t){try{u(r.throw(t))}catch(t){n(t)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.AppController=void 0;const n=i(289),a=i(35);let o=class{constructor(t){this.appService=t,this.getSettings=()=>i.g.postMessage({type:"getSettings"}),this.getSettings()}onChannel(t,e){return s(this,void 0,void 0,(function*(){const r=yield i.g.request(t,e);if(!r.ok)return console.log("Error on channel load"),r;const s=yield r.text(),n=/hls\\/(.*).m3u8/gm.exec(t)||[];return yield this.appService.setChannel(n[1]),new Response(s)}))}onFetch(t,e){return s(this,void 0,void 0,(function*(){const i=yield(yield request(t,e)).text(),r=yield this.appService.onFetch(i);return new Response(r)}))}onChannelPicture(t,e){return s(this,void 0,void 0,(function*(){return new Response}))}setSettings(t){return s(this,void 0,void 0,(function*(){this.appService.setSettings(t)}))}setQuality(t){return s(this,void 0,void 0,(function*(){this.appService.quality=t.value}))}};r([(0,a.Fetch)("usher.ttvnw.net/api/channel/hls/","picture-by-picture")],o.prototype,"onChannel",null),r([(0,a.Fetch)("hls.ttvnw.net/v1/playlist/")],o.prototype,"onFetch",null),r([(0,a.Fetch)("picture-by-picture")],o.prototype,"onChannelPicture",null),r([(0,a.Message)("setSettings")],o.prototype,"setSettings",null),r([(0,a.Message)("setQuality")],o.prototype,"setQuality",null),o=r([(0,n.Controller)()],o),e.AppController=o},37:function(t,e,i){"use strict";var r=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(s,n){function a(t){try{u(r.next(t))}catch(t){n(t)}}function o(t){try{u(r.throw(t))}catch(t){n(t)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const s=i(799),n=i(651);function a(){i.g.logPrint=t=>console.log("[Purple]: ",t),i.g.appController=new s.AppController(new n.Player),i.g.logPrint("Script running")}e.default=a,i.g.request=i.g.fetch,i.g.fetch=(t,e)=>r(void 0,void 0,void 0,(function*(){if("string"==typeof t)for(var s=0,n=routerList.length;s<n;s++)if(t.includes(routerList[s].match)&&!t.includes(routerList[s].ignore))return new Promise(((n,a)=>r(void 0,void 0,void 0,(function*(){return n(yield i.g.appController[routerList[s].propertyKey](t,e))}))));return i.g.request.apply(this,[t,e])})),i.g.addEventListener("message",(t=>{i.g.messageList.forEach((e=>{t.data.funcName==e.match&&i.g.appController[e.propertyKey](t.data)}))})),a()},289:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Controller=void 0,e.Controller=()=>t=>{}},35:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=e.Fetch=void 0,e.Fetch=(t,e=null)=>(r,s)=>{i.g.routerList||(i.g.routerList=[]),i.g.routerList.push({propertyKey:s,match:t,ignore:e})},e.Message=t=>(e,r)=>{i.g.messageList||(i.g.messageList=[]),i.g.messageList.push({propertyKey:r,match:t})}},651:function(t,e,i){"use strict";var r=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(s,n){function a(t){try{u(r.next(t))}catch(t){n(t)}}function o(t){try{u(r.throw(t))}catch(t){n(t)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Player=void 0;const s=i(770),n=i(938),a=i(682);e.Player=class{constructor(){this.streamList=[],this.actualChannel="",this.playingAds=!1,this.quality="",this.getQuality=()=>i.g.postMessage({type:"getQuality"}),this.getSettings=()=>i.g.postMessage({type:"getSettings"}),this.pause=()=>i.g.postMessage({type:"pause"}),this.play=()=>i.g.postMessage({type:"play"}),this.setSettings=t=>{var e,i,r,s,n;this.setting=t,(null===(e=this.setting)||void 0===e?void 0:e.toggleProxy)&&(null===(i=this.setting)||void 0===i?void 0:i.proxyUrl)&&(null===(s=null===(r=this.currentStream())||void 0===r?void 0:r.tunnelList)||void 0===s||s.push(null===(n=this.setting)||void 0===n?void 0:n.proxyUrl)),logPrint("Settings loaded")},this.pauseAndPlay=()=>{this.pause(),this.play()},this.onStartAds=()=>{console.log("ads started"),this.pauseAndPlay(),this.pauseAndPlay()},this.onEndAds=()=>{console.log("ads ended"),this.pauseAndPlay(),this.pauseAndPlay()},this.isAds=(t,e=!1)=>{const i=(null==t?void 0:t.toString().includes("stitched"))||(null==t?void 0:t.toString().includes("Amazon"))||(null==t?void 0:t.toString().includes("DCM"));return e?(0==this.playingAds&&this.playingAds!=i&&this.onStartAds(),1==this.playingAds&&this.playingAds!=i&&this.onEndAds(),this.playingAds=i,this.playingAds):i},this.currentStream=(t=this.actualChannel)=>{var e;return null===(e=this.streamList)||void 0===e?void 0:e.find((e=>e.channelName===t))}}isWhitelist(){var t,e;return(null===(e=null===(t=this.setting)||void 0===t?void 0:t.whitelist)||void 0===e?void 0:e.includes(this.actualChannel))||!1}onFetch(t){return r(this,void 0,void 0,(function*(){if(this.isWhitelist())return t;if(!this.isAds(t,!0))return this.mergeM3u8Contents([t]);let e=[];this.currentStream().createStreamAccess(n.StreamType.FRONTPAGE),this.currentStream().createStreamAccess(n.StreamType.SITE);const i=yield this.fetchm3u8ByStreamType(n.StreamType.FRONTPAGE);e=e.concat(i.dump);const r=yield this.fetchm3u8ByStreamType(n.StreamType.EXTERNAL);return e=e.concat(r.dump),console.log("All stream types failed"),this.mergeM3u8Contents([t,...e])}))}generateM3u8(t){let e="#EXTM3U\\n";return t.targetDuration&&(e+=`#EXT-X-TARGETDURATION:${t.targetDuration}\\n`),t.mediaSequence&&(e+=`#EXT-X-MEDIA-SEQUENCE:${t.mediaSequence}\\n`),t.segments&&t.segments.forEach((t=>{t.duration&&(e+=`#EXTINF:${t.duration}`,e+="\\n"),e+=`${t.uri}\\n`})),e}mergeM3u8Contents(t){const e=t.map((t=>{const e=new a.Parser;e.push(t),e.end();const i=e.manifest;return i.segments&&i.segments.forEach((e=>{const i=new RegExp(`#EXTINF:([0-9.]*)?,?(.*)(?:\\n|\\r\\n)${e.uri}`),r=t.match(i);r&&(e.title=r[2]?r[2].trim():"")})),i})),i=e[0],r=e.slice(1);if(i.segments){console.log("Segmentos encontrados no manifesto principal:",i.segments.length),console.log("Manifestos de suporte encontrados:",r.length);for(let t=0;t<i.segments.length;t++){const e=i.segments[t];e.title&&(e.title.includes("Amazon")||e.title.includes("DCM"))&&(r.forEach((r=>{if(r.segments){const s=r.segments.find((t=>{if(!t.title.includes("Amazon")&&t.title.includes("DCM"))return!1;const i=new Date(e.dateTimeString),r=new Date(t.dateTimeString);return i.setMilliseconds(0),r.setMilliseconds(0),i.getTime()===r.getTime()}));console.log("Segmento suporte encontrado:",s),s&&(i.segments[t]=s)}})),i.segments.splice(t,1),t--,console.log("Segmento principal removido:",e))}}return this.generateM3u8(i)}fetchm3u8ByStreamType(t){return r(this,void 0,void 0,(function*(){logPrint("Stream Type: "+t);let e=[],r=this.currentStream().getStreamByStreamType(t);for(const s of r){const r=s.findByQuality(this.quality)||s.bestQuality(),n=yield(yield i.g.request(null==r?void 0:r.url)).text();if(e.push(n),!this.isAds(n))return{data:n,dump:e};logPrint("Stream Type: "+t+" - Ads found"),this.currentStream().removeServer(s)}return{data:null,dump:e}}))}setChannel(t){logPrint("Loading channel",t),this.actualChannel=t;const e=new s.Stream(this.actualChannel);this.streamList.push(e)}}},938:(t,e)=>{"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.StreamType=void 0,(i=e.StreamType||(e.StreamType={})).PICTURE="thunderdome",i.EMBED="embed",i.FRONTPAGE="frontpage",i.SITE="site",i.EXTERNAL="external",i.DNS="dns"},503:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Server=e.StreamUrl=void 0,e.StreamUrl=class{constructor(){this.url="",this.quality=""}},e.Server=class{constructor(t){this.bestQuality=()=>this.urlList[0],this.findByQuality=t=>this.urlList.find((e=>e.quality==t)),Object.assign(this,t)}}},770:function(t,e,i){"use strict";var r=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(s,n){function a(t){try{u(r.next(t))}catch(t){n(t)}}function o(t){try{u(r.throw(t))}catch(t){n(t)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Stream=void 0;const s=i(938),n=i(503);e.Stream=class{constructor(t){this.serverList=[],this.tunnelList=["https://eu1.jupter.ga/channel/{channelname}","https://eu2.jupter.ga/channel/{channelname}"],this.tunnelListHls=["https://eu1.jupter.ga/channel/hls/{channelname}"],this.channelName=t}removeServer(t){const e=this.serverList.indexOf(t);e>-1&&this.serverList.splice(e,1)}createServer(t,e="local",i=!0){const r=[];let s;const a=/NAME="((?:\\S+\\s+\\S+|\\S+))",AUTO(?:^|\\S+\\s+)(?:^|\\S+\\s+)(https:\\/\\/video(\\S+).m3u8)/g;for(;null!==(s=a.exec(t));)r.push({quality:s[1],url:s[2]});const o=new n.Server({type:e,urlList:r,sig:i});this.serverList.push(o)}localRequest(t,e=!0){return r(this,void 0,void 0,(function*(){try{const r={operationName:"PlaybackAccessToken_Template",query:\'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) { streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) { value signature __typename } videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) { value signature __typename }}\',variables:{isLive:!0,login:this.channelName,isVod:!1,vodID:"",playerType:t}},s=yield i.g.request("https://gql.twitch.tv/gql",{method:"POST",headers:{Host:"gql.twitch.tv","Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"},body:JSON.stringify(r)}),n=yield s.json(),a="allow_source=true&fast_bread=true&p="+Math.floor(1e7*Math.random())+"&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig="+n.data.streamPlaybackAccessToken.signature+"&supported_codecs=avc1&token="+n.data.streamPlaybackAccessToken.value;if(!e)return a;const o=yield(yield i.g.request("https://usher.ttvnw.net/api/channel/hls/"+this.channelName+".m3u8?"+a)).text();return logPrint("Server loaded "+t),this.createServer(o,t),o}catch(t){return logPrint(t),""}}))}externalRequest(){return r(this,void 0,void 0,(function*(){logPrint("External Server: Loading"),this.tunnelList.map((t=>t.replace("{channelname}",this.channelName))).forEach((t=>r(this,void 0,void 0,(function*(){try{const e=yield i.g.request(t);return e.ok||logPrint("Server proxy return error",t,e),this.createServer(yield e.text(),s.StreamType.EXTERNAL),logPrint("External Server: OK"),!0}catch(e){return logPrint("Server proxy return error",t,e),!1}}))))}))}externalRequest2(t){return r(this,void 0,void 0,(function*(){logPrint("External Server 2: Loading");const e=this.tunnelListHls[0].replace("{channelname}",this.channelName),i=yield this.localRequest(t,!1),r=yield fetch(e,{method:"POST",body:i});if(!r.ok)return void logPrint("Server proxy return error",this.tunnelListHls[0],r);const n=yield r.text();this.createServer(n,s.StreamType.EXTERNAL),logPrint("External Server 2: OK")}))}createStreamAccess(t){return r(this,void 0,void 0,(function*(){if(t==s.StreamType.EXTERNAL)return this.externalRequest2(s.StreamType.SITE),this.externalRequest2(s.StreamType.FRONTPAGE),void this.externalRequest();yield this.localRequest(t)}))}getStreamByStreamType(t){return this.serverList.filter((e=>e.type==t))||[]}}},908:(t,e,i)=>{var r;r="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},t.exports=r},682:(t,e,i)=>{"use strict";i.r(e),i.d(e,{LineStream:()=>u,ParseStream:()=>h,Parser:()=>f});var r=function(){function t(){this.listeners={}}var e=t.prototype;return e.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},e.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t]=this.listeners[t].slice(0),this.listeners[t].splice(i,1),i>-1},e.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var s=Array.prototype.slice.call(arguments,1),n=e.length,a=0;a<n;++a)e[a].apply(this,s)},e.dispose=function(){this.listeners={}},e.pipe=function(t){this.on("data",(function(e){t.push(e)}))},t}();function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},s.apply(this,arguments)}var n=i(908),a=i.n(n);function o(t){for(var e,i=(e=t,a().atob?a().atob(e):Buffer.from(e,"base64").toString("binary")),r=new Uint8Array(i.length),s=0;s<i.length;s++)r[s]=i.charCodeAt(s);return r}class u extends r{constructor(){super(),this.buffer=""}push(t){let e;for(this.buffer+=t,e=this.buffer.indexOf("\\n");e>-1;e=this.buffer.indexOf("\\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)}}const l=String.fromCharCode(9),c=function(t){const e=/([0-9.]*)?@?([0-9.]*)?/.exec(t||""),i={};return e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),i},g=function(t){const e={};if(!t)return e;const i=t.split(new RegExp(\'(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))\'));let r,s=i.length;for(;s--;)""!==i[s]&&(r=/([^=]*)=(.*)/.exec(i[s]).slice(1),r[0]=r[0].replace(/^\\s+|\\s+$/g,""),r[1]=r[1].replace(/^\\s+|\\s+$/g,""),r[1]=r[1].replace(/^[\'"](.*)[\'"]$/g,"$1"),e[r[0]]=r[1]);return e};class h extends r{constructor(){super(),this.customParsers=[],this.tagMappers=[]}push(t){let e,i;0!==(t=t.trim()).length&&("#"===t[0]?this.tagMappers.reduce(((e,i)=>{const r=i(t);return r===t?e:e.concat([r])}),[t]).forEach((t=>{for(let e=0;e<this.customParsers.length;e++)if(this.customParsers[e].call(this,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\\r",""),e=/^#EXTM3U/.exec(t),e)this.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:([0-9\\.]*)?,?(.*)?$/.exec(t),e)return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(t),e)return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:([0-9.]*)?/.exec(t),e)return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:(\\-?[0-9.]*)?/.exec(t),e)return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:(\\-?[0-9.]*)?/.exec(t),e)return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(t),e)return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:(.*)?$/.exec(t),e)return i=s(c(e[1]),{type:"tag",tagType:"byterange"}),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(t),e)return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-MAP:(.*)$/.exec(t),e){if(i={type:"tag",tagType:"map"},e[1]){const t=g(e[1]);t.URI&&(i.uri=t.URI),t.BYTERANGE&&(i.byterange=c(t.BYTERANGE))}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:(.*)$/.exec(t),e){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=g(e[1]),i.attributes.RESOLUTION){const t=i.attributes.RESOLUTION.split("x"),e={};t[0]&&(e.width=parseInt(t[0],10)),t[1]&&(e.height=parseInt(t[1],10)),i.attributes.RESOLUTION=e}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["FRAME-RATE"]&&(i.attributes["FRAME-RATE"]=parseFloat(i.attributes["FRAME-RATE"])),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:(.*)$/.exec(t),e)return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=g(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t),e)this.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t),e)this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(t),e)return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-KEY:(.*)$/.exec(t),e)return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=g(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(e=/^#EXT-X-START:(.*)$/.exec(t),e)return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=g(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(t),e)return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:(.*)?$/.exec(t),e)return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-IN:(.*)?$/.exec(t),e)return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-SKIP:(.*)$/.exec(t),e&&e[1])return i={type:"tag",tagType:"skip"},i.attributes=g(e[1]),i.attributes.hasOwnProperty("SKIPPED-SEGMENTS")&&(i.attributes["SKIPPED-SEGMENTS"]=parseInt(i.attributes["SKIPPED-SEGMENTS"],10)),i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES")&&(i.attributes["RECENTLY-REMOVED-DATERANGES"]=i.attributes["RECENTLY-REMOVED-DATERANGES"].split(l)),void this.trigger("data",i);if(e=/^#EXT-X-PART:(.*)$/.exec(t),e&&e[1])return i={type:"tag",tagType:"part"},i.attributes=g(e[1]),["DURATION"].forEach((function(t){i.attributes.hasOwnProperty(t)&&(i.attributes[t]=parseFloat(i.attributes[t]))})),["INDEPENDENT","GAP"].forEach((function(t){i.attributes.hasOwnProperty(t)&&(i.attributes[t]=/YES/.test(i.attributes[t]))})),i.attributes.hasOwnProperty("BYTERANGE")&&(i.attributes.byterange=c(i.attributes.BYTERANGE)),void this.trigger("data",i);if(e=/^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t),e&&e[1])return i={type:"tag",tagType:"server-control"},i.attributes=g(e[1]),["CAN-SKIP-UNTIL","PART-HOLD-BACK","HOLD-BACK"].forEach((function(t){i.attributes.hasOwnProperty(t)&&(i.attributes[t]=parseFloat(i.attributes[t]))})),["CAN-SKIP-DATERANGES","CAN-BLOCK-RELOAD"].forEach((function(t){i.attributes.hasOwnProperty(t)&&(i.attributes[t]=/YES/.test(i.attributes[t]))})),void this.trigger("data",i);if(e=/^#EXT-X-PART-INF:(.*)$/.exec(t),e&&e[1])return i={type:"tag",tagType:"part-inf"},i.attributes=g(e[1]),["PART-TARGET"].forEach((function(t){i.attributes.hasOwnProperty(t)&&(i.attributes[t]=parseFloat(i.attributes[t]))})),void this.trigger("data",i);if(e=/^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t),e&&e[1])return i={type:"tag",tagType:"preload-hint"},i.attributes=g(e[1]),["BYTERANGE-START","BYTERANGE-LENGTH"].forEach((function(t){if(i.attributes.hasOwnProperty(t)){i.attributes[t]=parseInt(i.attributes[t],10);const e="BYTERANGE-LENGTH"===t?"length":"offset";i.attributes.byterange=i.attributes.byterange||{},i.attributes.byterange[e]=i.attributes[t],delete i.attributes[t]}})),void this.trigger("data",i);if(e=/^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t),e&&e[1])return i={type:"tag",tagType:"rendition-report"},i.attributes=g(e[1]),["LAST-MSN","LAST-PART"].forEach((function(t){i.attributes.hasOwnProperty(t)&&(i.attributes[t]=parseInt(i.attributes[t],10))})),void this.trigger("data",i);this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})})):this.trigger("data",{type:"uri",uri:t}))}addParser({expression:t,customType:e,dataParser:i,segment:r}){"function"!=typeof i&&(i=t=>t),this.customParsers.push((s=>{if(t.exec(s))return this.trigger("data",{type:"custom",data:i(s),customType:e,segment:r}),!0}))}addTagMapper({expression:t,map:e}){this.tagMappers.push((i=>t.test(i)?e(i):i))}}const p=function(t){const e={};return Object.keys(t).forEach((function(i){var r;e[(r=i,r.toLowerCase().replace(/-(\\w)/g,(t=>t[1].toUpperCase())))]=t[i]})),e},d=function(t){const{serverControl:e,targetDuration:i,partTargetDuration:r}=t;if(!e)return;const s="#EXT-X-SERVER-CONTROL",n="holdBack",a="partHoldBack",o=i&&3*i,u=r&&2*r;i&&!e.hasOwnProperty(n)&&(e[n]=o,this.trigger("info",{message:`${s} defaulting HOLD-BACK to targetDuration * 3 (${o}).`})),o&&e[n]<o&&(this.trigger("warn",{message:`${s} clamping HOLD-BACK (${e[n]}) to targetDuration * 3 (${o})`}),e[n]=o),r&&!e.hasOwnProperty(a)&&(e[a]=3*r,this.trigger("info",{message:`${s} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e[a]}).`})),r&&e[a]<u&&(this.trigger("warn",{message:`${s} clamping PART-HOLD-BACK (${e[a]}) to partTargetDuration * 2 (${u}).`}),e[a]=u)};class f extends r{constructor(){super(),this.lineStream=new u,this.parseStream=new h,this.lineStream.pipe(this.parseStream);const t=this,e=[];let i,r,n={},a=!1;const l=function(){},c={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}};let g=0;this.manifest={allowCache:!0,discontinuityStarts:[],segments:[]};let f=0,y=0;this.on("end",(()=>{n.uri||!n.parts&&!n.preloadHints||(!n.map&&i&&(n.map=i),!n.key&&r&&(n.key=r),n.timeline||"number"!=typeof g||(n.timeline=g),this.manifest.preloadSegment=n)})),this.parseStream.on("data",(function(u){let h,m;({tag(){({version(){u.version&&(this.manifest.version=u.version)},"allow-cache"(){this.manifest.allowCache=u.allowed,"allowed"in u||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange(){const t={};"length"in u&&(n.byterange=t,t.length=u.length,"offset"in u||(u.offset=f)),"offset"in u&&(n.byterange=t,t.offset=u.offset),f=t.offset+t.length},endlist(){this.manifest.endList=!0},inf(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),u.duration>0&&(n.duration=u.duration),0===u.duration&&(n.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=e},key(){if(u.attributes)if("NONE"!==u.attributes.METHOD)if(u.attributes.URI){if("com.apple.streamingkeydelivery"===u.attributes.KEYFORMAT)return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.apple.fps.1_0"]={attributes:u.attributes});if("com.microsoft.playready"===u.attributes.KEYFORMAT)return this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.microsoft.playready"]={uri:u.attributes.URI});if("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"===u.attributes.KEYFORMAT)return-1===["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(u.attributes.METHOD)?void this.trigger("warn",{message:"invalid key method provided for Widevine"}):("SAMPLE-AES-CENC"===u.attributes.METHOD&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),"data:text/plain;base64,"!==u.attributes.URI.substring(0,23)?void this.trigger("warn",{message:"invalid key URI provided for Widevine"}):u.attributes.KEYID&&"0x"===u.attributes.KEYID.substring(0,2)?(this.manifest.contentProtection=this.manifest.contentProtection||{},void(this.manifest.contentProtection["com.widevine.alpha"]={attributes:{schemeIdUri:u.attributes.KEYFORMAT,keyId:u.attributes.KEYID.substring(2)},pssh:o(u.attributes.URI.split(",")[1])})):void this.trigger("warn",{message:"invalid key ID provided for Widevine"}));u.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),r={method:u.attributes.METHOD||"AES-128",uri:u.attributes.URI},void 0!==u.attributes.IV&&(r.iv=u.attributes.IV)}else this.trigger("warn",{message:"ignoring key declaration without URI"});else r=null;else this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence"(){isFinite(u.number)?this.manifest.mediaSequence=u.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+u.number})},"discontinuity-sequence"(){isFinite(u.number)?(this.manifest.discontinuitySequence=u.number,g=u.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+u.number})},"playlist-type"(){/VOD|EVENT/.test(u.playlistType)?this.manifest.playlistType=u.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+u.playlist})},map(){i={},u.uri&&(i.uri=u.uri),u.byterange&&(i.byterange=u.byterange),r&&(i.key=r)},"stream-inf"(){this.manifest.playlists=e,this.manifest.mediaGroups=this.manifest.mediaGroups||c,u.attributes?(n.attributes||(n.attributes={}),s(n.attributes,u.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||c,!(u.attributes&&u.attributes.TYPE&&u.attributes["GROUP-ID"]&&u.attributes.NAME))return void this.trigger("warn",{message:"ignoring incomplete or missing media group"});const t=this.manifest.mediaGroups[u.attributes.TYPE];t[u.attributes["GROUP-ID"]]=t[u.attributes["GROUP-ID"]]||{},h=t[u.attributes["GROUP-ID"]],m={default:/yes/i.test(u.attributes.DEFAULT)},m.default?m.autoselect=!0:m.autoselect=/yes/i.test(u.attributes.AUTOSELECT),u.attributes.LANGUAGE&&(m.language=u.attributes.LANGUAGE),u.attributes.URI&&(m.uri=u.attributes.URI),u.attributes["INSTREAM-ID"]&&(m.instreamId=u.attributes["INSTREAM-ID"]),u.attributes.CHARACTERISTICS&&(m.characteristics=u.attributes.CHARACTERISTICS),u.attributes.FORCED&&(m.forced=/yes/i.test(u.attributes.FORCED)),h[u.attributes.NAME]=m},discontinuity(){g+=1,n.discontinuity=!0,this.manifest.discontinuityStarts.push(e.length)},"program-date-time"(){void 0===this.manifest.dateTimeString&&(this.manifest.dateTimeString=u.dateTimeString,this.manifest.dateTimeObject=u.dateTimeObject),n.dateTimeString=u.dateTimeString,n.dateTimeObject=u.dateTimeObject},targetduration(){!isFinite(u.duration)||u.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+u.duration}):(this.manifest.targetDuration=u.duration,d.call(this,this.manifest))},start(){u.attributes&&!isNaN(u.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:u.attributes["TIME-OFFSET"],precise:u.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out"(){n.cueOut=u.data},"cue-out-cont"(){n.cueOutCont=u.data},"cue-in"(){n.cueIn=u.data},skip(){this.manifest.skip=p(u.attributes),this.warnOnMissingAttributes_("#EXT-X-SKIP",u.attributes,["SKIPPED-SEGMENTS"])},part(){a=!0;const t=this.manifest.segments.length,e=p(u.attributes);n.parts=n.parts||[],n.parts.push(e),e.byterange&&(e.byterange.hasOwnProperty("offset")||(e.byterange.offset=y),y=e.byterange.offset+e.byterange.length);const i=n.parts.length-1;this.warnOnMissingAttributes_(`#EXT-X-PART #${i} for segment #${t}`,u.attributes,["URI","DURATION"]),this.manifest.renditionReports&&this.manifest.renditionReports.forEach(((t,e)=>{t.hasOwnProperty("lastPart")||this.trigger("warn",{message:`#EXT-X-RENDITION-REPORT #${e} lacks required attribute(s): LAST-PART`})}))},"server-control"(){const t=this.manifest.serverControl=p(u.attributes);t.hasOwnProperty("canBlockReload")||(t.canBlockReload=!1,this.trigger("info",{message:"#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})),d.call(this,this.manifest),t.canSkipDateranges&&!t.hasOwnProperty("canSkipUntil")&&this.trigger("warn",{message:"#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})},"preload-hint"(){const t=this.manifest.segments.length,e=p(u.attributes),i=e.type&&"PART"===e.type;n.preloadHints=n.preloadHints||[],n.preloadHints.push(e),e.byterange&&(e.byterange.hasOwnProperty("offset")||(e.byterange.offset=i?y:0,i&&(y=e.byterange.offset+e.byterange.length)));const r=n.preloadHints.length-1;if(this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${r} for segment #${t}`,u.attributes,["TYPE","URI"]),e.type)for(let i=0;i<n.preloadHints.length-1;i++){const s=n.preloadHints[i];s.type&&s.type===e.type&&this.trigger("warn",{message:`#EXT-X-PRELOAD-HINT #${r} for segment #${t} has the same TYPE ${e.type} as preload hint #${i}`})}},"rendition-report"(){const t=p(u.attributes);this.manifest.renditionReports=this.manifest.renditionReports||[],this.manifest.renditionReports.push(t);const e=this.manifest.renditionReports.length-1,i=["LAST-MSN","URI"];a&&i.push("LAST-PART"),this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${e}`,u.attributes,i)},"part-inf"(){this.manifest.partInf=p(u.attributes),this.warnOnMissingAttributes_("#EXT-X-PART-INF",u.attributes,["PART-TARGET"]),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),d.call(this,this.manifest)}}[u.tagType]||l).call(t)},uri(){n.uri=u.uri,e.push(n),this.manifest.targetDuration&&!("duration"in n)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),n.duration=this.manifest.targetDuration),r&&(n.key=r),n.timeline=g,i&&(n.map=i),y=0,n={}},comment(){},custom(){u.segment?(n.custom=n.custom||{},n.custom[u.customType]=u.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[u.customType]=u.data)}})[u.type].call(t)}))}warnOnMissingAttributes_(t,e,i){const r=[];i.forEach((function(t){e.hasOwnProperty(t)||r.push(t)})),r.length&&this.trigger("warn",{message:`${t} lacks required attribute(s): ${r.join(", ")}`})}push(t){this.lineStream.push(t)}end(){this.lineStream.push("\\n"),this.trigger("end")}addParser(t){this.parseStream.addParser(t)}addTagMapper(t){this.parseStream.addTagMapper(t)}}}},e={};function i(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(37)})();'}},e={};!function i(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,i),n.exports}(114)})();