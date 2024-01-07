

window.addEventListener('scroll', () => {
    let scrollPosition = ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;
    // console.log(scrollPosition);

    if (scrollPosition > 20) {
       chef.style = "left: 42.5%; transition: 1s ease-in-out;";
    }
});
