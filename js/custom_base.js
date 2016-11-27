$(function() {
  smoothScroll(300);
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}

$(window).scroll(function(){

  var scrl = $(this).scrollTop();

  if (  scrl > 68 ) {
    $('.top_menu').removeClass('tp_mnu_mrg_t');
  } else {
    $('.top_menu').addClass('tp_mnu_mrg_t');    
  } 



  $('.disc_bg_deep').css({
  	'transform' : 'translate(0px, '+ (scrl/(-90)) +'%)'
  });

  $('.disc_bg_mid').css({
  	'transform' : 'translate(0px, '+ (scrl/(-60)) +'%)'
  });

  $('.disc_bg_fore').css({
  	'transform' : 'translate(0px, '+ (20+scrl/(-30)) +'%)'
  });

  if ( scrl > 2400 && scrl < 3400) {
    $('.paper_img_top').css({
      'transform' : 'translate('+ (630-(scrl/4.8)) +'%, 0px)',
      'opacity' : (scrl-2400)/1000
    });
  }

  if ( scrl > 2300 && scrl < 3300) {
    $('.paper_img_mid').css({
      'transform' : 'translate('+ (610-(scrl/4.8)) +'%, 0px)',
      'opacity' : (scrl-2300)/1000      
    });
  }

  if ( scrl > 2200 && scrl < 3200) {
    $('.paper_img_bot').css({
      'transform' : 'translate('+ (590-(scrl/4.8)) +'%, 0px)',
      'opacity' : (scrl-2200)/1000
    });
  }            

});