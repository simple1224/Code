   var qq = '';
   //��ѯ�Ƿ�󶨵�����
    amsCfg_500911={
        type : "query",
        iQueryFlowID:500911,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(162509,500932);  //��ѯ
            setTimeout(function(){ amsSubmit(162509,500942);},300);

        },
        failure : function(){
            //δ��ʱ����չ����
            amsSubmit(162509,500932); //��ѯ
            setTimeout(function(){ amsSubmit(162509,500942);},300);
        }
    };

    //�ύ�󶨵�����
    amsCfg_500910={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:500911,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(162509,500932);  //��ѯ
            setTimeout(function(){ amsSubmit(162509,500942);},300);
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

   //���ã���ѯ�Ƿ��Ѿ���
   // milo.ready(function(){
   //               amsInit(162509, 500911);
   //         }
   // );
   
   
    //�ύ������AME
    amsCfg_500932 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    500932, //����id
        "fFlowSubmitEnd": function(res){
            var temp01  = parseInt(res.sOutValue1); //��
            var temp02  = parseInt(res.sOutValue2)+"L"; //all
            var temp03  = parseInt(res.sOutValue3); //step
            //alert('��������Ϊ:' + res);
            console.log(temp01);
              
            if(temp01==0){  //��Ծ ��ʵ
                $(".z-luck").attr("style","display:none;");
                $(".z-zs").attr("style","display:block;");

                //$(".h-desc01").attr("style","display:none;");
                //$(".h-desc02").attr("style","display:block;");

                //$(".temp02").attr("style","display:none;");
                //$(".temp01").attr("style","display:block;");

                $('#buy01').attr("href","javascript:amsCfg_500939.sData.which2=1;amsSubmit(162509,500939);");
                $('#buy02').attr("href","javascript:amsCfg_500939.sData.which2=2;amsSubmit(162509,500939);");
                $('#buy03').attr("href","javascript:amsCfg_500939.sData.which2=3;amsSubmit(162509,500939);");
                $('.con3-txt').html("�ɹ�����<span>1���������</span>���ɹ���");
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
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            amsSubmit(162509,501150);
            alert(res.sMsg);
        }
    };


    //�ύ������AME
    amsCfg_501150 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    501150, //����id
        "fFlowSubmitEnd": function(res){
            var url = 'https://x5.qq.com/cp/a20180925syhlhd/page.htm?qq='+res.sOutValue1;
            $("#url_link").val(url);
            //alert('��������Ϊ:' + res);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            alert(res.sMsg);
        }
    };



    $('#copy_link').click(function () {
        //copy('url_link');
        copyURL();
    });

    function copyURL(){
          var Url2=document.getElementById("url_link");
          Url2.select(); // ѡ�����
          document.execCommand("Copy"); // ִ���������������
          alert("�Ѹ��ƺã�����ճ��");
    }


    function buyVip(){  //��ͨ��Q
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

    // function GeneralSign(){ //��ͨ����
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

    //���QQ�����
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
            alert("��Ǹ�����������QQ�������ȡ��");
    }


    function func(json){
        if(json.ret==0){
            if(json.data.iActiveState==1){
                amsSubmit(162509,500924);
            }else{
                alert("�Բ���, ��ͨ������ۿ���ť�ۿ���Ƶ20���Ӻ����ԣ���Q����1�Σ�!");
            }
        }else{
            alert("�������쳣, ���Ժ�����!");
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

    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_500913 = amsCfg_501072 = {  //�ι��� &&����ˮ
        'iAMSActivityId' : '162509', // AMS���
        'activityId' : '222766', // ģ��ʵ����
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
    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_500914 = {  //�ۼƵ�¼5��
        'iAMSActivityId' : '162509', // AMS���
        'activityId' : '222766', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            
            alert("��ϲ�ɹ�Ϊ�Լ�װˮ20L");
            amsSubmit(162509,500932);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_500918 = {  //��ˮ
        'iAMSActivityId' : '162509', // AMS���
        'activityId' : '222766', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            
            alert("��ϲ�ɹ���ˮ1��");
            amsSubmit(162509,500932);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_500919 = amsCfg_500920 = amsCfg_500921 = amsCfg_500923 = amsCfg_500924 = {
        'iAMSActivityId' : '162509', // AMS���
        'activityId' : '222766', // ģ��ʵ����
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



    //�ύ������AME Ϊ�Լ�����
    amsCfg_500933 = amsCfg_500935 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    500933, //����id
        "fFlowSubmitEnd": function(res){
            //alert('��������Ϊ:' + res);
            alert("��ϲ���ɹ�Ϊ�Լ�װˮ5L��");
            amsSubmit(162509,500932);  //��ѯ
            return;
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
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
                    //apptype:4   //ʹ���°�webpay����Ҫɾ��
                    
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
                //final_appidΪ�Զ��жϵõ��ĵ��۳�������
                //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
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
                    //apptype:4   //ʹ���°�webpay����Ҫɾ��
                    //onPaySuccess:function(){},//֧���ɹ���ص�����
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
            autoappid.init('x5', 9857, function(final_appid) {
                //final_appidΪ�Զ��жϵõ��ĵ��۳�������
                //���δ������Զ����е��۳�ȫ�������ݵ��ռ������뱣�����ŵ�milo.ready�ڣ�����������ҳ���Ͻ��л��ڵ��۳ǻ�ŵ�eas�ع��ϱ�
            });
        });
    }); 


     //�ύ������AME
    amsCfg_500942 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    500942, //����id
        "_everyRead" : true,
        "fFlowSubmitEnd": function(res){
            //alert('��������Ϊ:' + res);
            console.log(res);
            if(res.jData.iTotal==0){
                console.log('no');

            }else{
                var temp ='';
                for(var i =0;i<res.jData.jData.length;i++){
                    temp = temp +'<li>����<span>'+res.jData.jData[i].iUin+'</span>�ɹ�����װˮ<span>'+res.jData.jData[i].iHelpNum+'L</span></li>';

                    //console.log(res.jData.jData.length);
                }
                $("#list1").html(temp);
                runScroll();
                //console.log(res);
                // ScrollMarqueeUP.init({
                //     'contentId': 'list1', //����ID
                //     'scrollstep': 1, //ÿ���ƶ�������
                //     'scrollstoptime': 50 //���ʱ��(����)
                // });
            }
            return;
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            alert(res.sMsg);
        }
    };
