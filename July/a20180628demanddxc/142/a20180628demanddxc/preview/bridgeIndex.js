amsCfg_472349 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            if(str.indexOf('лл') != -1) {
                LotteryManager.alert(callbackObj.sPackageName);
            } else {
                LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
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
amsCfg_472350 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            if(str.indexOf('лл') != -1) {
                LotteryManager.alert(callbackObj.sPackageName);
            } else {
                LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
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
amsCfg_472351 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            if(str.indexOf('лл') != -1) {
                LotteryManager.alert(callbackObj.sPackageName);
            } else {
                LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
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
amsCfg_472353 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if(packageLen && packageLen.length > 1){
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }

        //1��ʵ��
        if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
            var str = callbackObj.sPackageName;
            if(str.indexOf('лл') != -1) {
                LotteryManager.alert(callbackObj.sPackageName);
            } else {
                LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            }
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
var message1 = '';
var packageList1 = {885823:0,885824:1,885825:2,885826:3,885827:4,885828:5,885829:6,885830:7,885831:8,885832:9,885833:10,885834:11,885835:12,885836:13,885837:14,};
amsCfg_472354 = {
    'iAMSActivityId' : iActivityId, // AMS���
    'activityId' : iLotteryId, // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
        SWFOBJ1.enable();
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        var myids = callbackObj.iPackageId.split(',');
        var item = packageList1[myids[0]];
        calllotteryToRoll1(item);
        message1 = callbackObj.sMsg;
        SWFOBJ1.enable();
    }
};
window.callJsToStart1 = function(){
    amsSubmit(iActivityId,472354);
}
window.calllotteryToRoll1 = function(id){
    if(SWFOBJ1)SWFOBJ1.stopRoll(id);
    PTTSendClick('lottery','award'+id,'��Ʒ');
}
window.callJsToComplete1 = function(){
    PTTSendClick('lottery','complete','�齱���');
    alert(message1);
}


