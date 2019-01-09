/*
    //查询是否绑定的配置
    amsCfg_464369={
        type : "query",
        iQueryFlowID:464369,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(147724,464375);

        },
        failure : function(){
            //未绑定时的扩展处理
            amsSubmit(147724,464375);
        }
    };

    //提交绑定的配置
    amsCfg_464368={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:464369,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(147724,464375);
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

    //调用，查询是否已经绑定
    milo.ready(function(){
                amsInit(147724, 464369);
            }
    );

*/

// 抽奖领取主功能初始化
amsCfg_464370 = amsCfg_464376 = amsCfg_464377 = {
	'iAMSActivityId' : '147724', // AMS活动号
	'activityId' : '209334', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(147724,464375);
		var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
		if(packageLen && packageLen.length > 1){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		LotteryManager.alert(callbackObj.sMsg);
	}
};

amsCfg_464381 = {
	'iAMSActivityId' : '147724', // AMS活动号
	'activityId' : '209334', // 模块实例号
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		amsSubmit(147724,464375);
		$(".btn_dh").eq(0).removeClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('兑换');
		$(".btn_dh").eq(1).removeClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('兑换');
		$(".btn_dh").eq(2).removeClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('兑换');
		$(".btn_dh").eq(3).removeClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('兑换');
		alert("重置成功!");
	}
};

// 抽奖领取主功能初始化
amsCfg_464378 = amsCfg_464379 = amsCfg_464380 = amsCfg_464382 = {
	'iAMSActivityId' : '147724', // AMS活动号
	'activityId' : '209334', // 模块实例号
	'sData' : {'iChoose':0}, //传递额外参数,如果是不支持Flash的浏览器，如游戏内置浏览器，请开启xhr参数设置为true，默认为false

	'_everyRead' : true, //每次读取amsCfg_436615对象,默认是false
	'onBeginGetGiftEvent' : function(){
		return 0; // 抽奖前事件，返回0表示成功
	},
	'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		setTimeout(function(){ amsSubmit(147724,464375); },2000);
		var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
		if(packageLen && packageLen.length > 1){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		LotteryManager.alert(callbackObj.sMsg);
	}
};

//提交请求至AME
amsCfg_464375 = {
	"iActivityId": 147724, //活动id	
	"iFlowId":    464375, //流程id
	"sNeedSubmitPopDiv":  false ,
	"fFlowSubmitEnd": function(res){
		$("#luckNum").text('我的幸运值：'+res.sOutValue1);
		switch(res.sOutValue2){
			case '1': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换'); 
			break;
			case '2': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换');
				$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('已兑换');
			break;
			case '3': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换');
				$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('已兑换');
				$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('已兑换');
			break;
			case '4': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换');
				$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('已兑换');
				$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('已兑换');
				$(".btn_dh").eq(3).addClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('已兑换');
			break;
		}
		return;
	},
	"fFlowSubmitFailed":function(res){
		//失败会走到这个函数
		//条件不满足，ame返回大于0是后走到这里
		alert(res.sMsg);
	}
};

//重置
function reset(){
    if(confirm("重置后幸运值会归0，确定要进行重置么?")){
        amsSubmit(147724,464381);
    }
}

//提交请求至AME
amsCfg_464384 = {
	"iActivityId": 147724, //活动id	
	"iFlowId":    464384, //流程id
	"fFlowSubmitEnd": function(res){
		alert('你目前拥有荧光棒:' + res.sOutValue1 + '个');
		return;
	},
	"fFlowSubmitFailed":function(res){
		//失败会走到这个函数
		//条件不满足，ame返回大于0是后走到这里
		alert(res.sMsg);
	}
};

function exchangeLuck(m,n){
	var choose = n+1;
	if(typeof(choose)!='undefined' && choose>0){
		switch(m){
			case 1: amsCfg_464378.sData.iChoose = choose;amsSubmit(147724,464378); break;
			case 2: amsCfg_464380.sData.iChoose = choose;amsSubmit(147724,464380); break;
			case 3: amsCfg_464379.sData.iChoose = choose;amsSubmit(147724,464379); break;
			case 4: amsCfg_464382.sData.iChoose = choose;amsSubmit(147724,464382); break;
		}
	}else{
        alert("对不起, 请在选中本组兑换道具之一后, 再进行兑换!");
    }
}

// 抽奖轮播功能初始化
amsCfg_464372 = {
	'activityId' : '147724', // 模块实例号
	'contentId' : 'broadcastContent_464372', //容器ID
	'templateId' : 'broadcastTemplate_464372', //模板ID
	'showLiNum' : 9//number 轮播默认显示的条数，默认6条
};
milo.ready(function(){
	amsInit(147724,464372);
});

// 个人获奖记录初始化
amsCfg_464371 = {
	'iAMSActivityId' : '147724', // AMS活动号
	'iLotteryFlowId' : '464371', //  查询获奖轮播的流程号
	'activityId' : '199218', // 模块实例号
	'contentId' : 'getGiftContent_464371', //容器ID
	'templateId' : 'getGiftTemplate_464371', //模板ID
	'contentPageId' : 'getGiftPageContent_464371',	//分页容器ID
	'showContentId' : 'showMyGiftContent_464371' //弹出层ID
};

//147724
/////////////////////////////////////////////////////////////////////////////
///
///
/////////////////////////////////////////////////////////////////////////////
	function buytic(id){
	    need("biz.login",function(LoginManager){
	        LoginManager.checkLogin(function(){
	            ticketType=id;          
	            TGDialogS('pop4');
	        },function(){
	            LoginManager.login();
	        });
	    });
	}

  
    //查询是否绑定的配置
    amsCfg_469943={
        type : "query",
        iQueryFlowID:469943,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(147724,464375); //org
            amsSubmit(149790,469949); 

        },
        failure : function(){
            //未绑定时的扩展处理
            amsSubmit(147724,464375); //org
            amsSubmit(149790,469949); 
        }
    };

    //提交绑定的配置
    amsCfg_469942={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:469943,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(147724,464375); //org
            amsSubmit(149790,469949); 
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

    //调用，查询是否已经绑定
    milo.ready(function(){
                amsInit(149790, 469943);
            }
    );

	    //提交请求至AME
	amsCfg_469958 = {
		"iActivityId": 149790, //活动id	
		"iFlowId":    469958, //流程id
		"fFlowSubmitEnd": function(res){
			alert('你目前拥有荧光棒:' + res.sOutValue1 + '个');
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};

		// 抽奖领取主功能初始化
	amsCfg_469944 = amsCfg_469950 = amsCfg_469951 = {
		'iAMSActivityId' : '149790', // AMS活动号
		'activityId' : '211379', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			amsSubmit(149790,469949); 
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	amsCfg_469955 = {
		'iAMSActivityId' : '149790', // AMS活动号
		'activityId' : '211379', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			amsSubmit(149790,469949); 
			$(".btn_dh").eq(4).removeClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('兑换');
			$(".btn_dh").eq(5).removeClass('btn_dhs');$(".btn_dh").eq(5).find('span').text('兑换');
			$(".btn_dh").eq(6).removeClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('兑换');
			$(".btn_dh").eq(7).removeClass('btn_dhs');$(".btn_dh").eq(7).find('span').text('兑换');
			alert("重置成功!");
		}
	};

		// 抽奖领取主功能初始化
	amsCfg_469952 = amsCfg_469953 = amsCfg_469954 = amsCfg_469956 = {
		'iAMSActivityId' : '149790', // AMS活动号
		'activityId' : '211379', // 模块实例号
		'sData' : {'iChoose':0}, //传递额外参数,如果是不支持Flash的浏览器，如游戏内置浏览器，请开启xhr参数设置为true，默认为false

		'_everyRead' : true, //每次读取amsCfg_436615对象,默认是false
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			setTimeout(function(){ amsSubmit(149790,469949); },2000);
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

		//提交请求至AME
	amsCfg_469949 = {
		"iActivityId": 149790, //活动id	
		"iFlowId":    469949, //流程id
		"sNeedSubmitPopDiv":  false ,
		"fFlowSubmitEnd": function(res){
			$("#luckNum01").text('我的幸运值：'+res.sOutValue1);
			switch(res.sOutValue2){
				case '1': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('已兑换'); 
				break;
				case '2': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('已兑换');
					$(".btn_dh").eq(6).addClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('已兑换');
				break;
				case '3': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('已兑换');
					$(".btn_dh").eq(5).addClass('btn_dhs');$(".btn_dh").eq(5).find('span').text('已兑换');
					$(".btn_dh").eq(6).addClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('已兑换');
				break;
				case '4': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('已兑换');
					$(".btn_dh").eq(5).addClass('btn_dhs');$(".btn_dh").eq(5).find('span').text('已兑换');
					$(".btn_dh").eq(6).addClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('已兑换');
					$(".btn_dh").eq(7).addClass('btn_dhs');$(".btn_dh").eq(7).find('span').text('已兑换');
				break;
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};

	//重置
	function reset01(){
	    if(confirm("重置后幸运值会归0，确定要进行重置么?")){
	        amsSubmit(149790,469955);
	    }
	}

	function exchangeLuck01(m,n){
		var choose = n+1;
		if(typeof(choose)!='undefined' && choose>0){
			switch(m){
				case 1: amsCfg_469952.sData.iChoose = choose;amsSubmit(149790,469952); break;
				case 2: amsCfg_469953.sData.iChoose = choose;amsSubmit(149790,469953); break;
				case 3: amsCfg_469954.sData.iChoose = choose;amsSubmit(149790,469954); break;
				case 4: amsCfg_469956.sData.iChoose = choose;amsSubmit(149790,469956); break;
			}
		}else{
	        alert("对不起, 请在选中本组兑换道具之一后, 再进行兑换!");
	    }
	}

	// 抽奖轮播功能初始化
	amsCfg_469946 = {
		'activityId' : '149790', // 模块实例号
		'contentId' : 'broadcastContent_469946', //容器ID
		'templateId' : 'broadcastTemplate_469946', //模板ID
		'showLiNum' : 9//number 轮播默认显示的条数，默认6条
	};
	milo.ready(function(){
		amsInit(149790,469946);
	});


	// 个人获奖记录初始化
	amsCfg_469945 = {
		'iAMSActivityId' : '149790', // AMS活动号
		'iLotteryFlowId' : '469945', //  查询获奖轮播的流程号
		'activityId' : '211379', // 模块实例号
		'contentId' : 'getGiftContent_469945', //容器ID
		'templateId' : 'getGiftTemplate_469945', //模板ID
		'contentPageId' : 'getGiftPageContent_469945',	//分页容器ID
		'showContentId' : 'showMyGiftContent_469945' //弹出层ID
	};
