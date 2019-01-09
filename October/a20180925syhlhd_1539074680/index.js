   var qq = '';
   //查询是否绑定的配置
    amsCfg_500911={
        type : "query",
        iQueryFlowID:500911,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(162509,500932);  //查询
            setTimeout(function(){ amsSubmit(162509,500942);},300);

        },
        failure : function(){
            //未绑定时的扩展处理
            amsSubmit(162509,500932); //查询
            setTimeout(function(){ amsSubmit(162509,500942);},300);
        }
    };

    //提交绑定的配置
    amsCfg_500910={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:500911,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(162509,500932);  //查询
            setTimeout(function(){ amsSubmit(162509,500942);},300);
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

   //调用，查询是否已经绑定
   // milo.ready(function(){
   //               amsInit(162509, 500911);
   //         }
   // );
   
   
    //提交请求至AME
    amsCfg_500932 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500932, //流程id
        "fFlowSubmitEnd": function(res){
            var temp01  = parseInt(res.sOutValue1); //白
            var temp02  = parseInt(res.sOutValue2)+"L"; //all
            var temp03  = parseInt(res.sOutValue3); //step
            //alert('返回数据为:' + res);
            console.log(temp01);
              
            if(temp01==0){  //活跃 忠实
                $(".z-luck").attr("style","display:none;");
                $(".z-zs").attr("style","display:block;");

                //$(".h-desc01").attr("style","display:none;");
                //$(".h-desc02").attr("style","display:block;");

                //$(".temp02").attr("style","display:none;");
                //$(".temp01").attr("style","display:block;");

                $('#buy01').attr("href","javascript:amsCfg_500939.sData.which2=1;amsSubmit(162509,500939);");
                $('#buy02').attr("href","javascript:amsCfg_500939.sData.which2=2;amsSubmit(162509,500939);");
                $('#buy03').attr("href","javascript:amsCfg_500939.sData.which2=3;amsSubmit(162509,500939);");
                $('.con3-txt').html("成功邀请<span>1名幸运玩家</span>即可购买");
            }else{
                $(".z-luck").attr("style","display:block;");
                $(".z-zs").attr("style","display:none;");

                //$(".h-desc02").attr("style","display:none;");
                //$(".h-desc01").attr("style","display:block;");

                //$(".temp01").attr("style","display:none;");
                //$(".temp02").attr("style","display:block;");

                $('#buy01').attr("href","javascript:amsCfg_500926.sData.which1=1;amsSubmit(162509,500926);");
                $('#buy02').attr("href","javascript:amsCfg_500926.sData.which1=2;amsSubmit(162509,500926);");
                $('#buy03').attr("href","javascript:amsCfg_500926.sData.which1=3;amsSubmit(162509,500926);");
                $('.con3-txt').text("");
            }
            $("#allw").text(temp02);
            //$("#num02").text(temp03);
            //$("#num03").text(temp04);
            for(var i=0;i<11;i++){
                if(i==temp03){
                    $(".state").find("img").eq(i).attr("class","s-img img-on");
                }else{
                    $(".state").find("img").eq(i).attr("class","s-img");
                }
            }

            amsSubmit(162509,501150);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            amsSubmit(162509,501150);
            alert(res.sMsg);
        }
    };


    //提交请求至AME
    amsCfg_501150 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    501150, //流程id
        "fFlowSubmitEnd": function(res){
            var url = 'https://x5.qq.com/cp/a20180925syhlhd/page.htm?qq='+res.sOutValue1;
            $("#url_link").val(url);
            //alert('返回数据为:' + res);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };



    $('#copy_link').click(function () {
        //copy('url_link');
        copyURL();
    });

    function copyURL(){
          var Url2=document.getElementById("url_link");
          Url2.select(); // 选择对象
          document.execCommand("Copy"); // 执行浏览器复制命令
          alert("已复制好，可贴粘。");
    }


    function buyVip(){  //开通超Q
        $.getScript("//imgcache.qq.com/bossweb/ipay/js/api/cashier.js",function(){
            cashier.dialog.buy({
                type: 'service',
                codes: 'cjclubt',
                scene: 'minipay',
                aid: 'vip.y.zd.x5_325655',
                amount: '!1',
                amountType: '!month'
            })
        });
    };

    // function GeneralSign(){ //开通黄钻
    //    $.getScript("http://imgcache.qq.com/bossweb/ipay/js/api/cashier.js",function(){
    //     cashier.dialog.buy(
    //         {
    //             "type":"service",
    //             "ui":"mini",
    //             "itemType":"act",
    //             "target":"!self",
    //             "channels":"",
    //             "defaultChannel":"qdqb",
    //             "amountType":"!month",
    //             'amount': 1,
    //             "presetAmount":"",
    //             "actinfo":"",
    //             "codes":"xxjzghh",
    //             //"actid":"MA20170525104206843",
    //             "pf":"qzone_m_qq-1000-html5-1000",
    //             "aid":"nizuixingyun7"
    //         });
    //     });
    // }


    function getQBVersion() {
        var version = 0;
        try{
            try{
                version = window.external.getVersion() || 1;
            }catch(e){
                version = window.external.getbrowserversion() || 1;
            }
        }catch(e){
            version = /QQBrowser/.test(navigator.userAgent) || "100.0.0.0";
        }
        return version;
    }

    //检查QQ浏览器
    function isQQBrowser() {
        var version = getQBVersion();
        var result = (version != "100.0.0.0") && (version != 0);
        isQQBrowser = function () {
            return result;
        };
        return result;
    }

    function checkQQBrowser(activityId,actId)
    {
        if(isQQBrowser())
            amsSubmit(activityId,actId);
        else
            alert("抱歉，该礼包仅限QQ浏览器领取！");
    }


    function func(json){
        if(json.ret==0){
            if(json.data.iActiveState==1){
                amsSubmit(162509,500924);
            }else{
                alert("对不起, 请通过点击观看按钮观看视频20分钟后再试（单Q限领1次）!");
            }
        }else{
            alert("服务器异常, 请稍后再试!");
        }
    }   

    function isShiPin(){
        need("biz.login-min",function(LoginManager){
                LoginManager.checkLogin(function(){
                    $.ajax({
                        url: '//access.video.qq.com/vmall_admin/GetActiveState?vappid=42181602&vsecret=da863b90d8e12d84037055dc80058ea966e707210be3f7e5&callback=func&iActiveId=175&eType=2&strId='+LoginManager.getUserUin(),
                        dataType: 'jsonp',
                        jsonp: 'callback',
                        jsonpCallback: 'callbackHandler',
                        success: function (data){
                            var a = data;
                        }
                    })
                  
                },function(){
                    LoginManager.login();
                });
        });
    }

    // 抽奖领取主功能初始化
    amsCfg_500913 = amsCfg_501072 = {  //梦工厂 &&洒完水
        'iAMSActivityId' : '162509', // AMS活动号
        'activityId' : '222766', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            
            
            LotteryManager.alert(callbackObj.sMsg);
        }
    };
    // 抽奖领取主功能初始化
    amsCfg_500914 = {  //累计登录5天
        'iAMSActivityId' : '162509', // AMS活动号
        'activityId' : '222766', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            
            alert("恭喜成功为自己装水20L");
            amsSubmit(162509,500932);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // 抽奖领取主功能初始化
    amsCfg_500918 = {  //洒水
        'iAMSActivityId' : '162509', // AMS活动号
        'activityId' : '222766', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            
            alert("恭喜成功洒水1次");
            amsSubmit(162509,500932);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // 抽奖领取主功能初始化
    amsCfg_500919 = amsCfg_500920 = amsCfg_500921 = amsCfg_500923 = amsCfg_500924 = {
        'iAMSActivityId' : '162509', // AMS活动号
        'activityId' : '222766', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            
            
            LotteryManager.alert(callbackObj.sMsg);
        }
    };



    //提交请求至AME 为自己发电
    amsCfg_500933 = amsCfg_500935 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500933, //流程id
        "fFlowSubmitEnd": function(res){
            //alert('返回数据为:' + res);
            alert("恭喜，成功为自己装水5L。");
            amsSubmit(162509,500932);  //查询
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };
   

    amsCfg_500926 = {
        'iActivityId' : '162509',
        'iFlowId' : '500926',
        'sData' : {'which1':0},
        "_everyRead" : true,
        'fFlowSubmitEnd': function(res) {
            need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
                var option = {
                    //apptype:4   //使用新版webpay，不要删除
                    
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
            autoappid.init('x5', 9857, function(final_appid) {
                //final_appid为自动判断得到的道聚城渠道号
                //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
            });
        });
    }); 

    amsCfg_500939 = {
        'iActivityId' : '162509',
        'iFlowId' : '500939',
        'sData' : {'which2':0},
        "_everyRead" : true,
        'fFlowSubmitEnd': function(res) {
            need(["ams.daoju_buy_v2.daoju_buy_v2"], function(DaojuBuy) {
                var option = {
                    //apptype:4   //使用新版webpay，不要删除
                    //onPaySuccess:function(){},//支付成功后回调方法
                    //onPayClose:function(){}//关闭支付页面回调方法
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
            autoappid.init('x5', 9857, function(final_appid) {
                //final_appid为自动判断得到的道聚城渠道号
                //本段代码内自动进行道聚城全流程数据的收集，必须保留并放到milo.ready内，除非自行在页面上进行基于道聚城活动号的eas曝光上报
            });
        });
    }); 


     //提交请求至AME
    amsCfg_500942 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500942, //流程id
        "_everyRead" : true,
        "fFlowSubmitEnd": function(res){
            //alert('返回数据为:' + res);
            console.log(res);
            if(res.jData.iTotal==0){
                console.log('no');

            }else{
                var temp ='';
                for(var i =0;i<res.jData.jData.length;i++){
                    temp = temp +'<li>好友<span>'+res.jData.jData[i].iUin+'</span>成功帮我装水<span>'+res.jData.jData[i].iHelpNum+'L</span></li>';

                    //console.log(res.jData.jData.length);
                }
                $("#list1").html(temp);
                runScroll();
                //console.log(res);
                // ScrollMarqueeUP.init({
                //     'contentId': 'list1', //容器ID
                //     'scrollstep': 1, //每次移动的像素
                //     'scrollstoptime': 50 //间断时间(毫秒)
                // });
            }
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };
