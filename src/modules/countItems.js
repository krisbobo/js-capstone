export const count = (cards,elCount) =>{
    let i =elCount.innerHTML;
    i= parseInt(i,10) + 1;
    elCount.innerHTML= i;
    return cards.childElementCount;
}