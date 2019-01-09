var iAMSActivityId = 154717;
var amsGiftValue = "giftdate";
var giftID = ["20180801","20180803","20180804","20180805","20180808","20180811","20180812","20180815","20180817","20180818","20180819","20180822","20180824","20180825","20180826"];
    giftCenterData = [{
        "actionType":"giftCenterList",
    }],
    popData = [{
        "actionType":"amsGiftCenterPop"
    },{
        "actionType":"amsGetGiftSuccessPop"
    },{
        "actionType":"amsGetGiftFailPop"
    },{
        "actionType":"amsNormalPop"
    }];
//显示弹层
function amsShowPop(e){
    showDialog.show({
				id:e, //需要弹出的id，如果是弹出页面上的div，则该选项为必选
				bgcolor:"#e3e3e3",//弹出“遮罩”的颜色，格式为"#FF6600"，可选，默认为"#fff"
				opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
			});
}
//关闭弹层
function amsClosePop(){
    showDialog.hide();
}
//弹层事件
var amsPopUnit = {
    //显示抽中奖励弹层
    showGetGiftSuccPop:function(e){
        console.log(e)
        $(".amsGetGiftSuccPopTips").text(e);
        amsShowPop("amsGetGiftSuccPop");
    },
    //显示未抽中奖励弹层
    showGetGiftFailPop:function(e){
        console.log(e)
        $(".amsGetGiftFailPopTips").text(e);
        amsShowPop("amsGetGiftFailPop");
    },
    //显示通用信息提示弹层
    showNormalPop:function(e){
        console.log(e)
        amsShowPop("amsNormalPop");
        $(".amsNormalPopTips").html(e);
    }
}
//页面按钮事件
var amsBtnUnit = {
    //登录
    login:function(){
        amsInit(iAMSActivityId, amsCheckBindData["iQueryFlowID"]);
    },
    //绑定大区
    bindArea:function(){
        amsInit(iAMSActivityId, amsSendBindData["iQueryFlowID"])
    },
    //更改绑定
    changeArea:function(){
        amsInit(iAMSActivityId, amsSendBindData["iQueryFlowID"])
    },
    //查看我的礼包
    myGiftCenter:function(){
        console.log("sss")
        amsSubmit(iAMSActivityId,amsMyGiftCenterData["flowId"]);
    }
}
//页面函数
// var amsPageActionUnit = {
    
// } 
//页面DOM初始化
function pageInit(callback){
    var typeData = $("body *");
    for(var x =0; x<typeData.length;x++){
        var _this = $(typeData[x]);
        var _actiondata = _this.attr("ams-action");
        if(_actiondata){
            var tvalue = _this.attr("ams-action");
            if(tvalue=="spanNotBind"||tvalue=="spanBind"||tvalue=="area_info"||tvalue=="role_info"){
                _this.attr("id",tvalue+"_"+amsCheckBindData["iQueryFlowID"])
            }else if(_actiondata == "getPackage"){
                var packagenum = parseInt(_this.attr("ams-package"))-1;
                _this.attr({
                    "id":"getbtn"+giftID[packagenum],
                    "href":"javascript:amsGetGift("+giftID[packagenum]+")"
                });
                _this.addClass('amsGetGiftBtn');
            }else if(_actiondata == "getedPackage"){
                var packagenum = parseInt(_this.attr("ams-package"))-1;
                _this.attr("id","getedbtn"+giftID[packagenum]);
                _this.addClass('amsGetedGiftBtn');
            }else{ 
                _this.addClass(tvalue);
            }
        }
    }  
    callback();
}
//登录组件
function amsLoginInit(){
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
                g("login_qq_span").innerText= LoginManager.getUserUin();//获取QQ号
                amsBtnUnit.login();
            });
        });
    }); 
    //关闭弹层
    $(".amsClosePopBtn").click(function(){
        amsClosePop()
    })      
}
//领取礼包按钮html事件
function amsGetGift(day){    
    window[amsLotteryAction]._everyRead = true;
    if(amsGiftValue=="giftdate"){
        window[amsLotteryAction].sData = extend(window[amsLotteryAction].sData, {iDate: day});               
    }else if(amsGiftValue=="giftid"){
        window[amsLotteryAction].sData = extend(window[amsLotteryAction].sData, {gift: gift});                  
    }
    amsSubmit(iAMSActivityId,amsLotteryData["iFlowId"]);
}
//抽奖失败弹层
function amsGetGiftFail(obj){
    //$('.amsGetGiftFailPopTips').text(obj.sMsg);
    amsPopUnit.showGetGiftFailPop(obj)
    //amsShowGetGiftFailPop();
}
//抽奖成功
function amsGetGiftSuccess(obj,idata){
    amsPopUnit.showGetGiftSuccPop(obj)
    //$('.amsGetGiftSuccessPopTips').text(obj.sPackageName);
    $("#getbtn" + idata).css("display","none");
    $("#getedbtn" + idata).css("display","block");
    //amsShowGetGiftSuccessPop();
}
//显示已领取按钮
function amsGetedGiftShow(obj){
    $("#getbtn" + obj).hide();
    $("#getedbtn" + obj).css("display","block");
}
//查询是否绑定的配置
var amsCheckBindData = {
        "iQueryFlowID":482358,
        "service":"nfsol"
    },
    amsCheckBindAction = "amsCfg_"+amsCheckBindData["iQueryFlowID"];
window[amsCheckBindAction] = {
    type : "query",
    iQueryFlowID:amsCheckBindData["iQueryFlowID"],  
    service:amsCheckBindData["service"],
    success : function(bindedInfo){
        //已绑定时的扩展处理
        amsSubmit(iAMSActivityId,amsGiftStatusData["iLotteryFlowId"])
    },
    failure : function(){
        //未绑定时的扩展处理
    }
}

//提交绑定的配置
var amsSendBindData = {
        "iQueryFlowID":482357,
        "service":"nfsol"
    },
    amsSendBindAction = "amsCfg_"+amsSendBindData["iQueryFlowID"];
window[amsSendBindAction] = {
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:amsCheckBindAction["iQueryFlowID"],
    service:amsSendBindData["service"],
    success : function(bindedInfo){
        //已绑定时的扩展处理
        alert('绑定成功！');
        amsInit(iAMSActivityId, amsCheckBindData["iQueryFlowID"]);
        //amsSubmit(iAMSActivityId,amsGiftStatusData["iLotteryFlowId"])
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

// 抽奖领取主功能初始化
var amsLotteryData = {
        "iFlowId":482359,
        "activityId":216166
    },
    amsLotteryAction = "amsCfg_"+amsLotteryData["iFlowId"];
window[amsLotteryAction] = {
    'iAMSActivityId' : iAMSActivityId, // AMS活动号
    'activityId' : amsLotteryData["activityId"], // 模块实例号
    'onBeginGetGiftEvent' : function(){
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
        amsGetGiftFail(callbackObj.sMsg);  
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件   
        var idate = this.sData.iDate;
        amsGetGiftSuccess(callbackObj.sPackageName,idate)
        return;  
    }
}

//个人获奖记录初始化，用于查询用户礼包状态，设置礼包领取按钮状态
var amsGiftStatusData = {
        "iLotteryFlowId":482360,
        "activityId":"216166"
    },
    amsGiftStatusAction = "amsCfg_"+amsGiftStatusData["iLotteryFlowId"];
window[amsGiftStatusAction] = {
    'iAMSActivityId' : iAMSActivityId, // AMS活动号
    'iLotteryFlowId' : amsGiftStatusData["iLotteryFlowId"], //  查询获奖轮播的流程号
    'activityId' : amsGiftStatusData["activityId"], // 模块实例号
    'contentId' : 'getGiftContent_'+amsGiftStatusData["iLotteryFlowId"], //容器ID
    'templateId' : 'getGiftTemplate_'+amsGiftStatusData["iLotteryFlowId"], //模板ID
    'contentPageId' : 'getGiftPageContent_'+amsGiftStatusData["iLotteryFlowId"],  //分页容器ID
    'showContentId' : 'showMyGiftContent_'+amsGiftStatusData["iLotteryFlowId"], //弹出层ID
    "sNeedSubmitPopDiv": false, // 是否开启loading层
    'pageSize': 30, //默认是10条,
    'isForce': true, //false 默认前端有缓存记录，如果需要每次都去后台查询，则改为true,
    'getData' : function(data){
        $(".amsGetGiftBtn").show();
        $(".amsGetedGiftBtn").hide();
        for (var i = 0; i < data.length; i++) {
            if(amsGiftValue=="giftdate"){
                if (data[i].sExtend3) {
                    amsGetedGiftShow(data[i].sExtend3)
                }                
            }else if(amsGiftValue=="giftid"){
                if (data[i].iPackageGroupId) {
                    amsGetedGiftShow(data[i].iPackageGroupId)
                }                  
            }
        }
    }   
}

// 查看获奖记录
var amsMyGiftCenterData = {
        "flowId":482361,
        "moduleId":"216166"
    },
    amsMyGiftCenterAction = "amsCfg_"+amsMyGiftCenterData["flowId"];
window[amsMyGiftCenterAction] = {
    'activityId' : iAMSActivityId, // AMS活动号
    "flowId":amsMyGiftCenterData["flowId"],  //流程号
    "moduleId":amsMyGiftCenterData["moduleId"],// 模块实例号
    "extParam":{"pageNo":1,"pageSize":10},
    //提交成功的回调 （必选）
    'success':function(data){
        //获取模块接口对象
        var giftModule=window['myGiftList_'+amsMyGiftCenterData["flowId"]];
        need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
            //如果第一次点击，则先显示弹出框，在渲染页面
            if ($("#tbody_"+amsMyGiftCenterData["flowId"]).length==0){
                widget.dialog({"content":$("#tpl_dialog_"+amsMyGiftCenterData["flowId"]).html(),
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
}




//页面初始化
pageInit(amsLoginInit);