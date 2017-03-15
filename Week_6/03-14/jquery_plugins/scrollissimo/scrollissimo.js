$(document).ready(function () {
  $(window).scroll(function () {
      scrollissimo.knock();
  });

  var divyTween = TweenLite.to(document.getElementById('Divy'), 500, { height: 400, width: 300 });
  scrollissimo.add(divyTween, 0, 25);

});
