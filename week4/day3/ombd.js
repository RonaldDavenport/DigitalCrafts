const allMovies = document.querySelector(".allMovies")
async function getMovies(){   
const container = document.querySelector(".flex-container")
const second_container = document.querySelector(".movieslist")
const searchbarInput = document.querySelector(".search-bar")
const submitbutton = document.querySelector(".submit")
const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ea46f216");
const jsonmovies = await movies.json();
// const URL = (` http://www.omdbapi.com/?i=tt3896198&apikey=ea46f216&s=${searchbarInput}`);
// const response = await fetch(URL);
// const moviesInfo = await response.json();



 async function fetchData(){

let  results = await fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=ea46f216&s=${searchbarInput.value}`);
const data = await results.json();
const movieCard = data.search.title
console.log(movieCard)
    // submitbutton.addEventListener("click" ,() => fetchData(url));
}
submitbutton.addEventListener("click" ,() => fetchData(), getMovies())
// submitbutton.addEventListener("click" ,() => fetchData(url));
// function showMovies(data){
//     data.forEach(movies =>{
//         const movieE1 = document.createElement("div")
//         movieE1.classList.add('movie')
//         movieE1.innerHTML = data
//     })
    
}
// }


// let keys = [];
// for(let search in moviesInfo){
//     if (moviesInfo.hasOwnProperty(search)) keys.push(search)



// for (let i = 0; i < keys.length &&  i < 600; i++){
//     console.log(keys[i], moviesInfo[keys[i]]);
//     const singleCardData = moviesInfo[search]
//     const cards = document.createElement("div");
//     const cardName = document.createElement("h4");
//     const cardImg = document.createElement("img");
//     // console.log(search, moviesInfo[search])
//     cardName.innerHTML = singleCardData.title
//     console.log(cardName.title)
//     container.append(cardName)
// }
// }

// }

// for (let index = 0; index < moviesInfo[search[0]].title.length; index++){
//     const singleCardData = moviesInfo[search[0]].title[index]
//     const cards = document.createElement("div");
//     cards.className="cards";
//     const cardName = document.createElement("h4");
//     const cardImg = document.createElement("img");
//     cardImg.src=(singleCardData.poster)
//     cardName.innerHTML = singleCardData.name;
//     cards.append(cardImg,cardName);
//     cardContainer.append(cards);



// submitbutton.addEventListener("click" ,() => getMovies());






//   console.log(mo


//   console.log(moviesInfo)
// for(let index = 0; index < moviesInfo.length; index++){
// const movieIndex = moviesInfo[index]
// console.log(movieIndex)


// }

// Object.keys(moviesInfo).forEach(title => { console.log(moviesInfo[title])});
// for (let key in moviesInfo) {
//     console.log(key, moviesInfo[t]);
//   }
// const movieTitle = document.createElement("h4")
// movieTitle.innerHTML = moviesInfo
// second_container.append(movieTitle)
// container.append(second_container)


// //   for(const movie of URL)
// //   console.log(movie.response)
// }
// for(const movie of URL)
//   console.log(movie.response)
// submitbutton.addEventListener("click" ,() => fetchData());
// fetchData();


// }
getMovies()
