const imgBtn1 = document.querySelector("#btn1")
const imgBtn2 = document.querySelector("#btn2")
const imgBtn3 = document.querySelector("#btn3")
const imgBtn4 = document.querySelector("#btn4")
const imgBtn5 = document.querySelector("#btn5")
const bigImg = document.querySelector(".mainPicture")

imgBtn1.addEventListener("click", ()=>{
    bigImg.src = imgBtn1.src

})

imgBtn2.addEventListener("click", ()=>{
    bigImg.src = imgBtn2.src

})

imgBtn3.addEventListener("click", ()=>{
    bigImg.src = imgBtn3.src

})

imgBtn4.addEventListener("click", ()=>{
    bigImg.src = imgBtn4.src

})

imgBtn5.addEventListener("click", ()=>{
    bigImg.src = imgBtn5.src

})