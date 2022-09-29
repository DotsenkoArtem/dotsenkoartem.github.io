
jQuery(document).ready(function(){
    refresh(1);

    jQuery('.cont-btn').click(function(){
    	continue_pop();
    });

    jQuery('.cart-btn-go').click(function(){
    	to_cart_pop();
    });


    jQuery('.add-to-cart-popup-close').click(function(){
    	continue_pop();
    });


});

//var api_url = 'https://jet-s.ru';
var id_s_m = ".white span.id_s";
var input_radio = ".white input[name=options]";
var min_count_m = ".white input[id*='min-options-']";
var max_count_m = ".white input[id*='max-options-value']";
var step_m = ".white input[id*='step-options-value']";
var count_m = "#how";
var link_m = '#link3';

function AddToCart(){

	var count = jQuery(count_m).val();
	
	var link = jQuery(link_m).val();
	var file = jQuery("#file").val();
	var id = jQuery(id_s_m).html();


	jQuery(".count_error").html('');
	jQuery("#how").css('border-color', '#e9e2db');
	jQuery(".note_error").html('');
	jQuery("#link3").css('border-color', '#e9e2db');
	jQuery(".file_error").html('');
	jQuery("#file").css('border-color', '#e9e2db');

	min_count = jQuery(min_count_m).val();
	
	max_count = jQuery(max_count_m).val();
	step = jQuery(step_m).val();


    if (Number(min_count) > Number(count)) {
        alert('Минимальное значение заказа было изменено автоматически');
        jQuery(count_m).val(min_count);
        refresh(3);
		$(".ui-slider-handle").html("<b>" + min_count + "</b>" + " шт"); 
        nsl(min_count, max_count, step);
    }

    if (Number(max_count) < Number(count)) {
        alert('Максимальное значение заказа было изменено автоматически');
        jQuery(count_m).val(max_count);
        refresh(3);
		$(".ui-slider-handle").html("<b>" + max_count + "</b>" + " шт"); 
        nsl(max_count, max_count, step);
    }

    var r = ajax(id, count, link, file);

    var name_product = jQuery('#id-options-value-'+id).html();
    console.log(r);
    if(r.status){

      console.log(1);
      console.log(name_product);
      jQuery('#name_product_popup').html(name_product);

      jQuery('.add-to-cart-popup').css('display', 'block');
      jQuery('.add-to-cart-popup-overlay').css('display', 'block');

      jQuery(".small-cart-count").html('услуг ('+r.products_count+'), '+r.price_all+'р');
	  $(".product_counter").html(r.products_count);
	  $(".shop_basket_bottom .price").html(r.price_all+' руб.');
	  var div = $("#s_window");
	  $("#s_window span").html('"' + $.trim(name_product) + '"');
	  $(".overlay").show();
	  div.fadeIn(200, function() {}); 	
  }else{
      console.log(2);
      if(typeof r.errors.count == 'object'){
	  alert(r.errors.count[0]);
       jQuery(".count_error").html(r.errors.count[0]);
       jQuery("#how").css('border-color', 'red');
   }

   if(typeof r.errors.note == 'object'){
       jQuery(".note_error").html(r.errors.note[0]);
       jQuery("#link3").css('border-color', 'red');
   }

   if(typeof r.errors.file == 'object'){
       jQuery(".file_error").html(r.errors.file[0]);
       jQuery("#file").css('border-color', 'red');
   }
}

}


function continue_pop(){
	jQuery('.add-to-cart-popup').css('display', 'none');
	jQuery('.add-to-cart-popup-overlay').css('display', 'none');
}

function to_cart_pop(){
	location.href = '/cart';
}



function ajax(id, count, link, file){
    console.log(id, count, link, file);
    var r;

    jQuery.ajax({

      async: false,
      type: "POST",
      url: "/cart/api/add",

      data: { id: id, count: count, link: link, file:file}
    }).done(function( msg ) {
        console.log(msg);
        r = eval(msg);
    });

  return r;
}

function nsl(how, max, step) {
    max = max||100000;
    step = step||100;
    jQuery(document).ready(function() {
      if (how!=""){
        var ho = 100;
        if (how != '' && how > 0) {
            ho = how
        }
        if (parseInt(how) > max) {
            ho = max
        }

    }
})
}

function refresh(n) {

    jQuery(input_radio).prop( "checked", true);

    var count = jQuery(count_m).val();

    count = Number(count);
    count = Math.round(count);

    min_count = jQuery(min_count_m).val();
    max_count = jQuery(max_count_m).val();


    if(n==3 && min_count>count){
      count = min_count;
    }


    pm = jQuery('input[name=options]:checked').val();

    var min = 0;
    var data_discount = eval(jQuery(count_m).data('discount'));
    var data_discount_db = jQuery(count_m).data('discountdb');

    dis = 0;
    for(i = 0; i < data_discount.length; i++){
        if(count < data_discount[i][0]){
          break;
      }else{
          dis = data_discount[i][1];
      }
  }
  dis = dis+parseFloat(data_discount_db);

  var ce = (count * pm) - (((count * pm) / 100) * dis);


  ce = Math.round(ce);

  jQuery('#opu_price').html(ce);
    var max_c=Number(jQuery(max_count_m).val());
    var step=Number(jQuery(step_m).val());
    
    if (n == 1) {
        nsl(count, max_c, step);
    }
};

function getNewProduct(id){

	var min = jQuery("#min-options-value-"+id).val();
	var max = jQuery("#max-options-value-"+id).val();
	var step = jQuery("#step-options-value-"+id).val();
	var price = jQuery("#options-value-"+id).val();

	nsl(min, max, step);
}


