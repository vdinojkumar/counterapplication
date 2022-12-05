let countEl=document.getElementById("count-el")
let prveEl= document.getElementById("prev-el")
let count =0

function increment(){
    count += 1
    countEl.innerText=count
}

function save(){
    prveEl.textContent += count+" - "

    count=0
    countEl.textContent=count
}

