

window.onload = function() {
console.log('000000');


	$('.insta-medias').on('click', 'img' , function(){
		console.log('dsfdsf');
		show_modal.apply(this); 
	});

  
  var show_modal = function() {
    console.log('22222');
    var $this = $(this);
    		
	var cap_txt = $this.attr('data-caption');
	
	if ((window.cap_txt != undefined)||(cap_txt!='')) { 
		if (!cap_txt){
			cap_txt = '';
		} else {
			cap_txt = cap_txt.replace(/[^А-ЯЁа-яёA-Za-z0-9_!?()=*.,#\s@-]*/gim, '');
		}
		
	} else {
		cap_txt = '';
	}

    $('.insta-modal-caption').text(cap_txt);
    $('.insta-modal-likes').text($this.attr('data-likes'));
    $('.insta-modal-comments').text($this.attr('data-comments'));
    
    if($this.attr('data-video')) {
      
      var $video = $('<video>');
      $video.attr('src', $this.attr('data-video'));
      $video.attr('class', 'insta-modal-content-elem');
      $video.attr('controls', 'controls');
      
	  if($this.attr('data-count') > 1){
		$('.insta-modal-content').append("<div data='"+($this.attr('data-count')-1)+"' class='arrow-left'></div>");
	  }
	  
      $('.insta-modal-content').append($video);
	  	  	  
	  if(parseInt($this.attr('data-count')) < parseInt($this.attr('last-count'))){
		$('.insta-modal-content').append("<div data='"+($this.attr('data-count')-1+2)+"' class='arrow-right'></div>");
	  } 
	  
	  if($this.attr('data-count') == $this.attr('last-count')){
		$('.insta-modal-content').append("<div data='"+($this.attr('data-count')-1+2)+"' class='arrow-right last-load'></div>");  
	  }
	  
	  $(".last-load").on('click', function(){
			  $('.insta-more-button').click();
			  test_test = ($this.attr('data-count')-1+2);
			  
			  
			   setTimeout(function(){
				  $('.insta-overlay').css({"display":"block"});
				  $('.insta-overlay').html("<div style='background:url(/insta/loading.gif);background-size:cover;position:absolute;width:100px;height:100px;left:50%;margin-left:-50px;top:50%;margin-top:-50px;'></div>");
			  }, 1); 
			  
			  
		}); 
		 $(".insta-modal-content>div[class*='arrow']").on('click', function(){
			
			$(".insta-overlay").click();
			$(".insta-media[data-count='"+$(this).attr('data')+"']").click();
			
		}); 
      
    }
    else {
      
      var $img = $('<img>');
      $img.attr('src', $this.attr('data-full'));
      $img.attr('class', 'insta-modal-content-elem');
      
	  if($this.attr('data-count') > 1) {
		$('.insta-modal-content').append("<div data='"+($this.attr('data-count')-1)+"' class='arrow-left'></div>");
	  }
	  
      $('.insta-modal-content').append($img);
	  
	  if(parseInt($this.attr('data-count')) < parseInt($this.attr('last-count'))) {
		$('.insta-modal-content').append("<div data='"+($this.attr('data-count')-1+2)+"' class='arrow-right'></div>");
	  } 
	  if($this.attr('data-count') == $this.attr('last-count')){
		$('.insta-modal-content').append("<div data='"+($this.attr('data-count')-1+2)+"' class='arrow-right last-load'></div>");  
	  }
	  
		
		
	    $(".last-load").on('click', function(){
			  $('.insta-more-button').click();
			  test_test = ($this.attr('data-count')-1+2);
			  
			  
			   setTimeout(function(){
				  $('.insta-overlay').css({"display":"block"});
				  $('.insta-overlay').html("<div style='background:url(/insta/loading.gif);background-size:cover;position:absolute;width:100px;height:100px;left:50%;margin-left:-50px;top:50%;margin-top:-50px;'></div>");
			  }, 1); 
			  
			  
		}); 
		 $(".insta-modal-content>div[class*='arrow']").on('click', function(){
			
			$(".insta-overlay").click();
			$(".insta-media[data-count='"+$(this).attr('data')+"']").click();
			
		}); 
    }
    
    $('.insta-overlay').show();
    $('.insta-modal').show();
    
  };

  
  $('.insta-overlay').on('click', function() {
    
    $(this).hide();
    $('.insta-modal').hide();
    $('.insta-modal-content').empty();
    
  });


   $('.close').on('click', function() {
    
    
    $('.insta-modal').hide();
    $('.insta-overlay').hide();
    $('.insta-modal-content').empty();
    
  });


  var count = window.INSTAGRAM_IMAGE_COUNT;
  
  var login = $('.insta-profile-login').html();//$('meta[name="instalogin"]').attr('content');
  
  if(!login) return;
  
  var start = $('.insta-medias > ').length;
  
  var test_test = 'no-new';
  
  $instaMoreButton = $('.insta-more-button');
  
  var get_medias = function() {
    
    if($instaMoreButton.attr('disabled') == 'disabled') return;
    
    $instaMoreButton.attr('disabled', 'disabled');
    
    $.get('/api/instagram-get-medias?login=' + login + '&start=' + start + '&count=' + count, function(data) {
      
	  
      data = JSON.parse(data);
      
      if(data.error) return;
      
      var $instaMedia = $('.insta-medias');
	  
	  var count_c = start+1;
      data.forEach(function(media) {
        
        var $img = $('<img>');
        $img.attr('class', 'insta-media');
        $img.attr('src', media.imageThumbnailUrl);
        $img.attr('data-caption', media.caption);
        $img.attr('data-full', media.imageHighResolutionUrl);
        $img.attr('data-video', media.videoStandardResolutionUrl);
        $img.attr('data-likes', media.likesCount);
        $img.attr('data-comments', media.commentsCount);
        $img.attr('data-count', count_c);
		$img.attr('last-count', (start+count));
		
        /*$img.on('click', show_modal);*/
        
        $instaMedia.append($img);
        
		count_c++;
		
		 
		
      });
      
	  if(test_test!='no-new'){
		  $('.insta-overlay').html("");
		  $('.insta-overlay').css({"display":"none"});
		  $('.insta-media[data-count="'+test_test+'"]').click();
		  test_test=='no-new';
	  }
	  
      $instaMedia.show();
      $('.insta-more').show();
      $instaMoreButton.attr('disabled', false);
      	 	  
	  $('.insta-media').each(function(i,elem) {
	     $(this).attr('last-count', (start+count));
	  });
	  
      start += count;
      
    });
    
	
	
	
  };
  
  $instaMoreButton.on('click', get_medias);
  
  if (false) {
	  $.get('/insta/insta.php?action=get_profile&login=' + login, function(data) {
		
		data = JSON.parse(data);
		
		if(data.error) return;
		
		get_medias();
		
		$('.insta-profile-img').attr('src', data.profilePicUrl);
		$('.insta-profile-login').text(data.username);
		$('.insta-profile-name').text(data.fullName);
		
		var info_txt = data.biography;
		
		if ((window.info_txt != undefined)&&(info_txt!='')) { 
			if (!info_txt){
				info_txt = '';
			} else {
				info_txt = info_txt.replace(/[^А-ЯЁа-яёA-Za-z0-9_!?()=*.,#\s@-]*/gim, '');
			}
		} else {
			info_txt = '';
		}
		
		$('.insta-profile-info').text(info_txt);
		
		$('.insta-counts-posts').text(data.mediaCount);
		$('.insta-counts-followers').text(data.followedByCount);
		$('.insta-counts-following').text(data.followsCount);
		
		$('.insta').show();
		$('.insta-profile').show();
		$('.insta-counts').show();
		
	  });
  }
  

}
