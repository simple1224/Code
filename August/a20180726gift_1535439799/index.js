//��ѯ�Ƿ�󶨵�����
amsCfg_489955={
	type : "query",
	iQueryFlowID:489955,
	service:"nz" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����

	},
	failure : function(){
		//δ��ʱ����չ����
	}
};

//�ύ�󶨵�����
amsCfg_489954={
	type : "comit",
	needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
	roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
	iQueryFlowID:489955,
	service:"nz" ,
	success : function(bindedInfo){
		//�Ѱ�ʱ����չ����
	},
	failure : function(){
		//δ��ʱ����չ����
	}
};
    
    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_489957 = amsCfg_489960 = amsCfg_489961 = amsCfg_489962 = {
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
amsCfg_489958 = {
	'iAMSActivityId' : '157703', // AMS���
	'iLotteryFlowId' : '489958', //  ��ѯ���ֲ������̺�
	'activityId' : '219066', // ģ��ʵ����
	'contentId' : 'getGiftContent_489958', //����ID
	'templateId' : 'getGiftTemplate_489958', //ģ��ID
	'contentPageId' : 'getGiftPageContent_489958',	//��ҳ����ID
	'showContentId' : 'showMyGiftContent_489958' //������ID
};