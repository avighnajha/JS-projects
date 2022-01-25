const slides = document.querySelectorAll(".slide");
const arrowRight = document.getElementById("right")
const arrowLeft = document.getElementById("left") 
const body = document.body

let n = 0

bgToBody()
function bgToBody(){
    body.style.backgroundImage = slides[n].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide =>{
        slide.classList.remove("active")
        slides[n].classList.add("active")
    })

}
arrowRight.addEventListener("click", ()=>{
    n++
    if(n>4){
        n=0
    }

    setActiveSlide()
    bgToBody()

})
arrowLeft.addEventListener("click", ()=>{
    n--
    if(n<0){
        n=4
    }
    setActiveSlide()
    bgToBody()

})


