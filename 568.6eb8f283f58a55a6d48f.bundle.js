"use strict";(self.webpackChunkplenaria2021=self.webpackChunkplenaria2021||[]).push([[568],{4568:(e,t,n)=>{function l(e){let t=null,n=null;document.addEventListener("touchstart",(e=>{const{clientX:l,clientY:c}=e.touches[0];t=l,n=c}),!1),document.addEventListener("touchmove",(l=>{if(!t||!n)return;const c=l.touches[0];let u=t-c.clientX,s=n-c.clientY;Math.abs(u)>Math.abs(s)&&e(u>0?"+":"-"),t=null,n=null}),!1)}n.r(t),n.d(t,{swipeEvent:()=>l})}}]);