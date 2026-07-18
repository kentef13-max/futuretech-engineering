function welcome() {
    alert("welcome to FutureTech Engineering!");
}
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
const fadeElements = document.querySelectorAll(".fade-in");

function reveal() {
    fadeElements.forEach(function (element) {
        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);

reveal();