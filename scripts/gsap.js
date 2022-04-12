document.addEventListener("DOMContentLoaded", () => {
  const areas = document.querySelector("#areas");
  const objetivos = document.querySelector("#objetivos");
  const nosotros = document.querySelector("#about-us");

  if (window.screen.width >= 991) {
    if (objetivos) {
      gsap.fromTo(
        ".info",
        1.2,
        { autoAlpha: 0, x: -300 },
        { autoAlpha: 1, x: 0 }
      );
      gsap.fromTo(
        ".image",
        1.2,
        { autoAlpha: 0, x: 300 },
        { autoAlpha: 1, x: 0, delay: 1 }
      );
    }
    if (nosotros) {
      gsap.fromTo(".info", 3.5, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.2 });
      gsap.fromTo(
        ".image",
        3.5,
        { autoAlpha: 0 },
        { autoAlpha: 1, delay: 0.2 }
      );
    }
  } else {
    if (objetivos) {
      gsap.fromTo(
        ".info",
        1.2,
        { autoAlpha: 0, y: 300 },
        { autoAlpha: 1, y: 0 }
      );
      gsap.fromTo(
        ".image",
        1.2,
        { autoAlpha: 0, y: -300 },
        { autoAlpha: 1, y: 0 }
      );
    }
    if (nosotros) {
      gsap.fromTo(".info", 2.5, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.5 });
      gsap.fromTo(
        ".image",
        2.5,
        { autoAlpha: 0 },
        { autoAlpha: 1, delay: 0.1 }
      );
    }
  }
  if (areas) {
    gsap.fromTo(
      ".info",
      1.2,
      { autoAlpha: 0, x: -300 },
      { autoAlpha: 1, x: 0, delay: 1 }
    );
    gsap.fromTo(
      ".image",
      1.2,
      { autoAlpha: 0, x: 300 },
      { autoAlpha: 1, x: 0 }
    );
  }
});
