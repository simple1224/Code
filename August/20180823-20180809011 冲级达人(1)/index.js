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
            g("login_qq_span").innerText= LoginManager.getUserUin();//��ȡQQ��
            selfuin=LoginManager.getUserUin();
            amsInit(157723, 489991);
        });
    });
});
 //��ѯ�Ƿ�󶨵�����
amsCfg_489991={
    type : "query",
    iQueryFlowID:489991,
    service:"nfsol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        amsSubmit(157723,490030);
    },
    failure : function(){
        //δ��ʱ����չ����
        amsInit(157723, 489990);
    }
};

//�ύ�󶨵�����
amsCfg_489990={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:489991,
    service:"nfsol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        amsSubmit(157723,490030);
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

// ���˻񽱼�¼��ʼ��
amsCfg_489993 = {
    'iAMSActivityId' : '157723', // AMS���
    'iLotteryFlowId' : '489993', //  ��ѯ���ֲ������̺�
    'activityId' : '219093', // ģ��ʵ����
    'contentId' : 'getGiftContent_489993', //����ID
    'templateId' : 'getGiftTemplate_489993', //ģ��ID
    'contentPageId' : 'getGiftPageContent_489993',  //��ҳ����ID
    'showContentId' : 'dia4' //������ID
};

//�ύ������AME
amsCfg_490030 = {
    "iActivityId": 157723, //�id   
    "iFlowId":    490030, //����id
    "fFlowSubmitEnd": function(res){
        $("#leveln").text(res.sOutValue1);
        return;
    },
    "fFlowSubmitFailed":function(res){
        //ʧ�ܻ��ߵ��������
        //���������㣬ame���ش���0�Ǻ��ߵ�����
        alert(res.sMsg);
    }
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_489992 = amsCfg_490006 = amsCfg_490007 = amsCfg_490008 = amsCfg_490009 = amsCfg_490010 = {
    'iAMSActivityId' : '157723', // AMS���
    'activityId' : '219093', // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        $("#dia2 .word2").text(callbackObj.sMsg);
        showDia('dia2');
        // alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        $("#dia1 .word1").text('��ϲ����á�'+callbackObj.sPackageName+'��');
        showDia('dia1');
    }
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_490023 = {
    'iAMSActivityId' : '157723', // AMS���
    'activityId' : '219093', // ģ��ʵ����
    'sData' : {'groupId':0,'fuin':0,'xhr':true}, 
    '_everyRead' : true, 
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        // $("#dia2 .word2").text(callbackObj.sMsg);
        // showDia('dia2');
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        $("#dia2 .word2").text('��ϲ�����ͳɹ���');
        showDia('dia2');
    }
};

function giveGift (argument) {
    if (argument==652543 || argument==652544 || argument==652545 || argument==652546 || argument==652547 || argument==652548) {
        $("#frienduin").val('');
        $(".confirm").attr("href","javascript:doGive("+argument+")");
        showDia('dia5');
    }else{
        alert('��Ǹ������������ˢ��ҳ������');
    };
}

function doGive (argument) {
    if (argument==652543 || argument==652544 || argument==652545 || argument==652546 || argument==652547 || argument==652548) {
        amsCfg_490023.sData.groupId = argument;
    }else{
        alert('��Ǹ������������ˢ��ҳ������');
        return;
    }
    var fuin = $("#frienduin").val();
    if (!milo.isQQ(fuin)) {
        alert('��Ǹ����������ȷ��QQ');
        return;
    };
    if (selfuin==fuin) {
        alert('��Ǹ�����������Լ�Ӵ��');
        return;
    };
    showDialog.hide();
    amsCfg_490023.sData.fuin = fuin;
    amsSubmit(157723,490023);
}
