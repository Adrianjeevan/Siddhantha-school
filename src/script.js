import { tns } from "tiny-slider/src/tiny-slider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Fancybox } from "@fancyapps/ui";

import { Carousel } from "@fancyapps/ui";

Fancybox.bind();

let headerHeight = document.querySelector("header").offsetHeight;

// set css variable header-height to the height of <header>
document.documentElement.style.setProperty(
  "--header-height",
  headerHeight + "px"
);
if (document.querySelector(".first-fold-wrapper")) {
  if (window.innerWidth < 768) {
    document.querySelector("header").nextElementSibling.style.marginTop =
      headerHeight + "px";
    // add headerHeight to .first-fold
    document.querySelector(".first-fold-wrapper").style.marginTop =
      headerHeight + "px";
  } else {
    document.querySelector(".first-fold-wrapper").style.marginTop =
      headerHeight + "px";
    document.querySelector("header").nextElementSibling.style.marginTop =
      headerHeight + "px";
  }
}


$(document).ready(function () {
  var heroSlider = $(".hero-slider");
  heroSlider.owlCarousel({
    loop: true,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dots: true,
    navText: ["<", ">"],

    margin: 0,
    autoplay: true,
    nav: true,
  });

  heroSlider.on("changed.owl.carousel", function (event) {
    var item = event.item.index - 2;
    $("h3").removeClass("animate__animated animate__zoomInLeft");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("h3")
      .addClass("animate__animated animate__zoomInLeft");

    $("h2").removeClass("animate__animated animate__zoomInLeft");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("h2")
      .addClass("animate__animated animate__zoomInLeft");

    $("a").removeClass("animate__animated animate__zoomInLeft");
    $(".owl-item")
      .not(".cloned")
      .eq(item)
      .find("a")
      .addClass("animate__animated animate__zoomInLeft");
  });
});









if (document.querySelector(".events-slider")) {
  var eventslider = tns({
    container: ".events-slider",
    items: 3,
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    gutter: 0,
    mouseDrag: true,

    controlsContainer: ".event-controls",
    autoplayButton: false,
    autoplayButtonOutput: false,
    nav: false,
    animateDelay: 700,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 0,
        items: 3,
      },
    },
  });

  gsap.utils.toArray(".latest-slide").forEach(function (slide, index) {
    gsap.from(slide, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        scale: 0.9,

        // For debugging, you can remove this in production
        toggleActions: "play none none reverse",
        stagger: 0.4, // Stagger based on slide index
      },
    });
  });


}


if (document.querySelector(".messages-slider")) {
  var eventslider = tns({
    container: ".messages-slider",
    items: 3,
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    gutter: 20,
    mouseDrag: true,
    controlsContainer:".founder-controls", 
   
    autoplayButton: false,
    autoplayButtonOutput: false,
    nav: false,
    animateDelay: 700,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 3,
      },
    },
  });

  


}








if (document.querySelector(".mission-grid")) {
  var slider = tns({
    container: ".mission-grid",
    items: 3,
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    gutter: 20,
    mouseDrag: true,

    autoplayButton: false,
    autoplayButtonOutput: false,
    nav: false,
    animateDelay: 700,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 20,
        items: 3,
      },
    },
  });

  gsap.utils.toArray(".mission-grid .wrapper ").forEach(function (slide, index  ) {
    gsap.from(slide, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        scale: 0.9,

        // For debugging, you can remove this in production
        toggleActions: "play none none reverse",
        stagger: 0.4 * index // Stagger based on slide index
      },
    });
  });
}



if (document.querySelector(".course-slider")) {
  var slider = tns({
    container: ".course-slider",
    items: 4,
    slideBy: 1,
    autoplay: false,
    edgePadding: 20,
    gutter: 40,
    speed: 200,
    controls: true,
    controlsContainer: ".controls-container2",
    nav: false,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 4,
        gutter: 40,
      },
    },
  });
}

if (document.querySelector(".safety-slider")) {
  var slider = tns({
    container: ".safety-slider",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: ".controls-containers2",
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10,
      },
    },
  });
}

if (document.querySelector(".facility-slider")) {
  var slider = tns({
    container: ".facility-slider",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: ".controls-containers",
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10,
      },
    },
  });
}

if (document.querySelector(".gallery-slider")) {
  var galleryslider = tns({
    container: ".gallery-slider",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls: true,
    controlsContainer: ".gallery-controls",
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 1,
      },
      900: {
        items: 1,
        gutter: 10,
      },
    },
  });

  galleryslider.events.on("indexChanged", function (info) {
    // Target the current active slide link
    var activeLink = $(".gallery-slider .tns-slide-active .slide-link");

    // GSAP animation
    gsap.from(".gallery-slider .tns-slide-active .slide-link", {
      y: 10,
      stagger: 0.2,
      opacity: 0,
      duration: 0.7,
      scale: 0.9,
      ease: "power4.inOut",
    });
  });


}

if (document.querySelector(".journey-one")) {
  var slider = tns({
    container: ".journey-one",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsContainer: ".controls-container-one",
    controls: true,

    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 1,
      },
      900: {
        items: 1,
        gutter: 10,
      },
    },
  });
}

if (document.querySelector(".educator")) {
  var slider = tns({
    container: ".educator",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsContainer: ".educator-controls",
    controls: true,

    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 1,
        gutter: 10,
      },
    },
  });
}

if (document.querySelector(".testimonials")) {
  var slider = tns({
    container: ".testimonials",

    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    // navContainer: ".nav-container",
    // navAsThumbnails: false,
    nav: false,
    controlsContainer: ".testimonial-controls",
    autoplayButton: false,
    autoplayButtonOutput: false,

    controls: true,
    fixedWidth: false,
    responsive: {
      0: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      640: {
        edgePadding: 0,
        gutter: 0,
        items: 1,
      },
      700: {
        gutter: 30,
        items: 2,
      },
      900: {
        items: 3,
        gutter: 10,
      },
    },
  });


  gsap.utils.toArray(".testimonials .slide").forEach(function (slide, index) {
    gsap.from(slide, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: slide,
        start: "top 80%",
        scale: 0.9,

        // For debugging, you can remove this in production
        toggleActions: "play none none reverse",
        stagger: 0.4 * index // Stagger based on slide index
      },
    });
  });
}

if (document.querySelector(".vision-grid")) {
  var slider = tns({
    container: ".vision-grid",
    items: 1,
    slideBy: 1,
    autoplay: false,
    edgePadding: 0,
    navAsThumbnails: true,
    nav: true,
    gutter: 20,
    mode: "gallery",
    animateIn: "jello",
    loop: false,
    controls: false,

    navContainer: ".nav-vision",
    autoplayButton: false,
    autoplayButtonOutput: false,
  });
}

$(document).ready(function () {
  new PureCounter({
    selector: ".purecounter",
    start: 0,
    end: 100,
    duration: 2,
    delay: 10,
    once: true,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: false,
  });
});

// amenities

// amenities

// gsap.from(".fadein", {
//   scrollTrigger: {
//     trigger: ".fadein",
//     start: "top 80%",

//     toggleActions: "play none none reverse",
//     // markers: true,
//   },
//   y: 20,
//   opacity: 0,
//   duration: 1.5,
//   stagger: 0.4,

//   ease: "power4.inOut",
// });
var bigVideos = document.querySelectorAll(".bigvideo");

bigVideos.forEach(function (videos) {
  var container = videos.closest(".video-wrapper");
  var image = container.querySelector(".imgs");

  //   container.addEventListener("click", function () {
  //     image.style.display = "none";
  //     if (videos.currentTime === 0) {
  //       videos.play();
  //     } else {
  //       videos.pause();
  //     }
  //   });

  container.addEventListener("click", function () {
    if (videos.paused || videos.ended || videos.currentTime === 0) {
      // If video is paused or ended, play it
      image.style.display = "none";
      videos.play();
    } else if (videos.currentTime !== 0 || videos.paused) {
      videos.pause();
    }
  });

  //   container.addEventListener('mouseleave', function() {
  //     // image.style.display = 'block';
  //     videos.pause();
  //     // videos.currentTime = 0;
  //     // videos.play();
  //   });
});
