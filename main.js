var slider = (function () {
  var getSlick = function (cssSelect) {
    $(cssSelect).slick({
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      autoplay: true,
      infinite: true,
      fade: true,
      lazyLoad: 'progressive',
      cssEase: 'linear',

      responsive: [{
        breakpoint: 600,
        settings: {
          autoplay: false
        }
      }]
    });
  };

  return {
    getSlick: getSlick
  };
}());


slider.getSlick('#slideshow');
