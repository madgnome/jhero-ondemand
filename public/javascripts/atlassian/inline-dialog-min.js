(function(A){AJS.InlineDialog=function(T,H,K,I){var R=A.extend(false,AJS.InlineDialog.opts,I);var E;var J;var b;var N=false;var S=false;var Z=false;var a;var P;var B=A('<div id="inline-dialog-'+H+'" class="aui-inline-dialog"><div class="contents"></div><div id="arrow-'+H+'" class="arrow"></div></div>');var G=A("#arrow-"+H,B);var Y=B.find(".contents");Y.css("width",R.width+"px");Y.mouseover(function(c){clearTimeout(J);B.unbind("mouseover")}).mouseout(function(){W()});var V=function(){if(!E){E={popup:B,hide:function(){W(0)},id:H,show:function(){Q()},reset:function(){function d(f,e){f.css(e.popupCss);if(window.Raphael){if(!f.arrowCanvas){f.arrowCanvas=Raphael("arrow-"+H,16,16)}var g=R.getArrowPath,h=A.isFunction(g)?g(e):g;f.arrowCanvas.path(h).attr(R.getArrowAttributes())}G.css(e.arrowCss)}var c=R.calculatePositions(B,P,a,R);d(B,c);B.fadeIn(R.fadeTime,function(){});if(R.displayShadow){if(B.shadow){B.shadow.remove()}B.shadow=Raphael.shadow(0,0,Y.width(),Y.height(),{target:Y}).hide().fadeIn(R.fadeTime)}if(AJS.$.browser.msie){if(A("#inline-dialog-shim-"+H).length==0){A(B).prepend(A('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+H+'" frameBorder="0" src="javascript:false;"></iframe>'))}A("#inline-dialog-shim-"+H).css({width:Y.outerWidth(),height:Y.outerHeight()})}}}}return E};var Q=function(){if(B.is(":visible")){return }b=setTimeout(function(){if(!Z||!S){return }R.addActiveClass&&A(T).addClass("active");N=true;F();AJS.InlineDialog.current=V();AJS.$(document).trigger("showLayer",["inlineDialog",V()]);V().reset()},R.showDelay)};var W=function(c){S=false;if(N){c=(c==null)?R.hideDelay:c;clearTimeout(J);clearTimeout(b);if(c!=null){J=setTimeout(function(){U();R.addActiveClass&&A(T).removeClass("active");B.fadeOut(R.fadeTime,function(){R.hideCallback.call(B[0].popup)});if(R.displayShadow){B.shadow.remove();B.shadow=null}B.arrowCanvas.remove();B.arrowCanvas=null;N=false;S=false;AJS.$(document).trigger("hideLayer",["inlineDialog",V()]);AJS.InlineDialog.current=null;if(!R.cacheContent){Z=false;O=false}},c)}}};var X=function(f,c){R.upfrontCallback.call({popup:B,hide:function(){W(0)},id:H,show:function(){Q()}});B.each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});if(R.closeOthers){AJS.$(".aui-inline-dialog").each(function(){this.popup.hide()})}if(!f){a={x:T.offset().left,y:T.offset().top};P={target:T}}else{a={x:f.pageX,y:f.pageY};P={target:A(f.target)}}if(!N){clearTimeout(b)}S=true;var d=function(){O=false;Z=true;R.initCallback.call({popup:B,hide:function(){W(0)},id:H,show:function(){Q()}});Q()};if(!O){O=true;if(A.isFunction(K)){K(Y,c,d)}else{AJS.$.get(K,function(g,e,h){Y.html(R.responseHandler(g,e,h));Z=true;R.initCallback.call({popup:B,hide:function(){W(0)},id:H,show:function(){Q()}});Q()})}}clearTimeout(J);if(!N){Q()}return false};B[0].popup=V();var O=false;var M=false;var L=function(){if(!M){A(R.container).append(B);M=true}};if(R.onHover){if(R.useLiveEvents){A(T).live("mousemove",function(c){L();X(c,this)}).live("mouseout",function(){W()})}else{A(T).mousemove(function(c){L();X(c,this)}).mouseout(function(){W()})}}else{if(!R.noBind){if(R.useLiveEvents){A(T).live("click",function(c){L();X(c,this);return false}).live("mouseout",function(){W()})}else{A(T).click(function(c){L();X(c,this);return false}).mouseout(function(){W()})}}}var D=false;var C=H+".inline-dialog-check";var F=function(){if(!D){A("body").bind("click."+C,function(d){var c=A(d.target);if(c.closest("#inline-dialog-"+H+" .contents").length===0){W(0)}});D=true}};var U=function(){if(D){A("body").unbind("click."+C)}D=false};B.show=function(c){if(c){c.stopPropagation()}L();X(null,this)};B.hide=function(){W(0)};B.refresh=function(){if(N){V().reset()}};B.getOptions=function(){return R};return B};AJS.InlineDialog.opts={onTop:false,responseHandler:function(C,B,D){return C},closeOthers:true,isRelativeToMouse:false,addActiveClass:true,onHover:false,useLiveEvents:false,noBind:false,fadeTime:100,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,container:"body",cacheContent:true,displayShadow:true,hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(C,J,S,N){var K;var U;var Q;var G=-7;var H;var L;var T=J.target.offset();var O=parseInt(J.target.css("padding-left"))+parseInt(J.target.css("padding-right"));var B=J.target.width()+O;var E=T.left+B/2;var P=(window.pageYOffset||document.documentElement.scrollTop)+A(window).height();var F=10;Q=T.top+J.target.height()+N.offsetY;K=T.left+N.offsetX;var I=T.top>C.height();var D=(Q+C.height())<P;L=(!D&&I)||(N.onTop&&I);var M=A(window).width()-(K+N.width+F);if(L){Q=T.top-C.height()-8;var R=N.displayShadow?(AJS.$.browser.msie?10:9):0;G=C.height()-R}H=E-K;if(N.isRelativeToMouse){if(M<0){U=F;K="auto";H=S.x-(A(window).width()-N.width)}else{K=S.x-20;U="auto";H=S.x-K}}else{if(M<0){U=F;K="auto";H=E-(A(window).width()-N.width)}else{if(N.width<=B/2){H=N.width/2;K=E-N.width/2}}}return{displayAbove:L,popupCss:{left:K,right:U,top:Q},arrowCss:{position:"absolute",left:H,right:"auto",top:G}}},getArrowPath:function(B){return B.displayAbove?"M0,8L8,16,16,8":"M0,8L8,0,16,8"},getArrowAttributes:function(){return{fill:"#fff",stroke:"#bbb"}}}})(jQuery);