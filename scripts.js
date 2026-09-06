/* =========================================================
   SURYA VIGNESH PORTFOLIO
   SIMPLE + RELIABLE JAVASCRIPT
========================================================= */


/* =========================================================
   COPYRIGHT YEAR
========================================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar =
    document.getElementById("navbar");


function handleNavbar() {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavbar,
    { passive: true }
);


handleNavbar();


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenu && mobileNav) {


    mobileMenu.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("active");

            mobileNav.classList.toggle("open");

        }
    );


    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove("active");

                    mobileNav.classList.remove("open");

                }
            );

        }
    );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (!target) {

                    return;

                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 70;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const desktopLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    desktopLinks.forEach(
        function (link) {

            link.style.color = "";

            const href =
                link.getAttribute("href");


            if (
                href === "#" + currentSection
            ) {

                link.style.color =
                    "var(--white)";

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


updateActiveNavigation();


/* =========================================================
   SIMPLE REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-layout, .skills-grid, .project, .explore-grid, .direction, .contact-grid"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    }
);


/* =========================================================
   PROJECT VISUAL MOUSE EFFECT
========================================================= */

const project =
    document.querySelector(".project");


if (
    project &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {


    project.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                project.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                0.5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                0.5;


            project.style.transform =
                `
                perspective(1400px)
                rotateX(${y * -0.35}deg)
                rotateY(${x * 0.35}deg)
                `;

        }
    );


    project.addEventListener(
        "mouseleave",
        function () {

            project.style.transform =
                "perspective(1400px) rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "Surya Vignesh | ECE • AI • Computing"
);

console.log(
    "Portfolio loaded successfully."
);