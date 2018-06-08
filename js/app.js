function navShrink() {

    const header = document.querySelector('header')
    document.addEventListener("scroll", function () {
        if
        (window.pageYOffset > 100) {
            header.classList.add("white");
        }
        else {
            header.classList.remove("white");
        }
    });
};

navShrink();
