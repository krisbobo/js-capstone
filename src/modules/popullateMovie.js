import * as el from './domElements.js';
import Movies from './movies.js';
import Involve from './involvementApi.js';
import {updateLikes} from './updateLikes';
import {count} from './countItems';

const pop = document.querySelector('.pop');
const currentDate = new Date();
const cDay = currentDate.getDate();
const cMonth = currentDate.getMonth() + 1;
const cYear = currentDate.getFullYear();

export const showMovies=  () => { 
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
        <span class="like" id="${name}"><svg  xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg><b id=${like.likes}>${like.likes}</b> likes</span>
      </div>
      <div class="btn-container">
        <button onclick="popUp(${res.id},'${name}')" class="btn like" id="${name}">Comments</button>
        <button class="btn">Reservations</button></di>
      </div>`;
      count(el.cardContainer,el.count);
      
      document.querySelectorAll('.like').forEach((like) => {
      like.addEventListener('click', async (e) => {
      // call update function
      const i =await updateLikes(e.target.parentNode);       
      if(i!==0){
        like.children[1].innerHTML= parseInt(i,10) +1;
      }
      });
    });
        
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('load',  count);
    });
  })
  
  })
  .catch ((err) => {
    console.log(err)    
  })
}

window.popUp = async (id,name) => {
let commentList = "";
const comments = await Involve.getComments(name);
    if(comments.length > 0) {
        comments.forEach((com) => {
        commentList += `<div> <p>${com.creation_date}<span>${cDay}/ ${cMonth}/ ${cYear}</span></p>
        <p>${com.username}:</p>
        <p>${com.comment}</p></div>`; 
        return commentList;
    });
}
commentList = commentList ? commentList : "Be the first to comment";

pop.classList.add('visible'); 


Movies.displayMovie()
.then((res) => {
  res.forEach(res => {
      if(res.id === id){
  
      pop.innerHTML = `<div class="content">
      <div class="popup-body">
      <h2 class="name">${res.name}</h2>
      <span class="close">&times;</span>
      </div>
      <div class="poster">
      <img src="${res.image.original}" alt="${res.name}">
      </div>
      <div class="movie-type">
          ${res.summary}
      </div>
      <div class="movie-details">
          <p class="runtime">Duration: ${res.runtime} mins</p>
          <p class="airdate">Airing date: ${res.airdate}</p>
      </div>
      <div class="comments-container">  ${commentList} </div>
      <div class="container2">
      <h2 class="form-title">Add a comment</h2>
      <form id="form">
          <input type="text" id="username" placeholder="Your name" required>
          <textarea type="text" id="comment" col="30" placeholder="Your insights" required></textarea>
      
          <button type='submit' id=${res.name} class="form-btn">Comment</button>
      </form>
      </div>`;
      
      document.querySelectorAll('.form-btn').forEach((formBtn) => {
        formBtn.addEventListener('click', async (e) =>{
          e.preventDefault;
          const id =formBtn.id;
          console.log(id)
          const parent = formBtn.closest('form');
          const name = parent.children[0].value;
          const feedback = parent.children[1].value;
          const small = parent.children[1];
          if(name.trim()!=="" && feedback.trim()!==""){
            Involve.postComment(id, name, feedback);
            small.innerHTML="Thanks for your comment";
            form.reset();
          }
          else{
            small.innerHTML="Please fill out the form, name and comment cannot be empty!"
          }
        })
      })

      //Call PostComment on form submission 
      // postComment(id)
      //console.log( "Post Comment ",  Involve.postComment(name, "chris", "awesome film"));
      
      const closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', () => {
          window.location.reload();
          pop.classList.remove('visible');
      });
      }
      
      })
  })
  .catch((err) =>{
    console.log(err)
  })
}