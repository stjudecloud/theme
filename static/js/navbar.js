// Only required for secondary navigation
$('.secondary-nav .nav-link').on('click', function(e) {
  // Bootstrap bug? https://github.com/twbs/bootstrap/issues/19374
  e.preventDefault();
  $(this).tab('show');
  var clickedTab = $(this);
  $('.secondary-nav .nav-link').removeClass('active');
  clickedTab.addClass('active');
});
