// 重设网页 html font-size
function htmlFontSize(){
	var win = $(window),
		winH = win.height(),
		winW = win.width(),
		hfz;
	winW > winH ? hfz = winH : hfz = winW;
	$("html").css('font-size',~~(hfz*100000/36)/100000+"px");
}

// 生成时间戳函数
function getTimeStamp(){
	return Date.parse(new Date());
}

// 跳转链接函数
function gourl(url){
	window.location.href=url;
}


// ajax get json 方法
function getJson(url,func){
	$.ajax({
		type:'get',
		url:url,
		dataType: 'json',
		success: function(data){
			if (data.success){
				func(data);
			}else{
				alert("接口调用失败");
			}
		},
		error: function(data){
			alert(JSON.stringify(data));
		}
	});
}

// 时间整形

function goodTime(str){
	// "2016-05-31T08:33:21.950Z"
	var now = new Date().getTime(),
		oldTime = new Date(str).getTime(),
		difference = now - oldTime,
		result='',
		minute = 1000 * 60,
		hour = minute * 60,
		day = hour * 24,
		halfamonth = day * 15,
		month = day * 30,
		year = month * 12,
		
		_year = difference/year,
		_month =difference/month,
		_week =difference/(7*day),
		_day =difference/day,
		_hour =difference/hour,
		_min =difference/minute;
		 if(_year>=1) {result= "发表于 " + ~~(_year) + " 年前"}
	else if(_month>=1) {result= "发表于 " + ~~(_month) + " 个月前"}
	else if(_week>=1) {result= "发表于 " + ~~(_week) + " 周前"}
	else if(_day>=1) {result= "发表于 " + ~~(_day) +" 天前"}
	else if(_hour>=1) {result= "发表于 " + ~~(_hour) +" 个小时前"}
	else if(_min>=1) {result= "发表于 " + ~~(_min) +" 分钟前"}
	else result="刚刚";
	return result;
}

// 获取ID

function getUrlId(){
	var host = window.location.href;
	var id = host.substring(host.indexOf("?")+1,host.length);
	// console.log(id);
	// return isNaN(id) ? 1 : id;
	return id;
}