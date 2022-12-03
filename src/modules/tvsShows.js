export default class TVShows {
    static BASE_URL ='https://api.tvmaze.com/shows/1/seasons';
    
    static displayTvShow= async() =>{
        const response = await fetch(this.BASE_URL);
        const tvShows = await response.json();
        return tvShows;
    }
}