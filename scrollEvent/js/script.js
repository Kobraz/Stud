const nav = document.querySelector("nav");

function handleScroll() {
    console.log(window.scrollY);

    const scrolledY = window.scrollY;

    if (scrolledY > 50) {
        document.body.classList.add("scrolled");
        nav.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
        nav.classList.remove("scrolled");
    }
}

// window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
