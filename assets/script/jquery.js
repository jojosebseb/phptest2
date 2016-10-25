//navbar
var searchBtn = $('#searchInput');
var searchContainer = $('.search-container');
var closeSearch = $('.close-search');
var navbarHandle = $('.navbar-handle');
var navbarOptions = $('.navbar-options');
searchBtn.on('click', function(){
   searchBtn.addClass('active');
   closeSearch.addClass('active');
  //  navbarOptions.removeClass('active');
})
closeSearch.on('click', function(){
   searchBtn.removeClass('active');
   closeSearch.removeClass('active');
})
navbarHandle.on('click', function(){
  navbarOptions.toggleClass('active');
  navbarHandle.toggleClass('active');
  searchBtn.removeClass('active');
  closeSearch.removeClass('active');
})
//navbar

//index
var indexSlider = $('.promotion-slider');

indexSlider.slick({
infinite: true,
speed: 300,
slidesToShow: 1,
arrows: false,
// fade: true,
dots: true,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
    }
  },
]
});
$('.shop-grid-slider').slick({
infinite: true,
speed: 300,
slidesToShow: 3,
arrows: false,
// fade: true,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      dots: false,
      arrows: true,
    }
  },
]
});
//index
