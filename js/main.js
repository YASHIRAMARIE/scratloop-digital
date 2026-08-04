/* ===================================
   SCRATLOOP DIGITAL
   MAIN JAVASCRIPT
=================================== */


/* ==========================
   MOBILE MENU
========================== */

document.addEventListener("DOMContentLoaded", () => {


    const nav = document.querySelector("nav ul");


    if (nav) {


        const menuButton = document.createElement("button");


        menuButton.className = "menu-toggle";


        menuButton.innerHTML = "☰";


        document.querySelector("nav").appendChild(menuButton);



        menuButton.addEventListener("click", () => {


            nav.classList.toggle("active");


            menuButton.classList.toggle("open");


        });



        nav.querySelectorAll("a").forEach(link => {


            link.addEventListener("click", () => {


                nav.classList.remove("active");


            });


        });


    }



/* ==========================
   SCROLL ANIMATION
========================== */


const animatedElements = document.querySelectorAll(
    ".card, .project, .hero-stats div, .contact"
);



const observer = new IntersectionObserver(
    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting){


                entry.target.classList.add("show");


                observer.unobserve(entry.target);


            }


        });


    },
    {
        threshold:0.15
    }
);



animatedElements.forEach(element => {


    element.classList.add("hidden-animation");


    observer.observe(element);


});





/* ==========================
   HEADER EFFECT ON SCROLL
========================== */


const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


});





/* ==========================
   CURRENT YEAR FOOTER
========================== */


const year = document.querySelector("#year");


if(year){


    year.textContent = new Date().getFullYear();


}





/* ==========================
   SMOOTH SCROLL OFFSET
========================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});



});
