var Uid=0;
var areaId = 0;
var isGeting = 0;
var toPage = 1;
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
amsCfg_501868={
    type : "query",
    iQueryFlowID:501868,
    service:"x5" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        areaId = bindedInfo.jData.data.Farea;
        getInfo(1,0);

    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

//提交绑定的配置
amsCfg_501867={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:501868,
    service:"x5" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
        areaId = bindedInfo.jData.data.Farea;
        getInfo(1,0);
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

//查询玩家获奖信息
function getInfo(type,page){
    var cookie_key = "a20181017ych"+Uid;
    var str =  localStorage.getItem(cookie_key);
    if(str != null &&str != "" ){
        var data = JSON.parse(str);
        setData(data);
        return;
    }
    toPage = page;
    var sUrl = "//apps.game.qq.com/x5/a20181017ych/GetUserInfo.php?type="+type+"&page="+toPage+"&t="+Math.random();
    FloadJS(sUrl, getInfoSucc, Fail);

}

function getInfoSucc() {
    if ('undefined' != typeof(GetUserInfo_RES    ) && (null != GetUserInfo_RES    )) {
        if (null != GetUserInfo_RES   .ret_code && 0 == GetUserInfo_RES    .ret_code) {
            var cookie_key = "a20181017ych"+Uid;
            var str = JSON.stringify(GetUserInfo_RES .data);
            if(window.localStorage){
                localStorage.setItem(cookie_key,str);
            }
            //抽奖成功，弹出抽奖框
            setData(GetUserInfo_RES  .data);


        }
        else {
            Fail(GetUserInfo_RES    .msg);
        }
    } else {
        alert('系统繁忙，请稍后刷新页面重新尝试！');
    }

    GetUserInfo_RES     = null;
}
function Fail(errInfo)
{
    isGeting = 0;
    if('undefined' != typeof(errInfo) && null != errInfo && ""!=errInfo)
    {
        alert(errInfo);
    }else{
        alert('非常抱歉，系统繁忙，请稍后再试！');
    }
    return ;
}

//抽奖
function getLottery(){
    if(isGeting == 1){
        return;
    }
    loadingPage();
    isGeting = 1;
    var sUrl = "//apps.game.qq.com/x5/a20181017ych/GetLottery.php?areaID="+areaId+"&t="+Math.random();
    FloadJS(sUrl, getLotterySucc, Fail);

}

function getLotterySucc() {
    isGeting = 0;
    closeLoad();
    if ('undefined' != typeof(GetLottery_RES   ) && (null != GetLottery_RES   )) {
        if (null != GetLottery_RES  .ret_code && 0 == GetLottery_RES   .ret_code) {
            alert(GetLottery_RES .msg);
            getInfo(1,0);
        }
        else {
            Fail(GetLottery_RES.msg);
        }
    } else {
        alert('系统繁忙，请稍后刷新页面重新尝试！');
    }

    GetLottery_RES    = null;
}

//获奖轮播
function getRun(){
	if(typeof LotteryRun != "undefined" && LotteryRun != null){
        var t = TrimPath.parseDOMTemplate('broadcastTemplate_501980').process(LotteryRun,"BroadcastList");
        $("#carouselContent").html(t);
	}

}

function setData(data) {
    if(data == null){
        return;
    }
    var type = data.type;
    if(type == 1){
    	$('.num1').text(data.currentTurn);
    	$('.num2').text(data.coastNum);
	}
	if(type == 2){
        for (var k = 0; k < data.res.length; k++) {
            data.res[k]['sRoleArea'] = X5ServerSelect.zoneToName(data.res[k]['sRoleArea']);
        }
        var t = TrimPath.parseDOMTemplate('getGiftTemplate_491634').process(data,"MyGiftListObject");
        $("#getGiftContent_491634").html(t);
        if(data.page <= 1){
        	var next = parseInt(data.page) + 1;
            var str = '<a href="javascript:;">上一页</a><em>'+data.page+'/'+data.pageNum+'</em><a href="javascript:getInfo(2,'+next+');">下一页</a>';
		}else if(data.page >= data.pageNum){
            var prev = parseInt(data.page) - 1;
            var str = '<a href="javascript:getInfo(2,'+prev+');">上一页</a><em>'+data.page+'/'+data.pageNum+'</em><a href="javascript:;">下一页</a>';
        }else {
            var next = parseInt(data.page) + 1;
            var prev = parseInt(data.page) - 1;
            var str = '<a href="javascript:getInfo(2,'+prev+');">上一页</a><em>'+data.page+'/'+data.pageNum+'</em><a href="javascript:getInfo(2,'+next+');">下一页</a>';
		}
        $("#getGiftPageContent_491634").html(str);


        TGDialogS("showMyGiftContent_491634");
	}
}
getRun();
setInterval(function () {
    localStorage.clear();
},2000);

amsCfg_502143 = {
    "iActivityId": 162951, //活动id
    "iFlowId":    502143, //流程id
    "fFlowSubmitEnd": function(res){
        alert('您的荧光棒数目为:' + res.sOutValue1);
    },
    "fFlowSubmitFailed":function(res){
        //失败会走到这个函数
        //条件不满足，ame返回大于0是后走到这里
        alert(res.sMsg);
    }
};

function loadingPage() {
    var loadurl = location.protocol+"//ossweb-img.qq.com/images/comm/load.gif";
    need("biz.dialog",function(Dialog) {
        Dialog.show({
            sMsg: "<img src='" + loadurl + "' style=\"display:inline-block;\" /><span style='margin-left:5px;font-size:12px;display:inline-table;vertical-align:middle;color:222222;'>数据正在提交中，请勿刷新页面...</span>",
            sStyle: 'margin:0px;padding:10px 20px;border:1px solid #3399FF;background-color:#CCFFFF',
            bgcolor: '#E6F5FF',
            opacity: 70
        })
    });
}

function closeLoad() {
    need("biz.dialog",function(Dialog) {
        Dialog.hide();
    });
}
