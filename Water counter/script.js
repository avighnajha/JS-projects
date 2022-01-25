const smallbottles = document.querySelectorAll(".bottles")
const bigbottle = document.querySelector(".bigbottle")
const litres = document.getElementById("litres")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")


updateBigBottle()

smallbottles.forEach((bottle,idx)=>{
    bottle.addEventListener("click", ()=>{
        highlightcups(idx)
    })
}
);
function highlightcups(idx){
    if(smallbottles[idx].classList.contains("full") && !smallbottles[idx].nextElementSibling.classList.contains("ull")){
        idx--
    }

    smallbottles.forEach((bottle, idx2)=>{
        if(idx2<=idx){
            bottle.classList.add("full")
        }
        else{
            bottle.classList.remove("full")
        }
    })
    updateBigBottle()
}
function updateBigBottle(){
    const fullbottles = document.querySelectorAll(".bottles.full").length
    const totalsmallbottles = smallbottles.length
    
    if (fullbottles===0){
        percentage.style.visibility="hidden"
        percentage.style.height = 0
        litres.innerText = "2L"
    }

    else{
        percentage.style.visibility = "visible"
        percentage.style.height = `${(fullbottles/totalsmallbottles)*200}px`
        percentage.innerText = `${(fullbottles/totalsmallbottles)*100}%`
        litres.innerText = `${2-(fullbottles*0.25)}L`
        
    }

    if(fullbottles === totalsmallbottles){
        remained.style.visibility = "hidden"
        remained.style.height=0
    }else{
        remained.style.visibility ="visible"
    }
}
