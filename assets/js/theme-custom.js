 $(document).on('ready', function () {
      // initialization of header
      $.HSCore.components.HSHeader.init($('#header'));

      // initialization of unfold component
      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
	  
      // initialization of focus state
      $.HSCore.components.HSFocusState.init();

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');

      // initialization of malihu scrollbar
      var $scrollbar = $('.js-scrollbar');
      $.HSCore.components.HSMalihuScrollBar.init($scrollbar);
      $($scrollbar).mCustomScrollbar('scrollTo', '.js-scrollbar .hs-sidebar__link.active');

      // initialization of malihu scrollbar
      var $scrollbar = $('.js-scrollbar');
      $.HSCore.components.HSMalihuScrollBar.init($scrollbar);
      $($scrollbar).mCustomScrollbar('scrollTo', '#components li a.active');

      // initialization of popups
      $.HSCore.components.HSModalWindow.init('[data-modal-target]');

      // initialization of autonomous popups
      $.HSCore.components.HSModalWindow.init('.js-modal-window', {
        autonomous: true
      });

      // initialization of form validation
      $.HSCore.components.HSValidation.init('.js-validate');

      // initialization of step form
      $.HSCore.components.HSStepForm.init('.js-step-form');

      // initialization of show animations
      $.HSCore.components.HSShowAnimation.init('.js-animation-link');
    

      // initialization of range datepicker
      $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

      // initialization of select picker
      $.HSCore.components.HSSelectPicker.init('.js-select');

      // initialization of clipboard
      $.HSCore.components.HSClipboard.init('.js-clipboard');
      // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    // initialization of chart pies
    var items = $.HSCore.components.HSChartPie.init('.js-pie');
    
   
    // initialization of video player
    $.HSCore.components.HSVideoPlayer.init('.js-inline-video-player');
	
    });

$(window).on('load', function () {
      // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 1199.98,
        hideTimeOut: 0
      });

      // initialization of svg injector module
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

    });
$(document).on('load', function () {
	    // initialization of svg injector module
	    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
	  	});
	  	
	  	var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

$('.selector button').click(function(e) {
    toggleOptions($(this).parent());
});

setTimeout(function() { toggleOptions('.selector'); }, 100);

