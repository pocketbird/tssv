// Show/Hide page sections
$('.js-about').hide();
$('.js-blog').hide();
$('.js-contact').hide();
$('.js-tour').hide();

$('.js-hero').click(function() {
  $('.js-header').css("display", "block");
  $('.js-header').hide();
  $('.js-content-primary').css("display", "block");
  $('.js-hero').hide(1000);
  $('.js-header').fadeIn(2000);
  $('.js-about').show(1000);
});

$('.js-link-about').click(function() {
  $('.js-about').show(1000);
  $('.js-blog').hide(1000);
  $('.js-contact').hide(1000);
  $('.js-tour').hide(1000);
});

$('.js-link-blog').click(function() {
  $('.js-about').hide(1000);
  $('.js-blog').show(1000);
  $('.js-contact').hide(1000);
  $('.js-tour').hide(1000);
});

$('.js-link-contact').click(function() {
  $('.js-about').hide(1000);
  $('.js-blog').hide(1000);
  $('.js-contact').show(1000);
  $('.js-tour').hide(1000);
});

$('.js-link-tour').click(function() {
  $('.js-about').hide(1000);
  $('.js-blog').hide(1000);
  $('.js-contact').hide(1000);
  $('.js-tour').show(1000);
});
