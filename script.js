let incBut = document.getElementById("inc-but")
let h2 = document.getElementById("h2")
let count = 0
let savBut = document.getElementById("sav-but")
let prev = document.getElementById("prev")

incBut.addEventListener("click",function(){
   count += 1
    h2.innerText = count
})

savBut.addEventListener("click",function(){
let countstr = count + "-"
prev.innerHTML += countstr
count = 0
h2.textContent = 0
})