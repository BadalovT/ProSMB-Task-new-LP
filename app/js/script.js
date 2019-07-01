$( document ).ready(function() {
    


$('.trust .owl-carousel').owlCarousel({
    // autoplay: true,
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:false,
  dot:false,
 
})

$('.feature .owl-carousel').owlCarousel({
    // autoplay: true,
    items:3,
    loop:true,
    nav:true,
    center:true,
    dot:true,
   
  });

  $('.pricing .owl-carousel').owlCarousel({
    // autoplay: true,
    items:1.5,
    loop:true,
    // nav:true,
    center:true,
    dot:true,
  });

var owl = $(".feature .owl-carousel")
owl.on('changed.owl.carousel', function(){
    var center=$(".owl-item.active.center");
    var value= $(center).find(".item-img").attr('id');
    var currentActive=$(`.feature .text .text-data[data-value=${value}]`);
    $(".text-data").removeClass("active-text");
    currentActive.addClass("active-text");
    
})

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    })
    


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 40) {
            $('.head').addClass('fixed-header');
        }
        else {
            $('.head').removeClass('fixed-header');
        }
    });
});
$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });
AOS.init();
jQuery(document).ready(function ($) {
    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
         {var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top-100}, 1000);return false;}
            }
    });
})


function main() {
    var nav = document.getElementById('nav');
    nav.addEventListener('click',function() {
      nav.className = (!nav.classList.contains('active')) ? 'active' : '';
    });
  }
  addEventListener('load',main);