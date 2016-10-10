$(document).on('ready', function(){
  'use strict'

  var $items = $('.Menu .List .List-item')
  var $listContainer = $('.ListContainer')

  $('.button.hamburguer').click( function() {
    $listContainer.toggleClass('is-active')
    $(this).toggleClass('fi-list fi-x')

    //Menu
    if( $listContainer.hasClass('is-active') ){
      $items.map((i, item)=>{
        setTimeout( () => {
          $(item).addClass('is-showing')
        }, 150 * i)
      })
    }else {
      $items.map((i, item)=> {
        $(item).removeClass('is-showing')
      })
    }

  });


});
