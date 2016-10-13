$(function(){

  new WOW({
    offset: 150
  }).init();

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 60
        }, 500);
        return false;
      }
    }
  });

  var $items = $('.Menu .List .List-item'),
      $listContainer = $('.ListContainer'),
      $contactForm = $('.Contact-form'),
      $fieldInput = $contactForm.find('.field input, textarea')

  var color = {
    red: '#FE2851',
    black: '#242424'
  }

  $('.button.hamburguer').click( function() {
    $listContainer.toggleClass('is-active')
    $(this).toggleClass('is-active')

    //Menu
    if( $listContainer.hasClass('is-active') ){
      $items.map( (i, item) => {
        setTimeout( () => {
          $(item).addClass('is-showing')
        }, 150 * i)
      })
    }else {
      $items.removeClass('is-showing')
    }

  });

  $fieldInput
    .focusin(function(){ $(this).siblings('label').css({color: color.red }) })
    .focusout(function(){ $(this).siblings('label').css({color: color.black }) })

  $("#slider").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    prevText: "",
    nextText: ""
  });

  $('.rslides_nav').wrapAll('<div class="navigation row align-right" />')
  $('.rslides_nav.prev').append('<i class="fi-arrow-left"></i>')
  $('.rslides_nav.next').append('<i class="fi-arrow-right"></i>')

});
