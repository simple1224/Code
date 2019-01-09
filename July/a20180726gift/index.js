//查询是否绑定的配置
    amsCfg_455460={
        type : "query",
        iQueryFlowID:455460,
        service:"nz" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理

        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

//提交绑定的配置
amsCfg_455459={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:455460,
    service:"nz" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};
    
    amsCfg_455461 = {
        'iAMSActivityId':'144235',
        'iFlowId':'455461',
        'activityId':'144235',
        'delay':2000,
        'pType':"0,请选择问题类型,1,game-不能参与活动,2,game-礼包不能领取,3,game-活动时间有误,4,game-页面文字有误,5,game-其他问题"
    };
    milo.ready(function(){
        amsInit(144235,455461);
    });

    // 抽奖领取主功能初始化
    amsCfg_455462 = amsCfg_455826 = amsCfg_455831 = amsCfg_455832 = {
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
amsCfg_455463 = {
    'iAMSActivityId' : '144235', // AMS活动号
    'iLotteryFlowId' : '455463', //  查询获奖轮播的流程号
    'activityId' : '205915', // 模块实例号
    'contentId' : 'getGiftContent_455463', //容器ID
    'templateId' : 'getGiftTemplate_455463', //模板ID
    'contentPageId' : 'getGiftPageContent_455463',  //分页容器ID
    'showContentId' : 'showMyGiftContent_455463' //弹出层ID
};