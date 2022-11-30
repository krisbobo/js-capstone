export default class Movies {
    static BASE_URL ='https://api.tvmaze.com/seasons/1/episodes';
    constructor(){

    }

    static displayMovie= async() =>{
        const response = await fetch(this.BASE_URL);
        const movies = await response.json();
        return movies;
    }
}