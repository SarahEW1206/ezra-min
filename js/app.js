function navShrink() {

    const header = document.querySelector('header');
    const topnav = document.querySelector('.top-nav-bar');
    document.addEventListener("scroll", function () {
        if
        (window.pageYOffset > 70) {
            header.classList.add("white");
            topnav.style.top = "-40px";
        }
        else {
            header.classList.remove("white");
            topnav.style.top = "0";
        }
    });
};

navShrink();



