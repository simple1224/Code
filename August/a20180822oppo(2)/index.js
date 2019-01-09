    var ua = window.navigator.userAgent.toLowerCase();
	var appConfig={
				"QQBrowserAppId":"106",  //在QQ浏览器端申请的APPID，联系人：Andorid：ricedeng(邓磊)  IOS：kingjlhuang(黄金龙)
				"WxAppId":"wx9b2251fa995dcf56",  //需要在微信申请openLink权限，联系人：johnnyliu(刘南江)
				"AppName":"炫舞手游",  //业务的中文名称
				"scope":"snsapi_userinfo"   //默认是 snsapi_base 静默授权，如果游戏无静默权限，就需要手动改成 snsapi_userinfo
				//"LogoUrl":""   //业务在授权时需要显示的正方形标准Logo，
	}
	var sData = {
		//"appid": 1105483033,
		"nick": '',
		"sServiceType": "x5m"
	};
	var currUrl=window.location.href;
	currUrl=encodeURIComponent(currUrl.replace('http://','https://'));

$('#wxloginBtn').off().on('click',function(){
	need("biz.login",function(LoginManager){
		LoginManager.init({
			appConfig:appConfig
		});
		if( LoginManager.isWxApp() ){
			LoginManager.loginByWX();
		} else {
			//LoginManager.loginByWX();
			//window.location.href="https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90136652&appid=wx9b2251fa995dcf56&url="+currUrl+"#wechat_redirect";
          alert("请把链接复制到微信内打开参与本次活动！");
		}
	})
	return false;
});
$('#ptLoginBtn').off().on('click',function(){
	need("biz.login",function(LoginManager){
		LoginManager.init({
			needReloadPage:true
		});
		LoginManager.login();
	})
	return false;
});	
milo.addEvent(g("ptLogoutBtn"), "click", function() {
    need("biz.login",function(LoginManager){
        LoginManager.init({
            needReloadPage:true
        });
        LoginManager.logout();
    });
    return false;
});
milo.ready(function () {
	need("biz.login",function(LoginManager){
		LoginManager.init({
			appConfig:appConfig
		});
		LoginManager.checkLogin(
			function(userinfo){
				console.log("已登陆");
				console.log(userinfo);
				
				if (milo.cookie.get("acctype")=="wx"){//微信登录
                    //$('#ptLogoutBtn').hide();
                    //获取头像昵称等信息
                    LoginManager.getUserInfoByWxOpenId({
                        "openid":milo.cookie.get("openid"),
                        "access_token":milo.cookie.get("access_token")
                    },function(wxuser){
                        $("#userinfo").text(wxuser.nickname);
                        if (wxuser.headimgurl!='' ) {
                            sUrl=wxuser.headimgurl+'/64';
							//$('#img_myface').attr('src', sUrl);
                        }
                    });
                } else {//QQ登录
                    //获取头像昵称等信息
					//$("#userinfo").text(userinfo.nickName);
					$("#userinfo").text(userinfo.userUin);
                    LoginManager.getUserFace(function(data){
                        if (data.userFace!='' ) {
                            sUrl=data.userFace;
							$('#img_myface').attr('src', sUrl);
                        }
                    });
                }
				//查询是否绑定大区
				 amsInit(159712, 494437);
				
			},
			function(){
				console.log("未登陆");				
				if (LoginManager.isWxApp()){//微信环境下强制自动登录，手Q环境下直接会自动登录，不用强制
						LoginManager.loginByWX();
				}
				
			},
			{//checklogin的时候增加额外参数，避免多业务登录态混淆
				appConfig: {
				WxAppId : 'wx9b2251fa995dcf56'
			}
		});	
	});
});


     amsCfg_494437={
                        type : "query",
						iQueryFlowID:494436,
                        success : function(bindedInfo){
                            //已绑定时的扩展处理
                            getTask();  
							amsSubmit(159712,495084);
							settime(30);
                        },
                        failure : function(){
                            //未绑定时的扩展处理
							amsInit(159712, 494436);
                        }
                    };

                    //提交绑定的配置
                    amsCfg_494436={
                        type : "comit",
                        needPopupRole:true,//是否弹默认角色框选角色
                        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
                        iQueryFlowID:494437,
                        service:"x5m",
						success : function(bindedInfo){
							//已绑定时的扩展处理
							getTask();
							amsSubmit(159712,495084);
							settime(30);
							
						},
						failure : function(){
							//未绑定时的扩展处理
							amsInit(159712, 494436);
						}
                    };



function isloginn(activeId){
	need("biz.login", function (LoginManager) {
        LoginManager.checkLogin(function (userinfo) {
			 amsSubmit(159712, activeId);
			
		},function(){
	           showDia("dia");
              stopTime();
		});
	});
}


amsCfg_494513 = {
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert(callbackObj.sMsg);
       $('.box1  a').addClass('active');
		return;
	}
};

amsCfg_494438 = amsCfg_494509 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert(callbackObj.sMsg);

		return;
	}
};

amsCfg_494612 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item1 a").addClass("active");
		return;
	}
};


amsCfg_494614 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item2 a").addClass("active");
		return;
	}
};

amsCfg_494615 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item3 a").addClass("active");
		return;
	}
};

amsCfg_494617 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item4 a").addClass("active");
		return;
	}
};

amsCfg_494620 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item5 a").addClass("active");
		return;
	}
};

amsCfg_494622 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item6 a").addClass("active");
		return;
	}
};

amsCfg_494643 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item7 a").addClass("active");
		return;
	}
};

amsCfg_494645 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item8 a").addClass("active");
		return;
	}
};

amsCfg_494646 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item9 a").addClass("active");
		return;
	}
};


amsCfg_494647 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item10 a").addClass("active");
		return;
	}
};


amsCfg_494648 ={
	'iAMSActivityId' : '159712', // AMS活动号
	'activityId' : '220932', // 模块实例号	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件

		LotteryManager.alert("领取成功！");
        $(".item11 a").addClass("active");
		return;
	}
};


function getTask(){
	isloginn(494528);
	setTimeout(function(){isloginn(494548);},10000);
	setTimeout(function(){isloginn(494570);},20000);
	}
	
	
	amsCfg_494528 = {
		"iActivityId": 159712, //活动id	
		"iFlowId":    494528, //流程id
		"sData":sData,
		"fFlowSubmitEnd": function(res){
			var loginNum=parseInt(res.sOutValue1)>3?3:res.sOutValue1;
			var loginNum1=parseInt(res.sOutValue1)>7?7:res.sOutValue1;
			var PeekNum=parseInt(res.sOutValue2)>3?3:res.sOutValue2;
			var FriendNum=parseInt(res.sOutValue3)>20?20:res.sOutValue3;
        var FriendNum1=parseInt(res.sOutValue3)>40?40:res.sOutValue3;
			
			$(".item1 span").text("("+loginNum+"/3)");
			$(".item2 span").text("("+loginNum1+"/7)");
			$(".item3 span").text("("+PeekNum+"/3)");
			$(".item4 span").text("("+FriendNum+"/20)");
          $(".item5 span").text("("+FriendNum1+"/40)");
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};	
	

   amsCfg_494548 = {
		"iActivityId": 159712, //活动id	
		"iFlowId":    494548, //流程id
		"sData":sData,
		"fFlowSubmitEnd": function(res){
			//var PriceNum=parseInt(res.sOutValue1)>3?3:res.sOutValue1;
			var v2=parseInt(res.sOutValue2)>5?5:res.sOutValue2;
			var v2_2=parseInt(res.sOutValue2)>10?10:res.sOutValue2;

			
			//$(".item5 span").text("("+PriceNum+"/10)");
			$(".item6 span").text("("+v2+"/5)");
			$(".item7 span").text("("+v2_2+"/10)");
;
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};
	
	
	amsCfg_494570 = {
		"iActivityId": 159712, //活动id	
		"iFlowId":    494570, //流程id
		"sData":sData,
		"fFlowSubmitEnd": function(res){
			var v1=parseInt(res.sOutValue1)>10?10:res.sOutValue1;
			var v1_2=parseInt(res.sOutValue1)>20?20:res.sOutValue1;
			var v3=parseInt(res.sOutValue2)>3?3:res.sOutValue2;
			var v3_2=parseInt(res.sOutValue2)>6?6:res.sOutValue2;

			
			$(".item8 span").text("("+v1+"/10)");
			$(".item9 span").text("("+v1_2+"/20)");
			$(".item10 span").text("("+v3+"/3)");
			$(".item11 span").text("("+v3_2+"/6)");
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};	
	
	amsCfg_495084 = {
		"iActivityId": 159712, //活动id	
		"iFlowId":    495084, //流程id
		"fFlowSubmitEnd": function(res){
			var holds=res.sOutValue1;
			var arrHold=holds.split(',');
			var j=1;
			for(var i=0;i<arrHold.length;i++)
			{
				if(arrHold[i]>0)
				{
					$(".item"+j+" a").addClass("active");
				}
				else
				{
					$(".item"+j+" a").removeClass("active");
				}
           j++;   
			}
			
			if(res.sOutValue2>0)
			{
				$('.box1  a').addClass('active');
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};


window.stime;
function settime(val) { 
if (val == 0) { 
getTask();  
val=30;
} else { 
val--; 
} 
document.getElementById("seconds").innerHTML=val;
window.stime=setTimeout(function() { 
settime(val) 
},1000);
} 	

function resetTime()
{
	clearTimeout(window.stime);
	settime(31);
}

function stopTime()
{
	clearTimeout(window.stime);
}
