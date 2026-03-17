document.addEventListener("DOMContentLoaded", function(){

/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 200;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navItems.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});


/* =========================
   GALLERY FILTER
========================= */

const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

btn.addEventListener("click", () => {

document.querySelector(".filter-btn.active").classList.remove("active");
btn.classList.add("active");

const filter = btn.getAttribute("data-filter");

galleryItems.forEach(item => {

if(filter === "all" || item.classList.contains(filter)){
item.style.display = "block";
}
else{
item.style.display = "none";
}

});

});

});


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

const lightbox = document.createElement("div");

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,0.9)";
lightbox.style.display = "flex";
lightbox.style.alignItems = "center";
lightbox.style.justifyContent = "center";
lightbox.style.cursor = "pointer";

const bigImg = document.createElement("img");

bigImg.src = img.src;
bigImg.style.maxWidth = "90%";
bigImg.style.borderRadius = "10px";

lightbox.appendChild(bigImg);

lightbox.addEventListener("click", () => {
lightbox.remove();
});

document.body.appendChild(lightbox);

});

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

const target = +counter.getAttribute("data-target");
let count = 0;
const speed = target / 100;

const update = () => {

count += speed;

if(count < target){
counter.innerText = Math.floor(count);
requestAnimationFrame(update);
}
else{
counter.innerText = target + "+";
}

};

update();

};


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry => {

if(entry.isIntersecting){

runCounter(entry.target);
observer.unobserve(entry.target);

}

});

},{
threshold:0.5
});

counters.forEach(counter=>{
observer.observe(counter);
});

});