/*
Copyright 2012, KISSY UI Library v1.20
MIT Licensed
build time: Mar 29 13:31
*/
KISSY.add("datalazyload/impl",function(f,c,k,m){function i(a,b){if(!(this instanceof i))return new i(a,b);if(b===m){b=a;a=[n]}f.isArray(a)||(a=[c.get(a)||n]);this.containers=a;this.config=f.merge(s,b);this.callbacks={els:[],fns:[]};this._init();return m}var l=window,t=0.1,n=document,o="scroll",p="resize",s={mod:"manual",diff:"default",placeholder:"none",execScript:true};f.augment(i,{_init:function(){this.threshold=this._getThreshold();this._filterItems();this._initLoadEvent()},_filterItems:function(){var a=
this.containers,b,d,e,h=[],g=[];b=0;for(d=a.length;b<d;++b){e=c.query("img",a[b]);h=h.concat(f.filter(e,this._filterImg,this));e=c.query("textarea",a[b]);g=g.concat(f.filter(e,this._filterArea,this))}this.images=h;this.areaes=g},_filterImg:function(a){var b=a.getAttribute("data-ks-lazyload"),d=this.threshold,e=this.config.placeholder;if(this.config.mod==="manual"){if(b){if(e!=="none")a.src=e;return true}}else if(c.offset(a).top>d&&!b){c.attr(a,"data-ks-lazyload",a.src);if(e!=="none")a.src=e;else a.removeAttribute("src");
return true}},_filterArea:function(a){return c.hasClass(a,"ks-datalazyload")},_initLoadEvent:function(){function a(){d||(d=f.later(function(){b();d=null},t))}function b(){e._loadItems();if(e._getItemsLength()===0){k.remove(l,o,a);k.remove(l,p,h)}}var d,e=this,h;k.on(l,o,a);k.on(l,p,h=function(){e.threshold=e._getThreshold();a()});e._getItemsLength()&&f.ready(function(){b()})},_loadItems:function(){this._loadImgs();this._loadAreas();this._fireCallbacks()},_loadImgs:function(){this.images=f.filter(this.images,
this._loadImg,this)},_loadImg:function(a){var b=this.threshold+c.scrollTop();if(c.offset(a).top<=b)this._loadImgSrc(a);else return true},_loadImgSrc:function(a,b){b=b||"data-ks-lazyload";var d=a.getAttribute(b);if(d&&a.src!=d){a.src=d;a.removeAttribute(b)}},_loadAreas:function(){this.areaes=f.filter(this.areaes,this._loadArea,this)},_loadArea:function(a){var b=c.css(a,"display")==="none";if(c.offset(b?a.parentNode:a).top<=this.threshold+c.scrollTop())this._loadAreaData(a.parentNode,a,this.config.execScript);
else return true},_loadAreaData:function(a,b,d){b.style.display="none";b.className="";a=c.create("<div>");b.parentNode.insertBefore(a,b);c.html(a,b.value,d===m?true:d)},_fireCallbacks:function(){var a=this.callbacks,b=a.els,d=a.fns,e=this.threshold+c.scrollTop(),h,g,j,q=[],r=[];for(h=0;(g=b[h])&&(j=d[h++]);)if(c.offset(g).top<=e)j.call(g);else{q.push(g);r.push(j)}a.els=q;a.fns=r},addCallback:function(a,b){var d=this.callbacks;if((a=c.get(a))&&f.isFunction(b)){d.els.push(a);d.fns.push(b)}this._fireCallbacks()},
_getThreshold:function(){var a=this.config.diff,b=c.viewportHeight();return a==="default"?2*b:b+ +a},_getItemsLength:function(){return this.images.length+this.areaes.length+this.callbacks.els.length},loadCustomLazyData:function(a,b){var d=this,e,h;if(b==="img-src")b="img";f.isArray(a)||(a=[c.get(a)]);f.each(a,function(g){switch(b){case "img":h=g.nodeName==="IMG"?[g]:c.query("img",g);f.each(h,function(j){d._loadImgSrc(j,"data-ks-lazyload-custom")});break;default:(e=c.get("textarea",g))&&c.hasClass(e,
"ks-datalazyload-custom")&&d._loadAreaData(g,e)}})}});f.mix(i,i.prototype,true,["loadCustomLazyData","_loadImgSrc","_loadAreaData"]);return i},{requires:["dom","event"]});KISSY.add("datalazyload",function(f,c){return f.DataLazyload=c},{requires:["datalazyload/impl"]});
