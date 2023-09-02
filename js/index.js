


document.getElementById("btn_1").addEventListener("click" , function(){
    document.getElementById("my_div1").style.display = "block"
    document.getElementById("my_div2").style.display = "none" 
    document.getElementById("my_div3").style.display = "none"
    document.getElementById("my_div4").style.display = "none"


    document.getElementById("btn_1").classList.add("active")
    document.getElementById("btn_2").classList.remove("active")
    document.getElementById("btn_3").classList.remove("active")
    document.getElementById("btn_4").classList.remove("active")

})

document.getElementById("btn_2").addEventListener("click" , function(){
    document.getElementById("my_div1").style.display = "none"
    document.getElementById("my_div2").style.display = "block" 
    document.getElementById("my_div3").style.display = "none"
    document.getElementById("my_div4").style.display = "none"


    document.getElementById("btn_1").classList.remove("active")
    document.getElementById("btn_2").classList.add("active")
    document.getElementById("btn_3").classList.remove("active")
    document.getElementById("btn_4").classList.remove("active")

})

document.getElementById("btn_3").addEventListener("click" , function(){
    document.getElementById("my_div1").style.display = "none"
    document.getElementById("my_div2").style.display = "none" 
    document.getElementById("my_div3").style.display = "block"
    document.getElementById("my_div4").style.display = "none"

    document.getElementById("btn_1").classList.remove("active")
    document.getElementById("btn_2").classList.remove("active")
    document.getElementById("btn_3").classList.add("active")
    document.getElementById("btn_4").classList.remove("active")

})

document.getElementById("btn_4").addEventListener("click" , function(){
    document.getElementById("my_div1").style.display = "none"
    document.getElementById("my_div2").style.display = "none" 
    document.getElementById("my_div3").style.display = "none"
    document.getElementById("my_div4").style.display = "block"


    document.getElementById("btn_1").classList.remove("active")
    document.getElementById("btn_2").classList.remove("active")
    document.getElementById("btn_3").classList.remove("active")
    document.getElementById("btn_4").classList.add("active")

})

// document.getElementById("btn_4").addEventListener("click" , function(){
//     document.getElementById("my_div1").style.animation = "none"
//     document.getElementById("my_div2").style.animation = "none" 
//     document.getElementById("my_div3").style.animation = "none"
//     document.getElementById("my_div4").style.animation = "1s"
// })