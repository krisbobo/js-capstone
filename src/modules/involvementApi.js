import { name, insight, insightBtn  } from './domElements';
export default class Involve {
  static BASE_URL =`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}`;
  static postLike = async(item_id,) => {
    const raw = JSON.stringify({
        "item_id": item_id
      });
      
      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: raw,
        redirect: 'follow'
      };
      // console.log(requestOptions)
      fetch(`${this.BASE_URL}/likes`, requestOptions)
        .then(response => response.text())
        .then(result => {
          if(result==='Created'){
            return true;
          }
          else{
            return false;
          }
        })
        .catch(error => console.log('error', error));
  }
static displayLikes = async() => {
    const response = await fetch(`${this.BASE_URL}/likes`);
    const likes = await response.json();   
    return likes;
  }

//Space for Comment section 
static getComments = async (id) => {
    const requestResponse = await fetch(`${this.BASE_URL}/comments?item_id=${id}`); 
    const comments = await requestResponse.json();
    return comments;
  }

static postComment = async(item_id,username,comment) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "item_id": item_id,
    "username": username,
    "comment": comment
  });
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

    fetch(`${this.BASE_URL}/comments`, requestOptions)
      .then(response => response.text())
      .then(result => {
        if(result==='Created'){
          return true;
        }
        else{
          return false;
        }
      })
      .catch(error => console.log('error', error));
}
}

