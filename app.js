// document.querySelector(".hamburger-menu").
// addEventListener('click', () => {
//     document.querySelector(".container").classList.toggle("change");
// });


const btn = document.querySelector(".hamburger-menu");
const cont = document.querySelector(".container");

btn.addEventListener('click', function () {
    cont.classList.toggle("change");
});

//drugi nacin pisanja skripte bez const

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});