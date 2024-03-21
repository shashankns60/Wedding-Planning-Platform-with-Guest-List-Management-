"use strict";function flyingPages(){var a=new Set,b=new Set,c=document.createElement("link"),d=c.relList&&c.relList.supports&&c.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,e=navigator.connection&&(navigator.connection.saveData||(navigator.connection.effectiveType||"").includes("2g"));if(!e&&d){var f=function(a){return new Promise(function(b,c){var d=document.createElement("link");d.rel="prefetch",d.href=a,d.onload=b,d.onerror=c,document.head.appendChild(d)})},g=function(a){var b=setTimeout(function(){return p()},5e3);f(a).catch(function(){return p()}).finally(function(){return clearTimeout(b)})},h=function(c){var d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(!(b.has(c)||a.has(c))){var e=window.location.origin;if(c.substring(0,e.length)===e&&window.location.href!==c){for(var f=0;f<window.FPConfig.ignoreKeywords.length;f++)if(c.includes(window.FPConfig.ignoreKeywords[f]))return;d?(g(c),b.add(c)):a.add(c)}}},i=new IntersectionObserver(function(a){a.forEach(function(a){if(a.isIntersecting){var b=a.target.href;h(b,!window.FPConfig.maxRPS)}})}),j=function(){return setInterval(function(){Array.from(a).slice(0,window.FPConfig.maxRPS).forEach(function(c){g(c),b.add(c),a.delete(c)})},1e3)},k=null,l=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&(k=setTimeout(function(){h(c.href,!0)},window.FPConfig.hoverDelay))},m=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&h(c.href,!0)},n=function(a){var c=a.target.closest("a");c&&c.href&&!b.has(c.href)&&clearTimeout(k)},o=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function c(){var a=Math.max;return a(0,50-(Date.now()-b))}})},1)},p=function(){document.querySelectorAll("a").forEach(function(a){return i.unobserve(a)}),a.clear(),document.removeEventListener("mouseover",l,!0),document.removeEventListener("mouseout",n,!0),document.removeEventListener("touchstart",m,!0)};window.FPConfig=Object.assign({delay:0,ignoreKeywords:[],maxRPS:3,hoverDelay:50},window.FPConfig),j(),o(function(){return setTimeout(function(){return document.querySelectorAll("a").forEach(function(a){return i.observe(a)})},1e3*window.FPConfig.delay)});var q={capture:!0,passive:!0};document.addEventListener("mouseover",l,q),document.addEventListener("mouseout",n,q),document.addEventListener("touchstart",m,q)}}flyingPages();(function($){'use strict';window.FPConfig={delay:0,ignoreKeywords:[],maxRPS:3,hoverDelay:50};$(window).on("load",function(){$('.spinner').fadeOut();$('.preloader-area').delay(350).fadeOut('slow');});jQuery(document).ready(function($){$(window).on('scroll',function(){if($(window).scrollTop()>50){$('.navbar-fixed-top').addClass('sticky');}else{$('.navbar-fixed-top').removeClass('sticky');}});var wow=new WOW({mobile:false});wow.init();$(".slider-active").owlCarousel({items:1,dots:true,autoplay:true,loop:true,mouseDrag:false,touchDrag:false,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1},600:{items:1},1000:{items:1,nav:true,}}});$('.wishes-owl').owlCarousel({items:1,loop:true,margin:10,navigation:false,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:1,nav:false},1000:{items:1,nav:true,loop:false}}})
$('.wishes-owl1').owlCarousel({items:2,loop:true,margin:10,navigation:false,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:1,nav:false},1000:{items:2,nav:true,loop:false}}})
$('.wishes-owl2').owlCarousel({items:2,loop:true,margin:10,navigation:false,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:1,nav:false},1000:{items:2,nav:true,loop:false}}})
$("#testimonial-slider").owlCarousel({items:1,pagination:true,navigationText:["",""],slideSpeed:1000,autoPlay:true,responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$('.owl-registry').owlCarousel({loop:true,margin:10,dots:false,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],autoplay:true,slideSpeed:2000,responsiveClass:true,responsive:{0:{items:1,nav:true},500:{items:2,nav:true},600:{items:3,nav:true},1000:{items:4,nav:true,loop:false}}});$('.store-slider').slick({infinite:true,autoplay:false,arrows:true,dots:false,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,}}]});$('.services-slider').slick({infinite:true,autoplay:true,arrows:true,dots:false,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,}}]});$('.store-slider1').slick({infinite:true,autoplay:false,arrows:true,dots:false,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,}},{breakpoint:479,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,}}]});$('.slider-for').slick({slidesToShow:1,slidesToScroll:1,autoplay:true,arrows:false,dots:false,fade:true,asNavFor:'.slider-nav'});$('.slider-nav').slick({slidesToShow:3,slidesToScroll:1,asNavFor:'.slider-for',dots:false,centerMode:true,focusOnSelect:true});$(".navbar-nav").on('click','a',function(e){var anchor=$(this);$('html, body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top-5},1000);e.preventDefault();});$(".navbar-nav").on('click','a',function(){$(".navbar-collapse").removeClass("in");})
$('body').append('<div id="scrollup"><i class="fa fa-angle-up"></i></div>');$(window).on("scroll",function(){if($(this).scrollTop()>250){$('#scrollup').fadeIn();}else{$('#scrollup').fadeOut();}});$('#scrollup').on("click",function(){$("html, body").animate({scrollTop:0},800);return false;});$('.skillsection').bind('inview',function(event,visible,visiblePartX,visiblePartY){if(visible){$('.chart').easyPieChart({easing:'easeOut',delay:3000,lineCap:"square",lineWidth:"10",barColor:'#fff',trackColor:'transparent',scaleColor:false,lineWidth:2,size:110,animate:2000,onStep:function(from,to,percent){this.el.children[0].innerHTML=Math.round(percent);}});$(this).unbind('inview');}});$('.progress .progress-bar').css("width",function(){return $(this).attr("aria-valuenow")+"%";})
$('.portfolio-inner').mixItUp();$('.coundown_res').countdown('2018/01/02',function(event){var $this=$(this);$this.find('#day').html(event.strftime('<span>%D</span>'));$this.find('#hour').html(event.strftime('<span>%H</span>'));$this.find('#month').html(event.strftime('<span>%M</span>'));$this.find('#second').html(event.strftime('<span>%S</span>'));});$('.counter').counterUp();try{$(".fun-facts_wrapper").appear(function(){$(".timer").countTo();});}catch(err){console.log(err.message);}
$(".video-play-btn").magnificPopup({type:'video',});$('.project-hover').magnificPopup({delegate:'a',type:'image'});var magnifPopup=function(){$('.port-popup').magnificPopup({delegate:'a',type:'image',removalDelay:300,mainClass:'mfp-with-zoom',gallery:{enabled:true},zoom:{enabled:true,duration:300,easing:'ease-in-out',opener:function(openerElement){return openerElement.is('img')?openerElement:openerElement.find('img');}}});};magnifPopup();});var interleaveOffset=0.5;var swiperOptions={loop:true,speed:3000,autoplay:true,grabCursor:true,watchSlidesProgress:true,mousewheelControl:true,keyboardControl:true,navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},pagination:{el:'.swiper-pagination',dynamicBullets:true,},on:{progress:function(){var swiper=this;for(var i=0;i<swiper.slides.length;i++){var slideProgress=swiper.slides[i].progress;var innerOffset=swiper.width*interleaveOffset;var innerTranslate=slideProgress*innerOffset;swiper.slides[i].querySelector(".slide-inner").style.transform="translate3d("+innerTranslate+"px, 0, 0)";}},touchStart:function(){var swiper=this;for(var i=0;i<swiper.slides.length;i++){swiper.slides[i].style.transition="";}},setTransition:function(speed){var swiper=this;for(var i=0;i<swiper.slides.length;i++){swiper.slides[i].style.transition=speed+"ms";swiper.slides[i].querySelector(".slide-inner").style.transition=speed+"ms";}},}};var swiper=new Swiper(".swiper-container",swiperOptions);$(window).on('resize',function(){var bodyheight=$(this).height();$("#mt_banner").height(bodyheight);}).resize();})(jQuery);