/***
  main, shopbrand, shopsearch 에 공통으로 링크되는 js .. 는 여기 넣었음 좋겠다.. - shiry - prototype 필요
  **/
var __option_preview_obj = {}; // 옵션 미리보기용 전역변수
function mk_prd_option_preview(uid, e) {
//    var container = 'MK_opt_preview_' + uid;
    var container = 'MK_opt_preview';
    var params = {};
    
    params.branduid = uid;
    params.type     = 'option';

    new Ajax.Request('/shop/product_data.ajax.html', {
        method : 'post',
        asynchronous : false,
        parameters : params,
        onSuccess : function(req, json) {
            response = req.responseText;
            document.getElementById(container).innerHTML = response;
        }, onFailure : function () { alert('옵션정보 가져오기 실패'); }
    });

    var _evt = e.currentTarget ? e.currentTarget : window.event.srcElement;
    var offset = ObjectPosition(_evt);
    __option_preview_obj = _evt;

    document.getElementById(container).style.visibility = 'visible';
    document.getElementById(container).style.left =  offset[0] + 'px';
    document.getElementById(container).style.top  =  offset[1] + 'px';

    // window resize 이벤트 발생시 옵션 미리보기 위치를 다시 잡음
    window.onresize = function() {
        var _offset = ObjectPosition(__option_preview_obj);
        document.getElementById(container).style.left = _offset[0] + 'px';
        document.getElementById(container).style.top  = _offset[1] + 'px';
    };
}
function ObjectPosition(obj) {
    var curleft = 0;
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return [curleft,curtop];
}