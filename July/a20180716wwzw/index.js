$(function(){
    //弹窗数据  
    var test_professional=[
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top1.png",
            "title_p":"黑暗贤者掌握了暗影与邪术的力量。<br/>他能进行治疗，但代价是什么呢？",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center1.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills1.png",
            "desc":[
                {"p1":"幽影矢：","p2":"四次连续的攻击，对敌人造成法术伤害。武器速度越慢，伤害越高。"},
                {"p1":"生命汲取：单体引导伤害，吸血","p2":"在6秒内不断吸取目标生命，每1秒造成一定法术伤害，并将造成伤害的100%转化为自身生命值。当自身生命满时，吸取的生命能量能够治疗自身周围队友的生命值"},
                {"p1":"焚血术：群体伤害，群体治疗","p2":"对目标周围5米造成伤害并附加重伤效果，使目标受到的治疗效果降低20%；此外还会治疗目标周围10米内的最多3个友方的生命。"},
                {"p1":"暗影治愈：瞬发应急治疗，带负面效果","p2":"以暗影的威能为目标治疗，使其立即恢复生命值，但会对目标附加暗影代价，在接下来的数秒秒内，目标受到的所有治疗都会被吸收40%，直到其受到相当于本法术治疗量120%的总治疗为止。反复对同一个目标施放暗影治愈会导致新的暗影代价覆盖旧的代价。本技能不能对生命已满的目标使用。"},
                {"p1":"幽冥鬼爪：范围伤害，群体吸血","p2":"目标位置涌出鬼爪，在8秒内对范围内敌人造成共9次，每次一定量的法术伤害。击中带有重伤状态的目标时，目标将被定身3秒。鬼爪持续期间，你将除溅射伤害以外的所有伤害的20%转化为对周围友方的治疗。"},
                {"p1":"魔雾护身：无敌，降低仇恨","p2":"化作一团魔雾，降低你对敌人的仇恨，此后的4秒内无敌，且每0.5秒对自身周围最多6个友方目标进行治疗。"},
                {"p1":"生命回馈：消耗生命，回复法力","p2":"（自身法力低于60%，生命高于40%时激活）分流生命能量，以自身10%最大生命值为代价，回复一定法力值，并提升攻击力，持续数秒。"},
                {"p1":"死者复活：复活队友，仅脱战可用","p2":"（当30米内有团队成员死亡或选定友方目标死亡时激活，在战斗状态下无法使用，并且受到攻击时会立刻中断。）利用黑暗的力量，使死者复活。复活范围内死亡的友方玩家，并使他们恢复35%的最大生命值。迷惑状态。使用此技能会停止自动攻击。"}
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top2.png",
            "title_p":"魔导师深入研究魔法的本质，掌握了奥术的力量。<br/>他能释放出能量的洪流，还能将敌人变形。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center2.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills2.png",
            "desc":[
                {"p1":"奥术箭：","p2":"发射纯粹的奥术能量攻击敌人，连续攻击目标四次，对其造成法术伤害；武器速度越慢，伤害越高。"},
                {"p1":"魔法飞弹：力场伤害，单体伤害核心，产生奥能，奥能加成","p2":"将纯粹的魔法能量凝聚为飞弹射向目标，对其造成力场伤害，并获得1层奥能。（每层奥能会使法术伤害提高，法力消耗增加100%）"},
                {"p1":"奥术轰炸：力场伤害，强力伤害，消耗奥能，奥能加成","p2":"凝聚奥术能量向目标发射奥术轰炸，对目标造成力场伤害。该技能会消耗积累的全部奥能，每点奥能会使本技能的伤害提高且可以额外击中1个目标。"},
                {"p1":"恶意变形：强力单体控制，变形","p2":"将目标变为绵羊，对其造成法术伤害，并使其迷惑，效果持续数秒。"},
                {"p1":"黑洞：强力群体控制，拉回","p2":"撕裂空间，在目标位置生成一个存在5秒的黑洞，期间对周围5米范围内敌人造成6次，每次一定量的力场伤害，并将这些目标牵引到裂隙中央。"},
                {"p1":"次元跳跃：战术瞬移，解除控制，沉默","p2":"折叠次元，瞬间向前方移动15米距离，解除所有控制效果，并对位移终点周围5米内的所有敌人造成一定的法术伤害和数秒沉默效果。次元跳跃不能穿过障碍物。"},
                {"p1":"法力漩涡：持续回复法力与生命","p2":"（自身法力值低于40%时激活）将自身变为魔法的漩涡之眼，每秒对自身周围造成法术伤害，持续6秒。持续期间，每秒为你回复10%最大法力和生命（回复的生命值随攻击提升），并为你叠加秘法能量效果，每层秘法能量可使你的所有伤害提升10%，最多叠加6层，持续12秒。"},
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top3.png",
            "title_p":"掌控元素之力，无论是烈焰还是冰霜，<br/>在法师的手中，都任凭使用，挥洒自如。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center3.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills3.png",
            "desc":[
                {"p1":"冰棱：四次连续的攻击，对敌人造成法术伤害。武器速度越慢，伤害越高。","p2":""},
                {"p1":"冰霜箭：单体伤害核心，吟唱，减速","p2":"发射一枚冰霜箭，对目标造成冰霜伤害，并使其减速，效果持续数秒。"},
                {"p1":"冰霜之环：瞬发定身控制","p2":"唤起冰霜之力冲击目标及其周围5米内的目标，对敌人造成冰霜伤害并将其定身数秒。被选中的主要目标会额外受到一次伤害。"},
                {"p1":"延迟爆裂：群体伤害核心，传染爆炸","p2":"将一颗烈焰炸弹置入目标体内，将其点燃持续6秒，每秒造成火焰伤害。6秒后目标将爆炸，对周围5米内至多10个目标造成相当于每秒燃烧伤害4倍的爆炸伤害。爆炸击中的目标将被传染炸弹，并在6秒后进行第二次爆炸，但被传染的目标不会受到点燃伤害，爆炸也不会进行第二次传染。"},
                {"p1":"陨石术：强力群体伤害，减速","p2":"召唤一颗陨石，1秒后从天而降，对5米范围内目标造成火焰伤害，打断正在施法的目标，并使击中的目标移动速度降低40%，如果成功打断了施法，还会额外造成短暂的沉默效果。陨石火焰会灼烧大地，8秒内持续伤害范围内目标，每次少量火焰伤害。"},
                {"p1":"移形换影：战术瞬移，解除控制，护盾","p2":"折叠次元，瞬间向前方移动数米距离，解除所有控制效果，并额外获得一个护盾，吸收伤害（随攻击提升），持续数秒。移形换影不能穿过障碍物。"},
                {"p1":"冰封结界：终极自保，无敌，回复","p2":"（自身生命值低于40%时激活）凝聚寒冰之晶包裹自己，期间免疫受到的任何伤害，且每2秒回复生命（随攻击提升），效果持续数秒。"},
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top4.png",
            "title_p":"潜伏者不凭蛮力，而是利用娴熟的技巧，<br/>环境的掩护和出其不意的袭击来解决战斗。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center4.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills4.png",
            "desc":[
                {"p1":"自动攻击：连续的攻击，对目标造成一定量的物理伤害。武器速度越慢，伤害越高。","p2":""},
                {"p1":"精准打击：单体伤害核心，积攒杀气","p2":"打击技，快速使用武器打击敌人，对目标造成大量点物理伤害，并获得1杀气值。在隐匿和影舞状态下使用此技能可额外造成50%伤害。"},
                {"p1":"直捣要害：强力单体伤害，倾泻杀气","p2":"终结技，消耗1点杀气时造成大量点物理伤害，每多消耗1点杀气值，伤害额外提升100%。最多消耗5点杀气造成5倍伤害。"},
                {"p1":"魅影切割：强力控制，持续伤害，倾泻杀气","p2":"终结技，消耗1点杀气时，使目标减速，并每2秒造成流血伤害，持续8秒，此外使敌人昏迷1秒，每多消耗1点杀气值，流血和减速时间延长4秒，且昏迷时间延长1秒。最多消耗5点杀气造成24秒流血和减速，并使敌人昏迷5秒。"},
                {"p1":"幻影剑舞：群体伤害，积攒杀气","p2":"打击技，向四周投掷出匕首，对4米范围内的敌人造成大量点物理伤害，并获得1点杀气值。"},
                {"p1":"隐匿：潜行，杀敌获得充能","p2":"提升自身物理攻击，持续数秒。在非战斗状态下使用时，会隐藏自己的气息，使得敌人无法察觉到你，移动速度提高，持续数秒。当你进行攻击或受到伤害时，隐匿效果将提前消失。"},
                {"p1":"影遁：突进，控制，积攒杀气","p2":"（需使用隐匿后激活并立刻重置冷却）打击技，透过暗影，快速穿越至目标身后，使其昏迷数秒，对其造成大量点物理伤害，并在18秒内造成同等的流血伤害，并获得2点杀气值。"},
                {"p1":"烟雾弹：超强自保，强行隐身脱战","p2":"（仅当战斗状态下，自身生命值低于60%时可用）引爆烟雾弹，使自身周围的敌对目标迷惑，持续8秒；同时完全清除自身造成的仇恨，脱离战斗并进入隐匿状态，持续60秒，其中前3秒处于无敌状态且移动速度提高100%。敌方目标被击中会解除"}
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top5.png",
            "title_p":"斗士追求武艺和力量的极致，他们放弃了盾牌的保护，<br/>只凭手中的武器，来掀起钢铁的风暴。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center5.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills5.png",
            "desc":[
                {"p1":"自动攻击：连续的攻击，对目标造成一定量的物理伤害并获得怒气。武器速度越慢，伤害越高，获得的怒气也越多。","p2":""},
                {"p1":"猛力攻击：单体伤害核心，重伤","p2":"残忍且强力的一击，对目标造成大量点物理伤害。使目标重伤，受到的治疗效果降低30%，持续6秒。本技能有2次充能。"},
                {"p1":"旋风攻击：群体伤害","p2":"掀起一阵旋风攻击，对4米范围内目标造成大量点物理伤害。"},
                {"p1":"狂乱：生成怒气，造成狂暴","p2":"强力的一击，对目标造成大量点物理伤害并恢复自身相当于3倍力量属性的生命，产生中量怒气。狂乱暴击时使自身狂暴，狂暴状态下使用普通攻击将获得额外怒气"},
                {"p1":"崩裂之刃：强力增伤，爆发起手技能","p2":"猛烈的一击，对目标造成大量点物理伤害，同时使你对其造成的伤害提高，效果持续数秒。"},
                {"p1":"跳斩：战术突进，群体减速","p2":"朝目标区域腾空跃起，以毁灭性的力量重击地面，产生中量怒气，对4米范围内目标造成大量点物理伤害并使其减速，持续10秒，且自身获得自由效果（免疫移动限制），持续3秒。"},
                {"p1":"致命一击：超高单体伤害，斩杀","p2":"（目标生命值低于20%时激活）终结目标，对其造成大量点物理伤害。（此技能不受公共冷却影响）"},
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top6.png",
            "title_p":"奇迹不仅存在于神殿，也活跃在荒野，比起施展法术，<br/>更倾向于弓弩和陷阱，这就是射手。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center6.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills6.png",
            "desc":[
                {"p1":"自动射击：连续的射击，对目标造成一定量的物理伤害，武器速度越慢，伤害越高。","p2":""},
                {"p1":"快速射击：单体伤害核心","p2":"快速的射击目标3次，造成物理伤害。"},
                {"p1":"鹰击长空：直线范围伤害，回复能量核心","p2":"射出一支化为巨鹰的箭矢，攻击前方直线范围内敌人，造成大量点物理伤害，并为自身恢复35点能量和相当于敏捷属性3倍的生命值，本技能有2次充能。"},
                {"p1":"牵制射击：范围伤害，减速","p2":"对目标周围5米的区域释放出箭雨，在2秒内造成2次物理伤害，每次一定量，并使击中的所有目标减速。"},
                {"p1":"乱射：强力范围伤害，需引导","p2":"向自身与目标之间的扇形区域扫射，每次对区域内目标造成大量点物理伤害，最多造成10次伤害。每次伤害消耗6点能量。"},
                {"p1":"逃脱：战术逃脱，范围定身","p2":"向后跳跃10米，并在起跳位置周围5米放出捕网，使范围内敌人定身，持续5秒，并在数秒内每3秒受到一定流血伤害（随攻击力提高），并提升自身移动速度30%，持续数秒。"},
                {"p1":"麻痹毒箭：近身自保，群体迷惑，击退","p2":"（仅限战斗状态下，自身周围10米内有敌对目标时激活）发射数支带有麻痹毒素的强力毒箭，击退周围敌对目标并造成大量点物理伤害，使击中的目标睡眠数秒，中毒数秒，中毒期间目标每2秒受到伤害，如果在中毒持续期间你消灭了任意目标，则重置毒箭的冷却。睡眠的目标如果受到攻击会提前醒来。"},
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top7.png",
            "title_p":"圣骑士是神圣的武士，是神灵之拳。<br/>他用盾牌捍卫信仰，凭手中剑贯彻神灵的意志。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center7.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills7.png",
            "desc":[
                {"p1":"自动攻击：连续的攻击，对目标造成一定量的物理伤害。武器速度越慢，伤害越高","p2":""},
                {"p1":"惩戒之盾：远程打断沉默","p2":"向目标投掷盾牌，弹射至附近的数个目标，造成大量点神圣伤害，并打断其施法且造成3秒沉默，产生大量仇恨值。"},
                {"p1":"神圣盾击：强力单体伤害，自身防御核心","p2":"用盾牌发起强大攻击，对目标造成大量点神圣伤害，产生大量仇恨值，并使自身护甲和抗性提高力量值，持续数秒，重复使用将使防御提高效果的时间累加。"},
                {"p1":"正义烙印：区域范围伤害","p2":"将圣力注入大地，在9秒内每秒对范围内目标造成神圣伤害，并使他们命中率降低20%。"},
                {"p1":"神圣之握：远程拉回，嘲讽","p2":"用神圣的力场笼罩目标区域，将目标拉回到身前并对他们进行嘲讽，造成大量点神圣伤害。"},
                {"p1":"天界战马：召唤战马，提升机动","p2":"召唤一匹天界战马进行骑乘，持续数秒，期间你的护甲和抗性提高,移动速度提高并免疫移动限制效果,且可使用额外技能：骑乘冲锋，朝目标位置冲锋，对路径上的所有敌人造成物理伤害并将他们击倒。"},
                {"p1":"复苏之光：群体伤害，自我治疗","p2":"（自身生命低于80%时激活）光芒治愈你并惩戒你的敌人，对自身周围5米内的所有敌方目标造成大量点伤害，并恢复自身相当于力量属性的生命值，你的生命值越低，治疗量就越高，最高可造成初始治疗值2倍的治疗。"},
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top8.png",
            "title_p":"在凡间施行神之意志的人，就是牧师。<br/>他以信仰之力践行神意，借助神力改变生死。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center8.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills8.png",
            "desc":[
                {"p1":"焰击术：单体瞬发伤害，点燃，减速","p2":"圣焰从天而降，对目标造成神圣伤害，将其点燃并减速，每2秒受到法术伤害，效果持续14秒，点燃效果最多可叠加2次。同时你会获得圣焰涌动的效果，立即回复法力最大值的法力，并使接下来的8秒内，惩戒之光的伤害提升30%。"},
                {"p1":"光耀脉冲：近战范围伤害","p2":"神圣的光芒脉冲状向四周喷发，使5米范围内敌方目标受到一定的法术伤害，并使其命中率降低，持续6秒。（每次施放有20%的几率重置焰击术的冷却）"},
                {"p1":"群体复生：复活队友，仅脱战可用","p2":"（当30米内有团队成员死亡或选定友方目标死亡时激活，在战斗状态下无法使用，并且受到攻击时会立刻中断。）借助神圣之力，复活范围内所有死亡的友方玩家，并使其恢复35%最大生命值。"},
                {"p1":"律令：愈合：强力群体治疗，驱散负面效果","p2":"（仅限战斗状态下，周围20米内有团队成员或选定的友方目标生命值低于70%时激活）呼唤神力治疗自身周围至多6名友方目标，为其恢复生命值，并驱散所有负面状态。"},
                {"p1":"天使降临：战术位移，强力应急治疗，清除仇恨","p2":"化身为天使飞向友方目标，治疗降落位置20米半径内友方目标的生命值，选中的目标会额外获得持续6秒的天使降临效果，每3秒恢复一定生命值。同时，清除自身造成的仇恨值，并在数秒内获得伤害减免和移动速度提升；如果没有友方目标，则不会飞行，而是原地获得上述效果。"},
                {"p1":"治疗真言：群体治疗，高蓝耗","p2":"释放治疗真言，为目标及目标周围内友方单位恢复生命值。（每次使用治疗真言，将使律令：愈合减少6秒冷却时间）"},
                {"p1":"虔诚护盾：强力护盾","p2":"治疗目标并为目标施加虔诚护盾，护盾最多可吸收一定的伤害，治疗量则为护盾吸收值的10%，效果持续15秒。护盾存在期间，使目标受治疗效果增加10%。"},
                {"p1":"惩戒之光：引导纯粹光芒惩戒敌人，连续攻击目标四次，对其造成法术伤害；武器速度越慢，伤害越高。","p2":""}
            ]
        },
        {
            "title":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/top9.png",
            "title_p":"战士是战场的核心，沉重的盾牌在他们手中，<br/>不但是保护同伴的屏障，也是强力的武器。",
            "center":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/center9.png",
            "test_professional":"//game.gtimg.cn/images/kok/cp/a20180716wwzw/test/skills9.png",
            "desc":[
                {"p1":"圆弧斩：倾泻怒气，群体伤害","p2":"一记势大力沉的横扫，对目标及其周围最多5名敌人造成大量点物理伤害。"},
                {"p1":"自动攻击：连续的攻击，对目标造成一定量的物理伤害并获得5点怒气。武器速度越慢，伤害越高。","p2":""},
                {"p1":"盾击：单体伤害核心，生成怒气","p2":"使用盾牌重击目标，造成大量点物理伤害并打断施法，产生大量仇恨值，并获得中量怒气。"},
                {"p1":"地动山摇：强力群体控制，击倒","p2":"聚集力量，发出一道冲击波，攻击前方扇形范围内的敌人，造成大量点物理伤害将其击倒，被击中的目标还会沉默数秒。（若击中3个以上目标时，冷却时间缩短20秒）"},
                {"p1":"大地践踏：群体控场拉回","p2":"汇聚大地之力，对范围内目标造成大量点物理伤害，并将它们拉回到身边且减速10秒。产生中量怒气。会飞行，而是原地获得上述效果。"},
                {"p1":"冲锋：战术突进，控制","p2":"向目标冲锋并造成大量点物理伤害，使其昏迷数秒并嘲讽目标，造成大量仇恨值，产生中量怒气。"},
                {"p1":"盾牌屏障：强力护盾","p2":"（拥有至少60点怒气时激活）获得持续15秒的屏障，期间可吸收受到的伤害的90%。屏障效果不能叠加，每次获得新的屏障时，会覆盖原有的屏障。"},
            ]
        }
    ]

    var list=[
        {0:"ios",1:"安卓"},
        {1:"QQ互通1服",2:"QQ互通2服",3:"QQ互通3服",4:"QQ互通4服",5:"QQ互通5服",6:"QQ互通6服",7:"QQ互通7服",8:"QQ互通8服",9:"QQ互通9服",10:"QQ互通10服"},
        {1:"战士",2:"斗士",3:"潜伏者",4:"法师",5:"魔导师",6:"黑暗贤者",7:"牧师",8:"圣骑士",9:"射手"},
        {1:"人族",2:'精灵',3:"矮人",4:"兽人"}
    ]

    var people={
        role: "0",
        sex: "0",
        color: "0",
        models: "0",
        server: "",
        role_name:"",
        professional:"",
    }
    //var url="https://dong0106.com/WWZW_YCJ/";
    var url="https://kok.wxgamemini.com/";
    // var url="http://192.168.2.5:8888/WWZW_YCJ/";

    function canvas_img(){
        $('#dia2 .p2').css("visibility",'hidden')
        var p1=$('#dia2 .p2 span:nth-child(1)').html();
        var p2=$('#dia2 .p2 span:nth-child(2)').html();
        var p3=$('#dia2 .p2 span:nth-child(3)').html();
        var p5=$('#dia2 .p2 span:nth-child(5)').html();
        console.log(p1)
        console.log(p2)
        console.log(p3)
        console.log(p5)
        var canvas = document.getElementById("img1");
        var ctx = canvas.getContext("2d");
        var img3=document.getElementById("img3")
        ctx.drawImage(img3,0,0);
        var img=document.getElementById("img")
        var img6=document.getElementById("img6")
        var logo=document.getElementById("logo")
        var erweima=document.getElementById("erweima")
        ctx.drawImage(img,36,180)
        ctx.drawImage(logo,50,700)
        ctx.drawImage(erweima,550,730)
        ctx.fillStyle='#805f1d';
        ctx.font="normal normal 500 28px Microsoft YaHei";
        ctx.fillText(p1,160,130)
        ctx.fillText(p2,330,130)
        ctx.fillText(p3,400,130)
        ctx.textAlign='center';
        ctx.fillText(p5,340,160)
        //console.log(canvas.toDataURL())
        img6.src=canvas.toDataURL()
    }

    //弹窗
    function showDia(e){
        showDialog.show({
            id: e, //需要弹出的id，如果是弹出页面上的div，则该选项为必选
            bgcolor:"#000000",//弹出“遮罩”的颜色，格式为"#FF6600"，可选，默认为"#fff"
            opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
        });
    }
    //登陆
    function login() {
        parent.need("biz.login", function (LoginManager) {
            LoginManager.login();
        });

    };
    function logout() {
        parent.need("biz.login", function (LoginManager) {
            LoginManager.logout();
        });
    };
    var account="1067996924";
//    LoginManager.checkLogin(function () {
//        if ($E("#login_nickname_span")) {
//            LoginManager.getNickName(function (loginInfo) {
//                if (loginInfo.isLogin) {
//                    $E("#login_nickname_span").innerHTML = loginInfo.nickName;
//                }
//            });
//        }
//
//    });
    LoginManager.checkLogin(function () {
        account = LoginManager.getUserUin();
    });
    if(account==""){
        login()
    }


    //选择职业点击查看技能详情
    $('.professional li .btn').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        people.professional= $(this).parent().index()+1+"";
        console.log(people.professional)
    })

    // function show(){
    //     for (var i=0;i<test_professional.length;i++){
    //         test_professional[i];
    //         console.log(test_professional[i]);
    //         $('.dia .title').css('url','test_professional[i].title');
    //         $('.dia .title_p').html(test_professional[i].title_p);
    //         $('.dia .center').css('url','test_professional[i].center');
    //     }
    // }



    $('.professional li img').click(function(){
        index=parseInt($(this).parent().attr('professional'))-1;
        showDia('dia');
        $('#dia .title').css({"background":"url("+test_professional[index].title+")no-repeat center/100%"})
        $('#dia .title_p').html(test_professional[index].title_p);
        $('#dia .test_professional').css({"background":"url("+test_professional[index].test_professional+")no-repeat center/100%"})

        $('#dia .test_professional li').click(function(){
            if(test_professional[index].desc.length == $(this).index().length ){
                // alert("这个数组的长度是7")
                return;
            }

            var index1 = $(this).index();

            console.log(index1)
            console.log($(this).index())
            console.log(test_professional[index].desc[index1].p1);
            console.log(test_professional[index].desc[index1].p2);
            console.log(test_professional[index].desc.length)
            $(this).addClass('active').siblings().removeClass('active');
            $('.professional_desc .p1').html(test_professional[index].desc[index1].p1)
            $('.professional_desc .p2').html(test_professional[index].desc[index1].p2)
            
        })

    })


  
  
    
    
    //    机型选择
    $('.models .li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        people.models=($(this).index()-1)+"";
    })

    $('select').change(function(){
        console.log($(this).val())
        people.server=(parseInt($(this).val())+1)+"";
    })

    $('.role_name input').change(function(){
        people.role_name=$(this).val()
    })


    //选择种族
    $('.people li').click(function(){
        console.log($(this).index())
        people.role=$(this).index();
        $('.person img').attr('src','//game.gtimg.cn/images/kok/cp/a20180716wwzw/person/r_'+people.role+'_'+people.sex+'_'+people.color+'.png');
        $('.person_color').css({'background':"url(//game.gtimg.cn/images/kok/cp/a20180716wwzw/person/c_0_"+people.role+"_"+people.sex+".png) no-repeat center/100%"})
        $(this).addClass('active').siblings().removeClass('active')
    })
    //选择性别
    $('.person_sex a').click(function(){
        people.sex=$(this).index();
        console.log(people.color)
        $('.person img').attr('src','//game.gtimg.cn/images/kok/cp/a20180716wwzw/person/r_'+people.role+'_'+people.sex+'_'+people.color+'.png');
        $('.person_color').css({'background':"url(//game.gtimg.cn/images/kok/cp/a20180716wwzw/person/c_0_"+people.role+"_"+people.sex+".png) no-repeat center/100%"})
        $(this).addClass('active').siblings().removeClass('active')
    })
    //选择颜色
    $('.person_color a').click(function(){
        console.log($(this).index())
        people.color=$(this).index();
        $('.person img').attr('src','//game.gtimg.cn/images/kok/cp/a20180716wwzw/person/r_'+people.role+'_'+people.sex+'_'+people.color+'.png');
        $(this).addClass('active').siblings().removeClass('active')
    })

    //点击转发弹出分享页面
    $('#dia2 .btn').click(function(){
        $('.mask2').addClass('active');
    })
    //点击关闭分享页面
    $('.mask2').click(function(){
        $(this).removeClass('active');
    })
    //页面加载  请求数据判断是否创建角色
    $.ajax({
        type: 'POST',
        url: url+"reg_user/getRegUser",
        data: {account:account},
        dataType: "JSON",
        success: function(data){
            console.log(data)

            if(data.status==0&&data.msg.user!=null){

                $('.models .li').eq(parseInt(data.msg.user.system)).addClass('active').siblings().removeClass('active');
                $('.role_name input').val(data.msg.user.name)
                $('.professional li').eq(parseInt(data.msg.user.occupation)-1).addClass('active').siblings().removeClass('active');
                $('.people li').eq(parseInt(data.msg.user.race)-1).click();
                $('.person .person_sex a').eq(data.msg.user.sex).click();
                $('.person .person_color a').eq(data.msg.user.skin).click();
                $('#android option').eq(data.msg.user.area).attr('selected','selected')
                for(var i=0;i<data.msg.area.length;i++){
                    $('#android option').eq(i+1).append('<span>剩余'+data.msg.area[i].count+'</span>')
                    if(data.msg.area[i].count==0){
                        $('#android option').eq(data.msg.area[i].id).attr("disabled","")
                    }
                }
                $('.mask1').css({"display":"block"});

                var img =dia2[(parseInt(data.msg.user.race)-1)].img;//imgurl 就是你的图片路径
                $('#dia2 .dia-con .img').attr('src',img)
                $('#dia2 .dia-con .p2 span:nth-child(1)').html(list[1][parseInt(data.msg.user.area)]);
                $('#dia2 .dia-con .p2 span:nth-child(2)').html(list[3][parseInt(data.msg.user.race)]);
                $('#dia2 .dia-con .p2 span:nth-child(5)').html(data.msg.user.name);
                $('#dia2 .dia-con .p2 span:nth-child(3)').html(list[2][parseInt(data.msg.user.occupation)]);
                setTimeout(canvas_img(),1000)
                setTimeout(showDia('dia2'),2000);
            }else if(data.status==0&&data.msg.user==null){
                for(var i=0;i<data.msg.area.length;i++){
                    $('#android option').eq(i+1).append('<span>剩余'+data.msg.area[i].count+'</span>')
                    if(data.msg.area[i].count<=0){
                        $('#android option').eq(data.msg.area[i].id).attr("disabled","")
                    }
                }
                return
            }else{
                return
            }
        },
        error :function(){
            console.log("error");
        }

    });





    //提交按钮 弹出创角成功
    $('.submit').click(function(){
        if(account==""){
            login();
            return;
        }
        console.log(people)
        if(people.professional==""){
            alert("请选择职业")
            return
        }else if(people.server==""){
            alert("请选择大区")
            return
        }else if(people.role_name==""){
            alert("请输入名字")
            return
        }
        var len = 0;
        for (var i = 0; i < people.role_name.length; i++) {
            var a = people.role_name.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            } else {
                len += 1;
            }
        }
        if(len>12){
            alert("字符串长度不能超过12个字符")
            return
        }

        //0 为IOS   1 为android
        //区 1-6 对应1-6服
        //0-3对应 矮人  精灵 人族  兽人
        //0是男  1是女
        //0-3对应四个颜色
        //0-8对应9个职业
        var data1={
            name: people.role_name,
            account: account,  //账号
            system: people.models,  //机型
            area: people.server,  //大区
            race: (parseInt(people.role)+1)+"",  //种族
            sex: people.sex,        //性别
            skin: people.color,    //颜色
            occupation: people.professional,   //职业
            regType:"QQ"
        }
        console.log(url+"reg_user");
        console.log(data1);
        $.ajax({
            type: 'POST',
            url: url+"reg_user",
            data: data1,
            dataType:"JSON",
            success: function(data){
                console.log(data)
                if(data.status==1){
                    $('#test p').html(data.msg);
                    showDia('test');
                }else if(data.status==0){
                    var img =dia2[(parseInt(data.msg.race)-1)].img;//imgurl 就是你的图片路径
                    $('#dia2 .dia-con .img').attr('src',img)
                    //$('#dia2 .dia-con .img').attr('src','//game.gtimg.cn/images/kok/cp/a20180716wwzw/'+(parseInt(data.msg.race)-1)+'.png')
                    $('#dia2 .dia-con .p2 span:nth-child(1)').html(list[1][parseInt(data.msg.area)]);
                    $('#dia2 .dia-con .p2 span:nth-child(2)').html(list[3][parseInt(data.msg.race)]);
                    $('#dia2 .dia-con .p2 span:nth-child(5)').html(data.msg.name);
                    $('#dia2 .dia-con .p2 span:nth-child(3)').html(list[2][parseInt(data.msg.occupation)]);
                    setTimeout(canvas_img(),1000)
                   setTimeout(function(){
                       location.href=location.href;
                       location.reload();
                       showDia('dia2');
                   },2000);


                }
            },
            error :function( XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }

        });
    })
})

window.onload=function(){
    if(location.href.indexOf('#')==-1){
        location.href=location.href+"#";
        location.reload();
    }
}





