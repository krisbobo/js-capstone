export default class Movies {
    static BASE_URL ='https://api.tvmaze.com/seasons/1/episodes';
    constructor(){

    }

    static displayMovie= async() =>{
        const response = await fetch(this.BASE_URL);
        console.log(response);
        const movies = await response.json();
        console.log("Movies:", JSON.stringify(movies))
        return movies;
        // const title="The Walking Dead";
        // return title;
    }
}