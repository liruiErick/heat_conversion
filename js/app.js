function food_minus(target){
    	var $this = $(target);
		var cot=Number($this.siblings(".number3").html());
	if(cot <= 0){
		return;
	}else{
	    cot-=100;
	    $this.siblings(".number3").html(Number(cot));
	    if($this.siblings(".item_seleted").length > 0){
	    	var name = $this.siblings(".name3").html();
    		var num = $this.siblings(".number3").html();
    		var src=$this.parent().parent().siblings(".item-media").find("img").attr("src");
		    var heat=Number($this.parent().parent().siblings(".item-media").find("span").html());
    	    type=food_type;
    	    add_food(name,num,src,heat,type);	
	    }
	}
 }
/*餐盘食品数量减*/
function final_food_minus(target){
	var $this = $(target);
	var cot=Number($this.siblings(".number3").html());
	if(cot <= 0){
		return;
	}else{
	    cot-=100;
	    $this.siblings(".number3").html(Number(cot));
    	var name = $this.siblings(".name3").html();
		var num = $this.siblings(".number3").html();
		var src=$this.parent().parent().siblings(".item-media").find("img").attr("src");
	    var heat=Number($this.parent().parent().siblings(".item-media").find("span").html());
	    type=food_type;
	    add_food(name,num,src,heat,type);	

	}
 }
/*食品数量加*/
function final_food_plus(target){
	var $this = $(target);
	var cot=Number($this.siblings(".number3").html());
	cot+=100;
	$this.siblings(".number3").html(Number(cot));
	var name = $this.siblings(".name3").html();
	var num = $this.siblings(".number3").html();
	var src=$this.parent().parent().siblings(".item-media").find("img").attr("src");
	var heat=Number($this.parent().parent().siblings(".item-media").find("span").html());
	type=food_type;
	add_food(name,num,src,heat,type);	
}
/*餐盘食品数量加*/
function food_plus(target){
	var $this = $(target);
	var cot=Number($this.siblings(".number3").html());
	cot+=100;
	$this.siblings(".number3").html(Number(cot));
	if($this.siblings(".item_seleted").length > 0){
    	var name = $this.siblings(".name3").html();
		var num = $this.siblings(".number3").html();
		var src=$this.parent().parent().siblings(".item-media").find("img").attr("src");
		var heat=Number($this.parent().parent().siblings(".item-media").find("span").html());
    	type=food_type;
    	add_food(name,num,src,heat,type);	
    }
}
/*食物数量确认*/
function food_confirm(target){
	var $this = $(target);
	if($this.hasClass("item_seleted")){
		$this.html("请选择");
		$this.removeClass("item_seleted");
		$this.addClass("item_normal");
		var name = $this.siblings(".name3").html();
		$this.siblings(".number3").html("100");
		delete_food(name);
	}else{
		var num = $this.siblings(".number3").html();
		if(Number(num)<1){
			$.alert("请添加食品数量");
			return;
		}
		else{
			$this.html("取消选择");
		    $this.addClass("item_seleted");
		    $this.removeClass("item_normal");
		    var name = $this.siblings(".name3").html();
		    var src=$this.parent().parent().siblings(".item-media").find("img").attr("src");
		    var heat=Number($this.parent().parent().siblings(".item-media").find("span").html());
		    var num=Number($this.siblings(".number3").html());
		    type=food_type;
    	    add_food(name,num,src,heat,type);	
		}
	}
}
/*最后确认食物数量*/
function food_result_confirm(target){
    var $this=$(target);
    var src=$this.parent().parent().parent().parent().siblings(".content_body").find("img").attr("src");
    var name=$this.parent().parent().parent().parent().siblings(".content_body").find(".name3").html();
    var num=$this.parent().parent().parent().parent().siblings(".content_body").find(".number3").html();
    var heat=Number($this.parent().parent().parent().parent().siblings(".content_body").find("span").html());
	    add_food(name,num,src,heat);
   }
    /*餐盘食物数量确认*/
function food_plate_confirm(target){
	var $this = $(target);
	var name = $this.siblings(".name3").html();
	delete_food(name);
	$this.parent().parent().parent().parent().remove();
}
/*计算产生能量总数*/
function total_heat(target){
	/*计算热量值*/
    var total_heat=0;
	var dataArr=get_aComfirm_food();
	for(var i=0;i<dataArr.length;i++){
		total_heat+=((dataArr[i].num)*(dataArr[i].heat))/100;
	}
	$("#total_value").html(total_heat);
}
/*餐类选择*/
function meal_type_change(type){
	switch (type){
		case 1:
		    $(".lunch").find("img").attr("src","img/router/lunch_before.png");
    		$(".dinner").find("img").attr("src","img/router/dinner_before.png");
    		$(".add_food").find("img").attr("src","img/router/add_food_before.png");
    		$(".breakfast").find("img").attr("src","img/router/breakfast_after.png");
			$(".meal_type").html("早餐");
			break;
		case 2:
		    $(".lunch").find("img").attr("src","img/router/lunch_after.png");
    		$(".dinner").find("img").attr("src","img/router/dinner_before.png");
    		$(".add_food").find("img").attr("src","img/router/add_food_before.png");
    		$(".breakfast").find("img").attr("src","img/router/breakfast_before.png");
			$(".meal_type").html("午餐");
			break;
		case 3:
		    $(".lunch").find("img").attr("src","img/router/lunch_before.png");
    		$(".dinner").find("img").attr("src","img/router/dinner_after.png");
    		$(".add_food").find("img").attr("src","img/router/add_food_before.png");
    		$(".breakfast").find("img").attr("src","img/router/breakfast_before.png");
			$(".meal_type").html("晚餐");
			break;
		case 4:
		    $(".lunch").find("img").attr("src","img/router/lunch_before.png");
    		$(".dinner").find("img").attr("src","img/router/dinner_before.png");
    		$(".add_food").find("img").attr("src","img/router/add_food_after.png");
    		$(".breakfast").find("img").attr("src","img/router/breakfast_before.png");
			$(".meal_type").html("加餐");
			break;
		default:
			break;
	}	
}
/*餐类选择状态*/
function selected_status(status){
	switch(Number(status)){
		case 0:
		    $(".vegetable").find("img").attr("src","img/router2/shucai_after.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");		
			break;
		case 1:
		    $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhipin_after.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");
			break;
		case 2:
		     $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei_after.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");
			break;
		case 3:
		    $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao_after.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");
			break;
		case 4:
		     $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit_after.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");		
			break;
		case 5:
		     $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi_after.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");
			break;
		case 6:
		     $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/kuaican_after.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushitu.png");
			break;
		case 7:
		     $(".vegetable").find("img").attr("src","img/router2/vegetables.png");
    		$(".bean_products").find("img").attr("src","img/router2/ruzhiping.png");
    		$(".meat").find("img").attr("src","img/router2/roulei.png");
    		$(".drink").find("img").attr("src","img/router2/yinliao.png");			
			$(".fruit").find("img").attr("src","img/router2/fruit.png");
    		$(".snack").find("img").attr("src","img/router2/xiaochi.png");
    		$(".fastfood").find("img").attr("src","img/router2/fastfood.png");
    		$(".zhushi").find("img").attr("src","img/router2/zhushi_after.png");
			break;
	}	
}
