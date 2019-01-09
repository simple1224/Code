//绑定大区
amsCfg_511248={
    type : "query",
    iQueryFlowID:511248,
    service:"x5" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        amsSubmit(166460,511307);

    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

//提交绑定的配置
amsCfg_511247={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:511248,
    service:"x5" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        amsSubmit(166460,511307);
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};
//购买
amsCfg_511253 = {
    'iActivityId' : '166460',
    'iFlowId' : '511253',
    'sData'	: {},
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	新版webpay，已默认
                //onPaySuccess:function(){},//支付成功后回调方法
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
        autoappid.init('x5', 10293, function(final_appid) {
            //final_appid为自动判断得到的道聚城渠道号
            //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
        });
    });
});

//领奖
amsCfg_511264 = amsCfg_511265 = amsCfg_511268 = amsCfg_511269 =
    amsCfg_511270 = amsCfg_511459 = {
    'iAMSActivityId' : '166460', // AMS活动号
    'activityId' : '226460', // 模块实例号
    'sData' : {'times':'1'}, //传递额外参数,如果是不支持Flash的浏览器，如游戏内置浏览器，请开启xhr参数设置为true，默认为false
    '_everyRead' : true, //每次读取amsCfg_511263对象,默认是false
    'onBeginGetGiftEvent' : function(){
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
        amsSubmit(166460,511307);
        LotteryManager.alert(callbackObj.sMsg);
    }
};
//领奖
amsCfg_511263 = {
        'iAMSActivityId' : '166460', // AMS活动号
        'activityId' : '226460', // 模块实例号
        'sData' : {'times':'1'}, //传递额外参数,如果是不支持Flash的浏览器，如游戏内置浏览器，请开启xhr参数设置为true，默认为false
        '_everyRead' : true, //每次读取amsCfg_511263对象,默认是false
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            amsSubmit(166460,511307);
            alert("领取成功~");
        }
    };

// 抽奖轮播功能初始化
amsCfg_511266 = {
    'activityId' : '166460', // 模块实例号
    'contentId' : 'carouselContent', //容器ID
    'templateId' : 'broadcastTemplate_511266' //模板ID
};
milo.ready(function(){
    amsInit(166460,511266);
});

amsCfg_511307 = {
    "iActivityId": 166460, //活动id
    "iFlowId":    511307, //流程id
    "fFlowSubmitEnd": function(res){
        $(".num1").text(res.sOutValue1);
        $(".num2").text(res.sOutValue2);
        $(".num3").text(res.sOutValue3);
        $(".num4").text(res.sOutValue4);
    },
    "fFlowSubmitFailed":function(res){
        //失败会走到这个函数
        //条件不满足，ame返回大于0是后走到这里
        alert(res.sMsg);
    }
};
amsCfg_511308 = {
    "iActivityId": 166460, //活动id
    "iFlowId":    511308, //流程id
    "sData":{//自定义传参
    },
    "fFlowSubmitEnd": function(res){
        amsSubmit(166460,511307);
        alert("成功咯~");
    },
    "fFlowSubmitFailed":function(res){
        //失败会走到这个函数
        //条件不满足，ame返回大于0是后走到这里
        alert(res.sMsg);
    }
};
amsCfg_511314 = {
    "iActivityId": 166460, //活动id
    "iFlowId":    511314, //流程id
    "sData":{//自定义传参
    },
    "fFlowSubmitEnd": function(res){
        amsSubmit(166460,511307);
        alert("成功咯~");
    },
    "fFlowSubmitFailed":function(res){
        //失败会走到这个函数
        //条件不满足，ame返回大于0是后走到这里
        alert(res.sMsg);
    }
};

function getLottery(times) {
    amsCfg_511270.sData.times = times;
    amsSubmit(166460,511270);
}