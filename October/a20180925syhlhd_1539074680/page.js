    var Skey = '';
   //查询是否绑定的配置
    amsCfg_500911={
        type : "query",
        iQueryFlowID:500911,
        service:"x5" ,
        success : function(bindedInfo){
            //已绑定时的扩展处理
            amsSubmit(162509,500932);  //查询
            ChaXun();

        },
        failure : function(){
            //未绑定时的扩展处理
            amsSubmit(162509,500932); //查询
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
            ChaXun();
        },
        failure : function(){
            //未绑定时的扩展处理
        }
    };

   //调用，查询是否已经绑定
   // milo.ready(function(){
   //             amsInit(162509, 500911);
   //         }
   // );
   
    //提交请求至AME 查询指定code 电量
    amsCfg_500940 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500940, //流程id
        'sData': {iTarget: '邀请人的QQ号'},
        "fFlowSubmitEnd": function(res){
            var tempstep  = parseInt(res.sOutValue1);
            for(var i=0;i<11;i++){
                if(i==tempstep){
                    $(".state").find("img").eq(i).attr("class","s-img img-on");
                }else{
                    $(".state").find("img").eq(i).attr("class","s-img");
                }
            }
            //alert('返回数据为:' + res);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            //alert(res.sMsg);
            // $(".c2-charts").attr("a",0);
            // animate();
            // $("#bag01").removeClass('c2-active');
            // $("#bag02").removeClass('c2-active');
            // $("#bag03").removeClass('c2-active');
            // $("#bag04").removeClass('c2-active');
        }
    };

    amsCfg_500932 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500932, //流程id
        "fFlowSubmitEnd": function(res){
            var temp01  = parseInt(res.sOutValue1);
            //alert('返回数据为:' + res);
            console.log(temp01);
              
            if(temp01==0){  //活跃
                $(".z-luck").attr("style","display:none;");
                $(".z-zs").attr("style","display:block;");

            }else{

                $(".z-luck").attr("style","display:block;");
                $(".z-zs").attr("style","display:none;");

            }
            
            return;
        },
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };

    function ChaXun()  ///查询QQ发电量
    {
        var code = milo.request('qq');
        
        if(code=='')
        {
            alert('请通过好友生成的邀请链接进入页面再来发电！');
            return;
        }

        
        if(code != ''&& code != null && code != undefined){

            amsCfg_500940.sData.iTarget = code;
            amsSubmit(162509,500940); // 查询电量
            amsCfg_500941.sData.iTarget = code;
            amsSubmit(162509,500941); //查询邀请的好友

        }else{
            alert('请通过好友生成的邀请链接进入页面再来发电！');
            return;
        }

        
    }

    //提交请求至AME  发电
    amsCfg_500925 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500925, //流程id
        'sData': {iTarget: '邀请人的QQ号'},
        "fFlowSubmitEnd": function(res){
           
            //alert(res.sMsg);
            //alert("恭喜，成功助力了好友");

            var packageLen = res.iPackageId ? res.iPackageId.split(',') : '';
            if(packageLen && packageLen.length > 1){
                alert(res.sMsg);
                return;
            }
        
            
            alert(res.sMsg);
            ChaXun();
            return;
        },
        /*
        "fFlowProssFailed":function(res){
            //自己处理执行失败的逻辑
            //动作执行失败，ame返回小于0是后走到这里
            //res 内容如下
            console.log(res);
           // res = {
           //     iRet:"-1",
            //    sLogSerialNum:"AMS-FS-0918100248-bUF5M6-4757-34879",    
           //     sMsg:"目前访问人数过多！请稍后再试！谢谢！"
            //}
        },*/
        "fFlowSubmitFailed":function(res){
            //失败会走到这个函数
            //条件不满足，ame返回大于0是后走到这里
            alert(res.sMsg);
        }
    };



    function FaDian()  ///查询QQ发电量
    {
        var code = milo.request('qq');
        
        if(code=='')
        {
            alert('请通过好友生成的邀请链接进入页面再来发电！');
            return;
        }

        
        if(code != ''&& code != null && code != undefined){

            amsCfg_500925.sData.iTarget = code;
            amsSubmit(162509,500925); // 接受邀请

        }else{
            alert('请通过好友生成的邀请链接进入页面再来发电！');
            return;
        }

        
    }


    //提交请求至AME
    amsCfg_500941 = {
        "iActivityId": 162509, //活动id   
        "iFlowId":    500941, //流程id
        'sData': {iTarget: '邀请人的QQ号'},
        "_everyRead" : true,
        "fFlowSubmitEnd": function(res){
            //alert('返回数据为:' + res);
            console.log(res);
            if(res.jData.iTotal==0){
                console.log('no');

            }else{
                var temp ='';
                for(var i =0;i<res.jData.jData.length;i++){
                    temp = temp +'<li>好友<span>'+res.jData.jData[i].sCondition1+'</span>成功帮他'+'装水<span>'+res.jData.jData[i].sCondition3+'L</span></li>';

                    console.log(res.jData.jData.length);
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

    //amsSubmit(162509,500941);

   
