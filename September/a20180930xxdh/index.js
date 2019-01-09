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

  
    //查询是否绑定的配置
    amsCfg_491632={
        type : "query",
        iQueryFlowID:491632,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            
            amsSubmit(158516,491638); 

        },
        failure : function(){
            //未绑定时的扩展处理
            
            amsSubmit(158516,491638); 
        }
    };

    //提交绑定的配置
    amsCfg_491631={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:491632,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            
            amsSubmit(158516,491638); 
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

    //调用，查询是否已经绑定
    //milo.ready(function(){
    //            amsInit(158516, 491632);
    //        }
    //);

	    //提交请求至AME
	amsCfg_491647 = {
		"iActivityId": 158516, //活动id	
		"iFlowId":    491647, //流程id
		"fFlowSubmitEnd": function(res){
			alert('你目前拥有荧光棒:' + res.sOutValue1 + '个');
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};

		// 抽奖领取主功能初始化
	amsCfg_491633 = amsCfg_491639 = amsCfg_491640 = {
		'iAMSActivityId' : '158516', // AMS活动号
		'activityId' : '219855', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
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
		'iAMSActivityId' : '158516', // AMS活动号
		'activityId' : '211379', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			amsSubmit(158516,491638); 
			$(".btn_dh").eq(0).removeClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('兑换');
			$(".btn_dh").eq(1).removeClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('兑换');
			$(".btn_dh").eq(2).removeClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('兑换');
			$(".btn_dh").eq(3).removeClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('兑换');
			alert("重置成功!");
		}
	};

		// 抽奖领取主功能初始化
	amsCfg_491641 = amsCfg_491642 = amsCfg_491643 = amsCfg_491645 = {
		'iAMSActivityId' : '158516', // AMS活动号
		'activityId' : '219855', // 模块实例号
		'sData' : {'iChoose':0,'turn':1}, //传递额外参数,如果是不支持Flash的浏览器，如游戏内置浏览器，请开启xhr参数设置为true，默认为false

		'_everyRead' : true, //每次读取amsCfg_436615对象,默认是false
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
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

		//提交请求至AME
	amsCfg_491638 = {
		"iActivityId": 158516, //活动id	
		"iFlowId":    491638, //流程id
		"sNeedSubmitPopDiv":  false ,
		"fFlowSubmitEnd": function(res){
			$("#luckNum01").text('我的幸运值：'+res.sOutValue1);
			allnum = res.sOutValue3;
			switch(res.sOutValue2){
				case '1': 
					$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换'); 
				break;
				case '2': 
					$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换');
					$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('已兑换');
				break;
				case '3': 
					$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换');
					$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('已兑换');
					$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('已兑换');
				break;
				case '4': 
					$(".btn_dh").eq(0).addClass('btn_dhs');$(".btn_dh").eq(0).find('span').text('已兑换');
					$(".btn_dh").eq(1).addClass('btn_dhs');$(".btn_dh").eq(1).find('span').text('已兑换');
					$(".btn_dh").eq(2).addClass('btn_dhs');$(".btn_dh").eq(2).find('span').text('已兑换');
					$(".btn_dh").eq(3).addClass('btn_dhs');$(".btn_dh").eq(3).find('span').text('已兑换');
				break;
			}
			return;
		},
		"fFlowSubmitFailed":function(res){
			//失败会走到这个函数
			//条件不满足，ame返回大于0是后走到这里
			alert(res.sMsg);
		}
	};

	//重置
	function reset01(){
	    if(confirm("重置后幸运值会归0，确定要进行重置么?")){
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
	        alert("对不起, 请在选中本组兑换道具之一后, 再进行兑换!");
	    }
	}

	// 抽奖轮播功能初始化
	amsCfg_491635 = {
		'activityId' : '158516', // 模块实例号
		'contentId' : 'broadcastContent_491635', //容器ID
		'templateId' : 'broadcastTemplate_491635', //模板ID
		'showLiNum' : 9//number 轮播默认显示的条数，默认6条
	};
	milo.ready(function(){
		amsInit(158516,491635);
	});


	// 个人获奖记录初始化
	amsCfg_491634 = {
		'iAMSActivityId' : '158516', // AMS活动号
		'iLotteryFlowId' : '491634', //  查询获奖轮播的流程号
		'activityId' : '219855', // 模块实例号
		'contentId' : 'getGiftContent_491634', //容器ID
		'templateId' : 'getGiftTemplate_491634', //模板ID
		'contentPageId' : 'getGiftPageContent_491634',	//分页容器ID
		'showContentId' : 'showMyGiftContent_491634' //弹出层ID
	};
