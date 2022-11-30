import * as el from './domElements.js';
import Involve from './involvementApi.js';

export const updateLikes = async (name,e) => { 
  const like = await Involve.postLike(name);
  if(e.children[1].nodeName==='B'){
    let count= e.children[1].innerHTML;
    count.trim();
    e.children[1].innerHTML=parseInt(count,10)+1;
  }
 

  
  
}