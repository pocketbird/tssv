// Show/Hide page sections
$('.js-about').hide();
$('.js-blog').hide();
$('.js-contact').hide();
$('.js-tour').hide();

$('.js-hero').click(function() {
  // $('.background').hide();
  // $('.background').removeClass('background-splash');
  // $('.background').addClass('background-primary');
  // $('.background').fadeIn(500);
  $('.js-header').css("display", "block");
  $('.js-header').hide();
  $('.js-content-primary').css("display", "block");
  $('.js-hero').hide();
  $('.js-header').fadeIn(2000);
  $('.js-about').show(1000);
});

$('.js-link-about').click(function() {
  $('.js-about').show(1000);
  $('.js-blog').hide(1000);
  $('.js-contact').hide(1000);
  $('.js-tour').hide();

  $('.js-li-about').addClass('active');
  $('.js-li-contact').removeClass('active');
  $('.js-li-tour').removeClass('active');
  $('.content-primary').removeClass('content--tour');
});

$('.js-link-blog').click(function() {
  $('.js-about').hide(1000);
  $('.js-blog').show(1000);
  $('.js-contact').hide(1000);
  $('.js-tour').hide();
  $('.content-primary').removeClass('content--tour');
});

$('.js-link-contact').click(function() {
  $('.js-about').hide(1000);
  $('.js-blog').hide(1000);
  $('.js-contact').show(1000);
  $('.js-tour').hide();
  $('.content-primary').removeClass('content--tour');

  $('.js-li-about').removeClass('active');
  $('.js-li-contact').addClass('active');
  $('.js-li-tour').removeClass('active');
});

$('.js-link-tour').click(function() {
  $('.js-about').hide();
  $('.js-blog').hide();
  $('.js-contact').hide();
  $('.js-tour').show(1000);

  $('.js-li-about').removeClass('active');
  $('.js-li-contact').removeClass('active');
  $('.js-li-tour').addClass('active');
  $('.content-primary').addClass('content--tour');
});
