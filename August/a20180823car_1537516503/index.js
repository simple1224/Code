var iAMSActivityId = 158335;
var amsGiftValue = "giftdate";
var giftID = ["20180829","20180831","20180901","20180902","20180905","20180907","20180908","20180909","20180912","20180914","20180915","20180916","20180919","20180921","20180922","20180923",
              "20180926","20180928","20180929","20180930","20181003","201810005","20181006","20181007"];
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
//��ʾ����
function amsShowPop(e){
    showDialog.show({
				id:e, //��Ҫ������id������ǵ���ҳ���ϵ�div�����ѡ��Ϊ��ѡ
				bgcolor:"#e3e3e3",//���������֡�����ɫ����ʽΪ"#FF6600"����ѡ��Ĭ��Ϊ"#fff"
				opacity:50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
			});
}
//�رյ���
function amsClosePop(){
    showDialog.hide();
}
//�����¼�
var amsPopUnit = {
    //��ʾ���н�������
    showGetGiftSuccPop:function(e){
        console.log(e)
        $(".amsGetGiftSuccPopTips").text(e);
        amsShowPop("amsGetGiftSuccPop");
    },
    //��ʾδ���н�������
    showGetGiftFailPop:function(e){
        console.log(e)
        $(".amsGetGiftFailPopTips").text(e);
        amsShowPop("amsGetGiftFailPop");
    },
    //��ʾͨ����Ϣ��ʾ����
    showNormalPop:function(e){
        console.log(e)
        amsShowPop("amsNormalPop");
        $(".amsNormalPopTips").html(e);
    }
}
//ҳ�水ť�¼�
var amsBtnUnit = {
    //��¼
    login:function(){
        amsInit(iAMSActivityId, amsCheckBindData["iQueryFlowID"]);
    },
    //�󶨴���
    bindArea:function(){
        amsInit(iAMSActivityId, amsSendBindData["iQueryFlowID"])
    },
    //���İ�
    changeArea:function(){
        amsInit(iAMSActivityId, amsSendBindData["iQueryFlowID"])
    },
    //�鿴�ҵ����
    myGiftCenter:function(){
        console.log("sss")
        amsSubmit(iAMSActivityId,amsMyGiftCenterData["flowId"]);
    }
}
//ҳ�溯��
// var amsPageActionUnit = {
    
// } 
//ҳ��DOM��ʼ��
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
//��¼���
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
                g("login_qq_span").innerText= LoginManager.getUserUin();//��ȡQQ��
                amsBtnUnit.login();
            });
        });
    }); 
    //�رյ���
    $(".amsClosePopBtn").click(function(){
        amsClosePop()
    })      
}
//��ȡ�����ťhtml�¼�
function amsGetGift(day){    
    window[amsLotteryAction]._everyRead = true;
    if(amsGiftValue=="giftdate"){
        window[amsLotteryAction].sData = extend(window[amsLotteryAction].sData, {iDate: day});               
    }else if(amsGiftValue=="giftid"){
        window[amsLotteryAction].sData = extend(window[amsLotteryAction].sData, {gift: gift});                  
    }
    amsSubmit(iAMSActivityId,amsLotteryData["iFlowId"]);
}
//�齱ʧ�ܵ���
function amsGetGiftFail(obj){
    //$('.amsGetGiftFailPopTips').text(obj.sMsg);
    amsPopUnit.showGetGiftFailPop(obj)
    //amsShowGetGiftFailPop();
}
//�齱�ɹ�
function amsGetGiftSuccess(obj,idata){
    amsPopUnit.showGetGiftSuccPop(obj)
    //$('.amsGetGiftSuccessPopTips').text(obj.sPackageName);
    $("#getbtn" + idata).css("display","none");
    $("#getedbtn" + idata).css("display","block");
    //amsShowGetGiftSuccessPop();
}
//��ʾ����ȡ��ť
function amsGetedGiftShow(obj){
    $("#getbtn" + obj).hide();
    $("#getedbtn" + obj).css("display","block");
}
//��ѯ�Ƿ�󶨵�����
var amsCheckBindData = {
        "iQueryFlowID":491305,
        "service":"nfsol"
    },
    amsCheckBindAction = "amsCfg_"+amsCheckBindData["iQueryFlowID"];
window[amsCheckBindAction] = {
    type : "query",
    iQueryFlowID:amsCheckBindData["iQueryFlowID"],  
    service:amsCheckBindData["service"],
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        amsSubmit(iAMSActivityId,amsGiftStatusData["iLotteryFlowId"])
    },
    failure : function(){
        //δ��ʱ����չ����
    }
}

//�ύ�󶨵�����
var amsSendBindData = {
        "iQueryFlowID":491304,
        "service":"nfsol"
    },
    amsSendBindAction = "amsCfg_"+amsSendBindData["iQueryFlowID"];
window[amsSendBindAction] = {
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:amsCheckBindAction["iQueryFlowID"],
    service:amsSendBindData["service"],
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        alert('�󶨳ɹ���');
        amsInit(iAMSActivityId, amsCheckBindData["iQueryFlowID"]);
        //amsSubmit(iAMSActivityId,amsGiftStatusData["iLotteryFlowId"])
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

// �齱��ȡ�����ܳ�ʼ��
var amsLotteryData = {
        "iFlowId":491306,
        "activityId":219680
    },
    amsLotteryAction = "amsCfg_"+amsLotteryData["iFlowId"];
window[amsLotteryAction] = {
    'iAMSActivityId' : iAMSActivityId, // AMS���
    'activityId' : amsLotteryData["activityId"], // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        amsGetGiftFail(callbackObj.sMsg);  
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�   
        var idate = this.sData.iDate;
        amsGetGiftSuccess(callbackObj.sPackageName,idate)
        return;  
    }
}

//���˻񽱼�¼��ʼ�������ڲ�ѯ�û����״̬�����������ȡ��ť״̬
var amsGiftStatusData = {
        "iLotteryFlowId":491307,
        "activityId":"219680"
    },
    amsGiftStatusAction = "amsCfg_"+amsGiftStatusData["iLotteryFlowId"];
window[amsGiftStatusAction] = {
    'iAMSActivityId' : iAMSActivityId, // AMS���
    'iLotteryFlowId' : amsGiftStatusData["iLotteryFlowId"], //  ��ѯ���ֲ������̺�
    'activityId' : amsGiftStatusData["activityId"], // ģ��ʵ����
    'contentId' : 'getGiftContent_'+amsGiftStatusData["iLotteryFlowId"], //����ID
    'templateId' : 'getGiftTemplate_'+amsGiftStatusData["iLotteryFlowId"], //ģ��ID
    'contentPageId' : 'getGiftPageContent_'+amsGiftStatusData["iLotteryFlowId"],  //��ҳ����ID
    'showContentId' : 'showMyGiftContent_'+amsGiftStatusData["iLotteryFlowId"], //������ID
    "sNeedSubmitPopDiv": false, // �Ƿ���loading��
    'pageSize': 30, //Ĭ����10��,
    'isForce': true, //false Ĭ��ǰ���л����¼�������Ҫÿ�ζ�ȥ��̨��ѯ�����Ϊtrue,
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

// �鿴�񽱼�¼
var amsMyGiftCenterData = {
        "flowId":491308,
        "moduleId":"219680"
    },
    amsMyGiftCenterAction = "amsCfg_"+amsMyGiftCenterData["flowId"];
window[amsMyGiftCenterAction] = {
    'activityId' : iAMSActivityId, // AMS���
    "flowId":amsMyGiftCenterData["flowId"],  //���̺�
    "moduleId":amsMyGiftCenterData["moduleId"],// ģ��ʵ����
    "extParam":{"pageNo":1,"pageSize":10},
    //�ύ�ɹ��Ļص� ����ѡ��
    'success':function(data){
        //��ȡģ��ӿڶ���
        var giftModule=window['myGiftList_'+amsMyGiftCenterData["flowId"]];
        need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
            //�����һ�ε����������ʾ����������Ⱦҳ��
            if ($("#tbody_"+amsMyGiftCenterData["flowId"]).length==0){
                widget.dialog({"content":$("#tpl_dialog_"+amsMyGiftCenterData["flowId"]).html(),
                    width:600,
                    topOffset:-200,
                    "complete":function(){
                        giftModule.renderPanel(data);
                    }
                });
            }else{
                //����Ƿ�ҳ�������ֱ����Ⱦҳ��
                giftModule.renderPanel(data);
            }
        });
    }
}




//ҳ���ʼ��
pageInit(amsLoginInit);