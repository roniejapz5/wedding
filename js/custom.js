$(document).ready(function () {
  /*------------------------------ Page Scrolling ----------------------*/

  $(".page-scroll a").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  /*------------------------------ Tooltips ----------------------*/

  // $(".tooltips").tooltip();

  /*------------------------------ Voice Control -----------------*/
  // if (annyang) {
  //   var commands = {
  //     home: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#page-top").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     about: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#about").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     family: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#family").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     moments: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#moments").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     favourites: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#favourites").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     blog: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#blog").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     contact: function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $("#contactus").offset().top,
  //         },
  //         2000
  //       );
  //     },

  //     "Purchase now": function () {
  //       window.location = "http://www.themeforest.com";
  //     },
  //   };

  //   annyang.addCommands(commands);
  //   annyang.start();
  // }

  /*------------------------------ Bootstrap Carousel ----------------------*/

  $("#myCarousel").carousel({
    interval: 10000, //changes the speed
    pause: "false"
  });
  //Bootstrap Carousel Progressbar

  $("#progressbar").progressbar({
    value: 1
  });
  $("#progressbar > .ui-progressbar-value").animate(
    {
      width: "100%"
    },
    10000
  );

  $("#myCarousel").bind("slid.bs.carousel", function (e) {
    $("#progressbar > .ui-progressbar-value").finish();
    $("#progressbar > .ui-progressbar-value").animate(
      {
        width: "0%"
      },
      0
    );
    $("#progressbar > .ui-progressbar-value").animate(
      {
        width: "100%"
      },
      10000
    );
  });

  /*------------------------------ Masonry Blog -----------------*/

  // var $container = $("#blogs");
  // // initialize
  // $container.masonry({
  //   itemSelector: ".blog",
  // });
  // // initialize Masonry after all images have loaded
  // $container.imagesLoaded(function () {
  //   $container.masonry();
  // });

  /*------------------------------ OWL Carousel -----------------*/

  $("#owl-man-family").owlCarousel({
    items: 2,
    lazyLoad: true
  });

  $("#owl-woman-family").owlCarousel({
    items: 2,
    lazyLoad: true
  });

  $("#owl-moments").owlCarousel({
    items: 4,
    pagination: false,
    autoPlay: true,
    lazyLoad: true,
    center: true,
    loop: true
  });

  $("#owl-common").owlCarousel({
    items: 3,
    lazyLoad: true
  });

  $("#owl-blog-post-gallery").owlCarousel({
    singleItem: true,
    autoPlay: true,
    lazyLoad: true
  });

  /*------------------------------ Sticky Navigation -----------------*/

  $(".topbar-nav").sticky({ topSpacing: 0 });

  /*------------------------------ Magnific POP -----------------*/

  $(".popup-vimeo").magnificPopup({
    type: "iframe"
  });
  $(".popup-image").magnificPopup({
    type: "image",
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  /*------------------------------ Waypoint Counting -----------------*/

  $("#startcounting").waypoint(function () {
    $(".counts").countTo();
    $("#startcounting").waypoint("disable");
  });

  /*------------------------------ Parallax Effect -----------------*/

  $(".parallax-section").each(function () {
    $(this).parallax("50%", 0.5);
  });

  /*------------------------------ WOW Script ----------------------*/

  new WOW().init();

  /*------------------------------ Twitter Feeds -----------------*/

  // $(".footer-tweet").tweet({
  //   join_text: false,
  //   username: "envato", // Username
  //   modpath: "./js/twitter/",
  //   avatar_size: false,
  //   count: 3,
  //   template: "{text} <br> {time}",
  //   loading_text: "loading twitter feed...",
  //   seconds_ago_text: "%d seconds ago",
  //   a_minutes_ago_text: "a minute ago",
  //   minutes_ago_text: "%d minutes ago",
  //   a_hours_ago_text: "an hour ago",
  //   hours_ago_text: "%d hours ago",
  //   a_day_ago_text: "a day ago",
  //   days_ago_text: "%d days ago",
  //   view_text: "view tweet on twitter",
  // });

  // $(".footer-tweet ul").owlCarousel({ singleItem: true });

  /*------------------------------ Ajax Contact Form -----------------*/

  // $("#submit").click(function () {
  //   var data = $("#contact").serialize();
  //   $.ajax({
  //     type: "POST",
  //     url: "ajax/sendemail.php",
  //     data: data,
  //     success: function (q) {
  //       $("#ContactFormDiv").html(q);
  //     },
  //   });
  //   return false;
  // });
  // return false;
});

/*------------------------------ Count Up ----------------------*/

setInterval(function () {
  var timespan = countdown(new Date("09/28/2024 16:00"), new Date());
  var div = document.getElementById("time");
  var div2 = document.getElementById("married");
  div.innerHTML =
    "<div><span>Years</span>" +
    timespan.years +
    "</div>" +
    "<div><span>Months</span>" +
    timespan.months +
    "</div>" +
    "<div><span>Days</span>" +
    timespan.days +
    "</div>" +
    "<div><span>Hours</span>" +
    timespan.hours +
    "</div>" +
    "<div><span>Minutes</span>" +
    timespan.minutes +
    "</div>" +
    "<div><span>Seconds</span>" +
    timespan.seconds +
    "</div>";

  div2.innerHTML =
    timespan.months +
    " months, " +
    timespan.days +
    " days, " +
    timespan.hours +
    " hours, " +
    timespan.minutes +
    " minutes, " +
    timespan.seconds +
    " seconds";
}, 1000);

/*------------------------------ Tooltips ----------------------*/

// $.widget.bridge("uitooltip", $.ui.tooltip); // Resolve name collision between jQuery UI and Bootstrap

/*------------------------------ Preloader ----------------------*/

$(window).load(function () {
  $(".spinner").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
  $("body").delay(350).css({ overflow: "visible" });

  const musicControl = $("#music-control");
  const backgroundMusic = $("#background-music")[0];

  $(document).one("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicControl.html('<i class="fa fa-pause"></i>');
    }
  });

  musicControl.on("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicControl.html('<i class="fa fa-pause"></i>');
    } else {
      backgroundMusic.pause();
      musicControl.html('<i class="fa fa-play"></i>');
    }
  });
});

/*------------------------------ Collapse the navbar on scroll ----------------------*/

$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

/*------------------------------ Background Video ----------------------*/

document.getElementById("bgvideo").width = document.body.offsetWidth;
