// 抽奖领取主功能初始化
amsCfg_480044 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480123 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        alert("恭喜你放飞了所有的喜鹊");
        amsSubmit(153612,480239);
        return; 
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480162 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480239 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
    	  console.log(callbackObj);
    	  var iNum1 = callbackObj.sOutValue1  ; 
    	  var iNum2 = callbackObj.sOutValue2  ; 
    	  var iNum3 = callbackObj.sOutValue3  ;
    	  $("#jf1").text(iNum1);
    	  $("#jf2").text(iNum2*2);
    	  $("#jf3").text(iNum3);
    	  var rate = iNum2 * 1.0 *60 / 5000000  ; 
    	  $(".scroll2").css("width",  rate +"%");
    	  return ; 
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480248 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480250 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480268 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 抽奖领取主功能初始化
amsCfg_480269 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'activityId' : '215102', // 模块实例号
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1：实物
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0：虚拟游戏物品
                 * 1：实际物品，需要填写个人收货信息
                 * 2：cdkey
                 */
            LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
            return;
        }
        //2：cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // 新的处理
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'复制成功。\');">');
                return;
            }
            else
            {
                LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'复制成功。\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// 个人获奖记录初始化
amsCfg_480045 = 
{
    'iAMSActivityId' : '153612', // AMS活动号
    'iLotteryFlowId' : '480045', //  查询获奖轮播的流程号
    'activityId' : '215102', // 模块实例号
    'contentId' : 'getGiftContent_480045', //容器ID
    'templateId' : 'getGiftTemplate_480045', //模板ID
    'contentPageId' : 'getGiftPageContent_480045', //分页容器ID
    'showContentId' : 'showMyGiftContent_480045' //弹出层ID
};
//查询是否绑定的配置
amsCfg_480048 = 
{
    type : "query", iQueryFlowID : 480048, service : "nz" ,
    success : function (bindedInfo)
    {
        amsSubmit(153612,480239);
    },
    failure : function ()
    {
        //未绑定时的扩展处理
    }
};
//提交绑定的配置
amsCfg_480047 = 
{
    type : "comit", needPopupRole : true, //是否弹默认角色框选角色
    roleInfo : null, //如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID : 480048, service : "nz" ,
    success : function (bindedInfo)
    {
        //已绑定时的扩展处理
    },
    failure : function ()
    {
        //未绑定时的扩展处理
    }
};
//调用，查询是否已经绑定
milo.ready(function ()
{
    amsInit(153612, 480048);
} );
