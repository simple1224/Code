/*
    //��ѯ�Ƿ�󶨵�����
    amsCfg_464369={
        type : "query",
        iQueryFlowID:464369,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(147724,464375);

        },
        failure : function(){
            //δ��ʱ����չ����
            amsSubmit(147724,464375);
        }
    };

    //�ύ�󶨵�����
    amsCfg_464368={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:464369,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(147724,464375);
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    //���ã���ѯ�Ƿ��Ѿ���
    milo.ready(function(){
                amsInit(147724, 464369);
            }
    );

*/

// �齱��ȡ�����ܳ�ʼ��
amsCfg_464370 = amsCfg_464376 = amsCfg_464377 = {
	'iAMSActivityId' : '147724', // AMS���
	'activityId' : '209334', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(147724,464375);
		var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
		if(packageLen && packageLen.length > 1){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		LotteryManager.alert(callbackObj.sMsg);
	}
};

amsCfg_464381 = {
	'iAMSActivityId' : '147724', // AMS���
	'activityId' : '209334', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(147724,464375);
		$(".btn_dh").eq(0).removeClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�һ�');
		$(".btn_dh").eq(1).removeClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('�һ�');
		$(".btn_dh").eq(2).removeClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('�һ�');
		$(".btn_dh").eq(3).removeClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('�һ�');
		alert("���óɹ�!");
	}
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_464378 = amsCfg_464379 = amsCfg_464380 = amsCfg_464382 = {
	'iAMSActivityId' : '147724', // AMS���
	'activityId' : '209334', // ģ��ʵ����
	'sData' : {'iChoose':0}, //���ݶ������,����ǲ�֧��Flash�������������Ϸ������������뿪��xhr��������Ϊtrue��Ĭ��Ϊfalse

	'_everyRead' : true, //ÿ�ζ�ȡamsCfg_436615����,Ĭ����false
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		setTimeout(function(){ amsSubmit(147724,464375); },2000);
		var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
		if(packageLen && packageLen.length > 1){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
		LotteryManager.alert(callbackObj.sMsg);
	}
};

//�ύ������AME
amsCfg_464375 = {
	"iActivityId": 147724, //�id	
	"iFlowId":    464375, //����id
	"sNeedSubmitPopDiv":  false ,
	"fFlowSubmitEnd": function(res){
		$("#luckNum").text('�ҵ�����ֵ��'+res.sOutValue1);
		switch(res.sOutValue2){
			case '1': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�Ѷһ�'); 
			break;
			case '2': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�Ѷһ�');
				$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('�Ѷһ�');
			break;
			case '3': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�Ѷһ�');
				$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('�Ѷһ�');
				$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('�Ѷһ�');
			break;
			case '4': 
				$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�Ѷһ�');
				$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('�Ѷһ�');
				$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('�Ѷһ�');
				$(".btn_dh").eq(3).addClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('�Ѷһ�');
			break;
		}
		return;
	},
	"fFlowSubmitFailed":function(res){
		//ʧ�ܻ��ߵ��������
		//���������㣬ame���ش���0�Ǻ��ߵ�����
		alert(res.sMsg);
	}
};

//����
function reset(){
    if(confirm("���ú�����ֵ���0��ȷ��Ҫ��������ô?")){
        amsSubmit(147724,464381);
    }
}

//�ύ������AME
amsCfg_464384 = {
	"iActivityId": 147724, //�id	
	"iFlowId":    464384, //����id
	"fFlowSubmitEnd": function(res){
		alert('��Ŀǰӵ��ӫ���:' + res.sOutValue1 + '��');
		return;
	},
	"fFlowSubmitFailed":function(res){
		//ʧ�ܻ��ߵ��������
		//���������㣬ame���ش���0�Ǻ��ߵ�����
		alert(res.sMsg);
	}
};

function exchangeLuck(m,n){
	var choose = n+1;
	if(typeof(choose)!='undefined' && choose>0){
		switch(m){
			case 1: amsCfg_464378.sData.iChoose = choose;amsSubmit(147724,464378); break;
			case 2: amsCfg_464380.sData.iChoose = choose;amsSubmit(147724,464380); break;
			case 3: amsCfg_464379.sData.iChoose = choose;amsSubmit(147724,464379); break;
			case 4: amsCfg_464382.sData.iChoose = choose;amsSubmit(147724,464382); break;
		}
	}else{
        alert("�Բ���, ����ѡ�б���һ�����֮һ��, �ٽ��жһ�!");
    }
}

// �齱�ֲ����ܳ�ʼ��
amsCfg_464372 = {
	'activityId' : '147724', // ģ��ʵ����
	'contentId' : 'broadcastContent_464372', //����ID
	'templateId' : 'broadcastTemplate_464372', //ģ��ID
	'showLiNum' : 9//number �ֲ�Ĭ����ʾ��������Ĭ��6��
};
milo.ready(function(){
	amsInit(147724,464372);
});

// ���˻񽱼�¼��ʼ��
amsCfg_464371 = {
	'iAMSActivityId' : '147724', // AMS���
	'iLotteryFlowId' : '464371', //  ��ѯ���ֲ������̺�
	'activityId' : '199218', // ģ��ʵ����
	'contentId' : 'getGiftContent_464371', //����ID
	'templateId' : 'getGiftTemplate_464371', //ģ��ID
	'contentPageId' : 'getGiftPageContent_464371',	//��ҳ����ID
	'showContentId' : 'showMyGiftContent_464371' //������ID
};

//147724
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
    amsCfg_469943={
        type : "query",
        iQueryFlowID:469943,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(147724,464375); //org
            amsSubmit(149790,469949); 

        },
        failure : function(){
            //δ��ʱ����չ����
            amsSubmit(147724,464375); //org
            amsSubmit(149790,469949); 
        }
    };

    //�ύ�󶨵�����
    amsCfg_469942={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:469943,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(147724,464375); //org
            amsSubmit(149790,469949); 
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    //���ã���ѯ�Ƿ��Ѿ���
    milo.ready(function(){
                amsInit(149790, 469943);
            }
    );

	    //�ύ������AME
	amsCfg_469958 = {
		"iActivityId": 149790, //�id	
		"iFlowId":    469958, //����id
		"fFlowSubmitEnd": function(res){
			alert('��Ŀǰӵ��ӫ���:' + res.sOutValue1 + '��');
			return;
		},
		"fFlowSubmitFailed":function(res){
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};

		// �齱��ȡ�����ܳ�ʼ��
	amsCfg_469944 = amsCfg_469950 = amsCfg_469951 = {
		'iAMSActivityId' : '149790', // AMS���
		'activityId' : '211379', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			amsSubmit(149790,469949); 
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	amsCfg_469955 = {
		'iAMSActivityId' : '149790', // AMS���
		'activityId' : '211379', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			amsSubmit(149790,469949); 
			$(".btn_dh").eq(4).removeClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('�һ�');
			$(".btn_dh").eq(5).removeClass('btn_dhs');$(".btn_dh").eq(5).find('span').text('�һ�');
			$(".btn_dh").eq(6).removeClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('�һ�');
			$(".btn_dh").eq(7).removeClass('btn_dhs');$(".btn_dh").eq(7).find('span').text('�һ�');
			alert("���óɹ�!");
		}
	};

		// �齱��ȡ�����ܳ�ʼ��
	amsCfg_469952 = amsCfg_469953 = amsCfg_469954 = amsCfg_469956 = {
		'iAMSActivityId' : '149790', // AMS���
		'activityId' : '211379', // ģ��ʵ����
		'sData' : {'iChoose':0}, //���ݶ������,����ǲ�֧��Flash�������������Ϸ������������뿪��xhr��������Ϊtrue��Ĭ��Ϊfalse

		'_everyRead' : true, //ÿ�ζ�ȡamsCfg_436615����,Ĭ����false
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			setTimeout(function(){ amsSubmit(149790,469949); },2000);
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

		//�ύ������AME
	amsCfg_469949 = {
		"iActivityId": 149790, //�id	
		"iFlowId":    469949, //����id
		"sNeedSubmitPopDiv":  false ,
		"fFlowSubmitEnd": function(res){
			$("#luckNum01").text('�ҵ�����ֵ��'+res.sOutValue1);
			switch(res.sOutValue2){
				case '1': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('�Ѷһ�'); 
				break;
				case '2': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(6).addClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('�Ѷһ�');
				break;
				case '3': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(5).addClass('btn_dhs');$(".btn_dh").eq(5).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(6).addClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('�Ѷһ�');
				break;
				case '4': 
					$(".btn_dh").eq(4).addClass('btn_dhs');$(".btn_dh").eq(4).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(5).addClass('btn_dhs');$(".btn_dh").eq(5).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(6).addClass('btn_dhs');$(".btn_dh").eq(6).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(7).addClass('btn_dhs');$(".btn_dh").eq(7).find('span').text('�Ѷһ�');
				break;
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};

	//����
	function reset01(){
	    if(confirm("���ú�����ֵ���0��ȷ��Ҫ��������ô?")){
	        amsSubmit(149790,469955);
	    }
	}

	function exchangeLuck01(m,n){
		var choose = n+1;
		if(typeof(choose)!='undefined' && choose>0){
			switch(m){
				case 1: amsCfg_469952.sData.iChoose = choose;amsSubmit(149790,469952); break;
				case 2: amsCfg_469953.sData.iChoose = choose;amsSubmit(149790,469953); break;
				case 3: amsCfg_469954.sData.iChoose = choose;amsSubmit(149790,469954); break;
				case 4: amsCfg_469956.sData.iChoose = choose;amsSubmit(149790,469956); break;
			}
		}else{
	        alert("�Բ���, ����ѡ�б���һ�����֮һ��, �ٽ��жһ�!");
	    }
	}

	// �齱�ֲ����ܳ�ʼ��
	amsCfg_469946 = {
		'activityId' : '149790', // ģ��ʵ����
		'contentId' : 'broadcastContent_469946', //����ID
		'templateId' : 'broadcastTemplate_469946', //ģ��ID
		'showLiNum' : 9//number �ֲ�Ĭ����ʾ��������Ĭ��6��
	};
	milo.ready(function(){
		amsInit(149790,469946);
	});


	// ���˻񽱼�¼��ʼ��
	amsCfg_469945 = {
		'iAMSActivityId' : '149790', // AMS���
		'iLotteryFlowId' : '469945', //  ��ѯ���ֲ������̺�
		'activityId' : '211379', // ģ��ʵ����
		'contentId' : 'getGiftContent_469945', //����ID
		'templateId' : 'getGiftTemplate_469945', //ģ��ID
		'contentPageId' : 'getGiftPageContent_469945',	//��ҳ����ID
		'showContentId' : 'showMyGiftContent_469945' //������ID
	};
