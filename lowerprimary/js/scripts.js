$('.hitem-indicators li').each(function() {
  $(this).click(function() {
    $('.hitem-indicators li').removeClass('active');
    $(this).addClass('active');
  })
});

$(".navbrand button").click(function() {
  $("nav,#content-wrap").toggleClass("open");
  $(".navbrand").toggleClass("opened");
});

$(".navs li a").each(function() {
  $(this).click(function() {
    var target = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
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
