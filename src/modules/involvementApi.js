export default class Involve {
  static BASE_URL =`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}`;

  static postLike= async(item_id,likes=1) => {
    const raw = JSON.stringify({
        "item_id": item_id,
        "likes": likes
      });
      
      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`${this.BASE_URL}/likes`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

//Space for Comment section 
static displayLikes= async() =>{
    const response = await fetch(`${this.BASE_URL}/likes`);
    const likes = await response.json();   
    // console.log(likes)
    return likes;
  }
}