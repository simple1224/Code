function showMsg(msg) {
    $('#dia1 .word').text(msg);
    TGDialogS('dia1');
}

function showGift(msg) {
    $('#dia2 .word ').text(msg);
    TGDialogS('dia2');
}

//��ȡurl������Ϣ
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return  encodeURIComponent(r[2]);
    }
    return null;
}

//��ѯ�Ƿ�󶨵�����
amsCfg_494210 = {
    type: "query",
    iQueryFlowID: 494210,
    service: "nfsol",
    success: function(bindedInfo) {
        //�Ѱ�ʱ����չ����
        checkinvit();
    },
    failure: function() {
        //δ��ʱ����չ����
        checkinvit();
    }
};



  amsCfg_494209={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:494210,
    service:"nfsol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
         checkinvit();
    },
    failure : function(){
        //δ��ʱ����չ����
         checkinvit();
    }
};

//���ã���ѯ�Ƿ��Ѿ���
milo.ready(function(){
            amsInit(159603, 494210);
        }
);

//����
amsCfg_494211 = {
    'iAMSActivityId': '159603', // AMS���
    'activityId': '220824', // ģ��ʵ����
    'onBeginGetGiftEvent': function() {
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent': function(callbackObj) {// �齱ʧ���¼�
        return;
    },
    'onGetGiftSuccessEvent': function(callbackObj) {// �齱�ɹ��¼�
        return;

    }
};

//�콱
amsCfg_494215 = amsCfg_494216 = amsCfg_494217 = amsCfg_494218 = amsCfg_494219 = amsCfg_494220 = amsCfg_494264 ={
    'iAMSActivityId': '159603', // AMS���
    'activityId': '220824', // ģ��ʵ����
    'onBeginGetGiftEvent': function() {
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent': function(callbackObj) {// �齱ʧ���¼�
        alert(callbackObj.sMsg);
        return;
    },
    'onGetGiftSuccessEvent': function(callbackObj) {// �齱�ɹ��¼�
        showGift(callbackObj.sMsg);
        return;
    }
};

//��ѯ
amsCfg_494212 = {
    "iActivityId": 159603, //�id   
    "iFlowId": 494212, //����id
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
        "iActivityId": 159603, //�id   
        "iFlowId":    494214, //����id
        "sData": {},
        'sNeedSubmitPopDiv': false,
        "fFlowSubmitEnd": function(res){
            if (res.jData.iret == 0) {
            if (res.jData.invit == 1) {
                showMsg("��ӭ����");
            }
        }
        if (res.jData.iret == 3) {
            alert('���������Լ���');
            }else if(res.jData.iret == 2){
            alert('��δ��¼��Ϸ��');
         
            }else{

            }
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
           
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
            g("login_qq_span").innerText = LoginManager.getUserUin(); //��ȡQQ��
            makeurl(LoginManager.getUserUin());
            amsSubmit(159603, 494212);
        });
    });
});




    // ���˻񽱼�¼��ʼ��
    amsCfg_494762 = {
        'activityId' : '159603', // AMS���
        "flowId":"494762",  //���̺�
        "moduleId":"220824",// ģ��ʵ����
        "extParam":{"pageNo":1,"pageSize":10},
        //�ύ�ɹ��Ļص� ����ѡ��
        'success':function(data){
            //��ȡģ��ӿڶ���
            var giftModule=window['myGiftList_494762'];
            need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
                //�����һ�ε����������ʾ����������Ⱦҳ��
                if ($("#tbody_494762").length==0){
                    widget.dialog({"content":$("#tpl_dialog_494762").html(),
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

    };


    milo.ready(function(){
        need(["util.jquery","biz.login","biz.widget.base"],function($,LoginManager,widget){
            $("#button_494762").click(function(){
                amsSubmit(159603,494762);

            });

        });
    });

    