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
// Шаблон
var goods = [
  {
    brandname: "Goodyear",
    model: "Ultra Grip Extreme",
    imagename: "img/11.png",
    price: "90,00"
  },
  {
    brandname: "Nokian",
    model: "Hakkapeliitta R",
    imagename: "img/12.png",
    price: "115,00"
  },
  {
    brandname: "Hankook",
    model: "K 708 155/65 R14",
    imagename: "img/13.png",
    price: "393,00"
  },
  {
    brandname: "Goodyear",
    model: "Ultra Grip Extreme",
    imagename: "img/11.png",
    price: "90,00"
  },
  {
    brandname: "Nokian",
    model: "Hakkapeliitta R",
    imagename: "img/12.png",
    price: "115,00"
  },
  {
    brandname: "Hankook",
    model: "K 708 155/65 R14",
    imagename: "img/13.png",
    price: "393,00"
  },
  {
    brandname: "Goodyear",
    model: "Ultra Grip Extreme",
    imagename: "img/11.png",
    price: "90,00"
  },
  {
    brandname: "Nokian",
    model: "Hakkapeliitta R",
    imagename: "img/12.png",
    price: "115,00"
  },
  {
    brandname: "Hankook",
    model: "K 708 155/65 R14",
    imagename: "img/13.png",
    price: "393,00"
  }
];

_.forEach(goods, (item) => {
var html = $(".content--template").html();
var tmpl = _.template(html);
var $content = tmpl(item);
$(".content").append($content);
});



//  Переменная для модуля
  var $options = [
    {
    "imgName": "img/brand--toyo.png",
    "href": "#",
    "imgAlt": "toyo",
    "imgWidth": "83px",
    "imgMargin": "5px 0 0 -1px"
    },
    {
    "imgName": "img/brand--bridgestone.png",
    "href": "#",
    "imgAlt": "bridgestone",
    "imgWidth": "97px",
    "imgMargin": "0 0 0 0"
    },
    {
    "imgName": "img/brand--continental.png",
    "href": "#",
    "imgAlt": "continental",
    "imgWidth": "77px",
    "imgMargin": "5px 0 0 1px"
    },
    {
    "imgName": "img/brand--goofer.png",
    "href": "#",
    "imgAlt": "goofer",
    "imgWidth": "59px",
    "imgMargin": "4px 0 0 3px"
    },
    {
    "imgName": "img/brand--avon.png",
    "href": "#",
    "imgAlt": "avon",
    "imgWidth": "77px",
    "imgMargin": "0 0 0 0"
    },
    {
    "imgName": "img/brand--factory.png",
    "href": "#",
    "imgAlt": "factory",
    "imgWidth": "57px",
    "imgMargin": "1px 0 0 1px"
    },
    {
    "imgName": "img/brand--pirelli.png",
    "href": "#",
    "imgAlt": "pirelli",
    "imgWidth": "61px",
    "imgMargin": "1px 0 0 1px"
    },
    {
    "imgName": "img/brand--dunlop.png",
    "href": "#",
    "imgAlt": "dunlop",
    "imgWidth": "72px",
    "imgMargin": "0 0 0 3px"
    }
  ];

$(".jq--truescene").trueCarouselPlugin();
});
