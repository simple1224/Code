 //��ѯ�Ƿ�󶨵�����
    amsCfg_495900={
        type : "query",
        iQueryFlowID:495900,
        service:"nz" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����

        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    //�ύ�󶨵�����
    amsCfg_495899={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:495900,
        service:"nz" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

     // �齱��ȡ�����ܳ�ʼ��
    amsCfg_495902 = amsCfg_496230 = amsCfg_496232 = amsCfg_496233 = amsCfg_496236 = amsCfg_496248 = amsCfg_496249 = amsCfg_496250 = amsCfg_496304 = amsCfg_496305 = {
        'iAMSActivityId' : '160293', // AMS���
        'activityId' : '221479', // ģ��ʵ����
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
amsCfg_495903 = {
    'iAMSActivityId' : '160293', // AMS���
    'iLotteryFlowId' : '495903', //  ��ѯ���ֲ������̺�
    'activityId' : '221479', // ģ��ʵ����
    'contentId' : 'getGiftContent_495903', //����ID
    'templateId' : 'getGiftTemplate_495903', //ģ��ID
    'contentPageId' : 'getGiftPageContent_495903',  //��ҳ����ID
    'showContentId' : 'showMyGiftContent_495903' //������ID
};