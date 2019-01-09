var selfuin=0;
milo.addEvent(g("dologin"), "click", function() {
    need("biz.login-min",function(LoginManager){
    LoginManager.init({
            needReloadPage:true
        });
        LoginManager.login();
    });
    return false;
});
milo.addEvent(g("dologout"), "click", function() {
    need("biz.login-min",function(LoginManager){
        LoginManager.logout();
    });
    return false;
});
milo.ready(function() {
    need("biz.login-min",function(LoginManager){
        LoginManager.checkLogin(function(){
            g("login_qq_span").innerText= LoginManager.getUserUin();//获取QQ号
            selfuin=LoginManager.getUserUin();
            amsInit(157723, 489991);
        });
    });
});
 //查询是否绑定的配置
amsCfg_489991={
    type : "query",
    iQueryFlowID:489991,
    service:"nfsol" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        amsSubmit(157723,490030);
    },
    failure : function(){
        //未绑定时的扩展处理
        amsInit(157723, 489990);
    }
};

//提交绑定的配置
amsCfg_489990={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:489991,
    service:"nfsol" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        amsSubmit(157723,490030);
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

// 个人获奖记录初始化
amsCfg_489993 = {
    'iAMSActivityId' : '157723', // AMS活动号
    'iLotteryFlowId' : '489993', //  查询获奖轮播的流程号
    'activityId' : '219093', // 模块实例号
    'contentId' : 'getGiftContent_489993', //容器ID
    'templateId' : 'getGiftTemplate_489993', //模板ID
    'contentPageId' : 'getGiftPageContent_489993',  //分页容器ID
    'showContentId' : 'dia4' //弹出层ID
};

//提交请求至AME
amsCfg_490030 = {
    "iActivityId": 157723, //活动id   
    "iFlowId":    490030, //流程id
    "fFlowSubmitEnd": function(res){
        $("#leveln").text(res.sOutValue1);
        return;
    },
    "fFlowSubmitFailed":function(res){
        //失败会走到这个函数
        //条件不满足，ame返回大于0是后走到这里
        alert(res.sMsg);
    }
};

// 抽奖领取主功能初始化
amsCfg_489992 = amsCfg_490006 = amsCfg_490007 = amsCfg_490008 = amsCfg_490009 = amsCfg_490010 = {
    'iAMSActivityId' : '157723', // AMS活动号
    'activityId' : '219093', // 模块实例号
    'onBeginGetGiftEvent' : function(){
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
        $("#dia2 .word2").text(callbackObj.sMsg);
        showDia('dia2');
        // alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
        $("#dia1 .word1").text('恭喜您获得“'+callbackObj.sPackageName+'”');
        showDia('dia1');
    }
};

// 抽奖领取主功能初始化
amsCfg_490023 = {
    'iAMSActivityId' : '157723', // AMS活动号
    'activityId' : '219093', // 模块实例号
    'sData' : {'groupId':0,'fuin':0,'xhr':true}, 
    '_everyRead' : true, 
    'onBeginGetGiftEvent' : function(){
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
        // $("#dia2 .word2").text(callbackObj.sMsg);
        // showDia('dia2');
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
        $("#dia2 .word2").text('恭喜您赠送成功！');
        showDia('dia2');
    }
};

function giveGift (argument) {
    if (argument==652543 || argument==652544 || argument==652545 || argument==652546 || argument==652547 || argument==652548) {
        $("#frienduin").val('');
        $(".confirm").attr("href","javascript:doGive("+argument+")");
        showDia('dia5');
    }else{
        alert('抱歉，参数错误，请刷新页面再试');
    };
}

function doGive (argument) {
    if (argument==652543 || argument==652544 || argument==652545 || argument==652546 || argument==652547 || argument==652548) {
        amsCfg_490023.sData.groupId = argument;
    }else{
        alert('抱歉，参数错误，请刷新页面再试');
        return;
    }
    var fuin = $("#frienduin").val();
    if (!milo.isQQ(fuin)) {
        alert('抱歉，请输入正确的QQ');
        return;
    };
    if (selfuin==fuin) {
        alert('抱歉，不能赠送自己哟！');
        return;
    };
    showDialog.hide();
    amsCfg_490023.sData.fuin = fuin;
    amsSubmit(157723,490023);
}
