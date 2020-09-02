// 自行加入的JS請寫在這裡
$(function() {
  // 首頁輪播
  $('.item_pic').slick({
    mobileFirst: true,
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease'
  });
  $('.item_pic').slickLightbox({
    caption: 'caption',
    lazyLoad: 'ondemand',
    useHistoryApi: 'true',
    ease: 'ease',
    lazy: true
  });

});

$(function() {
  $(".item_search").click(function(e) {
    $(this).toggleClass('active');
    $(".advsearch").slideToggle();
    e.preventDefault();
  });
  $(".item_reservenum a").click(function(e) {
    $(".item_reserve").slideToggle();
    e.preventDefault();
  });
  $(".file_list a.delete").click(function(e) {
    $(this).fadeOut().siblings('img,.figure').fadeOut();
    e.preventDefault();
  });
});