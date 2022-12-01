import * as el from './domElements';

export const count = () =>{
    const i = el.count.innerHTML;
    el.count.innerHTML= parseInt(i,10)+1;
}