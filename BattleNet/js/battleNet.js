//要插入的背景图
var arr = ['wow-cn.png', 'diablo3-cn.png', 'starcraft2-cn.png',
	'starcraft-cn.jpg', 'heroes-cn.png', 'hearthstone-cn.png', 'overwatch-cn.png'
];

//要插入的文字
var array = ['《魔兽世界》','《暗黑破坏神III》','《星际争霸II》','《星际争霸：重置版》','《风暴英雄》','《炉石传说》','《守望先锋》'];

//要插入的导航游戏图
var arrGame = ['card-overwatch.jpg', 'card-world-of-warcraft.jpg', 'card-hearthstone.jpg',
	'card-heroes-of-the-storm.jpg', 'card-starcraft-2.jpg', 'card-starcraft-remastered.jpg', 'card-diablo-3.jpg'
];
//获取游戏背景图容器
var boxImg = $('.Gameimage');
//获取游戏标签容器
var tip = $('.game-tip');
//获取导航游戏标签容器
var gameTitle = $('.game-nav');

var act; //函数容器变量
var time = 200; //每间隔0.2秒添加一张图片和文字
var time1=100;	

//遍历数组的函数
function go(n) {
	//当变量n超出数组长度的时候，返回false,结束遍历
	if(n > arr.length && n > array.length) {
		clearInterval(act);
		return false;
	} else {
		act = setInterval(function() {

			n = n + 1;
			var imgs = 'img/' + arr[n];
			var gameTitleImg = '<img src="img/' + arrGame[n] + '"/>';
			//注意图片路径，设置淡入； 要先隐藏了对象，再设置淡入
			boxImg.find('a').eq(n).css("background-image", "url(" + imgs + ")").hide().fadeIn(1000);
			//设置文字插入
			tip.eq(n).append(array[n]);
			//导航游戏图标的淡入
			//			gameTitle.find('a').eq(n).append(gameTitleImg).hide().fadeIn(500);
			//			//收起div后的淡入重新操作
			//			if($('.game-container').css('display')=='none'){
			//				//清除a标签内容
			//				gameTitle.find('a').empty();
			//			}else{
			//				//如果导航处游戏内容div块为显示状态，则重新插入并实现图片淡入
			//				gameTitle.find('a').eq(n).append(gameTitleImg).hide().fadeIn(500);
			//			}
		}, time);
	}
}
go(-1); //执行函数

//导航游戏图片淡入
function showImg(n) {
	//当变量n超出数组长度的时候，返回false,结束遍历
	if(n > arrGame.length) {
		clearInterval(act);
		return false;
	} else {
		act = setInterval(function() {

			n = n + 1;
			var gameTitleImg = '<img src="img/' + arrGame[n] + '"/>';
			//注意图片路径，设置淡入； 要先隐藏了对象，再设置淡入
			gameTitle.find('a').eq(n).append(gameTitleImg).hide().fadeIn(500);
		}, time1);
	}
}

//首页游戏下div块的控制
$('#game').on("click", function() {
	if($('.game-container').css('display') == 'none') {
		//点击显示div
		$('.game-container').show();
		//如果右边的账户div显示，则同时让其隐藏
		$('.user-login').hide();
		//点击执行淡入游戏图片
		showImg(-1);
	} else {
		//收起div块的时候清空a标签中的图片，下次展开再遍历
		gameTitle.find('a').empty();
		//显示该div
		$('.game-container').hide();
	}
});

//账户div的显示控制
$('#myAccount').on("click", function() {
	if($('.user-login').css('display') == 'none') {
		$('.user-login').show();
		$('.game-container').hide();
		//收起div块的时候清空a标签中的图片，下次展开再遍历
		gameTitle.find('a').empty();
	} else {
		$('.user-login').hide();
	}
});