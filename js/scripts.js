$.fn.pageScroller = function(options) {

  var settings = $.extend({
    nav: $(this),
    links: $(this).find('a'),
    navActiveClass: 'active',
    scrollContainer: $('html, body'),
    scrollSpeed: 1500,
    section: $('section'),
    navHeight: $(this).outerHeight()
  }, options);

  settings.links.each(function() {
    var link = $(this),
      href = link.attr('href'),
      target = $(href);

    link.on('click', function(e) {
      e.preventDefault();
      settings.links.removeClass(settings.navActiveClass);
      link.addClass(settings.navActiveClass);
      settings.scrollContainer.stop().animate({
        scrollTop: target.offset().top - settings.navHeight
      }, settings.scrollSpeed);
    });

  });

  $(window).on('scroll', function() {
    var wScroll = $(window).scrollTop() + settings.navHeight;
    settings.section.each(function(index) {
      var id = $(this).attr('id'),
        top = $(this).offset().top,
        secHeight = $(this).outerHeight();
      if (top <= wScroll && (top + secHeight) > wScroll) {
        settings.links.removeClass(settings.navActiveClass);
        settings.nav.find('a[href="#' + id + '"]').addClass(settings.navActiveClass);
      }
    });
  });
};

$(document).ready(function() {
  $('nav').pageScroller({
    // nav: $(this),						default - Your navigation
    // links: $(this).find('a'),			default - The links with the # to scroll to
    // scrollContainer: $('html, body'),	default - The container you want to scroll
    // scrollSpeed:		1500,				//default - 1500
    // section: $('section'),    			default - The elements you want to scroll to with the same hash # as the links
    // navHeight: $(this).outerHeight		default - The height of the navigation
    // navActiveClass:		'active',		default - Active class name op links
  });
});

$(document).ready(function () {
    $("#contact-form-button").on('click', function() {
        $("#contact-form-modal").addClass("is-active");
    });
    $("#contact-form-modal button.modal-close").on('click', function() {
        $("#contact-form-modal").addClass("slideOutUp").removeClass("is-active");
    });
});

var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
