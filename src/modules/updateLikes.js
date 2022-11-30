import * as el from './domElements.js';
import Involve from './involvementApi.js';

export const updateLikes =  (name) => { 
    const status =Involve.postLike(name,1);
    console.log("updateLikes: ",status );
    return status;
}