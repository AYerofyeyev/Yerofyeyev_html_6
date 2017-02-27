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
    // $(".dropdown").mouseenter(
    //   function () {
    //     $(this).children.animate({
    //       backgroundColor:"linear-gradient(to top, #0c3357, #25617b)",
    //     }, 500 );
    //   });
    // $(".dropdown").mouseleave(
    //   function() {
    //     $(this).children.animate({
    //       backgroundColor:"linear-gradient(to top, #000 0%, #2a2e32 85%, #576068)",
    //     }, 500 );
    //   });
});
