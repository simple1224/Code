//登录
milo.addEvent(g("dologin"), "click", function() {
    need("biz.login",function(LoginManager){
        LoginManager.init({
            needReloadPage:true
        });
        LoginManager.login();
    });
    return false;
});
milo.addEvent(g("dologout"), "click", function() {
    need("biz.login",function(LoginManager){
        LoginManager.logout();
    });
    return false;
});
milo.ready(function() {
    
    need("biz.login",function(LoginManager){
        LoginManager.checkLogin(function(){
            g("login_qq_span").innerHTML = LoginManager.getUserUin();//获取QQ号
           	$("#unlogin").hide();
           	$("#logined").show();
            
            amsInit(154511, 481870);
            //
        });
    });

});

 amsCfg_481870={
    type : "query",
    iQueryFlowID:481870,
    service:"rf" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
		amsSubmit(154511,482363);
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

//提交绑定的配置
amsCfg_481869={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:481870,
    service:"rf" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        amsSubmit(154511,482363);
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

amsCfg_481798 = {
	'iActivityId' : '154511',
	'iFlowId' : '481798',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				zoneid:1,
				//apptype:4	新版webpay，已默认
				onPaySuccess:function(){
					setTimeout(function(){
						amsSubmit(154511,482363);
					},2000);
				}//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('rf', 9076, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});	
amsCfg_481874 = {
	'iActivityId' : '154511',
	'iFlowId' : '481874',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				zoneid:1,
				//apptype:4	新版webpay，已默认
				onPaySuccess:function(){
					setTimeout(function(){
						amsSubmit(154511,482363);
					},2000);
				}//支付成功后回调方法
				//onPayClose:function(){}//关闭支付页面回调方法
			};
			DaojuBuy.pay(res.jData,option);
		});
	},
	'fFlowSubmitFailed':function(res) {
		alert(res.sMsg);
	}
};
milo.ready(function() {
	need(["ams.daoju_buy_v2.appid"], function(autoappid) {
		autoappid.init('rf', 9076, function(final_appid) {
			//final_appid为自动判断得到的道聚城渠道号
			//本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
		});
	});
});		

amsCfg_482008 = {
	'iAMSActivityId' : '154511', // AMS活动号
	'iLotteryFlowId' : '482008', //  查询获奖轮播的流程号
	'activityId' : '216017', // 模块实例号
	'contentId' : 'getGiftContent_482008', //容器ID
	'templateId' : 'getGiftTemplate_482008', //模板ID
	'contentPageId' : 'getGiftPageContent_482008',	//分页容器ID
	'showContentId' : 'showMyGiftContent_482008' //弹出层ID
};

amsCfg_482007 = amsCfg_482107 = {
	'iAMSActivityId' : '154511', // AMS活动号
	'activityId' : '216017', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(154511,482363);
		var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
		if(packageLen && packageLen.length > 1){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
	
		//1：实物
		if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
			/*
			 * 0：虚拟游戏物品
			 * 1：实际物品，需要填写个人收货信息
			 * 2：cdkey
			 */
			LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
			return;
		}
		//2：cdkey
		if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
			// 新的处理
			if(callbackObj.sPackageCDkey){
				LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'复制成功。\');">');
				return;
			}else{
				LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
				return;
			}
			
		}
		
		LotteryManager.alert(callbackObj.sMsg);
	}
};

amsCfg_482160 = {
	'activityId' : '154511', // 模块实例号
	'contentId' : 'broadcastContent_482160', //容器ID
	'templateId' : 'broadcastTemplate_482160' //模板ID
};
milo.ready(function(){
	amsInit(154511,482160);
});


amsCfg_482363 = {
	"iActivityId": 154511, //活动id	
	"iFlowId":    482363, //流程id
	"sNeedSubmitPopDiv":  false ,
	"fFlowSubmitEnd": function(res){
		if(res.iRet==0){
			$("#nums").text(res.sOutValue1);
			
		}
		return;
	},
	"fFlowSubmitFailed":function(res){
		//失败会走到这个函数
		//条件不满足，ame返回大于0是后走到这里
		alert(res.sMsg);
	}
};