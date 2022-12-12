$(document).on('ready', function() {
    // $(".regular").slick({
    //   dots: true,
    //   autoplay: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 3
    // });
    // $(".saasSlider").slick({
    //   dots: true,
    //   autoplay: true,
    //   infinite: true,
    //   centerMode: true,
    //   slidesToShow: 5,
    //   slidesToScroll: 3
    // });
    $(".saasSlider").slick({
      dots: true,
      autoplay: true,
      infinite: true,
      variableWidth: true,
      prevArrow:"<img class='a-left control-c prev slick-prev controlImagePrev' src='image/icon/home/previous.png'>",
      nextArrow:"<img class='a-right control-c next slick-next controlImageNext' src='image/icon/home/next.png'>",
    });
    // $(".lazy").slick({
    //   autoplay: true,
    //   lazyLoad: 'ondemand', // ondemand progressive anticipated
    //   infinite: true
    // });
  });

  $(document).on('ready', function() {
    $(".advisorSlider").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      prevArrow:"<img class='a-left control-c prev slick-prev controlImagePrev' src='image/icon/home/previous.png'>",
      nextArrow:"<img class='a-right control-c next slick-next controlImageNext' src='image/icon/home/next.png'>",
    });
  });
