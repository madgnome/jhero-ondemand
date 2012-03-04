(function(n,D,P,k,K,h){var B=this;
var N=Math.floor(Math.random()*10000);
var Q=Function.prototype;
var q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
var r=/[\-\w]+\/\.\.\//;
var f=/([^:])\/\//g;
var i="";
var O={};
var m=n.easyXDM;
var u="easyXDM_";
var e;
var Y=false;
var I;
var H;
function c(x,z){var y=typeof x[z];
return y=="function"||(!!(y=="object"&&x[z]))||y=="unknown"
}function U(x,y){return !!(typeof (x[y])=="object"&&x[y])
}function R(x){return Object.prototype.toString.call(x)==="[object Array]"
}function C(){try{var x=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
I=Array.prototype.slice.call(x.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);
H=parseInt(I[0],10)>9&&parseInt(I[1],10)>0;
x=null;
return true
}catch(y){return false
}}var V,X;
if(c(n,"addEventListener")){V=function(z,x,y){z.addEventListener(x,y,false)
};
X=function(z,x,y){z.removeEventListener(x,y,false)
}
}else{if(c(n,"attachEvent")){V=function(x,z,y){x.attachEvent("on"+z,y)
};
X=function(x,z,y){x.detachEvent("on"+z,y)
}
}else{throw new Error("Browser not supported")
}}var w=false,j=[],l;
if("readyState" in D){l=D.readyState;
w=l=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(l=="loaded"||l=="interactive"))
}else{w=!!D.body
}function S(){if(w){return 
}w=true;
for(var x=0;
x<j.length;
x++){j[x]()
}j.length=0
}if(!w){if(c(n,"addEventListener")){V(D,"DOMContentLoaded",S)
}else{V(D,"readystatechange",function(){if(D.readyState=="complete"){S()
}});
if(D.documentElement.doScroll&&n===top){var G=function(){if(w){return 
}try{D.documentElement.doScroll("left")
}catch(x){k(G,1);
return 
}S()
};
G()
}}V(n,"load",S)
}function g(y,x){if(w){y.call(x);
return 
}j.push(function(){y.call(x)
})
}function M(){var z=parent;
if(i!==""){for(var x=0,y=i.split(".");
x<y.length;
x++){z=z[y[x]]
}}return z.easyXDM
}function E(x){n.easyXDM=m;
i=x;
if(i){u="easyXDM_"+i.replace(".","_")+"_"
}return O
}function Z(x){return x.match(q)[3]
}function F(x){return x.match(q)[4]||""
}function J(z){var x=z.toLowerCase().match(q);
var AA=x[2],AB=x[3],y=x[4]||"";
if((AA=="http:"&&y==":80")||(AA=="https:"&&y==":443")){y=""
}return AA+"//"+AB+y
}function b(x){x=x.replace(f,"$1/");
if(!x.match(/^(http||https):\/\//)){var y=(x.substring(0,1)==="/")?"":P.pathname;
if(y.substring(y.length-1)!=="/"){y=y.substring(0,y.lastIndexOf("/")+1)
}x=P.protocol+"//"+P.host+y+x
}while(r.test(x)){x=x.replace(r,"")
}return x
}function p(x,AA){var AC="",z=x.indexOf("#");
if(z!==-1){AC=x.substring(z);
x=x.substring(0,z)
}var AB=[];
for(var y in AA){if(AA.hasOwnProperty(y)){AB.push(y+"="+h(AA[y]))
}}return x+(Y?"#":(x.indexOf("?")==-1?"?":"&"))+AB.join("&")+AC
}var s=(function(x){x=x.substring(1).split("&");
var z={},AA,y=x.length;
while(y--){AA=x[y].split("=");
z[AA[0]]=K(AA[1])
}return z
}(/xdm_e=/.test(P.search)?P.search:P.hash));
function T(x){return typeof x==="undefined"
}var o=function(){var y={};
var z={a:[1,2,3]},x='{"a":[1,2,3]}';
if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(z).replace((/\s/g),"")===x){return JSON
}if(Object.toJSON){if(Object.toJSON(z).replace((/\s/g),"")===x){y.stringify=Object.toJSON
}}if(typeof String.prototype.evalJSON==="function"){z=x.evalJSON();
if(z.a&&z.a.length===3&&z.a[2]===3){y.parse=function(AA){return AA.evalJSON()
}
}}if(y.stringify&&y.parse){o=function(){return y
};
return y
}return null
};
function t(x,y,z){var AB;
for(var AA in y){if(y.hasOwnProperty(AA)){if(AA in x){AB=y[AA];
if(typeof AB==="object"){t(x[AA],AB,z)
}else{if(!z){x[AA]=y[AA]
}}}else{x[AA]=y[AA]
}}}return x
}function A(){var y=D.body.appendChild(D.createElement("form")),x=y.appendChild(D.createElement("input"));
x.name=u+"TEST"+N;
e=x!==y.elements[x.name];
D.body.removeChild(y)
}function a(x){if(T(e)){A()
}var z;
if(e){z=D.createElement('<iframe name="'+x.props.name+'"/>')
}else{z=D.createElement("IFRAME");
z.name=x.props.name
}z.id=z.name=x.props.name;
delete x.props.name;
if(x.onLoad){V(z,"load",x.onLoad)
}if(typeof x.container=="string"){x.container=D.getElementById(x.container)
}if(!x.container){t(z.style,{position:"absolute",top:"-2000px"});
x.container=D.body
}var y=x.props.src;
delete x.props.src;
t(z,x.props);
z.border=z.frameBorder=0;
z.allowTransparency=true;
x.container.appendChild(z);
z.src=y;
x.props.src=y;
return z
}function v(AA,z){if(typeof AA=="string"){AA=[AA]
}var y,x=AA.length;
while(x--){y=AA[x];
y=new RegExp(y.substr(0,1)=="^"?y:("^"+y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));
if(y.test(z)){return true
}}return false
}function L(z){var AE=z.protocol,y;
z.isHost=z.isHost||T(s.xdm_p);
Y=z.hash||false;
if(!z.props){z.props={}
}if(!z.isHost){z.channel=s.xdm_c;
z.secret=s.xdm_s;
z.remote=s.xdm_e;
AE=s.xdm_p;
if(z.acl&&!v(z.acl,z.remote)){throw new Error("Access denied for "+z.remote)
}}else{z.remote=b(z.remote);
z.channel=z.channel||"default"+N++;
z.secret=Math.random().toString(16).substring(2);
if(T(AE)){if(J(P.href)==J(z.remote)){AE="4"
}else{if(c(n,"postMessage")||c(D,"postMessage")){AE="1"
}else{if(z.swf&&c(n,"ActiveXObject")&&C()){AE="6"
}else{if(navigator.product==="Gecko"&&"frameElement" in n&&navigator.userAgent.indexOf("WebKit")==-1){AE="5"
}else{if(z.remoteHelper){z.remoteHelper=b(z.remoteHelper);
AE="2"
}else{AE="0"
}}}}}}}z.protocol=AE;
switch(AE){case"0":t(z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);
if(z.isHost){if(!z.local){var AC=P.protocol+"//"+P.host,x=D.body.getElementsByTagName("img"),AD;
var AA=x.length;
while(AA--){AD=x[AA];
if(AD.src.substring(0,AC.length)===AC){z.local=AD.src;
break
}}if(!z.local){z.local=n
}}var AB={xdm_c:z.channel,xdm_p:0};
if(z.local===n){z.usePolling=true;
z.useParent=true;
z.local=P.protocol+"//"+P.host+P.pathname+P.search;
AB.xdm_e=z.local;
AB.xdm_pa=1
}else{AB.xdm_e=b(z.local)
}if(z.container){z.useResize=false;
AB.xdm_po=1
}z.remote=p(z.remote,AB)
}else{t(z,{channel:s.xdm_c,remote:s.xdm_e,useParent:!T(s.xdm_pa),usePolling:!T(s.xdm_po),useResize:z.useParent?false:z.useResize})
}y=[new O.stack.HashTransport(z),new O.stack.ReliableBehavior({}),new O.stack.QueueBehavior({encode:true,maxLength:4000-z.remote.length}),new O.stack.VerifyBehavior({initiate:z.isHost})];
break;
case"1":y=[new O.stack.PostMessageTransport(z)];
break;
case"2":y=[new O.stack.NameTransport(z),new O.stack.QueueBehavior(),new O.stack.VerifyBehavior({initiate:z.isHost})];
break;
case"3":y=[new O.stack.NixTransport(z)];
break;
case"4":y=[new O.stack.SameOriginTransport(z)];
break;
case"5":y=[new O.stack.FrameElementTransport(z)];
break;
case"6":if(!I){C()
}y=[new O.stack.FlashTransport(z)];
break
}y.push(new O.stack.QueueBehavior({lazy:z.lazy,remove:true}));
return y
}function d(AA){var AB,z={incoming:function(AD,AC){this.up.incoming(AD,AC)
},outgoing:function(AC,AD){this.down.outgoing(AC,AD)
},callback:function(AC){this.up.callback(AC)
},init:function(){this.down.init()
},destroy:function(){this.down.destroy()
}};
for(var y=0,x=AA.length;
y<x;
y++){AB=AA[y];
t(AB,z,true);
if(y!==0){AB.down=AA[y-1]
}if(y!==x-1){AB.up=AA[y+1]
}}return AB
}function W(x){x.up.down=x.down;
x.down.up=x.up;
x.up=x.down=null
}t(O,{version:"2.4.15.118",query:s,stack:{},apply:t,getJSONObject:o,whenReady:g,noConflict:E});
O.DomHelper={on:V,un:X,requiresJSON:function(x){if(!U(n,"JSON")){D.write('<script type="text/javascript" src="'+x+'"><\/script>')
}}};
(function(){var x={};
O.Fn={set:function(y,z){x[y]=z
},get:function(z,y){var AA=x[z];
if(y){delete x[z]
}return AA
}}
}());
O.Socket=function(y){var x=d(L(y).concat([{incoming:function(AB,AA){y.onMessage(AB,AA)
},callback:function(AA){if(y.onReady){y.onReady(AA)
}}}])),z=J(y.remote);
this.origin=J(y.remote);
this.destroy=function(){x.destroy()
};
this.postMessage=function(AA){x.outgoing(AA,z)
};
x.init()
};
O.Rpc=function(z,y){if(y.local){for(var AB in y.local){if(y.local.hasOwnProperty(AB)){var AA=y.local[AB];
if(typeof AA==="function"){y.local[AB]={method:AA}
}}}}var x=d(L(z).concat([new O.stack.RpcBehavior(this,y),{callback:function(AC){if(z.onReady){z.onReady(AC)
}}}]));
this.origin=J(z.remote);
this.destroy=function(){x.destroy()
};
x.init()
};
O.stack.SameOriginTransport=function(y){var z,AB,AA,x;
return(z={outgoing:function(AD,AE,AC){AA(AD);
if(AC){AC()
}},destroy:function(){if(AB){AB.parentNode.removeChild(AB);
AB=null
}},onDOMReady:function(){x=J(y.remote);
if(y.isHost){t(y.props,{src:p(y.remote,{xdm_e:P.protocol+"//"+P.host+P.pathname,xdm_c:y.channel,xdm_p:4}),name:u+y.channel+"_provider"});
AB=a(y);
O.Fn.set(y.channel,function(AC){AA=AC;
k(function(){z.up.callback(true)
},0);
return function(AD){z.up.incoming(AD,x)
}
})
}else{AA=M().Fn.get(y.channel,true)(function(AC){z.up.incoming(AC,x)
});
k(function(){z.up.callback(true)
},0)
}},init:function(){g(z.onDOMReady,z)
}})
};
O.stack.FlashTransport=function(AA){var AC,x,AB,AD,y,AE;
function AF(AH,AG){k(function(){AC.up.incoming(AH,AD)
},0)
}function z(AH){var AG=AA.swf+"?host="+AA.isHost;
var AJ="easyXDM_swf_"+Math.floor(Math.random()*10000);
O.Fn.set("flash_loaded"+AH.replace(/[\-.]/g,"_"),function(){O.stack.FlashTransport[AH].swf=y=AE.firstChild;
var AK=O.stack.FlashTransport[AH].queue;
for(var AL=0;
AL<AK.length;
AL++){AK[AL]()
}AK.length=0
});
if(AA.swfContainer){AE=(typeof AA.swfContainer=="string")?D.getElementById(AA.swfContainer):AA.swfContainer
}else{AE=D.createElement("div");
t(AE.style,H&&AA.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});
D.body.appendChild(AE)
}var AI="callback=flash_loaded"+AH.replace(/[\-.]/g,"_")+"&proto="+B.location.protocol+"&domain="+Z(B.location.href)+"&port="+F(B.location.href)+"&ns="+i;
AE.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+AJ+"' data='"+AG+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+AG+"'></param><param name='flashvars' value='"+AI+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+AI+"' allowScriptAccess='always' wmode='transparent' src='"+AG+"' height='1' width='1'></embed></object>"
}return(AC={outgoing:function(AH,AI,AG){y.postMessage(AA.channel,AH.toString());
if(AG){AG()
}},destroy:function(){try{y.destroyChannel(AA.channel)
}catch(AG){}y=null;
if(x){x.parentNode.removeChild(x);
x=null
}},onDOMReady:function(){AD=AA.remote;
O.Fn.set("flash_"+AA.channel+"_init",function(){k(function(){AC.up.callback(true)
})
});
O.Fn.set("flash_"+AA.channel+"_onMessage",AF);
AA.swf=b(AA.swf);
var AH=Z(AA.swf);
var AG=function(){O.stack.FlashTransport[AH].init=true;
y=O.stack.FlashTransport[AH].swf;
y.createChannel(AA.channel,AA.secret,J(AA.remote),AA.isHost);
if(AA.isHost){if(H&&AA.swfNoThrottle){t(AA.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})
}t(AA.props,{src:p(AA.remote,{xdm_e:J(P.href),xdm_c:AA.channel,xdm_p:6,xdm_s:AA.secret}),name:u+AA.channel+"_provider"});
x=a(AA)
}};
if(O.stack.FlashTransport[AH]&&O.stack.FlashTransport[AH].init){AG()
}else{if(!O.stack.FlashTransport[AH]){O.stack.FlashTransport[AH]={queue:[AG]};
z(AH)
}else{O.stack.FlashTransport[AH].queue.push(AG)
}}},init:function(){g(AC.onDOMReady,AC)
}})
};
O.stack.PostMessageTransport=function(AA){var AC,AD,y,z;
function x(AE){if(AE.origin){return J(AE.origin)
}if(AE.uri){return J(AE.uri)
}if(AE.domain){return P.protocol+"//"+AE.domain
}throw"Unable to retrieve the origin of the event"
}function AB(AF){var AE=x(AF);
if(AE==z&&AF.data.substring(0,AA.channel.length+1)==AA.channel+" "){AC.up.incoming(AF.data.substring(AA.channel.length+1),AE)
}}return(AC={outgoing:function(AF,AG,AE){y.postMessage(AA.channel+" "+AF,AG||z);
if(AE){AE()
}},destroy:function(){X(n,"message",AB);
if(AD){y=null;
AD.parentNode.removeChild(AD);
AD=null
}},onDOMReady:function(){z=J(AA.remote);
if(AA.isHost){var AE=function(AF){if(AF.data==AA.channel+"-ready"){y=("postMessage" in AD.contentWindow)?AD.contentWindow:AD.contentWindow.document;
X(n,"message",AE);
V(n,"message",AB);
k(function(){AC.up.callback(true)
},0)
}};
V(n,"message",AE);
t(AA.props,{src:p(AA.remote,{xdm_e:J(P.href),xdm_c:AA.channel,xdm_p:1}),name:u+AA.channel+"_provider"});
AD=a(AA)
}else{V(n,"message",AB);
y=("postMessage" in n.parent)?n.parent:n.parent.document;
y.postMessage(AA.channel+"-ready",z);
k(function(){AC.up.callback(true)
},0)
}},init:function(){g(AC.onDOMReady,AC)
}})
};
O.stack.FrameElementTransport=function(y){var z,AB,AA,x;
return(z={outgoing:function(AD,AE,AC){AA.call(this,AD);
if(AC){AC()
}},destroy:function(){if(AB){AB.parentNode.removeChild(AB);
AB=null
}},onDOMReady:function(){x=J(y.remote);
if(y.isHost){t(y.props,{src:p(y.remote,{xdm_e:J(P.href),xdm_c:y.channel,xdm_p:5}),name:u+y.channel+"_provider"});
AB=a(y);
AB.fn=function(AC){delete AB.fn;
AA=AC;
k(function(){z.up.callback(true)
},0);
return function(AD){z.up.incoming(AD,x)
}
}
}else{if(D.referrer&&J(D.referrer)!=s.xdm_e){n.top.location=s.xdm_e
}AA=n.frameElement.fn(function(AC){z.up.incoming(AC,x)
});
z.up.callback(true)
}},init:function(){g(z.onDOMReady,z)
}})
};
O.stack.NameTransport=function(AB){var AC;
var AE,AI,AA,AG,AH,y,x;
function AF(AL){var AK=AB.remoteHelper+(AE?"#_3":"#_2")+AB.channel;
AI.contentWindow.sendMessage(AL,AK)
}function AD(){if(AE){if(++AG===2||!AE){AC.up.callback(true)
}}else{AF("ready");
AC.up.callback(true)
}}function AJ(AK){AC.up.incoming(AK,y)
}function z(){if(AH){k(function(){AH(true)
},0)
}}return(AC={outgoing:function(AL,AM,AK){AH=AK;
AF(AL)
},destroy:function(){AI.parentNode.removeChild(AI);
AI=null;
if(AE){AA.parentNode.removeChild(AA);
AA=null
}},onDOMReady:function(){AE=AB.isHost;
AG=0;
y=J(AB.remote);
AB.local=b(AB.local);
if(AE){O.Fn.set(AB.channel,function(AL){if(AE&&AL==="ready"){O.Fn.set(AB.channel,AJ);
AD()
}});
x=p(AB.remote,{xdm_e:AB.local,xdm_c:AB.channel,xdm_p:2});
t(AB.props,{src:x+"#"+AB.channel,name:u+AB.channel+"_provider"});
AA=a(AB)
}else{AB.remoteHelper=AB.remote;
O.Fn.set(AB.channel,AJ)
}AI=a({props:{src:AB.local+"#_4"+AB.channel},onLoad:function AK(){var AL=AI||this;
X(AL,"load",AK);
O.Fn.set(AB.channel+"_load",z);
(function AM(){if(typeof AL.contentWindow.sendMessage=="function"){AD()
}else{k(AM,50)
}}())
}})
},init:function(){g(AC.onDOMReady,AC)
}})
};
O.stack.HashTransport=function(z){var AC;
var AH=this,AF,AA,x,AD,AM,AB,AL;
var AG,y;
function AK(AO){if(!AL){return 
}var AN=z.remote+"#"+(AM++)+"_"+AO;
((AF||!AG)?AL.contentWindow:AL).location=AN
}function AE(AN){AD=AN;
AC.up.incoming(AD.substring(AD.indexOf("_")+1),y)
}function AJ(){if(!AB){return 
}var AN=AB.location.href,AP="",AO=AN.indexOf("#");
if(AO!=-1){AP=AN.substring(AO)
}if(AP&&AP!=AD){AE(AP)
}}function AI(){AA=setInterval(AJ,x)
}return(AC={outgoing:function(AN,AO){AK(AN)
},destroy:function(){n.clearInterval(AA);
if(AF||!AG){AL.parentNode.removeChild(AL)
}AL=null
},onDOMReady:function(){AF=z.isHost;
x=z.interval;
AD="#"+z.channel;
AM=0;
AG=z.useParent;
y=J(z.remote);
if(AF){z.props={src:z.remote,name:u+z.channel+"_provider"};
if(AG){z.onLoad=function(){AB=n;
AI();
AC.up.callback(true)
}
}else{var AP=0,AN=z.delay/50;
(function AO(){if(++AP>AN){throw new Error("Unable to reference listenerwindow")
}try{AB=AL.contentWindow.frames[u+z.channel+"_consumer"]
}catch(AQ){}if(AB){AI();
AC.up.callback(true)
}else{k(AO,50)
}}())
}AL=a(z)
}else{AB=n;
AI();
if(AG){AL=parent;
AC.up.callback(true)
}else{t(z,{props:{src:z.remote+"#"+z.channel+new Date(),name:u+z.channel+"_consumer"},onLoad:function(){AC.up.callback(true)
}});
AL=a(z)
}}},init:function(){g(AC.onDOMReady,AC)
}})
};
O.stack.ReliableBehavior=function(y){var AA,AC;
var AB=0,x=0,z="";
return(AA={incoming:function(AF,AD){var AE=AF.indexOf("_"),AG=AF.substring(0,AE).split(",");
AF=AF.substring(AE+1);
if(AG[0]==AB){z="";
if(AC){AC(true)
}}if(AF.length>0){AA.down.outgoing(AG[1]+","+AB+"_"+z,AD);
if(x!=AG[1]){x=AG[1];
AA.up.incoming(AF,AD)
}}},outgoing:function(AF,AD,AE){z=AF;
AC=AE;
AA.down.outgoing(x+","+(++AB)+"_"+AF,AD)
}})
};
O.stack.QueueBehavior=function(z){var AC,AD=[],AG=true,AA="",AF,x=0,y=false,AB=false;
function AE(){if(z.remove&&AD.length===0){W(AC);
return 
}if(AG||AD.length===0||AF){return 
}AG=true;
var AH=AD.shift();
AC.down.outgoing(AH.data,AH.origin,function(AI){AG=false;
if(AH.callback){k(function(){AH.callback(AI)
},0)
}AE()
})
}return(AC={init:function(){if(T(z)){z={}
}if(z.maxLength){x=z.maxLength;
AB=true
}if(z.lazy){y=true
}else{AC.down.init()
}},callback:function(AI){AG=false;
var AH=AC.up;
AE();
AH.callback(AI)
},incoming:function(AK,AI){if(AB){var AJ=AK.indexOf("_"),AH=parseInt(AK.substring(0,AJ),10);
AA+=AK.substring(AJ+1);
if(AH===0){if(z.encode){AA=K(AA)
}AC.up.incoming(AA,AI);
AA=""
}}else{AC.up.incoming(AK,AI)
}},outgoing:function(AL,AI,AK){if(z.encode){AL=h(AL)
}var AH=[],AJ;
if(AB){while(AL.length!==0){AJ=AL.substring(0,x);
AL=AL.substring(AJ.length);
AH.push(AJ)
}while((AJ=AH.shift())){AD.push({data:AH.length+"_"+AJ,origin:AI,callback:AH.length===0?AK:null})
}}else{AD.push({data:AL,origin:AI,callback:AK})
}if(y){AC.down.init()
}else{AE()
}},destroy:function(){AF=true;
AC.down.destroy()
}})
};
O.stack.VerifyBehavior=function(AB){var AC,AA,y,z=false;
function x(){AA=Math.random().toString(16).substring(2);
AC.down.outgoing(AA)
}return(AC={incoming:function(AF,AD){var AE=AF.indexOf("_");
if(AE===-1){if(AF===AA){AC.up.callback(true)
}else{if(!y){y=AF;
if(!AB.initiate){x()
}AC.down.outgoing(AF)
}}}else{if(AF.substring(0,AE)===y){AC.up.incoming(AF.substring(AE+1),AD)
}}},outgoing:function(AF,AD,AE){AC.down.outgoing(AA+"_"+AF,AD,AE)
},callback:function(AD){if(AB.initiate){x()
}}})
};
O.stack.RpcBehavior=function(AD,y){var AA,AF=y.serializer||o();
var AE=0,AC={};
function x(AG){AG.jsonrpc="2.0";
AA.down.outgoing(AF.stringify(AG))
}function AB(AG,AI){var AH=Array.prototype.slice;
return function(){var AJ=arguments.length,AL,AK={method:AI};
if(AJ>0&&typeof arguments[AJ-1]==="function"){if(AJ>1&&typeof arguments[AJ-2]==="function"){AL={success:arguments[AJ-2],error:arguments[AJ-1]};
AK.params=AH.call(arguments,0,AJ-2)
}else{AL={success:arguments[AJ-1]};
AK.params=AH.call(arguments,0,AJ-1)
}AC[""+(++AE)]=AL;
AK.id=AE
}else{AK.params=AH.call(arguments,0)
}if(AG.namedParams&&AK.params.length===1){AK.params=AK.params[0]
}x(AK)
}
}function z(AN,AM,AI,AL){if(!AI){if(AM){x({id:AM,error:{code:-32601,message:"Procedure not found."}})
}return 
}var AK,AH;
if(AM){AK=function(AO){AK=Q;
x({id:AM,result:AO})
};
AH=function(AO,AP){AH=Q;
var AQ={id:AM,error:{code:-32099,message:AO}};
if(AP){AQ.error.data=AP
}x(AQ)
}
}else{AK=AH=Q
}if(!R(AL)){AL=[AL]
}try{var AG=AI.method.apply(AI.scope,AL.concat([AK,AH]));
if(!T(AG)){AK(AG)
}}catch(AJ){AH(AJ.message)
}}return(AA={incoming:function(AH,AG){var AI=AF.parse(AH);
if(AI.method){if(y.handle){y.handle(AI,x)
}else{z(AI.method,AI.id,y.local[AI.method],AI.params)
}}else{var AJ=AC[AI.id];
if(AI.error){if(AJ.error){AJ.error(AI.error)
}}else{if(AJ.success){AJ.success(AI.result)
}}delete AC[AI.id]
}},init:function(){if(y.remote){for(var AG in y.remote){if(y.remote.hasOwnProperty(AG)){AD[AG]=AB(y.remote[AG],AG)
}}}AA.down.init()
},destroy:function(){for(var AG in y.remote){if(y.remote.hasOwnProperty(AG)&&AD.hasOwnProperty(AG)){delete AD[AG]
}}AA.down.destroy()
}})
};
B.easyXDM=O
})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
(function(N,d,p,K,k,H){var b=this;
var n=Math.floor(Math.random()*10000);
var q=Function.prototype;
var Q=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
var R=/[\-\w]+\/\.\.\//;
var F=/([^:])\/\//g;
var I="";
var o={};
var M=N.easyXDM;
var U="easyXDM_";
var E;
var y=false;
var i;
var h;
function C(X,Z){var Y=typeof X[Z];
return Y=="function"||(!!(Y=="object"&&X[Z]))||Y=="unknown"
}function u(X,Y){return !!(typeof(X[Y])=="object"&&X[Y])
}function r(X){return Object.prototype.toString.call(X)==="[object Array]"
}function c(){try{var X=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
i=Array.prototype.slice.call(X.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);
h=parseInt(i[0],10)>9&&parseInt(i[1],10)>0;
X=null;
return true
}catch(Y){return false
}}var v,x;
if(C(N,"addEventListener")){v=function(Z,X,Y){Z.addEventListener(X,Y,false)
};
x=function(Z,X,Y){Z.removeEventListener(X,Y,false)
}
}else{if(C(N,"attachEvent")){v=function(X,Z,Y){X.attachEvent("on"+Z,Y)
};
x=function(X,Z,Y){X.detachEvent("on"+Z,Y)
}
}else{throw new Error("Browser not supported")
}}var W=false,J=[],L;
if("readyState" in d){L=d.readyState;
W=L=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(L=="loaded"||L=="interactive"))
}else{W=!!d.body
}function s(){if(W){return
}W=true;
for(var X=0;
X<J.length;
X++){J[X]()
}J.length=0
}if(!W){if(C(N,"addEventListener")){v(d,"DOMContentLoaded",s)
}else{v(d,"readystatechange",function(){if(d.readyState=="complete"){s()
}});
if(d.documentElement.doScroll&&N===top){var g=function(){if(W){return
}try{d.documentElement.doScroll("left")
}catch(X){K(g,1);
return
}s()
};
g()
}}v(N,"load",s)
}function G(Y,X){if(W){Y.call(X);
return
}J.push(function(){Y.call(X)
})
}function m(){var Z=parent;
if(I!==""){for(var X=0,Y=I.split(".");
X<Y.length;
X++){Z=Z[Y[X]]
}}return Z.easyXDM
}function e(X){N.easyXDM=M;
I=X;
if(I){U="easyXDM_"+I.replace(".","_")+"_"
}return o
}function z(X){return X.match(Q)[3]
}function f(X){return X.match(Q)[4]||""
}function j(Z){var X=Z.toLowerCase().match(Q);
var aa=X[2],ab=X[3],Y=X[4]||"";
if((aa=="http:"&&Y==":80")||(aa=="https:"&&Y==":443")){Y=""
}return aa+"//"+ab+Y
}function B(X){X=X.replace(F,"$1/");
if(!X.match(/^(http||https):\/\//)){var Y=(X.substring(0,1)==="/")?"":p.pathname;
if(Y.substring(Y.length-1)!=="/"){Y=Y.substring(0,Y.lastIndexOf("/")+1)
}X=p.protocol+"//"+p.host+Y+X
}while(R.test(X)){X=X.replace(R,"")
}return X
}function P(X,aa){var ac="",Z=X.indexOf("#");
if(Z!==-1){ac=X.substring(Z);
X=X.substring(0,Z)
}var ab=[];
for(var Y in aa){if(aa.hasOwnProperty(Y)){ab.push(Y+"="+H(aa[Y]))
}}return X+(y?"#":(X.indexOf("?")==-1?"?":"&"))+ab.join("&")+ac
}var S=(function(X){X=X.substring(1).split("&");
var Z={},aa,Y=X.length;
while(Y--){aa=X[Y].split("=");
Z[aa[0]]=k(aa[1])
}return Z
}(/xdm_e=/.test(p.search)?p.search:p.hash));
function t(X){return typeof X==="undefined"
}var O=function(){var Y={};
var Z={a:[1,2,3]},X='{"a":[1,2,3]}';
if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(Z).replace((/\s/g),"")===X){return JSON
}if(Object.toJSON){if(Object.toJSON(Z).replace((/\s/g),"")===X){Y.stringify=Object.toJSON
}}if(typeof String.prototype.evalJSON==="function"){Z=X.evalJSON();
if(Z.a&&Z.a.length===3&&Z.a[2]===3){Y.parse=function(aa){return aa.evalJSON()
}
}}if(Y.stringify&&Y.parse){O=function(){return Y
};
return Y
}return null
};
function T(X,Y,Z){var ab;
for(var aa in Y){if(Y.hasOwnProperty(aa)){if(aa in X){ab=Y[aa];
if(typeof ab==="object"){T(X[aa],ab,Z)
}else{if(!Z){X[aa]=Y[aa]
}}}else{X[aa]=Y[aa]
}}}return X
}function a(){var Y=d.body.appendChild(d.createElement("form")),X=Y.appendChild(d.createElement("input"));
X.name=U+"TEST"+n;
E=X!==Y.elements[X.name];
d.body.removeChild(Y)
}function A(X){if(t(E)){a()
}var Z;
if(E){Z=d.createElement('<iframe name="'+X.props.name+'"/>')
}else{Z=d.createElement("IFRAME");
Z.name=X.props.name
}Z.id=Z.name=X.props.name;
delete X.props.name;
if(X.onLoad){v(Z,"load",X.onLoad)
}if(typeof X.container=="string"){X.container=d.getElementById(X.container)
}if(!X.container){T(Z.style,{position:"absolute",top:"-2000px"});
X.container=d.body
}var Y=X.props.src;
delete X.props.src;
T(Z,X.props);
Z.border=Z.frameBorder=0;
Z.allowTransparency=true;
X.container.appendChild(Z);
Z.src=Y;
X.props.src=Y;
return Z
}function V(aa,Z){if(typeof aa=="string"){aa=[aa]
}var Y,X=aa.length;
while(X--){Y=aa[X];
Y=new RegExp(Y.substr(0,1)=="^"?Y:("^"+Y.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));
if(Y.test(Z)){return true
}}return false
}function l(Z){var ae=Z.protocol,Y;
Z.isHost=Z.isHost||t(S.xdm_p);
y=Z.hash||false;
if(!Z.props){Z.props={}
}if(!Z.isHost){Z.channel=S.xdm_c;
Z.secret=S.xdm_s;
Z.remote=S.xdm_e;
ae=S.xdm_p;
if(Z.acl&&!V(Z.acl,Z.remote)){throw new Error("Access denied for "+Z.remote)
}}else{Z.remote=B(Z.remote);
Z.channel=Z.channel||"default"+n++;
Z.secret=Math.random().toString(16).substring(2);
if(t(ae)){if(j(p.href)==j(Z.remote)){ae="4"
}else{if(C(N,"postMessage")||C(d,"postMessage")){ae="1"
}else{if(Z.swf&&C(N,"ActiveXObject")&&c()){ae="6"
}else{if(navigator.product==="Gecko"&&"frameElement" in N&&navigator.userAgent.indexOf("WebKit")==-1){ae="5"
}else{if(Z.remoteHelper){Z.remoteHelper=B(Z.remoteHelper);
ae="2"
}else{ae="0"
}}}}}}}Z.protocol=ae;
switch(ae){case"0":T(Z,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);
if(Z.isHost){if(!Z.local){var ac=p.protocol+"//"+p.host,X=d.body.getElementsByTagName("img"),ad;
var aa=X.length;
while(aa--){ad=X[aa];
if(ad.src.substring(0,ac.length)===ac){Z.local=ad.src;
break
}}if(!Z.local){Z.local=N
}}var ab={xdm_c:Z.channel,xdm_p:0};
if(Z.local===N){Z.usePolling=true;
Z.useParent=true;
Z.local=p.protocol+"//"+p.host+p.pathname+p.search;
ab.xdm_e=Z.local;
ab.xdm_pa=1
}else{ab.xdm_e=B(Z.local)
}if(Z.container){Z.useResize=false;
ab.xdm_po=1
}Z.remote=P(Z.remote,ab)
}else{T(Z,{channel:S.xdm_c,remote:S.xdm_e,useParent:!t(S.xdm_pa),usePolling:!t(S.xdm_po),useResize:Z.useParent?false:Z.useResize})
}Y=[new o.stack.HashTransport(Z),new o.stack.ReliableBehavior({}),new o.stack.QueueBehavior({encode:true,maxLength:4000-Z.remote.length}),new o.stack.VerifyBehavior({initiate:Z.isHost})];
break;
case"1":Y=[new o.stack.PostMessageTransport(Z)];
break;
case"2":Y=[new o.stack.NameTransport(Z),new o.stack.QueueBehavior(),new o.stack.VerifyBehavior({initiate:Z.isHost})];
break;
case"3":Y=[new o.stack.NixTransport(Z)];
break;
case"4":Y=[new o.stack.SameOriginTransport(Z)];
break;
case"5":Y=[new o.stack.FrameElementTransport(Z)];
break;
case"6":if(!i){c()
}Y=[new o.stack.FlashTransport(Z)];
break
}Y.push(new o.stack.QueueBehavior({lazy:Z.lazy,remove:true}));
return Y
}function D(aa){var ab,Z={incoming:function(ad,ac){this.up.incoming(ad,ac)
},outgoing:function(ac,ad){this.down.outgoing(ac,ad)
},callback:function(ac){this.up.callback(ac)
},init:function(){this.down.init()
},destroy:function(){this.down.destroy()
}};
for(var Y=0,X=aa.length;
Y<X;
Y++){ab=aa[Y];
T(ab,Z,true);
if(Y!==0){ab.down=aa[Y-1]
}if(Y!==X-1){ab.up=aa[Y+1]
}}return ab
}function w(X){X.up.down=X.down;
X.down.up=X.up;
X.up=X.down=null
}T(o,{version:"2.4.15.118",query:S,stack:{},apply:T,getJSONObject:O,whenReady:G,noConflict:e});
o.DomHelper={on:v,un:x,requiresJSON:function(X){if(!u(N,"JSON")){d.write('<script type="text/javascript" src="'+X+'"><\/script>')
}}};
(function(){var X={};
o.Fn={set:function(Y,Z){X[Y]=Z
},get:function(Z,Y){var aa=X[Z];
if(Y){delete X[Z]
}return aa
}}
}());
o.Socket=function(Y){var X=D(l(Y).concat([{incoming:function(ab,aa){Y.onMessage(ab,aa)
},callback:function(aa){if(Y.onReady){Y.onReady(aa)
}}}])),Z=j(Y.remote);
this.origin=j(Y.remote);
this.destroy=function(){X.destroy()
};
this.postMessage=function(aa){X.outgoing(aa,Z)
};
X.init()
};
o.Rpc=function(Z,Y){if(Y.local){for(var ab in Y.local){if(Y.local.hasOwnProperty(ab)){var aa=Y.local[ab];
if(typeof aa==="function"){Y.local[ab]={method:aa}
}}}}var X=D(l(Z).concat([new o.stack.RpcBehavior(this,Y),{callback:function(ac){if(Z.onReady){Z.onReady(ac)
}}}]));
this.origin=j(Z.remote);
this.destroy=function(){X.destroy()
};
X.init()
};
o.stack.SameOriginTransport=function(Y){var Z,ab,aa,X;
return(Z={outgoing:function(ad,ae,ac){aa(ad);
if(ac){ac()
}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);
ab=null
}},onDOMReady:function(){X=j(Y.remote);
if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:p.protocol+"//"+p.host+p.pathname,xdm_c:Y.channel,xdm_p:4}),name:U+Y.channel+"_provider"});
ab=A(Y);
o.Fn.set(Y.channel,function(ac){aa=ac;
K(function(){Z.up.callback(true)
},0);
return function(ad){Z.up.incoming(ad,X)
}
})
}else{aa=m().Fn.get(Y.channel,true)(function(ac){Z.up.incoming(ac,X)
});
K(function(){Z.up.callback(true)
},0)
}},init:function(){G(Z.onDOMReady,Z)
}})
};
o.stack.FlashTransport=function(aa){var ac,X,ab,ad,Y,ae;
function af(ah,ag){K(function(){ac.up.incoming(ah,ad)
},0)
}function Z(ah){var ag=aa.swf+"?host="+aa.isHost;
var aj="easyXDM_swf_"+Math.floor(Math.random()*10000);
o.Fn.set("flash_loaded"+ah.replace(/[\-.]/g,"_"),function(){o.stack.FlashTransport[ah].swf=Y=ae.firstChild;
var ak=o.stack.FlashTransport[ah].queue;
for(var al=0;
al<ak.length;
al++){ak[al]()
}ak.length=0
});
if(aa.swfContainer){ae=(typeof aa.swfContainer=="string")?d.getElementById(aa.swfContainer):aa.swfContainer
}else{ae=d.createElement("div");
T(ae.style,h&&aa.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});
d.body.appendChild(ae)
}var ai="callback=flash_loaded"+ah.replace(/[\-.]/g,"_")+"&proto="+b.location.protocol+"&domain="+z(b.location.href)+"&port="+f(b.location.href)+"&ns="+I;
ae.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+aj+"' data='"+ag+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+ag+"'></param><param name='flashvars' value='"+ai+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+ai+"' allowScriptAccess='always' wmode='transparent' src='"+ag+"' height='1' width='1'></embed></object>"
}return(ac={outgoing:function(ah,ai,ag){Y.postMessage(aa.channel,ah.toString());
if(ag){ag()
}},destroy:function(){try{Y.destroyChannel(aa.channel)
}catch(ag){}Y=null;
if(X){X.parentNode.removeChild(X);
X=null
}},onDOMReady:function(){ad=aa.remote;
o.Fn.set("flash_"+aa.channel+"_init",function(){K(function(){ac.up.callback(true)
})
});
o.Fn.set("flash_"+aa.channel+"_onMessage",af);
aa.swf=B(aa.swf);
var ah=z(aa.swf);
var ag=function(){o.stack.FlashTransport[ah].init=true;
Y=o.stack.FlashTransport[ah].swf;
Y.createChannel(aa.channel,aa.secret,j(aa.remote),aa.isHost);
if(aa.isHost){if(h&&aa.swfNoThrottle){T(aa.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})
}T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:6,xdm_s:aa.secret}),name:U+aa.channel+"_provider"});
X=A(aa)
}};
if(o.stack.FlashTransport[ah]&&o.stack.FlashTransport[ah].init){ag()
}else{if(!o.stack.FlashTransport[ah]){o.stack.FlashTransport[ah]={queue:[ag]};
Z(ah)
}else{o.stack.FlashTransport[ah].queue.push(ag)
}}},init:function(){G(ac.onDOMReady,ac)
}})
};
o.stack.PostMessageTransport=function(aa){var ac,ad,Y,Z;
function X(ae){if(ae.origin){return j(ae.origin)
}if(ae.uri){return j(ae.uri)
}if(ae.domain){return p.protocol+"//"+ae.domain
}throw"Unable to retrieve the origin of the event"
}function ab(af){var ae=X(af);
if(ae==Z&&af.data.substring(0,aa.channel.length+1)==aa.channel+" "){ac.up.incoming(af.data.substring(aa.channel.length+1),ae)
}}return(ac={outgoing:function(af,ag,ae){Y.postMessage(aa.channel+" "+af,ag||Z);
if(ae){ae()
}},destroy:function(){x(N,"message",ab);
if(ad){Y=null;
ad.parentNode.removeChild(ad);
ad=null
}},onDOMReady:function(){Z=j(aa.remote);
if(aa.isHost){var ae=function(af){if(af.data==aa.channel+"-ready"){Y=("postMessage" in ad.contentWindow)?ad.contentWindow:ad.contentWindow.document;
x(N,"message",ae);
v(N,"message",ab);
K(function(){ac.up.callback(true)
},0)
}};
v(N,"message",ae);
T(aa.props,{src:P(aa.remote,{xdm_e:j(p.href),xdm_c:aa.channel,xdm_p:1}),name:U+aa.channel+"_provider"});
ad=A(aa)
}else{v(N,"message",ab);
Y=("postMessage" in N.parent)?N.parent:N.parent.document;
Y.postMessage(aa.channel+"-ready",Z);
K(function(){ac.up.callback(true)
},0)
}},init:function(){G(ac.onDOMReady,ac)
}})
};
o.stack.FrameElementTransport=function(Y){var Z,ab,aa,X;
return(Z={outgoing:function(ad,ae,ac){aa.call(this,ad);
if(ac){ac()
}},destroy:function(){if(ab){ab.parentNode.removeChild(ab);
ab=null
}},onDOMReady:function(){X=j(Y.remote);
if(Y.isHost){T(Y.props,{src:P(Y.remote,{xdm_e:j(p.href),xdm_c:Y.channel,xdm_p:5}),name:U+Y.channel+"_provider"});
ab=A(Y);
ab.fn=function(ac){delete ab.fn;
aa=ac;
K(function(){Z.up.callback(true)
},0);
return function(ad){Z.up.incoming(ad,X)
}
}
}else{if(d.referrer&&j(d.referrer)!=S.xdm_e){N.top.location=S.xdm_e
}aa=N.frameElement.fn(function(ac){Z.up.incoming(ac,X)
});
Z.up.callback(true)
}},init:function(){G(Z.onDOMReady,Z)
}})
};
o.stack.NameTransport=function(ab){var ac;
var ae,ai,aa,ag,ah,Y,X;
function af(al){var ak=ab.remoteHelper+(ae?"#_3":"#_2")+ab.channel;
ai.contentWindow.sendMessage(al,ak)
}function ad(){if(ae){if(++ag===2||!ae){ac.up.callback(true)
}}else{af("ready");
ac.up.callback(true)
}}function aj(ak){ac.up.incoming(ak,Y)
}function Z(){if(ah){K(function(){ah(true)
},0)
}}return(ac={outgoing:function(al,am,ak){ah=ak;
af(al)
},destroy:function(){ai.parentNode.removeChild(ai);
ai=null;
if(ae){aa.parentNode.removeChild(aa);
aa=null
}},onDOMReady:function(){ae=ab.isHost;
ag=0;
Y=j(ab.remote);
ab.local=B(ab.local);
if(ae){o.Fn.set(ab.channel,function(al){if(ae&&al==="ready"){o.Fn.set(ab.channel,aj);
ad()
}});
X=P(ab.remote,{xdm_e:ab.local,xdm_c:ab.channel,xdm_p:2});
T(ab.props,{src:X+"#"+ab.channel,name:U+ab.channel+"_provider"});
aa=A(ab)
}else{ab.remoteHelper=ab.remote;
o.Fn.set(ab.channel,aj)
}ai=A({props:{src:ab.local+"#_4"+ab.channel},onLoad:function ak(){var al=ai||this;
x(al,"load",ak);
o.Fn.set(ab.channel+"_load",Z);
(function am(){if(typeof al.contentWindow.sendMessage=="function"){ad()
}else{K(am,50)
}}())
}})
},init:function(){G(ac.onDOMReady,ac)
}})
};
o.stack.HashTransport=function(Z){var ac;
var ah=this,af,aa,X,ad,am,ab,al;
var ag,Y;
function ak(ao){if(!al){return
}var an=Z.remote+"#"+(am++)+"_"+ao;
((af||!ag)?al.contentWindow:al).location=an
}function ae(an){ad=an;
ac.up.incoming(ad.substring(ad.indexOf("_")+1),Y)
}function aj(){if(!ab){return
}var an=ab.location.href,ap="",ao=an.indexOf("#");
if(ao!=-1){ap=an.substring(ao)
}if(ap&&ap!=ad){ae(ap)
}}function ai(){aa=setInterval(aj,X)
}return(ac={outgoing:function(an,ao){ak(an)
},destroy:function(){N.clearInterval(aa);
if(af||!ag){al.parentNode.removeChild(al)
}al=null
},onDOMReady:function(){af=Z.isHost;
X=Z.interval;
ad="#"+Z.channel;
am=0;
ag=Z.useParent;
Y=j(Z.remote);
if(af){Z.props={src:Z.remote,name:U+Z.channel+"_provider"};
if(ag){Z.onLoad=function(){ab=N;
ai();
ac.up.callback(true)
}
}else{var ap=0,an=Z.delay/50;
(function ao(){if(++ap>an){throw new Error("Unable to reference listenerwindow")
}try{ab=al.contentWindow.frames[U+Z.channel+"_consumer"]
}catch(aq){}if(ab){ai();
ac.up.callback(true)
}else{K(ao,50)
}}())
}al=A(Z)
}else{ab=N;
ai();
if(ag){al=parent;
ac.up.callback(true)
}else{T(Z,{props:{src:Z.remote+"#"+Z.channel+new Date(),name:U+Z.channel+"_consumer"},onLoad:function(){ac.up.callback(true)
}});
al=A(Z)
}}},init:function(){G(ac.onDOMReady,ac)
}})
};
o.stack.ReliableBehavior=function(Y){var aa,ac;
var ab=0,X=0,Z="";
return(aa={incoming:function(af,ad){var ae=af.indexOf("_"),ag=af.substring(0,ae).split(",");
af=af.substring(ae+1);
if(ag[0]==ab){Z="";
if(ac){ac(true)
}}if(af.length>0){aa.down.outgoing(ag[1]+","+ab+"_"+Z,ad);
if(X!=ag[1]){X=ag[1];
aa.up.incoming(af,ad)
}}},outgoing:function(af,ad,ae){Z=af;
ac=ae;
aa.down.outgoing(X+","+(++ab)+"_"+af,ad)
}})
};
o.stack.QueueBehavior=function(Z){var ac,ad=[],ag=true,aa="",af,X=0,Y=false,ab=false;
function ae(){if(Z.remove&&ad.length===0){w(ac);
return
}if(ag||ad.length===0||af){return
}ag=true;
var ah=ad.shift();
ac.down.outgoing(ah.data,ah.origin,function(ai){ag=false;
if(ah.callback){K(function(){ah.callback(ai)
},0)
}ae()
})
}return(ac={init:function(){if(t(Z)){Z={}
}if(Z.maxLength){X=Z.maxLength;
ab=true
}if(Z.lazy){Y=true
}else{ac.down.init()
}},callback:function(ai){ag=false;
var ah=ac.up;
ae();
ah.callback(ai)
},incoming:function(ak,ai){if(ab){var aj=ak.indexOf("_"),ah=parseInt(ak.substring(0,aj),10);
aa+=ak.substring(aj+1);
if(ah===0){if(Z.encode){aa=k(aa)
}ac.up.incoming(aa,ai);
aa=""
}}else{ac.up.incoming(ak,ai)
}},outgoing:function(al,ai,ak){if(Z.encode){al=H(al)
}var ah=[],aj;
if(ab){while(al.length!==0){aj=al.substring(0,X);
al=al.substring(aj.length);
ah.push(aj)
}while((aj=ah.shift())){ad.push({data:ah.length+"_"+aj,origin:ai,callback:ah.length===0?ak:null})
}}else{ad.push({data:al,origin:ai,callback:ak})
}if(Y){ac.down.init()
}else{ae()
}},destroy:function(){af=true;
ac.down.destroy()
}})
};
o.stack.VerifyBehavior=function(ab){var ac,aa,Y,Z=false;
function X(){aa=Math.random().toString(16).substring(2);
ac.down.outgoing(aa)
}return(ac={incoming:function(af,ad){var ae=af.indexOf("_");
if(ae===-1){if(af===aa){ac.up.callback(true)
}else{if(!Y){Y=af;
if(!ab.initiate){X()
}ac.down.outgoing(af)
}}}else{if(af.substring(0,ae)===Y){ac.up.incoming(af.substring(ae+1),ad)
}}},outgoing:function(af,ad,ae){ac.down.outgoing(aa+"_"+af,ad,ae)
},callback:function(ad){if(ab.initiate){X()
}}})
};
o.stack.RpcBehavior=function(ad,Y){var aa,af=Y.serializer||O();
var ae=0,ac={};
function X(ag){ag.jsonrpc="2.0";
aa.down.outgoing(af.stringify(ag))
}function ab(ag,ai){var ah=Array.prototype.slice;
return function(){var aj=arguments.length,al,ak={method:ai};
if(aj>0&&typeof arguments[aj-1]==="function"){if(aj>1&&typeof arguments[aj-2]==="function"){al={success:arguments[aj-2],error:arguments[aj-1]};
ak.params=ah.call(arguments,0,aj-2)
}else{al={success:arguments[aj-1]};
ak.params=ah.call(arguments,0,aj-1)
}ac[""+(++ae)]=al;
ak.id=ae
}else{ak.params=ah.call(arguments,0)
}if(ag.namedParams&&ak.params.length===1){ak.params=ak.params[0]
}X(ak)
}
}function Z(an,am,ai,al){if(!ai){if(am){X({id:am,error:{code:-32601,message:"Procedure not found."}})
}return
}var ak,ah;
if(am){ak=function(ao){ak=q;
X({id:am,result:ao})
};
ah=function(ao,ap){ah=q;
var aq={id:am,error:{code:-32099,message:ao}};
if(ap){aq.error.data=ap
}X(aq)
}
}else{ak=ah=q
}if(!r(al)){al=[al]
}try{var ag=ai.method.apply(ai.scope,al.concat([ak,ah]));
if(!t(ag)){ak(ag)
}}catch(aj){ah(aj.message)
}}return(aa={incoming:function(ah,ag){var ai=af.parse(ah);
if(ai.method){if(Y.handle){Y.handle(ai,X)
}else{Z(ai.method,ai.id,Y.local[ai.method],ai.params)
}}else{var aj=ac[ai.id];
if(ai.error){if(aj.error){aj.error(ai.error)
}}else{if(aj.success){aj.success(ai.result)
}}delete ac[ai.id]
}},init:function(){if(Y.remote){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)){ad[ag]=ab(Y.remote[ag],ag)
}}}aa.down.init()
},destroy:function(){for(var ag in Y.remote){if(Y.remote.hasOwnProperty(ag)&&ad.hasOwnProperty(ag)){delete ad[ag]
}}aa.down.destroy()
}})
};
b.easyXDM=o
})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);
var RA=(function(){var B=B||{};
var A;
B.init=function(C){A=new easyXDM.Rpc({},{remote:{resize:{},init:{},getLocation:{}}});
A.init()
};
B.resize=function(F,C){var D=F||"100%";
var E=C||(document.body.offsetHeight+40);
A.resize(E,D)
};
B.getLocation=function(){return A.getLocation()
};
return B
})();
var RA=(function(){var b=b||{};
var a;
b.init=function(c){a=new easyXDM.Rpc({},{remote:{resize:{},init:{},getLocation:{}}});
a.init()
};
b.resize=function(f,c){var d=f||"100%";
var e=c||(document.body.offsetHeight+40);
a.resize(e,d)
};
b.getLocation=function(){return a.getLocation()
};
return b
})();
