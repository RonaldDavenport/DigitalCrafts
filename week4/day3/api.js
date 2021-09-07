
    const container = document.querySelector(".flex-container");
    const movieCards = document.querySelector(".movieslist");
    const input = document.querySelector(".search-bar");
    const button = document.querySelector(".submit");
    
    

       
 async function fetchData(){
    movieCards.innerHTML=""

     
     let results = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46f216&s=${input.value}`)
     const data = await results.json();
    for( const movieCard of data.Search){
        const div = document.createElement("div")
        div.className = "moviediv"
        const image  = document.createElement("img")
        image.src = movieCard.Poster
        const title = movieCard.Title
        const year = movieCard.Year
        div.append(title)
        div.append(image)
        div.append(year)
        movieCards.append(div)
        container.append(movieCards)
    }
   }
     button.addEventListener("click", () => fetchData());



