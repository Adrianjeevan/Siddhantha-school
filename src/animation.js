import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".fadein", {
  scrollTrigger: {
    trigger: ".fadein",
    start: "top 80%",

    toggleActions: "play none none reverse",
    // markers: true,
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay:0,
  stagger: 0.4,

  ease: "power4.inOut",
});

gsap.from(".section-title", {
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 80%",
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    y: 0,
    opacity: 0,
    duration: 0.6,
    delay:0,
    stagger: 0.4,
  
    ease: "power4.inOut",
  });

gsap.from(".highlight-slide", {
    scrollTrigger: {
      trigger: ".highlight-slide",
      start: "top 80%",
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    y: 20,
    opacity: 0,
    duration: 1,
    delay:0,
    stagger: 0.4,
  
    ease: "power4.inOut",
  });


