!function(e){function s(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}var i={};return s.m=e,s.c=i,s.p="",s(0)}([/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
function(e,s){"use strict";$(function(){function e(e){var s=e.scrollTop();s>1?(o.css({backgroundColor:"white"}).addClass("shadow"),o.find(".Brand .Brand-blue").removeClass("is-active"),o.find(".Brand .Brand-red").addClass("is-active"),o.find(".List a").addClass("is-descending")):(o.css({backgroundColor:"transparent"}).removeClass("shadow"),o.find(".Brand .Brand-blue").addClass("is-active"),o.find(".Brand .Brand-red").removeClass("is-active"),o.find(".List a").removeClass("is-descending"))}function s(e){e.matches?o.addClass("menu-mobile"):o.removeClass("menu-mobile")}new WOW({offset:150}).init(),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top+60},500),!1}});var i=$(".Menu .List .List-item"),n=$(".ListContainer"),a=$(".Contact-form"),t=a.find(".field input, textarea"),o=$("#menu"),r={red:"#FE2851",black:"#242424"};$(".button.hamburguer").click(function(){n.toggleClass("is-active"),$(this).toggleClass("is-active"),n.hasClass("is-active")?i.map(function(e,s){setTimeout(function(){$(s).addClass("is-showing")},150*e)}):i.removeClass("is-showing")}),t.focusin(function(){$(this).siblings("label").css({color:r.red})}).focusout(function(){$(this).siblings("label").css({color:r.black})}),$("#slider").responsiveSlides({auto:!0,pager:!0,nav:!0,prevText:"",nextText:""}),$(".rslides_nav").wrapAll('<div class="navigation row align-right" />'),$(".rslides_nav.prev").append('<i class="fi-arrow-left"></i>'),$(".rslides_nav.next").append('<i class="fi-arrow-right"></i>');var l=window.matchMedia("(max-width: 600px)");$(window).on("scroll",function(){var s=$(this);e(s)}),l.addListener(s),s(l);var c=$(".hero .circle"),d=$(".Me .circle");new TweenMax.set(c,{x:"50%",y:"50%"}),new TweenMax.set(d,{x:"50%",y:"-50%"});var h=function(e,s,i){var n=$(i);new TweenMax.to(n,.2,{x:-((s.clientX-window.innerWidth/2)/e),y:-((s.clientY-window.innerHeight/2)/e)})};$(".hero, #menu, .Me").on("mousemove",function(e){h(20,e,".title"),h(20,e,".profession"),h(-50,e,".hero .circle"),h(-50,e,".Me .circle")});var u={slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]};$(".slick").slick(u)})}]);
//# sourceMappingURL=app.bundle.js.map