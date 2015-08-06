// Scripts by Yelena //
// Scripts for Candy //



window.resizeTo( 1360, 700 );
window.moveTo(0,0);

document.onselectstart=new Function ("return false");
document.ondragstart = function() { return false; };

var width1 = innerWidth;
var height1 = window.innerHeight - 34;
var height2 = height1 / 2;

function arr() {
	document.getElementById('aussen').style.width=width1 + "px";
	document.getElementById('aussen').style.height=height1 + "px";
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

	
function slct(poop){
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
	document.getElementById(poop).style.marginLeft="0px";
	document.getElementById(poop).style.borderRadius="0px 30px 30px 0px";
	}
	
 	
function sho(poop){
	document.getElementById('disp').style.opacity="0";
	if(poop == 'home' | poop == 'info'){
	document.getElementById('innen').style.opacity="0";}
	setTimeout(function (){if(poop == 'home'){
		document.getElementById('disp').innerHTML="Hai~<br><br>My name is Yelena, nice to meet you :3<br>I hope you like candy,<br>I'm literally candy.<br><br>I love it to chat around, so don't be shy, message me!<br>Let us talk about something or let's play~<br><br>But before you do so, please continue and read my profile.";
		document.getElementById('innen').innerHTML='<img src="res/pic.png" ID="pic">';
		}else if(poop == 'info'){
		document.getElementById('disp').innerHTML="As I've already said, my name is Yelena,<br>I'm 20 years old and live in Berlin.<br>I should mention that im kinda short, I'm just 151cm 'tall'.<br><br>I'm here to meet new people for chats or roleplays :D<br>Ask me stuff, tell me stuff or let's just talk about stuff!<br><br>Kinda no limits here~<br><br>If you want to know more go ahead and chat with me!";
		document.getElementById('innen').innerHTML='<img src="res/pic2.png" ID="pic">';
		}else if(poop == 'rules'){
		document.getElementById('disp').innerHTML="Since we're here on Chatango I have a few rules for you :\)<br><br> \> Keep an eye on my Mini-Profile<br> \> Don't ask me to send pictures<br> \> Don't ask me to Cam<br> \> ASK before you send any pictures!<br> \> Don't be mean or rude, I'm here for fun<br> \> Don't send me links to any other chatsites<br> <br>Thats it, feel free to talk about whatever you want,<br>just keep these rules in mind :3";
		document.getElementById('innen').innerHTML='<img src="res/cane.jpg" ID="pic">';
		}else if(poop == 'credits'){
		document.getElementById('disp').innerHTML='Credits<br><br><ul>Profile Coding by me (NO F****ING PREMADE STUFF! >.<)<br><br>Design idea and OC-Commission by <a href="https://www.furaffinity.net/user/senimasan/">Senimasan</a><br><br>"Candycane Chibi" by <a href="http://www.furaffinity.net/user/frekki/">Frekki</a></ul>';
		}else if(poop == 'msg'){
		document.getElementById('disp').innerHTML='Links<br><br>You may want to message me outside from chatango~<br><br><a href="https://www.furaffinity.net/user/yelenafluky/">FurAffinity</a><br><br><a href="https://facebook.com/yelcw">Facebook</a><br><br>For Kik ask me (: I may give it to you.';
		}else if(poop == 'chat'){
		document.getElementById('disp').innerHTML='<div><embed src="http://yelena.st.chatango.com/mini" bgcolor="#FF7C86" width=550 height=250 wmode="transparent"  type=application/x-shockwave-flash  allowScriptAccess="always" allowNetworking="all" allowFullScreen="true"  flashvars="k=1&n=000000&s=ffffff&f=11"/></div>';
		}}, 800);
	setTimeout(function (){document.getElementById('disp').style.opacity="1";document.getElementById('innen').style.opacity="1";}, 900);
	}