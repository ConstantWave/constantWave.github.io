document.addEventListener("DOMContentLoaded", function () {
  var home = document.querySelector(".home");
  if (!home) return;

  var speed = 0.5;
  var homeTop = home.offsetTop;
  var ticking = false;

  function update() {
    ticking = false;
    var scrollY = window.scrollY || window.pageYOffset;
    var offset = (scrollY - homeTop) * speed;
    home.style.setProperty("--parallax-offset", Math.round(offset) + "px");
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  function onResize() {
    homeTop = home.offsetTop;
    onScroll();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  update();
});
