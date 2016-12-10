//$('document').ready(function() {

$(function() {
  workbelt();
  workload();
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '60px' });
});

  // Get started!

function workbelt() {

    $('.thumb-1').click(function() {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });
    $('.thumb-2').click(function() {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });
    $('.thumb-3').click(function() {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });
    $('.thumb-4').click(function() {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });
    $('.thumb-5').click(function() {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });
    $('.thumb-6').click(function() {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });


    $('.lnr-chevron-left-circle').click(function() {
      $('.work-belt').css('left', '0%');
      $('.work-container').hide(800);
    });
}

function workload() {
    $.ajaxSetup({ cache: true });

    $('.thumb-1').click(function() {
      var spinner = '<div class="loader">Loading...</div>',
          newHTML = 'includes/gdesign.html';
      $('.project-load').html(spinner).load(newHTML);
    });

    $('.thumb-2').click(function() {
      var spinner = '<div class="loader">Loading...</div>',
          newHTML = 'includes/odesign.html';
      $('.project-load').html(spinner).load(newHTML);
    });

    $('.thumb-3').click(function() {
      var spinner = '<div class="loader">Loading...</div>',
          newHTML = 'includes/web.html';
      $('.project-load').html(spinner).load(newHTML);
    });

    $('.thumb-4').click(function() {
      var spinner = '<div class="loader">Loading...</div>',
          newHTML = 'includes/linux.html';
      $('.project-load').html(spinner).load(newHTML);
    });

    $('.thumb-5').click(function() {
      var spinner = '<div class="loader">Loading...</div>',
          newHTML = 'includes/audio.html';
      $('.project-load').html(spinner).load(newHTML);
    });

    $('.thumb-6').click(function() {
      var spinner = '<div class="loader">Loading...</div>',
          newHTML = 'includes/tribute.html';
      $('.project-load').html(spinner).load(newHTML);
    });
}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
