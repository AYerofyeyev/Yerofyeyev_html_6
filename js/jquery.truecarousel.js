(function($) {
  var options;
  var img = [];
  $.fn.truecarousel = function () {
    for (var i = 0; i < options.length; i++){
      img[i] = $("img")
      img[i].setAttribute("src", options[i].imgName);
      $(".truebrand").append(img[i]);
    };
    return this;
  };
})(jQuery);
