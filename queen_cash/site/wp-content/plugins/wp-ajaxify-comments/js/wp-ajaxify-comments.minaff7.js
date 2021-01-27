/*
 * jsUri v1.1.1
 * https://github.com/derek-watson/jsUri
 *
 * Copyright 2011, Derek Watson
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Includes parseUri regular expressions
 * http://blog.stevenlevithan.com/archives/parseuri
 * Copyright 2007, Steven Levithan
 * Released under the MIT license.
 *
 * Date: Mon Nov 14 20:06:34 2011 -0800
 */
var Query=function(b){var e=function(n){var k=[],m,r,o,l;if(typeof(n)==="undefined"||n===null||n===""){return k}if(n.indexOf("?")===0){n=n.substring(1)}r=n.toString().split(/[&;]/);for(m=0;m<r.length;m++){o=r[m];l=o.split("=");k.push([l[0],l[1]])}return k},d=e(b),c=function(){var l="",k,m;for(k=0;k<d.length;k++){m=d[k];if(l.length>0){l+="&"}l+=m.join("=")}return l.length>0?"?"+l:l},a=function(k){k=decodeURIComponent(k);k=k.replace("+"," ");return k},i=function(l){var m,k;for(k=0;k<d.length;k++){m=d[k];if(a(l)===a(m[0])){return m[1]}}},h=function(m){var k=[],l,n;for(l=0;l<d.length;l++){n=d[l];if(a(m)===a(n[0])){k.push(n[1])}}return k},j=function(n,q){var k=[],m,p,l,o;for(m=0;m<d.length;m++){p=d[m];l=a(p[0])===a(n);o=a(p[1])===a(q);if((arguments.length===1&&!l)||(arguments.length===2&&!l&&!o)){k.push(p)}}d=k;return this},f=function(l,m,k){if(arguments.length===3&&k!==-1){k=Math.min(k,d.length);d.splice(k,0,[l,m])}else{if(arguments.length>0){d.push([l,m])}}return this},g=function(o,m,k){var l=-1,n,p;if(arguments.length===3){for(n=0;n<d.length;n++){p=d[n];if(a(p[0])===a(o)&&decodeURIComponent(p[1])===a(k)){l=n;break}}j(o,k).addParam(o,m,l)}else{for(n=0;n<d.length;n++){p=d[n];if(a(p[0])===a(o)){l=n;break}}j(o);f(o,m,l)}return this};return{getParamValue:i,getParamValues:h,deleteParam:j,addParam:f,replaceParam:g,toString:c}};var Uri=function(k){var l=false,x=function(J){var F={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},H=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],I={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},D=F[l?"strict":"loose"].exec(J),G={},E=14;while(E--){G[H[E]]=D[E]||""}G[I.name]={};G[H[12]].replace(I.parser,function(L,K,M){if(K){G[I.name][K]=M}});return G},j=x(k||""),C=new Query(j.query),o=function(D){if(typeof D!=="undefined"){j.protocol=D}return j.protocol},h=null,b=function(D){if(typeof D!=="undefined"){h=D}if(h===null){return(j.source.indexOf("//")!==-1)}else{return h}},g=function(D){if(typeof D!=="undefined"){j.userInfo=D}return j.userInfo},p=function(D){if(typeof D!=="undefined"){j.host=D}return j.host},m=function(D){if(typeof D!=="undefined"){j.port=D}return j.port},r=function(D){if(typeof D!=="undefined"){j.path=D}return j.path},f=function(D){if(typeof D!=="undefined"){C=new Query(D)}return C},i=function(D){if(typeof D!=="undefined"){j.anchor=D}return j.anchor},w=function(D){o(D);return this},s=function(D){b(D);return this},n=function(D){g(D);return this},y=function(D){p(D);return this},u=function(D){m(D);return this},B=function(D){r(D);return this},t=function(D){f(D);return this},a=function(D){i(D);return this},c=function(D){return f().getParamValue(D)},e=function(D){return f().getParamValues(D)},z=function(D,E){if(arguments.length===2){f().deleteParam(D,E)}else{f().deleteParam(D)}return this},d=function(E,F,D){if(arguments.length===3){f().addParam(E,F,D)}else{f().addParam(E,F)}return this},q=function(F,E,D){if(arguments.length===3){f().replaceParam(F,E,D)}else{f().replaceParam(F,E)}return this},v=function(){var D="",E=function(F){return(F!==null&&F!=="")};if(E(o())){D+=o();if(o().indexOf(":")!==o().length-1){D+=":"}D+="//"}else{if(b()&&E(p())){D+="//"}}if(E(g())&&E(p())){D+=g();if(g().indexOf("@")!==g().length-1){D+="@"}}if(E(p())){D+=p();if(E(m())){D+=":"+m()}}if(E(r())){D+=r()}else{if(E(p())&&(E(f().toString())||E(i()))){D+="/"}}if(E(f().toString())){if(f().toString().indexOf("?")!==0){D+="?"}D+=f().toString()}if(E(i())){if(i().indexOf("#")!==0){D+="#"}D+=i()}return D},A=function(){return new Uri(v())};return{protocol:o,hasAuthorityPrefix:b,userInfo:g,host:p,port:m,path:r,query:f,anchor:i,setProtocol:w,setHasAuthorityPrefix:s,setUserInfo:n,setHost:y,setPort:u,setPath:B,setQuery:t,setAnchor:a,getQueryParamValue:c,getQueryParamValues:e,deleteQueryParam:z,addQueryParam:d,replaceQueryParam:q,toString:v,clone:A}};var jsUri=Uri;
/*
 * jQuery blockUI plugin
 * Version 2.64.0-2013.07.18
 * @requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
(function(){function a(j){j.fn._fadeIn=j.fn.fadeIn;var d=j.noop||function(){};var n=/MSIE/.test(navigator.userAgent);var f=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);var k=document.documentMode||0;var g=j.isFunction(document.createElement("div").style.setExpression);j.blockUI=function(r){e(window,r)};j.unblockUI=function(r){i(window,r)};j.growlUI=function(x,u,v,s){var t=j('<div class="growlUI"></div>');if(x){t.append("<h1>"+x+"</h1>")}if(u){t.append("<h2>"+u+"</h2>")}if(v===undefined){v=3000}var r=function(y){y=y||{};j.blockUI({message:t,fadeIn:typeof y.fadeIn!=="undefined"?y.fadeIn:700,fadeOut:typeof y.fadeOut!=="undefined"?y.fadeOut:1000,timeout:typeof y.timeout!=="undefined"?y.timeout:v,centerY:false,showOverlay:false,onUnblock:s,css:j.blockUI.defaults.growlCSS})};r();var w=t.css("opacity");t.mouseover(function(){r({fadeIn:0,timeout:30000});var y=j(".blockMsg");y.stop();y.fadeTo(300,1)}).mouseout(function(){j(".blockMsg").fadeOut(1000)})};j.fn.block=function(s){if(this[0]===window){j.blockUI(s);return this}var r=j.extend({},j.blockUI.defaults,s||{});this.each(function(){var t=j(this);if(r.ignoreIfBlocked&&t.data("blockUI.isBlocked")){return}t.unblock({fadeOut:0})});return this.each(function(){if(j.css(this,"position")=="static"){this.style.position="relative";j(this).data("blockUI.static",true)}this.style.zoom=1;e(this,s)})};j.fn.unblock=function(r){if(this[0]===window){j.unblockUI(r);return this}return this.each(function(){i(this,r)})};j.blockUI.version=2.6;j.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:true,theme:false,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:0.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:0.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:false,baseZ:1000,centerX:true,centerY:true,allowBodyStretch:true,bindEvents:true,constrainTabKey:true,fadeIn:200,fadeOut:400,timeout:0,showOverlay:true,focusInput:true,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:false};var c=null;var h=[];function e(v,H){var E,P;var C=(v==window);var y=(H&&H.message!==undefined?H.message:undefined);H=j.extend({},j.blockUI.defaults,H||{});if(H.ignoreIfBlocked&&j(v).data("blockUI.isBlocked")){return}H.overlayCSS=j.extend({},j.blockUI.defaults.overlayCSS,H.overlayCSS||{});E=j.extend({},j.blockUI.defaults.css,H.css||{});if(H.onOverlayClick){H.overlayCSS.cursor="pointer"}P=j.extend({},j.blockUI.defaults.themedCSS,H.themedCSS||{});y=y===undefined?H.message:y;if(C&&c){i(window,{fadeOut:0})}if(y&&typeof y!="string"&&(y.parentNode||y.jquery)){var K=y.jquery?y[0]:y;var R={};j(v).data("blockUI.history",R);R.el=K;R.parent=K.parentNode;R.display=K.style.display;R.position=K.style.position;if(R.parent){R.parent.removeChild(K)}}j(v).data("blockUI.onUnblock",H.onUnblock);var D=H.baseZ;var O,N,M,I;if(n||H.forceIframe){O=j('<iframe class="blockUI" style="z-index:'+(D++)+';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+H.iframeSrc+'"></iframe>')}else{O=j('<div class="blockUI" style="display:none"></div>')}if(H.theme){N=j('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+(D++)+';display:none"></div>')}else{N=j('<div class="blockUI blockOverlay" style="z-index:'+(D++)+';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>')}if(H.theme&&C){I='<div class="blockUI '+H.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(D+10)+';display:none;position:fixed">';if(H.title){I+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(H.title||"&nbsp;")+"</div>"}I+='<div class="ui-widget-content ui-dialog-content"></div>';I+="</div>"}else{if(H.theme){I='<div class="blockUI '+H.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(D+10)+';display:none;position:absolute">';if(H.title){I+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(H.title||"&nbsp;")+"</div>"}I+='<div class="ui-widget-content ui-dialog-content"></div>';I+="</div>"}else{if(C){I='<div class="blockUI '+H.blockMsgClass+' blockPage" style="z-index:'+(D+10)+';display:none;position:fixed"></div>'}else{I='<div class="blockUI '+H.blockMsgClass+' blockElement" style="z-index:'+(D+10)+';display:none;position:absolute"></div>'}}}M=j(I);if(y){if(H.theme){M.css(P);M.addClass("ui-widget-content")}else{M.css(E)}}if(!H.theme){N.css(H.overlayCSS)}N.css("position",C?"fixed":"absolute");if(n||H.forceIframe){O.css("opacity",0)}var B=[O,N,M],Q=C?j("body"):j(v);j.each(B,function(){this.appendTo(Q)});if(H.theme&&H.draggable&&j.fn.draggable){M.draggable({handle:".ui-dialog-titlebar",cancel:"li"})}var x=g&&(!j.support.boxModel||j("object,embed",C?null:v).length>0);if(f||x){if(C&&H.allowBodyStretch&&j.support.boxModel){j("html,body").css("height","100%")}if((f||!j.support.boxModel)&&!C){var G=o(v,"borderTopWidth"),L=o(v,"borderLeftWidth");var A=G?"(0 - "+G+")":0;var F=L?"(0 - "+L+")":0}j.each(B,function(t,U){var z=U[0].style;z.position="absolute";if(t<2){if(C){z.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+H.quirksmodeOffsetHack+') + "px"')}else{z.setExpression("height",'this.parentNode.offsetHeight + "px"')}if(C){z.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')}else{z.setExpression("width",'this.parentNode.offsetWidth + "px"')}if(F){z.setExpression("left",F)}if(A){z.setExpression("top",A)}}else{if(H.centerY){if(C){z.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')}z.marginTop=0}else{if(!H.centerY&&C){var S=(H.css&&H.css.top)?parseInt(H.css.top,10):0;var T="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+S+') + "px"';z.setExpression("top",T)}}}})}if(y){if(H.theme){M.find(".ui-widget-content").append(y)}else{M.append(y)}if(y.jquery||y.nodeType){j(y).show()}}if((n||H.forceIframe)&&H.showOverlay){O.show()}if(H.fadeIn){var J=H.onBlock?H.onBlock:d;var u=(H.showOverlay&&!y)?J:d;var r=y?J:d;if(H.showOverlay){N._fadeIn(H.fadeIn,u)}if(y){M._fadeIn(H.fadeIn,r)}}else{if(H.showOverlay){N.show()}if(y){M.show()}if(H.onBlock){H.onBlock()}}m(1,v,H);if(C){c=M[0];h=j(H.focusableElements,c);if(H.focusInput){setTimeout(q,20)}}else{b(M[0],H.centerX,H.centerY)}if(H.timeout){var w=setTimeout(function(){if(C){j.unblockUI(H)}else{j(v).unblock(H)}},H.timeout);j(v).data("blockUI.timeout",w)}}function i(u,w){var v;var t=(u==window);var s=j(u);var x=s.data("blockUI.history");var y=s.data("blockUI.timeout");if(y){clearTimeout(y);s.removeData("blockUI.timeout")}w=j.extend({},j.blockUI.defaults,w||{});m(0,u,w);if(w.onUnblock===null){w.onUnblock=s.data("blockUI.onUnblock");s.removeData("blockUI.onUnblock")}var r;if(t){r=j("body").children().filter(".blockUI").add("body > .blockUI")}else{r=s.find(">.blockUI")}if(w.cursorReset){if(r.length>1){r[1].style.cursor=w.cursorReset}if(r.length>2){r[2].style.cursor=w.cursorReset}}if(t){c=h=null}if(w.fadeOut){v=r.length;r.stop().fadeOut(w.fadeOut,function(){if(--v===0){l(r,x,w,u)}})}else{l(r,x,w,u)}}function l(v,z,y,x){var u=j(x);if(u.data("blockUI.isBlocked")){return}v.each(function(w,A){if(this.parentNode){this.parentNode.removeChild(this)}});if(z&&z.el){z.el.style.display=z.display;z.el.style.position=z.position;if(z.parent){z.parent.appendChild(z.el)}u.removeData("blockUI.history")}if(u.data("blockUI.static")){u.css("position","static")}if(typeof y.onUnblock=="function"){y.onUnblock(x,y)}var r=j(document.body),t=r.width(),s=r[0].style.width;r.width(t-1).width(t);r[0].style.width=s}function m(r,v,w){var u=v==window,t=j(v);if(!r&&(u&&!c||!u&&!t.data("blockUI.isBlocked"))){return}t.data("blockUI.isBlocked",r);if(!u||!w.bindEvents||(r&&!w.showOverlay)){return}var s="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";if(r){j(document).bind(s,w,p)}else{j(document).unbind(s,p)}}function p(w){if(w.type==="keydown"&&w.keyCode&&w.keyCode==9){if(c&&w.data.constrainTabKey){var t=h;var s=!w.shiftKey&&w.target===t[t.length-1];var r=w.shiftKey&&w.target===t[0];if(s||r){setTimeout(function(){q(r)},10);return false}}}var u=w.data;var v=j(w.target);if(v.hasClass("blockOverlay")&&u.onOverlayClick){u.onOverlayClick()}if(v.parents("div."+u.blockMsgClass).length>0){return true}return v.parents().children().filter("div.blockUI").length===0}function q(r){if(!h){return}var s=h[r===true?h.length-1:0];if(s){s.focus()}}function b(z,r,B){var A=z.parentNode,w=z.style;var u=((A.offsetWidth-z.offsetWidth)/2)-o(A,"borderLeftWidth");var v=((A.offsetHeight-z.offsetHeight)/2)-o(A,"borderTopWidth");if(r){w.left=u>0?(u+"px"):"0"}if(B){w.top=v>0?(v+"px"):"0"}}function o(r,s){return parseInt(j.css(r,s),10)||0}}if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}})();(function(a){a.idleTimer=function(g,f,e){e=a.extend({startImmediately:true,idle:false,enabled:true,timeout:30000,events:"mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove"},e);f=f||document;var d=a(f),h=d.data("idleTimerObj")||{},b=function(l){if(typeof l==="number"){l=undefined}var k=a.data(l||f,"idleTimerObj");k.idle=!k.idle;var i=(+new Date())-k.olddate;k.olddate=+new Date();if(k.idle&&(i<e.timeout)){k.idle=false;clearTimeout(a.idleTimer.tId);if(e.enabled){a.idleTimer.tId=setTimeout(b,e.timeout)}return}var j=a.Event(a.data(f,"idleTimer",k.idle?"idle":"active")+".idleTimer");a(f).trigger(j)},c=function(i){var j=i.data("idleTimerObj")||{};j.enabled=false;clearTimeout(j.tId);i.off(".idleTimer")};h.olddate=h.olddate||+new Date();if(typeof g==="number"){e.timeout=g}else{if(g==="destroy"){c(d);return this}else{if(g==="getElapsedTime"){return(+new Date())-h.olddate}}}d.on(a.trim((e.events+" ").split(" ").join(".idleTimer ")),function(){var i=a.data(this,"idleTimerObj");clearTimeout(i.tId);if(i.enabled){if(i.idle){b(this)}i.tId=setTimeout(b,i.timeout)}});h.idle=e.idle;h.enabled=e.enabled;h.timeout=e.timeout;if(e.startImmediately){h.tId=setTimeout(b,h.timeout)}d.data("idleTimer","active");d.data("idleTimerObj",h)};a.fn.idleTimer=function(c,b){if(!b){b={}}if(this[0]){a.idleTimer(c,this[0],b)}return this}})(jQuery);(function(){var a=[].indexOf||function(e){for(var d=0,c=this.length;d<c;d++){if(d in this&&this[d]===e){return d}}return -1},b=[].slice;(function(c,d){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(e){return d(e,c)})}else{return d(c.jQuery,c)}})(this,function(d,g){var p,n,q,s,j,e,f,k,i,t,h,m,r,o,c,l;p=d(g);k=a.call(g,"ontouchstart")>=0;s={horizontal:{},vertical:{}};j=1;f={};e="waypoints-context-id";h="resize.waypoints";m="scroll.waypoints";r=1;o="waypoints-waypoint-ids";c="waypoint";l="waypoints";n=(function(){function u(v){var w=this;this.$element=v;this.element=v[0];this.didResize=false;this.didScroll=false;this.id="context"+j++;this.oldScroll={x:v.scrollLeft(),y:v.scrollTop()};this.waypoints={horizontal:{},vertical:{}};v.data(e,this.id);f[this.id]=this;v.bind(m,function(){var x;if(!(w.didScroll||k)){w.didScroll=true;x=function(){w.doScroll();return w.didScroll=false};return g.setTimeout(x,d[l].settings.scrollThrottle)}});v.bind(h,function(){var x;if(!w.didResize){w.didResize=true;x=function(){d[l]("refresh");return w.didResize=false};return g.setTimeout(x,d[l].settings.resizeThrottle)}})}u.prototype.doScroll=function(){var v,w=this;v={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(k&&(!v.vertical.oldScroll||!v.vertical.newScroll)){d[l]("refresh")}d.each(v,function(z,y){var B,A,x;x=[];A=y.newScroll>y.oldScroll;B=A?y.forward:y.backward;d.each(w.waypoints[z],function(E,D){var F,C;if((y.oldScroll<(F=D.offset)&&F<=y.newScroll)){return x.push(D)}else{if((y.newScroll<(C=D.offset)&&C<=y.oldScroll)){return x.push(D)}}});x.sort(function(D,C){return D.offset-C.offset});if(!A){x.reverse()}return d.each(x,function(D,C){if(C.options.continuous||D===x.length-1){return C.trigger([B])}})});return this.oldScroll={x:v.horizontal.newScroll,y:v.vertical.newScroll}};u.prototype.refresh=function(){var x,v,w,y=this;w=d.isWindow(this.element);v=this.$element.offset();this.doScroll();x={horizontal:{contextOffset:w?0:v.left,contextScroll:w?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:w?0:v.top,contextScroll:w?0:this.oldScroll.y,contextDimension:w?d[l]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return d.each(x,function(A,z){return d.each(y.waypoints[A],function(F,C){var E,D,H,G,B;E=C.options.offset;H=C.offset;D=d.isWindow(C.element)?0:C.$element.offset()[z.offsetProp];if(d.isFunction(E)){E=E.apply(C.element)}else{if(typeof E==="string"){E=parseFloat(E);if(C.options.offset.indexOf("%")>-1){E=Math.ceil(z.contextDimension*E/100)}}}C.offset=D-z.contextOffset+z.contextScroll-E;if((C.options.onlyOnScroll&&(H!=null))||!C.enabled){return}if(H!==null&&(H<(G=z.oldScroll)&&G<=C.offset)){return C.trigger([z.backward])}else{if(H!==null&&(H>(B=z.oldScroll)&&B>=C.offset)){return C.trigger([z.forward])}else{if(H===null&&z.oldScroll>=C.offset){return C.trigger([z.forward])}}}})})};u.prototype.checkEmpty=function(){if(d.isEmptyObject(this.waypoints.horizontal)&&d.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([h,m].join(" "));return delete f[this.id]}};return u})();q=(function(){function u(v,x,w){var y,z;w=d.extend({},d.fn[c].defaults,w);if(w.offset==="bottom-in-view"){w.offset=function(){var A;A=d[l]("viewportHeight");if(!d.isWindow(x.element)){A=x.$element.height()}return A-d(this).outerHeight()}}this.$element=v;this.element=v[0];this.axis=w.horizontal?"horizontal":"vertical";this.callback=w.handler;this.context=x;this.enabled=w.enabled;this.id="waypoints"+r++;this.offset=null;this.options=w;x.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;y=(z=v.data(o))!=null?z:[];y.push(this.id);v.data(o,y)}u.prototype.trigger=function(v){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,v)}if(this.options.triggerOnce){return this.destroy()}};u.prototype.disable=function(){return this.enabled=false};u.prototype.enable=function(){this.context.refresh();return this.enabled=true};u.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};u.getWaypointsByElement=function(v){var x,w;w=d(v).data(o);if(!w){return[]}x=d.extend({},s.horizontal,s.vertical);return d.map(w,function(y){return x[y]})};return u})();t={init:function(w,u){var v;if(u==null){u={}}if((v=u.handler)==null){u.handler=w}this.each(function(){var A,z,y,x;A=d(this);y=(x=u.context)!=null?x:d.fn[c].defaults.context;if(!d.isWindow(y)){y=A.closest(y)}y=d(y);z=f[y.data(e)];if(!z){z=new n(y)}return new q(A,z,u)});d[l]("refresh");return this},disable:function(){return t._invoke(this,"disable")},enable:function(){return t._invoke(this,"enable")},destroy:function(){return t._invoke(this,"destroy")},prev:function(v,u){return t._traverse.call(this,v,u,function(w,x,y){if(x>0){return w.push(y[x-1])}})},next:function(v,u){return t._traverse.call(this,v,u,function(w,x,y){if(x<y.length-1){return w.push(y[x+1])}})},_traverse:function(x,v,w){var u,y;if(x==null){x="vertical"}if(v==null){v=g}y=i.aggregate(v);u=[];this.each(function(){var z;z=d.inArray(this,y[x]);return w(u,z,y[x])});return this.pushStack(u)},_invoke:function(u,v){u.each(function(){var w;w=q.getWaypointsByElement(this);return d.each(w,function(y,x){x[v]();return true})});return this}};d.fn[c]=function(){var u,v;v=arguments[0],u=2<=arguments.length?b.call(arguments,1):[];if(t[v]){return t[v].apply(this,u)}else{if(d.isFunction(v)){return t.init.apply(this,arguments)}else{if(d.isPlainObject(v)){return t.init.apply(this,[null,v])}else{if(!v){return d.error("jQuery Waypoints needs a callback function or handler option.")}else{return d.error("The "+v+" method does not exist in jQuery Waypoints.")}}}}};d.fn[c].defaults={context:g,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};i={refresh:function(){return d.each(f,function(v,u){return u.refresh()})},viewportHeight:function(){var u;return(u=g.innerHeight)!=null?u:p.height()},aggregate:function(x){var v,w,u;v=s;if(x){v=(u=f[d(x).data(e)])!=null?u.waypoints:void 0}if(!v){return[]}w={horizontal:[],vertical:[]};d.each(w,function(z,y){d.each(v[z],function(B,A){return y.push(A)});y.sort(function(B,A){return B.offset-A.offset});w[z]=d.map(y,function(A){return A.element});return w[z]=d.unique(w[z])});return w},above:function(u){if(u==null){u=g}return i._filter(u,"vertical",function(w,v){return v.offset<=w.oldScroll.y})},below:function(u){if(u==null){u=g}return i._filter(u,"vertical",function(w,v){return v.offset>w.oldScroll.y})},left:function(u){if(u==null){u=g}return i._filter(u,"horizontal",function(w,v){return v.offset<=w.oldScroll.x})},right:function(u){if(u==null){u=g}return i._filter(u,"horizontal",function(w,v){return v.offset>w.oldScroll.x})},enable:function(){return i._invoke("enable")},disable:function(){return i._invoke("disable")},destroy:function(){return i._invoke("destroy")},extendFn:function(u,v){return t[u]=v},_invoke:function(v){var u;u=d.extend({},s.vertical,s.horizontal);return d.each(u,function(x,w){w[v]();return true})},_filter:function(u,w,y){var v,x;v=f[d(u).data(e)];if(!v){return[]}x=[];d.each(v.waypoints[w],function(A,z){if(y(v,z)){return x.push(z)}});x.sort(function(A,z){return A.offset-z.offset});return d.map(x,function(z){return z.element})}};d[l]=function(){var u,v;v=arguments[0],u=2<=arguments.length?b.call(arguments,1):[];if(i[v]){return i[v].apply(null,u)}else{return i.aggregate.call(null,v)}};d[l].settings={resizeThrottle:100,scrollThrottle:30};return p.load(function(){return d[l]("refresh")})})}).call(this);if(!window.WPAC){var WPAC={}}WPAC._Options=WPAC._Options||{};WPAC._BodyRegex=new RegExp("<body[^>]*>((.|\n|\r)*)</body>","i");WPAC._ExtractBody=function(a){try{return jQuery("<div>"+WPAC._BodyRegex.exec(a)[1]+"</div>")}catch(b){return false}};WPAC._TitleRegex=new RegExp("<title[^>]*>(.*?)<\\/title>","im");WPAC._ExtractTitle=function(a){try{return WPAC._TitleRegex.exec(a)[1]}catch(b){return false}};WPAC._ShowMessage=function(d,b){var e=WPAC._Options.popupMarginTop+jQuery("#wpadminbar").outerHeight();var a=WPAC._Options.popupBackgroundColorLoading;var c=WPAC._Options.popupTextColorLoading;if(b=="error"){a=WPAC._Options.popupBackgroundColorError;c=WPAC._Options.popupTextColorError}else{if(b=="success"){a=WPAC._Options.popupBackgroundColorSuccess;c=WPAC._Options.popupTextColorSuccess}}jQuery.blockUI({message:d,fadeIn:WPAC._Options.popupFadeIn,fadeOut:WPAC._Options.popupFadeOut,timeout:(b=="loading")?0:WPAC._Options.popupTimeout,centerY:false,centerX:true,showOverlay:(b=="loading"),css:{width:WPAC._Options.popupWidth+"%",left:((100-WPAC._Options.popupWidth)/2)+"%",top:e+"px",border:"none",padding:WPAC._Options.popupPadding+"px",backgroundColor:a,"-webkit-border-radius":WPAC._Options.popupCornerRadius+"px","-moz-border-radius":WPAC._Options.popupCornerRadius+"px","border-radius":WPAC._Options.popupCornerRadius+"px",opacity:WPAC._Options.popupOpacity/100,color:c,textAlign:WPAC._Options.popupTextAlign,cursor:(b=="loading")?"wait":"default","font-size":WPAC._Options.popupTextFontSize},overlayCSS:{backgroundColor:"#000",opacity:0},baseZ:WPAC._Options.popupZindex})};WPAC._DebugErrorShown=false;WPAC._Debug=function(c,b){if(!WPAC._Options.debug){return}if(Function.prototype.call&&Function.prototype.call.bind&&typeof window.console!="undefined"&&console&&typeof console.log=="object"&&typeof window.console[c].apply==="undefined"){console[c]=Function.prototype.call.bind(console[c],console)}if(typeof window.console==="undefined"||typeof window.console[c]==="undefined"||typeof window.console[c].apply==="undefined"){if(!WPAC._DebugErrorShown){alert("Unfortunately the console object is undefined or is not supported in your browser, debugging WP Ajaxify Comments is disabled! Please use Firebug, Google Chrome or Internet Explorer 9 or above with enabled Developer Tools (F12) for debugging WP Ajaxify Comments.")}WPAC._DebugErrorShown=true;return}var a=jQuery.merge(["[WP Ajaxify Comments] "+b],jQuery.makeArray(arguments).slice(2));console[c].apply(console,a)};WPAC._DebugSelector=function(b,a,c){if(!WPAC._Options.debug){return}var d=jQuery(a);if(!d.length){WPAC._Debug(c?"info":"error","Search %s (selector: '%s')... Not found",b,a)}else{WPAC._Debug("info","Search %s (selector: '%s')... Found: %o",b,a,d)}};WPAC._AddQueryParamStringToUrl=function(a,c,b){return new Uri(a).replaceQueryParam(c,b).toString()};WPAC._LoadFallbackUrl=function(c){WPAC._ShowMessage(WPAC._Options.textReloadPage,"loading");var a=WPAC._AddQueryParamStringToUrl(c,"WPACRandom",(new Date()).getTime());WPAC._Debug("info","Something went wrong. Reloading page (URL: '%s')...",a);var b=function(){location.href=a};if(!WPAC._Options.debug){b()}else{WPAC._Debug("info","Sleep for 5s to enable analyzing debug messages...");window.setTimeout(b,5000)}};WPAC._ScrollToAnchor=function(a,b,d){d=d||function(){};var f=jQuery(a);if(f.length){WPAC._Debug("info","Scroll to anchor element %o (scroll speed: %s ms)...",f,WPAC._Options.scrollSpeed);var e=function(){if(b){window.location.hash=a}d()};var c=f.offset().top;if(jQuery(window).scrollTop()==c){e()}else{jQuery("html,body").animate({scrollTop:c},{duration:WPAC._Options.scrollSpeed,complete:e})}return true}else{WPAC._Debug("error","Anchor element not found (selector: '%s')",a);return false}};WPAC._UpdateUrl=function(a){if(a.split("#")[0]==window.location.href.split("#")[0]){return}if(window.history.replaceState){window.history.replaceState({},window.document.title,a)}else{WPAC._Debug("info","Browser does not support window.history.replaceState() to update the URL without reloading the page",anchor)}};WPAC._ReplaceComments=function(s,p,g,m,c,j,k,o,l,h){var n=g?WPAC._AddQueryParamStringToUrl(p,"WPACFallback","1"):p;var r=jQuery(c);if(!r.length){WPAC._Debug("error","Comment container on current page not found (selector: '%s')",c);WPAC._LoadFallbackUrl(n);return false}var b=WPAC._ExtractBody(s);if(b===false){WPAC._Debug("error","Unsupported server response, unable to extract body (data: '%s')",s);WPAC._LoadFallbackUrl(n);return false}o(b);var i=b.find(c);if(!i.length){WPAC._Debug("error","Comment container on requested page not found (selector: '%s')",c);WPAC._LoadFallbackUrl(n);return false}l(b,p);var e=WPAC._ExtractTitle(s);if(b!==false){document.title=jQuery("<textarea />").html(e).text()}r.replaceWith(i);if(WPAC._Options.commentsEnabled){var a=jQuery(j);if(a.length){if(!a.parents(c).length){WPAC._Debug("info","Replace comment form...");var q=b.find(j);if(q.length==0){WPAC._Debug("error","Comment form on requested page not found (selector: '%s')",j);WPAC._LoadFallbackUrl(n);return false}a.replaceWith(q)}}else{WPAC._Debug("info","Try to re-inject comment form...");var d=jQuery("#wp-temp-form-div");if(!d.length){WPAC._Debug("error","WordPress' #wp-temp-form-div container not found",k);WPAC._LoadFallbackUrl(n);return false}var f=b.find(k);if(!f.length){WPAC._Debug("error","Respond container on requested page not found (selector: '%s')",k);WPAC._LoadFallbackUrl(n);return false}d.replaceWith(f)}if(m){jQuery.each(m,function(t,v){var u=jQuery("[name='"+v.name+"']",j);if(u.length!=1||u.val()){return}u.val(v.value)})}}h(b,p);return true};WPAC._TestCrossDomainScripting=function(a){if(a.indexOf("http")!=0){return false}var b=window.location.protocol+"//"+window.location.host;return(a.indexOf(b)!=0)};WPAC._TestFallbackUrl=function(a){var a=new Uri(location.href);return(a.getQueryParamValue("WPACFallback")&&a.getQueryParamValue("WPACRandom"))};WPAC.AttachForm=function(b){b=jQuery.extend({selectorCommentForm:WPAC._Options.selectorCommentForm,selectorCommentPagingLinks:WPAC._Options.selectorCommentPagingLinks,beforeSelectElements:WPAC._Callbacks.beforeSelectElements,beforeSubmitComment:WPAC._Callbacks.beforeSubmitComment,afterPostComment:WPAC._Callbacks.afterPostComment,selectorCommentsContainer:WPAC._Options.selectorCommentsContainer,selectorRespondContainer:WPAC._Options.selectorRespondContainer,beforeUpdateComments:WPAC._Callbacks.beforeUpdateComments,afterUpdateComments:WPAC._Callbacks.afterUpdateComments,scrollToAnchor:!WPAC._Options.disableScrollToAnchor,updateUrl:!WPAC._Options.disableUrlUpdate,selectorCommentLinks:WPAC._Options.selectorCommentLinks},b||{});if(WPAC._Options.debug&&WPAC._Options.commentsEnabled){WPAC._Debug("info","Attach form...");WPAC._DebugSelector("comment form",b.selectorCommentForm);WPAC._DebugSelector("comments container",b.selectorCommentsContainer);WPAC._DebugSelector("respond container",b.selectorRespondContainer);WPAC._DebugSelector("comment paging links",b.selectorCommentPagingLinks,true);WPAC._DebugSelector("comment links",b.selectorCommentLinks,true)}b.beforeSelectElements(jQuery(document));if(jQuery(document).on){var d=function(h,f,g){jQuery(document).on(h,f,g)}}else{if(jQuery(document).delegate){var d=function(h,f,g){jQuery(document).delegate(f,h,g)}}else{var d=function(h,f,g){jQuery(f).live(h,g)}}}var c=function(g){var f=jQuery(this).attr("href");if(f){g.preventDefault();WPAC.LoadComments(f,{selectorCommentForm:b.selectorCommentForm,selectorCommentsContainer:b.selectorCommentsContainer,selectorRespondContainer:b.selectorRespondContainer,beforeSelectElements:b.beforeSelectElements,beforeUpdateComments:b.beforeUpdateComments,afterUpdateComments:b.afterUpdateComments})}};d("click",b.selectorCommentPagingLinks,c);var e=function(i){var h=jQuery(this);if(h.is(b.selectorCommentPagingLinks)){return}var f=h.attr("href");var g="#"+(new Uri(f)).anchor();if(jQuery(g).length>0){if(b.updateUrl){WPAC._UpdateUrl(f)}WPAC._ScrollToAnchor(g,b.updateUrl);i.preventDefault()}};d("click",b.selectorCommentLinks,e);if(!WPAC._Options.commentsEnabled){return}var a=function(h){var g=jQuery(this);b.beforeSubmitComment();var j=g.attr("action");if(WPAC._TestCrossDomainScripting(j)){if(WPAC._Options.debug&&!g.data("submitCrossDomain")){WPAC._Debug("error","Cross-domain scripting detected (submit url: '%s'), cancel AJAX request",j);WPAC._Debug("info","Sleep for 5s to enable analyzing debug messages...");h.preventDefault();g.data("submitCrossDomain",true);window.setTimeout(function(){jQuery("#submit",g).remove();g.submit()},5000)}return}h.preventDefault();if(g.data("WPAC_SUBMITTING")){WPAC._Debug("info","Cancel submit, form is already submitting (Form: %o)",g);return}g.data("WPAC_SUBMITTING",true);WPAC._ShowMessage(WPAC._Options.textPostComment,"loading");var i=function(l){WPAC._Debug("info","Comment has not been posted");WPAC._Debug("info","Try to extract error message (selector: '%s')...",WPAC._Options.selectorErrorContainer);var m=WPAC._ExtractBody(l);if(m!==false){var k=m.find(WPAC._Options.selectorErrorContainer);if(k.length){k=k.html();WPAC._Debug("info","Error message '%s' successfully extracted",k);WPAC._ShowMessage(k,"error");return}}WPAC._Debug("error","Error message could not be extracted, use error message '%s'.",WPAC._Options.textUnknownError);WPAC._ShowMessage(WPAC._Options.textUnknownError,"error")};var f=jQuery.ajax({url:j,type:"POST",data:g.serialize(),beforeSend:function(k){k.setRequestHeader("X-WPAC-REQUEST","1")},complete:function(k,l){g.removeData("WPAC_SUBMITTING",true)},success:function(n){if(f.getResponseHeader("X-WPAC-ERROR")){WPAC._Debug("info","Found error state X-WPAC-ERROR header.",k);i(n);return}WPAC._Debug("info","Comment has been posted");var k=f.getResponseHeader("X-WPAC-URL");WPAC._Debug("info","Found comment URL '%s' in X-WPAC-URL header.",k);var m=f.getResponseHeader("X-WPAC-UNAPPROVED");WPAC._Debug("info","Found unapproved state '%s' in X-WPAC-UNAPPROVED",m);b.afterPostComment(k,m=="1");WPAC._ShowMessage(m=="1"?WPAC._Options.textPostedUnapproved:WPAC._Options.textPosted,"success");if(!WPAC._ReplaceComments(n,k,false,{},b.selectorCommentsContainer,b.selectorCommentForm,b.selectorRespondContainer,b.beforeSelectElements,b.beforeUpdateComments,b.afterUpdateComments)){return}if(k){if(b.updateUrl){WPAC._UpdateUrl(k)}if(b.scrollToAnchor){var l=k.indexOf("#")>=0?k.substr(k.indexOf("#")):null;if(l){WPAC._Debug("info","Anchor '%s' extracted from comment URL '%s'",l,k);WPAC._ScrollToAnchor(l,b.updateUrl)}}}},error:function(k,m,l){if(k.status===0&&k.responseText===""){WPAC._Debug("error","Comment seems to be posted, but loading comment update failed.");WPAC._LoadFallbackUrl(WPAC._AddQueryParamStringToUrl(window.location.href,"WPACFallback","1"));return}i(k.responseText)}})};d("submit",b.selectorCommentForm,a)};WPAC._Initialized=false;WPAC.Init=function(){if(WPAC._Initialized){WPAC._Debug("info","Abort initialization (plugin already initialized)");return false}WPAC._Initialized=true;if(!WPAC._Options||!WPAC._Callbacks){WPAC._Debug("error","Something unexpected happened, initialization failed. Please try to reinstall the plugin.");return false}WPAC._Debug("info","Initializing version %s",WPAC._Options.version);if(WPAC._Options.debug){if(!jQuery||!jQuery.fn||!jQuery.fn.jquery){WPAC._Debug("error","jQuery not found, abort initialization. Please try to reinstall the plugin.");return false}WPAC._Debug("info","Found jQuery %s",jQuery.fn.jquery);if(!jQuery.blockUI||!jQuery.blockUI.version){WPAC._Debug("error","jQuery blockUI not found, abort initialization. Please try to reinstall the plugin.");return false}WPAC._Debug("info","Found jQuery blockUI %s",jQuery.blockUI.version);if(!jQuery.idleTimer){WPAC._Debug("error","jQuery Idle Timer plugin not found, abort initialization. Please try to reinstall the plugin.");return false}WPAC._Debug("info","Found jQuery Idle Timer plugin")}if(WPAC._Options.selectorPostContainer){WPAC._Debug("info","Multiple comment form support enabled (selector: '%s')",WPAC._Options.selectorPostContainer);jQuery(WPAC._Options.selectorPostContainer).each(function(a,b){var c=jQuery(b).attr("id");if(!c){WPAC._Debug("info","Skip post container element %o (ID not defined)",b);return}WPAC.AttachForm({selectorCommentForm:"#"+c+" "+WPAC._Options.selectorCommentForm,selectorCommentPagingLinks:"#"+c+" "+WPAC._Options.selectorCommentPagingLinks,selectorCommentsContainer:"#"+c+" "+WPAC._Options.selectorCommentsContainer,selectorRespondContainer:"#"+c+" "+WPAC._Options.selectorRespondContainer})})}else{WPAC.AttachForm()}if(WPAC._Options.commentsEnabled&&WPAC._Options.autoUpdateIdleTime>0){WPAC._Debug("info","Auto updating comments enabled (idle time: %s)",WPAC._Options.autoUpdateIdleTime);WPAC._InitIdleTimer()}WPAC._Debug("info","Initialization completed");return true};WPAC._OnIdle=function(){WPAC.RefreshComments({success:WPAC._InitIdleTimer,scrollToAnchor:false})};WPAC._InitIdleTimer=function(){if(WPAC._TestFallbackUrl(location.href)){WPAC._Debug("error","Fallback URL was detected (url: '%s'), cancel init idle timer",location.href);return}jQuery(document).idleTimer("destroy");jQuery(document).idleTimer(WPAC._Options.autoUpdateIdleTime);jQuery(document).on("idle.idleTimer",WPAC._OnIdle)};WPAC.RefreshComments=function(b){var a=location.href;if(WPAC._TestFallbackUrl(location.href)){WPAC._Debug("error","Fallback URL was detected (url: '%s'), cancel AJAX request",a);return false}return WPAC.LoadComments(a,b)};WPAC.LoadComments=function(b,a){if(WPAC._TestCrossDomainScripting(b)){WPAC._Debug("error","Cross-domain scripting detected (url: '%s'), cancel AJAX request",b);return false}if(typeof(a)=="boolean"){a={scrollToAnchor:a}}a=jQuery.extend({scrollToAnchor:!WPAC._Options.disableScrollToAnchor,showLoadingInfo:true,updateUrl:!WPAC._Options.disableUrlUpdate,success:function(){},selectorCommentForm:WPAC._Options.selectorCommentForm,selectorCommentsContainer:WPAC._Options.selectorCommentsContainer,selectorRespondContainer:WPAC._Options.selectorRespondContainer,disableCache:WPAC._Options.disableCache,beforeSelectElements:WPAC._Callbacks.beforeSelectElements,beforeUpdateComments:WPAC._Callbacks.beforeUpdateComments,afterUpdateComments:WPAC._Callbacks.afterUpdateComments,},a||{});var d=jQuery(a.selectorCommentForm).serializeArray();if(a.showLoadingInfo){WPAC._ShowMessage(WPAC._Options.textRefreshComments,"loading")}if(a.disableCache){b=WPAC._AddQueryParamStringToUrl(b,"WPACRandom",(new Date()).getTime())}var c=jQuery.ajax({url:b,type:"GET",beforeSend:function(e){e.setRequestHeader("X-WPAC-REQUEST","1")},success:function(g){if(!WPAC._ReplaceComments(g,b,true,d,a.selectorCommentsContainer,a.selectorCommentForm,a.selectorRespondContainer,a.beforeSelectElements,a.beforeUpdateComments,a.afterUpdateComments)){return}if(a.updateUrl){WPAC._UpdateUrl(b)}var f=false;if(a.scrollToAnchor){var e=b.indexOf("#")>=0?b.substr(b.indexOf("#")):null;if(e){WPAC._Debug("info","Anchor '%s' extracted from url",e);if(WPAC._ScrollToAnchor(e,a.updateUrl,function(){a.success()})){f=true}}}jQuery.unblockUI();if(!f){a.success()}},error:function(){WPAC._LoadFallbackUrl(WPAC._AddQueryParamStringToUrl(window.location.href,"WPACFallback","1"))}});return true};jQuery(function(){var a=WPAC.Init();if(WPAC._Options.loadCommentsAsync){if(!a){WPAC._LoadFallbackUrl(WPAC._AddQueryParamStringToUrl(window.location.href,"WPACFallback","1"));return}var b=WPAC._Options.asyncLoadTrigger;WPAC._Debug("info","Loading comments asynchronously with secondary AJAX request (trigger: '%s')",b);if(window.location.hash){var c=/^#comment-[0-9]+$/;if(c.test(window.location.hash)){WPAC._Debug("info","Comment anchor in URL detected, force loading comments on DomReady (hash: '%s')",window.location.hash);b="DomReady"}}if(b=="Viewport"){jQuery(WPAC._Options.selectorCommentsContainer).waypoint(function(){jQuery(WPAC._Options.selectorCommentsContainer).waypoint("destroy");WPAC.RefreshComments()},{offset:"100%"})}else{if(b=="DomReady"){WPAC.RefreshComments({scrollToAnchor:true})}}}});function wpac_init(){WPAC._Debug("info","wpac_init() is deprecated, please use WPAC.Init()");WPAC.Init()};