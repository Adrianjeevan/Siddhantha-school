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
  delay: 0,
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
  delay: 0,
  stagger: 0.4,

  ease: "power4.inOut",
});

gsap.from(".aftr-img img", {
  y: 40,
  stagger: 0.2,
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
  duration: 0.7,

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
  duration: 0.7,

  ease: "power4.inOut",
});

gsap.from(".staff", {
  scrollTrigger: {
    trigger: ".staff",
    start: "top 80%",

    toggleActions: "play none none reverse",
    // markers: true,
  },
  y: 50,

  opacity: 0,

  duration: 1,
  delay: 0.1,
  stagger: 0,
  scale: 0.9,

});

gsap.from(".pagebanner .left", {
  scrollTrigger: {
    trigger: ".pagebanner .left",
    start: "top 80%",

    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: -20,

  opacity: 0,

  duration: 1,
  delay: 0.1,

  ease: "power4.inOut",
});

gsap.from(".pagebanner .right", {
  scrollTrigger: {
    trigger: ".pagebanner .right",
    start: "top 80%",

    toggleActions: "play none none reverse",
    // markers: true,
  },
  x: 20,

  opacity: 0,

  duration: 1,
  delay: 0.1,

  ease: "power4.inOut",
});

gsap.from(".exp-left", {
  scrollTrigger: {
    trigger: ".exp-left",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: -100,

  opacity: 0,

  duration: 1,
});

gsap.from(".top-anime div", {
  scrollTrigger: {
    trigger: ".top-anime div",
    start: "top 80%",

    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.4,

  duration: 1,
});


gsap.from(".network-slide", {
  scrollTrigger: {
    trigger: ".network-slide",
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  
  duration: 1,
  
  delay: 0,
});



gsap.from(".abouts", {
  scrollTrigger: {
    trigger: ".abouts", 
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  
  duration: 1,
  
  delay: 0,
});



gsap.from(".course-content", {
 
  y: 100,

  opacity: 0,
  stagger: 0.2,
  
  duration: 1,
  
  delay: 0,  
});  

gsap.from(".contact-card", {

  
  y: 100,

  opacity: 0,
  stagger: 0.2,
  
  duration: 1,
  
  delay: 0,
});





gsap.from(".forms", {
  scrollTrigger: {
    trigger: ".forms", 
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  
  duration: 1,
  
  delay: 0,
});

gsap.from(".map", {
  scrollTrigger: {
    trigger: ".map", 
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  scale:0.9,
  duration: 1,
  
  delay: 0,
});



gsap.from(".admission", {
  scrollTrigger: {
    trigger: ".admission", 
    start: "top 80%",
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  stagger: 0.2,
  scale:0.9,
  duration: 1,
  
  delay: 0,
});



const lefts = document.querySelectorAll(".zigzag .left-img"); 


gsap.from(".l1", {
  scrollTrigger: {
    trigger: ".l1", 
    start: "top 80%",
    stagger: 0.2,
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: 100,

  opacity: 0,
  
  scale:0.9,
  duration: 1,
  
  delay: 0,
});


gsap.from(".l2", {
  scrollTrigger: {
    trigger: ".l2", 
    start: "top 80%",
    stagger: 0.2,
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: 100,

  opacity: 0,
  
  scale:0.9,
  duration: 1,
  
  delay: 0,
});

gsap.from(".l3", {
  scrollTrigger: {
    trigger: ".l3", 
    start: "top 80%",
    stagger: 0.2,
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  x: 100,

  opacity: 0,
  
  scale:0.9,
  duration: 1,
  
  delay: 0,
});




gsap.from(".r1", {
  scrollTrigger: {
    trigger: ".r1", 
    start: "top 80%",
    stagger: 0.2,
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  
  scale:0.9,
  duration: 1,
  
  delay: 0,
});
gsap.from(".r2", {
  scrollTrigger: {
    trigger: ".r2", 
    start: "top 80%",
    stagger: 0.2,
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  
  scale:0.9,
  duration: 1,
  
  delay: 0,
});
gsap.from(".r3", {
  scrollTrigger: {
    trigger: ".r3", 
    start: "top 80%",
    stagger: 0.2,
  
    toggleActions: "play none none reverse",

    // markers: true,
  },
  y: 100,

  opacity: 0,
  
  scale:0.9,
  duration: 1,
  
  delay: 0,
});



