//��ѯ�Ƿ�󶨵�����
amsCfg_485752={
    type : "query",
    iQueryFlowID:485752,
    service:"nfsol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����

    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

//�ύ�󶨵�����
amsCfg_485751={
    type : "comit",
    needPopupRole:true,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo:null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID:485752,
    service:"nfsol" ,
    success : function(bindedInfo){
        //�Ѱ�ʱ����չ����
    },
    failure : function(){
        //δ��ʱ����չ����
    }
};

// �齱��ȡ�����ܳ�ʼ��
amsCfg_485753 = amsCfg_485766 = amsCfg_485767 = amsCfg_485768 = amsCfg_485805 = amsCfg_485806 = amsCfg_485807 = amsCfg_486058 = amsCfg_486059 = amsCfg_486060 = amsCfg_486061 = {
    'iAMSActivityId' : '156056', // AMS���
    'activityId' : '217460', // ģ��ʵ����
    'onBeginGetGiftEvent' : function(){
        return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
    },
    'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
        showDia('dia');
    }
};

// ���˻񽱼�¼��ʼ��
amsCfg_485754 = {
    'activityId' : '156056', // AMS���
    "flowId":"485754",  //���̺�
    "moduleId":"217460",// ģ��ʵ����
    "extParam":{"pageNo":1,"pageSize":10},
    //�ύ�ɹ��Ļص� ����ѡ��
    'success':function(data){
        //��ȡģ��ӿڶ���
        var giftModule=window['myGiftList_485754'];
        need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
            //�����һ�ε����������ʾ����������Ⱦҳ��
            if ($("#tbody_485754").length==0){
                widget.dialog({"content":$("#tpl_dialog_485754").html(),
                    width:600,
                    topOffset:-200,
                    "complete":function(){
                        giftModule.renderPanel(data);
                    }
                });
            }else{
                //����Ƿ�ҳ�������ֱ����Ⱦҳ��
                giftModule.renderPanel(data);
            }
        });
    }

};

function ranklevel(val) {
    var rankgrade = {
        1: '����',
        2: '�������� I',
        3: '�������� II',
        4: '�������� III',
        5: '�������� IV',
        6: '�ƽ��� I',
        7: '�ƽ��� II',
        8: '�ƽ��� III',
        9: '�ƽ��� IV',
        10: '��ʯ���� I',
        11: '��ʯ���� II',
        12: '��ʯ���� III',
        13: '��ʯ���� IV',
        14: '���� I',
        15: '���� II',
        16: '���� III',
        17: '��Ʒ����'
    };
    if (val >= 1 && val <= 17) {
        return rankgrade[val];
    } else {
        return '����';
    }
}

function rankmark(mark) {
    var rankgrade = [0, 200, 500, 800, 1100, 1400, 1800, 2200, 2600, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 99999999];
    for (var i = 0; i <= 17; i++) {
        if (mark < rankgrade[i]) {
            return mark - rankgrade[i - 1];
        }
    }
}

function rankmark1(mark) {
    var rankgrade = [0, 200, 500, 800, 1100, 1400, 1800, 2200, 2600, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 99999999];
    for (var i = 0; i <= 17; i++) {
        if (mark < rankgrade[i]) {
            return i;
        }
    }
}

milo.ready(function(){
    need(["util.jquery","biz.login","biz.widget.base"],function($,LoginManager,widget){
        $("#button_485754").click(function(){
            amsSubmit(156056,485754);

        });

    });
});

function showRankList6 (page) {
    currentpage6=page;
    var html6 = "<li class=\"special\"><span>����</span><span>����ǳ�</span><span>��λ</span></li>";
    if (list6.length>0) {
        if (currentpage6==totalpage6) {
            for(var i=(page-1)*10; i<total6; i++){
                html6 += "<li><span>"+(i+1)+"</span><span>"+list6[i][2]+"</span><span>"+ranklevel(rankmark1(list6[i][0]))+' '+rankmark(list6[i][0])+"</span></li>";
            }
        }else{
            for(var i=(page-1)*10; i<page*10; i++){
                html6 += "<li><span>"+(i+1)+"</span><span>"+list6[i][2]+"</span><span>"+ranklevel(rankmark1(list6[i][0]))+' '+rankmark(list6[i][0])+"</span></li>";
            }            
        }
        $("#showpage").text(currentpage6+'/'+totalpage6); 
        $("#list6").html(html6);
    }
}

function showRankList1 (page) {
    currentpage1=page;
    var html1 = "<li class=\"special\"><span>����</span><span>����ǳ�</span><span>��λ</span></li>";
    if (list1.length>0) {
        if (currentpage1==totalpage1) {
            for(var i=(page-1)*10; i<total1; i++){
                html1 += "<li><span>"+(i+1)+"</span><span>"+list1[i][2]+"</span><span>"+ranklevel(rankmark1(list1[i][0]))+' '+rankmark(list1[i][0])+"</span></li>";
            }
        }else{
            for(var i=(page-1)*10; i<page*10; i++){
                html1 += "<li><span>"+(i+1)+"</span><span>"+list1[i][2]+"</span><span>"+ranklevel(rankmark1(list1[i][0]))+' '+rankmark(list1[i][0])+"</span></li>";
            }
        }
        $("#showpage").text(currentpage1+'/'+totalpage1); 
        $("#list1").html(html1);
    }
}

var list6 = '';
var total6 = 0;
var currentpage6 = 1;
var totalpage6 = 1;
var list1 = '';
var total1 = 0;
var currentpage1 = 1;
var totalpage1 = 1;

function showRank(){       
    if (rank_6v6_season[0].length>0) {
        total6 = rank_6v6_season[0].length;
        if (total6>500) {
            total6=500
        };
        list6 = rank_6v6_season[0];
        totalpage6 = Math.ceil(total6/10);
        showRankList6(1);            
    };

    if (rank_1v1_season[0].length>0) {
        total1 = rank_1v1_season[0].length;
        if (total1>500) {
            total1=500
        };
        list1 = rank_1v1_season[0];
        totalpage1 = Math.ceil(total1/10);
        showRankList1(1);        
    };
}

function go (page, type) {    
    if (page==='-1') {
        if ((window["currentpage"+type]-1)<1) {
            return;
        };
        window["currentpage"+type] = window["currentpage"+type]-1;
        window["showRankList"+type](window["currentpage"+type]);
        return;
    };

    if (page==='+1') {
        if ((window["currentpage"+type]+1)>window["totalpage"+type]) {
            return;
        };
        window["currentpage"+type] = window["currentpage"+type]+1;
        window["showRankList"+type](window["currentpage"+type]);
        return;
    };

    if (page<1) {
        alert('��������ȷ��ҳ�룡');
        return;
    };

    if (page>window["totalpage"+type]) {
        alert('��������ȷ��ҳ�룡');
        return;
    };

    window["currentpage"+type] = page;
    window["showRankList"+type](page);
}
