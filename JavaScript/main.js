let header = document.querySelector("header")
let up = document.getElementById("up")

window.onscroll = function(){
    if(scrollY > 200){
        up.style.display = "block"
    }else{
        up.style.display = "none"

    }
}

up.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior: "smooth",
        
    })
}
