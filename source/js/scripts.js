$(document).ready(function () {
  $('.js-click').click(function (e) {
    var target = $(this).closest('.js-target');

    if (target.hasClass('js-active')) {
      target.removeClass('js-active');
    } else {
      target.addClass('js-active');
    }
  });
}); // doc.ready
