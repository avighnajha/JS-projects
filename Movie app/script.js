const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8d2167e9781b0688e0300246b5fcd25d&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=8d2167e9781b0688e0300246b5fcd25d&page=1&query='"
const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")


getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ""
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie     
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML = 
        `
            <img src="${IMG_PATH+movie.poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>
        `
        main.appendChild(movieEl)
    });
}
function getClassByRate(vote){
    if(vote>=8){
        return "green"
    }
    else if(vote>=5){
        return "orange"
    }
    else{
        return "red"
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const serachTerm = search.value

    if(serachTerm && serachTerm!==""){
        getMovies(SEARCH_API + serachTerm)
        search.value = ""
    }
    else{
        window.location.reload()
    }
})