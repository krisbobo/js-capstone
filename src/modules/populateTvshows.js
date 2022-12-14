import * as el from './domElements.js';
import TVShows from './tvsShows';
import Involve from './involvementApi.js';
import {updateLikes} from './updateLikes';
import {count} from './countItems';

export const showTvShows= async () => { 
//This displays all tv-shows from the base API
TVShows.displayTvShow()
.then((res) => {
	res.forEach(async (res) =>  {
		console.log(res.name)
		const name = res.name;
		const url =res.image.original;
		//Calls for Involvement API 
		const likes=await Involve.displayLikes() || 0;
		//Match the Movie to the number of like 
		const like= likes.find( (like) => (like.item_id===name));
		el.tvCardContainer.innerHTML += ` <div class="card">
		<div class="movie-image">
				<img src="${url}" alt="${name}">
		</div>
		<div class="detail">
			<h2 class="like">${name}</h2>
			<span class="like" id="${name}"><svg  xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
					<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
			</svg><b>${like.likes}</b> likes</span>
		</div>
		<div class="btn-container">
			<button class="btn like">Comments</button>
			<button class="btn">Reservations</button></di>
		</div>`;
		count(el.tvCardContainer,el.count);
		document.querySelectorAll('.like').forEach((like) => {
			like.addEventListener('click', async (e) => {
				// call update function
			//await updateLikes(e.target.parentNode)
			
			});
		});
	});    
})
}