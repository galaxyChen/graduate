var r1=document.getElementById('round_1');
var r2=document.getElementById('round_2');
var center=document.getElementById('center');
var t1=document.getElementById('item_1');
var t2=document.getElementById('item_2');
var t3=document.getElementById('item_3');
var t4=document.getElementById('item_4');
var t5=document.getElementById('item_5');
var center2=document.getElementById('up_img');
var a1=document.getElementById('a_1');
var a2=document.getElementById('a_2');
var a3=document.getElementById('a_3');
var a4=document.getElementById('a_4');
var a5=document.getElementById('a_5');
var a6=document.getElementById('a_6');
var a=new Array(a1,a2,a3,a4,a5,a6);
var cards=document.getElementById('cards');
var c1=document.getElementById('c_1');
var c2=document.getElementById('c_2');
var c3=document.getElementById('c_3');
var c4=document.getElementById('c_4');
var c5=document.getElementById('c_5');
var c6=document.getElementById('c_6');
var goupFlag=0;
var content_1=document.getElementById('content_1');
var content_2=document.getElementById('content_2');
var content_3=document.getElementById('content_3');
var content_4=document.getElementById('content_4');
var content_5=document.getElementById('content_5');
var content_6=document.getElementById('content_6');
var content=Array(content_1,content_2,content_3,content_4,content_5,content_6);
var c=new Array(c1,c2,c3,c4,c5,c6);
var flag=true;
var showText=false;

var back_1=document.getElementById('backbox_1');
var back_2=document.getElementById('backbox_2');
var back_3=document.getElementById('backbox_3');
var back_4=document.getElementById('backbox_4');
var back_5=document.getElementById('backbox_5');
var back_6=document.getElementById('backbox_6');
var back=Array(back_1,back_2,back_3,back_4,back_5,back_6);


console.log(goupFlag);

function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
  
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
 
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
	var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  

function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  

center.addEventListener("click",function()
{
	myslider.next();
});

center.addEventListener("webkitAnimationEnd",function()
{
	addClass(r2,'showColorTwo');
	setTimeout(function()
	{
		addClass(r1,'showColorOne');
		addClass(t1,'zoomInOne');
		setTimeout("addClass(t2,'zoomInTwo');",300);
		setTimeout("addClass(t3,'zoomInThree');",400);
		setTimeout("addClass(t4,'zoomInFour');",500);
		setTimeout("addClass(t5,'zoomInFive');",600);
		
	},100);
});

a[0].addEventListener('webkitAnimationStart',function()
{
	if (goupFlag==0)
	{
		for (var i=2;i<=6;i++)
			setTimeout("addClass(a"+i+",'fadeInUp');",300+(i-2)*200);
		return ;
}

});

a6.addEventListener('webkitAnimationEnd',function()
{
	if (goupFlag==0)
	{
	for(var i=0;i<6;i++)
		a[i].style.opacity=1;
	goupFlag=1;
	return ;
	}
});

content_1.addEventListener('webkitAnimationEnd',function()
{
	if (showText)
	{
	for (var i=1;i<=4;i++)
		$('#t_1'+i).addClass('fadeInUp');
	showText=false;
}
});

content_2.addEventListener('webkitAnimationEnd',function()
{
	if (showText)
	{
	for (var i=1;i<=4;i++)
		$('#t_2'+i).addClass('fadeInUp');
	showText=false;
}
});

content_3.addEventListener('webkitAnimationEnd',function()
{
	if (showText)
	{
	for (var i=1;i<=4;i++)
		$('#t_3'+i).addClass('fadeInUp');
	showText=false;
}
});

content_4.addEventListener('webkitAnimationEnd',function()
{
	if (showText)
	{
	for (var i=1;i<=4;i++)
		$('#t_4'+i).addClass('fadeInUp');
	showText=false;
}
});

content_5.addEventListener('webkitAnimationEnd',function()
{
	if (showText)
	{
	for (var i=1;i<=4;i++)
		$('#t_5'+i).addClass('fadeInUp');
	showText=false;
}
});

content_6.addEventListener('webkitAnimationEnd',function()
{
	if (showText)
	{
	for (var i=1;i<=4;i++)
		$('#t_6'+i).addClass('fadeInUp');
	showText=false;
}
});


function resetClass()
{
	$('#cards').attr('class','cards animated');
	for (var i=1;i<=6;i++)
		{
			$('#a_'+i).attr('class','card animateds fadeInUp a_'+i);
			$('#c_'+i).attr('class','animateds activity c_'+i);
			$('#backbox_'+i).attr('class','backbox');
			$('#content_'+i).attr('class','content');
			$('#back_'+i).attr('class','back animateds');
		}
}

function upsAndDown(n)
{
	var eng;
	switch (n)
	{
		case 0:eng='one';break;
		case 1:eng='two';break;
		case 2:eng='three';break;
		case 3:eng='four';break;
		case 4:eng='five';break;
		case 5:eng='six';break;
	}
	if (goupFlag==2)
	{
		removeClass(cards,'goup');
		addClass(cards,'godown');
		removeClass(content[n],'goleft');
		addClass(content[n],'gocenter');
		removeClass(c[n],'bigger');
		addClass(c[n],'smaller');
		removeClass(a[n],'moveup'+eng);
		addClass(a[n],'movedown'+eng);
		for (var i=0;i<6;i++)
		if (i<n)
		{
			removeClass(a[i],'fadeOutUp');
			addClass(a[i],'fadeInDown');
		}
		else if (i>n)
		{
			removeClass(a[i],'fadeOutDown');
			addClass(a[i],'fadeInUp');
		}
		var nn=n+1;
		for (var i=1;i<=4;i++)
		$('#t_'+nn+i).removeClass('fadeInUp');
	$('.button').css('background-color','inherit');
		showText=false;
		goupFlag=1;
		return;
	}

	if (goupFlag==1)
	{
		resetClass();
	addClass(cards,'goup');
	removeClass(a[n],'fadeInUp');
	addClass(a[n],'moveup'+eng);
	addClass(c[n],'bigger');
	addClass(content[n],'goleft');
	for (var i=0;i<6;i++)
		if (i<n)
		{
			removeClass(a[i],'fadeInUp');
			addClass(a[i],'fadeOutUp');
		}
		else if (i>n)
		{
			removeClass(a[i],'fadeInUp');
			addClass(a[i],'fadeOutDown');
		}
		goupFlag=2;
		showText=true;
		return;
	}

}


back[0].addEventListener('click',function()
{
	upsAndDown(0);
	event.stopPropagation();
})

back[1].addEventListener('click',function()
{
	upsAndDown(1);
	event.stopPropagation();
})
back[2].addEventListener('click',function()
{
	upsAndDown(2);
	event.stopPropagation();
})
back[3].addEventListener('click',function()
{
	upsAndDown(3);
	event.stopPropagation();
})
back[4].addEventListener('click',function()
{
	upsAndDown(4);
	event.stopPropagation();
})
back[5].addEventListener('click',function()
{
	upsAndDown(5);
	event.stopPropagation();
})

content_1.addEventListener('click',function()
{
	upsAndDown(0);
	event.stopPropagation();
})

content_2.addEventListener('click',function()
{
	upsAndDown(1);
	event.stopPropagation();
})

content_3.addEventListener('click',function()
{
	upsAndDown(2);
	event.stopPropagation();
})

content_4.addEventListener('click',function()
{
	upsAndDown(3);
	event.stopPropagation();
})

content_5.addEventListener('click',function()
{
	upsAndDown(4);
	event.stopPropagation();
})

content_6.addEventListener('click',function()
{
	upsAndDown(5);
	event.stopPropagation();
})


$('#t_14').bind('mousedown',function()
{
	alert("活动尚未开始，敬请期待~")
	
})

$('#t_24').bind('mousedown',function()
{
	window.location.href="https://hemc.100steps.net/2016/time-capsule/";
})


$('#t_34').bind('mousedown',function()
{
	alert("活动尚未开始，敬请期待~")
	// 时光胶囊链接https://hemc.100steps.net/2016/time-capsule/
})
$('#t_44').bind('mousedown',function()
{
	alert("活动尚未开始，敬请期待~")
	
})
$('#t_54').bind('mousedown',function()
{
	alert("活动尚未开始，敬请期待~")
	
})
$('#t_64').bind('mousedown',function()
{
	alert("活动尚未开始，敬请期待~")
	
})

