const pg1 = document.querySelector(".page1");
const pg2 =document.querySelector(".page2");

console.log(pg1);
console.log(pg2);

const page1 =()=>{
    pg1.style.left="0";
    pg2.style.left="1500px";
}

const page2 =()=>{
    pg1.style.left="1500px";
    pg2.style.left="0";
}