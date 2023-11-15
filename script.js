const hamburger = document.querySelector(".hamburger"),
    navContainer = document.querySelector(".navlists"),
    navLink = document.querySelectorAll(".navlists a"),
    html = document.querySelector("html");

window.addEventListener("load", () => {
    //add active
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navContainer.classList.toggle("active-nav");
        html.classList.toggle("html-scroll");
    })

    //remove active
    navLink.forEach(e => {
        e.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navContainer.classList.remove("active-nav");
            html.classList.remove("html-scroll");
        })
    });

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
        origin: 'left',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    sr.reveal('.shop-now-section, .latest-section, .gallery-section, .popular-items-section, .video-section, .blog-section, .pages-section, #contact ', {});
});

