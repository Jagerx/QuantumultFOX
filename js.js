var jumped = false;
var EN4LanguageName = "";
var EN4flashDef = false;
var EN4actionMenu = true;
var x = 0;
var pinched = false;
var firsttap = true;
watchtap = false;
var myBack = "";
var doLocal = false;
doingExaPlay = false;
var zoom = 1.0;
var os = 0;
var EN4iPad = false;

var darkmode = false;

document.addEventListener('touchstart', function(e) {
if (watchtap)
{
window.location.href = 'gottap://';
watchtap = false;
}
if (firsttap)
{
window.location.href = 'firsttap://';
firsttap = false;
}
}, false);

document.addEventListener('click', function(e) {
if (watchtap)
{
window.location.href = 'gottap://';
watchtap = false;
}
}, false);

function arrowf(el)
{
el.parentElement.style.webkitBoxShadow = 'none';
if (el.parentElement.hasAttribute('id'))
	el.parentElement.setAttribute('note', el.id);
el.parentElement.id = "show";
var senses = el.parentElement.getElementsByTagName('*');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{
if (senses[i])
{
try
{
//if (! senses[i].hasAttribute('class'))
//{
//senses[i].setAttribute('class', 'show');
setClass(senses[i], 'show');
//}
}
catch( e ){
  //alert( e );
}
}
}
}
}
function pinchIn()
{

if (pinched == true)
{
return;
}

document.getElementById('close').style.display = 'none';
document.getElementById('open').style.display = 'block';

while (els = document.getElementById('arrow'))
{
els.parentElement.removeChild(els);
}
while (els = document.getElementById('arrowh'))
{
els.parentElement.removeChild(els);
}

while (els = document.getElementById('show'))
{

//alert(els.innerText);

//return;

els.removeAttribute('id');

if (els.hasAttribute('note'))
	els.setAttribute('id', els.note);

var senses2 = els.getElementsByTagName('*');
if (senses2.length > 0)
{
	var ii = 0;
	for(ii in senses2)
	{
		removeShow(senses2[ii]);
	/*
		try
		{
			if (senses2[ii].hasAttribute('class'))
			{
				if (senses2[ii].className.match('show'))
				{
				senses2[ii].removeAttribute('class');
				}
			}
		}
		catch( e ){
		//alert(e);
		}
		*/
	}
//}
//}
}

}

var senses = document.getElementsByTagName('p:Sense');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{
var arrowh= document.createElement('arrowh');
arrowh.id = "arrow";
var arrow = document.createElement('arrow');
arrow.innerHTML = "　";
arrow.id = "arrow";
//arrow.onclick = function () {arrowf(this);};
arrow.setAttribute("onclick","arrowf(this);");

try{
senses[i].appendChild(arrowh);
senses[i].appendChild(arrow);
}
catch( e ){
//alert(e);
}

if ((senses[i].className) && (senses[i].className.match(/^newline$/)))
{
var first = senses[i].firstChild;
if ((first) && (first.className) && (first.className.match(/^sensenum$/)))
{
	first.innerHTML = first.innerHTML + ' ';
}
}

}
}

var senses = document.getElementsByTagName('p:Subsense');
if (senses.length > 0)
{
var t = 0;
for(t in senses)
{
var first = senses[t].firstChild;
if (first)
{
	first.innerHTML = first.innerHTML + ' ';
}
}
}

var collo = document.getElementsByTagName('p:ColloBox');
if (collo.length > 0)
{
var p = 0;
for(p in collo)
{
	if ((collo[p].className) && (collo[p].className.match(/^display$/)))
	{
		//collo[p].setAttribute('class', 'hide');
		setClass(collo[p], 'hide');
		
		var arrow = document.createElement('arrow');
		arrow.innerHTML = "　";
		arrow.id = "arrow";
		//arrow.onclick = function () {arrowf(this);};
		arrow.setAttribute("onclick","arrowcollo(this);");
	
		try{
			collo[p].appendChild(arrow);
		}
		catch( e ){
		//alert(e);
		}
	}
}

}
var collo = document.getElementsByTagName('p:ThesBox');
if (collo.length > 0)
{
var p = 0;
for(p in collo)
{
	if ((collo[p].className) && (collo[p].className.match(/^display$/)))
	{
		//collo[p].setAttribute('class', 'hide');
		setClass(collo[p], 'hide');
		
		var arrow = document.createElement('arrow');
		arrow.innerHTML = "　";
		arrow.id = "arrow";
		//arrow.onclick = function () {arrowf(this);};
		arrow.setAttribute("onclick","arrowcollo(this);");
	
		try{
			collo[p].appendChild(arrow);
		}
		catch( e ){
		//alert(e);
		}
	}
}

}

pinched = true;
document.getElementById('body').setAttribute('class', 'body2');
setTimeout('body2()', 900);
undoPinch();
}
function undoPinch()
{

var senses = document.getElementsByTagName('p:Sense');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{

var foundHide = true;

var bits = senses[i].getElementsByTagName('*');

if (bits.length > 0)
{
	var x = 0;
	for(x in bits)
	{
		if (bits[x] && bits[x].tagName && bits[x].tagName !== null)
		{
			//alert(bits[x].tagName);
			if (bits[x].tagName.match('P:GRAMEXA'))
			{
				foundHide = false;
				break;
			}
			if (bits[x].tagName.match('P:EXAMPLE'))
			{
				foundHide = false;
				break;
			}
		
			if (bits[x].tagName.match('P:FIELDLINE'))
			{
				foundHide = false;
				break;
			}
			
			if (bits[x].tagName.match('P:PROPFORM'))
			{
				foundHide = false;
				break;
			}
			
			if (bits[x].tagName.match('P:OPP'))
			{
				foundHide = false;
				break;
			}
			
			if (bits[x].tagName.match('F2NBOX'))
			{
				foundHide = false;
				break;
			}
	}
		
	}
	
	
	
}

if (foundHide == true)
{
	unpinchMe(senses[i]);
}


}
}
}

function unpinchMe(el)
{

el.style.webkitBoxShadow = 'none';
el.style.paddingBottom = "0px";

if (el.hasAttribute('id'))
	el.setAttribute('note', el.id);
el.id = "show";

var bits = el.getElementsByTagName('*');
if (bits.length > 0)
{
var i = 0;
for(i in bits)
{
if (bits[i])
{
try
{
//if (! bits[i].hasAttribute('class'))
//{
//bits[i].setAttribute('class', 'show');
setClass(bits[i], 'show');
//}
}
catch( e ){
  //alert( e );
}
}
}
}
}
function arrowcollo(el)
{
//el.parentElement.setAttribute('class', 'display');
setClass(el.parentElement, 'display');
}
function pinchClean()
{
document.getElementById('body').removeAttribute('class');
}
function pinchOut()
{
if (pinched == false)
{
return;
}

pinched = false;
document.getElementById('open').style.display = 'none';
document.getElementById('body').removeAttribute('class');
document.getElementById('close').style.display = 'block';

while (elsx = document.getElementById('arrow'))
{
elsx.parentElement.removeChild(elsx);
}
while (elsx = document.getElementById('arrowh'))
{
elsx.parentElement.removeChild(elsx);
}

while (els = document.getElementById('show'))
{
els.id = 'none';
if (els.hasAttribute('note'))
	els.setAttribute('id', els.note);
//else
//	els.removeAttribute('id');
var senses = els.getElementsByTagName('*');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{
	if (senses[i])
	{
	
	removeShow(senses[i]);
		//try
		//{
		//if (senses[i].className.match('show'))
		//	{
		//	senses[i].removeAttribute('class');
		//	}
		//}
		//catch( e ){
		//alert(e);
		//}
	}
}

}
}

var collo = document.getElementsByTagName('p:ThesBox');
if (collo.length > 0)
{
var p = 0;
for(p in collo)
{
if (collo[p].className) /* && (collo[p].className.match(/^hide$/))) */
{
//collo[p].setAttribute('class', 'display');
setClass(collo[p], 'display');
}
}
}

var collo = document.getElementsByTagName('p:ColloBox');
if (collo.length > 0)
{
var p = 0;
for(p in collo)
{
if (collo[p].className) /* && (collo[p].className.match(/hide/)))*/
{
//collo[p].setAttribute('class', 'display');
setClass(collo[p], 'display');
}
}
}
setTimeout('pinchClean()', 1020);

}
function graphicson()
{
var senses = document.getElementsByTagName('p:FLOATJ');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{
if (senses[i])
{
	//try
	//{
	//senses[i].setAttribute('class', 'show');
	setClass(senses[i], 'show');
	//}
	//catch( e ){
	//}
}
}
}
senses = document.getElementsByTagName('p:FLOATJ2');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{
if (senses[i])
{
	//try
	//{
	//senses[i].setAttribute('class', 'show');
	setClass(senses[i], 'show');
	/*}
	catch( e ){
	}*/
}
}
}
senses = document.getElementsByTagName('p:FLOATX');
if (senses.length > 0)
{
var i = 0;
for(i in senses)
{
if (senses[i])
{
	//try
	//{
	//senses[i].setAttribute('class', 'show');
	setClass(senses[i], 'show');
	/*}
	catch( e ){
	}*/
}
}
}
}
function body2()
{
document.getElementById('body').setAttribute('class', 'body');
}

function doSounds()
{
/*if (EN4flashDef == false)
{
return;
}
 */
//pinchIn();
var gotSound = false;

var sounds = document.getElementsByTagName('a');
if (sounds.length > 0)
{
var i = 0;
for(i in sounds)
{
 if (sounds[i].className.match('uk') )
 {
  gotSound = true;
  var snd = new Audio(sounds[i].href);
  snd.load();
  //if (sounds[parseInt(i) + 1].className.match('us') )
  //{
  //snd.nextSound= sounds[parseInt(i) + 1].href;
  snd.addEventListener('ended', function()
  {
  setTimeout('doSounds2()', 200);
  /*
  this.setAttribute("src",this.nextSound);
  this.currentTime = 0;
  //this.src= this.nextSound;
  this.addEventListener('ended', null, false);
  this.play();
  */
  }, false)
  //}
  snd.play();
  //snd = null;
 break;
 }
}
}

if (gotSound == false)
{
	var hwd = document.getElementsByTagName('p:HWD');
	if (hwd.length > 0)
	{
		var text = hwd[0].innerText;
		text = text.replace(/ /g, '+');

		window.location.href = 'sound://tts.multitrans.jp/tts.php?key=' + text + '&local=on&lang=en';
	}
}

}
function doSounds2()
{
/*if (EN4flashDef == false)
{
return;
}*/
var sounds = document.getElementsByTagName('a');
if (sounds.length > 0)
{
var i = 0;
for(i in sounds)
{
 if (sounds[i].className.match('us') )
 {
  var snd = new Audio(sounds[i].href);
  snd.load();
  snd.play();
 break;
 }
}
}
}

function tryExaPlay()
{
	if (doingExaPlay == true)
	{
	//exaPlay();
	setTimeout('exaPlay()', 400);
	}
}
function exaStop()
{
doingExaPlay = false;
var el = document.getElementById("playall");
if (el)
{
	el.setAttribute("class","start");
	el.setAttribute("onclick","exaPlay()");
}
}
function exaClose()
{
var el = document.getElementById("playall");
if (el)
{
	el.style.transform = "scale(1)";
	el.style.position = "static";
	el.style.bottom = "auto";
	el.style.right = "auto";
}
el = document.getElementById("playall2");
if (el)
{
	//el.setAttribute("class","none");
	el.style.display = 'none';
}
exaStop();

var sounds = document.getElementsByTagName('p:EXAMPLE');
if (sounds.length > 0)
{
var i = 0;
for(i in sounds)
{
 if (sounds[i].className.match('playing') )
 {
 sounds[i].setAttribute("class","played");
 sounds[i].style.backgroundColor = "transparent";
 break;
 }
 }
}
}
function exaPlay()
{
doingExaPlay = false;
var el = document.getElementById("playall");
if (el)
{
	el.style.transform = "scale(2)";
	el.setAttribute("class","stop");
	el.setAttribute("onclick","exaStop()");

	el.style.position = "fixed";
	if (EN4iPad == true)
	{
		el.style.bottom = "14px";
	}
	else
	{
		el.style.bottom = "58px";
	}
	el.style.right = "15px";	
}
el = document.getElementById("playall2");
if (el)
{
	//el.setAttribute("class","close");
	//el.setAttribute("onclick","exaClose()");
	el.style.display = 'block';
}
var sounds = document.getElementsByTagName('p:EXAMPLE');
if (sounds.length > 0)
{
var i = 0;
for(i in sounds)
{
 if (sounds[i].className.match('playing') )
 {
 sounds[i].setAttribute("class","played");
 sounds[i].style.backgroundColor = "transparent";
 }
 if (sounds[i].className.match('played') )
 {
 }
 else if (sounds[i].className.match('noexas') )
 {
 }
 else
 {
 doingExaPlay = true;
 if (sounds[i].id.match('show') )
 {
 }
 else
 {
 
 pinchOut();
 /*
	sounds[i].parentElement.style.webkitBoxShadow = 'none';
	sounds[i].parentElement.id = "show";
	var senses = sounds[i].parentElement.getElementsByTagName('*');
	if (senses.length > 0)
	{
		var x = 0;
		for(x in senses)
		{
		if (senses[x])
		{
		try
		{
		if (! senses[x].hasAttribute('class'))
		{
		senses[x].setAttribute('class', 'show');
		}
		}
		catch( e ){
		  //alert( e );
		}
		}
		}
	}
*/
 }
 
  sounds[i].scrollIntoView(true);
  
if (darkmode == false)
	sounds[i].style.backgroundColor = "#DDDDDD";
else
	sounds[i].style.backgroundColor = "#555355";
	
  sounds[i].setAttribute("class","playing");
  
  var myID = sounds[i].firstChild.id;
 
  if (myID)
  {
var el = document.getElementById(myID);
var targ = myID + '.mp3';
var el2 = document.getElementById('activeexas');
if (el2)
{
el2.removeAttribute("id");
if (el2.className)
{
el2.removeAttribute("onclick");
el2.setAttribute("onclick","exas(this,'" + el2.className  + "');");
}
}
el2 = document.getElementById('downloading')
if (el2)
{
el2.removeAttribute("id");
if (el2.className)
{
el2.removeAttribute("onclick");
el2.setAttribute("onclick","exas(this,'" + el2.className  + "');");
}
}

el.setAttribute("id", 'downloading');
el.setAttribute("class", targ);
el.removeAttribute("onclick");
targ = targ.replace(/\%20/g, '%5F');
location.href = 'sound://www.enfour.com/ldoce_mp3/' + targ;
/*
var snd = new Audio('sound://www.enfour.com/ldoce/' + targ);
snd.load();
  snd.addEventListener('ended', function()
  {
  setTimeout('exaUnPlay("' + myID + '")', 1);
  setTimeout('exaPlay()', 100);
  }, false)
  snd.play();
*/
}

 break;
 }
 if (i >= sounds.length)
 {
 exaStop();
 }
}

}

}
/*
function exaUnPlay(myID)
{
document.getElementById(myID).style.backgroundColor = "transparent";
}
*/
function topMe()
{
	gotop();
}
function gotop()
{
/* location.href = '#top'; */
document.getElementById("top").scrollIntoView(true);
window.scrollTo(0,0);
}
function FIELD(ind)
{
	var back = myBack;
 	
 	var backhm = document.getElementsByTagName('p:Head');
 	if ((backhm) && (backhm.length > 0))
		 {
		 	var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
		 	if (hmms.length > 0)
		 	{
		 	back = back + ' ' + hmms[0].innerText;
		 	}
		 }
 	back = back.replace(/ /g, '+');
 	back = encodeURIComponent(back);
	window.location.href = 'about://topics/' + ind + '.html?back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
}
function placeBM(el)
{
//var myDirect = el.parentElement.nextElementSibling.nextElementSibling.innerText;
var myDirect = el.parentElement.parentElement.nextElementSibling.innerText;
location.href = 'directbm://' + myDirect;
}
function doVerbs()
{

if (EN4LanguageName == '日本語')
{
	localverbs('ja') 
}

var places = document.getElementsByTagName('br_us');
if (places.length > 0)
{
var i = 0;
for(i in places) 
{
	try
	{
	places[i].setAttribute("onclick","singleJump(this)");
	}
	catch( e ){
  	}
}
}
places = document.getElementsByTagName('brvar');
if (places.length > 0)
{
var i = 0;
for(i in places) 
{
	try
	{
	places[i].setAttribute("onclick","singleJump(this)");
	}
	catch( e ){
  	}
}
}
places = document.getElementsByTagName('usvar');
if (places.length > 0)
{
var i = 0;
for(i in places) 
{
	try
	{
	places[i].setAttribute("onclick","singleJump(this)");
	}
	catch( e ){
  	}
}
}

}
function singleJump(el)
{
	
if (EN4actionMenu == true) 
{
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
var parent = el.parentElement;
if (parent.tagName.match ('TD') )
{
	//var x = parent.offsetLeft + parent.parentElement.parentElement.parentElement.offsetLeft + Math.floor(el.offsetWidth / 2) - window.pageXOffset;
	var y = Math.floor((parent.offsetTop + parent.parentElement.parentElement.parentElement.offsetTop) * zoom) - window.pageYOffset ; //+ parseInt(lH)
	var lH = getStyle(parent, 'line-height');
	var tlbox = Math.floor((el.offsetLeft + parent.offsetLeft + parent.parentElement.parentElement.parentElement.offsetLeft) * zoom) - window.pageXOffset;
	
	window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(el.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&0';
}
else
{
	//var x = el.offsetLeft + Math.floor(el.offsetWidth / 2) - window.pageXOffset;
	var y = Math.floor(el.offsetTop * zoom) - window.pageYOffset ; //+ parseInt(lH)
	var lH = getStyle(el, 'line-height');
	var tlbox = Math.floor(el.offsetLeft * zoom) - window.pageXOffset;
	
	//var trboy = el.offsetRight - window.pageXOffset;

	window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(el.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&0';
}
	
	if (darkmode == false)
	{
		el.style.backgroundColor = "#CCDDED";
		document.getElementById("body").style.backgroundColor = "#F6F6F6";
	}
	else
	{
		el.style.backgroundColor = "#4B494B";
		document.getElementById("body").style.backgroundColor = "black";
	}
		
	
	var elem = document.getElementById('selected');
	if (elem)
	{
	elem.style.backgroundColor = "transparent";
	elem.id = 'unselected';
	}
	el.id = 'selected';

}

}
function doTags2() 
{

/* end new */
myBack = document.getElementsByTagName('p:HWD');
if (myBack.length > 0)
{
myBack = myBack[0].innerText;
}
else
{

myBack = document.getElementsByTagName('HWD');

myBack = myBack[0].innerText;

setTimeout('doVerbs()', 10);

document.getElementById('body').setAttribute('class', 'verbs');
document.getElementById('closeAll').style.display = 'none';

}

/*
var floats = document.getElementsByTagName('p:propformprep');
if (floats.length > 0)
{
var i;
var back = document.getElementsByTagName('p:HWD');
 	back = back[0].innerText;
 	
for(i in floats) 
	{
		if (floats[i].innerText)
		{
		var bit = floats[i].innerText;
		//alert(bit);
		if (bit.match(/\+/))
		{
			bit = bit.replace('+', back + ' ');
			bit = bit.replace(']', '');
			bit = bit.replace('[', '');
			bit = bit.replace(/ $/, '');
			floats[i].innerHTML = bit;
		}
		}
	}
}
*/
if (window.devicePixelRatio > 1)
{
var floats = document.getElementsByTagName('p:floatj');
if (floats.length > 0)
{
var i;
for(i in floats) 
{
	if ((floats[i].firstChild) && (floats[i].firstChild.href))
	{
		var bit = '<img src="' + floats[i].firstChild.href + '" width="' + floats[i].firstChild.firstChild.width + '" height="' + floats[i].firstChild.firstChild.height + '">';
		floats[i].firstChild.innerHTML = bit;
	}
}
}

var floats = document.getElementsByTagName('p:floatx');
if (floats.length > 0)
{
var i;
for(i in floats) 
	{
		if (floats[i].innerHTML)
		{
		var bit = floats[i].innerHTML;
		bit = bit.replace(' src="j/', ' width="' + floats[i].firstChild.width + '" height="' + floats[i].firstChild.height + '" src="j/r800_');
		floats[i].innerHTML = bit;
		}
	}
}

var floats = document.getElementsByTagName('p:floatj2');
if (floats.length > 0)
{
var i;
for(i in floats) 
	{
		if ((floats[i].firstChild) && (floats[i].firstChild.href))
		{
			var bit = '<img src="' + floats[i].firstChild.href + '" width="310">';
			floats[i].firstChild.innerHTML = bit;
			floats[i].style.border = '0px';
			floats[i].style.webkitBoxShadow= 'none';
		}
	}
}
}
var places = document.getElementsByTagName('place');
if (places.length > 0)
{
	var placer = 0;
	while (elp = document.getElementById('placer'))
	{
		elp.setAttribute("id",'placerdone' + placer);
		if (placer > 0)
		{
			elp.setAttribute("class",'placerdone');
		}
		placer++;
	}
	//document.getElementById('placer').style.display = 'block';
	//document.getElementById('placea').style.display = 'block';
	var i;
	for(i in places) 
	{
		if ( (typeof places[i] === "object") && (places[i] !== null) )
		{
		var next = places[i].parentElement.nextElementSibling; //places[i].nextElementSibling.nextElementSibling
		if ((next) && (next.id) && (next.id.match('udcontentID')))
		{
			places[i].id = next.innerText;
		}
		
		var link = document.createElement('a');
		link.setAttribute("name",'pl' + i);
		link.setAttribute("id",'pl' + i);		
		
		places[i].parentElement.parentElement.insertBefore(link, places[i].parentElement);
		
		places[i].innerHTML = '<span onclick="placeBM(this);" class="placebm">　</span>';
		if (i == 0)
		{
		//document.getElementById('myplace0').style.display = 'block';
		while (elp = document.getElementById('myplace0'))
		{
			elp.setAttribute("id",'myplacedone');
		}
		}
		else if (i == 1)
		{
		//document.getElementById('myplace1').style.display = 'block';
		while (elp = document.getElementById('myplace1'))
		{
			elp.setAttribute("id",'myplacedone');
		}
		}
		else if (i == 2)
		{
		//document.getElementById('myplace2').style.display = 'block';
		while (elp = document.getElementById('myplace2'))
		{
			elp.setAttribute("id",'myplacedone');
		}
		}
		else if (i == 3)
		{
		//document.getElementById('myplace3').style.display = 'block';
		while (elp = document.getElementById('myplace3'))
		{
			elp.setAttribute("id",'myplacedone');
		}
		}
		else if (i == 4)
		{
		//document.getElementById('myplace4').style.display = 'block';
		while (elp = document.getElementById('myplace4'))
		{
			elp.setAttribute("id",'myplacedone');
		}
		}
		}
	}
}
if (EN4flashDef == false)
{
	if (window.devicePixelRatio > 1)
	{
	doTags1();
	}
	else
	{
	setTimeout('doTags1()', 90);
	}
}
//setTimeout('doTagsLang()', 100);
doTagsLang();
doPlays();
//setTimeout('doSounds()', 990);
setTimeout('flashMe()', 100);
}
function doPlays()
{
var sounds = document.getElementsByTagName('p:EXAMPLE');
if (sounds.length > 1)
{
var el = document.getElementById("playall");
if (el)
{
	el.style.display = 'block';
}
}
}
function showMe()
{
	var myloc = location.href;
	if (myloc.match('#t_'))
	{
		var myloca = myloc.split('#t_');
		var mylocb = myloca[1].split('#s_');	
		var elem = document.getElementById('t_' + mylocb[0]);
		if (elem)
		{
			if (elem.parentElement)
			{
				elem.parentElement.scrollIntoView(true);
				//elem.parentElement.setAttribute('class', 'show');
				setClass(elem.parentElement, 'show');
			}
			if (elem.nextElementSibling)
			{
				//elem.nextElementSibling.setAttribute('class', 'show');
				setClass(elem.nextElementSibling, 'show');
				if (elem.nextElementSibling.nextElementSibling)
				{
					//elem.nextElementSibling.nextElementSibling.setAttribute('class', 'show');
					setClass(elem.nextElementSibling.nextElementSibling, 'show');
				}
			}
			
		}
	}
}
function flashMe()
{
var myloc = location.href;
if (myloc.match('#t_'))
{
var myloca = myloc.split('#t_');
var mylocb = myloca[1].split('#s_');
var gotit = false;
var elem = document.getElementById('t_' + mylocb[0]);
if (elem)
{
	if (elem.parentElement)
	{
		//elem.parentElement.setAttribute('class', 'show');
		setClass(elem.parentElement, 'show');
	}
	if (elem.nextElementSibling)
	{
		//elem.nextElementSibling.setAttribute('class', 'show');
		setClass(elem.nextElementSibling, 'show');
		if (elem.nextElementSibling.nextElementSibling)
		{
			//elem.nextElementSibling.nextElementSibling.setAttribute('class', 'show');
			setClass(elem.nextElementSibling.nextElementSibling, 'show');
		}
	}
	setTimeout('showMe()', 1200);
}
if ((elem) && (myloc.match('#s_')))
{
var els = elem.parentElement.getElementsByTagName('p:Sense');
if (els.length > 0)
{
	var sense = parseInt(myloca[1]);
	var senn = els[sense - 1];
	if (senn)
	{	
	//senn.scrollIntoView(true);	
	if (darkmode == false)
		senn.style.backgroundColor = "#DDDDDD";
	else
		senn.style.backgroundColor = "#555355";
	if ((EN4flashDef == true) || (pinched == true) )
	{
		//senn.setAttribute('class', 'show');
		setClass(senn, 'show');
		//senn.parentElement.setAttribute('class', 'show');
		setClass(senn.parentElement, 'show');
	}
	setTimeout('doFlashS(' + sense +  ')', 400);	
	gotit = true;
	}
}
}
if ((elem) && (! gotit))
{
if ((EN4flashDef == true) || (pinched == true) )
{
//elem.setAttribute('class', 'show');
setClass(elem, 'show');
//elem.parentElement.setAttribute('class', 'show');
setClass(elem.parentElement, 'show');
elem.parentElement.scrollIntoView(true);
}
if (darkmode == false)
	elem.nextSibling.style.backgroundColor = "#DDDDDD";
else
	elem.nextSibling.style.backgroundColor = "#555355";
setTimeout('doFlash()', 400);
}

}
else if (myloc.match('#sp_'))
{
var myloca = myloc.split('#sp_');
var elem = document.getElementById('sp_' + myloca[1]);

if (darkmode == false)
{
	elem.nextSibling.style.backgroundColor = "#DDDDDD";
	elem.nextSibling.style.borderColor = "#DDDDDD";
}
else
{
	elem.nextSibling.style.backgroundColor = "#555355";
	elem.nextSibling.style.borderColor = "#555355";
}	
	
if ((EN4flashDef == true) || (pinched == true) )
{
//elem.nextSibling.setAttribute('class', 'show');
setClass(elem.nextSibling, 'show');
//elem.parentElement.setAttribute('class', 'show');
setClass(elem.parentElement, 'show');
elem.parentElement.scrollIntoView(true);
}
setTimeout('doFlashSP()', 400);
}
else if (myloc.match('#s_'))
{
var myloca = myloc.split('#s_');
var els = document.getElementsByTagName('p:Sense');
if (els.length > 0)
{
	var sense = parseInt(myloca[1]);
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	if ((EN4flashDef == true) || (pinched == true) )
	{
	//senn.setAttribute('class', 'show');
	setClass(senn, 'show');
	//senn.parentElement.setAttribute('class', 'show');
	setClass(senn.parentElement, 'show');
	//senn.scrollIntoView(true);
	}
	
	if (darkmode == false)
		senn.style.backgroundColor = "#DDDDDD"
	else
		senn.style.backgroundColor = "#555355";
	setTimeout('doFlashS(' + sense +  ')', 400);		
	}
}
}
else if (myloc.match('sensenum='))
{
var myloca = myloc.split('sensenum=');
var myloca2 = myloca[1].split('&');
var els = document.getElementsByTagName('p:Sense');
if (els)
{
	var sense = parseInt(myloca2[0]);
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	if ((EN4flashDef == true) || (pinched == true) )
	{
	//senn.setAttribute('class', 'show');
	setClass(senn, 'show');
	//senn.parentElement.setAttribute('class', 'show');
	setClass(senn.parentElement, 'show');
	//senn.scrollIntoView(true);
	}
	if (darkmode == false)
		senn.style.backgroundColor = "#DDDDDD"
	else
		senn.style.backgroundColor = "#555355";
	setTimeout('doFlashS(' + sense +  ')', 400);		
	}
}
}
else if ((myloc.match('#l')) || (myloc.match('#p')))
{
var myloca = myloc.split('#');

var els = document.getElementById(myloca[1]);
if (els)
{
	if (els.parentElement.parentElement)
		els.parentElement.parentElement.scrollIntoView(true);
	if ((EN4flashDef == true) || (pinched == true) )
	{
	////els.setAttribute('class', 'show');
	//els.parentElement.parentElement.setAttribute('class', 'show');
	setClass(els.parentElement.parentElement, 'show');
	//els.parentElement.setAttribute('class', 'show');
	setClass(els.parentElement, 'show');
	els.parentElement.parentElement.scrollIntoView(true);
	}
	if (darkmode == false)
		els.parentElement.style.backgroundColor = "#DDDDDD";
	else
		els.parentElement.style.backgroundColor = "#555355";
	setTimeout('doFlashX("' + myloca[1] +  '")', 400);
	setTimeout('doFlashXD("' + myloca[1] +  '")', 800);
	setTimeout('doFlashX("' + myloca[1] +  '")', 1200);
	setTimeout('doFlashXD("' + myloca[1] +  '")',1600);
	setTimeout('doFlashX("' + myloca[1] +  '")', 2000);
}
}

}
function doFlashX(id)
{
var els = document.getElementById(id);
els.parentElement.style.backgroundColor = "transparent";
}
function doFlashXD(id)
{
var els = document.getElementById(id);
if (darkmode == false)
	els.parentElement.style.backgroundColor = "#DDDDDD";
else
	els.parentElement.style.backgroundColor = "#555355";
}
function doFlashS(sense)
{
var els = document.getElementsByTagName('p:Sense');
if (els)
{
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	if (darkmode == false)
		senn.style.backgroundColor = "white";
	else
		senn.style.backgroundColor = "black";
	setTimeout('doFlashS2(' + sense +  ')', 400);		
	}
}
}
function doFlashS2(sense)
{
var els = document.getElementsByTagName('p:Sense');
if (els)
{
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	if (darkmode == false)
		senn.style.backgroundColor = "#DDDDDD";
	else
		senn.style.backgroundColor = "#555355";
	setTimeout('doFlashS3(' + sense +  ')', 400);		
	}
}
}
function doFlashS3(sense)
{
var els = document.getElementsByTagName('p:Sense');
if (els)
{
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	if (darkmode == false)
		senn.style.backgroundColor = "white";
	else
		senn.style.backgroundColor = "black";
	setTimeout('doFlashS4(' + sense +  ')', 400);
	}
}
}
function doFlashS4(sense)
{
var els = document.getElementsByTagName('p:Sense');
if (els)
{
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	if (darkmode == false)
		senn.style.backgroundColor = "#DDDDDD";
	else
		senn.style.backgroundColor = "#555355";
	setTimeout('doFlashS5(' + sense +  ')', 400);
	}
}
}
function doFlashS5(sense)
{
var els = document.getElementsByTagName('p:Sense');
if (els)
{
	var senn = els[sense - 1];
	if (senn)
	{
	//senn.scrollIntoView(true);
	senn.style.backgroundColor = "transparent";
	}
}
}
function doFlashSP()
{
if (location.href.match('#sp_'))
{
var myloca = location.href.split('#sp_');
var elem = document.getElementById('sp_' + myloca[1]);
setTimeout('doFlashSP2()', 400);
}
else if (location.href.match('#thes'))
{
var elem = document.getElementById('thes');
setTimeout('doFlashSP2thes()', 400);
}
/*else if (location.href.match('#ety'))
{
var elem = document.getElementById('ety');
}
*/
if ( (typeof elem === "object") && (elem !== null) )
{
elem.scrollIntoView(true);
if (darkmode == false)
{
elem.nextSibling.style.backgroundColor = "#06C";
elem.nextSibling.style.borderColor = "#06C";
}
else
{
elem.nextSibling.style.backgroundColor = "#005EA3";
elem.nextSibling.style.borderColor = "#005EA3";
}


}

}
function doFlashSP2thes()
{

var elem = document.getElementById('thes');

if (darkmode == false)
{
	elem.nextSibling.style.backgroundColor = "#DDDDDD";
	elem.nextSibling.style.borderColor = "#DDDDDD";
}
else
{
	elem.nextSibling.style.backgroundColor = "#555355";
	elem.nextSibling.style.borderColor = "#555355";
}

setTimeout('doFlashSP3thes()', 400);
}

function doFlashSP2()
{
var myloca = location.href.split('#sp_');
var elem = document.getElementById('sp_' + myloca[1]);

if (darkmode == false)
{
	elem.nextSibling.style.backgroundColor = "#DDDDDD";
	elem.nextSibling.style.borderColor = "#DDDDDD";
}
else
{
	elem.nextSibling.style.backgroundColor = "#555355";
	elem.nextSibling.style.borderColor = "#555355";
}

setTimeout('doFlashSP3()', 400);
}
function doFlashSP3thes()
{
var elem = document.getElementById('thes');

if (darkmode == false)
{
elem.nextSibling.style.backgroundColor = "#4D2F6B";
elem.nextSibling.style.borderColor = "#4D2F6B";
}
else
{
elem.nextSibling.style.backgroundColor = "#639";
elem.nextSibling.style.borderColor = "#639";
}
}
function doFlashSP3()
{
var myloca = location.href.split('#sp_');
var elem = document.getElementById('sp_' + myloca[1]);

if (darkmode == false)
{
elem.nextSibling.style.backgroundColor = "#06C";
elem.nextSibling.style.borderColor = "#06C";
}
else
{
elem.nextSibling.style.backgroundColor = "#005EA3";
elem.nextSibling.style.borderColor = "#005EA3";
}
}
function doFlash()
{
var myloca = location.href.split('#t_');
var elem = document.getElementById('t_' + myloca[1]);
if (myloca[1] > 599) //and less than 640
{
elem.parentElement.scrollIntoView(true);
}
else
{
elem.scrollIntoView(true);
}
if (darkmode == false)
	elem.nextSibling.style.backgroundColor = "white";
else
	elem.nextSibling.style.backgroundColor = "black";

setTimeout('doFlash2()', 400);
}
function doFlash2()
{
var myloca = location.href.split('#t_');
var elem = document.getElementById('t_' + myloca[1]);

if (darkmode == false)
	elem.nextSibling.style.backgroundColor = "#DDDDDD";
else
	elem.nextSibling.style.backgroundColor = "#555355";

setTimeout('doFlash3()', 400);
}
function doFlash3()
{
var myloca = location.href.split('#t_');
var elem = document.getElementById('t_' + myloca[1]);

if (darkmode == false)
	elem.nextSibling.style.backgroundColor = "white";
else
	elem.nextSibling.style.backgroundColor = "black";

setTimeout('doFlash4()', 400);
}
function doFlash4()
{
var myloca = location.href.split('#t_');
var elem = document.getElementById('t_' + myloca[1]);

if (darkmode == false)
	elem.nextSibling.style.backgroundColor = "#DDDDDD";
else
	elem.nextSibling.style.backgroundColor = "#555355";

setTimeout('doFlash5()', 400);
}
function doFlash5()
{
var myloca = location.href.split('#t_');
var elem = document.getElementById('t_' + myloca[1]);

elem.nextSibling.style.backgroundColor = "transparent";
}

function doFlashj(id)
{
var elem = document.getElementById('tagged_' + id);
if (darkmode == false)
	elem.style.backgroundColor = "#DDDDDD";
else
	elem.style.backgroundColor = "#555355";

setTimeout('doFlashj2(' + id + ')', 500);
}
function doFlashj2(id)
{
var elem = document.getElementById('tagged_' + id);
elem.style.backgroundColor = "transparent";
}

function doTags1()
{
var anchors = document.getElementsByTagName('p:m');
if (anchors)
{
for (var itag=0; itag<anchors.length; itag++) 
{
 var bittt = anchors[itag].firstChild.href;

 //if (screen.width == 768)
 if (EN4iPad == true)
 {

 //anchors[itag].innerHTML ='';
 anchors[itag].innerHTML = '<video onplay="playMeBig(this)" id="myVideo" src="' + bittt　+ '#t=0.5" width="120px" height="90px" type="video/mp4" preload="auto" controls></video>'; //controls
 //anchors[itag].firstChild.setAttribute("webkitSupportsFullscreen", "false");
 //anchors[itag].firstChild.muted = true;
 //anchors[itag].firstChild.load();
//anchors[itag].firstChild.play();
 //anchors[itag].setAttribute("onclick","this.play()");
 //player.volume = .5
  }
 else
 {
 if (navigator.userAgent.match('acintosh'))
 {
  anchors[itag].innerHTML = '<video onclick="playMeMac(this)" onplay="playMeMac(this)" id="myVideo" src="' + bittt　+ '" width="160px" height="120px" type="video/mp4" playsinline controls></video>'; // autoplay loop
 }
 else
 {
   if (os >= 11)
   {
  	anchors[itag].innerHTML = '<video id="myVideo" src="' + bittt　+ '#t=0.5" width="120px" height="90px" preload="auto" controls></video>'; // metadata autoplay loop
   }
   else
   {
  	anchors[itag].innerHTML = '<video id="myVideo" src="' + bittt　+ '" width="120px" height="90px"></video>'; // autoplay loop
   }
 }
 }
 
}

setTimeout('doVids()', 1100);
}

var myloc = location.href;
if (myloc.match('#j_'))
{
document.getElementById('load').style.display = 'block';
}

//var pattern = new RegExp("(^|\\s)tM(\\s|$)");
//var els = document.getElementsByTagName('*');
i = 0;
while (els = document.getElementById('tM'))
{
 x++;
 i++;
 clickedTag(els);
 els.id = 'tagged_' + x;
 if (i > 40)
 {
 	setTimeout('doTagsX()', 100);
 	return;
 }
}

if ((! jumped) && (myloc.match('#j_')))
{
var myloca = myloc.split('#j_');
var elem = document.getElementById('tagged_' + myloca[1]);
if (elem)
{
elem.scrollIntoView(true);
setTimeout('doFlashj(' + myloca[1] + ')', 10);
}
}
jumped = true;
document.getElementById('load').style.display = 'none';
if (document.width > screen.width)
{
	document.body.style.width = (screen.width - 8) + 'px';
}

if (document.width > screen.width)
{
var menua = document.getElementsByTagName('p:REFHWD');
if ((menua) && (menua.length > 0))
{
var b;
for(b in menua) 
{
if  (menua[b] && menua[b].parentElement && menua[b].parentElement.parentElement && menua[b].parentElement.parentElement.scrollWidth > menua[b].parentElement.parentElement.clientWidth)
{
	try
	{
	menua[b].style.display = 'inline';
	}
	catch( e ){
	}
	
}
}
}
}


}
/*
function playMe(el)
{
el.play();
}
function playMeBig(el)
{
//el.webkitEnterFullscreen();
//setTimeout('doPlayAgain(' + el.id + ')', 900);
//el.play();
el.controls = '';
el.setAttribute("onclick","this.play();");
el.play();
}
*/
/*
function playMe2(el)
{
	//alert();
	playMe(el);
	if (EN4iPad != true)
	{
		el.setAttribute("onclick","this.play();");
	}
	//el.load();
	//el.play();
}
*/
function playMeP(eln)
{
	var el = document.getElementById('myVideo' + eln)
	playMe(el);
	if (EN4iPad != true)
	{
		el.setAttribute("onclick","this.play();");
	}
	var element = document.getElementById('myVideoP' + eln);
	if (element)
	{
		element.parentNode.removeChild(element);
	}
	
}
function playMe(el)
{
//window.location.href = 'playme://' + el.hash;
el.play();

//el.setAttribute("onclick","this.play();");
el.addEventListener('ended',function(){this.currentTime=0;this.webkitExitFullScreen();},false);
//setTimeout('doPlayAgain(' + el.id + ')', 900);
//return false;
}
function playMeBig(el)
{
el.controls = '';
if (os >= 11)
  {
   el.addEventListener('ended',function(){this.webkitExitFullScreen();this.currentTime=0;this.controls='controls';},false);
  }
  else
  {
   el.addEventListener('ended',function(){this.webkitExitFullScreen();this.currentTime=0;},false);
   el.setAttribute("onclick","this.play();");
  }

el.play();
}
function goFull(el)
{
el.play();
el.webkitEnterFullscreen();
}

function onCanPlay(el){
	el.removeEventListener('canplaythrough', onCanPlay(this), false);
	el.removeEventListener('load', onCanPlay(this), false);
	//video is ready
	el.play();
}

function doVids()
{

	var vidNum = 0;
	while (viddd = document.getElementById('myVideo'))
	{
	

	/*
	//alert();
	viddd.play(); //start loading, didn't used `vid.load()` since it causes problems with the `ended` event

	if(viddd.readyState !== 4){ //HAVE_ENOUGH_DATA
		viddd.addEventListener('canplaythrough', onCanPlay(this), false);
		viddd.addEventListener('load', onCanPlay(this), false); //add load event as well to avoid errors, sometimes 'canplaythrough' won't dispatch.
		setTimeout(function(){
			viddd.pause(); //block play so it buffers before playing
		}, 1); //it needs to be after a delay otherwise it doesn't work properly.
	}else{
		//video is ready
		//alert();
	}
	*/
	
		viddd.load();
		//viddd.show();
		
		
		//viddd.controls = '';
		//viddd.play();
		viddd.setAttribute("id",'myVideo' + vidNum);
		//viddd.removeAttribute('id');
		//this.controls = 'controls'
		//if (screen.width == 768)
		if (EN4iPad == true)
		{
			if (os >= 11)
			{
			viddd.setAttribute("controls","controls");
			}
		//this.controls='';
		//viddd.addEventListener('ended',function(){this.webkitExitFullScreen();this.currentTime=0;},false);
		}
		else
		{
		
		
		/*
		if (viddd.readyState !== 4)
		{
			alert('ssss');
			viddd.setAttribute("onclick","playMe(this)");
			
			viddd.addEventListener("touchstart",function(){
					playMe2(this);
					}, false);
					
		}
		else
		{
			alert('dddd');
			viddd.setAttribute("onclick","this.play();");
			//viddd.setAttribute("onclick","playMe2(this)");
			
		}
		*/
		viddd.setAttribute("onclick","this.play();");
		viddd.setAttribute("onplay","playMe(this)");
		
		//viddd.addEventListener('ended',function(){this.webkitExitFullScreen();this.currentTime=0;},false);
		}
		//viddd.addEventListener('ended',function(){document.getElementById('myVideo' + vidNum).webkitExitFullScreen();},false);

		//viddd.setAttribute("onplay",function(){document.getElementById('myVideo' + vidNum).webkitEnterFullscreen();});
		
		/*
		viddd.addEventListener("touchend",function(){
					this.load();
					setTimeout('this.play()', 1);
					//setTimeout('playMeP("' + vidNum + '")', 1);
					}, false);
					*/
		
		//viddd.setAttribute("currentTime",0);
		
		var pnode = viddd.parentElement;
		var rect = pnode.getBoundingClientRect();
		
		var node = document.createElement("VIDX"); 
		node.setAttribute("onclick","playMeP('" + vidNum + "')");
		node.setAttribute("id","myVideoP" + vidNum );
		
		node.style.left = Math.floor(rect.left) + 4;
		node.style.top = Math.floor(rect.top) + 4;
		node.style.width = Math.floor(rect.width) -10;
		node.style.height = Math.floor(rect.height) -10;
		node.style.maxWidth = Math.floor(rect.width) -10;
		node.style.maxHeight = Math.floor(rect.height) -10;
		//document.getElementById('body').appendChild(node);
		pnode.appendChild(node);
		
		node.style.position = 'relative';
		
		node.style.left = 4;
		node.style.top = 0 - Math.floor(rect.height) + 4;
		node.style.width = Math.floor(rect.width) -10;
		node.style.height = Math.floor(rect.height) -10;
		node.style.maxWidth = Math.floor(rect.width) -10;
		node.style.maxHeight = Math.floor(rect.height) -10;
		
		pnode = node.parentElement;
		pnode.style.left = Math.floor(rect.left);
		pnode.style.top = Math.floor(rect.top);
		pnode.style.height = Math.floor(rect.height)-6;
		pnode.style.width = Math.floor(rect.width)-6;
		pnode.style.maxWidth = Math.floor(rect.height)-6;
		pnode.style.maxWidth = Math.floor(rect.width)-6;
		
		vidNum++;
	}
}
function doTagsLang()
{
/*
if ( (EN4LanguageName) && (EN4LanguageName == '日本語') )
{
document.getElementById('enfour').style.display = 'inline';
}
else
{
document.getElementById('enfour2').style.display = 'inline';
}
*/
//alert(doLocal);
//(doLocal == false) || 
//event.acceleration

if (  (! EN4LanguageName) || (EN4LanguageName == 'English') || (doLocal == false) )
{

document.getElementById("body").style.display = 'block';

if (document.height > (screen.height - 80) || document.height > 900)
{
if (window.devicePixelRatio > 1)
{
document.getElementById('closeAll').src= "j/closeAll@2x.png";
document.getElementById('openAll').src= "j/openAll@2x.png";
}
}
if (pinched == false)
{
document.getElementById('close').style.display = 'block';
}

if (document.width > screen.width)
{
	document.body.style.width = (screen.width - 8) + 'px';
}
return;

}


if (EN4LanguageName == '日本語')
{
local('ja');
}
else if (EN4LanguageName == '한국어')
{
local('ko');
}
else if (EN4LanguageName == '简体中文')
{
local('zh_CN');
}
else if (EN4LanguageName == '繁體中文')
{
local('zh_TW');
}
else if ((EN4LanguageName == 'Español') || (EN4LanguageName == 'Català'))
{
local('es');
}
else if (EN4LanguageName == 'Français')
{
local('fr');
}
document.getElementById("body").style.display = 'block';


/*
if (document.height > (screen.height - 80) || document.height > 900)
{
*/
if (window.devicePixelRatio > 1)
{
document.getElementById('closeAll').src= "j/closeAll@2x.png";
document.getElementById('openAll').src= "j/openAll@2x.png";
}
if (pinched == false)
{
document.getElementById('close').style.display = 'block';
}
//}

}
/* want to speed up on 3GS by making > 40 */
function doTagsX() 
{
var myloc = location.href;

if ((! jumped) && (myloc.match('#j_')))
{
var myloca = myloc.split('#j_');
if (x >= myloca[1])
{
var elem = document.getElementById('tagged_' + myloca[1]);
if (elem)
{
//alert("got");
jumped = true;
document.getElementById('load').style.display = 'none';
elem.scrollIntoView(true);
setTimeout('doFlashj(' + myloca[1] + ')', 10);
}
}
}
i = 0;
while (els = document.getElementById('tM'))
{
 x++;
 i++;
 clickedTag(els);
 els.id = 'tagged_' + x;
 if (i > 80)
 {
 	setTimeout('doTagsX()', 100);
 	return;
 }
}

if (! jumped)
{
if (myloc.match('#j_'))
{
var myloca = myloc.split('#j_');
var elem = document.getElementById('tagged_' + myloca[1]);
if (elem)
{
elem.scrollIntoView(true);
setTimeout('doFlashj(' + myloca[1] + ')', 10);
}
}
jumped = true;
document.getElementById('load').style.display = 'none';
}
if (document.width > screen.width)
{
	document.body.style.width = (screen.width - 8) + 'px';
}

if (document.width > screen.width)
{
var menua = document.getElementsByTagName('p:REFHWD');
if ((menua) && (menua.length > 0))
{
var b;
for(b in menua) 
{
if  (menua[b] && menua[b].parentElement && menua[b].parentElement.parentElement && menua[b].parentElement.parentElement.scrollWidth > menua[b].parentElement.parentElement.clientWidth)
{
try
{
menua[b].style.display = 'inline';
}
catch( e ){
}
}
}
}
}

}
function spmenukick(el) {
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
var menua = document.getElementsByTagName('spmenu');
var i;
for(i in menua) 
{
if (i == 0 ) /* subsequent items do not jump 2018.12.22 */
{
if (menua[i].style)
{
var menu = menua[i].style;

if (menu.display == "block")
{
 menu.display = "none";
 }
 else
 {
 menu.display = "block";
 }
}
}
}

var colo = document.getElementsByTagName('p:ColloBox');
if ( (colo) && (colo.length > 0))
{
if (! document.getElementById('colo'))
{
var newdiv = document.createElement("a");
newdiv.setAttribute("name","#colo");
newdiv.setAttribute("id","colo");
colo[0].insertBefore(newdiv, colo[0].firstChild);
var newdiv = document.createElement("splist");
newdiv.setAttribute("onclick","menuJump(this,'colo')");
if (EN4LanguageName == '日本語')
{
var txt = document.createTextNode("連語 ↓");
}
else if (EN4LanguageName == '한국어')
{
var txt = document.createTextNode("낱말의 배치 ↓");
}
else if ((EN4LanguageName == 'Español') || (EN4LanguageName == 'Català'))
{
var txt = document.createTextNode("Colocaciones ↓");
}
else
{
var txt = document.createTextNode("Collocations ↓");
}
newdiv.appendChild(txt); 
newdiv.className += 'Collo';
el.nextSibling.appendChild(newdiv);
}
}
var colo = document.getElementsByTagName('p:ThesBox');
if ( (colo) && (colo.length > 0))
{
if (! document.getElementById('thes'))
{
var newdiv = document.createElement("a");
newdiv.setAttribute("name","#thes");
newdiv.setAttribute("id","thes");
colo[0].insertBefore(newdiv, colo[0].firstChild);
var newdiv = document.createElement("splist");
newdiv.setAttribute("onclick","menuJump(this,'thes')");
if (EN4LanguageName == '日本語')
{
var txt = document.createTextNode("類語 ↓");
}
else if (EN4LanguageName == '한국어')
{
var txt = document.createTextNode("동의어 ↓");
}
else
{
var txt = document.createTextNode("Thesaurus ↓");
}
newdiv.appendChild(txt); 
newdiv.className += 'Collo';
el.nextSibling.appendChild(newdiv);
}
}
var colo = document.getElementsByTagName('ety');
if ( (colo) && (colo.length > 0))
{
if (! document.getElementById('ety'))
{
var newdiv = document.createElement("a");
newdiv.setAttribute("name","#ety");
newdiv.setAttribute("id","ety");
colo[0].insertBefore(newdiv, colo[0].firstChild);
var newdiv = document.createElement("splist");
newdiv.setAttribute("onclick","menuJump(this,'ety')");
if (EN4LanguageName == '日本語')
{
var txt = document.createTextNode("語源 ↓");
}
else if (EN4LanguageName == '한국어')
{
var txt = document.createTextNode("어원 ↓");
}
else if ((EN4LanguageName == 'Español') || (EN4LanguageName == 'Català'))
{
var txt = document.createTextNode("Etimología ↓");
}
else
{
var txt = document.createTextNode("Word origin ↓");
}
newdiv.appendChild(txt); 
newdiv.className += 'Ety';
el.nextSibling.appendChild(newdiv);
}
}
}

function spmenuclose()
{
var menua = document.getElementsByTagName('spmenu');
var i;
for(i in menua) 
{
	if (i == 0 ) /* subsequent items do not jump 2018.12.22 */
	{
	if (menua[i].style)
	{
		menua[i].style.display = "none";
	}
	}
}
}
function menuJump(el,tag)
{
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/

if (tag.match('colo') )
{
	var senses = document.getElementsByTagName('p:Tail');
	
	if (senses.length > 0)
	{
	
	var i = 0;
	for(i in senses)
	{
		try
		{
		//senses[i].setAttribute('class', 'show');
		setClass(senses[i], 'show');
		}
		catch( e ){
		}
	}
	}
	senses = document.getElementsByTagName('collobox');
	if (senses.length > 0)
	{
	var i = 0;
	for(i in senses)
	{
		try
		{
		//senses[i].setAttribute('class', 'show');
		setClass(senses[i], 'show');
		if (i == 0)
		{
		window.location.href = '#' + tag;
		senses[i].scrollIntoView(true);
		}
		}
		catch( e ){
		}
	}
	}
	
location.href = '#' + tag;
elem.scrollIntoView(true);

}
else if (tag.match(/^ety$/) )
{
	var senses = document.getElementsByTagName('ety');
	if (senses.length > 0)
	{
	var i = 0;
	for(i in senses)
	{
		try
		{
		//senses[i].setAttribute('class', 'show');
		setClass(senses[i], 'show');
		if (i == 0)
		{
		window.location.href = '#' + tag;
		senses[i].scrollIntoView(true);
		}
		}
		catch( e ){
		}
	}
	}
	
}
else
{
location.href = '#' + tag;
setTimeout('doFlashSP()', 400);
var elem = document.getElementById(tag);
if (darkmode == false)
{
elem.nextSibling.style.backgroundColor = "#DDDDDD";
elem.nextSibling.style.borderColor = "#DDDDDD";
}
else
{
elem.nextSibling.style.backgroundColor = "#777878";
elem.nextSibling.style.borderColor = "#777878";
}
}


}
function PC()
{
	var back = myBack;
 	var backhm = document.getElementsByTagName('p:Head');
 	if ((backhm) && (backhm.length > 0))
		 {
		 	var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
		 	if (hmms.length > 0)
		 	{
		 	back = back + ' ' + hmms[0].innerText;
		 	}
		 }
 	back = back.replace(/ /g, '+');
 	back = encodeURIComponent(back);
	window.location.href = 'about://2.1_prons.html?back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
}
/*
function th()
{

var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(document.getElementById("th"));
sel.removeAllRanges();
sel.addRange(range);

var word = myBack;

var sec = ['À','Á','Â','Ã','Ä','Å','à','á','â','ã','ä','å','Ò','Ó','Ô','Õ','Õ','Ö','Ø','ò','ó','ô','õ','ö','ø','È','É','Ê','Ë','è','é','ê','ë','ð','Ç','ç','Ð','Ì','Í','Î','Ï','ì','í','î','ï','Ù','Ú','Û','Ü','ù','ú','û','ü','Ñ','ñ','Š','š','Ÿ','ÿ','ý','Ž','ž'];
var rep = ['A','A','A','A','A','A','a','a','a','a','a','a','O','O','O','O','O','O','O','o','o','o','o','o','o','E','E','E','E','e','e','e','e','e','C','c','D','I','I','I','I','i','i','i','i','U','U','U','U','u','u','u','u','N','n','S','s','Y','y','y','Z','z'];
var y;
	for (var y = 0; y < 61; y++)
	{
	word = word.replace(sec[y], rep[y]);
	}
	var back = word;

	var backhm = document.getElementsByTagName('p:Head');
	
	if ((backhm) && (backhm.length > 0))
	 {
		var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
		if (hmms.length > 0)
		{
		var hommer = hmms[0].innerText;
		if (hommer != '1')
		{
			back = back + ' ' + hommer;
		}
		}
	 }
	word = word.replace(' ', '+');
	word = encodeURIComponent(word);
	back = back.replace(' ', '+');
	back = encodeURIComponent(back);

	window.location.href = 'thes://' + word + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
	
	//setTimeout("thes('" + back + "')", 1200);
}
*/
function HYPH() {
if (EN4flashDef == true)
{
return;
}
var els = document.getElementsByTagName('p:HWD');
if ((els) && (els.length > 0))
{
var el = els[0];
//var el2 = document.getElementsByTagName('p:HYPH')[0];
//if (el.innerText != el2.innerText)
//{

if ( (el.style) && (el.style.display == 'block'))
{
el.style.display = '';
var sel = window.getSelection();
sel.removeAllRanges();
}
else
{
var text = el.innerText;
var len = text.length;
if (len < 5) {
var lenval = 80;
}
else if (len < 11) {
var lenval = 50;
}
else if (text.match(" ")) {
var lenval = 40;
}
else if (text.match("-")) {
var lenval = 40;
}
else {
var lenval = Math.floor(300 / len);
if (lenval < 26) {
var lenval = 26;
}
if (lenval > 80) {
var lenval = 80;
}
}
el.style.fontSize = lenval;
el.style.lineHeight = 1.1;

el.style.display = 'block';
//document.getElementById("th").style.display = 'block';
//location.href = '#top';
topMe();
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
if ((! navigator.userAgent.match('acintosh')) && (! navigator.userAgent.match('ndroid')) )
{
if (watchtap)
{
return;
}
//var x = el.offsetLeft - window.pageXOffset; //+ Math.floor(el.offsetWidth / 2)
var lH = getStyle(el, 'line-height');
var y = Math.floor(el.offsetTop * zoom) - window.pageYOffset + 28; //+ parseInt(lH)

var tlbox = Math.floor(el.offsetLeft * zoom) - window.pageXOffset;
//var trboy = el.offsetRight - window.pageXOffset;

window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(el.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&0';
if (darkmode == false)
	{
		el.style.backgroundColor = "#CCDDED";
		document.getElementById("body").style.backgroundColor = "#F6F6F6";
	}
	else
	{
		el.style.backgroundColor = "#4B494B";
		document.getElementById("body").style.backgroundColor = "black";
	}
var elem = document.getElementById('selected');
if (elem)
{
elem.style.backgroundColor = "transparent";
elem.id = 'unselected';
}
el.id = 'selected';

}
}
}
}
function LEXVAR(el) 
{
if (EN4actionMenu == true)
{
	tC(el, 0);
}
}
function exas(el, targ)
{
var el2 = document.getElementById('activeexas');
if (el2)
{
el2.removeAttribute("id");
if (el2.className)
{
el2.removeAttribute("onclick");
el2.setAttribute("onclick","exas(this,'" + el2.className  + "');");
}
}
el2 = document.getElementById('downloading');
if (el2)
{
el2.removeAttribute("id");
if (el2.className)
{
el2.removeAttribute("onclick");
el2.setAttribute("onclick","exas(this,'" + el2.className  + "');");
}
}
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
//el.setAttribute("style","background:transparent url(g/loading.gif) no-repeat center center; -webkit-background-size: 18px 18px;");
el.setAttribute("id", 'downloading');
el.setAttribute("class", targ);
el.removeAttribute("onclick");
//setTimeout('doExasBack()', 1500);
targ = targ.replace(/\%20/g, '%5F');
//sel.removeAllRanges();
location.href = 'sound://www.enfour.com/ldoce_mp3/' + targ;
}
function badSound()
{
var el2 = document.getElementById('activeexas')
if (el2)
{
el2.removeAttribute("id");
if (el2.className)
{
el2.removeAttribute("onclick");
el2.setAttribute("onclick","exas(this,'" + el2.className + "');");
}
}
var el = document.getElementById('downloading')
if (el)
{
el.removeAttribute("id");
if (el.className)
{
el.removeAttribute("onclick");
el.setAttribute("onclick","exas(this,'" + el.className + "');");
}
}
}
function soundAgain(el)
{
location.href = 'soundagain://me';
}
function doExasBack()
{
var el = document.getElementById('downloading')
if (el)
{
el.setAttribute("id", 'activeexas');
//el.setAttribute("style",null);
//el.setAttribute("class", wav);
el.setAttribute("onclick","soundAgain(this);");
//el.onclick = function () {soundAgain(this);};
/*
if (window.devicePixelRatio > 1)
{
el.setAttribute("style","background:transparent url(j/speaker@2x.png) no-repeat center left; -webkit-background-size: 27px 14px;");
}
else
{
el.setAttribute("style","background:transparent url(j/speaker.png) no-repeat center left; -webkit-background-size: none;");
}
*/
}
}
function goText(word, j, el)
{
if (EN4flashDef == true)
{
return;
}
if ( (EN4actionMenu == true) && (! navigator.userAgent.match('acintosh')) && (! navigator.userAgent.match('ndroid')) )
{
if (watchtap)
{
return;
}

	//var x = el.offsetLeft + Math.floor(el.offsetWidth / 2) - window.pageXOffset;
	var lH = getStyle(el, 'line-height');
	var y = Math.floor(el.offsetTop * zoom) - window.pageYOffset ; //+ parseInt(lH)
	
	var tlbox = Math.floor(el.offsetLeft * zoom) - window.pageXOffset;
	//var trboy = el.offsetRight - window.pageXOffset;
	
	if (darkmode == false)
	{
		el.style.backgroundColor = "#CCDDED";
		document.getElementById("body").style.backgroundColor = "#F6F6F6";
	}
	else
	{
		el.style.backgroundColor = "#4B494B";
		document.getElementById("body").style.backgroundColor = "black";
	}

	window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(el.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&' + j;
	
	var elem = document.getElementById('selected');
	if (elem)
	{
	elem.style.backgroundColor = "transparent";
	elem.id = 'unselected';
	}
	el.id = 'selected';
	return;
}
	
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);

	var back = myBack;
 	var backhm = document.getElementsByTagName('p:Head');
	
	if ((backhm) && (backhm.length > 0))
	 {
		var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
		if (hmms.length > 0)
		{
		var hommer = hmms[0].innerText;
		if (hommer != '1')
		{
			back = back + ' ' + hommer;
		}
		}
	 }
	
 	back = back.replace(/ /g, '+');
 	
 	var sense = false;
 	
 	/*
 	if (word.match('#s_'))
	{
	var myloca = word.split('#s_');
	sense = true;
	word = myloca[0];
	
	}
	*/
 	
	//word = word.replace(/,/g, '');
	
	word = cleanWord(word);
	
	var sec = ['À','Á','Â','Ã','Ä','Å','à','á','â','ã','ä','å','Ò','Ó','Ô','Õ','Õ','Ö','Ø','ò','ó','ô','õ','ö','ø','È','É','Ê','Ë','è','é','ê','ë','ð','Ç','ç','Ð','Ì','Í','Î','Ï','ì','í','î','ï','Ù','Ú','Û','Ü','ù','ú','û','ü','Ñ','ñ','Š','š','Ÿ','ÿ','ý','Ž','ž'];
	
	var rep = ['A','A','A','A','A','A','a','a','a','a','a','a','O','O','O','O','O','O','O','o','o','o','o','o','o','E','E','E','E','e','e','e','e','e','C','c','D','I','I','I','I','i','i','i','i','U','U','U','U','u','u','u','u','N','n','S','s','Y','y','y','Z','z'];
	var y;
	for (var y = 0; y < 61; y++)
	{
	word = word.replace(sec[y], rep[y]);
	back = back.replace(sec[y], rep[y]);
	}

	word = encodeURIComponent(word);
	back = encodeURIComponent(back);
	
	//word = word.replace(/%23s_/, '#s_');
	//back = back.replace(/%23t_/, '#t_');
	//var url = 'ldoce://' + word + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
	
	if (sense)
	{
		//url = url + '#s_' + myloca[1];
		var url = 'ldoce://' + word + '?exact=on&sensenum=' + myloca[1] + '&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
	}
	else
	{
		var url = 'ldoce://' + word + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
	}
	//alert(url);
	
	if (j)
	{
	url = url + '%23j_' + j;
	}
	
	
	window.location.href = url;
	
}
/*
// make a new header via URL
	var back = document.getElementsByTagName('body');
	back = back[0].innerHTML;
	back = encodeURIComponent(back);
	window.location.href = 'mailto:?body=' + back;
*/	
function REFHWD(el)
{

if (EN4flashDef == true)
{
return;
}
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/

el.style.backgroundColor = "#CCDDED";

var word = el.innerHTML;

word = word.replace(/^ /, '');
word = word.replace(/<span class="neutral">at<\/span> /g, '');
word = word.replace(/<span class="neutral"><span class="nobold">参考:<\/span><\/span> /g, '');
word = word.replace(/<span class="neutral"><span class="nobold">參考:<\/span><\/span> /g, '');
word = word.replace(/<span class="neutral"><span class="nobold">추천:<\/span><\/span> /g, '');
word = word.replace(/<span class="neutral"><span class="nobold">enlaces:<\/span><\/span> /g, '');


var parent = el.parentElement;

if ((parent.tagName.match ('P:CROSSREFTO') ) && (parent.attributes[0]) && (parent.attributes[0].nodeName.match ('href') ))
{
	if (( el.previousElementSibling ) && (el.previousElementSibling.tagName.match ('P:REFHWD') ) )
	{
	}
	else
	{
	var loc = parent.attributes[0].nodeValue;
	}
}

if (! loc)
{
	var next = el.firstChild;
	
	if ((next) && (! next.nodeName.match( '#text')) && (next.tagName.match(/^A$/)) && (next.hash) )
		{
		var loc = next.hash;
		}
}


var hom = el.nextSibling; /* .getElementsByTagName('p:REFHOMNUM'); */

if ((hom) && (hom.nodeName) && (! hom.nodeName.match( '#text')))
{
if (hom.tagName && hom.tagName.match('P:REFHOMNUM'))
{
	word = word + ' ' + hom.innerText;
	
	var hom2 = hom.nextSibling;
	if ((hom2) && (hom2.tagName) && (hom2.tagName.match('P:REFSENSENUM')))
	{
	 var sense = hom2.innerText;
	 sense = sense.replace('(', '');
	 sense = sense.replace(')', '');
	 sense = sense.replace(/ /g, '');
	 /* word = word + '#s_' + sense; */
	}
	if (! loc)
	{
	loc = 'ldoce://' + encodeURIComponent(word);
	/* should jump direct even if no href. But would actually like to add the '#s_' + sense */
	}
}
else  if ((hom.tagName) && (hom.tagName.match('P:REFSENSENUM')))
{
 var sense = hom.innerText;
 sense = sense.replace('(', '');
 sense = sense.replace(')', '');
 sense = sense.replace(/ /g, '');
 /* word = word + '#s_' + sense; */
 if (! loc)
	{
	loc = 'ldoce://' + encodeURIComponent(word);
	/* should jump direct even if no href. But would actually like to add the '#s_' + sense */
	}
}
}

if (loc)
{
	var back = myBack
	
	var backhm = document.getElementsByTagName('p:Head');
	
	if ((backhm) && (backhm.length > 0))
	 {
		var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
		if (hmms.length > 0)
		{
		back = back + ' ' + hmms[0].innerText;
		}
	 }
	
	back = back.replace(/ /g, '+');
	back = encodeURIComponent(back);
	if (sense)
	{
	loc = loc + '#s_' + sense;
	}
	window.location.href = loc + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
	
	//goText(word, '', el); //fall back
	
	return false;
}
else
{
/*
if (sense)
{
	word = word + '#s_' + sense;
}
*/
goText(word, '', el);
}
}
function SYN(el)
{
if (EN4flashDef == true)
{
return;
}
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
el.style.backgroundColor = "#CCDDED";
var word = el.innerHTML;

word = word.replace(/^ /, '');
word = word.replace(/<span class="synopp">[^<>]+<\/span> /g, '');
word = word.replace(/<span class="geo">[^<>]+<\/span>/g, '');
word = word.replace(/<span class="[^<>]+">([^<>]+)<\/span>/g, '$1');
word = word.replace(/<p:geo>[^<>]+<\/p:geo>/g, '');
word = word.replace(/<p:geo class="noital">[^<>]+<\/p:geo>/g, '');
word = word.replace(/:/g, '');
word = word.replace(/\./g, '');
word = word.replace(/,/g, '');
word = word.replace(/ $/, '');

//goText(word, '', el);

var back = myBack;
var backhm = document.getElementsByTagName('p:Head');

if ((backhm) && (backhm.length > 0))
 {
	var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
	if (hmms.length > 0)
	{
	var hommer = hmms[0].innerText;
	if (hommer != '1')
	{
		back = back + ' ' + hommer;
	}
	}
 }

back = back.replace(/ /g, '+');

var sense = false;


var sec = ['À','Á','Â','Ã','Ä','Å','à','á','â','ã','ä','å','Ò','Ó','Ô','Õ','Õ','Ö','Ø','ò','ó','ô','õ','ö','ø','È','É','Ê','Ë','è','é','ê','ë','ð','Ç','ç','Ð','Ì','Í','Î','Ï','ì','í','î','ï','Ù','Ú','Û','Ü','ù','ú','û','ü','Ñ','ñ','Š','š','Ÿ','ÿ','ý','Ž','ž'];

var rep = ['A','A','A','A','A','A','a','a','a','a','a','a','O','O','O','O','O','O','O','o','o','o','o','o','o','E','E','E','E','e','e','e','e','e','C','c','D','I','I','I','I','i','i','i','i','U','U','U','U','u','u','u','u','N','n','S','s','Y','y','y','Z','z'];
var y;
for (var y = 0; y < 61; y++)
{
word = word.replace(sec[y], rep[y]);
back = back.replace(sec[y], rep[y]);
}


var hom = el.nextSibling;

if ((hom) && (hom.nodeName) && (! hom.nodeName.match( '#text')))
{

if (hom.tagName && hom.tagName.match('P:REFHOMNUM'))
{
	word = word + ' ' + hom.innerText;

	var hom2 = hom.nextSibling;
	
	if ((hom2) && (hom2.tagName) && (hom2.tagName.match('P:REFSENSENUM')))
	{
	
	 var sense = hom2.innerText;
	 sense = sense.replace('(', '');
	 sense = sense.replace(')', '');
	 sense = sense.replace(/ /g, '');
	 /* word = word + '#s_' + sense; */
	}
	if (! loc)
	{
	 var loc = 'ldoce://' + encodeURIComponent(word);
	/* should jump direct even if no href. But would actually like to add the '#s_' + sense */
	}
}
else  if ((hom.tagName) && (hom.tagName.match('P:REFSENSENUM')))
{
 var sense = hom.innerText;
 sense = sense.replace('(', '');
 sense = sense.replace(')', '');
 sense = sense.replace(/ /g, '');
 /* word = word + '#s_' + sense; */
 if (! loc)
	{
	var loc = 'ldoce://' + encodeURIComponent(word);
	/* should jump direct even if no href. But would actually like to add the '#s_' + sense */
	}
}
}

if (loc)
{
	back = encodeURIComponent(back);
	
	
	if (sense)
	{
	loc = loc + '#s_' + sense;
	}
	
	
	
	window.location.href = loc + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';
	
	//goText(word, '', el); //fall back
	
	return false;
}
else
{
 //goText(word, '', el);
 
word = encodeURIComponent(word);
back = encodeURIComponent(back);


location.href =  'ldoce://' + word + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on';


}



}

function RELATEDWD(el)
{
if (EN4flashDef == true)
{
return;
}
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
el.style.backgroundColor = "#CCDDED";
var word = el.innerHTML;

word = word.replace(/^ /, '');
word = word.replace(/<span class="neutral">,<\/span>/, '');
	
goText(word, '', el);
}
function placeit(el,tag)
{
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
if (tag.match('top'))
{
topMe();
}
else
{
location.href = '#' + tag;
var els = document.getElementById(tag);
if (els)
{
els.parentElement.previousElementSibling.scrollIntoView(true);
}
}
}
function tC(el, localv)
{
if (EN4flashDef == true)
{
return;
}
var local = localv;
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
var word = el.innerText; //firstChild.data; //innerHTML;

var els = el.parentElement;
var hash = '';
var tagged = false;
if (els)
{
	var elss = els.parentElement;
	if ((els.id) && (els.id.match('tagged_')) )
	{
	tagged = true;
	var myloca = els.id.split('agged_');
	}
	else if ( (elss.id) && (elss.id.match('tagged_')) )
	{
	tagged = true;
	var myloca = elss.id.split('agged_');
	}
}
if ((tagged) && (myloca[1]))
{
	goText(word, myloca[1], el);
}
else
{
	goText(word, '', el);
}

}
function clickedTag(tag)
{
var nonSearch = Array(
'sth', 'sb', '-', '/', 'etc', 'sb’s', 's', '¼', '½', '¾', '‧'
);

var newTag = "";
var text = tag.innerHTML;  

text = text.replace(/ id="tM"/g, '');

text = text.replace(/<\//g, '<_');

text = text.replace(/<img src="g\/us\.png"/g, '<imgsrcus');
text = text.replace(/<img src="g\/gb\.png"/g, '<imgsrcgb');


text = text.replace(/ onclick="refhwd(this)"/g, '');
text = text.replace(/ onclick="relatedwd(this)"/g, '');
text = text.replace(/ onclick="syn(this)"/g, '');

text = text.replace(/ onclick=/g, '_onclick=');
text = text.replace(/ id=/g, '_id=');
text = text.replace(/ class=/g, '_class=');
text = text.replace(/ href=/g, '_href=');
text = text.replace(/se1 num=/g, 'se1_num=');
text = text.replace(/this, '/g, "this,'"); //"
text = text.replace(/\/dat>/g, '_dat>');

text = text.replace(/\//g, ' / ');
text = text.replace(/<br>/g, ' <br>');
text = text.replace(/>/g, '> ');
//text = text.replace(/-/g, ' ');
text = text.replace(/  /g, ' ');
text = text.replace(/> <_exas/g, '><_exas');

text = text.replace(/<hom/g, ' <hom');
text = text.replace(/<span_class="neutral/g, ' <span_class="neutral'); // '

text = text.replace(/ style="background:transparent [^<>]+>/g, '>');

if (text.match(" "))
{

var texta = text.split(' ');
text = '';
var i;
for(i in texta) {
	var word2 = texta[i];
	var word = word2.replace(/,/g, '');
	
	if (word2.match(/\[/))
		word = '';
	if (word2.match(/\]/))
		word = '';
	if (word2.match("–"))
		word = '';
	if (word2.match('inf>'))
		word = '';
	if (word2.match('infg>'))
		word = '';
	if (word2.match('<pron'))
		word = '';
	if (word2.match('<z>'))
		word = '';
	if (word2.match('</z>'))
		word = '';
	if (word2.match('p:geo'))
		word = '';
	if (word2.match('_href'))
		word = '';
	if (word2.match('_dat>'))
		word = '';
	if (word2.match('<a>'))
		word = '';
	if (word2.match('<_a>'))
		word = '';
	if (word2.match('exas>'))
		word = '';
	if (word2.match('<exas'))
		word = '';
	if (word2.match('refsensenum'))
		word = '';
	if (word2.match('refhwd'))
		word = '';
	if (word2.match('refhomnum'))
		word = '';
	if (word2.match('registerlab'))
		word = '';
	if (word2.match('colloinexa'))
		word = '';
	if (word2.match('p:date'))
		word = '';
		
	//if (word2.match('colloinexa'))
	//	word = '';
	if (word2.match('%'))
		word = '';
		
	word = word.replace(/<[^<>]+>/g, '');
	
	word = word.replace(/<br>/g, '');
	
	word = word.replace(/"/g, ''); //"
	word = word.replace(/:/g, '');
	word = word.replace(/\./g, '');
	//word = word.replace(/\//g, '');
	word = word.replace(/\?/g, '');
	word = word.replace(/!/g, '');
	word = word.replace(/\(/g, '');
	word = word.replace(/\)/g, '');
	word = word.replace(/=/g, '');
	word = word.replace(/'$/, '');
	word = word.replace(/^'/, '');
	word = word.replace(/“/g, '');
	word = word.replace(/”/g, '');
	word = word.replace(/\.\.\./g, '');
	word = word.replace(/’/g, '');
	word = word.replace(/‘/g, '');
	
	word = word.replace(/;/g, '');
	word = word.replace("\n", '');
	word = word.replace("|", '');
	
	//word = word.replace(/<_/g, '</');
	word2 = word2.replace(/<_/g, '</');
	
	word = word.replace(/_/g, ' ');
	word2 = word2.replace(/_/g, ' ');
	
	word = word.toLowerCase();
	
	word = word.replace(/^[0-9]+$/g, '');
	

	if (word.length == 0){
		newTag = newTag + word2 + " ";
	}
	else
	{

		var xn;
		var i=0;
		for (xn in nonSearch){
			if (nonSearch[xn] == word){
				newTag = newTag + word2 + " ";
				var i=1;
				break;
				}
		}
		
		if (i == 0)
		{
			var wordx = word2.replace(/<[^<>]+>/g, '');
			var worde = '';
			var wordb = '';
			if (word2.match("</"))
			{
			var wordt = word2.split('</');
			wordt = wordt[0];
			var worde = word2.replace(wordt, '');
			if (wordt.match("<"))
			{
			var wordb = wordt.replace(/>[^>]+$/, '>'); 
			}
			}
			else if (word2.match("<"))
			{
			var wordb = word2.replace(/^<([^<>]+)>.+/, '<$1>');
			}
			newTag = newTag + wordb + "<span class=\"textSelectable\" onclick=\"tC(this,1)\">" + wordx + "</span> " + worde;
		}
		
	}
  }
  
texta = '';

newTag = newTag.replace(/  /g, ' ');

//newTag = newTag.replace(/<_/g, '</');

newTag = newTag.replace(/\( /g, '(');
newTag = newTag.replace(/ \)/g, ')');

newTag = newTag.replace(/\(<([^ ]+)> /g, '(<$1>');
newTag = newTag.replace(/\(<([^ ]+)> /g, '(<$1>');
newTag = newTag.replace(/\(<([^ ]+)> /g, '(<$1>');

newTag = newTag.replace(/ <([^ ]+)>\)/g, '<$1>)');
newTag = newTag.replace(/ <([^ ]+)>\)/g, '<$1>)');

newTag = newTag.replace(/<a href="#([^<>]+)"> <span class="textSelectable" onclick="tC\(this,1\)">([^<>]+)<\/span>/g, ' <a href="#$1">$2');

newTag = newTag.replace(/<\/span> <\/i>/g, '</span></i> ');
newTag = newTag.replace(/  /g, ' ');
newTag = newTag.replace(/> ,/g, '>,');
newTag = newTag.replace(/-<i> /g, '-<i>');

/*newTag = newTag.replace(/ <\/dum> /g, ' </dum>');
newTag = newTag.replace(/ <\/exp>/g, '</exp>');
newTag = newTag.replace(/<ex> /g, '<ex>');*/

newTag = newTag.replace(/ <\/b>/g, '</b> ');
newTag = newTag.replace(/<\/b> \./g, '</b>.');

newTag = newTag.replace(/<\/hom> /g, '</hom>');
newTag = newTag.replace(/ <hom>/g, '<hom>');
newTag = newTag.replace(/<hom> /g, '<hom>');
newTag = newTag.replace(/<p:geo> /g, '<p:geo>');

newTag = newTag.replace(/ \/ /g, '/');
 
newTag = newTag.replace(/<imgsrcus/g, '<img src="g/us.png"');
newTag = newTag.replace(/<imgsrcgb/g, '<img src="g/gb.png"');

newTag = newTag.replace(/>\(/g, '> (');
newTag = newTag.replace(/tC\(this,1\)"> \(/g, 'tC(this,1)">(');

newTag = newTag.replace(/<\/([^<>]+)><([^/<>]+)>/g, '</$1> <$2>');

newTag = newTag.replace(/> :/g, '>: ');
newTag = newTag.replace(/> ;/g, '>;');
newTag = newTag.replace(/> \./g, '>.');
newTag = newTag.replace(/> ,/g, '>,');

newTag = newTag.replace(/<dat> –<\/dat> /g, '<dat>–</dat>');
 
newTag = newTag.replace(/ <span class="neutral/g, '<span class="neutral'); //'
newTag = newTag.replace(/<span class="neutral">: /g, '<span class="neutral">:');

/*
if (newTag.match('wrong'))
{
alert(newTag);

}
*/
newTag = newTag.replace(/ \|<\/span> /g, '|</span>');

newTag = newTag.replace(/=<\/span> /g, '=</span>');
newTag = newTag.replace(/ <\/p:gloss>/g, '</p:gloss>');
newTag = newTag.replace(/ <\/p:suffix>/g, '</p:suffix>');
newTag = newTag.replace(/><\/exas>/g, '>&nbsp;&nbsp;&nbsp;&nbsp;</exas>');
newTag = newTag.replace(/<\/exas> /g, '</exas>');
newTag = newTag.replace(/<([^<>\/]+)> <span class="textSelectable"/g, '<$1><span class="textSelectable"');
newTag = newTag.replace(/\)<\/span>/g, ')</span>');
newTag = newTag.replace(/ !/g, '!');

newTag = newTag.replace(/<\/p:refhwd> <p:suffix>/g, '</p:refhwd><p:suffix>');
 
newTag = newTag.replace(/  /g, ' ');
newTag = newTag.replace(/ $/, '');
newTag = newTag.replace(/<span><\/span>/g, '');
newTag = newTag.replace(/<p:nondv> /g, '<p:nondv>');
newTag = newTag.replace(/<p:colloinexa> /g, '<p:colloinexa>');
newTag = newTag.replace(/ <\/p:colloinexa>/g, '</p:colloinexa> ');
newTag = newTag.replace(/<\/p:colloinexa> \./g, '</p:colloinexa>.');
newTag = newTag.replace(/<\/p:colloinexa> \?/g, '</p:colloinexa>?');
newTag = newTag.replace(/<\/p:colloinexa> !/g, '</p:colloinexa>!');
newTag = newTag.replace(/REFHWD\(this\)"> /g, 'REFHWD(this)">');
newTag = newTag.replace(/ <p:refhomnum/g, '<p:refhomnum');
newTag = newTag.replace(/<p:refhomnum> /g, '<p:refhomnum>');
newTag = newTag.replace(/<p:registerlab> /g, '<p:registerlab>');
newTag = newTag.replace(/<p:suffix> /g, '<p:suffix>');
newTag = newTag.replace(/<p:refhomnum class="hidden"> /g, '<p:refhomnum class="hidden">');
newTag = newTag.replace(/ <\/p:defbold>/g, '</p:defbold>');
newTag = newTag.replace(/ <\/p:defbold>/g, '</p:defbold>');
newTag = newTag.replace(/ <\/p:bookfilm>/g, '</p:bookfilm>');
newTag = newTag.replace(/ <\/p:nondv>/g, '</p:nondv>');
newTag = newTag.replace(/ <\/p:fullform>/g, '</p:fullform>');
newTag = newTag.replace(/<z> /g, '<z>');
newTag = newTag.replace(/<\/z> /g, '</z>');

newTag = newTag.replace(/<\/p:gloss> <p:suffix>/g, '</p:gloss><p:suffix>');

newTag = newTag.replace(/ <span class="refsensenum"> \(/g, '<span class="refsensenum">(');
newTag = newTag.replace(/<\/p:refhomnum> <p:refsensenum>/g, '</p:refhomnum><p:refsensenum>');

newTag = newTag.replace(/<\/span>\/<span class="textSelectable/g, '</span><span class="hyphen">/</span> <span class="textSelectable');

tag.innerHTML = newTag;
newTag = '';

}
else
{
text = text.replace(/_/g, ' ');
tag.innerHTML = "<span class=\"textSelectable\" onclick=\"tC(this,1)\">" + text + "</span>";
text = '';
}


if (tag.parentElement.scrollWidth > tag.parentElement.clientWidth)
{
if (tag.tagName.match(/^P\:DEF$/))
{
	tag.style.display = 'inline-block';
}
else
{
	text = tag.innerHTML;
	tag.innerHTML = text.replace(/>\/</g, '> / <');
	text = '';
}
}

}
function swDial(el) {

topMe();
//location.href = '#top';


if (EN4LanguageName == '日本語')
{
var cancel = "キャンセル";
var answerw = "「書き言葉」";
var answerws = "「話し言葉」";
var answera = "「学術用語」";
var top = '頻度の上位';
var words = "";
}
else if (EN4LanguageName == '简体中文')
{
var cancel = "取消";
var answerw = "written";
var answerws = "spoken";
var answera = "academic";
var words = " words";
var top = 'top ';
}
else if (EN4LanguageName == '繁體中文')
{
var cancel = "取消";
var answerw = "written";
var answerws = "spoken";
var answera = "academic";
var words = " words";
var top = 'top ';
}
else if (EN4LanguageName == '한국어')
{
var cancel = "취소";
var answerw = "written";
var answerws = "spoken";
var answera = "academic";
var words = " words";
var top = 'top ';
}
else if ((EN4LanguageName == 'Español') || (EN4LanguageName == 'Català'))
{
var cancel = "Cancelar";
var answerw = "written";
var answerws = "spoken";
var answera = "academic";
var words = " words";
var top = 'top ';
}
else
{
var cancel = "Cancel";
var answerw = "written";
var answerws = "spoken";
var answera = "academic";
var words = " words";
var top = 'top ';
}

var cancelB = document.getElementById('cancel');

if (cancelB)
{
cancelB.innerText = cancel;
}

var text = el.innerText;
var num = top + text[1] + '000 ';
if (text.match('W'))
{
var answer = answerw;
}
else if (text.match('S'))
{
var answer = answerws;
}
else
{
var answer = answera;
num = '';
}

var tex = '<center><br><hw><p:FREQ>' + text + '</p:FREQ> <b>= ' +  num + answer + words + '</b></hw></center><br><hr><br><pr><p:FREQ>' + text + '</p:FREQ> marked words are in the ' +  num + 'most frequent words in ' + answer + ' English</pr>';
document.getElementById('dtext').innerHTML = tex;
document.getElementById('dial').style.display = 'block';
document.getElementById('dial').style.zIndex = 2000;
}
function closedial()
{
var large = document.getElementById('dial');
large.style.display = 'none';
document.getElementById('dtext').innerHTML = "";
}
function myVerb(el)
{
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
var loc = el.attributes[1].nodeValue;
 	
//var backhm = document.getElementsByTagName('p:Head');
var backhm = el.parentElement;
if (backhm)
	 {
	 	var hm = backhm.getElementsByTagName('p:HWD');
	 	
	 	if (hm.length > 0)
	 	{
			var back = hm[0].innerText;
			
			var hmms = backhm.getElementsByTagName('p:HOMNUM');
			if (hmms.length > 0)
			{
				back = back + ' ' + hmms[0].innerText;
			}
	 	}
	 	else
	 	{
	 	var back = getBack();
	 	}
	 }
back = back.replace(/ /g, '+');
back = encodeURIComponent(back);
//alert(loc + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on');
location.href = loc + '?exact=on&back=ldoce%3A%2F%2F' + back + '%3Fexact=on'; //%23verb
return false;
	
}
/* start UniDict 4 functions */
function getBack()
{
var back = myBack;

var backhm = document.getElementsByTagName('p:Head');
if ((backhm) && (backhm.length > 0))
	 {
		var hmms = backhm[0].getElementsByTagName('p:HOMNUM');
		if (hmms.length > 0)
		{
			if (! hmms[0].innerText.match("1"))
			{
			back = back + ' ' + hmms[0].innerText;
			}
		}
	 }
	 

back = back.replace(/\([vnadj]+\)$/g, '');
back = back.replace(/¹/g, '1');
back = back.replace(/²/g, '2');
back = back.replace(/³/g, '3');
back = back.replace(/⁴/g, '4');
back = back.replace(/⁵/g, '5');
back = back.replace(/⁶/g, '6');
back = back.replace(/⁷/g, '7');
back = back.replace(/⁸/g, '8');
back = back.replace(/⁹/g, '9');

back = back.replace(/\*/g, '＊');	 
back = back.replace(/ /g, '+');
back = back.replace(/\&/g, '%26');
return back;
}
function getSelf()
{
return "ldoce://";
}
function getPaired()
{
return "lej://";
}
function myLang()
{
return "en";
}
function pairLang()
{
return "en";
}
function reSelect()
{
setTimeout('reSelect2()', 400);
document.getElementById('selected').scrollIntoView(true);
}
function reSelect2()
{
var elem = document.getElementById('selected');
if (elem)
{
   elem.scrollIntoView(true);
   unSelect();
   elem.click();
}
}
function unSelect()
{
if (darkmode == false)
	document.getElementById("body").style.backgroundColor = "white";
else
	document.getElementById("body").style.backgroundColor = "black";
var elem = document.getElementById('selected');
if (elem)
{
elem.style.backgroundColor = "transparent";
elem.id = 'unselected';
}
var sel = window.getSelection();
sel.removeAllRanges();
}
function hideSelect()
{
if (darkmode == false)
	document.getElementById("body").style.backgroundColor = "white";
else
	document.getElementById("body").style.backgroundColor = "black";
var elem = document.getElementById('selected');
if (elem)
{
elem.style.backgroundColor = "transparent";
elem.id = 'unselected';
}
var sel = window.getSelection();
sel.removeAllRanges();
}
function getStyle(x,styleProp)
{
    //var x = document.getElementById(el);
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
    if (y.match('normal'))
    {
    	y = x.offsetHeight;
    }
    else
    {
    	y = y.replace("px", '');
    }
     return Math.floor(y);
}
function cleanSelection()
{
//var word = window.getSelection().toString();

var elem = document.getElementById('selected');
var word = elem.innerText;
if (elem)
{
	if (elem.tagName.match ('P:REFHWD'))
	{
	word = word.replace(/^at /, '');
	}
}
word = cleanWord(word);

return word;
}
function cleanWord(word)
{


word = word.replace(/<span class="hiraf" type="p">ˌ<\/span>/g, 'ppp_down_ppp');
word = word.replace(/<span class="hiraf"type="p">ˈ<\/span>/g, 'ppp_up_ppp');

word = word.replace(/ˌ/g, '');
word = word.replace(/ˈ/g, '');


word = word.replace(/ppp_up_ppp/g, 'ˈ');
word = word.replace(/ppp_down_ppp/g, 'ˌ');

word = word.replace(/ /g, ' '); //nbspace
word = word.replace(/  /g, ' ');
word = word.replace(/  /g, ' ');
word = word.replace(/^  /g, '');
word = word.replace(/^ /g, '');

word = word.replace(/  /, ' ');

word = word.replace("<br>", '');
word = word.replace(/<[^<]+>/g, '');

word = word.replace(/"/g, ''); //"
word = word.replace(/:/g, '');
word = word.replace(/\.$/g, '');
word = word.replace(/\//g, '');
word = word.replace(/\?/g, '');
word = word.replace(/!/g, '');
word = word.replace(/\(/g, '');
word = word.replace(/\)/g, '');
word = word.replace(/'$/, ''); //'
word = word.replace(/^'/, ''); //'
word = word.replace(/,$/, '');

word = word.replace(/‘/g, '');
word = word.replace(/n’t/g, "n't");
word = word.replace(/’s/g, "'s");
word = word.replace(/’/g, '');
word = word.replace(/”/g, '');
word = word.replace(/“/g, '');

word = word.replace(/‧/g, '');

word = word.replace(/\[/g, '');
word = word.replace(/\]/g, '');
word = word.replace(/;/g, '');
//word = word.replace(/-/g, '');
word = word.replace("\n", '');
word = word.replace("|", '');
//word = word.replace(/\[/g, ''); //for bug in <mass>
word = word.replace(/ $/, '');
word = word.replace(/^ /, '');


word = word.replace(/➔ /, '');
word = word.replace(/^ /, '');
return word;
}

function closeHWD()
{
var els = document.getElementsByTagName('p:HWD');
if ((els) && (els.length > 0))
{
var el = els[0];
var sel = window.getSelection();
sel.removeAllRanges();
el.style.display = '';
}
}
function selectAll()
{
var el = document.getElementById("body");

if (darkmode == false)
	el.style.backgroundColor = "#CCDDED";
else
	el.style.backgroundColor = "#4B494B";

var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);

var elem = document.getElementById('selected');
if (elem)
{
elem.style.backgroundColor = "transparent";
elem.id = 'unselected';
}
}
function copyAll()
{
var el = document.getElementById("body");

el.setAttribute('class', 'body3');

var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);

var returnee = window.getSelection().toString();

el.setAttribute('class', 'body');

sel.removeAllRanges();

returnee = returnee.replace(/^12[4-9]*/, '');
returnee = returnee.replace(/\[/g, ' [');
returnee = returnee.replace(/\]/g, '] ');
returnee = returnee.replace(/\)/g, ') ');
returnee = returnee.replace(/BrE/g, ' (BrE)');
returnee = returnee.replace(/AmE/g, ' (AmE)');
returnee = returnee.replace(/  /g, ' ');
returnee = returnee.replace(/➔/g, "\n ➔");

gotop();

return returnee;
}
function getJPOS()
{
var els = document.getElementById('selected');
if (els)
{
	var tagged = false;
	var elss = els.parentElement;
	
	if ((els.id) && (els.id.match('tagged_')) )
	{
	tagged = true;
	var myloca = els.id.split('agged_');
	}
	else if ( (elss.id) && (elss.id.match('tagged_')) )
	{
	tagged = true;
	var myloca = elss.id.split('agged_');
	}
	
	if ((tagged) && (myloca[1]))
	{
		return myloca[1];
	}

}
}
function findGraphic()
{
var graphics = document.getElementsByTagName('p:FLOATJ');
if (graphics.length > 0)
{
return graphics[0].firstChild.firstChild.src;
}
graphics = document.getElementsByTagName('p:FLOATX');
if (graphics.length > 0)
{
return graphics[0].firstChild.firstChild.src;
}
}
function copyAllHTML()
{
var el = document.getElementById("body");
return '<body>' + el.innerHTML + '</body></html>';
}

function copyHTML()
{

var selectedRange = null;

try {
        if (window.getSelection) {
            selectedRange = window.getSelection().getRangeAt(0);
        } else {
            selectedRange = document.getSelection().getRangeAt(0);
        }
    } catch (err) {

    }

var load = document.getElementById("load");
var remove = load.innerHTML;
load.appendChild(selectedRange.cloneContents());
var html = load.innerHTML;
html = html.replace(remove, '');
load.innerHTML = remove;

return html;

}
function copyHTMLfull()
{

var selectedRange = null;

try {
        if (window.getSelection) {
            selectedRange = window.getSelection().getRangeAt(0);
        } else {
            selectedRange = document.getSelection().getRangeAt(0);
        }
    } catch (err) {

    }

var load = document.getElementById("load");
var remove = load.outerHTML;
load.appendChild(selectedRange.cloneContents());


getBefore(load);

var retText = load.innerHTML;


retText = getAfter(retText);

load.outerHTML = remove;

return retText;
	 
}
function copyAllHTMLfull(print)
{

var el = document.getElementById("body");

if (print == false)
{
var keepHTML = el.outerHTML;
}

getBefore(el);

var retText = el.innerHTML;

if (print == false)
{
el.outerHTML = keepHTML ;
keepHTML = '';
}

retText = getAfter(retText);

if (print == true)
{
el.innerHTML = retText ;
}
else
{
return retText;
}
}

function getBefore(el)
{
var els = el.getElementsByTagName("*");

for(var i = -1, l = els.length; ++i < l;)
{

if (els[i])
{
if ((els[i].tagName) && (els[i].tagName.match(/^HR$/)) )
{
els[i].outerHTML = "<p style=\"display: block;\">_____________</p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^BR$/)))
{
els[i].outerHTML = "<p style=\"display: block;\"> </p>";
}
else if ((els[i].tagName) && (els[i].tagName.match('MYPLACE')))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match('PLACE')))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^P\:G$/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^P\:M$/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^LINK$/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^IMG$/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^P\:FLOAT/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^SPMENUKICK$/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^P\:FIELDLINE$/)))
{
els[i].outerHTML = "<p style=\"display: none;\"></p>";
}
else if ((els[i].tagName) && (els[i].tagName.match(/^SCRIPT$/)))
{
els[i].outerHTML = "<span style=\"display: none;\"></span>";
}
else
{

if ((els[i].tagName) && (els[i].tagName.match(/^EXAS$/)))
{
els[i].style.marginLeft = "0px";
}
if ((els[i].tagName) && (els[i].tagName.match(/^P\:EXAMPLE$/)))
{
els[i].style.paddingLeft = "0px";
}
if ((els[i].tagName) && (els[i].tagName.match(/^P\:FREQ$/)))
{
els[i].style.backgroundColor = "pink";
}
if ((els[i].tagName) && (els[i].tagName.match(/^P\:AC$/)))
{
els[i].style.backgroundColor = "pink";
}
if ((els[i].tagName) && (els[i].tagName.match(/^ETY$/)))
{
els[i].style.backgroundColor = "#CFCFCF";
}
if ((els[i].className) && (els[i].className.match(/^sensenum/)))
{
els[i].style.marginLeft = "-16px";
}

var comStyle = window.getComputedStyle(els[i]);

var stl = 'display: ' + comStyle.display;
if (comStyle.display != 'none')
{
if (comStyle.backgroundColor != 'rgba(0, 0, 0, 0)')
{
stl = stl + '; background-color: ' + comStyle.backgroundColor;
}
if (comStyle.marginRight != "0px")
{
stl = stl + '; margin-right: ' + comStyle.marginRight
}
if (comStyle.marginLeft != "0px")
{
stl = stl + '; margin-left: ' + comStyle.marginLeft
}
if (comStyle.marginBottom != "0px")
{
stl = stl + '; margin-bottom: ' + comStyle.marginBottom
}
if (comStyle.marginTop != "0px")
{
stl = stl + '; margin-top: ' + comStyle.marginTop
}
if (comStyle.paddingBottom != "0px")
{
stl = stl + '; padding-bottom: ' + comStyle.paddingBottom
}
if (comStyle.paddingLeft != "0px")
{
stl = stl + '; padding-left: ' + comStyle.paddingLeft
}
if (comStyle.paddingRight != "0px")
{
stl = stl + '; padding-right: ' + comStyle.paddingRight
}
if (comStyle.paddingTop != "0px")
{
stl = stl + '; padding-top: ' + comStyle.paddingTop
}


if (comStyle.borderTopWidth != '0px')
{
stl = stl + '; border-top-width: ' + comStyle.borderTopWidth;
stl = stl + '; border-top-color: ' + comStyle.borderTopColor;
stl = stl + '; border-top-style: ' + comStyle.borderTopStyle;
}

if (comStyle.borderLeftWidth != '0px')
{
stl = stl + '; border-left-width: ' + comStyle.borderLeftWidth;
stl = stl + '; border-left-color: ' + comStyle.borderLeftColor;
stl = stl + '; border-left-style: ' + comStyle.borderLeftStyle;
}

if (comStyle.borderRightWidth != '0px')
{
stl = stl + '; border-right-width: ' + comStyle.borderRightWidth;
stl = stl + '; border-right-color: ' + comStyle.borderRightColor;
stl = stl + '; border-right-style: ' + comStyle.borderRightStyle;
}

if (comStyle.borderBottomWidth != '0px')
{
stl = stl + '; border-bottom-width: ' + comStyle.borderBottomWidth;
stl = stl + '; border-bottom-color: ' + comStyle.borderBottomColor;
stl = stl + '; border-bottom-style: ' + comStyle.borderBottomStyle;
}


if ( (els[i].innerText) && (els[i].innerText.length > 0))
{
if (comStyle.fontWeight != "normal")
{
stl = stl + '; font-weight: ' + comStyle.fontWeight
}
if (comStyle.fontStyle != "normal")
{
stl = stl + '; font-style: ' + comStyle.fontStyle
}
if (comStyle.fontSize != "19px")
{
stl = stl + '; font-size: ' + comStyle.fontSize
}
if (comStyle.fontVariant != "normal")
{
stl = stl + '; font-variant: ' + comStyle.fontVariant
}
if (comStyle.verticalAlign != "baseline")
{
stl = stl + '; vertical-align: ' + comStyle.verticalAlign
}
if (! comStyle.fontFamily.match( "Arial")) 
{
stl = stl + '; font-family: ' + comStyle.fontFamily
}
if (comStyle.color != "rgb(0, 0, 0)") //#000;
{
stl = stl + '; color: ' + comStyle.color
}
if (comStyle.textDecoration != "none")
{
stl = stl + '; text-decoration: ' + comStyle.textDecoration
}
if (comStyle.fontVariant != "normal")
{
stl = stl + '; font-variant: ' + comStyle.fontVariant
}
if ( (comStyle.lineHeight != "22px") && (comStyle.lineHeight != "normal") )
{
stl = stl + '; line-height: ' + comStyle.lineHeight
}
/*
if (comStyle.textIndent != "0px")
{
stl = stl + '; text-indent: ' + comStyle.textIndent
}
*/
}
}

els[i].setAttribute("style", stl);

}


els[i].removeAttribute('width');
els[i].removeAttribute('height');
els[i].removeAttribute('src');
els[i].removeAttribute('id');
els[i].removeAttribute('class');
els[i].removeAttribute('onclick');
els[i].removeAttribute('type');

els[i].removeAttribute('name');
els[i].removeAttribute('href');
els[i].removeAttribute('convert');

els[i].removeAttribute('topic');
els[i].removeAttribute('num');

//for hr
els[i].removeAttribute('size');
els[i].removeAttribute('color');
els[i].removeAttribute('newline');

}
}

el.removeAttribute('onload');
el.removeAttribute('background');
//el.removeAttribute('class');
el.removeAttribute('id');

el.setAttribute("style", "display: block; font-family: Arial");

}

function getAfter(retText)
{
retText = retText.replace(/<link rel="stylesheet" ([^>]+?)>/g, '');
retText = retText.replace(/<verb.+?<\/verb>/g, '');
retText = retText.replace(/<p:orthvar ([^>]+?)>/g, '<p:orthvar $1><span style="color: #999;">/ </span>');
retText = retText.replace(/<p:geo ([^>]+?)>/g, '<p:geo $1>(');
retText = retText.replace(/<p:registerlab ([^>]+?)>/g, '<p:registerlab $1>(');
retText = retText.replace(/<\/p:geo>/g, ')</p:geo>');
retText = retText.replace(/<\/p:registerlab>/g, ')</p:registerlab>');

retText = retText.replace(/<p:proncodes ([^>]+?)>/g, '<p:proncodes $1> <span style="color: #999;">／</span>');
retText = retText.replace(/<\/p:proncodes>/g, '<span style="color: #999;">／</span> </p:proncodes>');

//retText = retText.replace(/<div id="placer".+?<\/myplace6><\/div>/, '');
retText = retText.replace(/<placer .+?<\/myplace6><\/placer>/, '');

retText = retText.replace(/<img ([^>]+?)>/g, '');

retText = retText.replace(/<sup /g, '____sup ');
retText = retText.replace(/<sub /g, '____sub ');
retText = retText.replace(/<\/sup>/g, '____/sup>');
retText = retText.replace(/<\/sub>/g, '____/sub>');

retText = retText.replace(/<[^<>\/ ]+ /g, '<span ');
retText = retText.replace(/<[^<>\/ ]+>/g, '<span>');
retText = retText.replace(/<[^<>\/ ]+>/g, '<span>');

retText = retText.replace(/<\/[^>]+>/g, '</span>');

retText = retText.replace(/____sup /g, '<sup ');
retText = retText.replace(/____sub /g, '<sub ');
retText = retText.replace(/____\/sup>/g, '</sup>');
retText = retText.replace(/____\/sub>/g, '</sub>');

retText = retText.replace(/&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;");


retText = retText.replace(/<span style="display: none;">([^<>]*)<\/span>/g, '');
retText = retText.replace(/<span style="display: none([^<>"]*)">([^<>]*)<\/span>/g, '');
retText = retText.replace(/<span style="display: none">([^<>]*)<\/span>/g, '');
retText = retText.replace(/<span style="display: none">([^<>]*)<\/span>/g, '');

retText = retText.replace(/<span style="display: inline([^<>"]*)"><\/span>/g, '');

retText = retText.replace(/<span style="([^<>"]+)">([^<>]+)<\/span><span style="$1">([^<>]*)<\/span><\/span>/g, "<span style=\"$1\">$2</span>");
retText = retText.replace(/<span style="([^<>"]+)">([^<>]+)<\/span><span style="$1">([^<>]*)<\/span><\/span>/g, "<span style=\"$1\">$2</span>");
retText = retText.replace(/<span style="([^<>"]+)">([^<>]+)<\/span><span style="$1">([^<>]*)<\/span><\/span>/g, "<span style=\"$1\">$2</span>");
retText = retText.replace(/<span style="([^<>"]+)">([^<>]+)<\/span><span style="$1">([^<>]*)<\/span><\/span>/g, "<span style=\"$1\">$2</span>");

//retText = retText.replace(/<span style="([^<>"]+)">([^<>]+)<\/span>([^<>]*)<span style="$1">/g, "<span style=\"$1\">$2$3");

retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HiraKakuProN-W3; line-height: 21px\">$1$2");

retText = retText.replace(/<span style="display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb\(102, 102, 102\); line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb\(102, 102, 102\); line-height: 21px">/g, "<span style=\"display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb(102, 102, 102); line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb\(102, 102, 102\); line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb\(102, 102, 102\); line-height: 21px">/g, "<span style=\"display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb(102, 102, 102); line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb\(102, 102, 102\); line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb\(102, 102, 102\); line-height: 21px">/g, "<span style=\"display: inline; margin-right: 4px; font-size: 16px; font-family: HiraKakuProN-W3; color: rgb(102, 102, 102); line-height: 21px\">$1$2");

retText = retText.replace(/<span style="display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 20px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 20px">/g, "<span style=\"display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb(0, 0, 102); line-height: 20px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 20px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 20px">/g, "<span style=\"display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb(0, 0, 102); line-height: 20px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 20px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 20px">/g, "<span style=\"display: inline; font-style: italic; font-family: Helvetica-Oblique, sans-serif; color: rgb(0, 0, 102); line-height: 20px\">$1$2");

retText = retText.replace(/<span style="display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 25px; text-indent: -48px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 25px; text-indent: -48px">/g, "<span style=\"display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb(0, 0, 102); line-height: 25px; text-indent: -48px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 25px; text-indent: -48px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 25px; text-indent: -48px">/g, "<span style=\"display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb(0, 0, 102); line-height: 25px; text-indent: -48px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 25px; text-indent: -48px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb\(0, 0, 102\); line-height: 25px; text-indent: -48px">/g, "<span style=\"display: inline; font-style: italic; font-size: 24px; font-family: Helvetica-Oblique, sans-serif; color: rgb(0, 0, 102); line-height: 25px; text-indent: -48px\">$1$2");

retText = retText.replace(/<span style="display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px">/g, "<span style=\"display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px">/g, "<span style=\"display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px">/g, "<span style=\"display: inline; font-size: 22px; font-family: HiraKakuProN-W3; line-height: 24px\">$1$2");

retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px">/g, "<span style=\"display: inline; font-size: 18px; font-family: HelveticaNeue-Italic, sans-serif; line-height: 21px\">$1$2");

retText = retText.replace(/<span style="display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px">/g, "<span style=\"display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px">/g, "<span style=\"display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px\">$1$2");
retText = retText.replace(/<span style="display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px">([^<>]+)<\/span>([^<>]*)<span style="display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px">/g, "<span style=\"display: inline; font-size: 20px; font-family: HelveticaNeue-Light, HiraKakuProN-W3; line-height: 24px\">$1$2");


retText = retText.replace(/<span class="textSelectable" onclick="tC\(this,1\)">([^<>]+)<\/span>/g, "$1");

retText = retText.replace(/<span ([^>]+?)>_____________<\/span>/g, '<hr />');

retText = retText.replace(/<span ([^<>]+)>([^<>]+)<\/span><span $1>([^<>]+)<\/span>/g, "<span $1>$2$3</span>");
retText = retText.replace(/<span ([^<>]+)>([^<>]+)<\/span><span $1>([^<>]+)<\/span>/g, "<span $1>$2$3</span>");
retText = retText.replace(/<span ([^<>]+)>([^<>]+)<\/span><span $1>([^<>]+)<\/span>/g, "<span $1>$2$3</span>");

retText = retText.replace(/ class="body"/g, '');
retText = retText.replace(/ class="body2"/g, '');

return retText;
}
function flashSel(el)
{
var elo = document.getElementById('selected');
elo.style.backgroundColor = "transparent";
setTimeout('flashSel2()', 100);
}
function flashSel2(el)
{
var elo = document.getElementById('selected');
elo.style.backgroundColor = "pink";
setTimeout('flashSel3()', 500);
}
function flashSel3(el)
{
var elo = document.getElementById('selected');
elo.style.backgroundColor = "transparent";
setTimeout('flashSel4()', 100);
}
function flashSel4(el)
{
var elo = document.getElementById('selected');
if (darkmode == false)
	elo.style.backgroundColor = "#CCDDED";
else
	elo.style.backgroundColor = "#4B494B";
}
function clearSel()
{
var sel = window.getSelection();
sel.removeAllRanges();
}
function expand()
{
if (EN4flashDef == true)
{
return;
}
if (watchtap)
{
return;
}

//document.getElementById('body').style = '';
//document.getElementById('body').removeAttribute('style');

var got = false;
var elo = document.getElementById('selected');

if (! elo)
{
return;
}

elo.style.backgroundColor = "transparent";
elo.id = 'unselected';

var el = elo.parentElement;

if (! el)
{
return;
}

if ((el.tagName.match ('TD')) || (elo.tagName.match ('TD')) )
{
	if (elo.tagName.match ('TD'))
	{
		//el = elo;
		elo.id = 'selected';
		setTimeout('flashSel()', 500);
	}
	else
	{
		el.id = 'selected';
	}
}
else
{
if ((elo.hasAttribute('class')) && (elo.className.match(/^textSelectable$/)))
{
	
}
else
{
	el = elo;
	setTimeout('flashSel()', 500);
}
el.id = 'selected';
}
/*
var sel = window.getSelection();
var range = document.createRange();
range.selectNodeContents(el);
sel.removeAllRanges();
sel.addRange(range);
*/
if (darkmode == false)
	el.style.backgroundColor = "#CCDDED";
else
	el.style.backgroundColor = "#4B494B";

if (el.tagName.match ('TD') )
{
	var y = Math.floor((elo.offsetTop + el.parentElement.parentElement.parentElement.offsetTop) * zoom) - window.pageYOffset ; //+ parseInt(lH)
	var lH = getStyle(el, 'line-height');
	var tlbox = Math.floor((elo.offsetLeft + el.offsetLeft + el.parentElement.parentElement.parentElement.offsetLeft) * zoom) - window.pageXOffset;
	
	window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(elo.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&0';
}
else if (elo.tagName.match ('TD') )
{
	var y = elo.parentElement.parentElement.offsetTop - window.pageYOffset ; //+ parseInt(lH)
	var lH = getStyle(elo, 'line-height');
	var tlbox = elo.offsetLeft + elo.parentElement.parentElement.offsetLeft - window.pageXOffset;
	
	window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(elo.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&0';
}
else
{
var lH = getStyle(el, 'line-height');
var y = Math.floor(el.offsetTop * zoom) - window.pageYOffset ; //+ parseInt(lH)

var tlbox = Math.floor(el.offsetLeft * zoom) - window.pageXOffset;
//var trboy = el.offsetRight - window.pageXOffset;
window.location.href = 'actionmenu://dud?' + tlbox + '&' + y + '&' + Math.floor(el.offsetWidth * zoom) + '&' + Math.floor(lH * zoom) +'&0';
}
}
/* end UniDict 4 functions */
function doDyslexic()
{
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", "dyslexic.css")
document.body.appendChild(fileref);
}
function pinchInSm()
{
if (zoom > 0.6)
{
	zoom = zoom - 0.01; /* * 0.99; */
	document.getElementById('body').style.zoom = zoom; // + " !important"
		
	//document.getElementById('body').style.webkitTextSizeAdjust = eval(zoom * 100) + "%";
	//document.getElementById('body').style.textSizeAdjust = eval(zoom * 100) + "% !important";	
	 //.toString
	 
	if (! document.getElementById('style'))
	{
		var myStyle = document.createElement('style');
		myStyle.setAttribute('id', 'style');
		document.head.appendChild(myStyle);
	}
	
	var myStyle2 = document.getElementById('style');
	if (zoom > 1.0)
		myStyle2.innerHTML = '* {font-size:' + eval(1.09 + ((zoom - 1) / 4)) + 'em !important;} p\\\:HYPH {font-size:' + eval(1.1 - ((1 - zoom) / 4) + 0.4) + 'em !important;}';
	else if (zoom < 1.0)
		myStyle2.innerHTML = '* {font-size:' + eval(1.09 - ((1 - zoom) / 3)) + 'em !important;} p\\\:HYPH {font-size:' + eval(1.1 - ((1 - zoom) / 3) + 0.2) + 'em !important;}';
}
}
function pinchOutSm()
{
if (zoom < 1.6)
{
	zoom = zoom + 0.01;
	document.getElementById('body').style.zoom = zoom;

	//document.getElementById('body').style.webkitTextSizeAdjust = eval(zoom * 100) + "%";
	//document.getElementById('body').style.textSizeAdjust = eval(zoom * 100) + "% !important";
	
	if (! document.getElementById('style'))
	{
		var myStyle = document.createElement('style');
		myStyle.setAttribute('id', 'style');
		document.head.appendChild(myStyle);
	}
	
	var myStyle2 = document.getElementById('style');
	if (zoom > 1.0)
		myStyle2.innerHTML = '* {font-size:' + eval(1.09 + ((zoom - 1) / 4)) + 'em !important;} p\\\:HYPH {font-size:' + eval(1.1 - ((1 - zoom) / 4) + 0.4) + 'em !important;}';
	else if (zoom < 1.0)
		myStyle2.innerHTML = '* {font-size:' + eval(1.09 - ((1 - zoom) / 3)) + 'em !important;} p\\\:HYPH {font-size:' + eval(1.1 - ((1 - zoom) / 3) + 0.2) + 'em !important;}';

}
}
function setClass(el, newClass)
{

if (! el)
	return;

var oldClass = "";

if (el.className)
{
	oldClass = el.className;
}

if (! oldClass.match(/^$/))
{

	if (newClass.match(/^hide$/))
	{
		oldClass = oldClass.replace(/display/g, '');
	}
	if (newClass.match(/^display$/))
	{
		oldClass = oldClass.replace(/hide/g, '');
	}
	if (newClass.match(/^show$/))
	{
		oldClass = oldClass.replace(/show/g, '');
	}
	
	oldClass = oldClass.replace(/^ /g, '');
	oldClass = oldClass.replace(/ $/g, '');
	if (! oldClass.match(/^$/))
		newClass = oldClass + ' ' + newClass;
}

try
{
el.setAttribute("class", newClass);
}
catch( e ){
	}
}


function removeShow(el)
{

try
{
if (! el)
	return;

if (! el.hasAttribute('class'))
	return;

if (! el.className.match('show'))
	return;
var oldClass = "";

if (el.className)
{
	oldClass = el.className;
}

if (! oldClass.match(/^$/))
{

	oldClass = oldClass.replace(/show/g, '');
	
	oldClass = oldClass.replace(/^ /g, '');
	oldClass = oldClass.replace(/ $/g, '');
}


el.setAttribute("class", oldClass);
}
catch( e ){
	}
}

function playSound()
{
	//body2();
	//pinchIn();
	doSounds();
	//setTimeout('doSounds()', 900);
}
