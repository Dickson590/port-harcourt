/* =========================
   DIGITAL SPACE
   JAVASCRIPT
========================= */


/* =========================
   1. MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu when a link is clicked */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================
   2. TYPING EFFECT
========================= */

const typingText = document.querySelector(".typing-text");

const messages = [
    "I build modern digital experiences.",
    "I create responsive websites.",
    // "I am learning JavaScript.",
    "Welcome to my Digital Space."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentMessage = messages[messageIndex];

    if (!deleting) {

        typingText.textContent =
            currentMessage.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentMessage.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentMessage.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex === messages.length) {
                messageIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 80;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================
   3. PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* Remove active from every button */

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        /* Add active to clicked button */

        button.classList.add("active");


        /* Get selected category */

        const filter = button.dataset.filter;


        /* Check every project */

        projectCards.forEach((project) => {

            const category =
                project.dataset.category;


            if (filter === "all" || category === filter) {

                project.classList.remove("hide");

            } else {

                project.classList.add("hide");

            }

        });

    });

});


/* =========================
   4. CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    /* Stop the page from refreshing */

    event.preventDefault();


    /* Get the input values */

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    /* Check if everything is filled */

    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    /* Display success message */

    formMessage.textContent =
        // Thanks ${name}! Your message has been received.;


    /* Clear the form */

    contactForm.reset();

});


/* =========================
   5. CURRENT YEAR
========================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* =========================
   6. NAVBAR SCROLL EFFECT
========================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 22, 0.97)";

    } else {

        header.style.background =
            "rgba(5, 8, 22, 0.85)";

    }

});


/* =========================
   7. SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .skill-card, .project-card, .about-content, .contact-container"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});