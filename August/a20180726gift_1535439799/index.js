//查询是否绑定的配置
amsCfg_489955={
	type : "query",
	iQueryFlowID:489955,
	service:"nz" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理

	},
	failure : function(){
		//未绑定时的扩展处理
	}
};

//提交绑定的配置
amsCfg_489954={
	type : "comit",
	needPopupRole:true,//是否弹默认角色框选角色
	roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
	iQueryFlowID:489955,
	service:"nz" ,
	success : function(bindedInfo){
		//已绑定时的扩展处理
	},
	failure : function(){
		//未绑定时的扩展处理
	}
};
    
    // 抽奖领取主功能初始化
    amsCfg_489957 = amsCfg_489960 = amsCfg_489961 = amsCfg_489962 = {
        'iAMSActivityId' : '144235', // AMS活动号
        'activityId' : '205915', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            LotteryManager.alert(callbackObj.sMsg);
        }
    };

            
// 个人获奖记录初始化
amsCfg_489958 = {
	'iAMSActivityId' : '157703', // AMS活动号
	'iLotteryFlowId' : '489958', //  查询获奖轮播的流程号
	'activityId' : '219066', // 模块实例号
	'contentId' : 'getGiftContent_489958', //容器ID
	'templateId' : 'getGiftTemplate_489958', //模板ID
	'contentPageId' : 'getGiftPageContent_489958',	//分页容器ID
	'showContentId' : 'showMyGiftContent_489958' //弹出层ID
};