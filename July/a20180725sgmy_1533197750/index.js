//��¼
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
            g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��
           	$("#unlogin").hide();
           	$("#logined").show();
            
            amsInit(154511, 481870);
            //
        });
    });

});

 amsCfg_481870={
    type : "query",
    iQueryFlowID:481870,
    service:"rf" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
		amsSubmit(154511,482363);
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

//�ύ�󶨵�����
amsCfg_481869={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:481870,
    service:"rf" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
        amsSubmit(154511,482363);
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

amsCfg_481798 = {
	'iActivityId' : '154511',
	'iFlowId' : '481798',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				zoneid:1,
				//apptype:4	�°�webpay����Ĭ��
				onPaySuccess:function(){
					setTimeout(function(){
						amsSubmit(154511,482363);
					},2000);
				}//֧���ɹ���ص�����
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
		autoappid.init('rf', 9076, function(final_appid) {
			//final_appidΪ�Զ��жϵõ��ĵ��۳�������
			//���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
		});
	});
});	
amsCfg_481874 = {
	'iActivityId' : '154511',
	'iFlowId' : '481874',
	'sData'	: {},
	'fFlowSubmitEnd': function(res) {
		need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
			var option = {
				zoneid:1,
				//apptype:4	�°�webpay����Ĭ��
				onPaySuccess:function(){
					setTimeout(function(){
						amsSubmit(154511,482363);
					},2000);
				}//֧���ɹ���ص�����
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
		autoappid.init('rf', 9076, function(final_appid) {
			//final_appidΪ�Զ��жϵõ��ĵ��۳�������
			//���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
		});
	});
});		

amsCfg_482008 = {
	'iAMSActivityId' : '154511', // AMS���
	'iLotteryFlowId' : '482008', //  ��ѯ���ֲ������̺�
	'activityId' : '216017', // ģ��ʵ����
	'contentId' : 'getGiftContent_482008', //����ID
	'templateId' : 'getGiftTemplate_482008', //ģ��ID
	'contentPageId' : 'getGiftPageContent_482008',	//��ҳ����ID
	'showContentId' : 'showMyGiftContent_482008' //������ID
};

amsCfg_482007 = amsCfg_482107 = {
	'iAMSActivityId' : '154511', // AMS���
	'activityId' : '216017', // ģ��ʵ����
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		amsSubmit(154511,482363);
		var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
		if(packageLen && packageLen.length > 1){
			LotteryManager.alert(callbackObj.sMsg);
			return;
		}
	
		//1��ʵ��
		if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
			/*
			 * 0��������Ϸ��Ʒ
			 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
			 * 2��cdkey
			 */
			LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
			return;
		}
		//2��cdkey
		if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
			// �µĴ���
			if(callbackObj.sPackageCDkey){
				LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
				return;
			}else{
				LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
				return;
			}
			
		}
		
		LotteryManager.alert(callbackObj.sMsg);
	}
};

amsCfg_482160 = {
	'activityId' : '154511', // ģ��ʵ����
	'contentId' : 'broadcastContent_482160', //����ID
	'templateId' : 'broadcastTemplate_482160' //ģ��ID
};
milo.ready(function(){
	amsInit(154511,482160);
});


amsCfg_482363 = {
	"iActivityId": 154511, //�id	
	"iFlowId":    482363, //����id
	"sNeedSubmitPopDiv":  false ,
	"fFlowSubmitEnd": function(res){
		if(res.iRet==0){
			$("#nums").text(res.sOutValue1);
			
		}
		return;
	},
	"fFlowSubmitFailed":function(res){
		//ʧ�ܻ��ߵ��������
		//���������㣬ame���ش���0�Ǻ��ߵ�����
		alert(res.sMsg);
	}
};