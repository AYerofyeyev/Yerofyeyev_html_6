$(function() {
    $(".jcarousel").jcarousel({
        list: ".jcarousel-list",
        items: ".jcarousel-item",
        animation: "slow",
        transitions: true,
        wrap: "circular",
        vertical: false
    });
    $(".jcarousel-prev").jcarouselControl({ target: '-=1' });
    $('.jcarousel-next').jcarouselControl({ target: '+=1' });
    $( '.dropdown' ).hover(
      function(){
        $(this).children('.submenu').slideDown(150);
      },
      function(){
        $(this).children('.submenu').slideUp(150);
      }
    );
    $("select").styler();
});
