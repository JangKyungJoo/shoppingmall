	var subtitle_id = {'className':'subtitle','gapTop':5 };
	var baskethidden="";
	function hanashopfree(){
}
 function check() {
    if (document.form1.id.value.length==0) {
       document.form1.id.focus();
       alert("회원 ID를 입력하세요.");return;
    }
    if (document.form1.passwd.value.length==0) {
       document.form1.passwd.focus();
       alert("회원 비밀번호를 입력하세요.");return;
    }
    submitsend();
 }
 function submitsend() {
    if(typeof document.form1.ssl!="undefined" && document.form1.ssl.checked==true){
       document.form1.target = "loginiframe";
       document.form1.enctype = "multipart/form-data";
       //document.form1.action=decode_c00a40f376_data;
       document.form1.submit();
    }else 
       document.form1.submit();
 }
    function newsend() {
       document.form1.id.value="";
       document.form1.passwd.value="";
       //document.form1.target = "loginiframe";
       document.form1.action="/shop/member.html";
       document.form1.submit();
   }
 
  function CheckKey()
{
 key=event.keyCode;
 if (key==13)
 {
   check();
 }
}

var viewssl="";
function clickssl(){
   if(!viewssl.closed && viewssl) viewssl.focus();
   else{
       viewssl = window.open("about:blank","viewssl","height=304,width=458,scrollbars=no")
       viewssl.document.write('<title>보안접속이란?</title>');
       viewssl.document.write('<style>\n');
       viewssl.document.write('body { background-color: #FFFFFF; font-family: "굴림"; font-size: x-small; } \n');
       viewssl.document.write('P {margin-top:2px;margin-bottom:2px;}\n');
       viewssl.document.write('</style>\n');
       viewssl.document.write('<body topmargin=0 leftmargin=0 marginleft=0 marginwidth=0>\n');
       viewssl.document.write('<a href="JavaScript:self.close()"><img src="/images/common/ssllogin_aboutimg.gif" align=absmiddle border=0></a>');
       viewssl.moveTo(100,100);
   }
}
 function sns_login_log(us_type) {
    var action_url = '';
    switch(us_type) {
        case 'facebook':
        case 'naver':
        case 'kakao':
        case 'twitter':
            action_url = '/list/API/login_' + us_type + '.html';
            break;
    }
    if (action_url != '') {
        document.form1.id.value = '';
        document.form1.passwd.value = '';
        document.form1.msecure_key.value = '';
        document.form1.target = '_self';
        document.form1.action = action_url;
        document.form1.submit();
    }
 }
 function pvd_join_pop() {
    alert('접근할 수 없습니다.\n관리자에게 문의 하시기 바랍니다');
}
function popup_personal() {
    window.open("/shop/personal.html","personal","width=607,height=500,scrollbars=yes");
}
function sendmail() {
   window.open("/html/email.html","email","height=100,width=100");
}
function estimate() {
}
function check_log() {
    if (document.search.id.value.length==0) {
       document.search.id.focus();
       alert("회원 ID를 입력하세요.");return;
    }
    if (document.search.passwd.value.length==0) {
       document.search.passwd.focus();
       alert("회원 비밀번호를 입력하세요.");return;
    }
    document.formlogin.id.value=document.search.id.value;
    document.formlogin.passwd.value=document.search.passwd.value;
    if(typeof document.search.save_id !="undefined" && document.search.save_id.checked == true) {
        document.formlogin.save_id.value="on";
    }
    if(typeof document.search.ssl!="undefined" && document.search.ssl.checked==true){
        document.formlogin.ssl.value=document.search.ssl.value;
    }
    formsubmitsend();
 }
 function formsubmitsend() {
    if(typeof document.search.ssl!="undefined" && document.search.ssl.checked==true){
       document.formlogin.target = "loginiframe";
       document.formlogin.action=decode_c00a40f376_data;
       document.formlogin.enctype = "multipart/form-data";
       document.formlogin.submit();
    }else
       document.formlogin.submit();
 }
    function formnewsend() {
       document.formlogin.id.value="";
       document.formlogin.passwd.value="";
       //document.formlogin.target = "loginiframe";
       document.formlogin.action="/shop/member.html";
       document.formlogin.submit();
   }

function CheckKey_log()
{
 key=event.keyCode;
 if (key==13)
 {
  check_log()
 }
}

var viewssllog="";
function clickssllog(){
   if(!viewssllog.closed && viewssllog) viewssllog.focus();
   else{
       viewssllog = window.open("about:blank","viewssllog","height=304,width=458,scrollbars=no")
       viewssllog.document.write('<title>보안접속이란?</title>');
       viewssllog.document.write('<style>\n');
       viewssllog.document.write('body { background-color: #FFFFFF; font-family: "굴림"; font-size: x-small; } \n');
       viewssllog.document.write('P {margin-top:2px;margin-bottom:2px;}\n');
       viewssllog.document.write('</style>\n');
       viewssllog.document.write('<body topmargin=0 leftmargin=0 marginleft=0 marginwidth=0>\n');
       viewssllog.document.write('<a href="JavaScript:self.close()"><img src="/images/common/ssllogin_aboutimg.gif" align=absmiddle border=0></a>');
       viewssllog.moveTo(100,100);
   }
}

function CheckKey_search()
{
 key=event.keyCode;
 if (key==13)
 {
  document.search.submit();
 }
}
function left_userexit(){
   alert('로그인후 이용가능합니다');
   location.href="/shop/member.html";
 }

//출석체크 팝업 081210 jenna
 function left_usernotepop_open() {
   alert('로그인후 이용가능합니다');
   location.href="/shop/member.html?type=reserve&open_type=usernote";
 }

 function topnotice(temp,temp2) {
    window.open("/html/notice.html?date="+temp+"&db="+temp2,"","width=450,height=450,scrollbars=yes");
 }
 function logout() {
    location.href="/top10.html?type=logout";
 }
 function top_sendmail() {
   window.open("/html/email.html","email","height=100,width=100");
 }
 function top_check_log() {
    if (typeof document.top_form_log.id != "undefined" && document.top_form_log.id.value.length==0) {
       document.top_form_log.id.focus();
       //alert("회원 ID를 입력하세요.");return;
       alert("회원 ID를 입력하세요.");return;
    }
    if (typeof document.top_form_log.passwd != "undefined" && document.top_form_log.passwd.value.length==0) {
       document.top_form_log.passwd.focus();
       //alert("회원 비밀번호를 입력하세요.");return;
       alert("회원 비밀번호를 입력하세요.");return;
    }
    top_submitsend();
 }
 function top_submitsend() {
    if(typeof document.top_form_log.ssl!="undefined" && document.top_form_log.ssl.checked==true){
       document.top_form_log.target = "loginiframe";
       document.top_form_log.action=decode_c00a40f376_data;
       document.top_form_log.enctype = "multipart/form-data";
       document.top_form_log.submit();
    }else
       document.top_form_log.submit();
 }
    function top_newsend() {
       document.top_form_log.id.value="";
       document.top_form_log.passwd.value="";
       //document.top_form_log.target = "loginiframe";
       document.top_form_log.action="/shop/member.html";
       document.top_form_log.submit();
   }
 function top_CheckKey_log(){
    key=event.keyCode;
    if (key==13){ top_check_log() }
 }

var viewssltop="";
function clickssltop(){
   if(!viewssltop.closed && viewssltop) viewssltop.focus();
   else{
       viewssltop = window.open("about:blank","viewssltop","height=304,width=458,scrollbars=no")
       viewssltop.document.write('<title>보안접속이란?</title>');
       viewssltop.document.write('<style>\n');
       viewssltop.document.write('body { background-color: #FFFFFF; font-family: "굴림"; font-size: x-small; } \n');
       viewssltop.document.write('P {margin-top:2px;margin-bottom:2px;}\n');
       viewssltop.document.write('</style>\n');
       viewssltop.document.write('<body topmargin=0 leftmargin=0 marginleft=0 marginwidth=0>\n');
       viewssltop.document.write('<a href="JavaScript:self.close()"><img src="/images/common/ssllogin_aboutimg.gif" align=absmiddle border=0></a>');
       viewssltop.moveTo(100,100);
   }
}

 function topCheckKey_search(){
   key=event.keyCode;
   //if (key==13){ document.topsearch.submit();}
 }
 function top_userexit(){
   alert('로그인을 먼저 하세요.');
   location.href="/shop/member.html";
 }
 function top_sendmail() {
   window.open("/html/email.html","email","height=100,width=100");
 }
 //---(s) 쪽지보내기 ---//
 //쪽지보내기 팝업100708 baljuhee
 function top_usernote_open() {
   alert('로그인을 먼저 하세요.');
   location.href="/shop/member.html?type=reserve&open_type=usernote";
 }
 function top_usernotepop_open() {
   alert('로그인을 먼저 하세요.');
   location.href="/shop/member.html?type=reserve&open_type=usernote";
 }
 //---(e) 쪽지보내기 ---//
 function getCookiefss(name) {
    lims = document.cookie;
    var index = lims.indexOf(name + "=");
    if (index == -1) return null;
    index = lims.indexOf("=", index) + 1; // first character
    var endstr = lims.indexOf(";", index);
    if (endstr == -1) endstr = lims.length; // last character
    return unescape(lims.substring(index, endstr));
}

var refurl = getCookiefss('refurl');
if (refurl == 'inpk_opstyle') {
    // 오픈스타일 헤더 추가
    document.write('<script type="text/javascript" src="http://www.interpark.com/malls/openstyle/OpenStyleEntrTop.js"><' + '/script>');
    document.body.style.backgroundPosition = '0px 41px';

    // 투프레임 타임일 때 상단 프레임 높이 조정
    (function() {
        if (!top || !top.document.body.rows) {
            return;
        }

        var rows = top.document.body.rows;
        var pos = rows.search(',');
        var top_h = parseInt(rows.substr(0, pos));
        if (top_h < 1) {
            return;
        }

        top.document.body.rows = (top_h + 41) + rows.substr(pos);
    })();
}
refurl = null;

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MSLOG_loadJavascript(url) {
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    var loaded = false;
    script.onreadystatechange= function () {
        if (this.readyState == 'loaded' || this.readyState == 'complete')
        { if (loaded) { return; } loaded = true; }
    }
    script.src = url;
    head.appendChild(script);
}
var MSLOG_charset = "euc-kr";
var MSLOG_server  = document.location.protocol + "//log14.makeshop.co.kr";
var MSLOG_code = "personalp77";
var MSLOG_var = "V1ZSdmVrOXVkSHBQYWtWNlQybEtkbU50VW14amJEbHlXbGhzTTJJelNtdEphblI2VDJwTmQwOXBTak5rTTJOMVdqSTVkbG95ZUd4TWJVNTJURzEwZVdaSWQzbE5SRVV5VFVSamVVNTZTWGhOZWtWcFR6Tk5OazVxYjJsamJWWnRaRmhLYzBscWRFOVBNMDAyVGxSdmFXUkhPV3RaV0d0cFR6Tk5OazFFYjJsSmFuUTU=";
if (document.charset) MSLOG_charset = document.charset.toLowerCase();
if (document.characterSet) MSLOG_charset = document.characterSet.toLowerCase();  //firefox;
MSLOG_loadJavascript(MSLOG_server + "/js/mslog.js?r=" + Math.random());

// escrow 팝업 띄우는 함수
            function bottom_sendmail() {
               window.open("/html/email.html","email","height=100,width=100");
            }
            function bottom_privacy() {
               window.open("/html/privacy.html","privacy","height=570,width=590,scrollbars=yes");
            }
            function view_join_terms() {
                window.open("/html/join_terms.html","join_terms","height=570,width=590,scrollbars=yes");
            }
            function malltb_mini_open() {
                window.open('/mini/forward.html', 'mini', 'width = 920, height = 660, scrollbars = no');
            }
            function malltalk_click(click_cond, link_path) {
				if ( click_cond == 'LINK' ) {
					location.href=link_path;
				} else {
                	window.open('http://malltalk.kr/mobile/shop_install/malltalk.html?shop_id=personalp77', 'mini', 'width = 800, height = 700, scrollbars = no');
				}
            }
            function pop_escrow(bank, height, width) {
              var url;
              var add = '';
              if (bank == 'woori') {
                 url = 'http://esc.wooribank.com/esc/cmmn/in/web2c001_06p.jsp?condition=www.personal-pack.com';
                 add = ', scrollbars = no';
              } else if (bank == 'kookmin') {
                 url = 'https://okbfex.kbstar.com/quics?e2eType=10&page=C021590&cc=b034066%3Ab035526&mHValue=';
                 add = ', scrollbars = no';
              } else if (bank == 'hana') {
                 url = 'http://www.hanaescrow.com/hnbecc/serviceJoinSrchManagement/escser003l.jsp?shopBsnNo=1061133483&afflGrpId=GMKSHOPNBS&afflShopNo=';
                 add = ', scrollbars = yes';
              } else if (bank == 'es') {
                url = '';
                add = ', scrollbars = yes';
              }
              window.open(url, 'escrow', 'height=' + height + ',width=' + width + add);
            }
            function go_giveaway(type) {
                window.open('/html/giveaway_event.html?type=' + type,'giveaway','width = 810, height = 800, scrollbars = no');
            }

            // 공급자 가입 팝업 위치 변경
function pvd_join_pop() {
    alert('접근할 수 없습니다.\n관리자에게 문의 하시기 바랍니다');
}

var selectedobj;
var dragapproved = false;
var zindex = 100;
function drag_move() {
	if(dragapproved) {
		selectedobj.style.left = base_x + event.clientX - previous_x;
		selectedobj.style.top  = base_y + event.clientY - previous_y;
		return false;
	}
}

function start_drag(drag_id) {
	selectedobj = document.getElementById(drag_id);
	selectedobj.style.zIndex = zindex++;
        if(document.body && document.body.setCapture) {
           // body 화면 고정(IE전용) 
           document.body.setCapture();
        }
	base_x = parseInt(selectedobj.style.left);
	base_y = parseInt(selectedobj.style.top);
	previous_x = event.clientX;
	previous_y = event.clientY;
	dragapproved = true;
}

function drag_release() {
	dragapproved=false;
        if (document.body && document.body.releaseCapture) {
          // body화면 고정풀기(IE전용)
          document.body.releaseCapture();
        }
}
document.onmousemove = drag_move;
document.onmouseup = drag_release;

 function get_querystring(key, default_) {
        if (default_==null) default_=""; 
        key = key.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
        var regex = new RegExp("[\?&]"+key+"=([^&#]*)");
        var qs = regex.exec(window.location.href);
        if(qs == null) return default_;
        else return qs[1];
    }
    
    var click_pid = get_querystring('clickPid','null');
    if(click_pid != 'null') {
        click_pid = click_pid.replace('mall_pid_','');
        nhn_anchor(click_pid);
    }

    function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
    rv = parseFloat(RegExp.$1);
    }
    return rv;
} 

function showcherrypickerWindow(height,mode,db){
    cherrypicker_width = document.body.clientWidth;
    var isIe = /*@cc_on!@*/false;
    if (isIe) {
        cherrypicker_width = parseInt(cherrypicker_width + 18);
    }
    setCookie('cherrypicker_view','on', 0);

    
    document.getElementById('cherrypicker_layer').style.display = "block";
	document.getElementById('cherrypicker_layer').innerHTML = Createflash_return(cherrypicker_width,'','/flashskin/CherryPicker.swf?initial_xml=/shopimages/personalp77/cherrypicker_initial.xml%3Fv=1469692526&product_xml=/shopimages/personalp77/%3Fv=1469692526', 'cherrypicker_flash', '');
}

function load_cherrypicker(){
    cherrypicker_check = true;

    if (!document.getElementById('cherrypicker_layer')) {
        return;
    }


    cherrypicker_width = document.body.clientWidth;
    var isIe = /*@cc_on!@*/false;
    if (isIe) {
        cherrypicker_width = parseInt(cherrypicker_width + 18);
    }

    
    document.getElementById('cherrypicker_layer').innerHTML = "";
    document.getElementById('cherrypicker_layer').innerHTML = Createflash_return(cherrypicker_width,'','/flashskin/CherryPicker.swf?initial_xml=/shopimages/personalp77/cherrypicker_initial.xml%3Fv=1469692526&product_xml=/shopimages/personalp77/%3Fv=1469692526', 'cherrypicker_flash', '');

}

function ShotSMSuser() {
    window.open('/shop/smsshot.html', 'smsshot', 'height=610,width=300, scrollbars=no');
} 