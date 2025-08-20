const btnMenuMob = document.querySelector("#btn-menu-mob");
const line1 = document.querySelector(".line-menumob-1");
const line2 = document.querySelector(".line-menumob-2");
const menuMobile = document.querySelector("#menu-mobile");
const htmlEl = document.documentElement;
const bodyEl = document.body;

let scrollY = 0;

btnMenuMob.addEventListener("click", () => {
  const opening = !menuMobile.classList.contains("active-menu-mob");

  line1.classList.toggle("active1");
  line2.classList.toggle("active2");
  menuMobile.classList.toggle("active-menu-mob");

  if (opening) {
    // Saves the current position and fixes the body in that position
    scrollY = window.scrollY || window.pageYOffset;
    bodyEl.style.top = `-${scrollY}px`;
    htmlEl.classList.add("no-scroll");
    bodyEl.classList.add("no-scroll");
  } else {
    // Unlocks and restores position
    htmlEl.classList.remove("no-scroll");
    bodyEl.classList.remove("no-scroll");
    bodyEl.style.top = "";
    window.scrollTo(0, scrollY);
  }
});
