const wrapper document.querySelector(".wrapper");

const question document.querySelector(".question");

const gif document.querySelector(".gif"); const yesBtn = document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {

question. InnerHTML "Aaaaa, I like you too";

gif.src

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noßtn.addEventListener("mouseover", (){

const noßtnRect noßtn.getBoundingClientRect();

const maxx window. Innerwidth noßtnRect.width;

const maxy window.innerHeight noBtnRect.height;

const randomX = Math.floor(Math.random() maxx);

const randomY = Math.floor(Math.random() maxY);

noBtn.style.left = randomX+"px"; noßtn.style.top = randomy "px"; });