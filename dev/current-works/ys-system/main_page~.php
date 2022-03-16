<?php /* Template Name: main-page */ ?>
<?php
/**
* The template for displaying all pages
*
* This is the template that displays all pages by default.
* Please note that this is the WordPress construct of pages
* and that other 'pages' on your WordPress site may use a
* different template.
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
* @package yota
*/

get_header();
?>

<div class="main2">
    <div class="container2">
        <section>
        <div class="col-1-2">
            <h1>Нужен стабильный интернет на дачу или в офис?</h1>
            <h2>Подключение за 1 день и без вызова мастера</h2>
            <div class="okrug" ><div class="top100">
				
				</div><span>Купите «Street 2 PRO» и  через 12 минут после включения,
вы получите стабильный интернет с Wi-Fi раздачей
в любом регионе РФ и СНГ</span></div>
            <div class="col-2-3">
            <p>Оставьте заявку на 5-минутную консультацию,
        подберем оборудование, расскажем
        как взять Street на тест-драйв</p>
        </div>
        <div class="col-1-2-2"></div>
        <button class="buttonclass open-sesame-form">
			Получить Street на тест-драйв
		</button>
		<script>
document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.open-sesame-form');
    button.onclick = () => {
    document.querySelector('.b24-widget-button-crmform span').click();
  };
});
</script>
<!-- 		<script>
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b18453994/crm/site_button/loader_3_jmoacj.js');
</script> -->
        </div>
        
        <div class="bonus">
        		<div class="bonus__content">
        			<div class="bonus__text_bold">Весь апрель <br>безлимитный тариф</div>
        			<div class="bonus__text">в подарок и доставка <br>в регионы за наш счет</div>
        		</div>
			</div>
			<a href="#" class="popmake-3731"><div class="video">
			
			</div></a>
		<!--a href="https://youtu.be/Mk4uRU3z0Oc"></a-->
        <div class="col-1-2 two ">
          
        </div>
        
        </section>
        
    </div>
   
</div>
<style>.garant {width:100%; max-width:1200px; left:0; right:0; margin:0 auto; background:white;  box-shadow: 0 0 20px rgba(0,0,0,0.1);height:200px; padding: 10px; border-radius:20px;}
	.col-20 {
    width: 20%;
    float: left;
    text-align: left;
    max-width: 220px;
    height: 169px;
    /* padding: 30px; */
    margin-right: 15px;
    margin-bottom: 30px;
    background-image: url(/Subtract.png);
    /* background-position: left; */
    background-size: cover;
    padding: 30px;
}
</style>
<div class="garant">
	<div class="col-20">Гарантируем прием
     сигнала даже там, где
		не ловит ваш телефон!
	</div> 
	<div class="col-20">Производим
и продаем интернет
усилители с 2009 г.
	</div>
	<div class="col-20">Более 15 500
довольных клиентов
в РФ и СНГ
	</div>
	<div class="col-20">В рассрочку:<br>
от 1390 руб.\месяц 
	</div>
	<div class="col-20">Выполняем доставку
по всем миру!
	</div>
</div>
<main class="index">
	
	<div class="about">
		<div class="wr">
			<div class="about__content wow fadeInUp">
				<h1 class="text-title text-title--blue">
					<?php echo get_field('header_1')?>
				</h1>
				<?php echo get_field('block_1')?>

				<span class="text-title "><?php echo get_field('header_2')?></span>
				<?php echo get_field('block_2')?>

			</div>
		</div>
	</div>
</div>
<div class="sygnal">
	<div class="wr">
		<div class="sygnal__content ">
			<span class="block__title wow fadeInUp"><?php echo get_field('header_3')?></span>
			<span class="block__subtitle"><?php echo get_field('subheader_3')?></span>

			<img src="<?php the_field('kartinka_s_kartoj'); ?>" alt="" class="sygnal__img">
			<img src="<?php the_field('kartinka_s_kartoj_na_mobilnom'); ?>" alt="" class="sygnal__img-mob">
		</div>
	</div>
</div>
<!-- <div class="border-param">

</div> -->
<div class="param">
	<div class="wr">
		<div class="param__content ">
			<div class="title-flag"><?php the_field('parametry_lable'); ?></div>
			<div class="img_wr wow fadeInUp">
				<ul class="list list__left">

					<li class="list__item list__item1">
						<?php echo get_field('params')['param_1']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item2">
						<?php echo get_field('params')['param_2']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item3">
						<?php echo get_field('params')['param_3']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item4">
						<?php echo get_field('params')['param_4']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item5">
						<?php echo get_field('params')['param_5']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>
				</ul>

				<img src="<?=get_template_directory_uri()?>/img/device.png" alt="" class="param__img">

				<ul class="list list__right">

					<li class="list__item  list__item1">
						<?php echo get_field('params')['param_6']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item2">
						<?php echo get_field('params')['param_7']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item3">
						<?php echo get_field('params')['param_8']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item4">
						<?php echo get_field('params')['param_9']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>

					<li class="list__item  list__item5">
						<?php echo get_field('params')['param_10']?>
						<div class="line_wr">
							<div class="round_wr">
								<div class="round"></div>
							</div>
							<div class="line1"></div>
							<div class="line2_wr">
								<div class="line2"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<img src="<?php the_field('kartinka_s_parametrami_na_mobilnom'); ?>" alt="" class="param__img-mob">

			<div class="hidden_bottom"></div>
		</div>
	</div>
</div>
<div id="internet-amplifiers"></div>
<div id="video">
	<div class="wr">
		
		<?php
		global $wp_embed;
		$post_embed = $wp_embed->run_shortcode('[embed]https://www.youtube.com/watch?v=Mub2xxCIsUo[/embed]');
		echo $post_embed;
		?>
	</div>

</div>
<?php get_template_part('template-parts/block', 'products'); ?>
<div class="advantages">
	<div class="wr">
		<div class="advantages__content">
			<h2 class="block__title wow fadeInUp"><?php echo get_field('header_5')?></h2>

			<div class="advantages__list">
				<div class="advantages__item wow fadeInUp ">
					<div class="advantages__img">
						<div class="img_wr">
							<img src="<?=get_template_directory_uri()?>/img/wifi.png" alt="">
						</div>
					</div>
					<div class="advantages__info">
						<?php echo get_field('preim')['preim_1']?>
					</div>
				</div>

				<div class="advantages__item wow fadeInUp">
					<div class="advantages__img">
						<div class="img_wr">
							<img src="<?=get_template_directory_uri()?>/img/speed.svg" alt="">
						</div>
					</div>
					<div class="advantages__info">
						<?php echo get_field('preim')['preim_2']?>
					</div>
				</div>

				<div class="advantages__item wow fadeInUp">
					<div class="advantages__img">
						<div class="img_wr">
							<img src="<?=get_template_directory_uri()?>/img/money.png" alt="">
						</div>
					</div>
					<div class="advantages__info">
						<?php echo get_field('preim')['preim_3']?>
					</div>
				</div>

				<div class="advantages__item wow fadeInUp">
					<div class="advantages__img">
						<div class="img_wr">
							<img src="<?=get_template_directory_uri()?>/img/swiss_knife.svg" alt="">
						</div>
					</div>
					<div class="advantages__info">
						<?php echo get_field('preim')['preim_4']?>
					</div>
				</div>

				<div class="advantages__item wow fadeInUp">
					<div class="advantages__img">
						<div class="img_wr">
							<img src="<?=get_template_directory_uri()?>/img/sim.png" alt="" class="img_sim">
						</div>
					</div>
					<div class="advantages__info">
						<?php echo get_field('preim')['preim_5']?>
					</div>
				</div>

				<div class="advantages__item wow fadeInUp">
					<div class="advantages__img">
						<div class="img_wr">
							<img src="<?=get_template_directory_uri()?>/img/weather.svg" alt="">
						</div>
					</div>
					<div class="advantages__info">
						<?php echo get_field('preim')['preim_6']?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="reviews">
	<div class="wr">
		<?php echo do_shortcode("[reviews_slider]"); ?>
	</div>
</div>

<div class="example">



	<div class="wr">
		<div class="example__content">
			<h2 class="block__title wow fadeInUp"><?php echo get_field('header_6')?></h2>
			<div class="example__slider-wr">
				<button class="example__arrow example__prev"></button>

				<div class="example__slider wow fadeInUp">
					<?php if( have_rows('examples_block') ):?>
						<?php while ( have_rows('examples_block') ) : the_row();?>
							<?php $example = get_sub_field('example')?>
							<?php echo $example->post_content?>
						<?php endwhile;?>
					<?php endif;?>
				</div>

				<button class="example__arrow example__next"></button>
			</div>
			<center><a class="btn btn--big" style="padding-top: 20px; margin-bottom: 25px;" href="/primery-ustanovky/"><?php the_field('tekst_knopki_smotret_vse'); ?></a></center>

		</div>
	</div>

</div>

<br>

<div class="buy">
	<div class="wr">
		<div class="buy__content">
			<h2 class="block__title wow fadeInUp"><?php echo get_field('header_7')?></h2>
			<div class="buy__list">
				<div class="buy__item wow fadeInUp">
					<?php echo get_field('block_7')['string_7_1']?>
				</div>

				<div class="buy__item wow fadeInUp">
					<?php echo get_field('block_7')['string_7_2']?>
				</div>

				<div class="buy__item wow fadeInUp">
					<?php echo get_field('block_7')['string_7_3']?>
				</div>

				<div class="buy__item wow fadeInUp">
					<?php echo get_field('block_7')['string_7_4']?>
				</div>
			</div>
		</div>
	</div>
</div>
</main>
<style>
.home-text ul {
	margin-top: 0;
	margin-bottom: 10px;
	display: block;
	list-style-type: disc;
}
.home-text li {
	list-style: disc;
	margin-left: 30px;
}
</style>
<div class="container home-text">
	<?php
	the_post();
	$content = get_the_content();
	$short = '';
	$more = '';
	list($short, $more) = explode('<span id="more-8"></span>', $content);
	?>
	<?= $short ?>
	<div id="home-text__more" class="collapse">
		<?= $more ?>
	</div>
	<div class="text-right">
		<a id="home-text__more-btn" href="#home-text__more" class="text-muted" data-toggle="collapse">Читать далее</a>
	</div>
</div>
<?php
get_footer();
