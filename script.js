// typing effect
const text = "HAKAM PROFIL 😈";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// animasi skill saat discroll
const fills = document.querySelectorAll(".fill");

function animateSkill(){
    fills.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight){
            el.style.width = el.getAttribute("data-width");
        }
    });
}

// LOADING SCREEN HILANG SETELAH PAGE LOAD
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000); // durasi loading (bisa kamu ubah)
});

window.addEventListener("scroll", animateSkill);

// tahun otomatis
document.getElementById("year").innerHTML = new Date().getFullYear();