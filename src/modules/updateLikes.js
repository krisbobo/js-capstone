import Involve from './involvementApi.js';

export const updateLikes = async (e) => { 
  await Involve.postLike(e.id);
  if(e.children[1].nodeName==='B'){
    let count= e.children[1].innerHTML;
    count.trim();
    e.children[1].innerHTML=parseInt(count,10)+1;
  }  
}