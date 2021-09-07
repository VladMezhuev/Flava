import slick from "slick-carousel";
import $ from "jquery";

// line-up slider

const lineupConfig = {
  arrows: true,
  nextArrow:
    '<a class="control next"><img src="../static/img/lineup-arrow-next.svg" /></a>',
  prevArrow:
    '<a class="control prev"><img src="../static/img/lineup-arrow-prew.svg" /></a>',
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  appendArrows: $(".lineup__controls"),

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

// sponsors slider

const sponsorsConfig = {
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  mobileFirst: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
      },
    },
  ],
};

$(".slider-lineup").slick(lineupConfig);
$(".slider-sponsors").slick(sponsorsConfig);
