//�󶨴���
amsCfg_511248={
    type : "query",
    iQueryFlowID:511248,
    service:"x5" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        amsSubmit(166460,511307);

    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

//�ύ�󶨵�����
amsCfg_511247={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:511248,
    service:"x5" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        amsSubmit(166460,511307);
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};
//����
amsCfg_511253 = {
    'iActivityId' : '166460',
    'iFlowId' : '511253',
    'sData'	: {},
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
        autoappid.init('x5', 10293, function(final_appid) {
            //final_appidΪ�Զ��жϵõ��ĵ��۳�������
            //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
        });
    });
});

//�콱
amsCfg_511264 = amsCfg_511265 = amsCfg_511268 = amsCfg_511269 =
    amsCfg_511270 = amsCfg_511459 = {
    'iAMSActivityId' : '166460', // AMS���
    'activityId' : '226460', // ģ��ʵ����
    'sData' : {'times':'1'}, //���ݶ������,����ǲ�֧��Flash�������������Ϸ������������뿪��xhr��������Ϊtrue��Ĭ��Ϊfalse
    '_everyRead' : true, //ÿ�ζ�ȡamsCfg_511263����,Ĭ����false
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        amsSubmit(166460,511307);
        LotteryManager.alert(callbackObj.sMsg);
    }
};
//�콱
amsCfg_511263 = {
        'iAMSActivityId' : '166460', // AMS���
        'activityId' : '226460', // ģ��ʵ����
        'sData' : {'times':'1'}, //���ݶ������,����ǲ�֧��Flash�������������Ϸ������������뿪��xhr��������Ϊtrue��Ĭ��Ϊfalse
        '_everyRead' : true, //ÿ�ζ�ȡamsCfg_511263����,Ĭ����false
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            amsSubmit(166460,511307);
            alert("��ȡ�ɹ�~");
        }
    };

// �齱�ֲ����ܳ�ʼ��
amsCfg_511266 = {
    'activityId' : '166460', // ģ��ʵ����
    'contentId' : 'carouselContent', //����ID
    'templateId' : 'broadcastTemplate_511266' //ģ��ID
};
milo.ready(function(){
    amsInit(166460,511266);
});

amsCfg_511307 = {
    "iActivityId": 166460, //�id
    "iFlowId":    511307, //����id
    "fFlowSubmitEnd": function(res){
        $(".num1").text(res.sOutValue1);
        $(".num2").text(res.sOutValue2);
        $(".num3").text(res.sOutValue3);
        $(".num4").text(res.sOutValue4);
    },
    "fFlowSubmitFailed":function(res){
        //ʧ�ܻ��ߵ��������
        //���������㣬ame���ش���0�Ǻ��ߵ�����
        alert(res.sMsg);
    }
};
amsCfg_511308 = {
    "iActivityId": 166460, //�id
    "iFlowId":    511308, //����id
    "sData":{//�Զ��崫��
    },
    "fFlowSubmitEnd": function(res){
        amsSubmit(166460,511307);
        alert("�ɹ���~");
    },
    "fFlowSubmitFailed":function(res){
        //ʧ�ܻ��ߵ��������
        //���������㣬ame���ش���0�Ǻ��ߵ�����
        alert(res.sMsg);
    }
};
amsCfg_511314 = {
    "iActivityId": 166460, //�id
    "iFlowId":    511314, //����id
    "sData":{//�Զ��崫��
    },
    "fFlowSubmitEnd": function(res){
        amsSubmit(166460,511307);
        alert("�ɹ���~");
    },
    "fFlowSubmitFailed":function(res){
        //ʧ�ܻ��ߵ��������
        //���������㣬ame���ش���0�Ǻ��ߵ�����
        alert(res.sMsg);
    }
};

function getLottery(times) {
    amsCfg_511270.sData.times = times;
    amsSubmit(166460,511270);
}