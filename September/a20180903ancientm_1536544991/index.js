    //��ѯ�Ƿ�󶨵�����
    amsCfg_492152={
        type : "query",
        iQueryFlowID:492152,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            //amsSubmit(158725,492158);
            amsSubmit(158725,492153)

        },
        failure : function(){
            //δ��ʱ����չ����
            amsSubmit(158725,492158);
        }
    };

    //�ύ�󶨵�����
    amsCfg_492151={
        type : "comit",
        needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
        roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
        iQueryFlowID:492152,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            //amsSubmit(158725,492158);
            amsSubmit(158725,492153)
        },
        failure : function(){
            //δ��ʱ����չ����
            amsSubmit(158725,492158);
        }
    };


    //���ã���ѯ�Ƿ��Ѿ���
   // milo.ready(function(){
   //             amsInit(158725, 492152);
   //         }
   // );
   
    // �齱��ȡ�����ܳ�ʼ��
    
    amsCfg_492274 = {
        'iAMSActivityId' : '158725', // AMS���
        'activityId' : '219785', // ģ��ʵ����
        'sData' : {'times':'1'}, 
        '_everyRead' : true,
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
            if(packageLen && packageLen.length > 1){
                
                //LotteryManager.alert(callbackObj.sMsg);
                alert(callbackObj.sMsg);
                amsSubmit(158725,492158);
                return;
            }
            alert(callbackObj.sMsg);
            amsSubmit(158725,492158);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    function myreg(strs){
        var reg = RegExp(/:/);
        if(strs.match(reg)){
            return true;
        }else{
            return false;
        }
    }
    

    function get(times) {
        if(times != 1 && times != 10){
            return;
        }
        amsCfg_492274.sData.times = times;
        amsSubmit(158725,492274);
    }

    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_492276 = amsCfg_492499 = amsCfg_492511 = amsCfg_492513 = {
        'iAMSActivityId' : '158725', // AMS���
        'activityId' : '219785', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            amsSubmit(158725,492158);
            alert(callbackObj.sMsg);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // �齱��ȡ�����ܳ�ʼ��
    amsCfg_492160 = amsCfg_492272 = amsCfg_492273 = {
        'iAMSActivityId' : '158725', // AMS���
        'activityId' : '219785', // ģ��ʵ����
        'onBeginGetGiftEvent' : function(){
            return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
        },
        'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
            alert(callbackObj.sMsg);
        },
        'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
            amsSubmit(158725,492158);
            alert(callbackObj.sMsg);
            //LotteryManager.alert(callbackObj.sMsg);
        }
    };

    // �齱�ֲ����ܳ�ʼ��
    amsCfg_492155 = {
        'activityId' : '158725', // ģ��ʵ����
        'contentId' : 'broadcastContent_492155', //����ID
        'templateId' : 'broadcastTemplate_492155', //ģ��ID
        'showLiNum' : 10
    };
    milo.ready(function(){
        amsInit(158725,492155);
    });


    //�ύ������AME
    amsCfg_492158 = {
        "iActivityId": 158725, //�id   
        "iFlowId":    492158, //����id
        "sNeedSubmitPopDiv":  true , // �Ƿ���loading��
        "fFlowSubmitEnd": function(res){
            //alert('��������Ϊ:' + res);
            var temp01 = parseInt(res.sOutValue1);
            var temp02 = parseInt(res.sOutValue2);
            $("#yinfu").text(temp01);
            $("#yuepu").text(temp02);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            alert(res.sMsg);
        }
    };


amsCfg_492153 = {
    'iAMSActivityId' : '158725', // AMS���
    'activityId' : '219785', // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        //alert(callbackObj.sMsg);
        amsSubmit(158725,492158);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        amsSubmit(158725,492158);
        //LotteryManager.alert(callbackObj.sMsg);
    }
};