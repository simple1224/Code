// �齱��ȡ�����ܳ�ʼ��
amsCfg_480044 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480123 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        alert("��ϲ��ŷ������е�ϲȵ");
        amsSubmit(153612,480239);
        return; 
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480162 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480239 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
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
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480248 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480250 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480268 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// �齱��ȡ�����ܳ�ʼ��
amsCfg_480269 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'activityId' : '215102', // ģ��ʵ����
    'onBeginGetGiftEvent' : function ()
    {
        return 0;
        // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function (callbackObj)
    {
        // �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function (callbackObj)
    {
        // �齱�ɹ��¼�
        var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
        if (packageLen && packageLen.length > 1) {
            LotteryManager.alert(callbackObj.sMsg);
            return;
        }
        //1��ʵ��
        if ((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1)
        {
            /*
                 * 0��������Ϸ��Ʒ
                 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
                 * 2��cdkey
                 */
            LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
            return;
        }
        //2��cdkey
        if (callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey)
        {
            // �µĴ���
            if (callbackObj.sPackageCDkey)
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageCDkey + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
            else
            {
                LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\'' + callbackObj.sPackageOtherInfo + '\'); alert(\'���Ƴɹ���\');">');
                return;
            }
        }
        LotteryManager.alert(callbackObj.sMsg);
    }
};
// ���˻񽱼�¼��ʼ��
amsCfg_480045 = 
{
    'iAMSActivityId' : '153612', // AMS���
    'iLotteryFlowId' : '480045', //  ��ѯ���ֲ������̺�
    'activityId' : '215102', // ģ��ʵ����
    'contentId' : 'getGiftContent_480045', //����ID
    'templateId' : 'getGiftTemplate_480045', //ģ��ID
    'contentPageId' : 'getGiftPageContent_480045', //��ҳ����ID
    'showContentId' : 'showMyGiftContent_480045' //������ID
};
//��ѯ�Ƿ�󶨵�����
amsCfg_480048 = 
{
    type : "query", iQueryFlowID : 480048, service : "nz" ,
    success : function (bindedInfo)
    {
        amsSubmit(153612,480239);
    },
    failure : function ()
    {
        //δ��ʱ����չ����
    }
};
//�ύ�󶨵�����
amsCfg_480047 = 
{
    type : "comit", needPopupRole : true, //�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo : null, //���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID : 480048, service : "nz" ,
    success : function (bindedInfo)
    {
        //�Ѱ�ʱ����չ����
    },
    failure : function ()
    {
        //δ��ʱ����չ����
    }
};
//���ã���ѯ�Ƿ��Ѿ���
milo.ready(function ()
{
    amsInit(153612, 480048);
} );
