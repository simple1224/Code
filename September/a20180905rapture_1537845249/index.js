 //查询是否绑定的配置
    amsCfg_495900={
        type : "query",
        iQueryFlowID:495900,
        service:"nz" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理

        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

    //提交绑定的配置
    amsCfg_495899={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:495900,
        service:"nz" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

     // 抽奖领取主功能初始化
    amsCfg_495902 = amsCfg_496230 = amsCfg_496232 = amsCfg_496233 = amsCfg_496236 = amsCfg_496248 = amsCfg_496249 = amsCfg_496250 = amsCfg_496304 = amsCfg_496305 = {
        'iAMSActivityId' : '160293', // AMS活动号
        'activityId' : '221479', // 模块实例号
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
amsCfg_495903 = {
    'iAMSActivityId' : '160293', // AMS活动号
    'iLotteryFlowId' : '495903', //  查询获奖轮播的流程号
    'activityId' : '221479', // 模块实例号
    'contentId' : 'getGiftContent_495903', //容器ID
    'templateId' : 'getGiftTemplate_495903', //模板ID
    'contentPageId' : 'getGiftPageContent_495903',  //分页容器ID
    'showContentId' : 'showMyGiftContent_495903' //弹出层ID
};