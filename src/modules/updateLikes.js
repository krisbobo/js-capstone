import * as el from './domElements.js';
import Involve from './involvementApi.js';

export const updateLikes = async (name) => { 
  return await Involve.postLike(name,1);
}