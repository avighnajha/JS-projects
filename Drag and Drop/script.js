// const empties = document.querySelectorAll(".empty")
// const fill = document.querySelector(".fill")


// fill.addEventListener("dragstart", dragStart)
// fill.addEventListener("dragend", dragEnd)


// function dragStart(){
//     fill.classList.add("hold")
// }
// function dragEnd(){
//     fill.classList.remove("hold")
    
// }
// function dragOver(empty){
//     empty.style.background = "green"
// }
// function dragEnter(){
    
// }
// function dragLeave(){
    
// }
// function dragDrop(){
    
// }

for(i = 0; i<100 ; i++){
    
    
    if(Number.isInteger(i/3) && Number.isInteger(i/5)){
        console.log("FizzBuzz")
    }

    else if (Number.isInteger(i/3)){
        console.log("Fizz");
    } 
    
    else if (Number.isInteger(i/5)){
        console.log("Buzz");
    } 
    
    else {
        console.log(i);
    }

}
