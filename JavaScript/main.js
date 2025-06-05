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


let progressSectiom = document.getElementById("tools")
let boxline = document.querySelectorAll(".box-line .line")
console.log(boxline)
window.onscroll = function(){
    if(scrollY >= progressSectiom.offsetTop - 250){
        boxline.forEach(line => {
            line.style.width = line.dataset.prog
        });
    }
}

