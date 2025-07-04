const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const menu = document.querySelector(".menu")

menuBtn.addEventListener("click", ()=>{
    menu.classList.add("menu-opened")

})

closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("menu-opened")
})