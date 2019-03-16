
//_("col1").innerHTML=_("col1").offsetHeight;
//_("col1").innerHTML=_("main").children.length;
var col_height=[];

var device;
for(i=1;i<=4;i++){
	margin=(_("col"+i+"_content").getAttribute("data-float-align")=="left")?"-40%":"40%";
//	_("col"+i+"_content").style.marginLeft=margin;
	if(margin=="40%"){_("col"+i+"_content").children[0].style.float="right";_("col"+i+"_content").children[0].style.marginRight=-parseInt(margin)+"%";}else{_("col"+i+"_content").style.marginLeft=margin;}
	
}
function smooth_scroll(){
	window.scrollBy({
		top: (col_height[1]+col_height[2]+col_height[3]+col_height[4])-document.body.scrollTop, // negative value acceptable
		left: 0, 
		behavior: 'smooth' 
	});	
}
function width_check(w,h){
	if(w < 601){device="mob"} if(w < 992 && w>602){device="tab"}if(w > 992){device="pc"};
	
	for(i=1;i<=4;i++){
		col_height[i]=_("col"+i).offsetHeight
	}
	_("main").style.backgroundPosition="0px "+(col_height[1])+"px"
	if(w!=window.innerWidth || Math.abs(h-window.innerHeight)>50){
		//console.log(h-window.innerHeight)
	w = window.innerWidth;
	h = window.innerHeight;
		_("background_logo_wrap1").style.marginLeft = (w-_("background_logo_wrap1").width)/2;
		_("background_logo_wrap1").style.marginTop = (h-_("background_logo_wrap1").height)/2;

	}
}

_("background_logo_wrap1").style.marginLeft = (w-_("background_logo_wrap1").width)/2;
_("background_logo_wrap1").style.marginTop = (h-_("background_logo_wrap1").height)/2;
window.onscroll = function() {scroll_fun()};

function scroll_fun(){
	_("main").style.backgroundPosition="0px "+document.body.scrollTop/8+"px"
    var tmp1=active_col=pre_active_col=0;
    for(i=1;i<=3;i++){
        if (document.body.scrollTop > tmp1){
            tmp1+=col_height[i];
            pre_active_col=active_col;
            active_col++;
       }
    }
    remaning_col=(tmp1-document.body.scrollTop)/col_height[active_col+1];

	var stop_falg;
	if(document.body.scrollTop>100){
		for(i=1;i<=4;i++){
			margin=(_("col"+i+"_content").getAttribute("data-float-align")=="left")?"-40%":"40%";
			//	_("col"+i+"_content").style.marginLeft=margin;
			if(margin=="40%"){_("col"+i+"_content").children[0].style.transition = "all 1.5s";_("col"+i+"_content").children[0].style.float="right";_("col"+i+"_content").children[0].style.marginRight="0%";}else{_("col"+i+"_content").style.transition = "all 1.5s";_("col"+i+"_content").style.marginLeft="0%";}
		}
	}

	_("demo").innerHTML=(active_col);
	//console.log(pre_active_col_vector*40*(1-remaning_col))
//_("demo").innerHTML=remaning_col+"_"+active_col+"_"+pre_active_col;

  
}
