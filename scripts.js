const container = document.querySelector('.container'); 
const body = document.querySelector('body'); 
// const title = document.querySelector('h1'); 
// const poster = document.querySelector('.poster'); 
// const rating = document.querySelector('.rating'); 
// const error = document.querySelector('.error'); 

let getData = () => {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=fb759178')
        .then(response =>{
            return response.json(); 
        })
        .then(response => {
            console.log(response); 
            console.log(response.Search);
            let movies = response.Search 
            const title = document.createElement('h1'); 
            container.appendChild(title); 
            title.innerHTML = movies[0].Title;
            const poster = document.createElement('img'); 
            container.appendChild(poster); 
            poster.setAttribute('src', movies[0].Poster);
        })
        .catch(err => {
            console.log(err.Error);
            error.innerHTML = err.Error; 
        })
};

getData(); 


