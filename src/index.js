import "./../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "./../node_modules/@fortawesome/fontawesome-free/css/brands.css";
import "./../node_modules/@fortawesome/fontawesome-free/css/solid.css";
import "./../src/styles.css";


const dropDownBtn = document.getElementById("drop-down-btn");
const dropDownMenu = document.getElementById("drop-down-menu");
const menuNav = document.getElementById("menu-nav");
const carouselBtns = [...document.getElementsByClassName("carousel-btn")];
const carouselImgs = document.getElementsByClassName("slide");
let menuActive = false;

let currentIndex = 0;

const btnFunc = function UpdateImage(pBtnVal)
{
    let value = parseInt(pBtnVal);

    carouselImgs[currentIndex].classList.remove("active-img");

    if(currentIndex == 0 && value < 0) currentIndex = carouselImgs.length;
    else if(currentIndex == carouselImgs.length -1 && value > 0) currentIndex = -1;
        
    currentIndex += value;

    //activate new img
    carouselImgs[currentIndex].classList.add("active-img");
}

setInterval(() => btnFunc(1), 1000*5);

carouselBtns.forEach((btn) => {
    btn.addEventListener("click", () =>
    {
        btnFunc(btn.dataset.value);
    } 
)});

dropDownBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("hidden");

    menuActive = !dropDownMenu.classList.contains("hidden");
});

dropDownMenu.addEventListener("transitionstart", (e) => {
    if(menuActive) menuNav.classList.remove("fully-hide");
});

dropDownMenu.addEventListener("transitionend", (e) => {
    if(!menuActive) menuNav.classList.add("fully-hide");    
});

