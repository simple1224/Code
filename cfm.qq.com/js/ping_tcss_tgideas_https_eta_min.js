(function(){function h(b){this.url=[];this.init(b)}var k,n,r,f,y,z,t,F,q,v,w,B,C=0,E=0;_ver="tcss.3.2.0";window.Tcss={};var x="function"==typeof tracert&&"function"==typeof pgvGetColumn&&"function"==typeof pgvGetTopic&&"function"==typeof pgvGetDomainInfo&&"function"==typeof pgvGetRefInfo;if("undefined"==typeof u)var u=1;h.prototype={init:function(b){b?f=b:f={};k=document;if(!f.statIframe&&window!=top)try{k=top.document}catch(a){}"undefined"==typeof k&&(k=document);n=k.location;r=k.body;x&&(Tcss.d=
k,Tcss.l=n);v=[];w=[];B=[]},PTTInfo:function(){window.PTTRun=new PTT;PTTRun.virtualURL=this.getDomainInfo().replace(/dm=|\&url=/g,"");var b=[];b.push("pttplat="+PTTRun.plat);b.push("pttsitetype="+(PTTRun.project?PTTRun.project:"")+PTTRun.siteType);b.push("pttpagetype="+PTTRun.pageType);b.push("pttpagename="+encodeURIComponent(PTTRun.pageName));var a=b.join("&").trimAll();console.log(b.join(";\n"));return a},run:function(){var b,a;b=(new Date).getTime();var c=escape(this.PTTInfo());l.init();this.url.push(this.getDomainInfo());
this.coverCookie();l.setCookie("ssid");l.save();this.url.unshift("https://pingfore."+this.getCookieSetDomain(y)+"/pingd?");this.url.push(this.getRefInfo(f));try{navigator.cookieEnabled?this.url.push("&pvid="+l.setCookie("pgv_pvid",!0)):this.url.push("&pvid=NoCookie")}catch(e){this.url.push("&pvid=NoCookie")}this.url.push(this.getMainEnvInfo());this.url.push(this.getExtendEnvInfo());Tcss.pgUserType="";if(f.pgUserType||f.reserved2)a=f.pgUserType||f.reserved2,a=escape(a.substring(0,256)),Tcss.pgUserType=
a,B.push("pu="+Tcss.pgUserType);x&&(pgvGetColumn(),pgvGetTopic(),this.url.push("&column="+Tcss.column+"&subject="+Tcss.subject),tracert());this.url.push("&vs="+_ver);l.setCookie("ts_uid",!0);a=(new Date).getTime();v.push("tm="+(a-b));C&&v.push("ch="+C);this.url.push("&ext="+c);this.url.push("&hurlcn="+escape(w.join(";")));this.url.push("&rand="+Math.round(1E5*Math.random()));"undefined"==typeof _speedMark?this.url.push("&reserved1=-1"):this.url.push("&reserved1="+(new Date-_speedMark));(b=this.getSud())&&
B.push("su="+escape(b.substring(0,256)));this.url.push("&tt="+escape(B.join(";")));this.sendInfo(this.url.join(""));1==E&&(b=this.getParameter("tcss_rp_dm",k.URL),b!=Tcss.dm&&(b=this.url.join("").replace(/\?dm=(.*?)\&/,"?dm="+b+"&"),this.sendInfo(b)));f.hot&&(document.attachEvent?document.attachEvent("onclick",function(a){pgvWatchClick(a)}):document.addEventListener("click",function(a){pgvWatchClick(a)},!1));f.repeatApplay&&"true"==f.repeatApplay&&"undefined"!=typeof u&&(u=1)},getSud:function(){return f.sessionUserType?
f.sessionUserType:this.getParameter(f.sudParamName||"sessionUserType",k.URL)},coverCookie:function(){if(f.crossDomain&&"on"==f.crossDomain){var b=this.getParameter("tcss_uid",k.URL),a=this.getParameter("tcss_sid",k.URL),c=this.getParameter("tcss_refer",k.URL),e=this.getParameter("tcss_last",k.URL);a&&b&&(E=1,l.setCookie("ssid",!1,a),l.save(),l.setCookie("ts_refer",!0,c),l.setCookie("ts_last",!0,e),l.setCookie("pgv_pvid",!0,b))}},getDomainInfo:function(b){var a;a=n.hostname.toLowerCase();f.virtualDomain&&
(w.push("ad="+a),a=f.virtualDomain);this.getCurrentUrl();Tcss.dm=a;x&&pgvGetDomainInfo();y=Tcss.dm;z||(z=this.getCookieSetDomain(n.hostname.toLowerCase()),x&&(Tcss.domainToSet=z));b&&(Tcss.dm+=".hot");return"dm="+Tcss.dm+"&url="+Tcss.url},getCurrentUrl:function(){var b,a="-";b=escape(n.pathname);""!=n.search&&(a=escape(n.search.substr(1)));if(f.senseParam){var c=this.getParameter(f.senseParam,k.URL);c&&(b+="_"+c)}f.virtualURL&&(w.push("au="+b),b=f.virtualURL);Tcss.url=b;Tcss.arg=a},getRefInfo:function(b){var a=
"-",c="-",e="-",d=k.referrer,g;b=this.getParameter(b.tagParamName||"ADTAG",k.URL);g=d.indexOf("://");-1<g&&(g=d.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i))&&(a=g[2],c=g[4]+(g[5]?g[5]:""));-1!=d.indexOf("?")&&(g=d.indexOf("?")+1,e=d.substr(g));d=a;f.virtualRefDomain&&("-"!=a&&w.push("ard="+a),a=f.virtualRefDomain);f.virtualRefURL&&("-"!=c&&w.push("aru="+escape(c)),c=f.virtualRefURL);var p;b&&(p=a+c,a="ADTAG",c=b);t=a;F=escape(c);if("-"==t||"ADTAG"==t&&"-"==d)a=l.get("ts_last=",
!0),"-"!=a&&v.push("ls="+a);l.setCookie("ts_last",!0,escape((n.hostname+n.pathname).substring(0,128)));a=l.get("ts_refer=",!0);"-"!=a&&v.push("rf="+a);d=n.hostname;f.inner&&(d=","+d+","+f.inner+",");"-"==t||-1<(","+d+",").indexOf(t)||1==E||(c=escape((t+c).substring(0,128)),c!=a&&(C=2),l.setCookie("ts_refer",!0,c));Tcss.rdm=t;Tcss.rurl=F;Tcss.rarg=escape(e);x&&pgvGetRefInfo();return p?"&rdm="+Tcss.rdm+"&rurl="+Tcss.rurl+"&rarg="+Tcss.rarg+"&or="+p:"&rdm="+Tcss.rdm+"&rurl="+Tcss.rurl+"&rarg="+Tcss.rarg},
getMainEnvInfo:function(){var b="";try{var a="-",c="-",e="-",d="-",g="-",p=0,m=navigator;self.screen&&(a=screen.width+"x"+screen.height,c=screen.colorDepth+"-bit");m.language?e=m.language.toLowerCase():m.browserLanguage&&(e=m.browserLanguage.toLowerCase());p=m.javaEnabled()?1:0;d=m.platform;g=(new Date).getTimezoneOffset()/60;b="&scr="+a+"&scl="+c+"&lang="+e+"&java="+p+"&pf="+d+"&tz="+g}catch(J){}finally{return b}},getExtendEnvInfo:function(){var b="";try{var a=n.href,c="-",b=b+("&flash="+this.getFlashInfo());
r.addBehavior&&(r.addBehavior("#default#homePage"),r.isHomePage(a)&&(b+="&hp=Y"));r.addBehavior&&(r.addBehavior("#default#clientCaps"),c=r.connectionType);b+="&ct="+c}catch(e){}finally{return b}},getFlashInfo:function(){var b="-",a=navigator;try{if(a.plugins&&a.plugins.length)for(var c=0;c<a.plugins.length;c++){if(-1<a.plugins[c].name.indexOf("Shockwave Flash")){b=a.plugins[c].description.split("Shockwave Flash ")[1];break}}else if(window.ActiveXObject)for(c=12;5<=c;c--)try{if(eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+
c+"');")){b=c+".0";break}}catch(e){}}catch(e){}return b},getParameter:function(b,a){return b&&a?(b=a.match(new RegExp("(\\?|#|&)"+b+"=([^&^#]*)(#|&|$)")))?b[2]:"":""},getCookieSetDomain:function(b){var a,c,e=[];for(c=a=0;c<b.length;c++)"."==b.charAt(c)&&(e[a]=c,a++);a=e.length;-1<b.indexOf(".cn")&&a--;c="qq.com";1==a?c=b:1<a&&(c=b.substring(e[a-2]+1));return c},watchClick:function(b){try{var a=!0,c="",e;e=window.event?window.event.srcElement:b.target;switch(e.tagName){case "A":c="<A href="+e.href+
">"+e.innerHTML+"</a>";break;case "IMG":c="<IMG src="+e.src+">";break;case "INPUT":c="<INPUT type="+e.type+" value="+e.value+">";break;case "BUTTON":c="<BUTTON>"+e.innerText+"</BUTTON>";break;case "SELECT":c="SELECT";break;default:a=!1}if(a){var d=new h(f),g=d.getElementPos(e);if(f.coordinateId){var p=d.getElementPos(document.getElementById(f.coordinateId));g.x-=p.x}d.url.push(d.getDomainInfo(!0));d.url.push("&hottag="+escape(c));d.url.push("&hotx="+g.x);d.url.push("&hoty="+g.y);d.url.push("&rand="+
Math.round(1E5*Math.random()));d.url.unshift("https://pingfore."+this.getCookieSetDomain(y)+"/pingd?");d.sendInfo(d.url.join(""))}}catch(m){}},getElementPos:function(b){if(null===b.parentNode||"none"==b.style.display)return!1;var a=navigator.userAgent.toLowerCase(),c=null,e;if(b.getBoundingClientRect)return a=b.getBoundingClientRect(),b=Math.max(document.documentElement.scrollTop,document.body.scrollTop),c=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),{x:a.left+c-document.body.clientLeft,
y:a.top+b-document.body.clientTop};if(document.getBoxObjectFor)a=document.getBoxObjectFor(b),e=[a.x-(b.style.borderLeftWidth?Math.floor(b.style.borderLeftWidth):0),a.y-(b.style.borderTopWidth?Math.floor(b.style.borderTopWidth):0)];else{e=[b.offsetLeft,b.offsetTop];c=b.offsetParent;if(c!=b)for(;c;)e[0]+=c.offsetLeft,e[1]+=c.offsetTop,c=c.offsetParent;if(-1<a.indexOf("opera")||-1<a.indexOf("safari")&&"absolute"==b.style.position)e[0]-=document.body.offsetLeft,e[1]-=document.body.offsetTop}for(c=b.parentNode?
b.parentNode:null;c&&"BODY"!=c.tagName&&"HTML"!=c.tagName;)e[0]-=c.scrollLeft,e[1]-=c.scrollTop,c=c.parentNode?c.parentNode:null;return{x:e[0],y:e[1]}},pgvGetArgs:function(){this.getDomainInfo();var b=[];b.push("tcss_rp_dm="+Tcss.dm);b.push("tcss_uid="+l.get("pgv_pvid=",!0));b.push("tcss_sid="+l.get("ssid=",!0));b.push("tcss_refer="+l.get("ts_refer=",!0));b.push("tcss_last="+l.get("ts_last=",!0));return b.join("&")},sendClickForPTT:function(){f.hottag&&(this.url.push(this.getDomainInfo(!0)),this.url.push("&hottag="+
f.hottag),this.url.push("&hotx=9999&hoty=9999"),this.url.push("&rand="+Math.round(1E5*Math.random())),this.url.unshift("https://pingfore."+this.getCookieSetDomain(y)+"/pingd?"),this.sendInfo(this.url.join("")))},tgideasCount:function(b){this.sendInfo("https://pingfore."+this.getCookieSetDomain(y)+"/pingd?dm=tgideas.qq.com.hot&url=/&hottag="+encodeURIComponent(b)+"&hotx=9999&hoty=9999&rand="+Math.round(1E5*Math.random()))},sendInfo:function(b){window.navigator.sendBeacon?window.navigator.sendBeacon(b):
(q=new Image(1,1),Tcss.img=q,q.onload=q.onerror=q.onabort=function(){q.onload=q.onerror=q.onabort=null;Tcss.img=null},q.src=b)}};var l={sck:[],sco:{},init:function(){var b=this.get("pgv_info=",!0);if("-"!=b)for(var b=b.split("&"),a=0;a<b.length;a++){var c=b[a].split("=");this.set(c[0],unescape(c[1]))}},get:function(b,a){var c=a?k.cookie:this.get("pgv_info=",!0),e="-",d;d=c.indexOf(b);-1<d&&(d+=b.length,e=c.indexOf(";",d),-1==e&&(e=c.length),a||(b=c.indexOf("&",d),-1<b&&(e=Math.min(e,b))),e=c.substring(d,
e));return e},set:function(b,a){this.sco[b]=a;a=!1;for(var c=this.sck.length,e=0;e<c;e++)if(b==this.sck[e]){a=!0;break}a||this.sck.push(b)},setCookie:function(b,a,c){var e=n.hostname,d=l.get(b+"=",a);if("-"!=d||c)d=c?c:d;else{switch(b){case "ts_uid":v.push("nw=1");break;case "ssid":C=1}a?d="":d="s";c=(new Date).getUTCMilliseconds();d+=Math.round(2147483647*Math.abs(Math.random()-1))*c%1E10}if(a)switch(b){case "ts_uid":this.saveCookie(b+"="+d,e,this.getExpires(1051200));break;case "ts_refer":this.saveCookie(b+
"="+d,e,this.getExpires(259200));break;case "ts_last":this.saveCookie(b+"="+d,e,this.getExpires(30));break;default:this.saveCookie(b+"="+d,z,"expires=Sun, 18 Jan 2038 00:00:00 GMT;")}else this.set(b,d);return d},getExpires:function(b){var a=new Date;a.setTime(a.getTime()+6E4*b);return"expires="+a.toGMTString()},save:function(){if(f.sessionSpan){var b=new Date;b.setTime(b.getTime()+6E4*f.sessionSpan)}for(var a="",c=this.sck.length,e=0;e<c;e++)a+=this.sck[e]+"="+this.sco[this.sck[e]]+"&";a="pgv_info="+
a.substr(0,a.length-1);c="";b&&(c="expires="+b.toGMTString());this.saveCookie(a,z,c)},saveCookie:function(b,a,c){k.cookie=b+";path=/;domain="+a+";"+c}};window.pgvMain=function(b,a){var c="";a?(c=a,_ver="tcsso.3.2.0"):(c=b,_ver="tcss.3.2.0");try{x&&("undefined"!=typeof pvRepeatCount&&1==pvRepeatCount?(u=1,pvRepeatCount=2):u=2),1==u&&(u=2,(new h(c)).run()),PTTRun.autoSend(),"function"==typeof PTTCallback&&PTTCallback(),window.onerror=function(a,b,c){MossoSendClick("ptterror",a+"|||"+b.split("?")[0]+
"|||"+c,PTTRun.PTTSystem+PTTRun.PTTSystemVer+"|||"+PTTRun.PTTBrowser+PTTRun.PTTBrowserVer+"|||"+PTTRun.PTTNetType,PTTRun.virtualURL)},function(){var a=window.performance,b=this;if(a){var c=a.timing,p,m,f;b.detectPage=function(){window.setTimeout(function(){0<c.loadEventEnd?b.reportData():b.detectPage()},50)};b.reportData=function(){var a=PTTRun.PTTSystem+PTTRun.PTTSystemVer+"|||"+PTTRun.PTTBrowser+PTTRun.PTTBrowserVer+"|||"+PTTRun.PTTNetType;p=(c.loadEventEnd-c.navigationStart)/1E3;MossoSendClick("pttloadpage",
5<p?"C":3<p?"B":1<p?"A":"S",a,PTTRun.virtualURL);m=(c.domComplete-c.responseEnd)/1E3;MossoSendClick("pttdomready",1>m?"S":"A",a,PTTRun.virtualURL);f=(c.domInteractive-c.navigationStart)/1E3;MossoSendClick("pttblank",1.5<f?"C":1<f?"B":.5<f?"A":"S",a,PTTRun.virtualURL)};b.detectPage()}else console.log("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 performance \u63a5\u53e3")}()}catch(e){}};window.pgvSendClickForPTT=function(b){(new h(b)).sendClickForPTT()};window.pgvSendClick=function(b){if("undefined"!=
typeof setSite&&"undefined"!=typeof PTTSendClick){var a=b.hottag?b.hottag.split("."):0;if(b.hottag&&2<=a.length){var c=a[a.length-2].trimAll(),e=a[a.length-1].trimAll();console.log(c+":"+e)}else console.log("\u6309\u94ae\u53c2\u6570\u6709\u8bef");PTTSendClick(c,e,"\u65e7\u57cb\u70b9")}else pgvSendClickForPTT(b)};window.pgvWatchClick=function(b){(new h(b)).watchClick(b)};window.pgvGetArgs=function(b){return(new h(b)).pgvGetArgs()};window.PTT=function(){console.log("\u60a8\u6b63\u5728\u4f7f\u7528PTT\u6570\u636e\u4e0a\u62a5\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/");
var b=this;b.PTTDomain=document.referrer;b.getParameterByName=function(a){a=a.toLowerCase().replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(window.location.search.toLowerCase());return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))};b.getData=function(a){a+="=";for(var b=document.cookie.split(";"),e=0,d=b.length;e<d;e++){for(var g=b[e];" "==g.charAt(0);)g=g.substring(1,g.length);if(0==g.indexOf(a))return unescape(g.substring(a.length,g.length))}return!1};
b.setData=function(a,b,e,d){e=e||0;d=d||"/";var c="";0!=e&&(c=new Date,c.setTime(c.getTime()+864E5*e),c="; expires="+c.toGMTString());document.cookie=a+"="+escape(b)+c+"; path="+d};b.getSession=function(a){if(window.sessionStorage)return sessionStorage.getItem(a);a+="=";for(var b=document.cookie.split(";"),e=0,d=b.length;e<d;e++){for(var g=b[e];" "==g.charAt(0);)g=g.substring(1,g.length);if(0==g.indexOf(a))return unescape(g.substring(a.length,g.length))}return!1};String.prototype.trimAll=function(){return this.replace(/\s/g,
"")};Number.prototype.replace=function(){return this+""};b.splitVirtualStr=function(a){var b=["",""];a&&(a=a&&-1==a.indexOf("//")?a:a.split("//")[1],/^\//.test(a)?b[1]=a:-1==a.indexOf("/")?b[0]=a:(b[0]=a.substring(0,a.indexOf("/")),b[1]=a.substring(a.indexOf("/"),a.length)));return b};window.MossoSendClick=function(a,c,e,d){if("undefined"==typeof setSite)return console.log("\u60a8\u9700\u8981\u5728\u9875\u9762\u91cc\u914d\u7f6esetSite,\u5426\u5219\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/"),
!1;a=""==a||"undefined"==typeof a?"":"_"+a.replace(/_|\./g,"*-*");c=""==c||"undefined"==typeof c?"":"_"+c.replace(/_|\./g,"*-*");e="undefined"==typeof e?"":e.replace(/_|\./g,"*-*");a=(b.plat+"."+b.project+b.siteType+"."+b.pageType+a+c+"_"+e+"."+b.from).trimAll();a=encodeURIComponent(a);b.getData("PTTdebug")&&"0"==b.getData("PTTdebug")||console.log("a:"+a);d=b.splitVirtualStr(d);pgvSendClickForPTT({hottag:a,virtualDomain:d[0],virtualURL:d[1]})};window.PTTSendClick=function(a,c,e,d){if("undefined"==
typeof setSite)return console.log("\u60a8\u9700\u8981\u5728\u9875\u9762\u91cc\u914d\u7f6esetSite,\u5426\u5219\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/"),!1;MossoSendClick(a,c,e,d);a=b.project+b.oldSiteType+"."+b.pageType+(""==a||"undefined"==typeof a?"":"."+a)+(""==c||"undefined"==typeof c?"."+b.from:"."+c);a=a.trimAll();b.getData("PTTdebug")&&"0"==b.getData("PTTdebug")||console.log("b:"+a);d=b.splitVirtualStr(d);pgvSendClickForPTT({hottag:a,
virtualDomain:d[0],virtualURL:d[1]})};window.PTTDebug=function(a){b.setData("PTTdebug",a)};b.unitParams=function(){var a=navigator.userAgent.toLowerCase();b.osact="undefined"==typeof setSite?!1:"os"==setSite.siteType.toLowerCase()?0:"undefined"!=typeof setSite.osact||b.getParameterByName("osact")?1*setSite.osact||1*b.getParameterByName("osact"):0;var c;c="undefined"==typeof setSite||"undefined"==typeof setSite.project?"":setSite.project.replace(/_|\./g,"*-*")+"_";b.project=c;"undefined"==typeof setSite||
"undefined"==typeof setSite.siteType?(console.log("\u60a8\u8fd8\u672a\u914d\u7f6esetSite.siteType\u7684\u503c,\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/"),c=void 0):c="os"!=setSite.siteType?"1"==b.osact?setSite.siteType.toLowerCase().replace(/_|\./g,"*-*")+"_osact":setSite.siteType.toLowerCase().replace(/_|\./g,"*-*"):"os";b.siteType=c;"undefined"==typeof setSite||"undefined"==typeof setSite.pageType?(console.log("\u60a8\u9700\u8981\u914d\u7f6esetSite.pageType\u7684\u503c,\u5426\u5219\u5c06\u65e0\u6cd5\u91c7\u96c6\u7edf\u8ba1\u6570\u636e,\u6587\u6863\u53c2\u9605:http://tgideas.qq.com/ptt/"),
c=void 0):c=setSite.pageType.replace(/_|\./g,"*-*");b.pageType=c;c="undefined"!=typeof setSite&&"undefined"!=typeof setSite.pageName?setSite.pageName.replace(/_|\./g,"*-*"):void 0;b.pageName=c;c=-1!=a.indexOf("msdk")||-1!=a.indexOf("ingame")||"undefined"!=typeof pandora?1:0;b.ingame=c;b.plat=function(){var e="",c="",g=b.getData("PTTcookiesFrom");b.ingame?(e="dcv_ingame",c=-1!=a.indexOf("msdk")?"msdk":-1!=a.indexOf("ingame")?"uaingame":"undefined"!=typeof pandora?"pandora":"ingame"):-1!=a.indexOf("qq/")?
(e="dcv_qq",c="qq_article"):-1!=a.indexOf("micromessenge")?(e="dcv_wx",c="wx_article","wx"==b.getSession("channel")&&(c="wx_menu")):-1!=a.indexOf("weibo")?c="sina_weibo":e=-1<a.indexOf("iphone")||-1<a.indexOf("ipad")||-1<a.indexOf("ipod")||-1<a.indexOf("android")?"dcv_other":"dcv_pc";g||b.setData("PTTcookiesFrom",c);return e}();b.from=function(){var a=b.getData("PTTcookiesFrom"),c=b.getSession("channel");a||"undefined"==typeof b.PTTDomain||(-1<b.PTTDomain.indexOf("baidu.com")?a="seo_baidu":-1<b.PTTDomain.indexOf("sogou.com")?
a="seo_sogou":-1<b.PTTDomain.indexOf("sm.cn")?a="seo_sm":-1<b.PTTDomain.indexOf("so.com")?a="seo_360":-1<b.PTTDomain.indexOf("bing.com")?a="seo_bing":-1<b.PTTDomain.indexOf("google.com")&&(a="seo_google"));if(b.getParameterByName("adtag")){for(var a=[],g=b.getParameterByName("adtag").split("."),f=0,m=g.length;f<m;f++)3>f&&a.push(g[f]);a="adtag_"+a.join("_");b.setData("PTTcookiesFrom",a)}c&&-1!=c.indexOf("seo")&&(a=c);a||(a="other");b.setData("PTTcookiesFrom",a);return a}();b.oldSiteType="os"==b.siteType?
"dcv_pc"==b.plat?"gwpc":"1"==b.ingame?"ingame":"gwm":b.siteType;b.oldUser=function(){var a=b.getData("PTTuserFirstTime");if(a)return a=(new Date).getTime()-a,a/=864E5,60<a?"is2MonthUser":30<a?"is1MonthUser":14<a?"is2WeekUser":"old";b.setData("PTTuserFirstTime",(new Date).getTime(),365);return"newUsers"}();b.reach=function(){var a=b.getData("PTTweekStartTime"),c=b.getData("PTTweekPerSession"),g=b.getData("PTTperWeekNum")?b.getData("PTTperWeekNum"):0;if(a){if(c)return"";b.setData("PTTweekPerSession",
(new Date).getTime());g++;b.setData("PTTperWeekNum",g,7);MossoSendClick("reach","reach"+g,"\u5468\u8bbf",PTTRun.virtualURL)}else b.setData("PTTperWeekNum",1,7),b.setData("PTTweekStartTime",(new Date).getTime(),7),MossoSendClick("reach","reach1","\u5468\u8bbf",PTTRun.virtualURL)};b.routeLine=function(){if("undefined"==typeof setSite||"undefined"==typeof setSite.siteType)return!1;var a=b.getData("PTTrouteLine")?b.getData("PTTrouteLine")+"_":"";if(7>=a.split("_").length){var c="os"!=setSite.siteType?
b.siteType.split("_")[0]:b.pageType,a=a+c;b.setData("PTTrouteLine",a);MossoSendClick("route",a,"\u8def\u5f84",PTTRun.virtualURL)}else return""};b.getAv=function(){var a=b.getData("PTTosav"),c=b.getData("PTTav");if(-1!=b.siteType.indexOf("os")||-1!=b.siteType.indexOf("_osact")){if(a)return"";b.setData("PTTosav","osav",365);MossoSendClick("osav","","\u5b98\u7f51\u5386\u603b",PTTRun.virtualURL)}else{if(c)return"";b.setData("PTTav","actav",365,location.pathname.substring(0,location.pathname.lastIndexOf("/")+
1));MossoSendClick("actav","","\u4e13\u9898\u5386\u603b",PTTRun.virtualURL)}};b.PTTSystem=function(){var b=navigator.platform.toLowerCase();return-1!=a.indexOf("android")?"android":-1!=a.indexOf("iphone")?"iphone":-1!=a.indexOf("ipad")?"ipad":-1!=a.indexOf("ipod")?"ipod":"win32"==b||"windows"==b?"windows":"mac68k"==b||"macppc"==b||"macintosh"==b||"macIntel"==b?"mac":"x11"==b?"unix":"other"}();b.PTTSystemVer=function(){var c;switch(b.PTTSystem){case "android":c=-1!=a.indexOf("android/")?a.substr(a.indexOf("android")+
8,a.indexOf(" ",a.indexOf("android"))-a.indexOf("android")-8).split(" ")[0]:a.substr(a.indexOf("android")+8,a.indexOf(";",a.indexOf("android"))-a.indexOf("android")-8).split(" ")[0];break;case "iphone":c="iphone os";c=a.substr(a.indexOf(c)+10,a.indexOf(" like ",a.indexOf(c))-a.indexOf(c)-10);break;case "windows":c=-1<a.indexOf("windows nt 5.0")||-1<a.indexOf("windows 2000")?"win2000":-1<a.indexOf("windows nt 5.1")||-1<a.indexOf("windows xp")?"winXP":-1<a.indexOf("windows nt 5.2")||-1<a.indexOf("windows 2003")?
"win2003":-1<a.indexOf("windows nt 6.0")||-1<a.indexOf("windows vista")?"winVista":-1<a.indexOf("windows nt 6.1")||-1<a.indexOf("windows 7")?"win7":-1<a.indexOf("windows nt 6.2")||-1<a.indexOf("windows 8")?"win8":-1<a.indexOf("windows nt 10")||-1<a.indexOf("windows 10")?"win10":"other";break;case "ipad":c=a.substr(a.indexOf("cpu os")+7,a.indexOf(" like ",a.indexOf("cpu os"))-a.indexOf("cpu os")-7);break;case "mac":c=a.substr(a.indexOf("intel mac os x")+15,a.indexOf(")",a.indexOf("intel mac os x"))-
a.indexOf("intel mac os x")-15);break;case "ipod":c=a.substr(a.indexOf(c)+10,a.indexOf(" like ",a.indexOf(c))-a.indexOf(c)-10);break;default:c="unknown"}return c}();b.detectBrowser=function(){var c,d="";c=b.PTTSystem;switch("android"==c||"iphone"==c||"ipad"==c||"ipod"==c?"mobile":"pc"){case "mobile":-1!=a.indexOf("msdk")?(c="msdk",d=a.split("msdk/")[1]):-1!=a.indexOf("micromessenger")?(c="weixin",d=a.split("micromessenger/")[1].split(" ")[0]):-1!=a.indexOf("qq/")?(c="qq",d=a.split("qq/")[1].split(" ")[0]):
-1!=a.indexOf("mqqbrowser")?(c="mqqbrowser",d=a.split("mqqbrowser/")[1].split(" ")[0]):-1!=a.indexOf("weibo")?(c="sina",d=a.split("applewebkit/")[1].split(" ")[0]):-1!=a.indexOf("ucbrowser")?(c="uc",d=a.split("ucbrowser/")[1].split(" ")[0]):-1!=a.indexOf("baiduboxapp")?(c="baidubrowser",d=a.split("baiduboxapp/")[1].split(" ")[0]):-1!=a.indexOf("chrome")||-1!=a.indexOf("crios")?(c="chrome",-1!=a.indexOf("chrome")&&(d=a.split("chrome/")[1].split(" ")[0]),-1!=a.indexOf("crios")&&(d=a.split("crios/")[1].split(" ")[0])):
-1!=a.indexOf("android")?(c="original",d=-1!=a.indexOf("applewebkit/")?a.split("applewebkit/")[1].split(" ")[0]:"0"):-1!=a.indexOf("mac os x")?(c="safari",d=a.split("applewebkit/")[1].split(" ")[0]):(c=a.trimAll(),d="unmobile");break;case "pc":/MSIE \d+\.\d+/.test(a)?(d=/MS(IE) (\d+\.\d+)/.exec(a),c=d[1],d=d[2]):-1!=a.indexOf("qqbrowser")?(c="qqbrowser",d=a.split("qqbrowser/")[1].split(" ")[0]):/[Cc]hrome\/\d+/.test(a)?(d=/([Cc]hrome)\/(\d+)/.exec(a),c=d[1],-1!=a.indexOf("metasr")&&(c="sogou"),d=
d[2]):/[Ff]irefox(\/\d+\.\d+)/.test(a)?(d=/([Ff]irefox)\/(\d+\.\d+)/.exec(a),c=d[1],d=d[2]):/[Vv]ersion\/(\d+\.\d) ([Ss]afari)/.test(a)?(d=/[Vv]ersion\/(\d+\.\d) ([Ss]afari)/.exec(a),c=d[2],d=d[1]):/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(a)?(d=/([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(a),c=d[1],d=d[2]):(c="unknown",d="unwindow");break;default:c="unknown",d="unpc"}b.PTTBrowser=c;b.PTTBrowserVer=parseFloat(d.split(".")[0]+"."+d.split(".")[1]);MossoSendClick("browserInfo",b.PTTBrowser+b.PTTBrowserVer,
"\u6d4f\u89c8\u5668\u4fe1\u606f",PTTRun.virtualURL)};b.PTTNetType=function(){var b;-1!=a.indexOf("nettype/")?(b=-1==a.indexOf(" ",a.indexOf("nettype/"))?20:a.indexOf(" ",a.indexOf("nettype/"))-a.indexOf("nettype/")-8,b=a.substr(a.indexOf("nettype/")+8,b)):b="undefined"!=typeof navigator.connection&&"undefined"!=typeof navigator.connection.type?navigator.connection.type:-1!=a.indexOf("iphone")||-1!=a.indexOf("ipad")||-1!=a.indexOf("ipod")||-1!=a.indexOf("android")?"mobileUnknown":"PCNetwork";return b}();
b.getPixel=function(){var c=document.documentElement.clientWidth,d=document.documentElement.clientHeight,g=window.devicePixelRatio?window.devicePixelRatio:1;if(-1!=a.indexOf("iphone")||-1!=a.indexOf("ipad")||-1!=a.indexOf("ipod")||-1!=a.indexOf("android")){var f=window.screen.width,m=c,h=window.screen.height;Math.max(f,h)==m?m=f:h*=c/f;m>h&&(f=h,h=m,m=f);c>d&&(f=d,d=c,c=f)}else m=window.screen.width,h=window.screen.height;b.PTTPixelWidth=parseInt(m*g);b.PTTPixelHeight=parseInt(h*g);b.PTTViewPixelWidth=
parseInt(c*g);b.PTTViewPixelHeight=parseInt(d*g);MossoSendClick("devicesize",b.PTTPixelWidth+"x"+b.PTTPixelHeight,"\u8bbe\u5907\u5c3a\u5bf8",PTTRun.virtualURL);MossoSendClick("viewsize",b.PTTViewPixelWidth+"x"+b.PTTViewPixelHeight,"\u53ef\u89c6\u5c3a\u5bf8",PTTRun.virtualURL)}};b.unitParams();b.autoSend=function(){-1==location.href.indexOf("qq.com/ingame")&&-1==location.href.indexOf("qq.com/g/")||MossoSendClick("mc","","\u5fae\u793e\u533a",PTTRun.virtualURL);b.routeLine();b.getAv();b.reach();MossoSendClick("systemInfo",
b.PTTSystem+b.PTTSystemVer,"\u7cfb\u7edf\u4fe1\u606f",PTTRun.virtualURL);b.detectBrowser();b.getPixel();MossoSendClick("netType",b.PTTNetType,"\u7f51\u7edc\u7c7b\u578b",PTTRun.virtualURL);switch(b.oldUser){case "newUsers":MossoSendClick("user","newUsers","\u65b0\u7528\u6237",PTTRun.virtualURL);break;case "old":MossoSendClick("user","old","\u8001\u7528\u6237",PTTRun.virtualURL);break;case "is2WeekUser":MossoSendClick("user","2week","\u5468\u7528\u6237",PTTRun.virtualURL);break;case "is1MonthUser":MossoSendClick("user",
"1month","1\u6708\u7528\u6237",PTTRun.virtualURL);break;case "is2MonthUser":MossoSendClick("user","2month","2\u6708\u7528\u6237",PTTRun.virtualURL)}b.exposure(window);if("undefined"!=typeof setSite&&"undefined"!=typeof setSite.stayTime&&0==1*setSite.stayTime)return!1;window.PTTstayTime1&&(window.PTTstayTime1.stop(),window.setStayTime5&&window.clearTimeout(window.setStayTime5));window.PTTstayTime1=stayTime({time:1E3,flag:"staytime1",start:!0});window.PTTstayTime5&&window.PTTstayTime5.stop();window.setStayTime5=
window.setTimeout(function(){window.PTTstayTime1.stop();window.PTTstayTime5=stayTime({time:5E3,flag:"staytime5",start:!0})},6E3)};b.exposure=function(a){function b(b,c,d){var e=a.document.body;if(void 0===c||"function"===typeof c)d=c,c={};e=c.container||e;c=c.offset||0;for(var f=0;f<k.length;f++)if(k[f].container===e)return k[f].isInViewport(b,c,d);return k[k.push(g(e))-1].isInViewport(b,c,d)}function e(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)}function d(a,b,c){var d;
return function(){var e=this,g=arguments,f=c&&!d;clearTimeout(d);d=setTimeout(function(){d=null;c||a.apply(e,g)},b);f&&a.apply(e,g)}}function g(b){function c(a,b,c){return{watch:function(){A.add(a,b,c)},dispose:function(){A.remove(a)}}}function g(c,d){var e,g;if(!(q(a.document.documentElement,c)&&q(a.document.documentElement,b)&&c.offsetWidth&&c.offsetHeight))return!1;var f=c.getBoundingClientRect();if(b===a.document.body)c=-d,e=-d,g=a.document.documentElement.clientWidth+d,d=a.document.documentElement.clientHeight+
d;else{var m=b.getBoundingClientRect();c=m.top-d;e=m.left-d;g=m.right+d;d=m.bottom+d}return f.right>=e&&f.left<=g&&f.bottom>=c&&f.top<=d}var A=f(),G=b===a.document.body?a:b,h=d(A.checkAll(function(a,b,c){g(a,b)&&(A.remove(a),c(a))}),15);e(G,"scroll",h);G===a&&e(a,"resize",h);n&&m(A,b,h);setInterval(h,150);return{container:b,isInViewport:function(a,b,d){if(!d)return g(a,b);a=c(a,b,d);a.watch();return a}}}function f(){function a(a){for(var b=c.length-1;0<=b;b--)if(c[b][0]===a)return b;return-1}function b(b){return-1!==
a(b)}var c=[];return{add:function(a,d,e){b(a)||c.push([a,d,e])},remove:function(b){b=a(b);-1!==b&&c.splice(b,1)},isWatched:b,checkAll:function(a){return function(){for(var b=c.length-1;0<=b;b--)a.apply(this,c[b])}}}}function m(a,b,c){function d(b){b=f.call([],Array.prototype.slice.call(b.addedNodes),b.target);return 0<g.call(b,a.isWatched).length}var e=new MutationObserver(function(a){!0===a.some(d)&&setTimeout(c,0)}),g=Array.prototype.filter,f=Array.prototype.concat;e.observe(b,{childList:!0,subtree:!0,
attributes:!0})}function h(b){var c=[];if("function"==typeof a.document.querySelectorAll)c=Array.prototype.slice.call(a.document.querySelectorAll("["+b+"]"));else for(var d=document.getElementsByTagName("*"),e=0;e<d.length;e++){var g=d[e];g.getAttribute(b)&&c.push(g)}return c}function l(a,b){b||(b=location.href);a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(b);return null==a?null:a[1]}var k=[],n="function"===typeof a.MutationObserver,q=a.document.documentElement.compareDocumentPosition?
function(a,b){return!!(a.compareDocumentPosition(b)&16)}:a.document.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):!1)}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},D=document.currentScript||function(){var a=document.getElementsByTagName("script");return a[a.length-1]}(),r=l("prefix",D.src)||"",D=parseInt(l("autorun",D.src)||1),I=function(){H(r)},H=function(a){r=a||r;for(var c=h("exposure-tag"),d=0;d<c.length;d++)(function(){var a=d,b=c[a].getAttribute("exposure-tag").split(",");
e(c[a],"click",function(){MossoSendClick&&MossoSendClick("hotspot",b[0],b[1],PTTRun.virtualURL)})})(),b(c[d],function(a){a=a.getAttribute("exposure-tag").split(",");MossoSendClick&&MossoSendClick("exposure",a[0],a[1],PTTRun.virtualURL)})},t=function(){var a=[],b,c=document,d=(c.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(c.readyState);d||e(c,"DOMContentLoaded",b=function(){c.removeEventListener("DOMContentLoaded",b);for(d=1;b=a.shift();)b()});return function(b){d?setTimeout(b,0):a.push(b)}}();
D?t(I):function(){window.exposure={};exposure.run=function(a){H(a)}}()};b.PTTstayTime=function(){function a(a,b){var c={};b=b||{};for(var d in a)c[d]=void 0===b[d]?a[d]:b[d];return c}var b=function(a,b){function c(d){null===k&&(k=d);var e=d-k;e>=b&&(a(d,e),k=d);l=f(c)}b=b||16;for(var d=0,e=["ms","moz","webkit","o"],f,g,h=0;h<e.length&&!window.requestAnimationFrame;++h)f=window[e[h]+"RequestAnimationFrame"],g=window[e[h]+"CancelAnimationFrame"]||window[e[h]+"CancelRequestAnimationFrame"];f||(f=function(a,
b){var c=(new Date).getTime(),e=Math.max(0,16-(c-d));b=window.setTimeout(function(){a(c+e)},e);d=c+e;return b});g||(g=function(a){clearTimeout(a)});var k=null,l=null,n={start:function(){l=f(c);return n},stop:function(){g(l);k=l=null;return n}};return n},e={page:null,time:1E3,flag:"",start:!0};window.stayTime=function(c){c=a(e,c);var d=null,f=b(function(){if(MossoSendClick){var a;a=d;a||("mo"in window||(mo={}),mo.Slide=mo.Slide||{},mo.Slide.instances=mo.Slide.instances||[],c.page=c.page||mo.Slide.instances[0]||
null,_flag=c.page&&void 0!==c.page.curPage?"page"+c.page.curPage:"single",a=c.page&&void 0!==c.page.curPage?"\u9875\u9762"+c.page.curPage:"\u6574\u4e2a\u9875\u9762",a=[c.flag,_flag,a]);MossoSendClick(a[0],a[1],a[2],PTTRun.virtualURL)}},c.time);f.setFlag=function(a){d=a};c.start&&f.start();return f};return stayTime};b.PTTstayTime()}})();window.console=window.console||function(){var h={};h.log=h.warn=h.debug=h.info=h.error=h.time=h.dir=h.profile=h.clear=h.exception=h.trace=h.assert=function(){};return h}();