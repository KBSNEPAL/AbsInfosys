const icons = document.querySelector(".icons");
const header = document.querySelector(".header");
const check = ()=>{
   /* alert("function is running");*/
    header.classList.toggle("active");
}

icons.addEventListener("click", ()=> check());

const page1 = document.querySelector(".page1");
const page2 =document.querySelector(".page2");

console.log(page1);
console.log(page2);