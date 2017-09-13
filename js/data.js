/**
 * 这个JS文件用于缓存前台食物静态数据
 */

/*食物类型*/
var dataType = ["蔬菜","乳制品","肉类","饮料","水果","小吃","快餐","主食"];
/*存储食物静态数据,按照食物类型顺序存储*/
var data =[
           [{"name":"马铃薯","heat":"79","src":"shucai/malingshu.png","value":"100"},
		    {"name":"红薯","heat":"57","src":"shucai/hongshu.png","value":"100"},
		    {"name":"豆腐","heat":"111","src":"shucai/doufu.png","value":"100"},
		    {"name":"豆腐皮","heat":"431","src":"shucai/doufupi.png","value":"100"},
		    {"name":"腐竹","heat":"476","src":"shucai/fuzhu.png","value":"100"},
		    {"name":"豆腐干","heat":"414","src":"shucai/doufugan.png","value":"100"},
		    {"name":"白萝卜","heat":"13","src":"shucai/bailuobo.png","value":"100"},
		    {"name":"青萝卜	","heat":"23","src":"shucai/qingluobo.png","value":"100"},
		    {"name":"胡萝卜","heat":"25","src":"shucai/huluobo.png","value":"100"},
		    {"name":"扁豆","heat":"23","src":"shucai/biandou.png","value":"100"},
		    {"name":"豇豆","heat":"18","src":"shucai/jiangdou.png","value":"100"},
		    {"name":"四季豆","heat":"15","src":"shucai/sijidoucaidouyundou.png","value":"100"},
		    {"name":"甜脆荷兰豆","heat":"17","src":"shucai/tiancuihelandou.png","value":"100"},
		    {"name":"黄豆芽","heat":"32","src":"shucai/huangdouya.png","value":"100"},
		    {"name":"绿豆芽","heat":"13","src":"shucai/lvdouya.png","value":"100"},
		    {"name":"豌豆苗","heat":"26","src":"shucai/wandoumiao.png","value":"100"},
		    {"name":"茄子(紫皮、长)","heat":"13","src":"shucai/qiezizipichang.png","value":"100"},
		    {"name":"茄子(紫皮、圆)","heat":"19","src":"shucai/qiezizipiyuan.png","value":"100"},
		    {"name":"番茄(西红柿)","heat":"11","src":"shucai/fanqiexihongshi.png","value":"100"},
		    {"name":"樱桃番茄","heat":"22","src":"shucai/yingtaofanqiexiaoxihongshi.png","value":"100"},
		    {"name":"辣椒(青、尖)","heat":"17","src":"shucai/lajiaoqingjian.png","value":"100"},
		    {"name":"甜椒(柿子椒)","heat":"16","src":"shucai/tianjiaoshizijiao.png","value":"100"},
		    {"name":"秋葵(羊角豆)","heat":"16","src":"shucai/qiukuiyangjiaodou.png","value":"100"},
		    {"name":"冬瓜","heat":"8","src":"shucai/donggua.png","value":"100"},
		    {"name":"黄金西葫芦","heat":"11","src":"shucai/huangjinxihulu.png","value":"100"},
		    {"name":"迷你黄瓜","heat":"12","src":"shucai/minihuangguahelanruhuanggua.png","value":"100"},
		    {"name":"南瓜","heat":"31","src":"shucai/nangua.png","value":"100"},
		    {"name":"丝瓜","heat":"16","src":"shucai/sigua.png","value":"100"},
		    {"name":"大葱","heat":"23","src":"shucai/dacong.png","value":"100"},
		    {"name":"细香葱","heat":"21","src":"shucai/xixiangcong.png","value":"100"},
		    {"name":"韭菜","heat":"18","src":"shucai/jiucai.png","value":"100"},
		    {"name":"大白菜","heat":"13","src":"shucai/dabaicai.png","value":"100"},
		    {"name":"酸菜","heat":"5","src":"shucai/suancai.png","value":"100"},
		    {"name":"小白菜","heat":"10","src":"shucai/xiaobaicaiqingcai.png","value":"100"},
		    {"name":"娃娃菜","heat":"8","src":"shucai/wawacai.png","value":"100"},
		    {"name":"油菜","heat":"10","src":"shucai/youcai.png","value":"100"},
		    {"name":"甘蓝[绿]","heat":"12","src":"shucai/ganlanlvyuanbaicai.png","value":"100"},
		    {"name":"甘蓝[紫]","heat":"19","src":"shucai/ganlanzi.png","value":"100"},
		    {"name":"芥蓝","heat":"16","src":"shucai/jielanganlancai.png","value":"100"},
		    {"name":"菜花","heat":"15","src":"shucai/caihuahuayecai.png","value":"100"},
		    {"name":"西兰花","heat":"19","src":"shucai/xilanhualvcaihua.png","value":"100"},
		    {"name":"芹菜","heat":"11","src":"shucai/qincaijing.png","value":"100"},
		    {"name":"西芹","heat":"12","src":"shucai/xiqin.png","value":"100"},
		    {"name":"生菜","heat":"10","src":"shucai/shengcai.png","value":"100"},
		    {"name":"油麦菜","heat":"8","src":"shucai/youmaicai.png","value":"100"},
		    {"name":"莴笋叶","heat":"12","src":"shucai/wosunye.png","value":"100"},
		    {"name":"芦笋","heat":"13","src":"shucai/lusunlv	.png","value":"100"},
		    {"name":"藕","heat":"42","src":"shucai/ou.png","value":"100"},
		    {"name":"芋头","heat":"54","src":"shucai/yutou.png","value":"100"},
		    {"name":"苜蓿","heat":"32","src":"shucai/muxujinhuacai.png","value":"100"},
		    {"name":"茶树菇","heat":"279","src":"shucai/chashugugan.png","value":"100"},
		    {"name":"鸡腿菇","heat":"257","src":"shucai/jituigugan.png","value":"100"},
		    {"name":"平菇","heat":"14","src":"shucai/pinggu.png","value":"100"},
		    {"name":"松蘑","heat":"202","src":"shucai/songmo.png","value":"100"},
		    {"name":"杏鲍菇","heat":"31","src":"shucai/xingbaogu.png","value":"100"},
		    {"name":"竹荪","heat":"155","src":"shucai/zhusun.png","value":"100"},
		    {"name":"裙带菜","heat":"119","src":"shucai/qundaicaigan.png","value":"100"},
		    {"name":"海带菜","heat":"89","src":"shucai/haidaicai.png","value":"100"}],
		   [{"name":"牛奶","heat":"61","src":"ruzhipin/niunai.png","value":"100"},
            {"name":"全脂奶粉","heat":"504","src":"ruzhipin/quanzhinaifen.png","value":"100"},
	        {"name":"低脂奶粉(高钙高铁)","heat":"413","src":"ruzhipin/dizhinaifengaogaigaotie.png","value":"100"},
	        {"name":"儿童奶粉","heat":"451","src":"ruzhipin/ertongnaifen.png","value":"100"},
	        {"name":"中老年奶粉","heat":"429","src":"ruzhipin/zhonglaoniannaifen.png","value":"100"},
	        {"name":"酸奶(调味)","heat":"88","src":"ruzhipin/suannaitiaowei.png","value":"100"},
	        {"name":"酸奶(果粒)","heat":"97","src":"ruzhipin/suannaiguoli.png","value":"100"}],
           [{"name":"猪肉(前臀尖)","heat":"334","src":"roulei/zhurouqiantunjianliangzazhu.png","value":"100"},
		    {"name":"猪肉(后臀尖)","heat":"175","src":"roulei/zhurouhoutunjianliangzazhu.png","value":"100"},
		    {"name":"猪肉(里脊)","heat":"150","src":"roulei/zhurouliji.png","value":"100"},
		    {"name":"猪排骨","heat":"351","src":"roulei/zhupaigu.png","value":"100"},
		    {"name":"腊肉","heat":"692","src":"roulei/larou.png","value":"100"},
		    {"name":"叉烧肉","heat":"196","src":"roulei/chashaorou.png","value":"100"},
		    {"name":"酱排骨","heat":"366","src":"roulei/jiangpaigu.png","value":"100"},
		    {"name":"猪肉脯","heat":"378","src":"roulei/zhuroupu.png","value":"100"},
		    {"name":"酱肘子","heat":"202","src":"roulei/jiangzhouzi.png","value":"100"},
		    {"name":"火腿肠","heat":"215","src":"roulei/huotuichang.png","value":"100"},
		    {"name":"午餐肉","heat":"320","src":"roulei/wucanrou.png","value":"100"},
		    {"name":"牛肉","heat":"134","src":"roulei/niuroulijirouniuliu.png","value":"100"},
		    {"name":"牛腩","heat":"332","src":"roulei/niunan.png","value":"100"},
		    {"name":"牛腱子","heat":"122","src":"roulei/niujianzi.png","value":"100"},
		    {"name":"酱牛肉","heat":"229","src":"roulei/jiangniurou.png","value":"100"},
		    {"name":"羊肉(前腿)","heat":"97","src":"roulei/yangrouqiantui.png","value":"100"},
		    {"name":"羊肉(后腿)","heat":"111","src":"roulei/yangrouhoutui.png","value":"100"},
		    {"name":"羊肉片","heat":"118","src":"roulei/yangroupian.png","value":"100"},
		    {"name":"烤羊肉(五香)","heat":"183","src":"roulei/kaoyangrouwuxiang.png","value":"100"},
		    {"name":"羊肉串(生)","heat":"118","src":"roulei/yangrouchuansheng.png","value":"100"},
		    {"name":"驴肉(五香)","heat":"167","src":"roulei/lvrouwuxiang.png","value":"100"},
		    {"name":"鸡胸脯肉","heat":"118","src":"roulei/jixiongpurou.png","value":"100"},
		    {"name":"鸡腿","heat":"146","src":"roulei/jitui.png","value":"100"},		
		    {"name":"鸡翅","heat":"202","src":"roulei/jichi.png","value":"100"},
		    {"name":"烤鸭","heat":"530","src":"roulei/kaoya.png","value":"100"},
		    {"name":"火鸡腿","heat":"100","src":"roulei/huojitui.png","value":"100"},
		    {"name":"草鱼","heat":"96","src":"roulei/caoyu.png","value":"100"},
		    {"name":"鲢鱼","heat":"84","src":"roulei/lianyu.png","value":"100"},
		    {"name":"鲫鱼","heat":"89","src":"roulei/jiyu.png","value":"100"},
		    {"name":"带鱼","heat":"108","src":"roulei/daiyu.png","value":"100"},
		    {"name":"小黄花鱼","heat":"114","src":"roulei/xiaohuanghuayu.png","value":"100"},
		    {"name":"鱼丸","heat":"107","src":"roulei/yuwan.png","value":"100"},
		    {"name":"虾仁(红)","heat":"48","src":"roulei/xiarenhong.png","value":"100"},
		    {"name":"虾仁肉丸","heat":"151","src":"roulei/xiarenrouwan.png","value":"100"},
		    {"name":"海蟹(小)","heat":"81","src":"roulei/haixiexiao.png","value":"100"},
		    {"name":"蟹足棒","heat":"123","src":"roulei/xiezubang.png","value":"100"},
		    {"name":"海蚌","heat":"42","src":"roulei/haibeng.png","value":"100"},
		    {"name":"墨鱼圈","heat":"72","src":"roulei/moyuquan.png","value":"100"},
		    {"name":"墨鱼丸","heat":"128","src":"roulei/moyuwan.png","value":"100"},
		    {"name":"鸡蛋(红皮)","heat":"143","src":"roulei/jidanhongpi.png","value":"100"},
		    {"name":"荷包蛋(油煎)","heat":"199","src":"roulei/hebaodanyoujian.png","value":"100"},
		    {"name":"荷包蛋(煮)","heat":"164","src":"roulei/hebaodanzhu.png","value":"100"},
		    {"name":"咸鸭蛋(煮)","heat":"177","src":"roulei/xianyadanzhu.png","value":"100"}],
		   [{"name":"可口可乐","heat":"43","src":"yinliao/kekoukele.png","value":"100"},
		    {"name":"苹果汁饮料","heat":"50","src":"yinliao/pingguozhiyinliao.png","value":"100"},
		    {"name":"橙汁饮料","heat":"46","src":"yinliao/chengzhiyinliao.png","value":"100"},
		    {"name":"芒果汁饮料","heat":"44","src":"yinliao/mangguozhiyinliao.png","value":"100"},
		    {"name":"沙棘果浆","heat":"325","src":"yinliao/shajiguojiang.png","value":"100"},
		    {"name":"西柚汁饮料","heat":"34","src":"yinliao/xiyouzhiyinliao.png","value":"100"},
		    {"name":"椰子汁饮料","heat":"51","src":"yinliao/yezizhiyinliao.png","value":"100"},
		    {"name":"杏仁椰汁饮料","heat":"39","src":"yinliao/xingrenyezhiyinliao.png","value":"100"},
		    {"name":"胡萝卜汁饮料","heat":"24","src":"yinliao/huluobozhiyinliao.png","value":"100"},
		    {"name":"杏仁露","heat":"49","src":"yinliao/xingrenlu.png","value":"100"},
		    {"name":"豆浆","heat":"30","src":"yinliao/doujiang.png","value":"100"},
		    {"name":"豆浆(甜)","heat":"33","src":"yinliao/doujiangtian.png","value":"100"},
		    {"name":"纯净水","heat":"0","src":"yinliao/chunjingshui.png","value":"100"}], 
		   [{"name":"葡萄柚","heat":"33","src":"shuiguo/putaoyoutaiwanxiyou.png","value":"100"},
	        {"name":"桂圆(干)","heat":"309","src":"shuiguo/guiyuangan.png","value":"100"},
	        {"name":"红毛丹","heat":"79","src":"shuiguo/hongmaodan.png","value":"100"},
	        {"name":"火龙果","heat":"51","src":"shuiguo/huolongguo.png","value":"100"},
	        {"name":"荔枝(干)","heat":"317","src":"shuiguo/lizhigan.png","value":"100"},
	        {"name":"榴莲","heat":"147","src":"shuiguo/liulian.png","value":"100"},
	        {"name":"芒果(大头)","heat":"50","src":"shuiguo/mangguodatou.png","value":"100"},
	        {"name":"番木瓜","heat":"30","src":"shuiguo/fanmugua.png","value":"100"},
	        {"name":"山竹","heat":"69","src":"shuiguo/shanzhu.png","value":"100"},
	        {"name":"蜜桃","heat":"45","src":"shuiguo/mitao.png","value":"100"},
	        {"name":"冬枣","heat":"105","src":"shuiguo/dongzao.png","value":"100"},
	        {"name":"红提子葡萄","heat":"52","src":"shuiguo/hongtiziputao.png","value":"100"},
	        {"name":"小西瓜","heat":"123","src":"shuiguo/xiaoxigua.png","value":"100"},
	        {"name":"香蕉(海南)","heat":"82","src":"shuiguo/xiangjiaohainan.png","value":"100"}],
		   [{"name":"八宝粥","heat":"81","src":"xiaochi/babaozhou.png","value":"100"},
		    {"name":"黑芝麻糊","heat":"408","src":"xiaochi/heizhimahu.png","value":"100"},
		    {"name":"麦片","heat":"393","src":"xiaochi/maipian.png","value":"100"},
		    {"name":"燕麦片","heat":"353","src":"xiaochi/yanmaipian.png","value":"100"},
		    {"name":"苦荞麦片","heat":"411","src":"xiaochi/kuqiaomaipianwutang.png","value":"100"},
		    {"name":"玉米片","heat":"365","src":"xiaochi/yumipian.png","value":"100"},
		    {"name":"红烧牛肉方便面","heat":"447","src":"xiaochi/hongshaoniuroufangbianmian.png","value":"100"},
		    {"name":"鳕鱼方便面","heat":"470","src":"xiaochi/xueyufangbianmian.png","value":"100"},
		    {"name":"饼干(甜酥夹心)","heat":"557","src":"xiaochi/binggantiansujiaxin.png","value":"100"},
		    {"name":"饼干(苏打夹心)","heat":"463","src":"xiaochi/binggansudajiaxin.png","value":"100"},
		    {"name":"早茶饼","heat":"440","src":"xiaochi/zaochabing.png","value":"100"},
		    {"name":"雪米饼","heat":"463","src":"xiaochi/xuemibing.png","value":"100"},
		    {"name":"蛋酥卷","heat":"523","src":"xiaochi/dansujuan.png","value":"100"},
		    {"name":"巧克力派","heat":"425","src":"xiaochi/qiaokelipai.png","value":"100"},
		    {"name":"洋葱圈","heat":"476","src":"xiaochi/yangcongquan.png","value":"100"},
		    {"name":"烧烤味薯片","heat":"548","src":"xiaochi/shaokaoweishupian.png","value":"100"},
		    {"name":"怪味胡豆","heat":"576","src":"xiaochi/guaiweihudou.png","value":"100"},
		    {"name":"香辣味薯片","heat":"555","src":"xiaochi/xianglaweishupian.png","value":"100"},
		    {"name":"春卷(素馅)","heat":"182","src":"xiaochi/chunjuansuxian.png","value":"100"},
		    {"name":"黑芝麻汤圆","heat":"311","src":"xiaochi/heizhimatangyuan.png","value":"100"},
		    {"name":"醪糟","heat":"100","src":"xiaochi/laozao.png","value":"100"},
		    {"name":"煎饼","heat":"317","src":"xiaochi/jianbing.png","value":"100"},
		    {"name":"过桥米线","heat":"92","src":"xiaochi/guoqiaomixian.png","value":"100"},
		    {"name":"蛋糕(巧克力)","heat":"437","src":"xiaochi/dangaoqiaokeli.png","value":"100"},
		    {"name":"蛋糕(水果)","heat":"347","src":"xiaochi/dangaoshuiguo.png","value":"100"},
		    {"name":"月饼(蛋黄)","heat":"399","src":"xiaochi/yuebingdanhuang.png","value":"100"},
		    {"name":"月饼(豆沙)","heat":"325","src":"xiaochi/yuebingdousha.png","value":"100"},
		    {"name":"桃(糖水罐头)","heat":"59","src":"xiaochi/taotangshuiguantou.png","value":"100"},
		    {"name":"小枣(干)","heat":"266","src":"xiaochi/xiaozaogan.png","value":"100"},
		    {"name":"牛肉干","heat":"342","src":"xiaochi/niurougan.png","value":"100"},
		    {"name":"无花果(干)","heat":"361","src":"xiaochi/wuhuaguogan.png","value":"100"}],
           [{"name":"鸡肉汉堡","heat":"292","src":"kuaican/jirouhanbao.png","value":"100"},
		    {"name":"鸡肉卷","heat":"253","src":"kuaican/jiroujuan.png","value":"100"},
		    {"name":"辣鸡翅","heat":"337","src":"kuaican/lajichi.png","value":"100"},
		    {"name":"新奥尔良鸡翅","heat":"240","src":"kuaican/xinaoerliangjichi.png","value":"100"},
		    {"name":"劲爆鸡米花","heat":"302","src":"kuaican/jingbaojimihua.png","value":"100"},
		    {"name":"薯条","heat":"298","src":"kuaican/shutiao.png","value":"100"},
		    {"name":"比萨饼","heat":"235","src":"kuaican/bisabingjianailaorouheshucai.png","value":"100"},
		    {"name":"三明治","heat":"244","src":"kuaican/sanmingzhijiahuotuiganlao.png","value":"100"},
		    {"name":"热狗","heat":"250","src":"kuaican/regouyuanwei.png","value":"100"},
		    {"name":"铁板牛肉炒面","heat":"438","src":"kuaican/tiebanniurouchaomian.png","value":"100"},
		    {"name":"海鲜鸡味米线","heat":"167","src":"kuaican/haixianjiweimixian.png","value":"100"},
		    {"name":"什锦炒饭","heat":"188","src":"kuaican/shenjinchaofan.png","value":"100"},
		    {"name":"虾仁炒饭","heat":"138","src":"kuaican/xiarenchaofan.png","value":"100"}],
	       [{"name":"挂面","heat":"361","src":"zhushi/guamian.png","value":"100"},
	        {"name":"龙须面(素)","heat":"356","src":"zhushi/longxumiansu.png","value":"100"},
	        {"name":"龙须面(鸡蛋)","heat":"345","src":"zhushi/longxumianjidan.png","value":"100"},
	        {"name":"花卷(加牛奶)","heat":"274","src":"zhushi/huajuanjianiunai.png","value":"100"},
	        {"name":"馒头","heat":"226","src":"zhushi/mantou.png","value":"100"},
	        {"name":"米饭","heat":"113","src":"zhushi/mifan.png","value":"100"},
	        {"name":"米粥","heat":"58","src":"zhushi/mizhou.png","value":"100"},
	        {"name":"米粉","heat":"346","src":"zhushi/mifen.png","value":"100"},
	        {"name":"河粉","heat":"356","src":"zhushi/hefen.png","value":"100"},
	        {"name":"玉米面面条","heat":"348","src":"zhushi/yumimianmiantiao.png","value":"100"},
	        {"name":"饺子(素馅)","heat":"198","src":"zhushi/jiaozisuxian.png","value":"100"},
	        {"name":"饺子(三鲜馅)","heat":"240","src":"zhushi/jiaozisanxianxian.png","value":"100"},
	        {"name":"饺子(猪肉白菜馅)","heat":"218","src":"zhushi/jiaozizhuroubaicaixian.png","value":"100"},
	        {"name":"饺子(猪肉芹菜馅)","heat":"253","src":"zhushi/jiaozizhurouqincaixian.png","value":"100"},
	        {"name":"饺子(猪肉茴香馅)","heat":"223","src":"zhushi/jiaozizhurouhuixiangxian.png","value":"100"},
	        {"name":"饺子(猪肉香菇馅)","heat":"231","src":"zhushi/jiaozizhurouxiangguxian.png","value":"100"},
	        {"name":"饺子(猪肉虾仁馅)","heat":"267","src":"zhushi/jiaozizhurouxiarenxian.png","value":"100"},
	        {"name":"饺子(猪肉韭菜馅)","heat":"250","src":"zhushi/jiaozizhuroujiucaixian.png","value":"100"},
	        {"name":"包子(三鲜馅)","heat":"223","src":"zhushi/baozisanxianxian.png","value":"100"},
	        {"name":"包子(猪肉馅)","heat":"227","src":"zhushi/baozizhurouxian.png","value":"100"},
	        {"name":"韭菜盒子","heat":"211","src":"zhushi/jiucaihezi.png","value":"100"},
	        {"name":"冬菜虾仁馄饨","heat":"180","src":"zhushi/dongcaixiarenhuntun.png","value":"100"},
	        {"name":"小米(黄)","heat":"355","src":"zhushi/xiaomihuang.png","value":"100"}]
          ];


/**
 * 通过数据类型获取对应的数据
 * 逻辑是：
 * 1.将type转换成数字类型,判断type是否在0和data.lenght之间
 * 2.将type作为数组下标，从data数据集合中获取对应的元素
 * @param {Object} type	数据类型，对应data集合的索引下标
 * 0.代表蔬菜
 * 1.代表乳制品
 * 2.代表肉类
 * 3.代表饮料
 * 4.代表水果
 * 5.代表小吃
 * 6.代表快餐
 * 7.代表主食
 */
function getDataByType(type){
	
	/*如果data数据集合为空，则返回NULL*/
	if(!data || !data.length){
		return null;
	}
	
	/*将type转换成整形数字*/
	var index = parseInt(type);
	
	/*判断Index的值是否在0和data.length之间*/
	if(index >=0 && index < data.length){
		return data[index];
	}else{
		return null;
	}
}

/**
 * 通过食物类型获取食物名称
 * @param {Object} type 食物类型
 */
function getTypeName(type){
	/*将type转换成整形数字*/
	var index = parseInt(type);
	
	/*判断Index的值是否在0和data.length之间*/
	if(index >=0 && index < dataType.length){
		return dataType[index];
	}else{
		return null;
	}
}

/*餐盘食物列表*/
var aComfirm_food=[];

/**
 * 通过name获取餐盘中的食物信息
 * @param {Object} name 食物名称
 */
function get_food(name){
	for(var i=0;i<aComfirm_food.length;i++){
		if(aComfirm_food[i].name==name){
			return aComfirm_food[i];
		}
	}
	return null;
}

/**
 * 添加或更新所选食物
 * @param {Object} name 食物名称
 * @param {Object} num  食物数量值
 * @param {Object} src  食物图片
 * @param {Object} num  食物类型
 */
function add_food(name,value,src,heat,type){
	var food = get_food(name);
	if(!food){
		aComfirm_food.push({"name":name,"num":value,"src":src,"heat":heat,"type":type});
	}else{
		food.num = value;
	}
}


/**
 * 删除所选食物
 * @param {Object} name 食物名称
 */
function delete_food(name){
	for(var i=0;i<aComfirm_food.length;i++){
		if(aComfirm_food[i].name==name){
			aComfirm_food.splice(i,1); 
			return 1;//成功
		}
	}
    return 0; //失败
}

/**
 * 获取餐盘食物列表数据
 */
function get_aComfirm_food(){
	return aComfirm_food;
}

/*存储运动消耗表静态数据*/
var dataActive=[
{"name":"安静(不运动)","value":"0.9","src":"active/anjing.png"},{"name":"划船","value":"4.8","src":"active/huachuan.png"},{"name":"步行","value":"3.6","src":"active/buxing.png"},{"name":"家务","value":"2.5","src":"active/jiawu.png"},
{"name":"自行车(<16公里/小时)","value":"4","src":"active/zixingchexiao.png"},{"name":"自行车(16~19公里/小时)","value":"5.9","src":"active/zixingcheda.png"},{"name":"羽毛球","value":"5.7","src":"active/yumaoqiu.png"},
{"name":"游泳(10~20米/分钟)","value":"3.62","src":"active/youyongxiao.png"},{"name":"游泳(20~50米/分钟)","value":"7.22","src":"active/youyongda.png"},{"name":"跳绳(慢速)","value":"7.8","src":"active/tiaoshengman.png"},
{"name":"跳绳(中速)","value":"10","src":"active/tiaoshengzhong.png"},{"name":"跳绳(快速)","value":"11.9","src":"active/tiaoshengkuai.png"},
{"name":"手球","value":"7.8","src":"active/shouqiu.png"},{"name":"长距离行走","value":"5","src":"active/changjulixingzou.png"},{"name":"跑步(跑走结合)","value":"5.9","src":"active/paozou.png"},{"name":"跑步(慢跑)","value":"7.3","src":"active/paobuman.png"},
{"name":"跑步(200米/分钟)","value":"12.4","src":"active/paobumi.png"},{"name":"原地跑(140步/分钟)","value":"21.47","src":"active/yuandipao.png"},{"name":"有氧舞蹈","value":"5.9","src":"active/youyangwudao.png"},
{"name":"太极拳","value":"4.91","src":"active/taijiquan.png"},{"name":"滑旱冰","value":"6.9","src":"active/huahanbing.png"},{"name":"滑雪","value":"9.5","src":"active/huaxue.png"}
]

/**
 * 获取运动消耗表
 */
function get_dataActive(){
	return dataActive;
}

