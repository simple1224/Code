//CP����
if(!getUrlParam("debug")){
    initTemplateHtml();
    initTemplateEvent();
    initLotteryEvent();
    initCommonEvent();
}else{
    setTimeout(function(){
        initTemplateHtml();
        initTemplateEvent();
        initLotteryEvent();
    },10)
}


// <!-- Encoding: GBK -->
//����json
function formatJson(str,data){
    var fn = !/\W/.test(str)?
        formatJson(document.getElementById(str).innerHTML) :
        new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +
            "with(obj){p.push('" +str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'") + "');}return p.join('');");
    return data ? fn( data ) : fn;
}

//��ʼ��ҳ��ĵ����Ľṹ
function initTemplateHtml() {
    //��Ⱦͷͼ
    $('#tabFocus').attr('src',window.tabFocusImg);
    var navHtml = '';
    var recordHtml = '';
    for(var i=0; i<popupJson.length; i++){
        recordHtml += formatJson($('#temple'+i).html(),{data:popupJson[i]});
        navHtml += formatJson($('#templeNav').html(),{data:popupJson[i]});
    }
    $('#recordDom').html(recordHtml);
    $('#navDom').html(navHtml);
}
//��ʼ��ҳ����¼�
function initTemplateEvent(){
    if(typeof(pgvMain) == 'function')pgvMain({statIframe: true});
    if(!popup.isMobile()) {PTTSendClick('useragent','pc','PC����');}
    else{PTTSendClick('useragent','mobile','�ƶ��˷���');}

    popup.on(popup.$("tabBd"), "click", popup.bind(this, pttClick));
    new Tab(popup.$("popup"),popup.getUrlParam("tabId")); //ѡ���ʼ��
}
//��ʼ�������¼�
function initCommonEvent() {
    document.domain = "qq.com";
    //��¼
    milo.addEvent(g("dologin"), "click", function() {
        need("biz.login",function(LoginManager){
            LoginManager.init({
                needReloadPage:false
            });
            LoginManager.login(function(){
                g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��

                loginCallBack();
            });
        });
        return false;
    });

    milo.addEvent(g("dologout"), "click", function() {
        need("biz.login",function(LoginManager){
            if(_isMobile_()){
                LoginManager.logout();
                setTimeout(function(){ window.location.reload();},1000)
            }else{
                LoginManager.logout();
            }
        });
        return false;
    });

    milo.ready(function() {
        need("biz.login",function(LoginManager){
            LoginManager.checkLogin(function(){
                g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��

                document.getElementById('unlogin').style.display="none";
                document.getElementById('logined').style.display="block";

                loginCallBack();
            });
        });
    });

    window['no_webtips_flag'] = true;

    // ����
    window.TGDialogS = function(e){
        need("biz.dialog",function(Dialog){
            Dialog.show({
                id:e,
                bgcolor:'#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
                opacity:70 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
            });
        });
    }

    window.closeDialog = function(){
        need("biz.dialog",function(Dialog){
            Dialog.hide();
        });
    }
     
    window.alert = function(s){
        TGDialogS('showAlert');
     
        document.getElementById('showAlertContent').innerHTML = s;

    }
    //�޸İ󶨴���ID����ӦAMS
    $("#spanNotBind").attr("id","spanNotBind_"+iInitAreaId);
    $("#spanBind").attr("id","spanBind_"+iInitAreaId);
    $("#area_info").attr("id","area_info_"+iInitAreaId);
    $("#role_info").attr("id","role_info_"+iInitAreaId);

    // ��¼��ص�  ��ѯ�󶨴���/��ѯ�û����� 
    function loginCallBack(){
        // ��ʼ���󶨴���
        amsInit(iActivityId, iInitAreaId);
    }

    // �󶨴�������
    window.showSelectZone = function(){
        need("biz.login",function(LoginManager){
            LoginManager.checkLogin(function(){
                amsInit(iActivityId, iBindAreaId);
            }, function(){
                LoginManager.init({
                    needReloadPage:false
                });
                LoginManager.login(function(){
                    g("login_qq_span").innerHTML = LoginManager.getUserUin();//��ȡQQ��
                     
                    loginCallBack();
                });        
            });
        });
    }

    //��ѯ�Ƿ�󶨵�����
    amsCfg_initArea={
        type : "query",
        iQueryFlowID:iInitAreaId,
        service:sService ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����

        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    var amsCfg_initArea_tmp = "amsCfg_"+iInitAreaId+"=amsCfg_initArea;"; // amsCfg_373024
    eval(amsCfg_initArea_tmp);

    //�ύ�󶨵�����
    amsCfg_bindArea={
        type : "comit",
        iQueryFlowID:iInitAreaId,
        service:sService ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            alert("��ϲ�������Ѿ��ɹ�����Ϸ������");
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

    var amsCfg_bindArea_tmp = "amsCfg_"+iBindAreaId+"=amsCfg_bindArea;"; // amsCfg_373024
    eval(amsCfg_bindArea_tmp);

    // �ҵ�����رն���
    window.giftDialogHide = function(){
        need("biz.dialog",function(Dialog){
            Dialog.hide();
        });
    }
     
    // ���˻񽱼�¼��ʼ��
    amsCfg_myList = {
        'iAMSActivityId' : iActivityId, // AMS���
        'iLotteryFlowId' : iMyListId, //  ��ѯ���ֲ������̺�
        'activityId' : iLotteryId, // ģ��ʵ����
        'isForce' : true,
        'contentId' : 'getGiftContent', //����ID
        'templateId' : 'getGiftTemplate', //ģ��ID
        'contentPageId' : 'getGiftPageContent', //��ҳ����ID
        'showContentId' : 'showMyGiftContent' //������ID
    };

    var amsCfg_myList_tmp = "amsCfg_"+iMyListId+"=amsCfg_myList;"; // amsCfg_373024
    eval(amsCfg_myList_tmp);

    window.showMyGiftList = function(){
        amsSubmit(iActivityId,iMyListId);
    }


}
function initLotteryEvent(){
// Encoding: GBK

if(document.getElementById('lotteryBox15')) {
    window.SWFOBJ1= new Lottery({
        'lighturl':'http://game.gtimg.cn/images/codo/2017/atemple/img/sel.png',//�ⲿ��Ȧpng  ����д����Ĭ�ϵ�Ч��  105 209
        'width':826,//flash ���
        'height':395,//flash �߶�
        'total':15,//�齱��Ʒ������
        'sbtnx':276,// ��ʼ�齱��ť��λ��x����
        'sbtny':326 ,// ��ʼ�齱��ť��λ��y����
        'sbtnw':274,// ��ʼ�齱��ť�Ŀ��
        'sbtnh':69,// ��ʼ�齱��ť�ĸ߶�
        'boxw':164,// ��Ʒ��Ч�Ŀ��
        'boxh':103,//��Ʒ��Ч�ĸ߶�
        'position':"1_1,166_1,331_1,496_1,661_1,1_105,166_105,331_105,496_105,661_105,1_209,166_209,331_209,496_209,661_209",
        'contentId' : 'lotteryBox15',
        'onClickRollEvent' : callJsToStart1,
        'onCompleteRollEvent':callJsToComplete1
    });

}


};