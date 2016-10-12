$(document).on('ready', function(){
  'use strict'

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


});
