function loading() {
  var t1 = gsap.timeline();
  t1.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  t1.from("#yellow2", {
    top: "100%",
    delay: 0.6,
    duration: 0.6,
    ease: "expo.out",
  },"anim");

  // to make two things work together giving "anim"
  t1.to("#loader h1", {
    delay: 0.6,
    duration: 0.6,
    color: "black",
  },"anim");

  t1.to("#loader", {
    display: "none",
    opacity: 0,
  });
}

loading();

const loco = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  document.querySelector("#backToTop").addEventListener("click", () => {
    scroll.scrollTo(0);
  });
  var page2 = document.querySelector("#page2");
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (elem) {
    console.log(elem);
    elem.addEventListener("mouseenter", function () {
      var bgimg = elem.getAttribute("data-img"); //getting custome attributes
      console.log(bgimg);
      page2.style.backgroundImage = `url(${bgimg})`;
      // page2.style.background = "red";
    });
  });
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

// changing nav color when page2 is inview, using locomotive js
const locoNavChangeColor = () => {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  scroller.on("scroll", (value, way, obj) => {
    console.log("value", value, "way", way, "obj", obj);
    if (value.scroll.y >= 880 && value.scroll.y <= 1760) changeColorTo("#ffffff");
    else changeColorTo("#000000");
  });

  function changeColorTo(givenColor) {
    let svg = document.querySelector("#nav svg path");
    svg.style.fill = givenColor;
  }
};
locoNavChangeColor();
