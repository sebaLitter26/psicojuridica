"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7],{7:(m,a,s)=>{s.r(a),s.d(a,{ImageSkeletonDirective:()=>n});var t=s(3953),r=s(462);let n=(()=>{class i{constructor(){this.src=t.hFB.required(),this.platformCheck=(0,t.WQX)(r.f),this.imageRef=(0,t.WQX)(t.aKT),this.renderer=(0,t.WQX)(t.sFG),this.defaultLocalImage="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}ngOnChanges(){this.initImage()}initImage(){if(this.platformCheck.onServer)return;this.renderer.addClass(this.imageRef.nativeElement,"animate-skeleton-loading");const e=new Image;this.src&&(e.onload=()=>{this.setImage(this.resolveImage(this.src())),this.renderer.removeClass(this.imageRef.nativeElement,"animate-skeleton-loading")},e.onerror=()=>{this.setImage(this.defaultLocalImage),this.renderer.removeClass(this.imageRef.nativeElement,"animate-skeleton-loading")},e.src=this.resolveImage(this.src()))}setImage(e){this.imageRef.nativeElement.setAttribute("src",e)}resolveImage(e){return e||this.defaultLocalImage}static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275dir=t.FsC({type:i,selectors:[["img","skeleton",""]],inputs:{src:[1,"src"]},standalone:!0,features:[t.OA$]})}return i})()}}]);