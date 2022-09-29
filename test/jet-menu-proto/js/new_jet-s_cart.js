
//var api_url = 'https://jet-s.ru';

function del(id){

	var r = '';

	jQuery.ajax({
      
      async: false,
      type: "POST",
      url: "/cart/api/delete",

      data: { id: id}
    }).done(function( msg ) {
      //console.log(msg);
      r = eval(msg);
    });

	var data = jQuery('#item-'+id);

	data.remove();

  var data = jQuery('#item-m-'+id);

  data.remove();


    if(r.products_count <= 0){
	/*
      jQuery(".cart_table").css('display', 'none');
      jQuery(".kupow").css('display', 'none');
      jQuery(".display_style").css('display', 'none');
      jQuery(".summary").css('display', 'none');
      jQuery(".empty-cart-msg").css('display', 'block');
	  */
	  $(".basket_form").html('<div><div class="top_title_section"><h2><img src="/images/icon_basket.png" alt="">Корзина</h2></div><div class="table empty-cart-msg"><div class="empty-cart-msg">Ваша корзина пуста</div></div>');
								
    }

    view_request(r, id);

}


function edit(id){

	var count = jQuery('#cart_count_'+id).val(); 
	var note = jQuery('#cart_obj_'+id).val();


	//console.log([count, note]);

	var file = 'test';
  var r = send_api_edit(id, count, note, file);

  view_request(r, 'item-'+id);

}


function edit_m(id){

  var count = jQuery('#cart_m_count_'+id).val(); 
  var note = jQuery('#cart_m_obj_'+id).val();


  //console.log([count, note]);

  var file = 'test';
  
  var r = send_api_edit(id, count, note, file);

  view_request(r, 'item-m-'+id);
}

function send_api_edit(id, count, note, file){
    var r = '';
    //, file: file
    jQuery.ajax({
      
      async: false,
      type: "POST",
      url: "/cart/api/edit",

      data: { id: id, count: count, note: note}
    }).done(function( msg ) {
      r = eval(msg);
    });

    return r;

}

function view_request(msg, id){

		var data = jQuery('#'+id);

        data.find(".count_error").html('');
        data.find(".count_error").css('display', 'none');
        data.find(".note_error").html('');
        data.find(".note_error").css('display', 'none');

        jQuery(".balance_error").css("display", "none");

        if(msg.status){

        }else{

          if(typeof msg.errors.count == 'object'){
            data.find(".count_error").css('display', 'block');
            data.find(".count_error").html(msg.errors.count[0]);
          }

          if(typeof msg.errors.note == 'object'){
            data.find(".note_error").css('display', 'block');
            data.find(".note_error").html(msg.errors.note[0]);
          }

        }

        var balance = jQuery("#balance").html();

        if(parseFloat(balance) < parseFloat(msg.price)){
          jQuery(".balance_error").css("display", "table");
        }

        //jQuery(".small-cart-count").html('услуг ('+msg.products_count+'), '+msg.price_all+'р');
          jQuery("#total_price").html(msg.price_all);
		  $(".shop_basket_top .product_counter").html(msg.products_count);
		  $(".shop_basket_bottom .price").html(msg.price_all + " руб.");
		  
          data.find(".price").html(msg.price);
}
