//��ѯ�Ƿ�󶨵�����
    amsCfg_489337={
        type : "query",
        iQueryFlowID:489337,
        service:"nz" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(157439,489409);
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    //�ύ�󶨵�����
    amsCfg_489336={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:489337,
        service:"nz" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(157439,489409);
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

   // �齱��ȡ�����ܳ�ʼ��
    amsCfg_489351 = {
        'iAMSActivityId' : '157439', // AMS���
        'activityId' : '218832', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
            lottery.reset();
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            amsSubmit(157439,489409);
           calllotteryToRoll(callbackObj)
        }
    };
                
    amsCfg_489355 = amsCfg_489369 = amsCfg_489370 = amsCfg_489371 = {
        'iAMSActivityId' : '157439', // AMS���
        'activityId' : '218832', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            amsSubmit(157439,489409);
             alert("��ϲ��ɹ����һ�γ齱����~");
           
        }
    };

    // ���˻񽱼�¼��ʼ��
amsCfg_489352 = {
    'iAMSActivityId' : '157439', // AMS���
    'iLotteryFlowId' : '489352', //  ��ѯ���ֲ������̺�
    'activityId' : '218832', // ģ��ʵ����
    'contentId' : 'getGiftContent_489352', //����ID
    'templateId' : 'getGiftTemplate_489352', //ģ��ID
    'contentPageId' : 'getGiftPageContent_489352',  //��ҳ����ID
    'showContentId' : 'showMyGiftContent_489352' //������ID
};


//�ύ������AME
    amsCfg_489409 = {
        "iActivityId": 157439, //�id   
        "iFlowId":    489409, //����id
        "fFlowSubmitEnd": function(res){
            $(".choujiang").html(res.sOutValue1);
            // var indexDate = parseInt(res.sOutValue1) - 24;//�����ǵڼ���
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


    //�ύ������AME
    amsCfg_490232 = {
        "iActivityId": 157439, //�id   
        "iFlowId":    490232, //����id
        "fFlowSubmitEnd": function(res){
            if(parseInt(res.jData.iTotal) <= 0){
                alert("��Ǹ����δ���н�����~");
                return;
            }else{
                var htmlStr = '<li class="special">QQ��</li><li class="special">�ǳ�</li>';
                var qq_str = res.jData.jData[0].iUin.substring(0,3)+"***"+res.jData.jData[0].iUin.substring(5,15)
                htmlStr += '<li>'+qq_str+'</li><li>'+decodeURIComponent(res.jData.jData[0].sName)+'</li>';
                $("#dia ul").html(htmlStr);
            }
            showDia('dia')

        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            alert(res.sMsg);
        }
    };

    function chakan(dDate,iFlag){
        amsCfg_490232.sData={'dDate':dDate,'iFlag':iFlag};
        amsSubmit(157439,490232);
    }

    amsCfg_490222 = {
    'iActivityId' : '157439', // AMS���
    'iFlowId' : '490222', // ���̺�
    '_everyRead' : true,
    'fFlowSubmitEnd': function(res) {
        if(typeof res.jData == "object") { //�����Ѿ��ύ�����ݣ����ҳ��
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
                                if(!_val){alert("��������Ϊ��"); return;}
                                if(milo.getByteLength(_val) > 30){alert("�������Ȳ��ܳ���30���ֽڡ�"); return;}
                                break;
                            }
                            case 'sGender':{
                                if(!_val){alert("�Ա����ѡ��"); return;}
                                break;
                            }
                            case 'sIdentity':{
                                if(!_val){alert("���֤���벻��Ϊ��"); return;}
                                if(!milo.isIDCard(_val)){alert("���֤��������"); return;}
                                break;
                            }
                            case 'sMobile':{
                                if(!_val){alert("�ֻ����벻��Ϊ��"); return;}
                                if(isNaN(_val) || _val.indexOf('.') >= 0){alert("�ֻ��������Ϊ���֡�"); return;}
                                if(_val.length > 11){alert("�ֻ����벻�ó���11λ��"); return;}
                                break;
                            }
                            case 'sAddress':{
                                if(!_val){alert("��ϸ��ַ����Ϊ��"); return;}
                                if(milo.getByteLength(_val) > 100){alert("��ϸ��ַ���ܳ���100���ֽڡ�"); return;}
                                break;
                            }
                            case 'sPostCode':{
                                if(!_val){alert("�������벻��Ϊ��"); return;}
                                if(milo.getByteLength(_val) > 8){alert("�������벻�ܳ���8���ֽڡ�"); return;}
                                if(isNaN(_val) || _val.indexOf('.') >= 0){alert("�����������Ϊ���֡�"); return;}
                                break;
                            }
                            case 'sProvince':{
                                if(!_val){alert("��ѡ��ʡ��"); return;}
                                break;
                            }
                            case 'sCity':{
                                if(!_val){alert("��ѡ�����"); return;}
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
                //��������:
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

    var indexDate1 = parseInt(date.getDate()) - 24;//�����ǵڼ���
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