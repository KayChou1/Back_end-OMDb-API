const container = document.querySelector('.container')
const title = document.querySelector('.title');
const poster = document.querySelector('.poster');
const rating = document.querySelector('.rating');

let movie = 'ga'

console.log("Bye World")

fetch("https://www.omdbapi.com/?i=tt3896198&apikey=fb759178")
.then(response =>{
    return  response.json();
})
.then(response =>{
    console.log(response)
    console.log(response.Title)
    title.innerHTML = response.Title;
    poster.setAttribute('src', response.Poster)
    rating.innerHTML = response.Rated;
   
})
.catch(error => {
    console.log(error);
})