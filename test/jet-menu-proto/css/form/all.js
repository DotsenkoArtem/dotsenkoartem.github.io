
jQuery(document).ready(function(){
    cost();
});


function cost() {

    for (i = 0; i < frm.options.length; i++) {
     
        if (frm.options[i].checked == true) {
            pm = frm.options[i].value;
            pm = Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[type='radio']").val());
            idmin = 'min-' + frm.options[i].id;
            var minimalka=Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[id*='min-options-value']").val());
            var max_c=Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[id*='max-options-value']").val());
            var step=Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[id*='step-options-value']").val());
            document.getElementById('how').value = minimalka;
            document.getElementById('howin').innerHTML = ''
        }
    }
    var cenas = 0;
    for (i = 0; i < frm.option.length; i++) {
        if (frm.option[i].checked == true) {
            id = 'id-' + frm.option[i].id;
            id0 = frm.option[i].id;
            document.getElementById('how').value = minimalka;
            document.getElementById('howin').innerHTML = '';
            var text = document.getElementById(id).innerHTML;
            var cena = document.getElementById(id0).value;
            cena = Number(cena);
            cena = Math.round(cena);
            cenas = cenas + cena
        }
    }
    var min = 0;


    var data_discount = eval([[500,3],[3000,5],[5000,10],[10000,15],]);
    console.log(data_discount);

    if(cenas < data_discount[0][0]){
      dis = 0;
    }else{
      for(i = 0; i < data_discount.length; i++){
       
        if(cenas < data_discount[i][0]){
          
          break;
        }else{
          dis = data_discount[i][1];
        }
      } 
    }

    dis = dis+min;
    min = dis;
    var ce = (cenas * pm) - (((cenas * pm) / 100) * min);
    ce = Math.round(ce);
    document.getElementById('opu_price').innerHTML = ce;
    nsl(minimalka, max_c, step)
};

function nsl(how, max, step) {
    max = max||100000;
    step = step||100;
    jQuery(document).ready(function() {
		if (how!=""){
        var ho = 100;
        if (how != '' && how > 0) {
            ho = how
        }
        var updateUiSlider;
        jQuery(".slider-diapazon.sd-1").ionRangeSlider({
            min: 0,
            max: 500000,
            from: 0,
            to: ho,
            type: "double",
            step: step,
            postfix: "",
            hasGrid: false,
            hideText: false,
            prettify: false,
            onChange: function(obj) {
                document.getElementById('how').value = obj.toNumber;
                cost2()
            }
        });
        jQuery(".slider-diapazon.sd-1").ionRangeSlider("update", {
            min: 0,
            max: max,
            from: 0,
            to: ho,
            step: step
        });
		}
    })
}
nsl();

function cost2(n) {
    var how = document.getElementById('how').value;
    how = Number(how);
    how = Math.round(how);
    how = how;
    var d = frm.options.length;
    for (d = 0; d < frm.options.length; d++) {
        if (frm.options[d].checked == true) {
            pm = frm.options[d].value;
            pm = Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[type='radio']").val());
        }
    }
    for (i = 0; i < frm.option.length; i++) {
        if (frm.option[i].checked == true) {
            id01 = frm.option[i].id;
            document.getElementById(id01).checked = ''
        }
    }
    var min = 0;


    var data_discount = eval([[500,3],[3000,5],[5000,10],[10000,15],]);
    

    if(how < data_discount[0][0]){
      dis = 0;
    }else{
      for(i = 0; i < data_discount.length; i++){
        
        if(how < data_discount[i][0]){
          
          break;
        }else{
          dis = data_discount[i][1];
        }
      } 
    }

    dis = dis+min;
    min = dis;
    var ce = (how * pm) - (((how * pm) / 100) * min);
    ce = Math.round(ce);
    document.getElementById('opu_price').innerHTML = ce;
    document.getElementById('howin').innerHTML = ' = ' + how;
    
    var max_c=Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[id*='max-options-value']").val());
    var step=Number(jQuery(".wrapper-block-radio .block-radio .radio li.active input[id*='step-options-value']").val());
    if (n == 1) {
        nsl(how, max_c, step);
    }
};