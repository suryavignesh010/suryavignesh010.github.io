/* =========================================================
   SURYA VIGNESH — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            menuBtn.textContent = "✕";

            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuBtn) {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* ================= COPYRIGHT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

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

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-main, " +
    ".about-stats, " +
    ".skill-card, " +
    ".featured-project, " +
    ".explore-item, " +
    ".direction-inner, " +
    ".contact-grid"
);

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* ================= GITHUB LINKS ================= */

const githubLinks =
    document.querySelectorAll(
        'a[href*="github.com"]'
    );

githubLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening GitHub project:",
            link.href
        );

    });

});


/* ================= EMAIL LINKS ================= */

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );

emailLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening email:",
            link.href
        );

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        "#navMenu a"
    );

if (
    "IntersectionObserver" in window &&
    sections.length > 0
) {

    const activeObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.getAttribute("id");

                        navigationLinks.forEach((link) => {

                            link.classList.remove(
                                "active-link"
                            );

                            if (
                                link.getAttribute("href") ===
                                `#${currentId}`
                            ) {

                                link.classList.add(
                                    "active-link"
                                );

                            }

                        });

                    }

                });

            },

            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }

        );


    sections.forEach((section) => {

        activeObserver.observe(section);

    });

}


/* ================= NAVBAR SCROLL EFFECT ================= */

const header =
    document.querySelector("header");

if (header) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 50) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        },
        { passive: true }
    );

}


/* ================= PROJECT LINK CHECK ================= */

const projectLinks =
    document.querySelectorAll(
        'a[href*="SmartTourism"]'
    );

projectLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening Smart Tourism project:"
        );

        console.log(
            "https://github.com/suryavignesh010/SmartTourism"
        );

    });

});


/* ================= KEYBOARD ACCESSIBILITY ================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navMenu &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        if (menuBtn) {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    }

});


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cSurya Vignesh Portfolio",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "ECE • AI • Computer Vision • Linux • HPC • GPU Computing"
);

console.log(
    "GitHub: https://github.com/suryavignesh010/SmartTourism"
);