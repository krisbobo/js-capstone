export default class Involve {
    static BASE_URL =`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}`;
    constructor(){

    }

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
    static postComment= async(item_id,name,comment) => {
        if (name.trim()!=="" && comment.trim()!==""){
            const raw = JSON.stringify({
            "item_id": item_id,
            "username": name,
            "comment": comment
          });
          
          const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: raw,
            redirect: 'follow'
          };
          
          fetch(`${this.BASE_URL}/comments`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); 
        }
        else{
            return "Please enter valid name and comment. Cannot be empty!"
        }
       
    }

    static displayLikes= async() =>{
        const response = await fetch(`${this.BASE_URL}/likes`);
        const likes = await response.json();   
        // console.log(likes)
        return likes;
    }
    static displayComments= async(id) =>{
        // const response = await fetch(`${this.BASE_URL}/comments?item_id=item_id=The Fourth Hand`);
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rFc4tlCMcxbVijXIn6ie/comments?item_id=The%20Fourth%20Hand`);
        console.log("cmt: ",response);
        const comments = await response.json();
        console.log("Comments:", JSON.stringify(comments))
        return comments;
    }
}