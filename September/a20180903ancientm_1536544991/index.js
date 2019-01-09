    //查询是否绑定的配置
    amsCfg_492152={
        type : "query",
        iQueryFlowID:492152,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            //amsSubmit(158725,492158);
            amsSubmit(158725,492153)

        },
        failure : function(){
            //未绑定时的扩展处理
            amsSubmit(158725,492158);
        }
    };

    //提交绑定的配置
    amsCfg_492151={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:492152,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            //amsSubmit(158725,492158);
            amsSubmit(158725,492153)
        },
        failure : function(){
            //未绑定时的扩展处理
            amsSubmit(158725,492158);
        }
    };


    //调用，查询是否已经绑定
   // milo.ready(function(){
   //             amsInit(158725, 492152);
   //         }
   // );
   
    // 抽奖领取主功能初始化
    
    amsCfg_492274 = {
        'iAMSActivityId' : '158725', // AMS活动号
        'activityId' : '219785', // 模块实例号
        'sData' : {'times':'1'}, 
        '_everyRead' : true,
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
            if(packageLen && packageLen.length > 1){
                
                //LotteryManager.alert(callbackObj.sMsg);
                alert(callbackObj.sMsg);
                amsSubmit(158725,492158);
                return;
            }
            alert(callbackObj.sMsg);
            amsSubmit(158725,492158);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    function myreg(strs){
        var reg = RegExp(/:/);
        if(strs.match(reg)){
            return true;
        }else{
            return false;
        }
    }
    

    function get(times) {
        if(times != 1 && times != 10){
            return;
        }
        amsCfg_492274.sData.times = times;
        amsSubmit(158725,492274);
    }

    // 抽奖领取主功能初始化
    amsCfg_492276 = amsCfg_492499 = amsCfg_492511 = amsCfg_492513 = {
        'iAMSActivityId' : '158725', // AMS活动号
        'activityId' : '219785', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            amsSubmit(158725,492158);
            alert(callbackObj.sMsg);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // 抽奖领取主功能初始化
    amsCfg_492160 = amsCfg_492272 = amsCfg_492273 = {
        'iAMSActivityId' : '158725', // AMS活动号
        'activityId' : '219785', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            amsSubmit(158725,492158);
            alert(callbackObj.sMsg);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // 抽奖轮播功能初始化
    amsCfg_492155 = {
        'activityId' : '158725', // 模块实例号
        'contentId' : 'broadcastContent_492155', //容器ID
        'templateId' : 'broadcastTemplate_492155', //模板ID
        'showLiNum' : 10
    };
    milo.ready(function(){
        amsInit(158725,492155);
    });


    //提交请求至AME
    amsCfg_492158 = {
        "iActivityId": 158725, //活动id   
        "iFlowId":    492158, //流程id
        "sNeedSubmitPopDiv":  true , // 是否开启loading层
        "fFlowSubmitEnd": function(res){
            //alert('返回数据为:' + res);
            var temp01 = parseInt(res.sOutValue1);
            var temp02 = parseInt(res.sOutValue2);
            $("#yinfu").text(temp01);
            $("#yuepu").text(temp02);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };


amsCfg_492153 = {
    'iAMSActivityId' : '158725', // AMS活动号
    'activityId' : '219785', // 模块实例号
    'onBeginGetGiftEvent' : function(){
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
        //alert(callbackObj.sMsg);
        amsSubmit(158725,492158);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
        amsSubmit(158725,492158);
        //LotteryManager.alert(callbackObj.sMsg);
    }
};