import * as el from './domElements.js';
import { commentBtn } from './domElements.js';
import Movies from './movies.js';
import Involve from './involvementApi.js';

export const showMovies= async () => { 
  //This displays all movies from the movie API
  Movies.displayMovie()
    .then((res) => {
        res.forEach(async (res) =>  {
            const name = res.name;
            const url =res.image.original;
            //Calls for Involvement API 
            const likes=await Involve.displayLikes();
            //Match the Movie to the number of like 
            const like= likes.find( (like) => (like.item_id===name));
            el.cardContainer.innerHTML += ` <div class="card">
            <div class="movie-image">
                <img src="${url}" alt="${name}">
            </div>
            <div class="detail">
                <h2 class="like">${name}</h2>
                <span class="like" id="${name}"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>${like.likes} likes</span>
            </div>
            <button onclick="popUp()" class="btn like" id="comment-btn">Comments</button>
            <button class="btn">Reservations</button>
            </div>`;

            document.querySelectorAll('.like').forEach((like) => {
                like.addEventListener('click', () => {
                 // call update function
                });
              });
        });    
    })
    window.popUp = () => {
    Movies.displayMovie().then((res) => {
        res.forEach(res => {
            const pop = document.querySelector('.pop');
            pop.innerHTML = `
            <div class="popup">
                <div class="content">
                    <div class="popup-body">
                        <img src="${res.image.original}" alt="Current movie">
                        <span class="close">&times;</span>                   
                    </div>
                    <div class="movie-type">
                        <p class="name">${res.name}</p>
                        <p class="runtime">Duration: ${res.runtime} mins</p>
                    </div>
                    <div class="movie-details">
                        <p class="summary">${res.summary}</p>
                        <p class="airdate">Airing date: ${res.airdate}</p>
                    </div>
                </div>
            </div>
            `;
            const closeBtn = document.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                window.location.reload();
            });
            })
        });
    }
}