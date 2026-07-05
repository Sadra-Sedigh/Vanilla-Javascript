gsap.registerPlugin(ScrollTrigger);
const track = document.querySelector("#portfolio-track");

gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth + 80),
  ease: "none",
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top top",
    end: () => "+=" + (track.scrollWidth - window.innerWidth),
    pin: true,
    scrub: 1,
    anticipatePin: 1,
  },
});
window.addEventListener("load", () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8,
    },
  });

  tl.from("#hero-title", {
    opacity: 0,
    y: 40,
  })
    .from(
      "#hero-text",
      {
        opacity: 0,
        y: 30,
      },
      "-=0.6",
    )
    .from(
      "#hero-stats p",
      {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.5",
    )
    .from(
      "#hero-image",
      {
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 0.9,
      },
      "-=0.8",
    );
});
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menu = document.getElementById("menu");

let collapsed = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 120 && !collapsed) {
    collapsed = true;

    const tl = gsap.timeline();

    tl.to(navbar, {
      width: 80,
      height: 80,
      borderRadius: "999px",
      background: "rgb(0 99 153 / 0.4)",
      backdropFilter: "blur(30px)",
      duration: 0.8,
      ease: "power3.inOut",
    })

      .to(
        navLinks,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
        },
        "<",
      )

      .set(navLinks, {
        display: "none",
      })

      .set(menu, {
        display: "flex",
      })

      .to(menu, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "back.out(2)",
      });
  }

  if (window.scrollY < 120 && collapsed) {
    collapsed = false;

    const tl = gsap.timeline();

    tl.to(menu, {
      opacity: 0,
      scale: 0,
      duration: 0.25,
    })

      .set(menu, {
        display: "none",
      })

      .set(navLinks, {
        display: "flex",
      })

      .to(navbar, {
        width: 480,
        height: 80,
        borderRadius: "20px",
        duration: 0.8,
        ease: "power3.inOut",
      })

      .to(
        navLinks,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
        },
        "-=.4",
      );
  }
});
const bubbles = document.querySelectorAll(".skill-bubble");

bubbles.forEach((bubble) => {
  gsap.to(bubble, {
    y: gsap.utils.random(-25, -10),
    x: gsap.utils.random(-8, 2),
    rotation: gsap.utils.random(-6, 6),

    duration: gsap.utils.random(2.5, 5),

    ease: "sine.inOut",

    repeat: -1,
    yoyo: true,

    delay: gsap.utils.random(0, 2),
  });
});
