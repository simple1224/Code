//OPPO相关代码
var nativeFuc = {


    //按钮
    btnName: {
        downBtn:'#oppo-down-btn'
    },
    //游戏相关心信息
    gameInfo: {
        appName: "QQ炫舞",
        pkg: "com.tencent.tmgp.qqx5",
        appId: 3655115,
        versionId: 20584451,
        isDown: 1,
        actId: 5044
    },
    init: function() {
        var _this = this;
        //绑定OPPO下载事件-id可以替换成按钮id
        $(_this.btnName.downBtn).click(function() {
            if (typeof android != "undefined" && typeof android.isInstalled != "undefined") {
                if (!_this.isInstalled(_this.gameInfo.pkg)) {
                    if (_this.gameInfo.isDown == 1) {
                        _this.gameInfo.isDown = 0;
                        _this.makeToast(_this.gameInfo.appName + "已经开始下载,请到下载管理界面查看");
                        _this.downloadGameByPackageName(_this.gameInfo.pkg, _this.gameInfo.appId, _this.gameInfo.versionId);
                        _this.getStatic(3, _this.gameInfo.pkg);//下载统计
                    } else {
                        _this.makeToast(_this.gameInfo.appName + "正在下载,请到下载管理界面查看");
                    }
                } else {
                    _this.openGame(_this.gameInfo.pkg);
                    _this.getStatic(4, _this.gameInfo.pkg);//打开统计
                }
            } else {
                //浏览器下载
                // window.location.href="https://peng.qq.com/act/171225OPPO.html";
                 alert("oppo用户专享！");
            }

        });

        /*$(_this.btnName.videoBtn).click(function() {
            if (typeof android != "undefined") {
                var href = $(this).attr('href');
                android.openVideoPlayer(href);
            } else {
                
            }
        });*/

        //统计pv
        if (typeof android != "undefined" && typeof android.isInstalled != "undefined") {
            this.getStatic(1, "");
        }
    },

    isGame: function() {
        if (typeof android != "undefined") {
            if (typeof android.getLoginInfo != "undefined") {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    },
    mobileModel: function() {
        if (typeof android != "undefined") {
            if (typeof android.getLoginInfo != "undefined") {
                var str = android.getLoginInfo();
                var arr = str.split(';');
                return arr[1];
            } else {
                console.log("no support")
            }
        } else {
            console.log("no support");
        }
    },


    openGame: function(pkg) {
        if (this.isGame()) {
            android.openGame(pkg);
        } else {
            android.openApp(pkg);
        }
    },
    downloadGameByPackageName: function(pkg, masterId, pid) {
        if (this.isGame()) {
            android.downloadGameByPackageName(masterId, "name");
        } else {
            android.downloadByPid(pid);
        }
    },

    isInstalled: function(pkg) {
        // return false;
        if (typeof android != "undefined") {
            if (this.isGame()) {
                if (android.isInstalled(pkg) == "TRUE") {
                    return true;
                } else {
                    return false;
                }
            } else {
                return android.isInstalled(pkg);
            }
        } else {
            return false;
        }
    },
    makeToast: function(msg) {
        android.makeToast(msg);
    },

    getEnv: function(key) {
        var p = {
            clz: "KekeGameClient",
            method: "getEnv",
            args: {"key": key}
        };
        var result = prompt(JSON.stringify(p));
        return result;
    },

    getStatic: function(type, string) {
        var _this = this;
        var obj = {
            "event": "100106",
            "tags": {
                "name": 603,
                "imei": _this.getEnv("imei"),                                    //设备标识
                "model": _this.getEnv("model"),                                  //机型
                "gc30": _this.getEnv("userId"),                                  //用户token
                "c": _this.isGame() ? "apk" : "rs",                                      //渠道号,apk-游戏中心 sdk-游戏中心sdk rs-软件商店
                "networkId": _this.getEnv("network"),                            //网络类型
                "id": _this.gameInfo.actId,                                      //活动id
                "type": type,                                                        //统计的行为，通过参数传值
                "obj": string                                                        //行为相关联参数，以字符串的形式传值，有多个属性用”|“隔开
            },
            "timestamp": new Date().getTime()

        };

        var str = encodeURIComponent(JSON.stringify(obj));
        var url = "//epoch.cdo.oppomobile.com/soporcollect/appevent/activite?data=" + str + "&callback=showStatic";
        var script = document.createElement("script");
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
};
nativeFuc.init();