<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package yota
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer footer">
        <div class="vcard" style="display: none">
            <div class="fn org">YS System 2009-2022</div>
            <div class="adr">
                <div class="street-address">Хлебозаводский пр-д д.7 стр.9, офис 205</div>
                <div>
                    <span class="locality">Москва</span>,
                    <span class="postal-code">115230</span>
                </div>
                <div class="country-name">Russia</div>
            </div>
            <div>Телефон: <span class="tel">+7 (495) 740 23 03</span></div>
            <div>E-mail: <span class="email">info@ys-system.ru</span></div>
            <img class="photo" src="<?=get_template_directory_uri()?>/img/logo.png" alt="YS System" class="disable-lazy-load">
          
        </div>
		<div class="wr">
			<div class="footer__content ">
				<div class="footer__block">
					<nav id="site-navigation" class="main-navigation-bottom-left" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
						<?php
						wp_nav_menu( array(
							'theme_location' => 'bottom-menu-left',
							'menu_id'        => 'bottom-menu-left',
                            'walker'            => new CustomWalkerNavMenu(),
						) );
						?>
					</nav><!-- #site-navigation -->
				</div>

				<div class="footer__block">
					<nav id="site-navigation" class="main-navigation-bottom-left" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
						<?php
						wp_nav_menu( array(
							'theme_location' => 'bottom-menu-right',
							'menu_id'        => 'bottom-menu-right',
                            'walker'            => new CustomWalkerNavMenu(),
						) );
						?>
					</nav><!-- #site-navigation -->
				</div>

				<div class="footer__block footer__block--contacts">
					<?php dynamic_sidebar( 'true_foot' ); ?>

						<style>
							.itf_link{
								display:block;
								border: 1px solid #fff;
								width: 180px;
								border-radius: 5px;
								margin-top: 20px;
							}
							.itf_text{
								margin-left: 20px;

							}
							.itf_logo{
								display: block;
								height:40px;
								width:160px;
								background-position: center center;
								background-repeat: no-repeat;
								background-size: contain;
							}
							.itf_link:hover, .itf_link:hover .itf_text{
								text-decoration: none!important;
								color: #fff;
							}
							.blink-wrap {
								position: relative;
								overflow: hidden;
								padding-left: 10px;
							}
							.blink-wrap:after {
								content: "";
								position: absolute;
								top: 0;
								left: -1em;
								width: 130%;
								height: 100%;
								background: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0))) no-repeat -1em 0%;
								background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) no-repeat -1em 0%;
								background: -o-linear-gradient(right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) no-repeat -1em 0%;
								background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) no-repeat -1em 0%;
								background-size: 1em 100%;
								-webkit-transform: skewX(-30deg);
								-ms-transform: skewX(-30deg);
								transform: skewX(-30deg); }
							.blink-wrap.blink_on:after {
								-webkit-transition: 2s linear;
								-o-transition: 2s linear;
								transition: 2s linear;
								background-position: 130% 0%;
							}
						</style>

                    <div class="li_counter">
                    <style>
							.li_counter{
								display: block;
								width: 31px;
                                margin-top: 15px;


							}
                    </style>

                    </div>




				</div>



			</div>
		</div>

<center>
		<a href="https://ys-system.ru/delivery/"><img src="/wp-content/uploads/2021/10/logo3h.png" style="border: 0px; max-width:260px; width:100%; display: inline; vertical-align: none; margin: 5px;" alt="pay"/></a>
</center>
<center>
<a href="https://yandex.ru/maps/-/CCUUJTE~~D"><img src="/wp-content/uploads/2021/03/ya-stars.jpg" style="border: 0px; width: 126px; display: inline; vertical-align: none; margin: 5px;" alt="ya stars"/></a>
<a href="https://g.page/internet_booster?share"><img src="/wp-content/uploads/2021/03/g-stars.jpg" style="border: 0px; width: 126px; display: inline; vertical-align: none; margin: 5px;" alt="g stars" /></a>
</center>


    </footer><!-- #colophon -->
</div><!-- #page -->


<?php wp_footer(); ?>


<script>
window.onload = function(){
	jQuery(function($){
		$('.menu-topmenu-container .menu-item-46:eq(1) a:eq(0)').data('href',$('.menu-topmenu-container .menu-item-46:eq(1) a:eq(0)').attr('href'));
		$('.menu-topmenu-container .menu-item-48:eq(1) a:eq(0)').data('href',$('.menu-topmenu-container .menu-item-48:eq(1) a:eq(0)').attr('href'));
		$('.menu-topmenu-container .menu-item-323:eq(1) a:eq(0)').data('href',$('.menu-topmenu-container .menu-item-323:eq(1) a:eq(0)').attr('href'));
		$('.menu-topmenu-container .menu-item-326:eq(1) a:eq(0)').data('href',$('.menu-topmenu-container .menu-item-326:eq(1) a:eq(0)').attr('href'));

		$(window).resize(function(){
			uploadMenu();
		})
	})

	function uploadMenu(){
		var $ = jQuery;
		if($(window).width()>800){
			$('.menu-topmenu-container .menu-item-46:eq(1) a:eq(0)').attr('href',$('.menu-topmenu-container .menu-item-46:eq(1) a:eq(0)').data('href'));
			$('.menu-topmenu-container .menu-item-48:eq(1) a:eq(0)').attr('href',$('.menu-topmenu-container .menu-item-48:eq(1) a:eq(0)').data('href'));
			$('.menu-topmenu-container .menu-item-323:eq(1) a:eq(0)').attr('href',$('.menu-topmenu-container .menu-item-323:eq(1) a:eq(0)').data('href'));
			$('.menu-topmenu-container .menu-item-326:eq(1) a:eq(0)').attr('href',$('.menu-topmenu-container .menu-item-326:eq(1) a:eq(0)').data('href'));
		}else{
			$('.menu-topmenu-container .menu-item-46:eq(1) a:eq(0)').removeAttr('href');
			$('.menu-topmenu-container .menu-item-48:eq(1) a:eq(0)').removeAttr('href');
			$('.menu-topmenu-container .menu-item-323:eq(1) a:eq(0)').removeAttr('href');
			$('.menu-topmenu-container .menu-item-326:eq(1) a:eq(0)').removeAttr('href');
		}
	}

	/*$('.menu-topmenu-container .menu-item-46:eq(1) a:eq(0)').removeAttr('href');
	$('.menu-topmenu-container .menu-item-48:eq(1) a:eq(0)').removeAttr('href');
	$('.menu-topmenu-container .menu-item-323:eq(1) a:eq(0)').removeAttr('href');
	$('.menu-topmenu-container .menu-item-326:eq(1) a:eq(0)').removeAttr('href');	*/
}
</script>

<script>
	window.onload = function(){
		jQuery(document).ready(function($){
			setInterval(function(){
				$('.blink-wrap').addClass('blink_on');
				setTimeout(function(){$('.blink-wrap').removeClass('blink_on')},3000);
			},6000)
			/* Слайдер ячейки */
				var imgSlider = function(n, timeout, interval){
					setTimeout (function(){
					var imgs = $('body').find('.comb.comb_'+n+' img');
					var i = 1;
						var img1 = $();
						var img2 = $();
					setInterval (function(){
						//img2.fadeOut(2000);
						if(i < imgs.length){
							var nextId = i + 1;
								img1 = $('body').find('.comb_'+n+' [data-slide="'+i+'"]');
								img2 = $('body').find('.comb_'+n+' [data-slide="'+nextId+'"]');
								//img1.fadeOut(2000);
								//img2.fadeIn(2000);

							i++;
						}else
						{
							i = 1;
							img1 = $('body').find('.comb_'+n+' [data-slide="'+i+'"]');
							//img1.fadeIn(2000);
							//img2.fadeOut(2000);

						}
					}, interval);
				}, timeout);
				}
				imgSlider(1, 1000, 6000);
				imgSlider(2, 2000, 6000);
				imgSlider(3, 3000, 6000);
				/* */
							// console.log(window)
			if(window.location.pathname == '/'){

				if(window.innerWidth > 800){
					$('.header_prod_link > a').attr('href', '#products');
				}
				else{
					$('.header_prod_link > a').on('click', function(e){
						e.preventDefault();
						$(this).attr('href', 'javascript:void(0);')
					});
				}
			}
			else{
				if(window.innerWidth > 800){
					$('.header_prod_link > a').attr('href', '/#products');
				}
				else{
					$('.header_prod_link > a').on('click', function(e){
						e.preventDefault();
						$(this).attr('href', 'javascript:void(0);')
					});
				}
			}

						$('#home-text__more').on('show.bs.collapse', function () {
								$('#home-text__more-btn').html('Свернуть')
						});
						$('#home-text__more').on('hide.bs.collapse', function () {
								$('#home-text__more-btn').html('Читать далее')
						});
		});
	}

</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(52100652, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/52100652" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->


	<!-- Facebook Pixel Code -->
<script>
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(function(){
		!function(f,b,e,v,n,t,s)
	  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	  n.queue=[];t=b.createElement(e);t.async=!0;
	  t.src=v;s=b.getElementsByTagName(e)[0];
	  s.parentNode.insertBefore(t,s)}(window, document,'script',
	  'https://connect.facebook.net/en_US/fbevents.js');
	  fbq('init', '2157219941042605');
	  fbq('track', 'PageView');
	}, 4000);
});

</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2157219941042605&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- Google Tag Manager -->
<script>
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(function(){
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-5PVTPXV');
	},4000);
});

</script>
<!-- End Google Tag Manager -->

<!-- Facebook Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window, document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '580727166433605');

fbq('track', 'PageView');

</script>

<noscript><img height="1" width="1" style="display:none"

src="https://www.facebook.com/tr?id=580727166433605&ev=PageView&noscript=1"

/></noscript>

<!-- End Facebook Pixel Code -->
<style>
.custom_el_menu ul{
	top:10px!important;
    left: -38px!important;
	position:relative!important;

}

/* .custom_el_menu:hover ul{
	display:block!important;
}
	
.custom_el_menu:hover ul{
	display:block!important;
}


.custom_el_sub_menu:hover{
    color:#fff!important;
}
	
	
.custom_el_sub_menu{
   color:#fff!important;
}
 */
</style>
 <script>

 
 window.onload = function() {
	 

	 
	 jQuery('.header__basket').click(function(){
    
	jQuery('#modf').modal('show');
});
	 
  jQuery('#bphonesubmit').prop('disabled', true);
     jQuery('#bphone').keyup(function() {
        if(jQuery(this).val() != '') {
           jQuery('#bphonesubmit').prop('disabled', false);
        }
     });
 }
 </script>
 <!-- Modal -->
<div class="modal fade" id="modf" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Для перехода в корзину введите свой номер телефона!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input type="tel" class="form-control" name="bphone" id="bphone">
      </div>
      <div class="modal-footer">
        
        <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="btn btn-primary" id="bphonesubmit" disabled>Далее</a>
      </div>
    </div>
  </div>
</div>
</body>

</html>
