let buttons = [5]
buttons[0] = document.querySelector("#btn1")

buttons[1] = document.querySelector("#btn2")

buttons[2] = document.querySelector("#btn3")

buttons[3] = document.querySelector("#btn4")

buttons[4] = document.querySelector("#btn5")

const bigImg = document.querySelector(".mainPicture")

buttons.forEach ((element) => {element.addEventListener("click", ()=>{
    bigImg.src = element.src
    
})});

