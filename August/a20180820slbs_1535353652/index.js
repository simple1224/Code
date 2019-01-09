//查询是否绑定的配置
    amsCfg_489337={
        type : "query",
        iQueryFlowID:489337,
        service:"nz" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(157439,489409);
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

    //提交绑定的配置
    amsCfg_489336={
        type : "comit",
        needPopupRole:true,//是否弹默认角色框选角色
        roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
        iQueryFlowID:489337,
        service:"nz" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(157439,489409);
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

   // 抽奖领取主功能初始化
    amsCfg_489351 = {
        'iAMSActivityId' : '157439', // AMS活动号
        'activityId' : '218832', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
            lottery.reset();
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            amsSubmit(157439,489409);
           calllotteryToRoll(callbackObj)
        }
    };
                
    amsCfg_489355 = amsCfg_489369 = amsCfg_489370 = amsCfg_489371 = {
        'iAMSActivityId' : '157439', // AMS活动号
        'activityId' : '218832', // 模块实例号
        'onBeginGetGiftEvent' : function(){
            return 0; // 抽奖前事件，返回0表示成功
        },
        'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
            amsSubmit(157439,489409);
             alert("恭喜你成功获得一次抽奖机会~");
           
        }
    };

    // 个人获奖记录初始化
amsCfg_489352 = {
    'iAMSActivityId' : '157439', // AMS活动号
    'iLotteryFlowId' : '489352', //  查询获奖轮播的流程号
    'activityId' : '218832', // 模块实例号
    'contentId' : 'getGiftContent_489352', //容器ID
    'templateId' : 'getGiftTemplate_489352', //模板ID
    'contentPageId' : 'getGiftPageContent_489352',  //分页容器ID
    'showContentId' : 'showMyGiftContent_489352' //弹出层ID
};


//提交请求至AME
    amsCfg_489409 = {
        "iActivityId": 157439, //活动id   
        "iFlowId":    489409, //流程id
        "fFlowSubmitEnd": function(res){
            $(".choujiang").html(res.sOutValue1);
            // var indexDate = parseInt(res.sOutValue1) - 24;//今天是第几天
            // indexDate < 0 ? indexDate = 0 : 1;
            // indexDate > 6 ? indexDate = 6 : 1;
            // for(var i=0;i<indexDate;i++){
            //    $('#dateLi li').eq(i).addClass('used');
            // }
            
            // $('.price li').eq(indexDate).addClass("active");
            //  $('#dateLi li').eq(indexDate).addClass('selected');
            return;
        },
        "fFlowSubmitFailed":function(res){
           
        }
    };


    //提交请求至AME
    amsCfg_490232 = {
        "iActivityId": 157439, //活动id   
        "iFlowId":    490232, //流程id
        "fFlowSubmitEnd": function(res){
            if(parseInt(res.jData.iTotal) <= 0){
                alert("抱歉，还未有中奖名单~");
                return;
            }else{
                var htmlStr = '<li class="special">QQ号</li><li class="special">昵称</li>';
                var qq_str = res.jData.jData[0].iUin.substring(0,3)+"***"+res.jData.jData[0].iUin.substring(5,15)
                htmlStr += '<li>'+qq_str+'</li><li>'+decodeURIComponent(res.jData.jData[0].sName)+'</li>';
                $("#dia ul").html(htmlStr);
            }
            showDia('dia')

        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };

    function chakan(dDate,iFlag){
        amsCfg_490232.sData={'dDate':dDate,'iFlag':iFlag};
        amsSubmit(157439,490232);
    }

    amsCfg_490222 = {
    'iActivityId' : '157439', // AMS活动号
    'iFlowId' : '490222', // 流程号
    '_everyRead' : true,
    'fFlowSubmitEnd': function(res) {
        if(typeof res.jData == "object") { //返回已经提交的数据，填充页面
            need(["biz.provincecityselector", "biz.dialog", "util.form"],function(pcs, Dialog, FormManager){

                Dialog.show({
                    id: 'personInfoContent_490222'
                });

                g('personInfoContentBtn_490222').onclick = function(){
                    var fillData = FormManager.getAllInputValue('personInfoContent_490222');
                    for(var i in fillData) {
                        var _val = fillData[i];
                        switch(i) {
                            case 'sName': {
                                if(!_val){alert("姓名不能为空"); return;}
                                if(milo.getByteLength(_val) > 30){alert("姓名长度不能超过30个字节。"); return;}
                                break;
                            }
                            case 'sGender':{
                                if(!_val){alert("性别必须选择"); return;}
                                break;
                            }
                            case 'sIdentity':{
                                if(!_val){alert("身份证号码不能为空"); return;}
                                if(!milo.isIDCard(_val)){alert("身份证号码有误。"); return;}
                                break;
                            }
                            case 'sMobile':{
                                if(!_val){alert("手机号码不能为空"); return;}
                                if(isNaN(_val) || _val.indexOf('.') >= 0){alert("手机号码必须为数字。"); return;}
                                if(_val.length > 11){alert("手机号码不得超过11位。"); return;}
                                break;
                            }
                            case 'sAddress':{
                                if(!_val){alert("详细地址不能为空"); return;}
                                if(milo.getByteLength(_val) > 100){alert("详细地址不能超过100个字节。"); return;}
                                break;
                            }
                            case 'sPostCode':{
                                if(!_val){alert("邮政编码不能为空"); return;}
                                if(milo.getByteLength(_val) > 8){alert("邮政编码不能超过8个字节。"); return;}
                                if(isNaN(_val) || _val.indexOf('.') >= 0){alert("邮政编码必须为数字。"); return;}
                                break;
                            }
                            case 'sProvince':{
                                if(!_val){alert("请选择省份"); return;}
                                break;
                            }
                            case 'sCity':{
                                if(!_val){alert("请选择城市"); return;}
                                break;
                            }
                            default : {}    
                        }
                    }
                    amsCfg_490222.sData = fillData;
                    amsSubmit(157439,490222);
                }
                g("colseLayer_490222").onclick = function(){
                    Dialog.hide();
                }

                if(g("province_"+490222).innerHTML != '') {
                    g("province_"+490222).innerHTML = '';
                }
                if(g("city_"+490222).innerHTML != '') {
                    g("city_"+490222).innerHTML = '';
                }
                pcs.show({
                    provinceId : "province_"+490222,
                    cityId : "city_"+490222
                });

                if(res.jData.sProvince != undefined) {
                    g('province_490222').value = res.jData.sProvince;
                }
                g('province_490222').onchange();
                if(res.jData.sCity != undefined){
                    g('city_490222').value = res.jData.sCity;
                }
                //发货订单:
                if(res.jData.sExtend1){
                    g('sExtend1_490222').innerHTML=res.jData.sExtend1;
                }
                delete res.jData.sProvince;
                delete res.jData.sCity;
                FormManager.setAllInputValue (res.jData, 'personInfoContent_490222');
            
                if(typeof res.jData.arrPackageInfo != 'undefined' && res.jData.arrPackageInfo.length > 0) {
                    document.getElementById('tr_package_490222').style.display = '';
                    var package_id = document.getElementById('package_490222');
                    for(var i=0; i<res.jData.arrPackageInfo.length; ++i) {  
                        var iPackageId = res.jData.arrPackageInfo[i].iPackageId;
                        var sPackageName = res.jData.arrPackageInfo[i].sPackageName;
                        package_id.options[i] = new Option(sPackageName, iPackageId + '|' + sPackageName);
                    }
                }
            });
            
        } else {
            alert(res.sMsg);    
        }
    }
};
milo.ready(function(){
    var date = new Date();

    var indexDate1 = parseInt(date.getDate()) - 24;//今天是第几天
            indexDate1 < 0 ? indexDate1 = 0 : 1;
            indexDate1 > 6 ? indexDate1 = 6 : 1;
            for(var i=0;i<indexDate1;i++){
               $('#dateLi li').eq(i).addClass('used');
            }
            
            $('.price li').eq(indexDate1).addClass("active");
             $('#dateLi li').eq(indexDate1).addClass('selected');
    milo.addEvent(g('fillPersonInfo_490222'),'click',function(){    
        LoginManager.submitLogin(function(){
            amsCfg_490222.sData = { iShow: 1 };
            amsSubmit(157439,490222);
        });
    });
});