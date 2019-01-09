var _url = "//game.gtimg.cn/images/actdaoju/act/a20180911movestart/";
var allGoods = {
	"958971": ["0", "动天使", "img1.png"], //
	"958972": ["103006,103004,103064,103066,100624,100922,101389,101396", "飓风之神-龙啸", "img2.png"],
	"958973": ["102430", "MSR-电离对撞", "img3.png"],
	"958974": ["102871", "地狱烈焰犬", "img4.png"],
	"958975": ["103056,103057", "血魄之戒", "img5.png"],
	"958976": ["103113,102712,102713,102898,103094", "泰坦双星-骤晴", "img6.png"],
	"958977": ["101868,102951", "天使之泪", "img7.png"],
	"958978": ["102432,102433", "自选道具碎片60个+重置卡", "img8.png"],
	"958980": ["102111", "史诗道具碎片*25个", "img9.png"],
	"958981": ["101869", "变身女英雄技能盒（50个）", "img10.png"],

	"958982": ["103090,103092", "圣王主宰-狙击", "A/a01001.png"],
	"958983": ["101342,102842,103097", "圣光裁决", "A/a01002.png"],
	"958984": ["102106", "MSR-鹰王", "A/a01003.png"],
	"958985": ["102431,102465,102715,102794,103050", "灭世者", "A/a01004.png"],
	"958986": ["101179,102191,102624", "95式-玄武", "A/a01005.png"],
	"958987": ["102742,102691,102717,100834,102229,102721,102860,102890", "黑金仲裁者-圣诞", "A/a01006.png"],
	"958988": ["101571,102102,102423", "AR15-海王", "A/a01007.png"],
	"958989": ["102305,102313,102314,102605,102714,102932,103104", "地狱修罗", "A/a01008.png"],
	"958990": ["101147,101836,102101,102361,102422,102413,102606,102577,102789,102843,102896,103095", "朱雀SCAR", "A/a01009.png"],
	"958991": ["100914,102104,102420,102579,102791,102892", "M107-混沌", "A/a01010.png"],
	"958992": ["101312,102622,101388 ", "M4A1-青龙", "A/a01011.png"],
	"958993": ["102107", "沙鹰之王", "A/a01012.png"],

	"958994": ["103091,103093", "圣王之罚-格洛克", "B/b01001.png"],
	"958995": ["102844,100627,101103,101667,101694", "甜蜜巧克力弓", "B/b01002.png"],
	"958996": ["101184,101880,102793", "星光炮", "B/b01003.png"],
	"958997": ["101665", "如意金箍棒", "B/b01004.png"],
	"958998": ["101149", "猎魔执照", "B/b01005.png"],
	"958999": ["102690,102711,103054", "空间撕裂者", "B/b01006.png"],
	"959000": ["101318,102631,102147,102894", "幽冥毒皇", "B/b01007.png"],
	"959001": ["101735,101819,102105,102222,102145,102625,102920", "极寒冰神", "B/b01008.png"],
	"959002": ["100851,101268", "炼狱双蝎", "B/b01009.png"],
	"959003": ["102619", "柯尔特-冰焰", "B/b01010.png"],
	"959004": ["102032,102082,102366,102620", "精绝兽神", "B/b01011.png"],
	"959005": ["102108", "鹰王钩", "B/b01012.png"],
	"959006": ["101536,101085", "火神炎帝", "B/b01013.png"],
	"959007": ["102114", "巧克力剑", "B/b01014.png"],
	"959008": ["101534,102722,102792", "审判之刃", "B/b01015.png"],
	"959009": ["102109", "鹰王毒烟弹", "B/b01016.png"],

	"959010": ["100211", "复活币x200", "C/c01001.png"],
	"959011": ["102089", "欢乐防线精英卡（100天）", "C/c01002.png"],
	"959012": ["102031", "天启陷阱", "C/c01003.png"],
	"959013": ["102542", "天网陷阱", "C/c01004.png"],
	"959014": ["102115", "高爆-承诺", "C/c01005.png"],
	"959015": ["101211", "塔防金币卡（永久）", "C/c01006.png"],
	"959016": ["102960", "星光炮弹匣-坚盾升级器", "C/c01007.png"],
	"959017": ["102961", "星光炮弹匣-极速升级器", "C/c01008.png"],
	"959018": ["102962", "星光炮弹匣-风遁升级器", "C/c01009.png"],
	"959019": ["101210", "塔防专家卡（永久）", "C/c01010.png"],
	"959020": ["101400,102103,102146,103060", "纪元之光", "C/c01011.png"],
	"959021": ["101296", "闯关百宝箱（100天）", "C/c01012.png"]
};
milo.ready(function() {
	need("daoju.mo2", function(mo) {
		mo({
			type: "pc,h5", //活动类型，pt登录"pc,h5"，openid登录"qq,wx"，手游内嵌活动"gamein"
			biz: "nz", //业务
			iActivityId: "160820", //AMS活动号
			iQueryFlowId: "497153", //查询大区流程号
			iSubmitFlowId: "497152", //绑定大区流程号
			callback: function(bindedInfo, LoginManager) {
				Hx.init();
			}
		});
		//mo.appid包含eas上报
		mo.appid("nz", "9694", function(_app_id) {
			if (_app_id != 1003 && _app_id != 1005) {
				window.alert = function(msg, callback) {
					mo.alert(msg, callback);
				};
			} else {
				need("biz.lottery", function(LotteryManager) {
					window.alert = function(msg, call) {
						LotteryManager.alert(msg);
						$("#lotteryAlertDialogBtn").click(function() {
							$("#lotteryAlertDialogBtn").unbind();
							$.isFunction(call) && call();
						})
					}
				});
			}
		});
	});
});
var poolid = 1;
var Hx = {
	dataInfo: {
		//大奖集合
		bigs: ["958971", "958972", "958973", "958974", "958975", "958976", "958977", "958978", "958980", "958981"],
		//当前需要操作的道具
		iStatus3_item: !1,
		//道具盒
		pools: {
			"1": {
				item: !1, //保存奖池选择的道具
				big: 0,
				jackpot: []
			},
			"2": {
				item: !1, //保存奖池选择的道具
				big: 0,
				jackpot: []
			},
			"3": {
				item: !1, //保存奖池选择的道具
				big: 0,
				jackpot: []
			}
		}
	},
	//初始化查询
	init: function() {
		D.mo.amsSubmit(160820, 497165, {
			sNeedSubmitPopDiv: false,
			success: function(res) {
				if (res.iRet == 0) {
					//积分
					$(".jf_1043").html(res.sOutValue1);
					if (res.sOutValue3 != "") {
						$(".jf_1044_num").html([0, 50, 80, 120, 160, 200, 240, 270, 300, 330][parseInt(res.sOutValue3)]);
						$(".jf_1044_lun").html(res.sOutValue3);
					}
					if (res.sOutValue2 != "") {
						$(".totalhold").html(res.sOutValue2);
					}
					//道具盒1
					if (res.sOutValue4 != "") {
						Hx.jackpotLoad(1, res.sOutValue4);
					}
					//道具盒2
					if (res.sOutValue5 != "") {
						Hx.jackpotLoad(2, res.sOutValue5);
					}
					Hx.div_my_box();

					//里程道具
					if (res.sOutValue6 != "") {
						selarr = res.sOutValue7.split(",");
						var drawPackageId = [];
						$.each(selarr, function(k, v) {
							var num = $.inArray(parseInt(v), arrdj3);
							drawPackageId.push(num);
						});
						$.each(drawPackageId, function(k, v) {
							var _pic = $("#test3 li").eq(v).find("img").attr("src");
							$(".content5_cj li").eq(k).addClass("_" + selarr[k]).find("img").attr("src", _pic);
						})
						amsSubmit(151947, 475758);
					}
				}
			}
		});
	},
	//礼包记录
	div_my_box: function() {
		amsSubmit(160820, 497156);
	},
	//碎片 
	updateJf: function(id) {
		setTimeout(function() {
			D.mo.QueryMultiCloudTicket("A100038", "1043", D.mo.bindInfo.iZone, function(vals) {
				$(".jf_1043").text(vals["_1043"]);
			});
		}, id || 3000);
	},
	//购买
	amsbuy: function() {
		var num = $("#Num").val();
		var rel = /^[1-9]\d*$/;
		if (rel.test(num) == false || rel.test(num) == "false" || num > 500) {
			alert("单笔最多购买500个");
			return;
		}
		D.mo.amsSubmit(160820, 497154, {
			type: "buy",
			sData: {
				level: num
			},
			success: function(res) {
				//成功回调
				Hx.updateJf();
			}
		});
	},
	//开启特权
	amsTeq: function() {
		D.mo.amsSubmit(160820, 497166, {
			success: function(res) {
				$(".jf_1044_1").html(res.sPackageName.replace(/[^0-9]/ig, ""));
				alert(res.sMsg);
				Hx.init();
			}
		})
	},
	//开启特权领取
	amsTeqLq: function() {
		D.mo.amsSubmit(160820, 497171, {
			success: function(res) {
				alert("领取成功，去试试手气吧");
				Hx.init();
			}
		})
	},
	//锁定道具盒
	lotterySave: function(a, item) {
		if (!item) {
			alert("您还未选择道具");
			return;
		}
		if (confirm("是否锁定道具盒，开始抽奖后将无法重新选择道具")) {
			D.mo.amsSubmit(160820, 497161, {
				sData: {
					"poolid": a,
					"item": item
				},
				success: function(res) {
					Hx.jackpotLoad(a, res.sOutValue1);
					Hx.div_my_box();
				}
			});
		}
	},
	//重新选择道具
	lotteryReset: function(a) {
		if (confirm("您将消耗20个组装零件清空奖池，并重新选择强力道具")) {
			D.mo.amsSubmit(160820, 497164, {
				sData: {
					"poolid": a
				},
				success: function(res) {
					Hx.dataInfo.pools[poolid] = {
						item: !1, //保存奖池选择的道具
						big: 0,
						jackpot: []
					};
					$("#cj_" + a + " .list2_list1 li img").attr("src", "//game.gtimg.cn/images/actdaoju/act/a20180911movestart/question.png");
					$("#cj_" + a + " .li_click").attr("href", "javascript:TGDialogS('test1')");
					$("#cj_" + a + " .a2").attr("href", "javascript:Hx.lotterySave(" + a + ");");
					setTimeout(function() {
						alert("重新选择成功！每个道具盒可以锁定3次");
					}, 500);
					Hx.updateJf(1);
				}
			});
		}
	},
	//获取道具盒内容进行排序
	jackpotLoad: function(a, arrStr) {
		Hx.dataInfo.pools[a].jackpot = [];
		$.each(arrStr.split(","), function(k, v) {
			if (Hx.dataInfo.bigs._indexOf(v) != -1) {
				Hx.dataInfo.pools[a].big = v;
			} else {
				Hx.dataInfo.pools[a].jackpot.push(v);
			}
		});
		Hx.dataInfo.pools[a].jackpot.splice(1, 0, Hx.dataInfo.pools[a].big); //大奖放在第二位
	},
	//显示道具盒内容
	lotteryLoad: function(a) {
		var jackpot = Hx.dataInfo.pools[a].jackpot;
		var num = 0;
		if (jackpot.length == 0) {
			return;
		}
		var _arrdj = [];
		$.each(jackpot, function(k, v) {
			if (allGoods[v][0] == 1) {
				num++;
			} else {
				allGoods[v][0] = 0;
			}
			_arrdj[k] = [allGoods[v][1], _url + allGoods[v][2], allGoods[v][0]];
		});
		//已开启次数
		//道具盒
		var _key = [50, 80, 120, 160, 200, 240, 270, 300, 330, 0][num];
		$(".hold_" + a).html(num);
		$(".need_" + a).html(_key);
		$("#cj_" + a + " .list2_list1 li").map(function(i) {
			if (i != 9) {
				$(this).find("img").attr("src", _arrdj[i][1]);
				if (_arrdj[i][2] == 1) {
					$(this).find(".mask").addClass("masked");
				}
			}
		})
		if (jackpot.length != 0) {
			$("#cj_" + a + " .li_click").attr("href", "javascript:alert('道具箱已锁定,消耗20个零件可以重新选择')");
			$("#cj_" + a + " .a2").attr("href", "javascript:alert('道具箱已锁定')");
		}
		if (num > 0) {
			Hx.dataInfo.pools[a].has = 1;
			$("#cj_" + a + " .li_click").attr("href", "javascript:alert('抱歉，您已开始抽奖，不能更换强力道具')");
			$("#cj_" + a + " .a1").attr("href", "javascript:alert('抱歉，您已开始抽奖，不能重新选择')");
			$("#cj_" + a + " .a2").attr("href", "javascript:alert('抱歉，您已开始抽奖，不能再次锁定')");
		}
	},
	//暂存箱操作
	lotteryOper: function(type) {
		var item = Hx.dataInfo.iStatus3_item;
		if (type == "show") { //显示
			D.mo.template(item, "pop_tpl", "#test4", function() {
				TGDialogS("test4");
			})
		} else if (type == "get") { //领取
			showDialog.hide();
			amsCfg_475743['sData'] = {
				item: item.id
			};
			amsSubmit(151947, 475743);
		} else if (type == "del") { //分解
			showDialog.hide();
			amsCfg_475744['sData'] = {
				item: item.id
			};
			amsSubmit(151947, 475744);
		}
	},
	//抽奖
	amsCj: function(id) {
		var ams = [497155, 497163][id - 1];
		D.mo.amsSubmit(160820, ams, {
			success: function(res) {
				var index = Hx.dataInfo.pools[poolid].jackpot._indexOf(res.iPackageId);
				var s = [0, 1, 2, 8, 3, 7, 6, 5, 4][index];
				calllotteryToRoll1(s);
			},
			failure: function(res) {
				lottery1.reset();
				lottery2.reset();
				alert(res.sMsg);
				Hx.div_my_box();
			}
		})
	},
	//锁定里程道具
	lockDj: function() {
		var re = 0;
		var sName = [];
		$.each(selarr, function(k, v) {
			if (typeof v == "undefined") {
				re = 1;
			}
			sName.push(pifu[v][1]);
		});
		if (re) {
			alert("你有道具没有选择，请继续选择");
			return;
		}
		if (confirm("换肤卡无法重复到账，请问是否确定将选择的【" + sName.join(",") + "】加入奖池？")) {
			amsCfg_475757.sData = {
				level: selarr.join(",")
			};
			D.mo.amsSubmit(151947, 475757);
		}
	}
}

// 个人获奖记录初始化
amsCfg_497156 = {
	"sNeedSubmitPopDiv": false,
	'iAMSActivityId': '160820', // AMS活动号
	'iLotteryFlowId': '497156', //  查询获奖轮播的流程号
	'activityId': '221996', // 模块实例号
	'pageSize': 30,
	'isForce': true,
	'getData': function(data) {
		$.each(data, function(k, v) {
			allGoods[v.iPackageId][0] = 1;
			if (v.iStatus == "3") {
				Hx.dataInfo.iStatus3_item = v;
			}
		});
		Hx.lotteryLoad(1);
		Hx.lotteryLoad(2);
		if (Hx.dataInfo.iStatus3_item != false) {
			var fasong = [958978, 958980, 959010, 959011];
			var iPackageId = Hx.dataInfo.iStatus3_item.iPackageId;
			if (fasong._indexOf(parseInt(iPackageId)) != -1) {
				Hx.lotteryOper("get");
			} else {
				//查询背包
				D.mo.amsSubmit2(160820, 497160, {
					sData: {
						item: iPackageId
					},
					_everyRead: true,
					sNeedSubmitPopDiv: false,
					success: function(res) {
						var fenjie = [895568, 895569, 895572, 895573, 895576, 895594, 895611, 895612, 895614, ];
						if (parseInt(res.sOutValue1) > 0) {
							var pid = Hx.dataInfo.iStatus3_item.iPackageId;
							if (fenjie._indexOf(pid) != -1) {
								alert("您游戏内已拥有" + allGoods[pid][1] + "，将直接返还本次消耗碎片！", function() {
									Hx.lotteryOper("del");
								});
							} else {
								Hx.lotteryOper("show");
							}
						} else {
							Hx.lotteryOper("get");
						}
					},
					failure: function(res) {
						alert(res.sMsg);
					}

				})
			}
		}
	}
};

//扩展函数
Array.prototype._indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this._indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};


/********************皮肤***************************/
var arrdj3 = [959463,959464,959465,959466,959467,959468,959469,959470,959471,959472,959473,959474,959475,959476,959477,959478,959479,959480,959481,959482];
var selarr = new Array(6);
var selid = 0;
$('#test3 .test3_list li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		selid = arrdj3[$(this).parent().index()];
	})
	//替换抽奖道具
$('.content5 .cj .a').click(function() {
	cj_index = $(this).parent().index();
	TGDialogS('test3', function() {
		setTimeout(function() {
			$(".test3_list").mCustomScrollbar("update");
		}, 100)

	});
})
$('#test3 .btn').click(function() {
	showDialog.hide();
	var _cj_img = $('#test3 .active').find('img').attr('src');
	$('.content5_cj li').eq(cj_index).find('img').attr('src', _cj_img);
	selarr[cj_index] = selid;
})
var pifu = {
	"959463": ["669117", "骤晴-SCAR换肤卡", ""],
	"959464": ["669117", "骤晴-泰坦双星换肤卡", ""],
	"959465": ["669117", "骤晴-天王换肤卡", ""],
	"959466": ["669117", "骤晴-圣光裁决换肤卡", ""],
	"959467": ["669117", "圣王主宰-耀光换肤卡", ""],
	"959468": ["669117", "圣王之罚-耀光换肤卡", ""],
	"959469": ["669117", "金国王妃背包", ""],
	"959470": ["669117", "AR15-海王沧海换肤卡", ""],
	"959471": ["669117", "AK-白虎沧海换肤卡", ""],
	"959472": ["669117", "飓风之神星云换肤卡", ""],
	"959473": ["669117", "Z型补给站换肤（100天）", ""],
	"959474": ["669117", "10000NZ点购物券（3天）", ""],
	"959475": ["669117", "加2宝箱掉落卡（3天）", ""],
	"959476": ["669117", "创世巨炮-魔炎换肤卡", ""],
	"959477": ["669117", "创世爆能枪-魔炎换肤卡", ""],
	"959478": ["669117", "创世鞭刃-魔炎换肤卡", ""],
	"959479": ["669117", "创世爆弹-魔炎换肤卡", ""],
	"959480": ["669117", "愤怒小红鸡背包", ""],
	"959481": ["669117", "新春审判换肤卡", ""],
	"959482": ["669117", "新春灭世者换肤卡", ""]
}