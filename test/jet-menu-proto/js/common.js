jQuery(function ($) {

    $(document).ready(function() {


        $('.rs').each(function(i,elem) {
            $(elem).find(".rs-h").attr("data",i);
            $(elem).find(".rs-b").attr("data",i);
        });

        $(".rs-h").on("click", function(){


            $(".rs-b[data='"+$(this).attr("data")+"']").slideToggle();
            $(this).toggleClass("active");
        });


        $(".rs-hd").on("click", function(){
            //$(".rs-b").slideUp();

            var adata = parseInt($(this).attr("data"));
            var off1 = 0;
            var off2 = 0;

            if (($(document).width()<992)&&($(document).width()>768)) {
                if ((adata>=0) && (adata<=1)) {off1 = 0; off2 = 1;}
                if ((adata>=2) && (adata<=3)) {off1 = 2; off2 = 3;}
                if ((adata>=4) && (adata<=5)) {off1 = 4; off2 = 5;}
                if ((adata>=6) && (adata<=7)) {off1 = 6; off2 = 7;}
                if ((adata>=8) && (adata<=9)) {off1 = 8; off2 = 9;}
                if ((adata>=10) && (adata<=11)) {off1 = 10; off2 = 11;}
            } else
            if ($(document).width()>=992)
            {
                if ((adata>=0) && (adata<=2)) {off1 = 0; off2 = 2;}
                if ((adata>=3) && (adata<=5)) {off1 = 3; off2 = 5;}
                if ((adata>=6) && (adata<=8)) {off1 = 6; off2 = 8;}
                if ((adata>=9) && (adata<=11)) {off1 = 9; off2 = 11;}
            } else {
                off1 = adata; off2 = adata;
            }

            for (i=off1; i<=off2; i++) {
                $(".rs-b[data=" + i + "]").slideToggle();
            }
            $(this).toggleClass("active");

            //$(".rs-b[data='"+$(this).attr("data")+"']").slideToggle();
            //$(this).toggleClass("active");
        });



        $('.rsq').each(function(i,elem) {
            $(elem).find(".rs-hq").attr("data",i);
            $(elem).find(".rs-bq").attr("data",i);
        });
        $(".rs-hq").on("click", function(){
            $(".rs-bq[data='"+$(this).attr("data")+"']").slideToggle();
            $(this).toggleClass("active");
        });

        //Цели для Яндекс.Метрики и Google Analytics
        //jQuery(".count_element").on("click", (function() {
        //	ga("send", "event", "goal", "goal");
        //	yaCounterXXXXXXXX.reachGoal("goal");
        //	return true;
        //}));

        //Я.цели
        $("div.send").on("click", (function() {
            ga("send", "event", "goal", "goal");
            yaCounter8045884.reachGoal("ORDER_CART");
            return true;
        }));

        //SVG Fallback
        if(!Modernizr.svg) {
            $("img[src*='svg']").attr("src", function() {
                return $(this).attr("src").replace(".svg", ".png");
            });
        };


        //Chrome Smooth Scroll
        try {
            $.browserSelector();
            if($("html").hasClass("chrome")) {
                $.smoothScroll();
            }
        } catch(err) {

        };

        $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    });

    $(window).on('load', function() {

        $(".loader_inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");

    });


    $(".refresh-capthca").click(function(){
        $(".capth_images img").attr('src', '/api/get-captcha?time=' + (new Date()).getTime())
    });

    $(".refresh-capthca2").click(function(){
        $(".capth_images img").attr('src', '/api/get-captcha?time=' + (new Date()).getTime())
    });


    function SendEmailForm(email, subject, text, code, csrf, bot){

        var r;

        jQuery.ajax({

            async: false,
            type: "POST",
            url: "/api/send-messages-form",

            data: { email: email, subject: subject, text: text, code:code, _csrf:csrf, bot:bot}
        }).done(function( msg ) {

            console.log(msg);
            r = msg;
        });

        return r;
    }



    $(".sendEmail").click(function(e){


        $(".email_error").html('');
        $("#user_email").css('border-color', '#f9fbfd');
        $(".subject_error").html('');
        $("#subject").css('border-color', '#f9fbfd');
        $(".text_error").html('');
        $("#text").css('border-color', '#f9fbfd');
        $(".code_error").html('');
        $(".inputes_capth").css('border-color', '#f9fbfd');


        var email = $("#user_email").val();
        var subject = $("#subject").val();
        var text = $("#text").val();
        var code = $(".inputes_capth").val();
        var csrf = $("#csrf").val();
        var bot = $("#email").val();
        var usl1 = "";
        var usl2 = "";
        var $error = $(".error");
        var $errorCaptch = $(".error-captch-mes");
        var $errorText = $(".error-text-mes");
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var r = SendEmailForm(email, subject, text, code, csrf, bot);

        // validate email
        function validateEmail(email) {
            return re.test(String(email).toLowerCase());
        }

        // validate email and send form after success validation
        function validate() {
            if (validateEmail(email)) {
                $error.fadeOut();
            } else {
                $error.fadeIn();
                $error.text(email + " E-mail не корректен");
            }
        }
        
        validate();


        if ($("select[name=form_services1]").val()>0) {
            usl1 = $("select[name=form_services1] option:selected").text();
        }

        if ($("select[name=form_services2]").val()>0) {
            usl2 = ", " + $("select[name=form_services2] option:selected").text();
        }
        if (usl1 != "") {
            text = "<p><b>Услуга : " + usl1 + usl2 + "</b></p>" + text;
        }

        if(r.status){
            $('.add-to-cart-popup.mail').css('display', 'block');
            $('.add-to-cart-popup-overlay').css('display', 'block');
            // $("#form_post")[0].reset();
            $(".capth_images img").attr('src', '/api/get-captcha?time=' + (new Date()).getTime());
            $(".request_form").html("<p style='color: white; text-align: center; font-size: 22px;'>Сообщение успешно отправлено!</p>");
        }else{
            if(typeof r.errors.email == 'object'){
                $(".email_error").html(r.errors.email[0]);
                //$("#user_email").css('border-color', 'red');
                $("#user_email").addClass("input_error");
            }

            if(typeof r.errors.subject == 'object'){
                $(".subject_error").html(r.errors.subject[0]);
                //$("#subject").css('border-color', 'red');
                $("#subject").addClass("input_error");
            }

            if(typeof r.errors.text == 'object'){
                $(".text_error").html(r.errors.text[0]);
                //$("#text").css('border-color', 'red');
                $("#text").addClass("input_error");
            }

            if(typeof r.errors.code == 'object'){
                $(".code_error").html(r.errors.code[0]);
                //$(".inputes_capth").css('border-color', 'red');
                $(".inputes_capth").addClass("input_error");
            }

            if (!r.errors.code) {
                $errorCaptch.text('');
            } else {
                $errorCaptch.text(r.errors.code[0]);
            }

            if (!r.errors.text) {
                $errorText.text('');
            } else {
                $errorText.text(r.errors.text[0]);
            }
        }
        e.preventDefault();
    });

    function continue_pop(){
        $('.add-to-cart-popup').css('display', 'none');
        $('.add-to-cart-popup-overlay').css('display', 'none');
    }


    $('.cont-btn').click(function(){
        continue_pop();
    });


    $('.add-to-cart-popup-close').click(function(){
        continue_pop();
    });


    $(function(){

        $('#menu').slicknav();
        //$('.social-likes').socialLikes();
    });

    /*FAQ*/
    $(document).ready(function(){

        $('.answer').css('display', 'none');

        $('.question').on('click', function(){

            $('.answer').css('display', 'none');

            $(this).next('.answer').css('display', 'block');
            var height = $(this).next('.answer').css('height');
            $(this).next('.answer').css('height', '0px');

            $(this).next('.answer').animate({
                height: height
            }, 500, function() {
                // Animation complete.
            });

        });

    });

    $('i.icon').on('mouseover', function(){
        $(event.target).siblings('.dropdown').fadeIn(100);
    });

    $('i.icon').on('mouseout', function(){
        $(event.target).siblings('.dropdown').fadeOut(100);
    });


});
