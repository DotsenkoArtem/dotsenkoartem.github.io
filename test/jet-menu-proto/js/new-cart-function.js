var minutes = 1000;
var file_input = ".fomes_in_file input";
var how_input = "#how";
var price_final = "#opu_price";
var obj_textarea = ".fomes_in_arct textarea";
var option_name = ".wrapper-block-radio .block-radio .radio li.active label";
var min_count = ".wrapper-block-radio .block-radio .radio li.active input[id*='min-options-']";
var max_c = ".wrapper-block-radio .block-radio .radio li.active input[id*='max-options-value']";
var step_r = ".wrapper-block-radio .block-radio .radio li.active input[id*='step-options-value']";
var id_s = ".wrapper-block-radio .block-radio .radio li.active span.id_s";
var max_count = ".irs-max";
var time_c = new Date(new Date().getTime() + 30 * 60 * minutes);

var discount_r = [];

jQuery(document).ready(function() {
	console.log('-_-');
	console.log(get_cart_names());
    refresh_cart();
    refresh_cart_small();
});

//document.getElementById('done_form').addEventListener('submit', function(evt) {
 jQuery('#done_form').bind('submit', function(){
    //function sub_r(){
    console.log('tyt sk');
    //return false;
    if(!check()){
         console.log('tyt sk2');
        return false;
    }
    //return false;
    var http = new XMLHttpRequest(),
        f = this;
    //evt.preventDefault();
    var link = get_cart_object_link();
    if (link != "") {
        link = link.replace('?', ':que:');
        link = link.replace('&', ':amp:');
    }

    var ets = f.textname.value;
    if (ets != "") {
        ets = ets.replace('?', ':que:');
        ets = ets.replace('&', ':amp:');
    }
    var ince = Number(jQuery("#total_price").html());
    var ince_r = get_cart_total_price_sum(); 
    var howsum = get_cart_howsum(); 
    var ob = get_cart_names();
    var file = get_cart_files();
    var id = get_cart_total_id();
    //console.log(howsum);



    var obj = cart_array();
    var f_r = 0;
    for (var key in obj) {
        var r = obj[key].split("|exp|");
        console.log(r[7], r[2], r[0], r[1]);
        var data_r = ajax(r[7], r[2], r[0], r[1]);

    data_r = eval("(" + data_r + ")");
            
    console.log(data_r[0].f);

            if(data_r[0].f == 0){
                alert('Значение услуги "' + r[0] + '" неверно, услуга удалена из заказа! Пожалуйста, повторите попытку.');
                jQuery(how_input).val(jQuery(min_count).val());
                del_cart_pos(key);
                f_r = 1;
            }
    }

    console.log(f_r);
    
    if(f_r == 1){
        location.reload();
        return false;
    }


    if (jQuery(".payment-method #option2").prop("checked")) {
        location.replace('/forms/index.php?action=Robox&time='+time_cart+'&email=' + defender2(f.email.value) + '&summ=' + ince + '&ets=' + defender2(ets));
    } else if (jQuery(".payment-method #option1").prop("checked")) {
        location.replace('/forms/index.php?action=Wm&time='+time_cart+'&email=' + defender2(f.email.value) + '&summ=' + ince + '&ets=' + defender2(ets));
    } else if (jQuery(".payment-method #option3").prop("checked")) {
        location.replace('/forms/index.php?action=Interkassa&time='+time_cart+'&email=' + defender2(f.email.value) + '&summ=' + ince + '&ets=' + defender2(ets));
    } else if (jQuery(".payment-method #option4").prop("checked")) {
        location.replace('/forms/index.php?action=Sprypay&time='+time_cart+'&email=' + defender2(f.email.value) + '&summ=' + ince + '&ets=' + defender2(ets));
    }
return false;
   
		
	
});

function check(){

    jQuery(file_input).val();

        var obj = cart_array();
        var f = 0;

    if(document.getElementById("done_form") != null){
        if(done_form.textname.value.length > 1000){
            text_ets = done_form.textname.value.substr(0, 1000);
            done_form.textname.value = text_ets;
            alert('Поле описания слишком длинное, оно было урезано. Теперь можно добавить заказ в корзину!');
            return false;
            alert('Поле описания слишком длинное, оно было урезано. Теперь можно добавить заказ в корзину!');
            f = 0;
        }
    }
console.log(1);
    for (var key in obj) {

       
        var cart_obj = jQuery('#cart_obj_' + key).val();
        if(cart_obj != undefined){
            if(cart_obj.length > 1000){
                //cart_obj.substr(cart_obj.length - 500);
                cart_obj = cart_obj.substr(0, 1000);
                jQuery('#cart_obj_' + key).val(cart_obj);
                alert('Поле описания слишком длинное, оно было урезано. Теперь можно добавить заказ в корзину!');
                refresh_obj(key);
                f = 1;
            }    
        }


console.log(2, f);

        var r = obj[key].split("|exp|");
        console.log(r[7], r[2], r[0], r[1]);
        var data_r = ajax(r[7], r[2], r[0], r[1]);

    data_r = eval("(" + data_r + ")");
            
    console.log(data_r[0].f);

            if(data_r[0].f == 0){
                alert('Значение услуги "' + r[0] + '" неверно, услуга удалена из заказа! Пожалуйста, повторите попытку.');
                jQuery(how_input).val(jQuery(min_count).val());
                del_cart_pos(key);
                f = 1;
            }
console.log(3, f);
    }

    if(f == 1){
console.log(4, f);
        //location.reload();
        return false;
    }
    return true;
}


function ajax(id, ince_r, ob, howsum){
    //ince_r = get_cart_total_price_sum();
    //ob = get_cart_names();
    //id = get_cart_total_id();
    //howsum = get_cart_howsum(); 
    var r;
    jQuery.ajax({
        async: false,
      type: "POST",
      url: "/forms/index.php?action=ApiCheck",
      data: { ince_r: ince_r, ob: ob, id: id, howsum: howsum}
    }).done(function( msg ) {
      console.log(msg);
      r = msg;
    });
    return r;
}

function ok() {
    if(document.cookie.length >= 4000){
       alert('Достигнуто максимальное количество заказов, оформите следующие заказы повторно!');
       return false;
    }


	document.cookie = "cookiework=1; path=/; expires=" + time_c.toUTCString();
	if (getCookie("cookiework")=="1"){
    if (Number(jQuery(min_count).val()) > Number(jQuery(how_input).val())) {
        alert('Минимальное значение заказа было изменено автоматически');
        jQuery(how_input).val(jQuery(min_count).val());
        cost2();
        nsl(jQuery(min_count).val(), jQuery(max_c).val(), jQuery(step_r).val());
    } else {
        if ((jQuery(obj_textarea).val() != "") && (jQuery(obj_textarea).val().length > 3)) {
            var add_file = "no-file";
            if (jQuery("*").is(file_input)) {
                if (jQuery(file_input).val() != "") {

                    add_file = jQuery(file_input).val();

                    if(add_file.length>1000){
                        alert('Поле файла слишком длинное');
                        add_file = add_file.substr(0, 1000);
                        jQuery(file_input).val(add_file);
                        return 0;
                    }

                }else{
                    alert('Заполните поле файла');
                    return 0;
                }
            }
            var txt_txt = jQuery(obj_textarea).val().replace(/[\n\r]/g, ' ');

                if(txt_txt.length>1000){

                        txt_txt = txt_txt.substr(0, 1000);

                        alert('Поле описания слишком длинное, оно было урезано. Теперь можно добавить заказ в корзину!');
                        jQuery(obj_textarea).val(txt_txt);
                        return 0;
                }
			txt_txt = txt_txt.replace(/=/g,"replaceravno");
            var date = time_c;
            var res_title = jQuery(option_name).text();
            res_title = res_title.replace(/\s+/g, " ");
            console.log(jQuery(id_s).html(), parseInt(jQuery(price_final).html()), res_title, jQuery(how_input).val());
            var data_r = ajax(jQuery(id_s).html(), parseInt(jQuery(price_final).html()), res_title, jQuery(how_input).val());
            var data_r = eval("(" + data_r + ")");

                console.log(data_r[0].f);

            if(data_r[0].f == 0){
                alert('Ошибка в форме. Если она повторяется обратитесь к техническую поддержку!');
                jQuery(how_input).val(jQuery(min_count).val());
                cost2();
                nsl(jQuery(min_count).val(), jQuery(max_c).val(), jQuery(step_r).val());
                return 0;
            }

            jQuery(".add-to-cart-popup span").empty();
            jQuery(".add-to-cart-popup span").html(jQuery(option_name).html());
            jQuery(".add-to-cart-popup").fadeIn(300);
            jQuery(".add-to-cart-popup-overlay").fadeIn(300);
            console.log(cart_array());
            document.cookie = "crtpos" + free_id_elem(cart_array()) + "=" + defender(res_title) + "|exp|" + defender(jQuery(how_input).val()) + "|exp|" + parseInt(defender(jQuery(price_final).html())) + "|exp|" + defender(txt_txt) + "|exp|" + defender(add_file) + "|exp|" + defender(jQuery(min_count).val()) + "|exp|" + Number(defender(jQuery(max_count).html())) + "|exp|" + defender(jQuery(id_s).html()) +"; path=/; expires=" + date.toUTCString();
            jQuery(obj_textarea).removeClass("alert");
            refresh_cart_small();
        } else {
            alert("Неверно указан объект накрутки!");
            jQuery(obj_textarea).addClass("alert");
        }
    }
	} else {
		alert('Внимание, Ваш браузер не поддерживает "cookies". Для оформления заказа нужно включить их, либо оформить заказ через службу поддержки! Также вы можете попробовать использовать другой браузер!'); //сообщение о куках
	}
}

function defender(str){
    str.toString();
    console.log(str);
    function convert(str, p1, offset, stri) {
        return str.replace(/[<>=;]/g, '|');
    }

    function convert2(str, p1, offset, stri) {
        return str.replace(/[+]/g, '|exp_plus_exp|');
    }
  
    var s = String(str);
    var preg = /[<>=;]/g;
    s.replace(preg, convert);
    var preg = /[+]/g;
    return s.replace(preg, convert2);
}


function defender2(str){
    str.toString();
    function convert3(str, p1, offset, stri) {
        return str.replace(/[+]/g, '|exp_plus_exp|');
    }
    var s = String(str);
    var preg = /[+]/g;
    return s.replace(preg, convert3);
}

function undefender2(str){
    str.toString();
    function convert3(str, p1, offset, stri) {
        return str.replace(/\|exp_plus_exp\|/g, '+');
    }
    var s = String(str);
    var preg = /\|exp_plus_exp\|/g;
    return s.replace(preg, convert3);
}


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress)
}

function isValidlinkAddress(linkAddress) {
    var pattern = new RegExp(/^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i);
    return pattern.test(linkAddress)
}

function get_cart_object_link() {
    var data = cart_array();
    var result = "";
    for (var key in data) {
        var pre_result = data[key].split("|exp|");
        if (result == "") {
            result = pre_result[3];
        } else {
            result = result + "|exp|" + pre_result[3];
        }
    }
    return result;
}

function get_cart_howsum() {
    var data = cart_array();
    var result = "";
    for (var key in data) {
        var pre_result = data[key].split("|exp|");
        if (result == "") {
            result = pre_result[1];
        } else {
            result = result + "|exp|" + pre_result[1];
        }
    }
    return result;
}

function get_cart_total_price_sum(){
    var data = cart_array();
    var result = "";
    for (var key in data) {
        var pre_result = data[key].split("|exp|");
        if (result == "") {
            result = pre_result[2];
        } else {
            result = result + "|exp|" + pre_result[2];
        }
    }
    return result;
}

function get_cart_total_id(){
    var data = cart_array();
    var result = "";
    for (var key in data) {
        var pre_result = data[key].split("|exp|");
        if (result == "") {
            result = pre_result[7];
        } else {
            result = result + "|exp|" + pre_result[7];
        }
    }
    return result;
}

function get_cart_names() {
		
    var data = cart_array();
    var result = "";
    for (var key in data) {
        var pre_result = data[key].split("|exp|");
        if (result == "") {
            result = pre_result[0];
        } else {
            result = result + "|exp|" + pre_result[0];
        }
    }
    return result;
}

function get_cart_files() {
    var data = cart_array();
    var result = "";
    for (var key in data) {
        var pre_result = data[key].split("|exp|");
        if (result == "") {
            result = pre_result[4];
        } else {
            result = result + "|exp|" + pre_result[4];
        }
    }
    return result;
}

function refresh_cart() {
    jQuery(".cart .div-table .table").empty();
    var cart_elem_arr = cart_array();
    jQuery(".cart .div-table .table").append('<div class="tr tr-title"><div class="td">Название услуги</div><div class="td">Кол-во</div><div class="td">Сумма</div><div class="td">Примечание</div><div class="td">Удалить</div></div>');
    var empty_cart = true;
    var all_price = 0;
    for (var key in cart_elem_arr) {
        var empty_cart = false;
        var res_data = cart_elem_arr[key].split("|exp|");
        var if_file = "";
        if (res_data[4] != "no-file") {
            if_file = "</br><span>Ссылка на базу: " + res_data[4] + "</span>";
        }
        all_price = all_price + Number(res_data[2]);
		
        jQuery(".cart .div-table .table").append('<div class="tr tr-inner "><div class="td td-inner max-60"><p>' + undefender2(res_data[0]) + '</p></div><div class="td td-inner max-50"><input type="number" id="cart_count_' + key + '" value="' + res_data[1] + '" onchange="refresh_count(' + key + ');"/><p class="quantity">шт.</p></div><div class="td td-inner max-70"><p class="price">' + res_data[2] + ' <span>р</span></p></div><div class="td td-inner max-100"><div class="obj"><textarea type="text" id ="cart_obj_' + key + '" class="cart-obj" onchange="refresh_obj(' + key + ');">' + undefender2(res_data[3].replace(/replaceravno/g,"=")) + '</textarea>' + undefender2(if_file) + '</div></div><div class="td td-inner max-10"><a class="cross" href="#del" onclick="del_cart_pos(' + key + ');"></a></div></div>');
    }
    if (empty_cart == true) {
        jQuery(".tr.tr-title").remove();
        jQuery(".total-price").remove();
        jQuery(".cart .div-table .table").append('<div class="empty-cart-msg">Ваша корзина пуста</div>');
    } else {
        jQuery("#done_form").css({
            "display": "block"
        });
        jQuery(".total-price p").empty();
        jQuery(".total-price p").append('Общая стоимость заказа <span id="total_price">' + all_price + '</span> руб');
        jQuery('.cart-obj').each(function(i, elem) {
            jQuery("#" + jQuery(elem).attr("id")).autoResize();
            jQuery("#" + jQuery(elem).attr("id")).change();
        });
    }
}


function ajaxGetDiscount(id){
    var r;
    jQuery.ajax({
        async: false,
      type: "POST",
      url: "/forms/index.php?action=GetSumm",
      data: { id: id}
    }).done(function( msg ) {
      console.log(msg);
      r = msg;
    });
    return r;
}

function refresh_count(data) {
    var regexp = /^\d+$/;
    if (regexp.test(jQuery('#cart_count_' + data).val()) == true) {
        var r_cookie = getCookie("crtpos" + data);
        var r_cookie_pre = r_cookie.split("|exp|");
        if ((jQuery('#cart_count_' + data).val() >= Number(r_cookie_pre[5])) && (jQuery('#cart_count_' + data).val() <= Number(r_cookie_pre[6]))) {
            
            console.log(2);
             console.log(r_cookie_pre[7], discount_r[r_cookie_pre[7]]);
            if(discount_r[r_cookie_pre[7]] === undefined){
                var ddrr = ajaxGetDiscount(r_cookie_pre[7])

                discount_r[r_cookie_pre[7]] = eval(ddrr);
                console.log(r_cookie_pre[7], discount_r[r_cookie_pre[7]]);
            }

            data_discount = discount_r[r_cookie_pre[7]];
            if(jQuery('#cart_count_' + data).val() < data_discount[0][0]){
              dis = 0;
            }else{
              for(i = 0; i < data_discount.length; i++){
                //echo discount[$i][0], '.', '<br>';
                if(jQuery('#cart_count_' + data).val() < data_discount[i][0]){
                  //$discount_t = $discount[$i][1];
                  break;
                }else{
                  dis = data_discount[i][1];
                }
              } 
            }

            var one_item_price = (jQuery('#cart_count_' + data).val() * data_discount[0][2]) - (((jQuery('#cart_count_' + data).val() * data_discount[0][2]) / 100) * dis);
            one_item_price = Math.round(one_item_price);

            console.log(one_item_price);
            //var one_item_price = Math.ceil((Number(r_cookie_pre[2]) / Number(r_cookie_pre[1])) * jQuery('#cart_count_' + data).val());
           
            r_cookie_res = defender(r_cookie_pre[0]) + "|exp|" + defender(jQuery('#cart_count_' + data).val()) + "|exp|" + defender(one_item_price) + "|exp|" + defender(r_cookie_pre[3]);
            document.cookie = "crtpos" + defender(data) + "=" + r_cookie_res + "|exp|" + defender(r_cookie_pre[4]) + "|exp|" + defender(r_cookie_pre[5]) + "|exp|" + defender(r_cookie_pre[6]) +  "|exp|" + defender(r_cookie_pre[7]) +"; path=/; expires=" + time_c.toUTCString()
            
            refresh_cart();
        
        } else {
            if (jQuery('#cart_count_' + data).val() < Number(r_cookie_pre[5])) {
                jQuery('#cart_count_' + data).val(r_cookie_pre[5]);
                alert('Значение услуги "' + r_cookie_pre[0] + '" было изменено автоматически на минимальное');
            } else {
                jQuery('#cart_count_' + data).val(r_cookie_pre[6]);
                alert('Значение услуги "' + r_cookie_pre[0] + '" было изменено автоматически на максимальное');
            }
            refresh_count(data);
        }
    } else {
        var str = jQuery('#cart_count_' + data).val();
        str = str.replace(/[^0-9]/gim, '');
        jQuery('#cart_count_' + data).val(str);
        var r_cookie = getCookie("crtpos" + data);
        var r_cookie_pre = r_cookie.split("|exp|");
        if ((jQuery('#cart_count_' + data).val() > r_cookie_pre[4]) && (jQuery('#cart_count_' + data).val() < r_cookie_pre[5])) {
            console.log(1);
            console.log(r_cookie_pre[7], discount_r[r_cookie_pre[7]]);
            if(discount_r[r_cookie_pre[7]] == 'undefined'){
                console.log(r_cookie_pre[7], discount_r[r_cookie_pre[7]]);
            }

            var one_item_price = Math.ceil((Number(r_cookie_pre[2]) / Number(r_cookie_pre[1])) * jQuery('#cart_count_' + data).val());
            r_cookie_res = r_cookie_pre[0] + "|exp|" + jQuery('#cart_count_' + data).val() + "|exp|" + one_item_price + "|exp|" + r_cookie_pre[3];
            document.cookie = "crtpos" + data + "=" + defender(r_cookie_res) + "|exp|" + defender(r_cookie_pre[4]) + "|exp|" + defender(r_cookie_pre[5]) + "|exp|" + defender(r_cookie_pre[6]) +  "|exp|" + defender(r_cookie_pre[7]) +"; path=/; expires=" + time_c.toUTCString()
            refresh_cart();
        } else {
            if (jQuery('#cart_count_' + data).val() < Number(r_cookie_pre[5])) {
                jQuery('#cart_count_' + data).val(r_cookie_pre[5]);
                alert('Значение услуги "' + r_cookie_pre[0] + '" было изменено автоматически на минимальное');
            } else {
                jQuery('#cart_count_' + data).val(r_cookie_pre[6]);
                alert('Значение услуги "' + r_cookie_pre[0] + '" было изменено автоматически на максимальное');
            }
            refresh_count(data);
        }
    }
}

function refresh_obj(data) {
    var str = jQuery('#cart_obj_' + data).val();
	str = str.replace(/=/g,"replaceravno");
    var r_cookie = getCookie("crtpos" + data);
    var r_cookie_pre = r_cookie.split("|exp|");
    if ((str != "") && (str.length > 3)) {
        r_cookie_res = r_cookie_pre[0] + "|exp|" + r_cookie_pre[1] + "|exp|" + r_cookie_pre[2] + "|exp|" + str;
        document.cookie = "crtpos" + data + "=" + defender(r_cookie_res) + "|exp|" + defender(r_cookie_pre[4]) + "|exp|" + defender(r_cookie_pre[5]) + "|exp|" + defender(r_cookie_pre[6]) + "|exp|" + defender(r_cookie_pre[7]) + "; path=/; expires=" + time_c.toUTCString();
    } else {
        alert("Неверно указан объект накрутки!");
        jQuery('#cart_obj_' + data).val(r_cookie_pre[3]);
    }
}

function refresh_cart_small() {
    if (elem_count(cart_array()) == 0) {
        jQuery(".small-cart-count").empty();
        jQuery(".small-cart-count").html("В корзине пусто");
    } else {
        jQuery(".small-cart-count").empty();
        jQuery(".small-cart-count").html("услуг (" + elem_count(cart_array()) + ") - " + elem_total_price(cart_array()) + "р");
    }
}

function del_cart_pos(data) {
    deleteCookie("crtpos" + data);
    refresh_cart();
    refresh_cart_small();
    return false;
}

function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function cart_array() {
    var res_array = {};
    var s = document.cookie;
    s = s.split(";");
    s.forEach(function(item, i, s) {
        if (item != "") {
            if (item.indexOf('crtpos') + 1) {
                var pre_res = item.split("=");
                var cart_pos_num = parseInt(pre_res[0].replace(/[^\d;]/g, ''));
                res_array[cart_pos_num] = pre_res[1];
            }
        }
    });
    return res_array;
}

function free_id_elem(data) {
    var max = 0;
    for (var key in data) {
        if (parseInt(key) > parseInt(max)) {
            max = key;
            console.log(max, key);
        }
    }
            console.log(max, key);
    return max - 1 + 2;
}

function elem_count(data) {
    var count = 0;
    for (var key in data) {
        count++;
    }
    return count;
}

function elem_total_price(data) {
    var price = 0;
    for (var key in data) {
        var pre_price = data[key].split("|exp|");
        price = price + Number(pre_price[2]);
    }
    return price;
}

function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}

  jQuery(document).ready(function(){
      check();

  });