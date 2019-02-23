var loading_container = $('#preload-container');
var loaded = false;
var month = $('#month-wrapper');
var stone = $('#stone-wrapper');
var ta = $('#ta-wrapper');

var harf_screen_width = document.documentElement.clientWidth / 2;
var harf_screen_height = document.documentElement.clientHeight / 2;

window.onresize = function (){
	harf_screen_width = document.documentElement.clientWidth / 2;
	harf_screen_height = document.documentElement.clientHeight / 2;
}

var SCALE_REAT = {
	ta: {
		x: -10,
		y: -3,
		z: -0.6
	},
	month: {
		x: 10,
		y: 4
	},
	stone: {
		x: 4,
		y: 2
	}
}

window.onmousemove = function (e) {

	var e = e || event;
	
	var rate_x = (e.screenX - harf_screen_width) / harf_screen_width;
	var rate_y = (e.screenY - harf_screen_height) / harf_screen_height
	
	
	month.css({
		'transform' : 'translate3d('+ rate_x * SCALE_REAT.month.x +'px,'+ rate_y * SCALE_REAT.month.y +'px, 0)',
		'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.month.x +'px,'+ rate_y * SCALE_REAT.month.y +'px, 0)'
	})
	stone.css({
		'transform' : 'translate3d('+ rate_x * SCALE_REAT.stone.x +'px,'+ rate_y * SCALE_REAT.stone.y +'px, 0)',
		'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.stone.x +'px,'+ rate_y * SCALE_REAT.stone.y +'px, 0)'
	})
	ta.css({
		'transform' : 'translate3d('+ rate_x * SCALE_REAT.ta.x +'px,'+ rate_y * SCALE_REAT.ta.y +'px, 0) rotateZ('+ (rate_x * 0.3 + rate_y * 0.2) * SCALE_REAT.ta.z +'deg)',
		'webkitTransform' : 'translate3d('+ rate_x * SCALE_REAT.ta.x +'px,'+ rate_y * SCALE_REAT.ta.y +'px, 0) rotateZ('+ (rate_x * 0.3 + rate_y * 0.2) * SCALE_REAT.ta.z +'deg)',
	})
}


function initPage () {
	
	loaded = true;
	
}



$(document).ready(function (){

    new Loading(function(){
    	
		loading_container.addClass('fade-out');
		
		setTimeout(function () {
			loading_container.remove();
			initPage();
		}, 2000);
		
　　}).init(50,1,false);    
})