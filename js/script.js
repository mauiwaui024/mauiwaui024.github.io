var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var menu_item = document.querySelectorAll(".menu-item")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("hamburger-active")
    menu.classList.toggle("menu-active")
});

menu_item.forEach(function(item){
    item.addEventListener("click",()=>{
        hamburger.classList.toggle("hamburger-active")
         menu.classList.toggle("menu-active")
    })
})

