"use strict";(self.webpackChunkplenaria2021=self.webpackChunkplenaria2021||[]).push([[352],{6352:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(7401);class s{constructor(){this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}registerEvent(e,t){navigator.presentation.receiver.connectionList.then((n=>{n.connections.forEach((n=>{n.addEventListener(e,t)})),n.addEventListener("connectionavailable",(e=>{t(e.connection)}))}))}setUp(){this.registerEvent("close",(e=>{console.log(e)}))}onChangePage(e){"presentation"===this.apiType?this.registerEvent("message",(t=>{const n=JSON.parse(t.data).page;e(n)})):window.addEventListener("storage",(t=>{if("page"===t.key){const n=JSON.parse(t.newValue).page;e(n)}}))}}var i=n(8742),r=n(6596);const o=(0,a.memo)((()=>{const{state:{currentIndex:e},dispatch:t}=(0,r.re)(),[n,o]=(0,a.useState)(null);return(0,a.useEffect)((()=>{null==n||n.onChangePage((e=>{t((0,r.$L)(e))}))}),[n]),(0,a.useEffect)((()=>{window.onload=()=>{o(new s)}}),[]),(0,a.useEffect)((()=>{const{swiper:t}=document.querySelector("#main-slides");null==t||t.slideTo(e)}),[e]),a.createElement("div",{className:"fusuma-presenter-view"},a.createElement(i.B,{id:"main-slides"}))}))}}]);