    var ua = window.navigator.userAgent.toLowerCase();
	var appConfig={
				"QQBrowserAppId":"106",  //��QQ������������APPID����ϵ�ˣ�Andorid��ricedeng(����)  IOS��kingjlhuang(�ƽ���)
				"WxAppId":"wx9b2251fa995dcf56",  //��Ҫ��΢������openLinkȨ�ޣ���ϵ�ˣ�johnnyliu(���Ͻ�)
				"AppName":"��������",  //ҵ�����������
				"scope":"snsapi_userinfo"   //Ĭ���� snsapi_base ��Ĭ��Ȩ�������Ϸ�޾�ĬȨ�ޣ�����Ҫ�ֶ��ĳ� snsapi_userinfo
				//"LogoUrl":""   //ҵ������Ȩʱ��Ҫ��ʾ�������α�׼Logo��
	}
	var sData = {
		//"appid": 1105483033,
		"nick": '',
		"sServiceType": "x5m"
	};
	var currUrl=window.location.href;
	currUrl=encodeURIComponent(currUrl.replace('http://','https://'));

$('#wxloginBtn').off().on('click',function(){
	need("biz.login",function(LoginManager){
		LoginManager.init({
			appConfig:appConfig
		});
		if( LoginManager.isWxApp() ){
			LoginManager.loginByWX();
		} else {
			//LoginManager.loginByWX();
			window.location.href="https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90136652&appid=wx9b2251fa995dcf56&url="+currUrl+"#wechat_redirect";
		}
	})
	return false;
});
$('#ptLoginBtn').off().on('click',function(){
	need("biz.login",function(LoginManager){
		LoginManager.init({
			needReloadPage:true
		});
		LoginManager.login();
	})
	return false;
});	
milo.addEvent(g("ptLogoutBtn"), "click", function() {
    need("biz.login",function(LoginManager){
        LoginManager.init({
            needReloadPage:true
        });
        LoginManager.logout();
    });
    return false;
});
milo.ready(function () {
	need("biz.login",function(LoginManager){
		LoginManager.init({
			appConfig:appConfig
		});
		LoginManager.checkLogin(
			function(userinfo){
				console.log("�ѵ�½");
				console.log(userinfo);
				
				if (milo.cookie.get("acctype")=="wx"){//΢�ŵ�¼
                    //$('#ptLogoutBtn').hide();
                    //��ȡͷ���ǳƵ���Ϣ
                    LoginManager.getUserInfoByWxOpenId({
                        "openid":milo.cookie.get("openid"),
                        "access_token":milo.cookie.get("access_token")
                    },function(wxuser){
                        $("#userinfo").text(wxuser.nickname);
                        if (wxuser.headimgurl!='' ) {
                            sUrl=wxuser.headimgurl+'/64';
							//$('#img_myface').attr('src', sUrl);
                        }
                    });
                } else {//QQ��¼
                    //��ȡͷ���ǳƵ���Ϣ
					//$("#userinfo").text(userinfo.nickName);
					$("#userinfo").text(userinfo.userUin);
                    LoginManager.getUserFace(function(data){
                        if (data.userFace!='' ) {
                            sUrl=data.userFace;
							$('#img_myface').attr('src', sUrl);
                        }
                    });
                }
				//��ѯ�Ƿ�󶨴���
				 amsInit(159712, 494437);
				
			},
			function(){
				console.log("δ��½");				
				if (LoginManager.isWxApp()){//΢�Ż�����ǿ���Զ���¼����Q������ֱ�ӻ��Զ���¼������ǿ��
						LoginManager.loginByWX();
				}
				
			},
			{//checklogin��ʱ�����Ӷ�������������ҵ���¼̬����
				appConfig: {
				WxAppId : 'wx9b2251fa995dcf56'
			}
		});	
	});
});


     amsCfg_494437={
                        type : "query",
						iQueryFlowID:494436,
                        success : function(bindedInfo){
                            //�Ѱ�ʱ����չ����
                            getTask();  
							amsSubmit(159712,495084);
							settime(30);
                        },
                        failure : function(){
                            //δ��ʱ����չ����
							amsInit(159712, 494436);
                        }
                    };

                    //�ύ�󶨵�����
                    amsCfg_494436={
                        type : "comit",
                        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
                        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
                        iQueryFlowID:494437,
                        service:"x5m",
						success : function(bindedInfo){
							//�Ѱ�ʱ����չ����
							getTask();
							amsSubmit(159712,495084);
							settime(30);
							
						},
						failure : function(){
							//δ��ʱ����չ����
							amsInit(159712, 494436);
						}
                    };



function isloginn(activeId){
	need("biz.login", function (LoginManager) {
        LoginManager.checkLogin(function (userinfo) {
			 amsSubmit(159712, activeId);
			
		},function(){
	           showDia("dia");
		});
	});
}


amsCfg_494513 = {
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
       $('.box1  a').addClass('active');
		return;
	}
};

amsCfg_494438 = amsCfg_494509 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);

		return;
	}
};

amsCfg_494612 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item1 a").addClass("active");
		return;
	}
};


amsCfg_494614 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item2 a").addClass("active");
		return;
	}
};

amsCfg_494615 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item3 a").addClass("active");
		return;
	}
};

amsCfg_494617 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item4 a").addClass("active");
		return;
	}
};

amsCfg_494620 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item5 a").addClass("active");
		return;
	}
};

amsCfg_494622 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item6 a").addClass("active");
		return;
	}
};

amsCfg_494643 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item7 a").addClass("active");
		return;
	}
};

amsCfg_494645 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item8 a").addClass("active");
		return;
	}
};

amsCfg_494646 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item9 a").addClass("active");
		return;
	}
};


amsCfg_494647 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item10 a").addClass("active");
		return;
	}
};


amsCfg_494648 ={
	'iAMSActivityId' : '159712', // AMS���
	'activityId' : '220932', // ģ��ʵ����	
	"sData":sData,					
	'onBeginGetGiftEvent' : function(){
		return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
	},
	'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
		alert(callbackObj.sMsg);
	},
	'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�

		LotteryManager.alert(callbackObj.sMsg);
        $(".item11 a").addClass("active");
		return;
	}
};


function getTask(){
	isloginn(494528);
	setTimeout(function(){isloginn(494548);},10000);
	setTimeout(function(){isloginn(494570);},20000);
	}
	
	
	amsCfg_494528 = {
		"iActivityId": 159712, //�id	
		"iFlowId":    494528, //����id
		"sData":sData,
		"fFlowSubmitEnd": function(res){
			var loginNum=parseInt(res.sOutValue1)>3?3:res.sOutValue1;
			var loginNum1=parseInt(res.sOutValue1)>7?7:res.sOutValue1;
			var PeekNum=parseInt(res.sOutValue2)>3?3:res.sOutValue2;
			var FriendNum=parseInt(res.sOutValue3)>20?20:res.sOutValue3;
			
			$(".item1 span").text("("+loginNum+"/3)");
			$(".item2 span").text("("+loginNum1+"/7)");
			$(".item3 span").text("("+PeekNum+"/3)");
			$(".item4 span").text("("+FriendNum+"/20)");
			return;
		},
		"fFlowSubmitFailed":function(res){
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};	
	

   amsCfg_494548 = {
		"iActivityId": 159712, //�id	
		"iFlowId":    494548, //����id
		"sData":sData,
		"fFlowSubmitEnd": function(res){
			var PriceNum=parseInt(res.sOutValue1)>3?3:res.sOutValue1;
			var v2=parseInt(res.sOutValue2)>5?5:res.sOutValue2;
			var v2_2=parseInt(res.sOutValue2)>10?10:res.sOutValue2;

			
			$(".item5 span").text("("+PriceNum+"/10)");
			$(".item6 span").text("("+v2+"/5)");
			$(".item7 span").text("("+v2_2+"/10)");
;
			return;
		},
		"fFlowSubmitFailed":function(res){
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};
	
	
	amsCfg_494570 = {
		"iActivityId": 159712, //�id	
		"iFlowId":    494570, //����id
		"sData":sData,
		"fFlowSubmitEnd": function(res){
			var v1=parseInt(res.sOutValue1)>10?10:res.sOutValue1;
			var v1_2=parseInt(res.sOutValue1)>20?20:res.sOutValue1;
			var v3=parseInt(res.sOutValue2)>3?3:res.sOutValue2;
			var v3_2=parseInt(res.sOutValue2)>6?6:res.sOutValue2;

			
			$(".item8 span").text("("+v1+"/10)");
			$(".item9 span").text("("+v1_2+"/20)");
			$(".item10 span").text("("+v3+"/3)");
			$(".item11 span").text("("+v3_2+"/6)");
			return;
		},
		"fFlowSubmitFailed":function(res){
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};	
	
	amsCfg_495084 = {
		"iActivityId": 159712, //�id	
		"iFlowId":    495084, //����id
		"fFlowSubmitEnd": function(res){
			var holds=res.sOutValue1;
			var arrHold=holds.split(',');
			var j=1;
			for(var i=0;i<arrHold.length;i++)
			{
				if(arrHold[i]>0)
				{
					$(".item"+j+" a").addClass("active");
				}
				else
				{
					$(".item"+j+" a").removeClass("active");
				}
			}
			
			if(res.sOutValue1>0)
			{
				$('.box1  a').addClass('active');
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
			//ʧ�ܻ��ߵ��������
			//���������㣬ame���ش���0�Ǻ��ߵ�����
			alert(res.sMsg);
		}
	};

var countdown=30; 	
function settime(val) { 
if (countdown == 0) { 
getTask();
countdown=30;
} else { 
countdown--; 
} 
document.getElementById("seconds").innerHTML=countdown;
setTimeout(function() { 
settime(val) 
},1000) 
} 	