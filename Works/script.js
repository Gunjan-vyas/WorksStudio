function loading() {
  var t1 = gsap.timeline();
  t1.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  t1.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.6,
      ease: "expo.out",
    },
    "anim"
  );

  // to make two things work together giving "anim"
  t1.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.6,
      color: "black",
    },
    "anim"
  );

  t1.to("#loader", {
    display: "none",
    opacity: 0,
  });
}

loading();

// Function to scroll to a section
function scrollToSection(sectionId) {
  scroll.scrollTo(document.querySelector(sectionId));
}

const loco = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  document.querySelector("#backToTop").addEventListener("click", () => {
    scroll.scrollTo(0);
    // scroll.scrollTo(document.querySelector("#page2"));
  });
  var page2 = document.querySelector("#page2");
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (elem) {
    console.log(elem);
    elem.addEventListener("mouseenter", function () {
      var bgimg = elem.getAttribute("data-img"); //getting custome attributes
      console.log(bgimg);
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });

  // changing nav color when page2 is inview, using locomotive js
  scroll.on("scroll", (value, way, obj) => {
    // console.log("value", value, "way", way, "obj", obj);
    if (value.scroll.y >= 788 && value.scroll.y <= 1576) changeColorTo("#ffffff");
    else changeColorTo("#000000");
  });

  function changeColorTo(givenColor) {
    let svg = document.querySelector("#nav svg path");
    svg.style.fill = givenColor;
  }
};
loco();

// changing nav color when page2 is inview, using GSAP Scroll Trigger, not using becoz loco and gsap scroll tirgger not working together.
// const scrollToTriggerNavColorChange = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   ScrollTrigger.create({
//     trigger: "#page2",
//     start: "top 100px",
//     end: "bottom 100px",
//     markers: true,
//     animation: gsap.to("svg path", { fill: "#ffffff" }),
//     toggleActions: "restart reverse restart reverse",
//     // toggleActions: "onEnter onLeave onEnterBack onLeaveBack", for reference https://codepen.io/GreenSock/pen/GREbQXW
//     // scrub: true,
//   });
// };

// scrollToTriggerNavColorChange();


// using viewport to check exact coordinates of a section using in value.scroll.y
// function isInViewport(element) {
//   console.log("chala");
//   var rect = element.getBoundingClientRect();
//   var html = document.documentElement;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || html.clientHeight) &&
//     rect.right <= (window.innerWidth || html.clientWidth)
//   );
// }

// window.addEventListener("scroll", () => {
//   console.log("chalo");
//   console.log("wow", isInViewport(document.querySelector("#page2")));
// });
