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
    amsCfg_491632={
        type : "query",
        iQueryFlowID:491632,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            
            amsSubmit(158516,491638); 

        },
        failure : function(){
            //δ��ʱ����չ����
            
            amsSubmit(158516,491638); 
        }
    };

    //�ύ�󶨵�����
    amsCfg_491631={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:491632,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            
            amsSubmit(158516,491638); 
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    //���ã���ѯ�Ƿ��Ѿ���
    //milo.ready(function(){
    //            amsInit(158516, 491632);
    //        }
    //);

	    //�ύ������AME
	amsCfg_491647 = {
		"iActivityId": 158516, //�id	
		"iFlowId":    491647, //����id
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
	amsCfg_491633 = amsCfg_491639 = amsCfg_491640 = {
		'iAMSActivityId' : '158516', // AMS���
		'activityId' : '219855', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			amsSubmit(158516,491638); 
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	amsCfg_491644 = {
		'iAMSActivityId' : '158516', // AMS���
		'activityId' : '211379', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			amsSubmit(158516,491638); 
			$(".btn_dh").eq(0).removeClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�һ�');
			$(".btn_dh").eq(1).removeClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('�һ�');
			$(".btn_dh").eq(2).removeClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('�һ�');
			$(".btn_dh").eq(3).removeClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('�һ�');
			alert("���óɹ�!");
		}
	};

		// �齱��ȡ�����ܳ�ʼ��
	amsCfg_491641 = amsCfg_491642 = amsCfg_491643 = amsCfg_491645 = {
		'iAMSActivityId' : '158516', // AMS���
		'activityId' : '219855', // ģ��ʵ����
		'sData' : {'iChoose':0,'turn':1}, //���ݶ������,����ǲ�֧��Flash�������������Ϸ������������뿪��xhr��������Ϊtrue��Ĭ��Ϊfalse

		'_everyRead' : true, //ÿ�ζ�ȡamsCfg_436615����,Ĭ����false
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			setTimeout(function(){ amsSubmit(158516,491638); },2000);
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
			LotteryManager.alert(callbackObj.sMsg);
		}
	};
var allnum = '';

		//�ύ������AME
	amsCfg_491638 = {
		"iActivityId": 158516, //�id	
		"iFlowId":    491638, //����id
		"sNeedSubmitPopDiv":  false ,
		"fFlowSubmitEnd": function(res){
			$("#luckNum01").text('�ҵ�����ֵ��'+res.sOutValue1);
			allnum = res.sOutValue3;
			switch(res.sOutValue2){
				case '1': 
					$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�Ѷһ�'); 
				break;
				case '2': 
					$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('�Ѷһ�');
					$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('�Ѷһ�');
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
	function reset01(){
	    if(confirm("���ú�����ֵ���0��ȷ��Ҫ��������ô?")){
	        amsSubmit(158516,491644);
	    }
	}

	function exchangeLuck01(m,n){
		var choose = n+1;
		var tempnum = parseInt(allnum)+1; 
		if(typeof(choose)!='undefined' && choose>0){
			switch(m){
				case 1: amsCfg_491641.sData.iChoose = choose; amsCfg_491641.sData.turn = tempnum; amsSubmit(158516,491641); break;
				case 2: amsCfg_491642.sData.iChoose = choose; amsCfg_491642.sData.turn = tempnum; amsSubmit(158516,491642); break;
				case 3: amsCfg_491643.sData.iChoose = choose; amsCfg_491643.sData.turn = tempnum; amsSubmit(158516,491643); break;
				case 4: amsCfg_491645.sData.iChoose = choose; amsCfg_491645.sData.turn = tempnum; amsSubmit(158516,491645); break;
			}
		}else{
	        alert("�Բ���, ����ѡ�б���һ�����֮һ��, �ٽ��жһ�!");
	    }
	}

	// �齱�ֲ����ܳ�ʼ��
	amsCfg_491635 = {
		'activityId' : '158516', // ģ��ʵ����
		'contentId' : 'broadcastContent_491635', //����ID
		'templateId' : 'broadcastTemplate_491635', //ģ��ID
		'showLiNum' : 9//number �ֲ�Ĭ����ʾ��������Ĭ��6��
	};
	milo.ready(function(){
		amsInit(158516,491635);
	});


	// ���˻񽱼�¼��ʼ��
	amsCfg_491634 = {
		'iAMSActivityId' : '158516', // AMS���
		'iLotteryFlowId' : '491634', //  ��ѯ���ֲ������̺�
		'activityId' : '219855', // ģ��ʵ����
		'contentId' : 'getGiftContent_491634', //����ID
		'templateId' : 'getGiftTemplate_491634', //ģ��ID
		'contentPageId' : 'getGiftPageContent_491634',	//��ҳ����ID
		'showContentId' : 'showMyGiftContent_491634' //������ID
	};
