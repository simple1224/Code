//查询是否绑定的配置
amsCfg_485752={
    type : "query",
    iQueryFlowID:485752,
    service:"nfsol" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理

    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

//提交绑定的配置
amsCfg_485751={
    type : "comit",
    needPopupRole:true,//是否弹默认角色框选角色
    roleInfo:null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID:485752,
    service:"nfsol" ,
    success : function(bindedInfo){
        //已绑定时的扩展处理
    },
    failure : function(){
        //未绑定时的扩展处理
    }
};

// 抽奖领取主功能初始化
amsCfg_485753 = amsCfg_485766 = amsCfg_485767 = amsCfg_485768 = amsCfg_485805 = amsCfg_485806 = amsCfg_485807 = amsCfg_486058 = amsCfg_486059 = amsCfg_486060 = amsCfg_486061 = {
    'iAMSActivityId' : '156056', // AMS活动号
    'activityId' : '217460', // 模块实例号
    'onBeginGetGiftEvent' : function(){
        return 0; // 抽奖前事件，返回0表示成功
    },
    'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
        alert(callbackObj.sMsg);
    },
    'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
        showDia('dia');
    }
};

// 个人获奖记录初始化
amsCfg_485754 = {
    'activityId' : '156056', // AMS活动号
    "flowId":"485754",  //流程号
    "moduleId":"217460",// 模块实例号
    "extParam":{"pageNo":1,"pageSize":10},
    //提交成功的回调 （必选）
    'success':function(data){
        //获取模块接口对象
        var giftModule=window['myGiftList_485754'];
        need(["util.jquery","util.template","biz.widget.base"],function($,TemplateManager,widget){
            //如果第一次点击，则先显示弹出框，在渲染页面
            if ($("#tbody_485754").length==0){
                widget.dialog({"content":$("#tpl_dialog_485754").html(),
                    width:600,
                    topOffset:-200,
                    "complete":function(){
                        giftModule.renderPanel(data);
                    }
                });
            }else{
                //如果是翻页的情况，直接渲染页面
                giftModule.renderPanel(data);
            }
        });
    }

};

function ranklevel(val) {
    var rankgrade = {
        1: '车手',
        2: '白银车手 I',
        3: '白银车手 II',
        4: '白银车手 III',
        5: '白银车手 IV',
        6: '黄金车手 I',
        7: '黄金车手 II',
        8: '黄金车手 III',
        9: '黄金车手 IV',
        10: '钻石车手 I',
        11: '钻石车手 II',
        12: '钻石车手 III',
        13: '钻石车手 IV',
        14: '车神 I',
        15: '车神 II',
        16: '车神 III',
        17: '极品车神'
    };
    if (val >= 1 && val <= 17) {
        return rankgrade[val];
    } else {
        return '车手';
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
    var html6 = "<li class=\"special\"><span>排名</span><span>玩家昵称</span><span>段位</span></li>";
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
    var html1 = "<li class=\"special\"><span>排名</span><span>玩家昵称</span><span>段位</span></li>";
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
        alert('请输入正确的页码！');
        return;
    };

    if (page>window["totalpage"+type]) {
        alert('请输入正确的页码！');
        return;
    };

    window["currentpage"+type] = page;
    window["showRankList"+type](page);
}
