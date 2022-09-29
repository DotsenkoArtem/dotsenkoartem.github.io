jQuery(document).ready(function(){

        "use strict";
        var openHelp=0

        jQuery(document).on('click','.radio>li',function(e){
            if(!jQuery(this).hasClass('active')){
                jQuery(this).parent().find('li').removeClass('active');
                jQuery(this).addClass('active');
                jQuery(this).find('input[type="radio"]').attr('checked','checked');

                var id_s = jQuery(this).find('.id_s').html();

				getNewProduct(id_s);
            }

        });


        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        }
        function error(){
            var email = jQuery("#email").val();
            if(email != 0){
                if(isValidEmailAddress(email)){
                    jQuery("#email").removeClass('error');
                } else{
                    jQuery("#email").addClass('error');
                }
            } else {
                jQuery("#email").addClass('error');
            }
        }

        jQuery("#email").keyup(function(){
            error();
        });

    });