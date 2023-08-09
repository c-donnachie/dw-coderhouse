$(document).ready(function(){
  $('.container-img').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

    ]
  });
});