// NAVBAR
let playOnce = true;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;

  // console.log(scrollValue);

  // IMG

  if (scrollValue > 45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  // Pop-up

  if (scrollValue > 85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});
// bonus

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
