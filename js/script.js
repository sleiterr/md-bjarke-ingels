//*! BURGER-BTTN

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".burger-btn");
  const navUL = document.querySelector(".nav-list");
  const bars = document.querySelectorAll(".bar");

  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
    bars.forEach((element) => {
      element.classList.toggle("active");
    });
  });

  navUL.addEventListener("click", () => {
    navUL.classList.remove("show");
    bars.forEach((element) => {
      element.classList.remove("active");
    });
  });
});

//*! Sticky navigation */

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  /* Intersection Observer API */ function (entries) {
    const ent = entries[0];
    // console.log(ent);
    // console.log("RootMargin:", "-100px");
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewpoert
    root: null,
    threshold: 0,
    rootMargin: "-160px",
  }
);
obs.observe(sectionHeroEL);

//*! Smooth scrolling animation */

const allLinks = document.querySelectorAll("a");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href !== "#" && !href.startsWith("#")) {
      return;
    }

    e.preventDefault();

    // Scrol back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      // console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//! check screen size for "items-2" [data-aos="fade-left"]AOS

document.addEventListener("DOMContentLoaded", function () {
  const items2 = document.querySelector(".items-2");

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      items2.setAttribute("data-aos", "fade-left");
    } else {
      items2.removeAttribute("data-aos");
    }
    AOS.refresh();
  }
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

