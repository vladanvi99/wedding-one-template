$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop':  parseInt($target.offset().top,10)
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("#main-header").addClass("fixed");
  } else {
      $("#main-header").removeClass("fixed");
  }
});
jQuery('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="dot">0'+(i+1)+'</a>';
    },
});

jQuery('.wishesSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
jQuery('.blogsInner .image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  arrows: true,
  infinite: true,
});
