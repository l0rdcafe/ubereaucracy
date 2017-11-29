var slider = (function () {
  var addSlick = function (cssSelect) {
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
    addSlick: addSlick
  };
}());


slider.addSlick('#slideshow');
