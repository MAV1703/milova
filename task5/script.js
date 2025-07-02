let buttons = []
const imgBtn1 = document.querySelector("#btn1")
buttons.push(imgBtn1)
const imgBtn2 = document.querySelector("#btn2")
buttons.push(imgBtn2)
const imgBtn3 = document.querySelector("#btn3")
buttons.push(imgBtn3)
const imgBtn4 = document.querySelector("#btn4")
buttons.push(imgBtn4)
const imgBtn5 = document.querySelector("#btn5")
buttons.push(imgBtn5)
const bigImg = document.querySelector(".mainPicture")

buttons.forEach ((element) => {element.addEventListener("click", ()=>{
    bigImg.src = element.src
    
})});

