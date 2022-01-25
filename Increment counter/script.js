const count = document.querySelectorAll(".count")


count.forEach(label=>{
    label.innerText = "0"
    const updateLabel = ()=>{
        const target = +label.getAttribute("data-target")
        const c = +label.innerText
        const increment = target/200
        if(c < target) {
            label.innerText=`${Math.ceil(c + increment)}`
            setTimeout(updateLabel, 1)
        }
        else{
            label.innerText = target
        }
    }
    updateLabel()
})


