alert (`This is a Movie API Project that is still in progress. Type in a movie title and click search to browse a varity of Movies`)
const container = document.querySelector('.container'); 
const error = document.querySelector('.error'); 
const submit = document.querySelector(".Submit")
const title = document.querySelector(".form-control") 
submit.addEventListener('click',getData);

function getData(){
    console.log(title.value)
    let search = title.value
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=fb759178`)
        .then(response =>{
            return response.json(); 
        })
        .then(response => {
            let movies = response.Search 
            container.innerHTML ='';
         createCard(movies)

            
        })
        .catch(err => {
            console.log(err);
            error.innerHTML = err; 
        })
};

function createCard(movies){
    for (let i = 0; i < movies.length -1; i++) {

        const title = document.createElement('h1'); 
        const card = document.createElement('div');
        const poster = document.createElement('img');
  
        title.innerHTML = movies[i].Title;
        card.setAttribute('class',"card")
        poster.setAttribute('src', movies[i].Poster);

        card.appendChild(title)
        card.appendChild(poster)
        container.appendChild(card)
    }
}