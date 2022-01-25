const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const toggle = document.querySelector(".toggle")
const dateEl = document.querySelector(".date")
const timeEl = document.querySelector(".time")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


toggle.addEventListener("click", (e)=>{
    const html = document.querySelector("html")
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "Dark Mode"
    }
    else {
        html.classList.add("dark")
        e.target.innerHTML = "Light Mode"
    }
})

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours%12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const date = time.getDate()

    timeEl.innerHTML = `${hoursForClock}:${minutes}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    
    hour.style.transform = `translate(-50%, -100%) rotate(${(hours*360)/24}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${(minutes*360)/60}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${(seconds*360)/60}deg)`
    
}
setInterval(()=>{
    setTime()
}, 1000)