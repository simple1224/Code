//��ѯ�Ƿ�󶨵�����
    amsCfg_455460={
        type : "query",
        iQueryFlowID:455460,
        service:"nz" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����

        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

//�ύ�󶨵�����
amsCfg_455459={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:455460,
    service:"nz" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};
    
    amsCfg_455461 = {
        'iAMSActivityId':'144235',
        'iFlowId':'455461',
        'activityId':'144235',
        'delay':2000,
        'pType':"0,��ѡ����������,1,game-���ܲ���,2,game-���������ȡ,3,game-�ʱ������,4,game-ҳ����������,5,game-��������"
    };
    milo.ready(function(){
        amsInit(144235,455461);
    });

    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_455462 = amsCfg_455826 = amsCfg_455831 = amsCfg_455832 = {
        'iAMSActivityId' : '144235', // AMS���
        'activityId' : '205915', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            LotteryManager.alert(callbackObj.sMsg);
        }
    };

            
    // ���˻񽱼�¼��ʼ��
amsCfg_455463 = {
    'iAMSActivityId' : '144235', // AMS���
    'iLotteryFlowId' : '455463', //  ��ѯ���ֲ������̺�
    'activityId' : '205915', // ģ��ʵ����
    'contentId' : 'getGiftContent_455463', //����ID
    'templateId' : 'getGiftTemplate_455463', //ģ��ID
    'contentPageId' : 'getGiftPageContent_455463',  //��ҳ����ID
    'showContentId' : 'showMyGiftContent_455463' //������ID
};