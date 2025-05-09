//ScrollTop Buttom
let header = document.querySelector("header");
let up = document.getElementById("up");

window.onscroll = function () {
    if (scrollY > 200) {
        up.style.display = "block"
    } else {
        up.style.display = "none"

    };
};

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    });
};


// حساب نسبة التمرير
// let el = document.querySelector(".scroller")
// // console.log(scroller)
// let hight = document.documentElement.scrollHeight - document.documentElement.clientHeight
// window.addEventListener("scroll", () => {
//     let scrollTop = document.documentElement.scrollTop;
//     el.style.width = `${(scrollTop / hight) * 100}% `
// })

let scrollElement = document.querySelector(".scroller")
let hieght = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    scrollElement.style.width = `${(scrollTop / hieght)*100}%`;
});



//DarkMode & LightMode
const toggleButtom = document.getElementById("toggleButtom")
toggleButtom.addEventListener("change", () => {
    document.body.classList.toggle("darkMode")
})


//Year
let year = new Date();
let yearSpan = document.querySelector(".year");
yearSpan.innerHTML = year.getFullYear();


let ss = document.querySelectorAll(".tools .container .box-progress .progress .percentage")
let progress = document.querySelectorAll(".tools .container .box-progress .aaa")
for(let i = 0; i< progress.length;i++){
    progress[i].style.width = ss[i].innerHTML
}
