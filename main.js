var slider = (function () {
  var getSlick = function (cssSelect) {
    $(cssSelect).slick({
      autoplay: true,
      adaptiveHeight: true,
      dots: true,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      mobileFirst: true
    });
  };

  return {
    getSlick: getSlick
  };
}());


slider.getSlick('#slideshow');
