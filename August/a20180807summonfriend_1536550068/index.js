function showMsg(msg) {
    $('#dia1 .word').text(msg);
    TGDialogS('dia1');
}

function showGift(msg) {
    $('#dia2 .word ').text(msg);
    TGDialogS('dia2');
}

//获取url参数信息
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return  encodeURIComponent(r[2]);
    }
    return null;
}

//查询是否绑定的配置
amsCfg_494210 = {
    type: "query",
    iQueryFlowID: 494210,
    service: "nfsol",
    success: function(bindedInfo) {
        //已绑定时的扩展处理
        checkinvit();
    },
    failure: function() {
        //未绑定时的扩展处理
        checkinvit();
    }
};



  amsCfg_494209={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:494210,
    service:"nfsol" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
         checkinvit();
    },
    failure : function(){
        //未绑定时的扩展处理
         checkinvit();
    }
};

//调用，查询是否已经绑定
milo.ready(function(){
            amsInit(159603, 494210);
        }
);

//邀请
amsCfg_494211 = {
    'iAMSActivityId': '159603', // AMS活动号
    'activityId': '220824', // 模块实例号
    'onBeginGetGiftEvent': function() {
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent': function(callbackObj) {// 抽奖失败事件
        return;
    },
    'onGetGiftSuccessEvent': function(callbackObj) {// 抽奖成功事件
        return;

    }
};

//领奖
amsCfg_494215 = amsCfg_494216 = amsCfg_494217 = amsCfg_494218 = amsCfg_494219 = amsCfg_494220 = amsCfg_494264 ={
    'iAMSActivityId': '159603', // AMS活动号
    'activityId': '220824', // 模块实例号
    'onBeginGetGiftEvent': function() {
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent': function(callbackObj) {// 抽奖失败事件
        alert(callbackObj.sMsg);
        return;
    },
    'onGetGiftSuccessEvent': function(callbackObj) {// 抽奖成功事件
        showGift(callbackObj.sMsg);
        return;
    }
};

//查询
amsCfg_494212 = {
    "iActivityId": 159603, //活动id   
    "iFlowId": 494212, //流程id
    'sNeedSubmitPopDiv': false,
    "fFlowSubmitEnd": function(res) {
        if (res.jData.iret == 0) {
            $('#invitnum').text(res.jData.num);
        }
        return;
    },
    "fFlowSubmitFailed": function(res) {
        return;
    }
};

function checkinvit() {
    var iFriendQQ = getQueryString('f');
    if (iFriendQQ && iFriendQQ > 10000) {
        amsCfg_494214.sData = {'iFriendQQ': iFriendQQ};
        amsSubmit(159603, 494214);
    }
}


amsCfg_494214 = {
        "iActivityId": 159603, //活动id   
        "iFlowId":    494214, //流程id
        "sData": {},
        'sNeedSubmitPopDiv': false,
        "fFlowSubmitEnd": function(res){
            if (res.jData.iret == 0) {
            if (res.jData.invit == 1) {
                showMsg("欢迎归来");
            }
        }
        if (res.jData.iret == 3) {
            alert('不能邀请自己！');
            }else if(res.jData.iret == 2){
            alert('您未登录游戏！');
         
            }else{

            }
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
           
              alert(res.sMsg);  
          
        }
    };


function makeurl(qq) {
    var url = 'https://connect.qq.com/widget/shareqq/index.html?url=http%3A%2F%2Fnfsol.qq.com%2Fcp%2Fa20180807summonfriend%2Findex.html%3Ff%3D' + qq + '&title=%E5%8F%AC%E5%94%A4%E5%A5%BD%E5%8F%8B%EF%BC%8C%E9%A2%86%E5%A5%BD%E7%A4%BC%EF%BC%81&pics=http://game.gtimg.cn/images/nfsol/cp/a20180807summonfriend/share.jpg';
    $('.a3').attr('href', url);
}

milo.addEvent(g("dologin"), "click", function() {
    need("biz.login", function(LoginManager) {
        LoginManager.init({
            needReloadPage: true
        });
        LoginManager.login();
    });
    return false;
});
milo.addEvent(g("dologout"), "click", function() {
    need("biz.login", function(LoginManager) {
        LoginManager.logout();
    });
    return false;
});
milo.ready(function() {
    need("biz.login", function(LoginManager) {
        LoginManager.checkLogin(function() {
            g("login_qq_span").innerText = LoginManager.getUserUin(); //获取QQ号
            makeurl(LoginManager.getUserUin());
            amsSubmit(159603, 494212);
        });
    });
});




    // 个人获奖记录初始化
    amsCfg_494762 = {
        'activityId' : '159603', // AMS活动号
        "flowId":"494762",  //流程号
        "moduleId":"220824",// 模块实例号
        "extParam":{"pageNo":1,"pageSize":10},
        //提交成功的回调 （必选）
        'success':function(data){
            //获取模块接口对象
            var giftModule=window['myGiftList_494762'];
            need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
                //如果第一次点击，则先显示弹出框，在渲染页面
                if ($("#tbody_494762").length==0){
                    widget.dialog({"content":$("#tpl_dialog_494762").html(),
                        width:600,
                        topOffset:-200,
                        "complete":function(){
                            giftModule.renderPanel(data);
                        }
                    });
                }else{
                    //如果是翻页的情况，直接渲染页面
                    giftModule.renderPanel(data);
                }
            });
        }

    };


    milo.ready(function(){
        need(["util.jquery","biz.login","biz.widget.base"],function($,LoginManager,widget){
            $("#button_494762").click(function(){
                amsSubmit(159603,494762);

            });

        });
    });

    