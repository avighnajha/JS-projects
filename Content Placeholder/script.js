const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const nameEl = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="/Content Placeholder/ralf-skirr-F0kE0fHags0-unsplash.jpg">'
    title.innerHTML = " Lorem ipsum dolor sit amet."
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed officiis enim saepe "
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg">'
    nameEl.innerHTML = "John Doe"
    date.innerHTML = "Oct 08, 2020"
    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bgs_text.forEach(bg => bg.classList.remove("animated-bg-texts"))
}


