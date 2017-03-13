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

  var $img = [];
  var $listItem = [];

  var options = [
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

  function trueMoveLeft () {
    var $img = $(".jq--trueImg");
    var $listItem = $(".jq--truebrand");
    console.log($img[a]);
    $img[a].appendTo($listItem[a]);
    $a.remove();
    var $elem = $(".jq--truebrand:first");
    var $clone = $elem.clone();
    var width = +($elem.css("width").slice(0, -2));
    var left = +($elem.css("margin-left").slice(0, -2));
    left -= (width + 12);
    $clone.appendTo($(".jq--truebackstage"));
    $elem.animate({marginLeft:  left}, 500);
    setTimeout(function () {
      $elem.remove();
    }, 501);

  };

  function trueMoveRight() {
    var $clone = $(".jq--truebrand:last").clone();
    var width = +($(".jq--truebrand:last").css("width").slice(0, -2));
    var left = +($(".jq--truebrand:last").css("margin-left").slice(0, -2));
    var cloneLeft = -(width + 12);
    $clone
    .css({marginLeft: cloneLeft})
    .insertBefore($(".jq--truebrand:first"));

    var $elem = $(".jq--truebrand:first");
    $elem.animate({marginLeft:  left}, 500);
    setTimeout(function () {
      $(".jq--truebrand:last").remove();
    }, 501);
  };

console.log(options.length + " картинок");

  var div = $(".jq--truescene");
  var l = options.length;
  var a = (Math.ceil(l / 2) - 1);
  var w = +(options[a].imgWidth.slice(0, -2));
  var arrowWidth = ((l * 109 - w) / 2);
  var ul = $(".jq--truebackstage");

  for (var i = 0; i < options.length; i++) {
    $listItem[i] = $("<li>")
    .addClass("jq--truebrand")
    .css({
      display: "inline-block",
      margin: options[i].imgMargin,
      marginRight: "12px",
      // float: "left"
    });

    $img[i] = $("<img>")
    .attr({
      src: options[i].imgName,
      alt: options[i].imgAlt
    })
    .addClass("jq--trueImg")
    .css({
      width: options[i].imgWidth,
      maxWidth: "97px"
    });

    ul.append($listItem[i]);
    $listItem[i].append($img[i]);
  };

  var $img = $(".jq--trueImg");
  var $a = $("<a>")
  .addClass("jq--trueLink")
  .attr({href: options[a].href})
  .css({
    display: "inline-block",
    border: "1px solid #213a4d",
  })
  .appendTo($listItem[a])
  .append($img[a]);

  console.log(a);
  $("<div>")
    .addClass("jq--trueArrowLeft")
    .css({
      position: "absolute",
      margin: "-52px 0 0 1px",
      height: "27px",
      width: (arrowWidth),
      cursor: "pointer"
    })
    .on("click", trueMoveLeft)
    .insertAfter(div);

  $("<div>")
    .addClass("jq--trueArrowRight")
    .css({
      position: "absolute",
      margin: "-52px 0 0 0",
      marginLeft: (arrowWidth + w + 12),
      height: "27px",
      width: (arrowWidth),
      cursor: "pointer"
    })
    .on("click", trueMoveRight)
    .insertAfter(div);


});
