var Uid=0;
var area = 0;
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


//��ѯ�Ƿ�󶨵�����
amsCfg_501868={
    type : "query",
    iQueryFlowID:501868,
    service:"x5" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        area = bindedInfo.jData.data.Farea;
        getInfo(1,0);

    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

//�ύ�󶨵�����
amsCfg_501867={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:501868,
    service:"x5" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        area = bindedInfo.jData.data.Farea;
        getInfo(1,0);
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

//��ѯ��һ���Ϣ
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
            //�齱�ɹ��������齱��
            setData(GetUserInfo_RES  .data);


        }
        else {
            Fail(GetUserInfo_RES    .msg);
        }
    } else {
        alert('ϵͳ��æ�����Ժ�ˢ��ҳ�����³��ԣ�');
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
        alert('�ǳ���Ǹ��ϵͳ��æ�����Ժ����ԣ�');
    }
    return ;
}

//�齱
function getLottery(){
    if(isGeting == 1){
        return;
    }
    loadingPage();
    isGeting = 1;
    var sUrl = "//apps.game.qq.com/x5/a20181017ych/GetLottery.php?areaID="+area+"&t="+Math.random();
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
        alert('ϵͳ��æ�����Ժ�ˢ��ҳ�����³��ԣ�');
    }

    GetLottery_RES    = null;
}

//���ֲ�
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
            var str = '<a href="javascript:;">��һҳ</a><em>'+data.page+'/'+data.pageNum+'</em><a href="javascript:getInfo(2,'+next+');">��һҳ</a>';
		}else if(data.page >= data.pageNum){
            var prev = parseInt(data.page) - 1;
            var str = '<a href="javascript:getInfo(2,'+prev+');">��һҳ</a><em>'+data.page+'/'+data.pageNum+'</em><a href="javascript:;">��һҳ</a>';
        }else {
            var next = parseInt(data.page) + 1;
            var prev = parseInt(data.page) - 1;
            var str = '<a href="javascript:getInfo(2,'+prev+');">��һҳ</a><em>'+data.page+'/'+data.pageNum+'</em><a href="javascript:getInfo(2,'+next+');">��һҳ</a>';
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
    "iActivityId": 162951, //�id
    "iFlowId":    502143, //����id
    "fFlowSubmitEnd": function(res){
        alert('����ӫ�����ĿΪ:' + res.sOutValue1);
    },
    "fFlowSubmitFailed":function(res){
        //ʧ�ܻ��ߵ��������
        //���������㣬ame���ش���0�Ǻ��ߵ�����
        alert(res.sMsg);
    }
};

function loadingPage() {
    var loadurl = location.protocol+"//ossweb-img.qq.com/images/comm/load.gif";
    need("biz.dialog",function(Dialog) {
        Dialog.show({
            sMsg: "<img src='" + loadurl + "' style=\"display:inline-block;\" /><span style='margin-left:5px;font-size:12px;display:inline-table;vertical-align:middle;color:222222;'>���������ύ�У�����ˢ��ҳ��...</span>",
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
//����
amsCfg_504828 = {
    'iActivityId' : '162951',
    'iFlowId' : '504828',
    'sData'	: {"num":"1"},
    "_everyRead" : true,
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	�°�webpay����Ĭ��
                //onPaySuccess:function(){},//֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
            };
            DaojuBuy.pay(res.jData,option);
        });
    },
    'fFlowSubmitFailed':function(res) {
        alert(res.sMsg);
    }
};
amsCfg_504835 = {
    'iActivityId' : '162951',
    'iFlowId' : '504835',
    'sData'	: {"num":"1"},
    "_everyRead" : true,
    'fFlowSubmitEnd': function(res) {
        need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
            var option = {
                //apptype:4	�°�webpay����Ĭ��
                //onPaySuccess:function(){},//֧���ɹ���ص�����
                //onPayClose:function(){}//�ر�֧��ҳ��ص�����
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
        autoappid.init('x5', 9997, function(final_appid) {
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
        });
    });
});

function buy() {
    if(isNaN($('#TicketNum').val()))
    {
        alert('����Ʊ������');
        return;
    }
    if($('#TicketNum').val()<0){
        alert('����Ʊ������');
        return;
    }
    if($('#TicketNum').val()-parseInt($('#TicketNum').val())!=0){
        alert('����Ʊ������');
        return;
    }
    if($('#TicketNum').val()>100)
    {
        alert('һ������๺Ʊ100�ţ�');
        return;
    }
    var num = $('#TicketNum').val();
    if(ticketType == 1086){
        amsCfg_504828.sData.num = num;
        amsSubmit(162951,504828);
    }
    if(ticketType == 1087){
        amsCfg_504835.sData.num = num;
        amsSubmit(162951,504835);
    }
}