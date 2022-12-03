import Involve from './involvementApi.js';

export const updateLikes = async (e) => { 
  
  if(e.children[1].nodeName==='B'){
    let count= e.children[1].innerHTML;
    Involve.postLike(e.id)
      count = parseInt(count, 10);
    return count;
  } 
  return 0;
}