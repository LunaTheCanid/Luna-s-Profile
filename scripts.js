window.resizeTo( 1360, 700 );
window.moveTo(0,0);

document.onselectstart=new Function ("return false");
document.ondragstart = function() { return false; };

var width1 = innerWidth;
var height1 = window.innerHeight - 34;
var height2 = height1 / 2;

function arr() {
	document.getElementById('outside').style.width=width1 + "px";
	document.getElementById('outside').style.height=height1 + "px";
	}

//var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

//function browser_check(){
//	if (is_chrome == false){
//		document.getElementById('chrome_banner').style.opacity='1';
//	}
//	else {
//		return 'Hell yea! Youre using Chrome!';
//	}
//}

	
function slct(pagevalue){
	document.getElementById('m0').style.marginLeft="-10px";
	document.getElementById('m0').style.borderRadius="0px 25px 25px 0px";
	document.getElementById('m1').style.marginLeft="-10px";
	document.getElementById('m1').style.borderRadius="0px 25px 25px 0px";
	document.getElementById('m2').style.marginLeft="-10px";
	document.getElementById('m2').style.borderRadius="0px 25px 25px 0px";
	document.getElementById('m3').style.marginLeft="-10px";
	document.getElementById('m3').style.borderRadius="0px 25px 25px 0px";
	document.getElementById('m4').style.marginLeft="-10px";
	document.getElementById('m4').style.borderRadius="0px 25px 25px 0px";
	document.getElementById('m5').style.marginLeft="-10px";
	document.getElementById('m5').style.borderRadius="0px 25px 25px 0px";
	document.getElementById(pagevalue).style.marginLeft="0px";
	document.getElementById(pagevalue).style.borderRadius="0px 30px 30px 0px";
	}
	
 	
function slct(pagevalue){
	document.getElementById('disp').style.opacity="0";
	if(pagevalue == 'home' | pagevalue == 'info'){
	document.getElementById('inside').style.opacity="0";}
	setTimeout(function (){if(pagevalue == 'home'){
		document.getElementById('disp').innerHTML="TEXT<br><br>TEXT";
		document.getElementById('inside').innerHTML='<img src="./pic.png" ID="pic">';
		}else if(pagevalue == 'info'){
		document.getElementById('disp').innerHTML="TEXT<br>TEXT";
		document.getElementById('inside').innerHTML='<img src="./pic2.png" ID="pic">';
		}else if(pagevalue == 'rules'){
		document.getElementById('disp').innerHTML="";
		document.getElementById('inside').innerHTML='<img src="./pic3.jpg" ID="pic">';
		}else if(pagevalue == 'credits'){
		document.getElementById('disp').innerHTML='TEXT<br>TEXT';
		}else if(pagevalue == 'msg'){
		document.getElementById('disp').innerHTML='TEXT<br><br>TEXT';
		}else if(pagevalue == 'chat'){
		document.getElementById('disp').innerHTML='<div>TEXT</div>';
		}}, 800);
	setTimeout(function (){document.getElementById('disp').style.opacity="1";document.getElementById('inside').style.opacity="1";}, 900);
	}
