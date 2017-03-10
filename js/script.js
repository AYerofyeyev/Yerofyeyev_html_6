$(function() {
    $(".jcarousel").jcarousel({
        list: ".jcarousel-list",
        items: ".jcarousel-item",
        animation: "slow",
        transitions: true,
        wrap: "circular",
        vertical: false
    });
    $(".jcarousel-prev").jcarouselControl({ target: "-=1" });
    $(".jcarousel-next").jcarouselControl({ target: "+=1" });
    $( ".dropdown" ).hover(
      function(){
        $(this).children(".submenu").slideDown(150);
      },
      function(){
        $(this).children(".submenu").slideUp(150);
      }
    );
    $("select").styler();
    $(".styled--input").styler();
    $(".check--button").hover(function(){
      $(this).css ("cursor", "pointer");
    });

//===============================================

  var img = [];
  var listItem = [];

  var options = [
    {
    "imgName": "img/brand--toyo.png",
    "href": "#",
    "imgAlt": "toyo",
    "imgWidth": "83",
    "imgMargin": "5px 0 0 -1px"
    },
    {
    "imgName": "img/brand--bridgestone.png",
    "href": "#",
    "imgAlt": "bridgestone",
    "imgWidth": "97",
    "imgMargin": "0 0 0 0"
    },
    {
    "imgName": "img/brand--continental.png",
    "href": "#",
    "imgAlt": "continental",
    "imgWidth": "77",
    "imgMargin": "5px 0 0 1px"
    },
    {
    "imgName": "img/brand--goofer.png",
    "href": "#",
    "imgAlt": "goofer",
    "imgWidth": "59",
    "imgMargin": "4px 0 0 3px"
  },
  {
    "imgName": "img/brand--avon.png",
    "href": "#",
    "imgAlt": "avon",
    "imgWidth": "77",
    "imgMargin": "0 0 0 0"
  },
  {
    "imgName": "img/brand--factory.png",
    "href": "#",
    "imgAlt": "factory",
    "imgWidth": "57",
    "imgMargin": "1px 0 0 1px"
  },
  {
    "imgName": "img/brand--pirelli.png",
    "href": "#",
    "imgAlt": "pirelli",
    "imgWidth": "61",
    "imgMargin": "1px 0 0 1px"
  },
  {
    "imgName": "img/brand--dunlop.png",
    "href": "#",
    "imgAlt": "dunlop",
    "imgWidth": "72",
    "imgMargin": "0 0 0 3px"
  }
  ];

console.log(options.length + " картинок");
  var ul = $(".jq--truebackstage");

  for (var i = 0; i < options.length; i++) {
    listItem[i] = $("<li>");
    listItem[i].addClass("jq--truebrand");
    listItem[i].css({
      display: "inline-block",
      margin: options[i].imgMargin,
      marginRight: "12px",
      float: "left"
    });

    img[i] = $("<img>");
    img[i].attr({
      src: options[i].imgName,
      alt: options[i].imgAlt
    });
    img[i].css({
      width: options[i].imgWidth,
      maxWidth: "97px"
    });

    ul.append(listItem[i]);
    listItem[i].append(img[i]);
    };
  
});
