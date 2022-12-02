
import Movies from './movies.js';
import Involve from './involvementApi.js';

const pop = document.querySelector('.pop');
const currentDate = new Date();
const cDay = currentDate.getDate();
const cMonth = currentDate.getMonth() + 1;
const cYear = currentDate.getFullYear();

export default window.popUp = async (id,name) => {
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
          
              <button type='submit' id='${res.name}' class="form-btn">Comment</button>
          </form>
          </div>`;
          const commentContainer = document.querySelector('comments-container');
          
          document.querySelectorAll('.form-btn').forEach((formBtn) => {
            formBtn.addEventListener('click', async (e) =>{
              e.preventDefault;
              const id =formBtn.id;
              console.log(id)
              const parent = formBtn.closest('form');
              const name = parent.children[0].value;
              const feedback = parent.children[1].value;
              const small = parent.children[2];
              if(name.trim()!=="" && feedback.trim()!==""){
                Involve.postComment(id, name, feedback);
              
                setInterval(()=> {parent.innerHTML="Thank you for your comment"},3000)
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