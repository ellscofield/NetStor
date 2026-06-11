/* =====================================
   NETFLIX CINEMATIC PORTFOLIO
===================================== */
/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 1500);
});
/* =========================
   STICKY HEADER
========================= */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
/* =========================
   HERO SLIDER
========================= */
const heroImages = [
    "images/hero/hero1.jpg",
    "images/hero/hero2.jpg",
    "images/hero/hero3.jpg"
];
const heroBg = document.querySelector(".hero-bg");
let heroIndex = 0;
function changeHero() {
    heroIndex++;
    if (heroIndex >= heroImages.length) {
        heroIndex = 0;
    }
    heroBg.style.opacity = 0;
    setTimeout(() => {
        heroBg.src = heroImages[heroIndex];
        heroBg.style.opacity = 1;
    }, 500);
}
setInterval(changeHero, 6000);

/* =========================
   SEARCH PROJECT
========================= */
const searchInput =
    document.querySelector(".search-input");
if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const keyword =
            this.value.toLowerCase();
        document
            .querySelectorAll(".project-card")
            .forEach(card => {
                const title =
                    card.querySelector("h3")
                    .innerText
                    .toLowerCase();
                if (title.includes(keyword)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
    });
}

/* =========================
   COUNTER
========================= */
const counters =
    document.querySelectorAll("[data-counter]");
const counterObserver =
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter =
                    entry.target;
                const target =
                    parseInt(
                        counter.dataset.counter
                    );
                let count = 0;
                const speed =
                    target / 100;
                const update = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText =
                            Math.floor(count);
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText =
                            target;
                    }
                };
                update();
                counterObserver.unobserve(counter);
            }
        });
    });
counters.forEach(counter => {
    counterObserver.observe(counter);
});
/* =========================
   SCROLL REVEAL
========================= */
const reveals =
    document.querySelectorAll(
        ".project-card,.movie-card,.timeline-item,.stat-card"
    );
const revealObserver =
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(
                    "show"
                );
            }
        });
    }, {
        threshold: 0.15
    });
reveals.forEach(item => {
    revealObserver.observe(item);
});
/* =========================
   TIMELINE
========================= */
const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );
timelineItems.forEach(item => {
    item.addEventListener("click", () => {
        timelineItems.forEach(el => {
            el.classList.remove("active");
        });
        item.classList.add("active");
    });
});
/* =========================
   MUSIC PLAYER
========================= */
const music =
    document.getElementById(
        "ambientMusic"
    );
const playBtn =
    document.getElementById(
        "musicPlay"
    );
if (music && playBtn) {
    playBtn.addEventListener(
        "click",
        () => {
            if (music.paused) {
                music.play();
                playBtn.innerHTML =
                    '<i class="fas fa-pause"></i>';
            } else {
                music.pause();
                playBtn.innerHTML =
                    '<i class="fas fa-play"></i>';
            }
        }
    );
}
/* =========================
   BACK TO TOP BUTTON
========================= */
const backTop =
    document.createElement("button");
backTop.id = "backTop";
backTop.innerHTML =
    '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(backTop);
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});
backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* =========================
   HERO PARALLAX
========================= */
const hero =
    document.getElementById("hero");
hero.addEventListener(
    "mousemove",
    (e) => {
        const x =
            (window.innerWidth / 2 - e.pageX) / 50;
        const y =
            (window.innerHeight / 2 - e.pageY) / 50;
        heroBg.style.transform =
            `scale(1.1) translate(${x}px, ${y}px)`;
    }
);
/* =========================
   SMOOTH NAVIGATION
========================= */
document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {
        anchor.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );
    });
/* =========================
   NETFLIX HOVER EFFECT
========================= */
document
    .querySelectorAll(".movie-card")
    .forEach(card => {
        card.addEventListener(
            "mouseenter",
            () => {
                card.style.zIndex = "10";
            }
        );
        card.addEventListener(
            "mouseleave",
            () => {
                card.style.zIndex = "1";
            }
        );
    });
/* =========================
   SAVE LAST VISIT
========================= */
localStorage.setItem(
    "lastVisit",
    new Date().toLocaleString()
);
console.log(
    "Last Visit:",
    localStorage.getItem("lastVisit")
);
const modal =
document.getElementById("infoModal");
const moreBtn =
document.getElementById("moreInfoBtn");
const closeBtn =
document.querySelector(".close-modal");
if(moreBtn){
    moreBtn.addEventListener("click",()=>{
        modal.classList.add("show");
    });
}
if(closeBtn){
    closeBtn.addEventListener("click",()=>{
        modal.classList.remove("show");
    });
}
window.addEventListener("click",(e)=>{
    if(e.target === modal){
        modal.classList.remove("show");
    }
});