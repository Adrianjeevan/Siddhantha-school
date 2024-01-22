import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const lefts = document.querySelectorAll(".left-img");

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

// gsap.from(".section-title", {
//     scrollTrigger: {
//       trigger: ".section-title",
//       start: "top 80%",
  
//       toggleActions: "play none none reverse",
//       // markers: true,
//     },
//     y: 0,
//     opacity: 0,
//     duration: 0.6,
//     delay:0,
//     stagger: 0.4,
  
//     ease: "power4.inOut",
//   });

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


  gsap.from(".aftr-img img", {
   
    y: 40,
    stagger:0.2,
    opacity: 0,
    duration: 1,
    scale: 0.9,
    ease: "power4.inOut",
  });


  gsap.from(".stu-rev", {
    scrollTrigger: {
      trigger: ".stu-rev",
      start: "top 80%",
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    y: 20,
    
    opacity: 0,
    scale: 0.9,
    duration:0.7,
   
  
  
    ease: "power4.inOut",
  });

  
  gsap.from(".par-rev", {
    scrollTrigger: {
      trigger: ".par-rev",
      start: "top 80%",
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    y: 20,
    
    opacity: 0,
    scale: 0.9,
    duration:0.7,
   
   
  
    ease: "power4.inOut",
  });

  gsap.from(".left-titles", {
    scrollTrigger: {
      trigger: ".left-titles",
      start: "top 80%",
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    x: -20,
    
    opacity: 0,
    
    duration:1,
    delay:0.1,
    stagger: 0.4,
  
    ease: "power4.inOut",
  });

  gsap.from(".right-titles", {
    scrollTrigger: {
      trigger: ".right-titles",
      start: "top 80%" ,
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    x: -20,
    
    opacity: 0,
    
    duration:1,
    delay:0.1,
    stagger: 0.4,
  
    ease: "power4.inOut",
  });

  gsap.from(".staff", {
    scrollTrigger: {
      trigger: ".staff",
      start: "top 80%" ,
  
      toggleActions: "play none none reverse",
      // markers: true,
    },
    y: 20,
    
    opacity: 0,
    
    duration:1,
    delay:0.1,
    stagger: 0,
    scale:0.9, 
  
    ease: "power4.inOut",
  });

  

  




