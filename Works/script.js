function loading(){
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
