    var Skey = '';
   //��ѯ�Ƿ�󶨵�����
    amsCfg_500911={
        type : "query",
        iQueryFlowID:500911,
        service:"x5" ,
        success : function(bindedInfo){
            //�Ѱ�ʱ����չ����
            amsSubmit(162509,500932);  //��ѯ
            ChaXun();

        },
        failure : function(){
            //δ��ʱ����չ����
            amsSubmit(162509,500932); //��ѯ
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
            ChaXun();
        },
        failure : function(){
            //δ��ʱ����չ����
        }
    };

   //���ã���ѯ�Ƿ��Ѿ���
   // milo.ready(function(){
   //             amsInit(162509, 500911);
   //         }
   // );
   
    //�ύ������AME ��ѯָ��code ����
    amsCfg_500940 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    500940, //����id
        'sData': {iTarget: '�����˵�QQ��'},
        "fFlowSubmitEnd": function(res){
            var tempstep  = parseInt(res.sOutValue1);
            for(var i=0;i<11;i++){
                if(i==tempstep){
                    $(".state").find("img").eq(i).attr("class","s-img img-on");
                }else{
                    $(".state").find("img").eq(i).attr("class","s-img");
                }
            }
            //alert('��������Ϊ:' + res);
            return;
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
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
        "iActivityId": 162509, //�id   
        "iFlowId":    500932, //����id
        "fFlowSubmitEnd": function(res){
            var temp01  = parseInt(res.sOutValue1);
            //alert('��������Ϊ:' + res);
            console.log(temp01);
              
            if(temp01==0){  //��Ծ
                $(".z-luck").attr("style","display:none;");
                $(".z-zs").attr("style","display:block;");

            }else{

                $(".z-luck").attr("style","display:block;");
                $(".z-zs").attr("style","display:none;");

            }
            
            return;
        },
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            alert(res.sMsg);
        }
    };

    function ChaXun()  ///��ѯQQ������
    {
        var code = milo.request('qq');
        
        if(code=='')
        {
            alert('��ͨ���������ɵ��������ӽ���ҳ���������磡');
            return;
        }

        
        if(code != ''&& code != null && code != undefined){

            amsCfg_500940.sData.iTarget = code;
            amsSubmit(162509,500940); // ��ѯ����
            amsCfg_500941.sData.iTarget = code;
            amsSubmit(162509,500941); //��ѯ����ĺ���

        }else{
            alert('��ͨ���������ɵ��������ӽ���ҳ���������磡');
            return;
        }

        
    }

    //�ύ������AME  ����
    amsCfg_500925 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    500925, //����id
        'sData': {iTarget: '�����˵�QQ��'},
        "fFlowSubmitEnd": function(res){
           
            //alert(res.sMsg);
            //alert("��ϲ���ɹ������˺���");

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
            //�Լ�����ִ��ʧ�ܵ��߼�
            //����ִ��ʧ�ܣ�ame����С��0�Ǻ��ߵ�����
            //res ��������
            console.log(res);
           // res = {
           //     iRet:"-1",
            //    sLogSerialNum:"AMS-FS-0918100248-bUF5M6-4757-34879",    
           //     sMsg:"Ŀǰ�����������࣡���Ժ����ԣ�лл��"
            //}
        },*/
        "fFlowSubmitFailed":function(res){
            //ʧ�ܻ��ߵ��������
            //���������㣬ame���ش���0�Ǻ��ߵ�����
            alert(res.sMsg);
        }
    };



    function FaDian()  ///��ѯQQ������
    {
        var code = milo.request('qq');
        
        if(code=='')
        {
            alert('��ͨ���������ɵ��������ӽ���ҳ���������磡');
            return;
        }

        
        if(code != ''&& code != null && code != undefined){

            amsCfg_500925.sData.iTarget = code;
            amsSubmit(162509,500925); // ��������

        }else{
            alert('��ͨ���������ɵ��������ӽ���ҳ���������磡');
            return;
        }

        
    }


    //�ύ������AME
    amsCfg_500941 = {
        "iActivityId": 162509, //�id   
        "iFlowId":    500941, //����id
        'sData': {iTarget: '�����˵�QQ��'},
        "_everyRead" : true,
        "fFlowSubmitEnd": function(res){
            //alert('��������Ϊ:' + res);
            console.log(res);
            if(res.jData.iTotal==0){
                console.log('no');

            }else{
                var temp ='';
                for(var i =0;i<res.jData.jData.length;i++){
                    temp = temp +'<li>����<span>'+res.jData.jData[i].sCondition1+'</span>�ɹ�����'+'װˮ<span>'+res.jData.jData[i].sCondition3+'L</span></li>';

                    console.log(res.jData.jData.length);
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

    //amsSubmit(162509,500941);

   
